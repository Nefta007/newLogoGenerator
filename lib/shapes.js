// class Polygon {
//     constructor() {
//       this.name = 'Polygon';
//     }
//   }
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

class Circle extends SVG{
    render(){
        return ` <circle cx="600" cy="200" r="100" fill="${this.color}" />`;
    }
}
class Square extends SVG{
    render(){
        return `<rect x="10" y="30 width="30" height="30" fill="${this.color}" />`;
    }
}
class Triangle extends SVG{
    render(){
        return `<polygon points="50, 13.397 100, 100 0, 100" fill="${this.color}" />`;
    }
};


module.exports = {Circle, Square, Triangle}