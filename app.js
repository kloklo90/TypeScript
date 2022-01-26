/***************************************************************************
 * UNION TYPE using the pipeline to allow for another type
 * LITERAL TYPE

****************************************************************************/
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
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
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
