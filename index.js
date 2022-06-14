const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")

const generatePage = require("./src/page-template");
const internal = require("stream");

let team = [];

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's Name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "what is the Manager's ID Number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Manager's Email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Manager's Office Number?"
        }
    ])
    .then(ansers => {
        let { managerName, managerId, managerEmail, managerOfficeNumber } = answers;
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber);
        team.push(manager);
        addTeam();
    })
}

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's Name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer's ID Number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's Email?"
        },
        {
            type: "input",
            name: "engineerGitHub",
            message: "What is the Engineer's GitHub username?"
        }
    ])
    .then(answers => {
        let { engineerName, engineerId, engineerEmail, engineerGitHub} = answers;
        const engineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGitHub);
        team.push(engineer)
        addTeam();
    })
}

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's Name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the Intern's ID Number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's Email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "What school does the Intern attend?"
        }
    ])
    .then(answers => {
        let { internName,  internId, internEmail, internSchool} = answers;
        const intern = new Intern(internName, internId, internEmail, internSchool)
        team.push(intern)
        addTeam();
    })
}

function generatePage() {
    fs.writeFile("./dist/index.html", htmlTemplate(team), err => {
        if (err) {
            return console.log(err);
        } else {
            console.log("Your team page has been created, html page is located in the dist folder")
        }
    })
}

function addTeam() {
    inquirer.prompt({
        type: "list",
        name: "addToTeam",
        message: "what kind of employee shall we add to the team?",
        choices: ["Engineer", "Intern", "None"]
    })
    .then(answer => {
        let { addToTeam } = answers;
        if (addToTeam === "Engineer") {
            createEngineer();
        } else if ( addToTeam === "Intern" ) {
            createIntern();
        } else {
            generatePage();
        }
    })
}

createManager();