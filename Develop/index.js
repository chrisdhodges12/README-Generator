// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter a project description",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
    validate: (installationInput) => {
        if (installationInput) {
          return true;
        } else {
          console.log("Please enter installation instructions!");
          return false;
        }
      },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
    validate: (usageInput) => {
        if (usageInput) {
          return true;
        } else {
          console.log("Please enter usage information!");
          return false;
        }
      },
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contributions (Required)",
    validate: (contributionInput) => {
      if (contributionInput) {
        return true;
      } else {
        console.log("Please enter contributions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions",
    validate: (testInput) => {
        if (testInput) {
          return true;
        } else {
          console.log("Please enter test instructions!");
          return false;
        }
      },
  },
  {
    type: "checkbox",
    name: "license",
    message: "Which liscense would you like to add?",
    choices: ["ISC", "MIT", "GPL", "Apache", "GNU", "no license"],
    validate: (licenseInput) => {
      if (licenseInput) {
        return true;
      } else {
        console.log("Please choose an option!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Please enter your github username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email!");
        return false;
      }
    },
  },
]);

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
