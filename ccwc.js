// import required modules from Node.js library
const readline = require('readline'); // provides interface for reading input from command line
const fs = require('fs'); // provides functions for interacting with file system

// create interface for reading input and writing output from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function to handle getBytes command
function getBytes(fileName) {
    fs.stat(fileName, (err, stats) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(`${stats.size} ${fileName}`);
    });
}

// function to handle getLineNo command
function getLineNo(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const lines = data.split(/\r?\n/);
        console.log(lines.length, fileName);
    });
}

// function to handle getWordNo command
function getWordNo(fileName) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        const words = data.split(/\s+/);
        console.log(words.length, fileName);
    });
}

// ask the user for their input
rl.question('ccwc', (input) => {

    const commands = {
        '-c': getBytes,
        '-l': getLineNo,
        '-w': getWordNo
    };

    // split the input by whitespace to extract the command and file name
    const [command, fileName] = input.trim().split(/\s+/);

    // if command option is valid and file exists...
    if (commands[command] && fileName && fs.existsSync(fileName)) {
        commands[command](fileName);
    } else {
        console.log('Input does not match the expected format or the file does not exist. Nothing will happen.');
    }

    // close the readline interface
    rl.close();
});
