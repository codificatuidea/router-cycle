import store from '@/store'

const isAuthenticatedGuard = async(_, __, next) => {

    const { ok } = await store.dispatch('auth/checkAuthentication')

    if (ok) next()
    else next({ name: 'login' })

}

export default isAuthenticatedGuard