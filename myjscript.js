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

var firstName = 'Julie';
var lastName = 'Molly';
var message = ' Please check your order: ';
var welcome = firstName  + lastName + message;

var sign = 'Montage House';
var tiles = sign.length;
var subTotal = tiles *5;
var shipping = 7;
var grandTotal= subTotal + shipping;

var el = document.getElementById('firstName');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;



  
