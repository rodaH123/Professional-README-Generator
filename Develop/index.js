// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

//Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
         type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'rodaH123',
        validate: function(answer) {
            if(answer.length < 1){
            return console.log("A valid GitHub username is required.");
            }
            return true;
        }
      },

    {   type: 'input',
        message: "what is the name of your Github repo?",
        name:'repo',
        default: 'readme-generator',
        validate: function(answer) {
            if (answer.length<1) {
                return console.log("A valid Github repo is required for a badge.");
            }
            return true;

         }
        },
        {
         type: 'input',
         name:'projectTitle',
         message:'What is your project title?'
    },
    {
        type:  'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function(answer) {
            if (answer.lenght < 1) {
                return console.log(" A valid project is required");
            }
            return true;
        }
    }, 
    {
        type: 'input',
        message: "What are the installation instructions?",
        name: 'installation'
    },

    {   type:'input',
        message "Provide examples and instructions of how your project will be used in the Usage section",
        name: 'usage'
    },

    {
         type:'input',
         message:"If applicable, provide guidelines on how other individulas can contribut to this work",
         name:'contributing'
    },

    { 
        type:'input',
        message:"If applicable, provide any tests written for your applicaiton",
        name: 'tests'
   },
   {
       type: 'list',
       message: "Choose a license for your project.",
       choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense' ],
       name: 'license'
   }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, err => {
        if(err) {
            return console.log(err);
        }

        console.log("Sucess! Your README.md file has been generated")
    });
}




// TODO: Create a function to initialize app
const writeFileAsync = util.promisify(writeToFile);
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Thank you for your responses! Fetching your GitHub data next...");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log("Your GitHub user info: ", userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("Generating your README next...")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
        }
    };


// Function call to initialize app
init();
