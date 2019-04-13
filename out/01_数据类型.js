// 布尔值
var flag = true;
console.log("flag: " + flag);
// 数字
var binaryLiteral = 2;
console.log("binaryLiteral: " + binaryLiteral);
var octalLiteral = 63;
console.log("octalLiteral: " + octalLiteral);
var decLiteral = 6;
console.log("decLiteral: " + decLiteral);
var hexLiteral = 0x10;
console.log("hexLiteral: " + hexLiteral);
// 字符串
var str = 'angular';
console.log("str: " + str);
// 数组
var arr = [1, 2];
// let arr: Array<number> = [1, 2];
console.log("arr: " + arr);
// 元组
var x;
x = ['angular', 25];
x = ['angular', 26];
x = ['angular', 27];
console.log("x: " + x);
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Blue;
console.log("c: " + c);
var _a = [1, 2, 3, 4], k = _a[0], rest = _a.slice(1);
console.log("k: " + k + ", rest: " + rest);
/**
 * 结构
 */
var _b = [1, 2, 3], a1 = _b[0], a2 = _b[1];
console.log("a1: " + a1 + ", a2: " + a2);
var _c = { px: 10, py: 20 }, px = _c.px, py = _c.py;
console.log("px: " + px + ", py: " + py);
function abc() {
}
new abc();
