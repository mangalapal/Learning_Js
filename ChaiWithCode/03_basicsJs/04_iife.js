//immediately Invoked Function Expression(IIFE)
(function data(){
    //named IIFE
    console.log('DB CONNECTED');
})(); //in this case every time use semicolon

// ( () => {
//     console.log('DB connected again');
// } )();

( (name) => {
    console.log(`DB connected again ${name}`);
} )("Mangala");