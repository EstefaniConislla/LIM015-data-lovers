import { filtrar, verRegion } from "./data.js";
import data from "./data/pokemon/pokemon.js";
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
    pokeStats.textContent = pokeInfo[i].stats;
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