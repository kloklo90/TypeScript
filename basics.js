console.log("TypeScript 2021 Beginner App");
/***************************************************************************
 *  A small code block to explore Core Types that are supported in TypeScrypt
 * Basic Types are:
 * Number: All numbers
 * Boolean: only true or false no falsy, truthy values
 * String: All String values
 ***************************************************************************/
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
// console.log(result);
// Exclamation mark to reassure TypeScript that a button 
// will exist and this will not cause a null error
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function () {
        console.log('Clicked!');
    });
}
