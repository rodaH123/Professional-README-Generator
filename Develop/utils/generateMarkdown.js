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
  return `# ${data.title}

`;
}

function generateMarkdown(userResponses, userInfo) {

  //Generate a Table of Contents based on userResponses
  let draftToC = '## Table of Contents';

  if(userResponses.installation !=='') {draftToC +=`
  *[Installation](#installation)' };

  if(userResponses.usage !=='') {draftToC +=`
  *[Usage](#usage)' };

  if(userResponses.contributing !=='') {draftToC +=`
  *[Contributing](#contributing)' };

  if(userResponses.tests !=='') {draftToC +=`
  *[Tests](#tests)' };


  if(userResponses.usage)

//Generate Mark for the top required portions of the REadMe file.
let draftMarkdown =
`# ${userResponses.title}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
Check out the badges hosted by [shields.io](https://shields.io/).


#Description
*The what, why, and how:*
${userResponses.description}

`
//Add Table to Contents to markdown
draftMarkdown += draftToC

//Add License section to the Table of Contents
draftMarkdown += `
*[Licenes](#license)`;




module.exports = generateMarkdown;
