const { Square, Triangle, Circle } = require('./shapes');
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="0,200 150,0 300,200" fill="blue" />');
//sets test to check if code will work the way it is supposed to, top part is reference for set up.
//circle test
describe('create circle', () => {
    test("circle is desplayed correctly", () => {
        var testColor = 'red';
        const testShape = new Circle();
        testShape.setColor(testColor);
        expect(testShape.render()).toEqual(` <circle cx="155" cy="100" r="100" fill="red" />`);
    });
});
//square test
describe('create square', () => {
    test("square is desplayed correctly", () => {
        var testShape = new Square();
        testShape.setColor('blue');
        expect(testShape.render()).toEqual(` <rect x="50" y="10" width="200" height="200" fill="blue" />`);
    });
});
//triangle test
describe('create triangle', () => {
    test("triangle is desplayed correctly", () => {
        var testShape = new Triangle();
        testShape.setColor('teal');
        expect(testShape.render()).toEqual(' <polygon points="0,200 150,0 300,200" fill="teal" />');
    });
});