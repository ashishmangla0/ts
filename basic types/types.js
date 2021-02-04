// let a = 'ashish';
// console.log(a);
// a = 1;
// //got error of type
/********
 * Basic types
 *
 * Boolean
 * Number
 * String
 * Array
 * Tuple
 * Enum
 * Unknown
 * Any
 * Void
 * Null and Undefined
 * Never
 * Object
 *
 * ******* */
/***********
 * Boolean is the simple true/false.
 * let isDone: boolean = false;
 * ***********/
//  let bool1: boolean = false;
//  let bool2: boolean
//  let bool3 = false;
//  let bool4;
//  console.log(bool1,bool2,bool3,bool4);
/***********
 * Numbers, YS support all types ons numbers, either floating,BigIntegers.
 * bigint type used for Big Integer
 * ***********/
//  let decimal: number = 6;
//et hex: number = 0xf00d;
//  let binary: number = 0b1010;
//  let octal: number = 0o744;
// let big: bigint = 100n; //this will work in ES2020
/***********
 * String, Is another simple  Type in TS.
 * ***********/
//  let color: string = "blue";
//  color = 'red';
//  console.log(color);
// let fullName: string =  'ashish mangla';
// let age: number = 37;
// let sentence: string = `hello, my name is ${fullName} I'll be ${age+1} years old next month. `;
/***********
 * Array, In TS we can define arrays in two ways.
 * let list: number[] = [1,2,3,4]
 * let list: Array<number> = [1,2,3,4]
 * ***********/
// let list: number[] = [1,2,3,4]
// console.log(list);
// let list2: Array<number> = [5,6,7,8]
// console.log(list2);
/***********
  * Tuples, these are similar to the Arrays,but there is one major diffrence is that position in
  * a tuple is fixed once it's been initialized.
  * ***********/
//  let arr = ['ashish',30,true];
//  arr[0] = false;
//  arr[1] = 'mangla';
//  arr[2] = 60;
//  console.log(arr);
/* in the above example we can change the position of content like
//arr = [30,'as',false]
but  in case of tuples this will not done */
// let tup: [string,number,boolean] = ['ashihs',30,true]
// console.log(tup);
// tup[0]= false;
// let student: [string, number];
// student = ['mangla',40];
// console.log(student);
