const fruits =["Mango","Apple","kiwi","watermelon"];
const firstName = new String("Sidhartha");


logger(firstName);
logger(fruits);
function logger(element) {
    console.log(element);
    console.log(element instanceof Object);
    console.log(element instanceof Array);
    console.log(element instanceof String);
    console.log(element instanceof Number);
    console.log(element instanceof Boolean);
    
    console.log("/////////!");
}


