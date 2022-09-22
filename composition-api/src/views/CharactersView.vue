<template>
    <h2 v-if="isLoading">Loading...</h2>
    <h2 v-if="errorMessage">Error loading</h2>

    <div v-if="characters.length">
        <h2>Characters</h2>
        <ul>
            <li v-for="{ id, image, name } in characters" :key="id">
                <img :src="image" />
                <h3>{{ name }}</h3>
            </li>
        </ul>
    </div>

    <button @click="previousPage">Previous</button>
    <button @click="nextPage">Next</button>
    <span>Page {{ currentPage }}</span>
  
</template>

<script>
import useCharacters from '@/composables/useCharacters'

export default {
    setup() {
        const {
            characters,
            isLoading,
            currentPage,
            previousPage,
            nextPage,
            errorMessage,
        } = useCharacters()
        return {
            characters,
            isLoading,
            currentPage,
            previousPage,
            nextPage,
            errorMessage,
        } 
    }
}
</script>

<style>

</style>