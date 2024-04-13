// import required modules from Node.js library
const readline = require('readline'); // provides interface for reading input from command line
const fs = require('fs') // provides functions for interacting with file system

// create interface for reading input and writing output from the console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ask the user for their input
rl.question('ccwc ', (input) => {

  // define the command options
  const getBytes = '-c';
  const getLineNo = '-l';
  const getWordNo = '-w';

  // split the input by whitespace to extract the command and file name
  const [command, fileName] = input.trim().split(/\s+/);

  // if command option is getBytes and file exists...
  if (command === getBytes && fileName && fs.existsSync(fileName)) {
    // get bytes in the chosen file
    fs.stat(fileName, (err, stats) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log(`${stats.size} ${fileName}`);
    });
    // if command options is getLineNo, and file exists...
  } else if (command === getLineNo && fileName && fs.existsSync(fileName)) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        // split file contents into array of lines
        const lines = data.split(/\r?\n/);
        // get no. of lines
        const noOfLines = lines.length;
        // output no. of lines
        console.log(noOfLines, `${fileName}`);
    });
     // if command option is getWordNo, and file exists...
  } else if (command === getWordNo && fileName && fs.existsSync(fileName)) {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        // split file contents into array of words
        const words = data.split(/\s+/);
        // get no. of words
        const noOfWords = words.length;
        // output no. of words
        console.log(noOfWords, `${fileName}`);
    });
  } else {
    console.log('Input does not match the expected format or the file does not exist. Nothing will happen.');
  }

  // close the readline interface
  rl.close();
});


