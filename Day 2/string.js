console.log(1 + 1); //2
console.log("1" + 1); //11
console.log("-----------------");

console.log(1 + +"2"); //3
console.log(1 + +"2" + 3); //6
console.log(1 + +"2" + +"3"); //6
console.log(1 + -"1"); //0
console.log("-----------------");
/* Explanation:

--> Unary Plus (+) or (-) Operator:

--> The expression contains +"2", where the unary plus (+) operator is used before the string "2".
--> In JavaScript, the unary plus (+) operator attempts to convert the operand to a number. In this case, "2" (a string) is 
converted to the number 2.
--> Now the expression becomes 1 + 2.
--> This is a simple arithmetic addition of two numbers, resulting in 3. */

console.log("A" -"B" + "2"); //NaN2
console.log("-----------------");

/* Explanation:

--> In JavaScript, the - operator is used for numeric subtraction. When you try to subtract two strings (e.g., "A" - "B"), 
JavaScript attempts to convert them to numbers.
--> Since "A" and "B" are non-numeric strings, the result of "A" - "B" is NaN (Not-a-Number).
--> Now, the expression is NaN + "2".
--> When you add a string to NaN, JavaScript converts NaN to a string and concatenates it with "2".
--> So, NaN + "2" becomes "NaN2". */

console.log("A" - "B" + 2); //NaN

/* Explanation:

--> As we have already seen when "A" - "B" result is NaN
--> Next, the expression is NaN + 2.
--> Adding any number to NaN results in NaN.
--> So, NaN + 2 evaluates to NaN. */