function my_dictionary(){
    var Animal = {
        species:'Dog',
        color:'Black',
        breed:'Labrador',
        age:5,
        sound:'Bark!'
    };
    delete Animal.sound
    document.getElementById('Dictionary').innerHTML = Animal.sound
}