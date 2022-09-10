<template>
    <h1>Counter - Vuex</h1>
    <h2>Direct access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>
    <h2>count from mapState: {{ count }}</h2>
    <h2>lastMutation mapState: {{ lastMutation }}</h2>
    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>

    <button @click="increment">+ 1</button>
    <button @click="incrementBy">+ 5</button>
    <button
      @click="incrementRandomInt"
      :disabled="isLoading">
        Random
    </button>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
    },
    methods: {
        increment() {
            this.$store.commit('counter/increment')
            // this.incrementRandomInt()
        },
        incrementBy() {
            const val = 5
            this.$store.commit('counter/incrementBy', val)
        },
        ...mapActions('counter', ['incrementRandomInt'])
        /*
            ...mapActions({
                incrementRandom: 'incrementRandomInt'
            })
        */
    }
}
</script>