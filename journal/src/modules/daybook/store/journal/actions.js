/*
    export const myAction = async({commit}) => {
        commit.mutation
    }
*/

import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
    const { data } = await journalApi.get('/entries.json')
    const entries = []
    for(let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    setTimeout(() => {
        commit('setEntries', entries)
    }, 1000);
}

export const updateEntry = async({ commit }, entry) => {
    await journalApi.patch(`/entries/${entry.id}.json`, {
        text: entry.text
    })
    commit('updateEntry', entry)
}

export const createEntry = async({ commit }, entry) => {
    const { data } = await journalApi.post('/entries.json', {
        date: entry.date,
        text: entry.text
    })
    const { name: id } = data
    commit('createEntry', { ...entry, id })
    return id
}