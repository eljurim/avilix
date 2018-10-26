// function numRandom(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   console.log(numRandom(1,10));


$('.boton-presionable').on("click", function (e) {
    let numero_button = $('.boton-presionable').val();
    let selectedButton = $(e.target).text();
    console.log(numero_button, 'presionaste boton numero', selectedButton);

})
//Se declara un array vacio donde se inserta el número random
var arrayToFollow = [];
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

var count = arrayToFollow.length
var f =0;
//Se activa la casilla que se debe presionar en el juego 
function intervalTime(){
    setInterval(()=>{
        document.getElementsByClassName('boton-'+ count)[0].classList.add("active");
        // $('.boton-'+arrayToFollow[f])[0].classList.add("active");
    },1000)
    for(var f = 0; f <= arrayToFollow.length; f++){
        console.log(intervalTime);
    }
}

// function active() {
//     arrayToFollow.forEach(function(element) {
//         console.log(element);
//         seleccionar.boto-${element}.add
//         $('boton-1')[0].classList.add("active");
//       });
      
//     // if (arrayToFollow.length === arrayToFollow) {
//     // } else {
//     //     let desactive = $('boton-1')[0].classList.remove("active");
//     // }

// }
//Esta Funcion desactiva las casillas que se habian seleccionado anterior 
// function desactive() {
//     let desactive = $('boton-1')[0].classList.remove("active");

// }
// var inteval=setInterval(()=>{
//     console.log('hola')
// },3000)
// set setTimeout (()=>console.log('me ejecuto una vez'), 3000);