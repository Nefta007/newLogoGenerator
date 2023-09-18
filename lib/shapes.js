// class Polygon {
//     constructor() {
//       this.name = 'Polygon';
//     }
//   }
class SHAPES{
    constructor() {
        this.color = colorOfShape;
    }
    setColor(color){
        this.color = (color);
    }
}

class Circle extends SHAPES{
    render(){
        return ` <circle cx="100" cy="150" r="50" fill="${this.color}" />`;
    }
}
class Square extends SHAPES{
    render(){
        return `<rect x="100" y="30 width="20" height="50" fill="${this.color}" />`;
    }
}
class Triangle extends SHAPES{
    render(){
        return `<polygon points="50, 13.397 100, 100 0, 100" fill="${this.color}" />`;
    }
};


module.exports = {Circle, Square, Triangle};