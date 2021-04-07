function add(n1, n2, showResult) {
    if (showResult) {
        console.log(n1 + n2);
    }
    else
        return n1 + n2;
}
var number;
number = "string"; //앞에 타입 지정을 안해서 가능
number = 24;
var num1 = 5;
var num2 = 2.8;
var printResult = true;
console.log(add(num1, num2, printResult));
