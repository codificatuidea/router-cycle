<template>
  <div class="pokemon-container">
    <img class="hidden-pokemon" :src="imgSrc" />
    <img v-if="showPokemon" class="fade-in" :src="imgSrc" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true
    },
    showPokemon: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemonId}.png`
    }
  }
}
</script>

<style>
.pokemon-container {
    height: 200px;
}
img {
  height: 200px;
  position: absolute;
  margin-left: -70px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}
</style>