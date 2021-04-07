//  function return types and void
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
    //return; // 이럴 경우 undefined로 결과 타입을 줄 수 있으나 void로 리턴하는게 좋음
}
printResult(add(2, 3));
//let someValue:undefined;
// let combineValuse;
// let combineValues:Function;
var combineValues;
combineValues = add;
// combineValues=5;//이럴 경우 에러남
// combineValues=printResult;
printResult(combineValues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (num) {
    console.log(num);
    return num; //무시된다. 리턴 void 타입은 리턴으로 뭘하든 무시하겠다는 뜻이다.
});
