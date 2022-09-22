<template>
    <h1 v-if="isLoading">Loading...</h1>
    <h1 v-if="errorMessage">{{ errorMessage }}</h1>
    <div v-if="pokemon">
        <img :src="pokemon.sprites.front_default" />
        <h3>{{ pokemon.name }}</h3>
        <router-link :to="{ name: 'pokemon-search' }">Volver al buscador</router-link>
    </div>
</template>

<script>
import { watch } from 'vue'
import { useRoute, onBeforeRouteLeave } from 'vue-router'
import usePokemon from '@/composables/usePokemon'

export default {
    setup() {
        const route = useRoute()
        //console.log(route.params)

        const { pokemon, isLoading, errorMessage, searchPokemon } = usePokemon(route.params.id)

        watch(
            () => route.params.id,
            (value, prevValue) => searchPokemon(route.params.id)
        )

        onBeforeRouteLeave(() => {
            const answer = window.confirm('¿Está seguro que desea salir?')
            if (!answer) return false
        })

        return {
            pokemon,
            isLoading,
            errorMessage
        }
    }
}
</script>

<style>

</style>