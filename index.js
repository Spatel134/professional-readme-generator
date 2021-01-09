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
    choices: ["MIT", "No License"],
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log(`The file has been saved as: ${filename}`);
  });
}

// Initialize app
function init() {
  console.log("Generator a Professional README | Please follow the prompts to create your README.md file:");
  inquirer.prompt(questions).then((response) => {
    const dynamicString = generateMarkdown(response);
    writeFile("Generated-README.md", dynamicString);
    console.log("Successfully generated README.md file.");
  });
}

// Function call to initialize app
init();
