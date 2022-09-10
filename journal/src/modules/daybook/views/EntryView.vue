<template>
    
    <div v-if="entry">
        <div class="d-flex justify-content-between p-2">

            <EntryDate :entry="entry" />

            <div>
                <button class="btn btn-danger mx-2">
                    Eliminar
                </button>
                <button class="btn btn-primary">
                    Subir foto
                </button>
            </div>

        </div>
        <hr />
        <div class="d-flex flex-column px-3 h-75">
            <textarea 
                placeholder="¿Qué aprendimos hoy?"
                v-model="entry.text"
            ></textarea>
        </div>
        <FabButton
         icon="💾" 
         @on:click="saveEntry"
        />
        <img class="img-thumbnail" src="https://www.moto1pro.com/sites/default/files/yamaha-yzf-r3.jpg" />
    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            entry: null
        }
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    components: {
        FabButton: defineAsyncComponent(() => import('../components/FabButton')),
        EntryDate: defineAsyncComponent(() => import('../components/EntryDate'))
    },
    computed: {
        ...mapGetters('journal', ['getEntryById'])
    },
    methods: {
        ...mapActions('journal', ['updateEntry', 'createEntry']),
        loadEntry() {
            let entry
            if (this.id === 'new') {
                entry = {
                    text: '',
                    date: new Date().getTime()
                }
            } else {
                entry = this.getEntryById(this.id)
                if (!entry) this.$router.push({ name: 'no-entry' })
            }

            this.entry = entry
        },
        async saveEntry() {
            if (this.entry.id) {
                await this.updateEntry(this.entry)
            } else {
                const id = await this.createEntry(this.entry)
                this.$router.push({ name: 'entry', params: { id } })
                // Create new entry
            }
        }
    },
    created() {
        this.loadEntry()
    },
    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style scoped>
    textarea {
        font-size: 20px;
        height: 100%;
        border: none;
    }
    img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
    }
</style>