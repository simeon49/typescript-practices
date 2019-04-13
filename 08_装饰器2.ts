/*
    方法装饰器
 */
class TestClass {
    @log
    foo(s: string) {
        console.log('3==>', this);
        return s;
    }
}

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    let origin = descriptor.value;
    console.log(target);
    descriptor.value = function(...args: any[]) {
        console.log(`args: ${JSON.stringify(args)}`);
        let result = origin.apply(this, args);
        console.log('1==>', this);
        console.log(`result: ${result}`);
        return result;
    }
    descriptor.value.prototype.bind(this);
    console.log('2==>', this);
    return descriptor;
}

new TestClass().foo('abc');
