class Square extends shape{
    render(){
        return `<rect x="10" y="30 width="30" height="30" fill="${this.color}" />`;
    }
}
class Triangle extends shape{
    render(){
        return `<polygon points="50, 13.397 100, 100 0, 100" fill="${this.color}" />`;
    }
}
class Circle extends shape{
    render(){
        return ` <circle cx="600" cy="200" r="100" fill="${this.color}" />`;
    }
}

module.exports{Square, Triangle, Circle};