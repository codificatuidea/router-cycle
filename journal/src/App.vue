<template>
  <h1>{{ authStatus }}</h1>
  <router-view/>
</template>

<script>
import useAuth from './modules/auth/composables/useAuth'

export default {
  setup() {
    const { authStatus, checkAuthStatus } = useAuth()
    checkAuthStatus()

    return {
      authStatus
    }
    

  },
}
</script>
