// function numRandom(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   console.log(numRandom(1,10));


$('.boton-presionable').on("click",function(e){
    let numero_button= $('.boton-presionable').val();
    let selectedButton = $(e.target).text();
    console.log(numero_button,'presionaste boton numero', selectedButton);

})
//Se declara un array vacio donde se inserta el número random
var arrayToFollow=[];
//Esta funcion declara un número random 
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log(numRandom(1, 10));
//Agrega un número Random al arrayToFollow 
function addRandom() {
    arrayToFollow.push(numRandom(1, 10));
}
console.log(arrayToFollow);
