console.log("hola mundo");
let fruit = "manzana";
const piNumber=3.141619;
console.log(fruit);

fruit ="banana";
console.log("ahora fruit debe cambiar");
console.log("fruit");

console.log(piNumber);
console.log("el valor de pi es: " + piNumber);

const numero1 = 8;
const numero2 = 2;
console.log(numero1 + numero2);

const calculo = 6 < 3;
console.log("calculo");

const calculoIgualdad = 8 === "8";
console.log(calculoIgualdad);

if (calculo === true && calculoIgualdad === false) {
    console.log("La condición se cumple");
} else {
    console.log("La condición no se cumple");
}

if (calculo === true || calculoIgualdad === false) {
    console.log("La condición se cumple");
} else {
    console.log("La condición no se cumple");
}
function sayHi() {
    console.log("acabo de dar click al boton");
    const firstName = document.getElementById("first name").value;
    console.log("Hola" + firstName + " " + "bienvenido");  
}