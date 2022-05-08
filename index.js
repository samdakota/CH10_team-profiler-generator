const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

let teamArray = [];
let employeeIdArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?", 
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?", 
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee id?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email address?",
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's github user name?",
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?", 
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's id number?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email address?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
    }
];

// function to create team
function addEmployee() {
    inquirer
        .prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Who would you like to add to the team?",
            choices: ['Manager', 'Engineer', 'Intern', 'Team complete'] 
        }
    ])
    .then((answers) => {
        switch(answers.role) {
            case 'Manager':
                addManager()
                break;
            case 'Engineer': 
                addEngineer()
                break;
            case 'Intern': 
                addIntern()
                break;
            default: 
                createTeam()
            };
        }
    );
};

function addManager() {
    inquirer
    .prompt(managerQuestions)
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamArray.push(manager);
        employeeIdArray.push(answers.id);
        addEmployee();
    })
    .catch(err => {
        console.log(err)
    })
};

function addEngineer() {
    inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamArray.push(engineer);
        employeeIdArray.push(answers.id);
        addEmployee();
    })
    .catch(err => {
        console.log(err)
    })
}

function addIntern() {
    inquirer
    .prompt(internQuestions)
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamArray.push(intern);
        employeeIdArray.push(answers.id);
        addEmployee();
    })
    .catch(err => {
        console.log(err)
    })
}

function createTeam() {
    fs.writeFileSync('./dist/index.html', generateHTML(teamArray))
}

// call to initialize app
addEmployee()