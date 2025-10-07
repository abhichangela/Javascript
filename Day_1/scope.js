(function(){
   var a=b=3;
})();
console.log(typeof a); //undefined
console.log(typeof b); //number
console.log("----------------");

(function(){
   b = 3;
   var a = b;
})();
console.log(typeof a); //undefined
console.log(typeof b); //number
console.log("----------------");

(function(){
    a=b=3;
})();
console.log(typeof a); // number
console.log(typeof b); // number