//  `Triangle`, `Circle`, and `Square` classes/packages needed
const Circle = require('../lib/circle') 
const Square = require('../lib/square')
const Triangle = require('../lib/triangle')

//function to generate SVG logo
function generateSvg(svgData) {
  let shape = undefined
  if (svgData.shape == 'Circle') {
    shape = new Circle (svgData.shapeColor, svgData.textInput, svgData.textColor)
  } else if (svgData.shape == 'Square') {
    shape = new Square (svgData.shapeColor, svgData.textInput, svgData.textColor)
  } else {
    shape = new Triangle (svgData.shapeColor, svgData.textInput, svgData.textColor)
  }
  return shape.render();
}

module.exports = generateSvg;