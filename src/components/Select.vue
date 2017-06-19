<template>
    <div id="example-5" class="demo">
    <select v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    </div>
</template>
<script>
  export default{
    data () {
      return {
        selected: null
      }
    }
  }
</script>
