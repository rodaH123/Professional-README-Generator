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

//Generate Mark
   
}
module.exports = generateMarkdown;
