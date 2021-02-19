// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contribution)
    - [Test](#test)
    - [Credits](#credits)
    - [License](#license)
    - [Questions](#questions)

    ## Description:
    ![License]()

        ${data.description}
    ## Installation:
        ${data.installation}
    ## Usage:
        ${data.usage}
    ## Contributing:
        ${data.contribution}
    ## Test:
        ${data.test}
    ## License:
       For more information about the license, click the link below.

    - [License](https://opensource.org/license/${data.license})

    ## Questions:
        For questions about the Generator you can go to my GitHub page at the following Link:

        -[GitHub Profile](https://github.com/${data.username})

        for additional questions send me an email at: ${data.email}
  `;
}

module.exports = generateMarkdown;