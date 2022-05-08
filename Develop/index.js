// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
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
        message: 'What is your installation?'
    },

    {   type: 'input',
        name: 'usage information',
        message: 'What is your usage information?'

    }
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
