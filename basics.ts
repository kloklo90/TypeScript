export {}
console.log("TypeScript 2021 Beginner App");

/***************************************************************************
 *  A small code block to explore Core Types that are supported in TypeScrypt
 * Basic Types are: 
 * Number: All numbers
 * Boolean: only true or false no falsy, truthy values
 * String: All String values 
 ***************************************************************************/

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if(showResult) {
    console.log(phrase + result);
  } else {
    return n1 + n2;
  }
    
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

add(number1, number2, printResult, resultPhrase);
// console.log(result);