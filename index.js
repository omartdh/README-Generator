// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the project name?",
    name: "title"
},
{
    type: "input",
    message: 'Descripe your project details?',
    name: "description"
},
{
    type: "input",
    message: 'What are the installation instructions for this prpject?',
    name: "installation"
},
{
    type: "input",
    message: 'How would you like your application to be used?',
    name: "usage"
},
{
    type: "input",
    message: "Who contributed on this project?",
    name: "contribution"
},
{
    type: "input",
    message: "What are the test instructions?",
    name: "test"
},
{
    type: "checkbox",
    message: "Select a license",
    choices: [
        "Apache",
        "MIT",
        "ISC",
        "GNU PLv3",
    ],
    name: "license"
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email"
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(fileName);
        console.log(data);
        if (err) {
            return console.log(err)
        } else {
            console.log('Success!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
   inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data);
        })
}

// Function call to initialize app
init();



