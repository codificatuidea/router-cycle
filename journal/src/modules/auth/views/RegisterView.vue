<template>
    <h1 class="text-center">Registro</h1>

    <form @submit.prevent="onSubmit">

        <div class="mb-3">
            <label>Nombre</label>
            <input
                type="text"
                class="form-control"
                placeholder="Ingrese nombre"
                required
                v-model="userForm.name"
            />
        </div>
        
        <div class="mb-3">
            <label>Correo</label>
            <input
                type="email"
                class="form-control"
                placeholder="Ingrese correo electrónico"
                required
                v-model="userForm.email"
            />
        </div>

        <div class="mb-3">
            <label>Contraseña</label>
            <input
                type="password"
                class="form-control"
                placeholder="Ingrese contraseña"
                required
                v-model="userForm.password"
            />
        </div>

        <div class="mb-3">
            <button
                class="btn btn-success w-100"
                type="submit"
            >
            Registrarme
            </button>
        </div>

        <div>
            <router-link :to="{ name: 'login' }">Ya tengo una cuenta</router-link>
        </div>

    </form>
</template>

<script>
import { ref } from 'vue'
import useAuth from '../composables/useAuth'
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';

export default {
    setup() {

        const { createUser } = useAuth()

        const router = useRouter()

        const userForm = ref({
            name: '',
            email: '',
            password: ''
        })

        return {
            userForm,
            onSubmit: async () => {
                const { ok, message } = await createUser(userForm.value)
                if (!ok) Swal.fire('Error', message, 'error')
                else router.push({ name: 'no-entry' })
            }
        }
    }
}
</script>

<style>

</style>