import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi', () => {

    test('Should axios be configured with the pokemon api baseUrl', () => {
        expect(pokemonApi.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
    })

})