<template>
<div>
 <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</div>
</template>

<script>
import 'normalize.css/normalize.css'
import './assets/reset.css'
import Topbar from './components/Topbar.vue'
import ResumeEditor from './components/ResumeEditor'
import ResumePreview from './components/ResumePreview'
import icons from './assets/icons'
import store from './store/index.js'
import AV from './lib/leancloud'
import getAVUser from './lib/getAVUser'
export default {
  name: 'App',
  store,
  components:{Topbar,ResumeEditor,ResumePreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons)
    let state = localStorage.getItem('state')
    if(state){
      state = JSON.parse(state)
    }
    this.$store.commit('initState', state)
    this.$store.commit('setUser', getAVUser())
  }
}
</script>

<style lang='scss'>
  .page{
    height:100vh;
    display: flex;
    flex-direction: column;
    background-color: #EAEBEC;
    
    >main{
      min-width:1024px;
      // max-width:1440px;
      width:100%;
      margin-top:16px;
      margin-bottom:16px;
      display: flex;
      flex-grow: 1;
      justify-content:space-between;
      align-content:center;
      padding:0 16px;
    }
    #resumeEditor{
      width:35%;
      flex-grow:1;
      background-color: #444444;
    }
    #resumePreview{
      width:64%;
      flex-grow:1;
      margin-left:16px;
      background-color: #777;
    }
  }
svg{
  width:2em;
  height:2em;
  fill:currentColor;
  vertical-align: -0.1em;
  font-size:16px;
}
</style>
