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
      generateHtml()
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
    console.log(engineerList)
    userChoices()
  })
}
function generateHtml(){
  var htmlCode =`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
      <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>
  
  <body>
      <heading>
          <h2>Team Profile Generator - using Node.js</h2>
      </heading>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-3 team-heading">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>`
     var managerHTML =""
      for(let i=0;i<managerList.length;i++){
                    console.log(managerList[i])
                    managerHTML = managerHTML +  `<div class="card employee-card">
                    <div class="card-header">
                        <h2 class="card-title">${managerList[i].name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${managerList[i].id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${managerList[i].email}">${managerList[i].email}</a></li>
                            <li class="list-group-item">Office number: ${managerList[i].OfficeNumber}</li>
                        </ul>
                    </div>
                </div>`
      }
      console.log(managerHTML)
      htmlCode = htmlCode + managerHTML
      var internHTML = ""
      for(let i=0; i<internList.length;i++){
                  console.log(internList[i])
                  internHTML = internHTML + `<div class="card employee-card">
                  <div class="card-header">
                      <h2 class="card-title">${internList[i].name}</h2>
                      <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
                  </div>
                  <div class="card-body">
                      <ul class="list-group">
                          <li class="list-group-item">ID: ${internList[i].id}</li>
                          <li class="list-group-item">Email: <a href="mailto:${internList[i].email}">${internList[i].email}</a></li>
                          <li class="list-group-item">School: ${internList[i].school}</li>
                      </ul>
                  </div>
              </div>`
      }
    console.log(internHTML)
    htmlCode = htmlCode + internHTML
    var engineerHTML =""
    for(let i=0; i< engineerList.length; i++){
            console.log(engineerList[i])
            engineerHTML = engineerHTML + `<div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineerList[i].name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineerList[i].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineerList[i].email}">${engineerList[i].email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineerList[i].github}" target="_blank" rel="noopener noreferrer">${engineerList[i].github}</a></li>
                </ul>
            </div>
        </div>`
    }
    console.log("Engineer",engineerHTML)
    htmlCode = htmlCode + engineerHTML

}