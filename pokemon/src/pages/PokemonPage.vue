<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es ese Pokémon?</h1>
    <template v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </template>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemons"
      @selection="checkAnswer"
    />

  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

export default {
    components: {
        PokemonPicture,
        PokemonOptions
    },
    data() {
      return {
        pokemon: null,
        pokemons: [],
        showPokemon: false,
        message: '',
        showAnswer: false
      }
    },
    methods: {
      async getPokemons() {
        this.pokemons = await getPokemonOptions()
        const pokemonRandom = Math.floor(Math.random() * 4)
        this.pokemon = this.pokemons[pokemonRandom]
      },
      checkAnswer(pokemonFromSelection) {
        this.showPokemon = true
        this.showAnswer = true

        if (pokemonFromSelection.id === this.pokemon.id) {
          this.message = `Si, el pokémon es ${this.pokemon.name}`
        } else {
          this.message = `No, el pokémon es ${this.pokemon.name}`
        }
      },
      newGame() {
        this.showPokemon = false
        this.pokemons = []
        this.pokemon = null
        this.showAnswer = false
        this.getPokemons()
      }
    },
    mounted() {
      this.getPokemons()
    }
}
</script>

<style>

</style>