<template>
    
    <div v-if="entry">
        <div class="d-flex justify-content-between p-2">

            <EntryDate :entry="entry" />

            <div>
                <input
                  type="file"
                  @change="onSelectedImage" 
                  v-show="false"
                  accept="image/jpeg, image/png"
                  ref="imageSelector"
                />
                <button
                  class="btn btn-danger mx-2"
                  @click="onDeleteEntry"
                  v-if="entry.id"
                >
                    Eliminar
                </button>
                <button class="btn btn-primary" @click="onSelectImage">
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
        <img
          v-if="localImage"
          class="img-thumbnail"
          :src="localImage"
        />
        <img
          v-if="entry.picture && !localImage"
          class="img-thumbnail"
          :src="entry.picture" />
    </div>

</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { mapGetters, mapActions } from 'vuex';
import Swal from 'sweetalert2'
import uploadImage from '../helpers/uploadImage'

export default {
    data() {
        return {
            entry: null,
            localImage: null,
            file: null
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
        ...mapActions('journal', ['updateEntry', 'createEntry', 'deleteEntry']),
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
            new Swal({
                title: 'Espere por favor...',
                allowOutsideClick: false
            })
            Swal.showLoading()

            const picture = await uploadImage(this.file)
            this.entry.picture = picture

            if (this.entry.id) {
                await this.updateEntry(this.entry)
            } else {
                const id = await this.createEntry(this.entry)
                this.$router.push({ name: 'entry', params: { id } })
                // Create new entry
            }
            Swal.fire('Guardado', 'Entrada registrada!', 'success')
        },
        async onDeleteEntry() {

            const result = await Swal.fire({
                title: '¿Está seguro de eliminar?',
                text: 'Una vez borrado no se podrá recuperar',
                showDenyButton: true,
                confirmButtonText: 'Si, estoy seguro'
            })

            if (result.isConfirmed) {
                new Swal({
                    title: 'Espere por favor...',
                    allowOutsideClick: false
                })
                Swal.showLoading()
                await this.deleteEntry(this.entry.id)
                this.$router.push({ name: 'no-entry' })
                Swal.fire('Eliminado', '', 'success')
            }

        },
        onSelectedImage(event) {
            const file = event.target.files[0]
            if (!file) {
                this.localImage = null
                this.file = null
                return
            }

            this.file = file

            const fr = new FileReader()
            fr.readAsDataURL(file)
            fr.onload = () => this.localImage = fr.result
        },
        onSelectImage() {
            this.$refs.imageSelector.click()
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