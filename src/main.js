import { filtrar, verRegion, ordenaNombre } from "./data.js";
import data from "./data/pokemon/pokemon.js";


addEventListener('DOMContentLoaded', () => {
  const btn_menu = document.querySelector('.btn_menu')
  if (btn_menu) {
    btn_menu.addEventListener('click', () => {
      const nav_menu = document.querySelector('.nav_menu')
      nav_menu.classList.toggle('show')
    })
  }
})


// ------------------- BARRA DE NAVEGACIÓN---------------------
const nav = document.querySelectorAll('.container li');
document.getElementById('inicio').addEventListener('click', function() { 
    for(let link of nav){
        link.classList.remove('linkActivo');
      }
      document.getElementById('inicio').classList.add('linkActivo');
      displayMain('inicio');
});
document.getElementById('pokedex').addEventListener('click', function() { 
    for(let link of nav){
        link.classList.remove('linkActivo');
      }
      document.getElementById('pokedex').classList.add('linkActivo');
      displayMain('pokedex');
});
document.getElementById('usuarios').addEventListener('click', function() { 
  for(let link of nav){
      link.classList.remove('linkActivo');
    }
    document.getElementById('usuarios').classList.add('linkActivo');
    displayMain('usuarios');
});
const displayMain = (id) => {
    if (id=='inicio') {
      document.getElementById('nav_inicio').style.display= 'block';
      document.getElementById('nav_pokedex').style.display = 'none';
      document.getElementById('nav_usuarios').style.display= 'none';
    } else if (id == 'pokedex') {
      document.getElementById('nav_inicio').style.display= 'none';
      document.getElementById('nav_pokedex').style.display = 'block';
      document.getElementById('nav_usuarios').style.display= 'none';
    } else if (id == 'usuarios'){
      document.getElementById('nav_inicio').style.display= 'none';
      document.getElementById('nav_pokedex').style.display = 'none';
      document.getElementById('nav_usuarios').style.display= 'block';
    } 
};


// Pokédex 

