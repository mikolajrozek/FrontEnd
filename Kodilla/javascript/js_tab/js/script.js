// scripts.js

var fNames = ['Ania', 'Kasia', 'Marta', 'Mery'];
var mNames = ['Stefan', 'Waldek', 'Zbychu', 'Mike'];

var fname = prompt('Give a female name');
var mname = prompt('Give a male name');


if (fNames.indexOf(fname) === -1) {
    var add_name = fNames.push(fname);
    console.log('Added ' + fname + ' to table fNames: [' + fNames + ']');
} else
    console.log('Name '+ fname +' already inside of table fNames');

if (mNames.indexOf(mname) === -1) {
    var add_name = mNames.push(mname);
    console.log('Added ' + mname + ' to table mNames: [' + mNames + ']');
} else 
    console.log('Name '+ mname +' already inside of table mNames');

var arr = [];
var allNames = arr.concat(fNames, mNames);
console.log('Combined table of fNames and mNames: ['+allNames+']');

var newName = prompt('Give another name (male or female)');

if(allNames.indexOf(newName) === -1) {
    var add_name = allNames.push(newName);
    console.log('Added ' + newName + ' to table allNames: [' + allNames + ']');
} else 
    console.log('Name '+ newName +' already inside of table allNames');

console.log('Final table allNames: ['+ allNames+']')