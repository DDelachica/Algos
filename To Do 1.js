// To Do 1
// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number.
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function rSigma(value){
    if(value > 0) {
        return rSigma(value-1) + value;
    }
    return 0
}

console.log(rSigma(5));
// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). Also, rFact(6.5) = 720 (1*2*3*4*5*6).
function rFact(value){
    if(value > 1) {
        return rFact(value-1) * value;
    }
    return 1
}

console.log(rFact(3));
// Bonus Challenge (Optional)
// Flood Fill

// Most graphical “paint” applications have a ‘paintcan fill’ function that floods part of an image with a certain color. We change the image as if we painted a canvas: a two-dimensional array of integers, where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. You are given a canvas (2-dimensional array of integers), starting coordinate (2-element array), and the color to flood (integer value). Build floodFill(canvas2D,startXY,newColor)! Replace a pixel’s color value only if it is the same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 

// Note: diagonally related pixels are not considered adjacent.


// … we examine the cells that are directly (not diagonally) adjacent to startXY, which is[2,2]. If any have a value of 3 (the original value at startXY), we change its value to 1 (newColor) and repeat the process with its directly-adjacent neighbor cells. We repeat this until the entire zone of similarly-colored cells is changed.

// Our canvas2D becomes:

// canvas = [ [3,2,1,4,3],
//            [2,1,1,4,0],
//            [7,1,1,5,3],
//            [6,5,1,4,1],
//            [1,2,1,1,1] ]




// Given a 2D canvas of: 

canvas = [ [3,2,3,4,3],
           [2,3,3,4,0],
           [7,3,3,5,3],
           [6,5,3,4,1],
           [1,2,3,3,3] ]

// A start point of:

start = [2,2];

// And a new color of:

color = 1;

function floodFill(canvas, start, color){
     // print the start point
     // INSTEAD OF AND, CHECK FOR BOUNDS WITH A SEPERATE CONDITIONAL
     up_and_down = start[0];
     left_and_right = start[1];
     if(canvas[up_and_down][left_and_right] !== color){
         canvas[up_and_down][left_and_right] = color;
     }
     // checking to the right
     if(canvas[up_and_down][left_and_right+1] !== color && left_and_right+1 < canvas[up_and_down].length){
         return floodFill(canvas, [up_and_down, left_and_right+1], color)
     }
     // checking to the left
     if(canvas[up_and_down][left_and_right-1] !== color && left_and_right-1 >= 0){
        return floodFill(canvas, [up_and_down, left_and_right-1], color)
     }
     // check above
     if(canvas[up_and_down-1][left_and_right] !== color && up_and_down-1 > 0){
         return floodFill(canvas, [up_and_down-1, left_and_right], color)
     }
     // check under
     if(canvas[up_and_down+1][left_and_right] !== color && up_and_down+1 < canvas.length){
         return floodFill(canvas, [up_and_down+1, left_and_right], color)
     }
     return canvas
}


console.log(floodFill(canvas, start, color));

