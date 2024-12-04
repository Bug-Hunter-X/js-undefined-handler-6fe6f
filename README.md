# JavaScript Function: Handling Undefined Values

This repository demonstrates a common error in JavaScript: not handling `undefined` values. The initial `foo` function correctly handles `null` values, but it fails when it encounters `undefined` arguments.  The solution shows how to robustly handle both `null` and `undefined`. This is crucial for preventing unexpected errors, especially when dealing with user inputs or external data sources that might not always be fully defined.

## Bug

The provided `bug.js` demonstrates a function that gracefully handles `null` but throws an error if passed `undefined` arguments.  See the console output for the error when running `bug.js`.

## Solution

The `bugSolution.js` file shows how to modify the function to also handle `undefined` values using a check with `typeof`.  This prevents unexpected `TypeError` exceptions.

## How to run

1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment (e.g., Node.js, browser console).
3. Execute the scripts to see the difference in behavior.