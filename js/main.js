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
