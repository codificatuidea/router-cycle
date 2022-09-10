<template>
    <div class="entry-list-container">
        <div class="px-2 pt-2">
            <input
                type="text"
                class="form-control mb-3"
                placeholder="Buscar entrada"
                v-model="term"
            />
        </div>
        <div v-if="isLoading" class="p-2 text-center">
            <img src="@/assets/walk.gif" />
        </div>
        <div class="entry-list">
            <Entry
              v-for="entry in entriesByTerm"
              :key="entry.id"
              :entry="entry" 
            />
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapState } from 'vuex'

export default {
    data() {
        return {
            term: ''
        }
    },
    components: {
        Entry: defineAsyncComponent(() => import('./EntryItem'))
    },
    computed: {
        ...mapGetters('journal', ['getEntries']),
        ...mapState('journal', ['isLoading']),
        entriesByTerm() {
            return this.getEntries(this.term)
        }
    }
}
</script>

<style scoped>
    .entry-list-container {
        border-right: 1px solid #333;
        height: calc(100vh - 56px)
    }

    .entry-list {
        overflow: auto;
        height: calc(100vh - 100px)
    }
</style>