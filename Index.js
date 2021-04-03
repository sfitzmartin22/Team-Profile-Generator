const inquirer = require("inquirer");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const generate = require("./src/generateHtml");
const fs = require('fs');

const employees = [];
const employeeType = [
    {
        type: "list",
        Message: "Please select the type of employee that you are adding to your team",
        choices: ["Manager", "Engineer", "Intern", "I have added all of the employees"],
        name: "position",
    },
    
];

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

function employeeInfo() {
inquirer
    .prompt(employeeType)
    .then((answers) => {
    if (answers.position === "Manager") {
        inquirer.prompt(managerQuestions)
        .then((managerResponses) => {
            const manager = new Manager(managerResponses.name, managerResponses.ID, managerResponses.email, managerResponses.officeNumber)
            employees.push(manager);
            console.log(manager);
            employeeInfo ();
        }
    )
} else if (answers.position === "Engineer") {
        inquirer.prompt(engineerQuestions)
        .then((engineerResponses) => {
            const engineer = new Engineer(engineerResponses.name, engineerResponses.ID, engineerResponses.email, engineerResponses.gitHub)
            employees.push(engineer);
            console.log(engineer);
            employeeInfo ();
    })
} else if (answers.position === "Intern") {
    inquirer.prompt(internQuestions)
    .then((internResponses) => {
        const intern = new Intern(internResponses.name, internResponses.ID, internResponses.email, internResponses.school)
        employees.push(intern);
        console.log(intern);
        employeeInfo ();
})
} else if (answers.position === "I have added all of the employees") {
    return;    
}
  }
    )}

employeeInfo ();