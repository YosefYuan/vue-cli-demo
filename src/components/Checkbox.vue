<template>
<div>
    <div class="checkbox">
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
    </div>
    <div class="checkbox-group">
        <input type="checkbox" id="jack" value="jack" v-model="checkedNames">
        <label for="jack">jack</label>
        <input type="checkbox" id="john" value="john" v-model="checkedNames">
        <label for="john">john</label>
        <input type="checkbox" id="mike" value="mike" v-model="checkedNames">
        <label for="mike">mike</label>
        <hr>
        <span>Checked names: {{ checkedNames }}</span>
    </div>
</div>
</template>
<script>
export default{
  data () {
    return {
      checked: true,
      checkedNames: []
    }
  }
}
</script>
<style>
    .checkbox,.checkbox-group{border:1px solid #888;margin-top:15px;padding:15px;color:red;}
</style>
