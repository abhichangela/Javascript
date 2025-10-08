var abc = { "greeting": "Hello" };
var xyz = { "greeting": "Hello" };
console.log(abc == xyz) //false

/* Explanation:

-- Object References:

In JavaScript, objects are reference types. This means that variables like abc and xyz do not hold
the actual object data, but rather a reference (or pointer) to the location in memory where the object 
is stored.
Even though abc and xyz have the same content ({"greeting": "Hello"}), they are two different objects 
stored at different memory locations.

-- Equality Check (==):

When you use == (or ===) to compare two objects, JavaScript checks if they refer to the same memory 
location, not if their contents are equal.
Since abc and xyz are two distinct objects, abc == xyz evaluates to false. */

var abc = { "greeting": "Hello" };
var xyz = { "greeting": "Hello" };
console.log(JSON.stringify(abc) == JSON.stringify(xyz)); //true

/* Explanation:

-- Using JSON.stringify():

JSON.stringify() converts the object into a JSON string representation.
In this case, JSON.stringify(abc) results in {"greeting":"Hello"} and so does JSON.stringify(xyz).
The string representations are identical, so JSON.stringify(abc) == JSON.stringify(xyz) evaluates to 
true. */

var abc = { "greeting": "Hello" };
var xyz = { "greeting": "Hello" };
var pqr = abc;
console.log(abc == pqr); // true
console.log(xyz == pqr); // false

/* Explanation:

-- Object References:

abc and xyz are two separate objects with identical content ({"greeting": "Hello"}), but they are 
stored in different memory locations.
pqr = abc; assigns pqr the reference to the same object as abc.

-- First Comparison (abc == pqr):

This checks if abc and pqr point to the same object in memory.
Since pqr was assigned directly from abc, they both reference the same object.
Therefore, abc == pqr evaluates to true.

-- Second Comparison (xyz == pqr):

This checks if xyz and pqr point to the same object.
xyz is a separate object with the same content, but it has a different memory reference.
Therefore, xyz == pqr evaluates to false. */
