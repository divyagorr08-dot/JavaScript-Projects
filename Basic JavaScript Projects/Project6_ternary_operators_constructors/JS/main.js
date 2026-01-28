//Ternary Operators

function ride_function(){
    var height, can_ride;
    height = document.getElementById('height').value;
    can_ride = (height<52) ? "you are too short" : 'you are tall enough'
    document.getElementById('ride').innerHTML = can_ride + ' to ride.'
}


function vote_function(){
    var height, can_vote;
    height = document.getElementById('years').value;
    can_vote = (height<18) ? "You are not old enough to vote" : 'You can vote!'
    document.getElementById('vote').innerHTML = can_vote + ' to ride.'
}

//Constructor
function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction(){
    document.getElementById("Keywords_and_Constructors").innerHTML = 'Erik drives a ' + Erik.Vehicle_Color + "-colored "+ Erik.Vehicle_Model + "manfactured in " +Erik.Vehicle_Year;
}


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

function age_function(){
    document.getElementById('New_and_This').innerHTML = "My first name is " + mySelf.firstName + " My last name is " + mySelf.lastName + " my age is " + mySelf.age + " and my eye color is " + mySelf.eyeColor;
}

//Nested function


function nested_function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count(){
        var starting_point = 9;
        function plus_one(){starting_point +=1}
        plus_one();
        return starting_point;
    }
}