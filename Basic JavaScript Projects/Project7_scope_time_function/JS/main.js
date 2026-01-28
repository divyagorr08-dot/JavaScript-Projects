//Global scope

var x=10;
function add_numbers(){
    document.writeln(20+x)
}

function add_number2(){
    document.writeln(x+100)
}

add_numbers();

add_number2();

//Local Scope and console.log()

function add_numbers3(){
    var x1=10;
    document.writeln(20+x1)
    console.log(30+x1)
}

function add_number4(){
    document.writeln(x1+100)
    console.log(x1+20)
}

add_numbers3();

add_number4();

//If statements

function get_date(){
    if(new Date().getHours()<18){
        document.getElementById('greeting').innerHTML = "How are you today?"
    }
}

//If else statements

function age_function(){
    age = document.getElementById('age').value;
    if(age>=18){
        vote = ' You are old enough to vote';
    }
    else{
        vote='You are not old enough to vote';
    }
    document.getElementById("How_old_are_you?").innerHTML = vote;
}

//else if statements

function time_function(){
    var time = new Date().getHours();
    var reply;
    if(time<12 == time>0){
        reply = "morning time"
    }else if(time>=12 == time<18){
        reply = "Afternoon"
    }else{
        reply = "Evening time"
    }
    document.getElementById("time").innerHTML = reply;
}