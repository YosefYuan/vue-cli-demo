<template>
    <div class="header">
      <h3>Demo</h3>
      <router-link to="/hello">Hello</router-link>
      <router-link to="/test">Test</router-link>
    </div>
</template>

<script>
export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        padding-bottom:30px;
        border-bottom:1px dotted #888;
    }
</style>
