const Employee = require('./Employee');
const inquirer = require('inquirer')

class Intern extends Employee {
    Intern(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
};

const addIntern = () => {
    inquirer
        .prompt ([
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
    ])
    .then()
};

module.exports = Intern, addIntern();