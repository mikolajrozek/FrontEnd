// scripts.js

var a = prompt('Enter the value for a');
var b = prompt('Enter the value for b');

value = (a*a) + (2*a*b) - (b*b);

if (value > 0) {
	console.log('Value of (a*a) + (2*a*b) - (b*b) for a: ' + a + ' and b: ' + b + ' is ' + value + ' and is greater than 0');
} else if (value == 0) {
	console.log('Value of (a*a) + (2*a*b) - (b*b) for a: ' + a + ' and b: ' + b + ' is ' + value + ' and is equal to 0(duuuh!)');
} else
	console.log('Value of (a*a) + (2*a*b) - (b*b) for a: ' + a + ' and b: ' + b + ' is ' + value + ' and is less than 0');


switch (value == 0) {
	
	case true:
	console.log('value is equal to 0');
	break;

	case false:
	console.log('value is not equal to 0');
	break

	default:

}