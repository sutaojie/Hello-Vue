<template>
  <div>
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      message:'Hello'
    }
  }
}
</script>

<style>
p{color:red;}
</style>
