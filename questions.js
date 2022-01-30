const starterQuestion = [
    {
        type: 'list',
        choices: ['Manager', 'Engineer', 'Intern', 'Build Team'],
        message: 'What type of employee would you like to add?',
        name: 'choice'
    }
]


const managerQuestions = [
    {
        type: 'input',
        message: 'What is your Manager name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Manager Id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your Manager email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Manager office number?',
        name: 'officeNumber',
    },
]


const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your Engineer name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Engineer Id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your Engineer email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your Engineer Github username?',
        name: 'github',
    },
]


const internQuestions = [
    {
        type: 'input',
        message: 'What is your Intern name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your Intern Id number?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your Intern email address?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What school does your Intern currently attend?',
        name: 'school',
    },
]



module.exports = {
    starterQuestion,
    managerQuestions,
    engineerQuestions,
    internQuestions,
}