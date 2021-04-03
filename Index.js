const fs = require('fs');
const inquirer = require("inquirer");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const generate = require("./src/generatedHtml");


const employees = [];
const managerQuestions = [
    {
        type: "input",
        Message: "What is the manager's name?",
        name: "name",

    },
    {
        type: "input",
        Message: "What is the manager's ID number?",
        name: "ID",

    },
    {
        type: "input",
        Message: "What is the manager's email?",
        name: "email",

    },
    {
        type: "input",
        Message: "What is the manager's office number?",
        name: "officeNumber",
    },
];

const engineerQuestions = [
    {
        type: "input",
        Message: "What is the engineer's name?",
        name: "name",

    },
    {
        type: "input",
        Message: "What is the engineer's ID number?",
        name: "ID",

    },
    {
        type: "input",
        Message: "What is the engineer's email?",
        name: "email",

    },
    {
        type: "input",
        Message: "What is the engineer's GitHub username?",
        name: "gitHub",
    },
];

const internQuestions = [
    {
        type: "input",
        Message: "What is the intern's name?",
        name: "name",

    },
    {
        type: "input",
        Message: "What is the intern's ID number?",
        name: "ID",

    },
    {
        type: "input",
        Message: "What is the intern's email?",
        name: "email",

    },
    {
        type: "input",
        Message: "What is the school the intern attends?",
        name: "school",
    },
];


inquirer
    .prompt([{
        type: "list",
        Message: "Please select the type of employee that you are adding to your team",
        choices: ["Manager", "Engineer", "Intern"],
        name: "position",
    },
    ])
    .then(answers => {

    })
    .catch(error => {
        if (error.isTtyError){
            console.log("There is an error");
        }
    })