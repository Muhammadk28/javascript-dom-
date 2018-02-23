document.getElementsByTagName('body')[0].style.background = "pink";

document.getElementsByTagName('h1')[0].style.fontSize = "36px";

var fruits = ['apple', 'mango', 'banana', 'litchi', 'jackfruite', 'strawberry', 'blackberry'];

var cabo = document.getElementsByTagName('div')[0];
 var cab = '<h1>' + 'Flower Name:' + '</h1>';
cab += '<ul>';
for (i = 0; i<fruits.length; i++) {
    var cab = cab + '<li>' + fruits[i] + '</li>' + '</br>';
};

cab += '</ul>';


cabo.innerHTML = cab;