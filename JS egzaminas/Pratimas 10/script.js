/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

export function composition(a, b) {
    return a + b;
  }

export function multiplication(a, b) {
    return a * b;
  }  

export function substraction(a, b) {
    return a - b;
  }

export function division(a, b) {
    return a / b;
  }

import { composition } from "./modules/math/composition.js"
import { division } from "./modules/math/division.js"
import { substraction  } from "./modules/math/subtraction.js"
import { multiplication  } from "./modules/math/multiplication.js"
import {one, two, three, four, five } from "./modules/numbers/numbers.js"

let a = composition(one, four);
let b = division(four, two);
let c = subtraction(three, two);
let d = multiplication(five, two);

console.log(a); 
console.log(b); 
console.log(c); 
console.log(d); 