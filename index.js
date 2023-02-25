// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input', name:'title', message:'What is the title of your Project?'
    },
    {
        type:'input', name:'description', message:'What is the description of you Project?' 
    },
    {
        type:'input', name:'installation', message:'What are your installation instructions?'
    },
    {
        type:'input', name:'usage', message:'What does the user need to know about using this repo?'
    },    
    {
        type:'input', name:'contributing', message:'What does the user need to know about contributing to this repo?'
    },    
    {
        type:'input', name:'tests', message:'What are the instructions for the tests?'
    },    
    {
        type:'input', name:'email', message:'What is your email??'
    },    
    {
        type:'input', name:'github', message:'What is your gut hub username?'
    },    
    {
        type:'checkbox', name:'license', message:'What license are you using?', choices: ['MIT', 'Boost', 'BSD_3', 'Mozilla', 'Apache_2.0']
    }

    




];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        console.log(answers)
        const data = generateMarkdown(answers)
        writeToFile('README2.md', data)
    })
}

// Function call to initialize app
init();
