abstract class Car {
    public engine: string;
    private a: string;
    protected b: string;

    static n: number = 100;

    constructor(engine: string) {
        this.engine = engine;
        this.a = 'private';
        this.b = 'protected';
    }

    abstract blat(): void;    // 抽象方法

    // 也可写成下面的样子
    // constructor(public engine: string, private a: string, protected b: string) {
    // }

    drive(meters: number = 0) {
        console.log(`drive ${meters} with ${this.engine} engine`);
    }
}

class Jeep extends Car {
    constructor(engine: string) {
        super(engine);
    }

    blat() {
        console.log('jeep, jeep ...');
    }

    drive(meters: number = 0) {
        // this.a = '';    // 派生类不能访问基类的私有成员
        this.b = 'protected';
        console.log('deep:');
        super.drive(meters);
    }
}

class LandRover extends Jeep {

    drive(meters: number = 0) {
        this.b = 'protected';
    }
}

let jeep: Car = new Jeep('petrol');
// let car: Car = new Car('petrol');    // 抽象类不能实例化
let landRover: LandRover = new LandRover('petrol');

console.log(Car.n);
console.log(this.n);    // undefined 无法访问到Car.n

// jeep.a;    // 内部成员不能访问
// jeep.b;

jeep.drive(10);

