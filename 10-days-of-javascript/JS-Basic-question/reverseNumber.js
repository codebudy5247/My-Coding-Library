/**
 JavaScript function that reverse a number.
 */

function reverseNumber(n) {
    let str = n.toString().split('').reverse().join('')
        //parseFloat(str)
        //let result = str * Math.sign(str)
    return str
}
console.log(reverseNumber(5247))
console.log(reverseNumber(2345))

/*
toString()-->change number to string.
parseFloat()-->converts str into a float from a String.
num * Math.sign(str)--> multiplies the number with the signof the original number provided.


There are different ways to convert number to string :

String literal -> str = "" + num + "";
String constructor -> str = String(num);
toString -> str = num.toString();
String Literal simple -> str = "" + num;

*/