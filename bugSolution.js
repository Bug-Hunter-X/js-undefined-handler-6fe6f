function foo(a, b) {
  if (a === null || b === null || typeof a === 'undefined' || typeof b === 'undefined') {
    return 0; // Handle null and undefined values
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo(undefined, undefined)); // Output: 0