
/***************************************************************************
 * A small code block to explore Core Types that are supported in TypeScrypt
 * Exploring Object Type
 * Objects ---> CORE TYPES
 * Arrays of strict or flexible type eg. String[]
 * Special new types TUPLE - array of fixed-length - exactly 2 elements
 * Enum type enum {NEW, OLD} - doesnt exist in js but other languages 
 * Enum gives human readable labels from 0 to n
 * Any type will hold anything. Typescript Compiler will never complain please avoid using
 ***************************************************************************/

// ENUMS SPECIAL TYPES 
// Capital variable declaration for custom types
// The global variables are uppercase as usual but any case will work
enum Role {ADMIN, READ_ONLY, AUTHOR};
//___________0________1__________2__


// OTHER EXAMPLES OF ENUM values
//enum Role {ADMIN = 5, READ_ONLY, AUTHOR};
//___________________5______6_________7__

//enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 200};
//____________________ADMIN_______________100___________200__

/*const person
: {
  name: string;
  age: number;
  hobbies: string[];
  role : [number, string]; // TUPLE type array of exactly 2 elements
} = 
*/
const person = {
  name: 'Khady',
  age: 30,
  hobbies: ['Eating', 'Cooking'],
  role: Role.ADMIN
  //role: [2, 'author']
};

// Manipulation of TUPLE TYPE
// will work and will change size of array
// person.role.push('admin'); 

// Wont work as you can't assign a number to the string placeholdert
// person.role[1] = 10; 

// Target object requires size of 2 so this won't work
// person.role = []; //

// !!! Not a good practice but helps to see the breakdown of types
// const person: { 
//   name: string;
//   age: number;
// } = {
//   name: 'Maximilian',
//   age: 30
// };


console.log(person.name);

// Will print only enum index of role
console.log(person.role);

if (person.role === Role.AUTHOR) {
  console.log(' is author');
}

let favoriteActivites: string[]; // Can use any[] but not that good you go back to regular js 
// !!! Not working because 1 is in there
// favoriteActivites = ['Sports', 1];
favoriteActivites = ['Sports'];

for (const hobby of person.hobbies) {
  // Hobby is correctly identified as String 
  console.log(hobby.toUpperCase());
  
  // Error from Typescript this is not possible for type string
  // console.log(hobby.map());
}