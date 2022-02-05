// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "What is the title of your project?",
    validate: (projectTitleInput) => {
      if (projectTitleInput) {
        return true;
      } else {
        console.log("Please enter project title.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please describe the project, in detail.",
    validate: (projectDescriptionInput) => {
      if (projectDescriptionInput) {
        return true;
      } else {
        console.log("Please enter project details.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "howToInstall",
    message: "What are the instructions to set up the project?",
    validate: (installInput) => {
      if (installInput) {
        return true;
      } else {
        console.log("Please enter valid instructions.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "collaborators",
    message: "Who else worked on this project?",
    validate: (collabInput) => {
      if (collabInput) {
        return true;
      } else {
        console.log("Please enter the name of your collaborators.");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "licenses",
    message: "What license is to be used?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?",
    validate: (githubUsernameInput) => {
      if (githubUsernameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter your email.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructins and examples for use. Include screenshots as needed. (after markdown generation)",
    validate: (usage) => {
      if (usage) {
        return true;
      } else {
        console.log("Please enter instructions or placeholder text.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Enter any tests for this project here.",
    validate: (tests) => {
      if (tests) {
        return true;
      } else {
        console.log("Please enter test text, placeholder text, or N/A.");
        return false;
      }
    },
  },

  /////  possible future additions  /////
  //usage examples
  //3rd party assets?
  //did you follow any tutorials? link here
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, data, err => {
    //if there is an error, reject the Promise and send the error to the Promise's `catch()` method
    if (err) {
        reject(err);
        //return out of the function here to make sure the Promise doesn't accidentally execure the resolve() function as well
        return;  
    }
})
};

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((projectData) => {
    const generateMarkdownComplete = generateMarkdown(projectData);
    console.log(generateMarkdownComplete);
    writeToFile('./dist/README.md', generateMarkdown(projectData))
  });
}

// Function call to initialize app
init();

/*
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled 
    Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README  **DONE
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled 
    License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/
