<template>
    <h1>Buscar pokemon {{ pokemonId }}</h1>
    <form @submit.prevent="onSubmit">
        <input 
            type="number"
            placeholder="Ingrese número del pokemon"
            v-model="pokemonId"
        />
    </form>
    <br />
    <span>Presione enter para buscar</span>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
    setup() {

        const router = useRouter()

        const pokemonId = ref(1)
        return {
            pokemonId,
            onSubmit: () => {
                //console.log(pokemonId.value)
                router.push({ name: 'pokemon-id', params: { id: pokemonId.value }})
            }
        }
    }
}
</script>

<style>

</style>