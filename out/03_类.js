var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
        this.a = 'private';
        this.b = 'protected';
    }
    // 也可写成下面的样子
    // constructor(public engine: string, private a: string, protected b: string) {
    // }
    Car.prototype.drive = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log("drive " + meters + " with " + this.engine + " engine");
    };
    Car.n = 100;
    return Car;
}());
var Jeep = (function (_super) {
    __extends(Jeep, _super);
    function Jeep(engine) {
        return _super.call(this, engine) || this;
    }
    Jeep.prototype.blat = function () {
        console.log('jeep, jeep ...');
    };
    Jeep.prototype.drive = function (meters) {
        if (meters === void 0) { meters = 0; }
        // this.a = '';    // 派生类不能访问基类的私有成员
        this.b = 'protected';
        console.log('deep:');
        _super.prototype.drive.call(this, meters);
    };
    return Jeep;
}(Car));
var LandRover = (function (_super) {
    __extends(LandRover, _super);
    function LandRover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LandRover.prototype.drive = function (meters) {
        if (meters === void 0) { meters = 0; }
        this.b = 'protected';
    };
    return LandRover;
}(Jeep));
var jeep = new Jeep('petrol');
// let car: Car = new Car('petrol');    // 抽象类不能实例化
var landRover = new LandRover('petrol');
console.log(Car.n);
console.log(this.n); // undefined 无法访问到Car.n
// jeep.a;    // 内部成员不能访问
// jeep.b;
jeep.drive(10);
