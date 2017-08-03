function Phone(brand, model, price, color) {
	this.brand = brand;
	this.model = model;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("This is a " + this.color + " smartphone " + this.model + " from "+ this.brand + " and its price is $" + this.price);
}

Phone.prototype.specs = function Info(ram, os, mem) {
	this.ram = ram;
	this.os = os;
	this.mem = mem;
	console.log("RAM: " + this.ram + "GB, OS: " + this.os + ", MEMORY: " + this.mem + "GB");
}

var samsung = new Phone("Samsung", "Galaxy S6", 2200, "black");
samsung.printInfo();
samsung.specs(2, "Android", 32);
var iphone = new Phone("Apple", "iPhone 6S", 3000, "white");
iphone.printInfo();
iphone.specs(2, "OSX", 64);
var oneplusone = new Phone("OnePlus", "One", 5000, "silver-white");
oneplusone.printInfo();
oneplusone.specs(3, "Android", 64);