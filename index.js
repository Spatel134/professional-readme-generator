// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter the name of the GitHub repo:",
    name: "repoName",
  },
  {
    type: "input",
    message: "Enter the title of your project:",
    name: "projectTitle",
  },
  {
    type: "input",
    message: "Enter a description of your project:",
    name: "projectDescription",
  },
  {
    type: "input",
    message: "Enter installation instructions:",
    name: "installNotes",
  },
  {
    type: "input",
    message: "Enter usage instructions:",
    name: "usageNotes",
  },
  {
    type: "input",
    message: "Enter information for contributors/credits:",
    name: "contribNotes",
  },
  {
    type: "list",
    message: "Choose license:",
    choices: ["MIT", "The Unlicense", "No License"],
    name: "licenseSelection",
  },
  {
    type: "input",
    message: "Enter information about testing:",
    name: "testing",
  },
  {
    type: "input",
    message: "Enter your GitHub username:",
    name: "userName",
  },
  {
    type: "input",
    message: "Enter your email address:",
    name: "userEmail",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
