/***************************************************************************
 * UNION TYPE using the pipeline to allow for another type
 * LITERAL TYPE to avoid typos because the values are literally declared
 *   to avoid using it incorrectly
 * Alias feature is another tool that can help with Unions to avoid long pipelines
****************************************************************************/

// ALIAS TYPE
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable, // instead of number | string
  input2: Combinable,
  resultConversion: ConversionDescriptor // instead of 'as-number' | 'as-text'
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // Can do this or see above for shorter solution
  // if (resultConversion === 'as-number') {
  //   return +result; // As a number (prefix + means as a number)
  // } else {
  //   return result.toString();
  // } 
}

//const combinedAges = combine (30, 26);
const combinedAges = combine (30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine ('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);