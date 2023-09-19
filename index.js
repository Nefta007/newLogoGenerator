const inquirer = require('inquirer');
const fs = require('fs');
const { Square, Triangle, Circle } = require('./lib/shapes');

//sets SVG class and sets up the user text and shape that is desired
class SVG {
    constructor() {
        this.Usertext = "";
        this.Usershape = "";
    }
    render() {
        //establishes the height and length of where the logo will go
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.Usershape}${this.Usertext}</svg>`
    }
    setText(text, color) {
        //sets up where the text will go, the font family, and text size
        this.Usertext = `  <text x="150" y="120" font-family = "Georgia" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        //will set up the shape 
        this.Usershape = shape.render();
    }
}

const init = () => {
    //prompt that will ask for all desired information from user
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

        const fileName = 'logo.svg'; // sets up variable we will use later to writefile
        userAnswers = answers.svg;  //following variables will hold the various user inputs
        shapeAnswers = answers.shape;
        colorOfShape = answers.shapesColor;
        colorOfText = answers.textColor;
        textLength = answers.svg;
        upperAnswer = userAnswers.toUpperCase(); //sets the text that is printed out to be capitalized

        //this will make sure text does not pass 3 characters and there is something written
        if (textLength.length > 0 && textLength.length > 3) {
            console.log('Make sure text is 1-3 characters long');
            init();
        }
        else {
            let file_shape; // will be used to set the shape for the svg
            if (shapeAnswers === 'Circle') { // if circle is chosen - log out user choice and set class
                console.log('you chose a circle');
                file_shape = new Circle();
            }
            else if (shapeAnswers === 'Square') {// if square is chosen - log out user choice and set class
                console.log('you chose a square');
                file_shape = new Square();
            }
            else if (shapeAnswers === 'Triangle') {// if triangle is chosen - log out user choice and set class
                console.log('you chose a triangle');
                file_shape = new Triangle();
            }
            else {
                console.log('there has been an error'); //otherwise log out an error message
            }
            //creates a variable to save the desired shape and text characteristics and then send it to SVG()
            file_shape.setColor(colorOfShape);
            var NEW_SVG = new SVG();
            NEW_SVG.setText(upperAnswer, colorOfText);
            NEW_SVG.setShape(file_shape)
            newString = NEW_SVG.render();

            //creates file givin user input
            fs.writeFile(fileName, newString, (err) => {
                err ? console.log(err) : console.log('Generated logo.svg');
            });
        }
    });
}
init(); //call init funtion


