import { shallowMount } from "@vue/test-utils"
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from "../mocks/pokemons.mock"
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPage component', () => {

    let wrapper
    let getPokemonsSpy

    beforeEach(() => {
        getPokemonsSpy = jest.spyOn(PokemonPage.methods, 'getPokemons')
        wrapper = shallowMount(PokemonPage)
    })

    test('Should do match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Should call getPokemons on mount', () => {
        expect(getPokemonsSpy).toHaveBeenCalled()
    })

    test('Should do match with snapshot when pokemons are loaded', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemon: pokemons[0],
                  pokemons,
                  showPokemon: false,
                  message: '',
                  showAnswer: false
                }
            },
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test.only('Should show PokemonPicture and PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemon: pokemons[0],
                  pokemons,
                  showPokemon: false,
                  message: '',
                  showAnswer: false
                }
            },
        })
        //console.log(wrapper.find('pokemon-picture-stub'))
        //console.log(wrapper.findComponent(PokemonPicture))

        const pokemonPictureComponent = wrapper.findComponent(PokemonPicture)
        const pokemonPictureStub = wrapper.findComponent('pokemon-picture-stub')

        expect(pokemonPictureComponent.exists()).toBeTruthy()
        expect(pokemonPictureStub.exists()).toBeTruthy()

        expect(pokemonPictureComponent.props('pokemonId')).toBe(pokemons[0].id)
        expect(pokemonPictureStub.props('pokemonId')).toBe(pokemons[0].id)

    })

    test.only('Check answer', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                  pokemon: pokemons[0],
                  pokemons,
                  showPokemon: false,
                  message: '',
                  showAnswer: false
                }
            },
        })
        //console.log(wrapper.vm.checkAnswer(1))
    })

})