// Imports
const inquirer = require('inquirer');

const fs = require('fs');

const generateHtml = require("./util/generateHtml");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const {starterQuestion, managerQuestions, engineerQuestions, internQuestions} = require('./questions');

// declaring variables
const teamArray = [];



// define functions
async function init() {
    const {choice} = await inquirer.prompt(starterQuestion);
    switch (choice) {
        case "Manager":
            console.log("Manager selected!")
            return addManager();
        case "Engineer":
            console.log("Engineer selected!")
            return addEngineer();
        case "Intern":
            console.log("Intern selected!")
            return addIntern();
        case "Build Team":
            console.log("Thank you for your input! Please wait while we create your file.")
            return buildTeam();
        default:
            break;
    }
}

init();


async function addManager() {
    const {name, id, email, officeNumber} = await inquirer.prompt(managerQuestions);
    const manager = new Manager(name, id, email, officeNumber)
    teamArray.push(manager);
    init();
}

async function addEngineer() {
    const {name, id, email, github} = await inquirer.prompt(engineerQuestions);
    const engineer = new Engineer(name, id, email, github)
    teamArray.push(engineer);
    init();
}

async function addIntern() {
    const {name, id, email, school} = await inquirer.prompt(internQuestions);
    const intern = new Intern(name, id, email, school)
    teamArray.push(intern);
    init();
}

function buildTeam() {
    fs.writeFileSync('./output/index.html', generateHtml(teamArray))
}