// 函数的参数
function foo1(a, b, c) {
    if (b === void 0) { b = 10; }
    console.log("a: " + a + ", b: " + b + ", c: " + c);
}
foo1(1);
foo1(1, undefined);
foo1(1, null);
foo1(1, 100);
foo1(1, 100, 200);
// 函数的剩余参数
function foo2(a) {
    var restOfNumber = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfNumber[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < restOfNumber.length; i++) {
        result += restOfNumber[i];
    }
    console.log(result);
    return result;
}
foo2(1);
foo2(1, 2, 3, 4, 5);
function css(config, value) {
    if (typeof config === 'string') {
        console.log("{" + config + ": " + value + "}");
    }
    else if (typeof config === 'object') {
        console.log(config);
    }
}
css({ x: 100 });
css('x', '100');
// 箭头函数
var gift = {
    gifts: ['teddy bear', 'spiderman', 'dinosaut', 'Thomas loco', 'toy bricks', 'Transformers'],
    giftPicker_1: function () {
        return function () {
            return this.gifts[Math.floor(Math.random() * 6)];
        };
    },
    giftPicker_2: function () {
        var _this = this;
        return function () {
            console.log(Math.random() * 6);
            return _this.gifts[Math.floor(Math.random() * 6)];
        };
    }
};
var pickGift = gift.giftPicker_1();
console.log(pickGift());
pickGift = gift.giftPicker_2();
console.log(pickGift());
