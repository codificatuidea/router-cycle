import getPokemonOptions, { getPokemonNames } from "@/helpers/getPokemonOptions"
import { pokemons as pokemonList } from "../mocks/pokemons.mock"

describe('getPokemonOptions', () => {

    test('Should return an array of 4 elements with pokemons names', async () => {
        
        const pokemons = await getPokemonNames([1,2,3,4])
        expect(pokemons).toStrictEqual(pokemonList)
        expect(JSON.stringify(pokemons)).toBe(JSON.stringify(pokemonList))

    })

    test('Should return an array of 4 elements - getPokemonOptions', async () => {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            },
            {
                id: expect.any(Number),
                name: expect.any(String)
            }
        ])
    })

})