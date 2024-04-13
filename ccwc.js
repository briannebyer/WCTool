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

  // define the command format
  const expectedFormat = '-c';

  // split the input by whitespace to extract the command and file name
  const [command, fileName] = input.trim().split(/\s+/);

  // check if the input matches the expected format and the file exists
  if (command === expectedFormat && fileName && fs.existsSync(fileName)) {
    console.log(`Input matches the expected format and ${fileName} exists.`);
    // perform some action with the file (e.g., process the text file)
  } else {
    console.log('Input does not match the expected format or the file does not exist. Nothing will happen.');
  }

  // close the readline interface
  rl.close();
});


