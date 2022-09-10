<template>
  <h1>About Page</h1>
  <hr />
  <button @click="onChangeName">Change Name</button>  
  <h2>{{ name }}</h2>
</template>

<script>
export default {
  data() {
    return {
      name: 'Sebastian'
    }
  },
  methods: {
    onChangeName() {
      console.log('Entramos')
      this.name = 'Felipe'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
}
</script>

<style>

</style>