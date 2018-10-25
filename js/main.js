// function numRandom(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   console.log(numRandom(1,10));


$('.boton-presionable').on("click",function(e){
    let numero_button= $('.boton-presionable').val();
    let selectedButton = $(e.target).text();
    console.log(numero_button,'presionaste boton numero', selectedButton);

})
