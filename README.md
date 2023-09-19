# newLogoGenerator
The purpose of this lab is to build a Node.js comand-line application that will take user input and generate a logo and save it as an SVG file. The app will provide prompts for the user in order to take in 3 letter text, shape, color, and text color. The app should take in color in both name and hexadecimal form. It should also have test cases that shows that the app passed them all.
Video walkthrough: https://drive.google.com/file/d/1zYrbH3Ay37SFo0NAxHWHgzK8LgyO-FqI/view

USER Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

The Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
