// scripts.js

var a = prompt('Give the value of a');

function drawTree(a) {
    for(var i=1; i<=a; i++) {
        var star = '';
        
        for(var j=i; j<a; j++) {
            star += ' ';
        }
        for(j=0; j<(i*2)-1; j++) {
            star += '*';
        }
        
    console.log(star);
    }
}
drawTree(a);