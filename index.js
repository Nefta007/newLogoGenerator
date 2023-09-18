const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require('./lib/shapes');

class SVG {
    constructor() {
        this.Usertext = "";
        this.Usershape = "";
    }
    render(){
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.Usershape}${this.Usertext}</svg>`
    }
    setText(text,color){
        this.Usertext = `  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.Usershape = shape.render();
    }
}

const init = () => {

    inquirer.prompt([{
        type: 'input',
        name: 'svg',
        message: 'Enter a three letter text.',
    },
    {
        type: 'input',
        name: 'textColor',
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
        name: 'shapesColor',
        message: 'Please enter a color for the shape.',
    }]).then((answers) => {

        const fileName = 'logo.svg';
        userAnswers = answers.svg;
        shapeAnswers = answers.shape;
        colorOfShape = answers.shapesColor;
        colorOfText = answers.textColor;
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
            var NEW_SVG = new SVG();
            NEW_SVG.setText(userAnswers, colorOfText);
            NEW_SVG.setShape(file_shape)
            newString = NEW_SVG.render();

            fs.writeFile(fileName,newString, (err)=>{
                err ? console.log(err) : console.log('Generated logo.svg');
            });

        }


    });
}
init();


