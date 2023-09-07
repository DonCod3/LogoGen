const inquirer = require("inquirer");
const fs = require("fs");
const shape = require("./lib/shapes");
const generateSvg = require("./utils/generateSvg");


//Questions array
const questions = [
    {
        type: "input",
        name: "textInput",
        message: "Enter up to three characters",
        validate: textInput => {
            if(textInput.length <= 3) {
                return true;
            } else {
                console.log("Please enter a maximum of 3 characters")
                return false;
            }
        }
    },
    {
        type: "input", 
        name: "textcolor",
        message: "Please enter a color for your text (keyword or a hexadecimal number)",
        validate: textColor => {
            if(textColor) {
                return true;
            } else {
                console.log("Please choose a color :)")
                return false;
            }
        }
    },
    {
        type: "checkbox",
        message: "Select a shape from this list:",
        name: "shape",
        choices: ["Circle", "Square", "Triangle"],
        validate: (shape) => {
            if(shape) {
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

];


function writeToFile(fileName, svgData) {
    var content = generateSvg(svgData);
    fs.writeFile(fileName, content, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('Generated logo.svg successfully')
    });
};


function init() {
    inquirer.prompt(questions).then((svgData) => {
        var fileName = 'logo.svg';
        writeToFile(fileName, svgData);
    });
}


// Function call to initialize app

init();
