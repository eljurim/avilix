<<<<<<< HEAD
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
=======
//declaracion de variables a utilizar
var chainToFollow = [];
var userChain = [];
var contador = 0;
var longitud = chainToFollow.length;
var maxScore = 0;
var currentScore = 0;
var posicionActual = 0;

//funcion para el sonido
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
}


//declarar sonido bip
mySound = new sound("./sounds/tone.mp3")
myWrongSound = new sound("./sounds/wrong.mp3")
    //navegacion por tiempo  a traves de los elementos de chainToFollow
const showNumbers = () => {
    contador = 0;
    let repasar = setInterval(() => {
        if (contador >= chainToFollow.length) {
            clearInterval(repasar);
        } else {
            mySound.play();
            $('.boton-' + chainToFollow[contador]).addClass('active');
            setTimeout(() => {
                $('.boton-' + chainToFollow[contador]).removeClass('active');
            }, 600);
            contador++;
        }
    }, 1000)
}

const growChainToFollow = () => {
    chainToFollow.push(Math.floor(Math.random() * (10 - 1)) + 1)
}


//cuando el usuario esta siguiendo la cadena
$('.boton-presionable').on('click', (event) => {
    //animar el push de los botones
    mySound.play();
    $(event.target).addClass('active');
    setTimeout(() => {
        $(event.target).removeClass('active');
    }, 500);
    //crecer el la cadena del input del usuario
    userChain.push(parseInt(event.target.textContent));

    //revisar si faltan inputs del usuario para alcanzar el length del to Follow
    if (userChain[posicionActual] === chainToFollow[posicionActual]) {
            posicionActual++
        if ((posicionActual) === chainToFollow.length) {
            alert("Correcto, Siguiente Nivel")
            currentScore = chainToFollow.length;
            growChainToFollow();
            showNumbers();
            posicionActual = 0;
            userChain = [];
            $('.display').html(currentScore);
        }}
        else{
            myWrongSound.play();
            alert('Game Over');
        }

    /*if (chainToFollow.length > userChain.length) {
          posicionActual++;

        }*/
})


const newGame = () => {
    console.log("comenzamos");
    growChainToFollow();
    showNumbers();
}

$('button').on('click', newGame);
>>>>>>> ba743b9646961e0acb53ea64d170df7563d038bd
