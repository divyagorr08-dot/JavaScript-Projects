//Length

var text = "This is String";
var length = text.length;
document.writeln(length)


//Loop

var strings = ['One', 'Two', "Three", 'Four', 'Five', 'Six', 'Seven', 'Eight'];
var content = "";
var i;
function call_loop(){
    for(i=0; i<strings.length;i++){
        content+=strings[i]+"<br>"
    }
    document.getElementById('loop').innerHTML = content;
}

//Arrays
function cat_pics(){
    var cat_picture = [];
    cat_picture[0] = 'sleeping';
    cat_picture[1] = 'playing';
    cat_picture[2] = 'eating';
    cat_picture[3] = 'purring';
    document.getElementById('cat').innerHTML = "In this icture, the cat is " + cat_picture[2] + "."
}

//Const keyword
function constant_function(){
const instrument = {type:"guitar", brand:"Fender", color:"black"};
instrument.color = "blue";
instrument.price = "$900";
document.getElementById('constant').innerHTML = "The cost of the "+ instrument.type +"  was "+instrument.price
}

//let keyword

var x = 82;
document.writeln(x);
{
    let x =33;
    document.writeln("<br>" + x);
}
document.writeln("<br>" + x);


var y = 82;
document.writeln(y);
{
    var y =33;
    document.writeln("<br>" + y);
}
document.writeln("<br>" + y);

//Object
let car = {
    make:"Dodge",
    model: "Viper",
    year: "2021",
    color: "red",
    description : function(){
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
}
document.getElementById('car_object').innerHTML = car.description();