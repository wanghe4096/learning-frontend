// 原型prototype
function f() {
    typeof f.prototype
}

function Animal(name) {
    this.name = name
}


Animal.prototype.color = "white";
var cat1 = new Animal("大毛");
var cat2 = new Animal("二毛");

console.log(cat1.color);

cat2.color = "black"
console.log(cat2.color);

// constructor 

function P() {
    P.prototype.constructor === p
}

console.log(P())