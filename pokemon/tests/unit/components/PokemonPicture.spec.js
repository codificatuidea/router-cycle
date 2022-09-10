import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => {

    test('Should do match with snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test.only('Should exist hidden image and pokemon number 100', () => {
        const pokemonId = 100
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId,
                showPokemon: false
            }
        })
        const [imgHidden, imgFadeIn] = wrapper.findAll('img')
        expect(imgHidden.classes('hidden-pokemon')).toBeTruthy()
        expect(imgHidden.exists()).toBeTruthy()
        expect(imgHidden.attributes('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`)
        expect(imgFadeIn).toBeUndefined()

    })
    // props: { pokemonId: 100, showPokemon: false }
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png

    test.only('Should exist fade-in image and pokemon number 100 if showPokemon is true', () => {
        const pokemonId = 100
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId,
                showPokemon: true
            }
        })
        const [_, imgFadeIn] = wrapper.findAll('img')
        expect(imgFadeIn.exists()).toBeTruthy()
        expect(imgFadeIn.classes('fade-in')).toBeTruthy()
        expect(imgFadeIn.attributes('src')).toBe(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`)
    })
    // props: { pokemonId: 100, showPokemon: true }
    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/100.png

    
})