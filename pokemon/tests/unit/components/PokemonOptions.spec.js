import { shallowMount } from "@vue/test-utils"
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from "../mocks/pokemons.mock"

describe('PokemonOptions component', () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons
            }
        })
    })

    test('Should do match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Should show the 4 options', () => {
        const liElements = wrapper.findAll('li')
        expect(liElements.length).toBe(4)
        liElements.forEach((li, index) => {
            expect(li.text()).toBe(pokemons[index].name)
        });
    })

    test.only('Should emit "selection" on click', () => {
        const [l1, l2, l3, l4] = wrapper.findAll('li')
        l1.trigger('click')
        l2.trigger('click')
        l3.trigger('click')
        l4.trigger('click')
        //console.log(wrapper.emitted('selection'))
        expect(wrapper.emitted('selection').length).toBe(4)
        //expect(wrapper.emitted('selection')[0][0].id).toBe(1)
    })

})