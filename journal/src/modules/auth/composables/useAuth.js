import { computed } from 'vue'
import { useStore } from 'vuex'

const useAuth = () => {

    const store = useStore()

    const createUser = async (user) => {
        // TODO - store.dispatch action
        const response = await store.dispatch('auth/createUser', user)
        return response
    }

    const signInUser = async (user) => {
        // TODO - store.dispatch action
        const response = await store.dispatch('auth/signInUser', user)
        return response
    }

    const checkAuthStatus = async () => {
        // TODO - store.dispatch action
        const response = await store.dispatch('auth/checkAuthentication')
        return response
    }

    const logout = () => {
        store.commit('auth/logout')
    }

    return {
        createUser,
        signInUser,
        checkAuthStatus,
        logout,

        authStatus: computed(() => store.getters['auth/currentState'])
    }

}

export default useAuth