const inquirer = require("inquirer");
const fs = require("fs");
const SVG = require("svg");
const shapes = require("./lib/shapes.js");
// const generateMarkdown = require("./Assets/generateMarkdown");

var draw = SVG();

//Questions array
const questions = () => {
    return inquirer.createPromptModule([
        {
            type: "input",
            name: "textInput",
            message: "Enter up to three characters",
            validate: textInput => {
                if(textInput <= 3) {
                    return true;
                } else {
                    console.log("Please enter a maximum of 3 characters")
                    return false;
                }
            }
        },
        {
            type: "input", 
            name: "txtcolor",
            message: "Please enter a color for your text (keyword or a hexadecimal number)",
            validate: txtColor => {
                if(txtColor) {
                    return true;
                } else {
                    console.log("Please choose a color :)")
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            message: "Select a shape from this list",
            name: "shape",
            choices: ["Circle", "Square", "Triangle"],
            when: ({shapeConfirm}) => {
                if(shapeConfirm) {
                    return true;
                } else {
                    console.log("Pretty Please. Select a shape from the list")
                    return false;
                }
            }
        }, 
        {
            type: "input", 
            name: "shapeColor",
            message: "Select a color for your shape (keyword or hexadecimal)",
            validate: shapeColor => {
                if(shapeColor) {
                    return true;
                } else {
                    console.log("Please choose a color for the shape")
                    return false;
                }
            }
        }

    ])
};

function writeToFile(data) {
    return new Promise((resolve, reject) => {
        fs.draw("./logo.svg", data, err => {
            if(err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "Generated logo.svg"
            });
        });
    });node 
};

async function init() {
    try {
        const svgData = await questions();
        const logoSvg = generateSvg(svgData);
        await writeToFile(logoSvg);
        console.log("Generate logo.svg successfully!");
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

// Function call to initialize app
init();



// The following example test should pass:
// ```js
// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

// function Shape(shape, setColor) {
//     this.shape = [Triangle, Circle, Square];
//     this.setColor = [];
// } 

// function Triangle(shape, color) {
//     Shape.call(this, shape, color);
//     this.shape = Triangle;
// }

// function Circle(shape, color) {
//     Shape.call(this, shape, color);
//     this.shape = Circle;
// }

// function Square(shape, color) {
//     Shape.call(this, shape, color);
//     this.shape = Square;
// }

// const shape = new Triangle(Triangle, "Blue");
