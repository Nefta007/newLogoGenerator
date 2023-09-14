const inquirer = require('inquirer');
//const fs = require('fs');

const init = () => {
    inquirer.prompt([{
        type: 'input',
        name: 'svg',
        message: 'Enter a three letter text.',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'Please enter a text color.',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'please choose a desired shape.',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapes-color',
        message: 'Please enter a color for the shape.',
    }]).then((answers) => {
        shapeAnswers = answers.shape;
        if (shapeAnswers === 'Circle') {
            console.log('you chose a circle');
        }
        else if (shapeAnswers === 'Circle') {
            console.log('you chose a circle');
        }
        else if (shapeAnswers === 'Circle') {
            console.log('you chose a circle');
        }
        else {
            console.log('there has been an error');
        }

        
    });
}

init();