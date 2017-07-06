// scripts.js

function getTriangleArea(a, h) {
 
    if(a<=0 && h<=0){
        return "Wrong data"
    } else if(a>0 && h>0){
        return (a*h)/2
    }       
}

var triangle1 = getTriangleArea(1, 5);
var triangle2 = getTriangleArea(8, 19);
var triangle3 = getTriangleArea(23, 9);

console.log(getTriangleArea(1, 1));
console.log(triangle1);
console.log(triangle2);
console.log(triangle3);