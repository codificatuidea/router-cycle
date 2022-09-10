<template>
  <h1>Pokemon #<span>{{ id }}</span></h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.other.dream_world.front_default" />
    <h3>{{ pokemon.name }}</h3>
  </div>
  <!--<h1>Pokemon #<span>{{ this.$route.params.id }}</span></h1>-->
</template>

<script>
export default {
  props: {
    id: {
      required: true,
      type: Number
    }
  },
  data() {
    return {
      //id: null
      pokemon: null
    }
  },
  created() {
    //const { id } = this.$route.params
    //this.id = id
    this.getPokemon()
  },
  methods: {
    async getPokemon() {
      try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        const response = await request.json()
        this.pokemon = response
      } catch (error) {
        this.$router.push('/')
      }
    }
  },
  watch: {
    id() {
      this.getPokemon()
    }
  }
}
</script>

<style>

</style>