const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description

${data.projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
- ${data.howToInstall}

## Usage
- ${data.usage}

## License
- ${data.licenses}

## Contributing
- ${data.collaborators}

## Tests
- ${data.tests}

## Questions
- For more information see my GitHub [profile](https://github.com/${data.githubUsername})
- To contact me directly email me at <mattkolbach@yahoo.com>. Be use to include GitHub and the project name in the subject line.

`;
}

module.exports = generateMarkdown;

