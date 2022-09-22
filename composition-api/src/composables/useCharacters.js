import axios from 'axios'
import { ref } from 'vue'

const useCharacters = () => {
    const characters = ref([])
    const isLoading = ref(false)
    const errorMessage = ref()
    const currentPage = ref(1)

    const getCharacters = async(page) => {
        if (page <= 0) page = 1
        isLoading.value = true
        try {
            const { data } = await axios.get('https://rickandmortyapi.com/api/character', {
                params: {
                    page
                }
            })
            if (data.results.length > 0) {
                characters.value = data.results
                currentPage.value = page
            }
        } catch (error) {
            errorMessage.value = 'Error loading'
            characters.value = []
        }
        isLoading.value = false
    

    }

    getCharacters(1)

    return {
        characters,
        isLoading,
        currentPage,
        previousPage: () => getCharacters(currentPage.value - 1),
        nextPage: () => getCharacters(currentPage.value + 1),
        errorMessage
    }
}

export default useCharacters