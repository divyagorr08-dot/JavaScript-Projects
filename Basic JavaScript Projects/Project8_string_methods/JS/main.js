//Concatenation

function concat_sentence(){
var firstName = 'Divya';
var lastName = ' Gorr';
var complete  = ' is a complete name';
var whole_sentence = firstName.concat(lastName, complete);
document.getElementById('concatenate').innerHTML = whole_sentence;
}

//Slice
function slice_method(){
    var sentence = "All work and no play makes Jhonny and a dull boy";
    var section = sentence.slice(27, 33);
    document.getElementById('slice').innerHTML = section;
}

//Uppercase
function uppercase_method(){
    var sentence = "All work and no play makes Jhonny and a dull boy";
     var section = sentence.toUpperCase();
     document.getElementById('uppercase').innerHTML = section;

    
}


function toString_method(){
    var x = 152;
    document.getElementById('toString').innerHTML = x.toString()
    console.log(typeof x.toString())
   
    
}

function percision_method(){
    var x = 128647.84894
    document.getElementById('percision').innerHTML = x.toPrecision(10)
}


function toFixed_method(){
var x = 172.378646548564864
document.getElementById('toFixed').innerHTML = x.toFixed(4)
}



function valueOf_method(){
    var x = 172.378646548564864
document.getElementById('valueOf').innerHTML = x.valueOf()
console.log(typeof x)

}