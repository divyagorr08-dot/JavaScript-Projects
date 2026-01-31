//Classname
function class_function(){
    var A = document.getElementsByClassName('click');
    A[0].innerHTML = "The text has changed";
}


//Canvas Challenge
var c = document.getElementById("id_name");
var ctx = c.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();


// const c = document.getElementById("myCanvas");
// const ctx = c.getContext("2d");

// const grd = ctx.createLinearGradient(0, 0, 170, 0);
// grd.addColorStop(0, "black");
// grd.addColorStop(1, "white");

// ctx.fillStyle = grd;
// ctx.fillRect(20, 20, 150, 100);