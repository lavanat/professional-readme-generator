// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "") {
    return `![${license} license](https://img.shields.io/badge/license-${license}-green)`;
  }
  else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/license/mit/";
  } 
  else if (license === "ISC") {
    return "https://opensource.org/license/isc-license-txt/";
  } 
  else if (license === "Apache License 2.0") {
    return "http://www.apache.org/licenses/LICENSE-2.0";
  } 
  else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license,username) {
  
  if (license !== "") {
  const licenseLink = renderLicenseLink(license);
  const licenseText = `Copyright [2023] [${username}]

  Licensed under the ${license} license (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at ${licenseLink}.
  
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.`;

  return licenseText;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);
  const licenseText = renderLicenseSection(data.license, data.username)

  return `# ${data.title}
  
  ${badge}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseText}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions

  If you have additional questions, feel free to reach me by going to my [GitHub](https://github.com/${data.username}) or by sending me an email at ${data.email}.
`;
}

module.exports = generateMarkdown;
