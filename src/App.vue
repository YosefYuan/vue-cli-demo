<template>
  <div id="app">
    <div class="header">
      <h3>Demo</h3>
      <router-link to="/hello">Hello</router-link>
      <router-link to="/input">Input</router-link>
      <router-link to="/checkbox">Checkbox</router-link>
      <router-link to="/radio">radio</router-link>
      <router-link to="/select">select</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style coped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
    padding-bottom:30px;
    border-bottom:1px dotted #888;
}
a{display:inline-block;margin:0 5px;}
</style>
