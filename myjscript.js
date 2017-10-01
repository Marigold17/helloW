var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = 'Good Evening!';
}else if (hourNow > 12){
    greeting = 'Good Afternoon!';
}else if(hourNow > 0){
    greeting = 'Good morning!';
}else {
  greeting = 'Welcome!';
}
document.write(greeting);

var greeting = 'Julie';
var name ='Molly';
var message = ' Please check your order: ';
var welcome = greeting  + name + message;


  
