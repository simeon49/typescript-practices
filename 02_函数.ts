// 函数的参数
function foo1(a: number, b: number=10, c?: number) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`);
}
foo1(1);
foo1(1, undefined);
foo1(1, null);
foo1(1, 100);
foo1(1, 100, 200);


// 函数的剩余参数
function foo2(a: number, ...restOfNumber: number[]): number {
    let result = a;
    for (let i = 0; i < restOfNumber.length; i ++) {
        result += restOfNumber[i];
    }
    console.log(result);
    return result;
}
foo2(1);
foo2(1, 2, 3, 4, 5);
// foo2(1, 'sd');


// 函数重载
function css(config: {});
function css(config: string, value: string);
function css(config: any, value?: any) {
    if (typeof config === 'string') {
        console.log(`{${config}: ${value}}`);
    } else if (typeof config === 'object') {
        console.log(config);
    }
}
css({x: 100});
css('x', '100');


// 箭头函数
let gift = {
    gifts: ['teddy bear', 'spiderman', 'dinosaut', 'Thomas loco', 'toy bricks', 'Transformers'],

    giftPicker_1: function() {
        return function() {
            return this.gifts[Math.floor(Math.random() * 6)];
        }
    },

    giftPicker_2: function() {
        return () => {
            console.log(Math.random() * 6);
            return this.gifts[Math.floor(Math.random() * 6)];
        }
    }
}
let pickGift = gift.giftPicker_1()
console.log(pickGift());
pickGift = gift.giftPicker_2();
console.log(pickGift());

