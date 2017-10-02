function myFunction() {
   document.getElementById("demo2").innerHTML = "Paragraph changed.";
}

var greeting = 'Julie';
var name = 'Molly';
var message = ' Please check your order: ';
var welcome = greeting  + name + message;

var sign = 'Montage House';
var tiles = sign.length;
var subTotal = tiles *5;
var shipping = 7;
var grandTotal= subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSign = document.getElementById('userSign');
elSign.textContent = sign;

var elShipping =document.getElementById('shipping');
elShipping.textContent='$' + shipping;



  
