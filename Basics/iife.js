// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();// we have explicitly specify iife is is done with ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('hitesh')

//()() in the first parenthesis function definition and second parenthesis is for execution
// we use iife to avoid global scope pollution 
