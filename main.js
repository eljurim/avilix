function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  console.log(numRandom(1,10));

$(".boton-presionable").on("hover", (e)=>{
  $(e.target).css("opacity",0.2)
})
