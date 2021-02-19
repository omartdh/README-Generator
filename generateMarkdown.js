// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contribution)
    - [Test](#test)
    - [License](#license)
    - [Questions](#questions)

    ## Description:
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
        Contact me at the following Link:

        -[GitHub Profile](https://github.com/${data.username})

        Send me an email at: ${data.email}
  `;
}

module.exports = generateMarkdown;
