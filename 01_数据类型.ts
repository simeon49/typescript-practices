// 布尔值
let flag: boolean = true;
console.log(`flag: ${ flag }`);

// 数字
let binaryLiteral: number = 0b10;
console.log(`binaryLiteral: ${ binaryLiteral }`);

let octalLiteral: number = 0o77;
console.log(`octalLiteral: ${ octalLiteral }`);

let decLiteral: number = 6;
console.log(`decLiteral: ${ decLiteral }`);

let hexLiteral: number = 0x10;
console.log(`hexLiteral: ${ hexLiteral }`);

// 字符串
let str: string = 'angular';
console.log(`str: ${ str }`);

// 数组
let arr: number[] = [1, 2];
// let arr: Array<number> = [1, 2];
console.log(`arr: ${ arr }`);

// 元组
let x: [string, number];
x = ['angular', 25];
x = ['angular', 26];
x = ['angular', 27];
console.log(`x: ${ x }`);

// 枚举
enum Color { Red=1, Green, Blue=2 };
let c: Color = Color.Blue;
console.log(`c: ${ c }`);

let [k, ...rest] = [1, 2, 3, 4];
console.log(`k: ${k}, rest: ${rest}`);


/**
 * 结构
 */
let [a1, a2] = [1, 2, 3];
console.log(`a1: ${a1}, a2: ${a2}`);

let {px, py} = {  px: 10, py: 20 };
console.log(`px: ${px}, py: ${py}`);


function abc() {

}

new abc();
