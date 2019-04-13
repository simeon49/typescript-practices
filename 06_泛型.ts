/*
    实例 1
 */
console.log('\t======= 实例 1 =======');
function echo<T>(s: T): T {
    return s;
}
console.log(echo<number>(100));
console.log(echo<string>('abc'));

/*
    实例 2
 */
console.log('\t======= 实例 2 =======');
function printArray<T>(a: T[]): void {
    for (let i = 0; i < a.length; i ++) {
        console.log(a[i]);
    }
}
printArray<string>(['a', 'b', 'c']);
printArray<number>([1, 2, 3]);

/*
    实例 3
 */
console.log('\t======= 实例 3 =======');
let myEcho: <U>(x: U) => U = echo;
console.log(echo<number>(200));

/*
    实例 4
 */
interface echoFn {
    <T>(arg: T): T;
};
console.log('\t======= 实例 4 =======');
let myEcho2: echoFn = echo;
console.log(echo<number>(200));
