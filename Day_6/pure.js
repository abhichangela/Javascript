/* What is Pure function?

-> In Javascript, a pure function is one that, given the same input will always return the same output
and does not produce any observable side effects

Characteristics of Pure function

-> Deterministic: Given the same input, it always returns the same output
-> No side effects: Does not alter any external state or internal with outside variables

Where to use Pure function

-> Data Transformation: Ideal for mapping, filtering and reducing data.
-> State Management: Ensures state immutabilitiy, especially in frameworks like Redux
-> Unit Testing: Simplifies testing by providing predictable outputs.
-> Funtional programming: Core concept for writing cleaner and more reliable code */

// Impure function example
let user = { name: 'Alice', age: 20 }
function incrementAge(user) {
    user.age++;
    console.log(user); //{ name: 'Alice', age: 21 }
    return user;
}

incrementAge(user);

// Pure function
let newUser = { name: 'Alice', age: 20 }
function newIncrementAge(newUser) {
    let incrementAge = {...newUser, age: newUser.age + 1};
    console.log(newUser);// { name: 'Alice', age: 21 }
    console.log(incrementAge); // { name: 'Alice', age: 21 }
    return incrementAge;
}

newIncrementAge(newUser);

/* The refactored function returns a new object without modifying the original user object */