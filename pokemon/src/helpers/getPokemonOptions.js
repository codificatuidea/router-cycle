import pokemonApi from "@/api/pokemonApi";

const getRandomArbitrary = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}

const getPokemonOptions = async () => {
    const arr = []
    const min = 1
    const max = 150
    for (let index = 1; index <= 4; index++) {
        const n = getRandomArbitrary(min, max)
        if (!arr.includes(n)) {
            arr.push(n)
        }
    }
    const pokemons = await getPokemonNames(arr)
    return pokemons
}

export const getPokemonNames = async (pokemon = []) => {

    //const [p1, p2, p3, p4] = pokemon;

    const {
        0: p1,
        1: p2,
        2: p3,
        3: p4
    } = pokemon

    // https://pokeapi.co/api/v2/pokemon
    const promises = [
        pokemonApi.get(`/${p1}`),
        pokemonApi.get(`/${p2}`),
        pokemonApi.get(`/${p3}`),
        pokemonApi.get(`/${p4}`)
    ]

    const pokemons = await Promise.all(promises)
    return pokemons.map(pokemon => ({
        id: pokemon.data.id,
        name: pokemon.data.name
    }))
}

export default getPokemonOptions