//typeof operator
document.writeln(typeof 'word');

document.writeln(typeof 45);

//checking Coercion
document.writeln('string' + 65)

document.writeln(69 + 'string')

//checking NaN and checking not a number
function my_NaN(){
    document.getElementById('NaN').innerHTML = 0/0;
  
}

function my_NaN1(){
    
    document.getElementById('NaN1').innerHTML = isNaN('String')
    
}


function my_NaN2(){
    
   
    document.getElementById('NaN2').innerHTML = isNaN('000')
}

//Checking Infinity
document.writeln(2E3000)

document.writeln(-2E3000)

//Checking Boolean 
document.writeln(10<2)

document.writeln(10>2)


//console.log()
console.log(45);


//Double equal sign
document.writeln("Double equal signs: ",14==14)


document.writeln(14==24)

document.writeln(14 == '14')

//checking triple equal signs

document.writeln("Triple equal signs: ",10 === 10)

document.writeln(10 === 30)

document.writeln(10 === '10')

//Logical operators

document.writeln("Logical operators: ",10>5 && 15<2)

document.writeln(10>5 || 15<2)

document.writeln("Logical operators: ",10>5 && 15>2)

document.writeln(10<5 || 15<2)

//Not operator

function not_function(){
    document.getElementById('not').innerHTML = !(20>10)
}


function not_function(){
    document.getElementById('not').innerHTML = !(5>10)
}

