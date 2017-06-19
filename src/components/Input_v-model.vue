<template>
  <div class="hello">
    <input v-model="message" placeholder="edit me">
    <p>Msg is: {{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
