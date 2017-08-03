// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var dinosaurUC = dinosaur.toUpperCase();

var newText = text.replace('Velociraptor', dinosaurUC);

console.log(newText.slice(0, newText.length/2));