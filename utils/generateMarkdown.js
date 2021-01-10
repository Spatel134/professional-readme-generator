// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "No License":
      licenseBadge = ``;
      break;
  }
  return licenseBadge;
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      licenseText = `
Copyright 2021
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
      break;
    case "No License":
      licenseText = `No license included with this project.`;
      break;
  }
  return licenseText;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const {
    repoName,
    projectTitle,
    projectDescription,
    installNotes,
    usageNotes,
    contribNotes,
    licenseSelection,
    testing,
    userName,
    userEmail,
  } = data;

  const licenseBadge = renderLicenseBadge(licenseSelection);
  const licenseText = renderLicenseSection(licenseSelection);

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
