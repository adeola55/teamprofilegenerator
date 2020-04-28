const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// const htmlrender = require("./lib/htmlRenderer")
var internList = [];
var engineerList =[];
var managerList = [];

userChoices()

function userChoices(){
  console.log("Employee Tracker")
  inquirer.prompt([{
    type: "list",
    choices: ["add manager", "add engineer", "add intern", "exit app"],
    message: "choose an option",
    name: "userChoice"
  }])
  .then(function (response){
    switch(response.userChoice){
      case "add manager":
              addManager()
              break;
      case "add engineer":
              addEngineer()   
              break;
      case "add intern":
              addIntern();
              break;
      default:
        process.exit(0)
    }
  })
}

function addManager(){
  inquirer.prompt([
    {
      type: "input",
      message: "manager name",
      name: "managerName"
    },
    {
      type: "input",
      message: "manager email",
      name: "managerEmail"
    },
    {
      type: "input",
      message: "id",
      name: "managerId"
    },
    {
      type: "input",
      message: "office number",
      name: "managerOffice"
    }
  ])
  .then (function(userInput){
    var manager = new Manager(userInput.managerName,userInput.managerId,userInput.managerEmail,userInput.managerOffice)
    managerList.push(manager)
    userChoices()
  })
}
function addIntern(){
  inquirer.prompt([
    {
      type: "input",
      message: "intern name",
      name: "internName"
    },
    {
      type: "input",
      message: "intern email",
      name: "internEmail"
    },
    {
      type: "input",
      message: "intern id",
      name: "internId"
    },
    {
      type: "input",
      message: "intern School",
      name: "internSchool"
    }
  ])
  .then (function(userInput){
    var intern = new Intern(userInput.internName,userInput.internId,userInput.internEmail,userInput.internSchool)
    internList.push(intern)
    userChoices()
  })
}

function addEngineer(){
  inquirer.prompt([
    {
      type: "input",
      message: "engineer name",
      name: "engineerName"
    },
    {
      type: "input",
      message: "engineer email",
      name: "engineerEmail"
    },
    {
      type: "input",
      message: "engineer id",
      name: "engineerId"
    },
    {
      type: "input",
      message: "engineer github",
      name: "engineerGithub"
    }
  ])
  .then (function(userInput){
    var engineer = new Engineer(userInput.engineerName,userInput.engineerId,userInput.engineerEmail,userInput.engineerGithub)
    engineerList.push(engineer)
    userChoices()
  })
}