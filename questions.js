const inquirer = require('inquirer');


const managerQuestions = [
    {
        type: 'input',
        message: 'What is your Manager name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is your Manager Id number?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is your Manager email address?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is your Manager office number?',
        name: 'managerOfficeNumber',
    },
]


const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your Intern name?',
        name: 'engineerName',
    },
    {
        type: 'input',
        message: 'What is your Engineer Id number?',
        name: 'engineerId',
    },
    {
        type: 'input',
        message: 'What is your Engineer email address?',
        name: 'engineerEmail',
    },
    {
        type: 'input',
        message: 'What is your Engineer Github username?',
        name: 'engineerGithub',
    },
]


const InternQuestions = [
    {
        type: 'input',
        message: 'What is your Intern name?',
        name: 'internName',
    },
    {
        type: 'input',
        message: 'What is your Intern Id number?',
        name: 'internId',
    },
    {
        type: 'input',
        message: 'What is your Intern email address?',
        name: 'internEmail',
    },
    {
        type: 'input',
        message: 'What school does your Intern currently attend?',
        name: 'internSchool',
    },
]



module.exports