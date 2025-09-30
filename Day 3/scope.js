var abc = 10;
function xyz() {
    abc = 20;
    return;
    var abc = function () { }
}

xyz();
console.log(abc); //10

/* Explanation:

--Global Variable(abc):

Initially, abc is declared globally with a value of 10.

--Function xyz() Execution:

Inside the function xyz(), we have the line abc = 20;. This might seem like it updates the global abc, 
but there’s a catch.
Variable Hoisting: In JavaScript, variable declarations(with var) are hoisted to the top of their scope.
This means that var abc inside the function is hoisted to the top, but its assignment(function () { }) does 
not happen until that line is executed. */

function xyz() {
    var abc; // Hoisted declaration
    abc = 20; // Assignment to the local `abc` variable
    return;
    abc = function() {}; // This line is never reached due to `return`
}
xyz();
console.log(abc); //10

/* In this case, abc = 20; modifies the local abc (which is undefined initially), not the global one.

-- Returning from xyz():

The return statement ends the execution of the function before the line var abc = function() {} is reached.

-- Logging abc:

When we call console.log(abc), it refers to the global variable abc, which still holds the value 10 
because the local abc inside xyz() did not affect it.

But if we don’t use the var keyword inside function to declare abc variable then output will be 
different let's see: */

var abc = 10;
function xyz() {
   abc = 20;
   return;
   abc = function() { }
}

xyz();
console.log(abc); //20

/* Explanation:

-- Global Variable Initialization:

abc is declared globally and initialized with the value 10.

-- Calling xyz() Function:

When xyz() is called, it executes the following steps:

abc = 20;: This updates the global variable abc to 20 because there is no local declaration of abc using 
var, let, or const in the function scope.
return;: The function immediately returns, exiting before reaching the line abc = function() {}.

-- Logging abc:

Since the global variable abc was updated to 20 inside xyz(), the output of console.log(abc) is 20. */