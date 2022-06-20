// Return license section. If there is no license, return an empty string
const generateLicenseInfo = (licenseSection) => {
  if (licenseSection == "none") {
    return "";
  }
  return `
  ## License
  Licensed under ${licenseSection}`;
};

//function that returns a license badge based on which license is passed in
const licenseBadge = (badge) => {
  if (badge == "none") {
    return "";
  } else if (badge == "ISC") {
    return `
  ![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (badge == "MIT") {
    return `
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (badge == "GPL 3.0") {
    return `
  ![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (badge == "Apache 2.0") {
    return `
  ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  }
};

//function that returns a link explaining the license in the license section
const licenseLink = (link) => {
  if (link == "none") {
    return "";
  } else if (link == "ISC") {
    return `
(https://opensource.org/licenses/ISC)`;
  } else if (link == "MIT") {
    return `
(https://opensource.org/licenses/MIT)`;
  } else if (link == "GPL 3.0") {
    return `
(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (link == "Apache 2.0") {
    return `
  (https://opensource.org/licenses/Apache-2.0)`;
  }
};

// function to generate markdown for README
const generateMarkdown = (data) => {
  return `

  ${licenseBadge(data.license)}

  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contribution)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ${generateLicenseInfo(data.license)}. ${licenseLink(data.license)}

  ## Questions
  For questions, please email ${data.email} or find me on GitHub at https://github.com/${data.github}.`;
};

module.exports = generateMarkdown;
