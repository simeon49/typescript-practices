"use strict";
/**
 * 装饰器是typescript的实验性特性
 * 必须在命令行或tsconfig.json里启用experimentalDecorators
 *
 * 参考: http://www.w3cschool.cn/typescript/typescript-decorators.html
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.prototype.newGreet = function () {
        var formatString = getFormat(this, 'greeting');
        return formatString.replace('%s', this.greeting);
    };
    Greeter.prototype.setGreeting = function (greeting) {
        this.greeting = greeting;
    };
    __decorate([
        format("Hello, %s"),
        __metadata("design:type", String)
    ], Greeter.prototype, "greeting", void 0);
    __decorate([
        enumerable(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Greeter.prototype, "greet", null);
    __decorate([
        __param(0, required),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Greeter.prototype, "setGreeting", null);
    Greeter = __decorate([
        sealed,
        __metadata("design:paramtypes", [String])
    ], Greeter);
    return Greeter;
}());
/*
    类装饰器

    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
 */
function sealed(constructor) {
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
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
/*
    属性装饰器

    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
 */
require("reflect-metadata");
var formatMetadataKey = Symbol('format');
function format(formatString) {
    return Reflect.metadata(formatMetadataKey, formatString);
}
function getFormat(target, propertyKey) {
    return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}
/*
    参数装饰器

    参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：
    1.对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2.成员的名字。
    3.参数在函数参数列表中的索引。

 */
var requiredMetadataKey = Symbol("required");
function required(target, propertyKey, parameterIndex) {
    var existingRequiredParameters = Reflect.getOwnMetadata(requiredMetadataKey, target, propertyKey) || [];
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
var Point = (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        configurable(false),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Point.prototype, "x", null);
    __decorate([
        configurable(false),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Point.prototype, "y", null);
    return Point;
}());
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.configurable = value;
    };
}
