function add_function() {
    var addition = 3 + 6;
   
    document.getElementById('Add').innerHTML = "3 + 6 = " + addition;
    
}


function subtract_function() {
   
    var subtract = 9 - 4;
    
    document.getElementById('Subtract').innerHTML = "9 - 4 = " + subtract;
}

function multiply_function() {
   
    var multiply = 9 * 4;
    
    document.getElementById('Multiply').innerHTML = "9 * 4 = " + multiply;
}

function divide_function() {
   
    var divide = 9 / 4;
    
    document.getElementById('Divide').innerHTML = "9 / 4 = " + divide;
}

function multi_function() {
   
    var multiple = (3+6) * 4 / 10 -7 ;
    
    document.getElementById('Multi').innerHTML = "(3+6) * 4 / 10 -7 = " + multiple;
}

function mod_function() {
   
    var modulus = 25 % 5 ;
    
    document.getElementById('Modulus').innerHTML = "25 % 5 = " + modulus;
}

function unary_function() {
   
    var y = 25;
    
    document.getElementById('Unary').innerHTML = -y;
}

var x = 10
x++
document.writeln("Increment = " + x)

var z = 6
z--
document.writeln("Decrement =  " + z)

window.alert(Math.random())

window.alert(Math.random() * 100)


function increment_function() {
   
    var value = document.getElementById('Increment').innerHTML;
    value++;
    
    document.getElementById('Increment').innerHTML = value;
}

function decrement_function() {
   
     var value = document.getElementById('Decrement').innerHTML;
    value--;
    
    document.getElementById('Decrement').innerHTML = value;
}