/*
    export const myMutation = (state) => {
        // Nunca lleva async
        // Cambia alguna propiedad de ese state
    }
*/

export const setEntries = (state, entries) => {
    state.entries = entries
    state.isLoading = false
}

export const updateEntry = (state, entry) => {
    const idx = state.entries.findIndex(entryTmp => entryTmp.id === entry.id)
    state.entries[idx] = entry
}

export const createEntry = (state, entry) => {
    state.entries = [...state.entries, entry]
}