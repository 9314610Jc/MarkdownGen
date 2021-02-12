const fs = require('fs');
const inquirer = require('inquirer');
const { generateMarkdown } = require('./genMd.js');
const genMd= require('./genMd.js')
 
inquirer
.prompt([
    {
        type : 'input',
        message : 'What is the title of your project?',
        name : 'title'
    },
    {
        type : 'input',
        message : 'Give a detailed description?',
        name : 'description'
    },
    {
        type : 'input',
        message : 'How do you install your project?',
        name : 'installDetail'
    },
    {
        type : 'input',
        message: 'Explain how to use your project?',
        name : 'usage'
    },
    {
        type : 'input',
        message : 'Define your contributing guidelines?',
        name : 'contributingGuide'
    },
    {
        type : 'input',
        message : 'How do you test your product?',
        name : 'testIns'
    },
    {
        type : 'list',
        message : 'License?',
        choices : [
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'],
            name: 'license'
    },
    {
        type: 'input',
        message : `What's your Github username?`,
        name : 'github'
    },
    {
        type : 'input',
        message : `What's your email address?`,
        name : 'email'
    }
]).then((Data)=> {
    fs.writeFile('README.md', genMd.generateMarkdown(Data), (err) => {
        if (err) throw "error";
        console.log('success')
    } )
   
})