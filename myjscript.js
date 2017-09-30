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

var firstName = 'Howdy';
var lastName ='Molly';
var welcomemsg = firstName  + lastName + '!';

var el = document.getElementById('firstName');
el.textContent = welcomemsg;
  
