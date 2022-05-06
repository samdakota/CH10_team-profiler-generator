const Employee = require('./Employee');
const inquirer = require('inquirer')

class Engineer extends Employee {
    Engineer(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
};

const addEngineer = () => {
    inquirer
        .prompt ([
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
            name: 'school',
            message: "What is the engineer's github user name?",
        }
    ])
    .then()
};

module.exports = Engineer, addEngineer();