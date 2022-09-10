<template>
    <div>
        <!--
        <router-link :to="{ name: 'home' }">List Page</router-link>
        <router-link :to="{ name: 'pokemon-id', params: { id: 10 } }">Pokemon Page</router-link>
        <router-link :to="{ name: 'about' }">About Page</router-link>
        -->
        <CustomLink 
            v-for="link in links" 
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    data() {
        return {
            links: [
                { to: 'pokemon-home', name: 'List Page' },
                { to: 'pokemon-id', name: 'Pokemon Page', id: 10 },
                { to: 'pokemon-about', name: 'About Page' },
                { to: 'dbz-characters', name: 'DBZ Page' },
                { to: 'dbz-about', name: 'DBZ About Page' },
                { to: 'https://pokeapi.co', name: 'Pokeapi Docs' }
            ]
        }
    },
    components: {
        CustomLink: defineAsyncComponent(() => import('./CustomLink'))
    }
}
</script>

<style scoped>
    a {
        font-weight: bold;    
        color: gray;
        margin: 0 10px;
    }
    a.router-link-exact-active {
        color: green;
    }
</style>