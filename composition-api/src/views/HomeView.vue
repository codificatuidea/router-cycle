<template>
  <h1>Reactive - Ref</h1>
  <h3>{{ ironman }}</h3>
  <h3>{{ spiderman }}</h3>
  <button @click="changeIronman">Change ironman</button>
  <button @click="changeSpiderman">Change spiderman</button>
</template>

<script>
import {  ref, reactive } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const ironman = ref({ name: 'ironman', age: 50 })
    const spiderman = reactive({ name: 'spiderman', age: 25 })

    return {
      ironman,
      spiderman,
      changeIronman: () => {
        ironman.value.name = 'Tony Stark'
      },
      changeSpiderman: () => {
        spiderman.name = 'Peter Parker'
      }
    }
  }
}
</script>
