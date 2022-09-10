<template>
  <button class="btn btn-primary" @click="$emit('on:click')">
    <span>
      {{ icon }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '🖊'
    }
  }
}
</script>

<style scoped>
    button {
        border-radius: 100%;
        bottom: 20px;
        height: 80px;
        position: fixed;
        right: 20px;
        width: 80px;
    }

    span {
        display: block;
        font-size: 35px;
        font-weight: bold;
        margin-top: -10px;
    }
</style>