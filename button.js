const div = document.querySelector("div");
const input = document.createElement("input");
inouut.value = "Angular Course";
input.type = "text";
input.placeholder = "Enter some content";
input.id = "course_field";
const h1 = document .createElement("h1");
h1.innerText = "Dynamic content In HTML";
const button = document.createElement("button");
button.textContent = "Click Me";
div.appendChild(h1);
div.appendChild(input);
div.appendChild(button);
button.addEventListener("Click", function () {
    window.alert("hey,This is abutton")
});
