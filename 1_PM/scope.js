/**
 * Part 1:
 *    What will print and why?
 *    What will change if we delete line 15? Why?
 * 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

const x = () => {
  let a;
  console.log(a);
}

const y = () => {
  const a = 2;
  console.log(a);
  x();
}

const a = 1;
console.log(a);
y();


/**
 * Part 1:
 *    What will print and why?
 * this will print 1 (because function x calls variable a which is defined below as "1"), 2 (because function y is next and calls variable a which is locally defined as "2"), and I'm not certain what would be printed next
 *    What will change if we delete line 15? Why?
 * it would just print "a" becasue it doesn't understand that "a" is a variable, not just a character
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 * 
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */
