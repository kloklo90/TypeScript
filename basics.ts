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


/** Taking a look at compiler options in tsconfig.js */

// Exclamation mark to reassure TypeScript that a button 
// will exist and this will not cause a null error
// instead of if block check
const button = document.querySelector('button')!;

// if (button) {
button.addEventListener('click', () => {
  console.log('Clicked!');
});
// }

const secondButton = document.querySelector(".secondBtn");

function clickHandler(message: string) {
  console.log('Clicked! ' + message);
}

if (secondButton) {
  secondButton.addEventListener('click', clickHandler.bind(null, "You"))
}