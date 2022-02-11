let display = document.getElementById('texto');
const listaDeTeclas = document.getElementsByClassName('button');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    valor = tecla.value;
    
    function addNum(){
     display.innerHTML = tecla.value;
    };

    tecla.onclick = function () {
    addNum();
    };
}

const clearbtn = document.getElementById('clear');

function clear(){
  display.innerHTML = 'digite seu número';
}
clearbtn.addEventListener('click', clear);





