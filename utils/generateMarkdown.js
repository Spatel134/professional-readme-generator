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
  return `${licenseBadge}
  # ${data.projectTitle}

  ## Description
  ${data.projectDescription}

  ## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributions](#contributions)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.installNotes}

## Usage
${data.usageNotes}

## License
${licenseText}

## Contributions
${data.contribNotes}

## Badges
${licenseBadge}

## Tests
${data.testing}

## Questions
If you have any questions about this app, email me or visit me on GitHub.

[Email](mailto://${data.userEmail})

[GitHub](http://github.com/${data.userName})
`;
}

module.exports = generateMarkdown;
