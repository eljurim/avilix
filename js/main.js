// function numRandom(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   console.log(numRandom(1,10));

//Se declara un array vacio donde se inserta el número random
var arrayToFollow = [1, 5, 7, 8, 9];

var numeroSelecionado; //inicializamos variable

var currentScore = 0;
var maxScore = 0;
var pos =0;
var userChain = [];

$('.boton-presionable').on("click", function (e) {
    // let numero_button= $('.boton-presionable').val();
    numeroSelecionado = $(e.target).text();
    console.log('presionaste boton numero', numeroSelecionado);

    addElement();

    compareArray();

})

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



//empuja el value del elemento clikeado al array userchain
function addElement() {
    userChain.push(numeroSelecionado);
    console.log(userChain)

}


function compareArray() {

        if (userChain[pos] == arrayToFollow[pos]) { 
            pos++;
            console.log('continua');

        } else {
            console.log('perdiste');
        }

    
}