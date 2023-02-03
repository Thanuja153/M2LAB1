//STEP 1
function halfNumber(a) {
  document.write(" Half of  "+ a + " is " + a/2 + "." );
}
halfNumber(5);

//STEP 2
function squareNumber(a) {
  document.write("<br>"+" The result of squaring number of " + a + " is " + a*a);
}
squareNumber(3);


//STEP 3
function percentOf(a,b) {
  document.write("<br>"+ a + " is " + (a/b)*100 + "% of " + b );
}
percentOf(2,4);

//STEP 4
function findModulus(a,b) {
  document.write("<br>"+ (b%a)  + " is the modulus of " + a + " and " + b );
}
findModulus(4,10);


//STEP 5
var Number1;
var Number2;
var Number3;

function sum(numbers) {
    var base = Number(numbers), i;
    for (i = 1; i < arguments.length; i += 1) {
        base += Number(arguments[i]);
    }
    window.document.write("<br>" + "The sum of " + Number1 + " , " + Number2 + " , " + Number3 + " is " + base + ".");
}

Number1 = parseFloat(window.prompt("Enter first number:"));
Number2 = parseFloat(window.prompt("Enter second number:"));
Number3 = parseFloat(window.prompt("Enter third number:"));
sum(Number1,Number2, Number3);