// Exports `Triangle`, `Circle`, and `Square` classes



// <svg class = circle version="1.1"
//      width="300" height="200"
//      xmlns="http://www.w3.org/2000/svg">

//   <rect width="100%" height="100%" fill=$ />
//   <circle cx="150" cy="100" r="80" fill="green" />
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
// </svg>



// The following example test should pass:
// ```js
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
{/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>  */}
const SVG = require("svg");

const text = draw.text(`${data.textInput}`).font(x="150", y="125", size="60", anchor="middle", fill=`${txtColor}`);
const drwcircle = draw.circle (cx="150", cy="100", r="80", width="100%", height="100%", fill=`${shapeColor}`);


function Shape(shape, setColor, text, txtColor) {
  this.shape = shape;
  this.setColor = setColor;
  this.text = text.text;
  this.txtColor = txtColor;
} 

function Triangle(shape, setColor, text, txtColor) {
  Shape.call(this, shape, setColor, text, txtColor);
  this.shape = Triangle;
  this.setColor = `${data.shapeColor}`;
  this.text = `${data.textInput}` 
  this.txtColor = `${data.txtColor}`.text}

function Circle(shape, setColor, text, txtColor) {
 Shape.call(this, shape, setColor, text, txtColor);
 this.shape = drwcircle;
 this.setColor = `${data.shapeColor}`;
 this.text = `${textInput}`;
 this.txtColor = `${txtColor}`;
}

function Square(shape, setColor, text, txtColor) {
 Shape.call(this, shape, setColor, text, txtColor);
 this.shape = Square;
}


module.exports()