// class Polygon {
//     constructor() {
//       this.name = 'Polygon';
//     }
//   }
//top part is a reference for setting up constructor
class SHAPES {
    //method of class for creating/initialzing an object intance
    constructor() {
        // sets constructor that will  set the color of the shape
        this.color = 'colorOfShape';
        //this.color = 'colorOfShape';
    }
    setColor(color) {
        this.color = (color);
    }
}

//child class for the shapes class, inherits method from sHAPES class
class Circle extends SHAPES {
    render() {
        return ` <circle cx="155" cy="100" r="100" fill="${this.color}" />`;
        //circle starts at points 155,100 and has a radius of 100
    }
}
class Square extends SHAPES {
    render() {
        return ` <rect x="50" y="10" width="200" height="200" fill="${this.color}" />`;
        //square starts at 50,10 and has a width of 200 and height 200 going right and downwards
    }
}
class Triangle extends SHAPES {
    render() {
        return ` <polygon points="0,200 150,0 300,200" fill="${this.color}" />`;
        //triagle will start at point 0, 200 -> 150, 0 ->300, 200
    }
};
//all shapes will be filled with designated color that is chosen by user or by the test.

module.exports = { Circle, Square, Triangle };