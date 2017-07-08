// scripts.js

var buttons = document.getElementsByClassName("button");

for(var i=0; i<buttons.length; i++) {
    
    var butt = buttons[i];
    var text = butt.innerText;
    
    alert(text);
}