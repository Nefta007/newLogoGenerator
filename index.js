const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require('./lib/shapes');



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
        const fileName = 'logo.svg';
        shapeAnswers = answers.shape;
        textLength = answers.svg;
        if (textLength.length > 0 && textLength.length > 3) {
            console.log('Make sure text is 1-3 characters long');
            init();
        }
        else {
            let file_shape;
            if (shapeAnswers === 'Circle') {
                console.log('you chose a circle');
                file_shape = new Circle();
            }
            else if (shapeAnswers === 'Square') {
                console.log('you chose a circle');
                file_shape = new Square();
            }
            else if (shapeAnswers === 'Triangle') {
                console.log('you chose a circle');
                file_shape = new Triangle();
            }
            else {
                console.log('there has been an error');
            }
            fs.writeFile(fileName,JSON.stringify(answers), (err)=>{
                err ? console.log(err) : console.log('Generated logo.svg');
            });

        }


    });
}
init();


