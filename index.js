const inquirer = require('inquirer');

const init = () =>{
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
    }]).then((answers)=>{
    console.log('Generated logo.svg');
});
}
init();