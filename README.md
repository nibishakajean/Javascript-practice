# JavaScript Array Operations Documentation

This documentation provides an overview of various array operations implemented in JavaScript.

## Overview

This JavaScript file (`script.js`) contains implementations of common array operations such as `toString()`, `join()`, `concat()`, `splice()`, `slice()`, `indexOf()`, `flat()`, high order methods like `forEach()`, `map()`, `filter()`, `reduce()`, and others.

## Description

The file includes examples and explanations for each array operation, demonstrating how to use them effectively in JavaScript.

## Contents

1. `toString()`: Converts an array to a string.
2. `join()`: Joins all elements of an array into a string.
3. `concat()`: Concatenates two or more arrays.
4. `splice()`: Adds or removes elements from an array.
5. `slice()`: Extracts a section of an array and returns a new array.
6. `indexOf()`: Returns the first index at which a given element can be found in the array.
7. `flat()`: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
8. High Order Methods:
   - `forEach()`: Executes a provided function once for each array element.
   - `map()`: Creates a new array with the results of calling a provided function on every element in the calling array.
   - `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
   - `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.
9. `some()`: Checks if at least one element in the array satisfies the condition.
10. `every()`: Checks if all elements in the array satisfy the condition.
11. `findIndex()`: Returns the index of the first element that satisfies the provided testing function.
12. `sort()`: Sorts the elements of an array in place.

## Usage

To use these array operations, simply include the `script.js` file in your JavaScript project and call the desired function with appropriate arguments.

## Example

```javascript
// Example usage of toString()
let names=['danny','joe','sarah','felix']
let stringNames = names.toString(); // Convert array to string
console.log("toString():", stringNames) // Output: danny,joe,sarah,felix
