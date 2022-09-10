export const increment = (state) => {
    state.count++
    state.lastMutation = 'From increment'
}

export const incrementBy = (state, val) => {
    state.count += val
    state.lastMutation = 'From incrementBy'
}

export const setLoading = (state, val) => {
    state.isLoading = val
}