<template>

    <div 
        class="entry-container mb-3 p-2" 
        @click="$router.push({ name: 'entry', params: { id: entry.id } })"
    >
        <EntryDate :entry="entry" />
        <div class="entry-description">
            {{ entry.text }}
        </div>
    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        EntryDate: defineAsyncComponent(() => import('./EntryDate'))
    },
    props: {
        entry: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
    .entry-container {
        border-bottom: 1px solid #999;
        cursor: pointer;

        .entry-description {
            font-size: 12px;
        }

        &:hover {
            background-color: lightgrey;    
        }

    }
</style>