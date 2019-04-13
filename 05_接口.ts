/*
    实例 1 (属性类型)
 */
interface FullName {
    firstName: string;
    secondName?: string;
}

function printLabel(name: FullName) {
    console.log(`${name.firstName} ${name.secondName}`);
    console.log(name);
}

var someOne = {age: 10, firstName: 'Jim', secondName: 'Raynor'}
printLabel(someOne);



/*
    实例 2 (函数类型)
 */
interface encrypt {
    (val: string, salt: string): string;
}

let md5: encrypt;
md5 = function(v: string, salt: string) {
    return 'xxxxxxxx';
}


/*
    实例 3 (可索引类型)
 */
interface UserArray {
    [index: number]: string;
}

interface UserObject {
    [index: string]: string;
}

let userArray: UserArray;
let userObject: UserObject;

userArray = ['Tom', 'Jim'];
userObject = {'name': 'Tom'};

console.log(userArray[0] === userArray['0']);    // true
console.log(userObject['name']);


/*
    实例 4 (类类型)
 */
interface Animal {
    name: string;
}

interface Lactation extends Animal {
    eat(): void;
    run(metre: number): void;
}

class Dog implements Lactation {
    constructor(public name: string) {    // 此处需要用public
    }

    eat() {
        console.log('dog eat...');
    }

    run(metre: number) {
        console.log(`dog run ${metre}`);
    }
}

