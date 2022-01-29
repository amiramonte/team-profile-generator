// Imports
const inquirer = require('inquirer');

const fs = require('fs');

const generateHtml = require("./util/generateHtml");

const employee = require('./lib/Employee');
const manager = require('./lib/Manager');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');

const questions = require('./questions');

const starterQuestion = [
    {
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern', 'None'],
        message: 'What type of employee would you like to add?',
        name: 'choice'
    }
]

async function init() {
    const response = await inquirer.prompt(starterQuestion);
    console.log(response);
    switch (response.choice) {
        case "Manager":
            console.log("Manager selected!")
            // execute manager questions
            // push information to large array that is going to be pushed into the generateHtml file
            init();
            break;
        case "Engineer":
            console.log("Engineer selected!")
            // execute engineer quesions
            // push information to large array that is going to be pushed into the generateHtml file
            init();
            break;
        case "Intern":
            console.log("Intern selected!")
            // execute intern questions
            // push information to large array that is going to be pushed into the generateHtml file
            init();
            break;
        case "None":
            console.log("Thank you for your input! Please wait while we create your file.")
            // take information entered into array from above choices and push to generateHtml file
            // fs.writefile for new html page and send to 'OUTPUT' folder in directory
        default:
            
            break;
    }
}

init();