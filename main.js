function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
function aleatorio(){
    var num = rand(0,7);
    return num
}

  function carregar(){

    let imagens = ["caterpie_sombra", "snorlax_sombra","bulbasaur_sombra","charmander_sombra","ekans_sombra","jiglypuff_sombra","carterpie_sombra","pikachu_sombra"]
    
  document.querySelector('#pokemon-a').innerHTML = `<img src="img/${imagens[aleatorio()]}.png" height="200px">`
  }