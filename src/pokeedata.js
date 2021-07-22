//funcion filter
export function filtrar(tipoSelec, pokeInfo) {
  return pokeInfo.filter((poke) => poke.type.includes(tipoSelec));
}
export function verRegion(region, pokeInfo) {
  const datoP = pokeInfo.filter((pokemon) => pokemon.generation.name == region);
  return datoP;
}