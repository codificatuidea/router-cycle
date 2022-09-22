<template>
    <nav class="navbar bg-secondary">
        <a class="navbar-brand text-white">
            <img
                height="24"
                class="d-inline-block align-text-top mx-2"
                src="@/assets/logo.png"
            />
            Daybook
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-light mx-2" @click="onLogout">Logout</button>
        </div>

    </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const { logout } = useAuth()

        const router = useRouter()

        return {
            onLogout: () => {
                logout()
                router.push({ name: 'login' })
            }
        }
    },
}
</script>