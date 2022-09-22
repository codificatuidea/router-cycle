/*
    export const myMutation = (state) => {
        // Nunca lleva async
        // Cambia alguna propiedad de ese state
    }
*/

export const loginUser = (state, { user, idToken, refreshToken }) => {

    if (idToken) {
        state.idToken = idToken
        localStorage.setItem('idToken', idToken)
    }

    if (refreshToken) {
        state.refreshToken = refreshToken
        localStorage.setItem('refreshToken', refreshToken)
    }

    state.user = user
    state.status = 'authenticated'
}

export const logout = (state) => {
    state.user = null
    state.idToken = null
    state.refreshToken = null
    state.status = 'not-authenticated'

    localStorage.clear()
}