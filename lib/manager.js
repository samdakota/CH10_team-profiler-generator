const Employee = require('./Employee');
const inquirer = require('inquirer')

class Manager extends Employee {
    Manager(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
};

const addManager = () => {
    inquirer
        .prompt ([
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
            name: 'school',
            message: "What is the manager's office number?",
        }
    ])
    .then()
};

module.exports = Manager, addManager();