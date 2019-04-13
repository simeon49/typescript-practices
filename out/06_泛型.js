/*
    实例 1
 */
console.log('\t======= 实例 1 =======');
function echo(s) {
    return s;
}
console.log(echo(100));
console.log(echo('abc'));
/*
    实例 2
 */
console.log('\t======= 实例 2 =======');
function printArray(a) {
    for (var i = 0; i < a.length; i++) {
        console.log(a[i]);
    }
}
printArray(['a', 'b', 'c']);
printArray([1, 2, 3]);
/*
    实例 3
 */
console.log('\t======= 实例 3 =======');
var myEcho = echo;
console.log(echo(200));
;
console.log('\t======= 实例 4 =======');
var myEcho2 = echo;
console.log(echo(200));
