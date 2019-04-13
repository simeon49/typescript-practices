function printLabel(name) {
    console.log(name.firstName + " " + name.secondName);
    console.log(name);
}
var someOne = { age: 10, firstName: 'Jim', secondName: 'Raynor' };
printLabel(someOne);
var md5;
md5 = function (v, salt) {
    return 'xxxxxxxx';
};
var userArray;
var userObject;
userArray = ['Tom', 'Jim'];
userObject = { 'name': 'Tom' };
console.log(userArray[0] === userArray['0']); // true
console.log(userObject['name']);
var Dog = (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.eat = function () {
        console.log('dog eat...');
    };
    Dog.prototype.run = function (metre) {
        console.log("dog run " + metre);
    };
    return Dog;
}());
