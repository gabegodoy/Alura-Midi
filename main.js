const teclas = document.querySelectorAll(".tecla");

for (var i = 0; i < teclas.length; i++){
  const tecla = teclas[i];
  const instrumento = tecla.classList[1];
  const instrumentoId = '#som_' + instrumento;

  tecla.addEventListener("click", function() {
    tocaSom(instrumentoId)
  });

  tecla.addEventListener("keydown", function(event){
    if (event.code == 'Enter' || event.code ==  'Space'){
      tecla.classList.add('ativa')
    }
  })

  tecla.addEventListener("keyup", function(event){
    if (event.code == 'Enter' || event.code ==  'Space'){
      tecla.classList.remove('ativa')
    }
  })
}


function tocaSom (seletorAudio){
  const elemento = document.querySelector(seletorAudio);
  
  if (elemento == null || elemento.localName != 'audio'){
    console.log('Elemento não encontrado');
  }
  else{elemento.play()}

}

