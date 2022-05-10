// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const fs = require('fs');

//Internal modules


// TODO: Create an array of questions for user input
const questions = [
    {
         type: 'input',
        message: "What is your GitHub username?',
        name: 'username',
        default: 'rodaH123',
        validate: function(answer) {
            if(answer.length < 1){
            return console.log("A valid GitHub username is required.");
            }
            return true;
        }
}

    {
       type: 'input',
       name:'projectTitle',
       message:'What is your project title?'
    },
    {
        type:  'input',
        name: 'projectDescription',
        message: 'What is your project Description?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the installation instructions?'
    },

    {   type: 'input',
        name: 'usage information',
        message: 'What is your usage information?'

    },

    { type:'list'
      name: 'What license are you using for your project',
      choices: 
    
    },

    { type: 'input' 
      name: 'test',
      message: 'What are the test intructions?'
   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers)=> {
        console.log('The title is'+ answers.projectTitle)
        })
 
}

// Function call to initialize app
init();
