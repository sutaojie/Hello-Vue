<template>
  <div id="app">
    <p><span>wo</span>{{text}}</p>
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return { 
      text : '!'
    }
  }
}
</script>

<style lang='sass'>
p
  color:green
  span
    color:red

</style>
