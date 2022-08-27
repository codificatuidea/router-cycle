import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import('../modules/pokemon/layouts/PokemonLayout'),
        children: [
            {
                path: 'home',
                name: 'pokemon-home',
                component: () => import('../modules/pokemon/pages/ListPage')
            },
            {
                path: 'about',
                name: 'pokemon-about',
                component: () => import('../modules/pokemon/pages/AboutPage')
            },
            {
                path: 'detail/:id',
                name: 'pokemon-id',
                component: () => import('../modules/pokemon/pages/PokemonPage'),
                props: (route) => {
                    const id = Number(route.params.id)
                    return isNaN(id) ? { id: 1 } : { id }
                }
            },
            {
                path: '',
                redirect: {
                    name: 'pokemon-home'
                }
            },
        ]
    },
    {
        path: '/dbz',
        beforeEnter: [isAuth, isAdmin],
        name: 'dbz',
        component: () => import('../modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name: 'dbz-characters',
                component: () => import('../modules/dbz/pages/CharactersPage'),
                beforeEnter: [],
            },
            {
                path: 'about',
                name: 'dbz-about',
                component: () => import('../modules/dbz/pages/AboutPage')
            },
            {
                path: '',
                redirect: {
                    name: 'dbz-characters'
                }
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../modules/shared/pages/NoPageFound')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

/*const canAccess = async () => {

}

router.beforeEach(async (to, from, next) => {
    const auth = await canAccess()
    if (auth) {
        next()
    } else {
        console.log('Entramos')
        next({
            name: 'pokemon-home'
        })
    }
})*/

export default router