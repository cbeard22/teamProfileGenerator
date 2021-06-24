const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/renderedHTML.js");

const teamArr = [];

function employeeQuestions() {
    inquirer.prompt
        ([
            {
                type: "input",
                message: "Please enter your team members name.",
                name: "answerName",
            },
            {
                type: "input",
                message: "Please enter that team members ID number.",
                name: "answerID",
            },
            {
                type: "input",
                message: "What is that team members email address?",
                name: "answerEmail",
            },
            {
                type: "list",
                message: "Please select that team members role.",
                name: "answerRole",
                choices: ["Engineer", "Intern", "Manager"],
            },
        ]).then(function (answers) {

            if (answers.answerRole === "Engineer") {
                engineerQuestions(answers);
            }
            else if (answers.answerRole === "Intern") {
                internQuestions(answers);
            }
            else {
                managerQuestions(answers);
            }
        })
}

function engineerQuestions(baseAnswers) {
    inquirer.prompt
        ([
            {
                type: "input",
                message: "What is this team members GitHub username?",
                name: "answerGithub",
            },
            {
                type: "confirm",
                message: "Would you like to add another team member?",
                name: "answerAddAnother",
            },
        ]).then(function (answers) {
            const newEngineer = new Engineer(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerGithub);
            teamArr.push(newEngineer);
            if (answers.answerAddAnother === true) {
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Team Profiles Created!")
            }
        })
}

function internQuestions(baseAnswers) {
    inquirer.prompt([
        {
            type: "input",
            message: "Where did this team member go to school?",
            name: "answerSchool",
        },
        {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "answerAddAnother",
        },
    ]).then(function (answers) {
        const newIntern = new Intern(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerSchool);
        teamArr.push(newIntern);
        if (answers.answerAddAnother === true) {
            employeeQuestions()
        } else {
            buildTeam();
            console.log("Team Profiles Created!")
        }
    })
}

function managerQuestions(baseAnswers) {
    inquirer.prompt
        ([
            {
                type: "input",
                message: "Please enter this team members office number.",
                name: "answerOfficeNumber",
            },
            {
                type: "confirm",
                message: "Would you like to add another team member?",
                name: "answerAddAnother",
            },
        ]).then(function (answers) {
            const newManager = new Manager(baseAnswers.answerName, baseAnswers.answerID, baseAnswers.answerEmail, answers.answerOfficeNumber);
            teamArr.push(newManager);
            if (answers.answerAddAnother === true) {
                employeeQuestions()
            } else {
                buildTeam();
                console.log("Team Profiles Created!")
            }
        })
}

function buildTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}

employeeQuestions();