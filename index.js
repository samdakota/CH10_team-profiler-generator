const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// function to generate HTML file
function createHTML(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), err =>
    err ? console.log(err) : console.log('HTML generated'))
};

// function to initialize app
function init() {
    inquirer
        .prompt()
        .then((answers) => {
            createHTML('index.html', answers)
        })
        .catch(err => {
            console.log(err)
        })
};

// call to initialize app
init()