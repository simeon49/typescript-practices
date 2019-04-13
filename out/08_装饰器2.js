var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
    方法装饰器
 */
var TestClass = (function () {
    function TestClass() {
    }
    TestClass.prototype.foo = function (s) {
        console.log('3==>', this);
        return s;
    };
    __decorate([
        log,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], TestClass.prototype, "foo", null);
    return TestClass;
}());
function log(target, propertyKey, descriptor) {
    var origin = descriptor.value;
    console.log(target);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("args: " + JSON.stringify(args));
        var result = origin.apply(this, args);
        console.log('1==>', this);
        console.log("result: " + result);
        return result;
    };
    descriptor.value.prototype.bind(this);
    console.log('2==>', this);
    return descriptor;
}
new TestClass().foo('abc');
