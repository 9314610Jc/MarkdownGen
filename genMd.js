// // TODO: Create a function that returns a license badge based on which license is passed in
// const licenseArr = [
//   'Apache License 2.0',
//   'GNU General Public License v3.0',
//   'MIT License',
//   'BSD 2-Clause "Simplified" License',
//   'Boost Software License 1.0',
//   'Creative Commons Zero v1.0 Universal',
//   'Eclipse Public License 2.0',
//   'GNU Affero General Public License v3.0',
//   'GNU General Public License v2.0',
//   'GNU Lesser General Public License v2.1',
//   'Mozilla Public License 2.0',
//   'The Unlicense']

// // If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   switch(license){
//     case 'Apache License 2.0':
//       let badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//       break;
//     case 'GNU General Public License v3.0':
//       let badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
//       break;
//     case 'MIT License':
//       let badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//       break;
//     case 'BSD 2-Clause "Simplified" License':
//       let badge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
//       break;
//     case 'Boost Software License 1.0':
//       let badge = '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
//       break;
//     case 'Creative Commons Zero v1.0 Universal':
//       let badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
//       break;
//     case 'Eclipse Public License 2.0':
//       let badge = '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'
//       break;
//     case 'GNU Affero General Public License v3.0':
//       let badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
//       break;
//     case 'GNU General Public License v2.0':
//       let badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
//       break;
//     case 'GNU Lesser General Public License v2.1':
//       let badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'
//       break;
//     case 'Mozilla Public License 2.0':
//       let badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
//       break;
//     case 'The Unlicense':
//       let badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
//       break;
//       return badge
//   }

// }


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   switch(license){
//     case 'Apache License 2.0':
//       let link = 'https://opensource.org/licenses/Apache-2.0'
//       break;
//     case 'GNU General Public License v3.0':
//       let link = 'http://www.gnu.org/licenses/gpl-3.0'
//       break;
//     case 'MIT License':
//       let link = 'https://opensource.org/licenses/MIT'
//       break;
//     case 'BSD 2-Clause "Simplified" License':
//       let link = 'https://opensource.org/licenses/BSD-2-Clause'
//       break;
//     case 'Boost Software License 1.0':
//       let link = 'https://www.boost.org/LICENSE_1_0.txt'
//       break;
//     case 'Creative Commons Zero v1.0 Universal':
//       let link = 'http://creativecommons.org/publicdomain/zero/1.0/'
//       break;
//     case 'Eclipse Public License 2.0':
//       let link = 'https://opensource.org/licenses/EPL-1.0'
//       break;
//     case 'GNU Affero General Public License v3.0':
//       let link = 'https://www.gnu.org/licenses/agpl-3.0'
//       break;
//     case 'GNU General Public License v2.0':
//       let link = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
//       break;
//     case 'GNU Lesser General Public License v2.1':
//       let link = 'https://www.gnu.org/licenses/lgpl-3.0'
//       break;
//     case 'Mozilla Public License 2.0':
//       let link = 'https://opensource.org/licenses/MPL-2.0'
//       break;
//     case 'The Unlicense':
//       let link = 'http://unlicense.org/'
//       break;
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(badge, link) {
  return link
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
 ${data.description}
  ## Table of contents
  1. Installation
  3. Usage
  4. Contributing
  5. Test
  6. Questions

  ## Installation
  ${data.installDetail}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributingGuide}

  ## Test 
  ${data.testIns}

  ## Questions
  Feel free to contact me on github: ${data.github}
  or by email ${data.email}

  




`;
}

module.exports = {
  generateMarkdown : generateMarkdown,

};
