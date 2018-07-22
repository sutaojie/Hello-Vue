<template>
  <div id="app">
    <Topbar/>
    <ResumeEditor/>
    <ResumePreview/>
  </div>
</template>

<script>
import Topbar from './components/Topbar.vue'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
export default {
  name: 'App',
  data () {
    return { 
      text : '!'
    }
  },
  components:{Topbar,ResumeEditor,ResumePreview}
}
</script>

<style lang='sass'>
p
  color:green
  span
    color:red

</style>
