import { ordenaNombre, verRegion, filtrar } from '../src/data.js';

const pokemonMock = {
  pokemon: [
    {
      num: '002',
      name: 'ivysaur',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      'pokemon-rarity': 'normal',
      type: ['grass', 'poison'],
      encounter: {
        'base-flee-rate': '0.07',
        'base-capture-rate': '0.1',
      },
      'spawn-chance': '0.042',
      stats: {
        'base-attack': '151',
        'base-defense': '143',
        'base-stamina': '155',
        'max-cp': '1699',
        'max-hp': '134',
      },
      resistant: ['water', 'electric', 'grass', 'fighting', 'fairy'],
      weaknesses: ['fire', 'ice', 'flying', 'psychic'],
      'quick-move': [
        {
          name: 'razor leaf',
          type: 'grass',
          'base-damage': '13',
          energy: '7',
          'move-duration-seg': '1',
        },
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
      ],
      'special-attack': [
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
        {
          name: 'solar beam',
          type: 'grass',
          'base-damage': '180',
          energy: '-100',
          'move-duration-seg': '4.9',
        },
        {
          name: 'power whip',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
      ],
      egg: 'not in eggs',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'bulbasaur candy',
        'next-evolution': [
          {
            num: '003',
            name: 'venusaur',
            'candy-cost': '100',
          },
        ],
        'prev-evolution': [
          {
            num: '001',
            name: 'bulbasaur',
            'candy-cost': '25',
          },
        ],
      },
    },
    {
      num: '063',
      name: 'abra',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      'pokemon-rarity': 'normal',
      type: ['psychic'],
      encounter: {
        'base-flee-rate': '0.99',
        'base-capture-rate': '0.5',
      },
      'spawn-chance': '0.42',
      stats: {
        'base-attack': '195',
        'base-defense': '82',
        'base-stamina': '93',
        'max-cp': '1342',
        'max-hp': '85',
      },
      resistant: ['fighting', 'psychic'],
      weaknesses: ['bug', 'ghost', 'dark'],
      'quick-move': [
        {
          name: 'zen headbutt',
          type: 'psychic',
          'base-damage': '12',
          energy: '10',
          'move-duration-seg': '1.1',
        },
        {
          name: 'charge beam',
          type: 'electric',
          'base-damage': '8',
          energy: '15',
          'move-duration-seg': '1.1',
        },
      ],
      'special-attack': [
        {
          name: 'psyshock',
          type: 'psychic',
          'base-damage': '65',
          energy: '-33',
          'move-duration-seg': '2.7',
        },
        {
          name: 'signal beam',
          type: 'bug',
          'base-damage': '75',
          energy: '-50',
          'move-duration-seg': '2.9',
        },
        {
          name: 'shadow ball',
          type: 'ghost',
          'base-damage': '100',
          energy: '-50',
          'move-duration-seg': '3',
        },
      ],
      egg: '5 km',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'abra candy',
        'next-evolution': [
          {
            num: '064',
            name: 'kadabra',
            'candy-cost': '25',
            'next-evolution': [
              {
                num: '065',
                name: 'alakazam',
                'candy-cost': '100',
              },
            ],
          },
        ],
      },
    },
    {
      num: '041',
      name: 'zubat',
      generation: {
        num: 'generation i',
        name: 'kanto',
      },
      'pokemon-rarity': 'normal',
      type: ['poison', 'flying'],
      encounter: {
        'base-flee-rate': '0.2',
        'base-capture-rate': '0.5',
      },
      'spawn-chance': '6.52',
      stats: {
        'base-attack': '83',
        'base-defense': '73',
        'base-stamina': '120',
        'max-cp': '667',
        'max-hp': '106',
      },
      resistant: ['grass', 'fighting', 'poison', 'bug', 'fairy'],
      weaknesses: ['electric', 'ice', 'psychic', 'rock'],
      'quick-move': [
        {
          name: 'quick attack',
          type: 'normal',
          'base-damage': '8',
          energy: '10',
          'move-duration-seg': '0.8',
        },
        {
          name: 'bite',
          type: 'dark',
          'base-damage': '6',
          energy: '4',
          'move-duration-seg': '0.5',
        },
      ],
      'special-attack': [
        {
          name: 'poison fang',
          type: 'poison',
          'base-damage': '35',
          energy: '-33',
          'move-duration-seg': '1.7',
        },
        {
          name: 'air cutter',
          type: 'flying',
          'base-damage': '60',
          energy: '-50',
          'move-duration-seg': '2.7',
        },
        {
          name: 'swift',
          type: 'normal',
          'base-damage': '60',
          energy: '-50',
          'move-duration-seg': '2.8',
        },
        {
          name: 'sludge bomb',
          type: 'poison',
          'base-damage': '80',
          energy: '-50',
          'move-duration-seg': '2.3',
        },
      ],
      egg: '2 km',
      'buddy-distance-km': '1',
      evolution: {
        candy: 'zubat candy',
        'next-evolution': [
          {
            num: '042',
            name: 'golbat',
            'candy-cost': '50',
            'next-evolution': [
              {
                num: '169',
                name: 'crobat',
                'candy-cost': '100',
              },
            ],
          },
        ],
      },
    },
    {
      num: '152',
      name: 'chikorita',
      generation: {
        num: 'generation ii',
        name: 'johto',
      },
      'pokemon-rarity': 'normal',
      type: ['grass'],
      encounter: {
        'base-flee-rate': '0.1',
        'base-capture-rate': '0.2',
      },
      'spawn-chance': null,
      stats: {
        'base-attack': '92',
        'base-defense': '122',
        'base-stamina': '128',
        'max-cp': '935',
        'max-hp': '113',
      },
      resistant: ['water', 'electric', 'grass', 'ground'],
      weaknesses: ['fire', 'ice', 'poison', 'flying'],
      'quick-move': [
        {
          name: 'vine whip',
          type: 'grass',
          'base-damage': '7',
          energy: '6',
          'move-duration-seg': '0.6',
        },
        {
          name: 'tackle',
          type: 'normal',
          'base-damage': '5',
          energy: '5',
          'move-duration-seg': '0.5',
        },
      ],
      'special-attack': [
        {
          name: 'energy ball',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '3.9',
        },
        {
          name: 'grass knot',
          type: 'grass',
          'base-damage': '90',
          energy: '-50',
          'move-duration-seg': '2.6',
        },
        {
          name: 'body slam',
          type: 'normal',
          'base-damage': '50',
          energy: '-33',
          'move-duration-seg': '1.9',
        },
      ],
      egg: '2 km',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'chikorita candy',
        'next-evolution': [
          {
            num: '153',
            name: 'bayleef',
            'candy-cost': '25',
            'next-evolution': [
              {
                num: '154',
                name: 'meganium',
                'candy-cost': '100',
              },
            ],
          },
        ],
      },
    },
    {
      num: '176',
      name: 'togetic',
      generation: {
        num: 'generation ii',
        name: 'johto',
      },
      'pokemon-rarity': 'normal',
      type: ['fairy', 'flying'],
      encounter: {
        'base-flee-rate': '0.05',
        'base-capture-rate': '0.05',
      },
      'spawn-chance': null,
      stats: {
        'base-attack': '139',
        'base-defense': '181',
        'base-stamina': '146',
        'max-cp': '1708',
        'max-hp': '127',
      },
      resistant: ['grass', 'fighting', 'ground', 'bug', 'dragon'],
      weaknesses: ['electric', 'ice', 'poison', 'rock'],
      'quick-move': [
        {
          name: 'extrasensory',
          type: 'psychic',
          'base-damage': '12',
          energy: '12',
          'move-duration-seg': '1.1',
        },
        {
          name: 'hidden power',
          type: 'normal',
          'base-damage': '15',
          energy: '15',
          'move-duration-seg': '1.5',
        },
      ],
      'special-attack': [
        {
          name: 'ancient power',
          type: 'rock',
          'base-damage': '70',
          energy: '-33',
          'move-duration-seg': '3.5',
        },
        {
          name: 'dazzling gleam',
          type: 'fairy',
          'base-damage': '100',
          energy: '-50',
          'move-duration-seg': '3.5',
        },
        {
          name: 'aerial ace',
          type: 'flying',
          'base-damage': '55',
          energy: '-33',
          'move-duration-seg': '2.4',
        },
      ],
      egg: 'not in eggs',
      'buddy-distance-km': '3',
      evolution: {
        candy: 'togepi candy',
        'next-evolution': [
          {
            num: '468',
            name: 'togekiss',
            'candy-cost': '100',
            'evolution-item': {
              name: 'sinnoh stone',
              img: 'https://pokemon.gameinfo.io/images/item/thumbs/200/sinnoh-stone.png',
            },
          },
        ],
        'prev-evolution': [
          {
            num: '175',
            name: 'togepi',
            'candy-cost': '25',
          },
        ],
      },
    },
  ],
};

// TEST ORDENAR POR NOMBRE
describe('ordenaNombre', () => {
  it('Es una funcion', () => {
    expect(typeof ordenaNombre).toBe('function');
  });

  it('Ordenar de A-Z', () => {
    const ordenarAZ = ordenaNombre('ascendente', pokemonMock.pokemon);
    expect(ordenarAZ[0].name).toBe('abra');
  });

  it('Ordenar de Z-A', () => {
    const ordenarZA = ordenaNombre('descendente', pokemonMock.pokemon);
    expect(ordenarZA[0].name).toBe('zubat');
  });
});

// TEST PARA REGION
describe('verRegion', () => {
  it('Es una funcion', () => {
    expect(typeof verRegion).toBe('function');
  });

  it('Region kanto', () => {
    const regionKanto = verRegion('kanto', pokemonMock.pokemon);
    expect(regionKanto[0].generation.name).toBe('kanto');
  });

  it('Region johto', () => {
    const regionJohto = verRegion('johto', pokemonMock.pokemon);
    expect(regionJohto[0].generation.name).toBe('johto');
  });
});

//TEST FILTRAR POR TIPO
describe('filtrar', () => {
  const pokemonType = pokemonMock.pokemon.filter((poke) => poke.type.includes('fire'));

  it('Es una función', () => {
    expect(typeof filtrar).toBe('function');
  });

  it('Filtra los pokemon', () => {
    expect(filtrar(pokemonMock.pokemon, '')).toEqual(pokemonMock.pokemon);
  });

})

// TEST PARA FILTRO

describe('filtrar', () => {

    it('Es una funcion', () => {
        expect(typeof filtrar).toBe('function');
    });

    // it('Deberia filtrar por el tipo de grass', () => {
    //     const tipoGrass = filtrar ('grass', 'poison', pokemonMock.pokemon);
    //     expect(tipoGrass[0].type).toEqual('grass','poison');
    //});

    it('Filtrar por el tipo de pokemon', () => {
        const tipoPokemon = filtrar ('psychic' , pokemonMock.pokemon);
        expect(filtrar(pokemonMock.pokemon)).toBe('psychic');
    });

})
