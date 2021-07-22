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

const pokeInfo = data.pokemon;
function buscarPokemon(pokeInfo) {
  const mostrarPokemon = document.querySelector("#info");
  for (let i = 0; i < pokeInfo.length; i++) {
    const pokeImage = pokeInfo[i].img;
    const pokeNombre = pokeInfo[i].name;
    const pokeNumero = pokeInfo[i].num;
    const pokeTipo = pokeInfo[i].type;
    let contenedorPadre = document.createElement("div");
    contenedorPadre.classList.add("cardpokemon");
    //Hijo del contenedor principal
    let numero = document.createElement("p");
    numero.classList.add("pokemonnumero");
    numero.textContent = "#" + pokeNumero;
    contenedorPadre.appendChild(numero);
    //Creando Modal para Ficha Tecnica
    let aRef = document.createElement("a");
    let imagen = document.createElement("img");
    imagen.classList.add("pokemonimagen");
    imagen.src = pokeImage;
    aRef.appendChild(imagen);
    aRef.href = "#" + pokeInfo[i].num;
    contenedorPadre.appendChild(aRef);
    let nombre = document.createElement("p");
    nombre.classList.add("pokemonnombre");
    nombre.textContent = pokeNombre;
    contenedorPadre.appendChild(nombre);
    let tipo = document.createElement("p");
    tipo.classList.add("pokemontipo");
    tipo.textContent = pokeTipo.join(" ");
    contenedorPadre.appendChild(tipo);
    let seccionModal = document.createElement("section");
    seccionModal.id = pokeInfo[i].num;
    seccionModal.classList.add("modalDialog");
    let seccionContenido = document.createElement("section");
    let etiquetaA = document.createElement("a");
    etiquetaA.classList.add("close");
    etiquetaA.href = "#close";
    etiquetaA.textContent = "X";
    seccionContenido.appendChild(etiquetaA);
    seccionModal.appendChild(seccionContenido);
    let nombreP = document.createElement("h3");
    nombreP.textContent = pokeInfo[i].name;
    let imagenP = document.createElement("img");
    imagenP.classList.add("imgPoke");
    imagenP.src = pokeInfo[i].img;
    let resumen = document.createElement("p");
    resumen.textContent = pokeInfo[i].about;
    let pokeStats = document.createElement("p");
    pokeStats.textContent = `${pokeInfo[i].stats["base-attack"]}`;
    seccionContenido.appendChild(nombreP);
    seccionContenido.appendChild(imagenP);
    seccionContenido.appendChild(resumen);
    seccionContenido.appendChild(pokeStats);
    contenedorPadre.appendChild(seccionModal);
    mostrarPokemon.appendChild(contenedorPadre);
  }
}
buscarPokemon(pokeInfo);
const filtro = document.querySelector("#tipo");
filtro.addEventListener("change", (event) => {
  const tipoSelec = event.target.value;
  const resultado = filtrar(tipoSelec, pokeInfo);
  limpiarPokemon();
  buscarPokemon(resultado);
});
//Asignando variable para Ordenar
const ordenarPokemon = document.getElementById("orden");
ordenarPokemon.addEventListener("change", (e) => {
  let ascDesc = e.target.value;
  const resultadoAsc = ordenaNombre(ascDesc, pokeInfo);
  limpiarPokemon();
  buscarPokemon(resultadoAsc);
});
//Consultar, debo ingresar al objeto primero
const region = document.querySelector("#region");
region.addEventListener("change", (event) => {
  const generacionR = event.target.value;
  const generacionResultado = verRegion(generacionR, pokeInfo);
  limpiarPokemon();
  buscarPokemon(generacionResultado);
});
// //Intentando obtener valor
// sortValores.addEventListener(change, (e) => {
//   let sortValores = e.currentTargert.value;
//   console.log(sortValores);
// });
function limpiarPokemon() {
  document.querySelector("#info").innerHTML = "";
}
function buscadorPokemon() {
  let ingresarDato = document.querySelector("#pokeName").value;
  let guardarInfo;
  if (isNaN(ingresarDato)) {
    guardarInfo = pokeInfo.filter((poke) => poke.name.includes(ingresarDato));
  } else {
    guardarInfo = pokeInfo.filter(
      (poke) => parseInt(poke.num) == parseInt(ingresarDato)
    );
  }
  limpiarPokemon();
  buscarPokemon(guardarInfo);
}
document.querySelector("#searchPokemon").addEventListener("click", function () {
  buscadorPokemon();
});
// function ordenarPokemon(a,b) {
//   if(a es menor que b){
//     return -1;
//   }
//   if(a es mayor que b){
//     return 1;
//   }
//   return 0;
// }