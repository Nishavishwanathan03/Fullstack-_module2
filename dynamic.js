/*1) dynamic 
*/
const h1 = document.querySelector("h1");
h1.innerText = "Hello Javascript";
const customDiv = document.getElementById("customDiv");
const h2 = document.createElement("h2");
//console.log(h2);
//customDiv.innerHtml = h2;
h2.textContent = "hello,How are you?";
console.log(h2);
customDiv.appendChild(h2);
/* 
2)dynamic 2

const div = document.querySelector('div');
const input = document.createElement('input');
inouut.value = "Angular Course";
input.type = "course_field";
const h1 = document .createElement('h1');
h1.innerText = "Dynamic content In HTML";
const button = document.createElement("button");
button.textContent = 'Click Me';
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);
button.addEventListener('Click', function () {
    window.alert('hey,This is abutton')
});
*/

