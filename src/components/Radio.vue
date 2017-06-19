<template>
    <div>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">one</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
</template>

<script>
  export default{
    data () {
      return {
        picked: ''
      }
    }
  }
</script>
