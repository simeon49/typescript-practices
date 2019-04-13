/**
 * 装饰器是typescript的实验性特性
 * 必须在命令行或tsconfig.json里启用experimentalDecorators
 *
 * 参考: http://www.w3cschool.cn/typescript/typescript-decorators.html
 */

@sealed
class Greeter {
    @format("Hello, %s")
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }

    newGreet() {
        let formatString = getFormat(this, 'greeting');
        return formatString.replace('%s', this.greeting);
    }

    setGreeting(@required greeting: string) {
        this.greeting = greeting;
    }
}

/*
    类装饰器

    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 */
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}


/*
    方法装饰器

    方法装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
    3.成员的属性描述符。
 */
function enumerable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}

/*
    属性装饰器

    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
 */
import "reflect-metadata";

const formatMetadataKey = Symbol('format');

function format(formatString: string) {
    return Reflect.metadata(formatMetadataKey, formatString);
}

function getFormat(target: any, propertyKey: string) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}


/*
    参数装饰器

    参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
    3.参数在函数参数列表中的索引。

 */
const requiredMetadataKey = Symbol("required");

function required(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    let existingRequiredParameters: number[] = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
    existingRequiredParameters.push(parameterIndex);
    Reflect.defineMetadata(requiredMetadataKey, existingRequiredParameters, target, propertyKey);
}

/*
    访问器装饰器

    访问器装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
    3.成员的属性描述符。
 */
class Point {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() {
        return this._x;
    }

    @configurable(false)
    get y() {
        return this._y
    }
}
function configurable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    }
}




