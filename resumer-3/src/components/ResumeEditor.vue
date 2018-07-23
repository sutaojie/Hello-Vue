<template>
    <div id="resumeEditor">
        <nav>
            <ol>
                <li v-for="(item, index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">{{item.icon}}</li>
           </ol>
        </nav>
        <ol class="panels">
            <li v-for="item in resume.config" v-show="item.field === selected">{{resume[item.field]}}</li>
        </ol>
   </div>
</template>
<script>
export default {
    name:'ResumeEditor',
    data(){
        return {
            selected:'profile',
            resume:{
                config: [
                    {field: 'profile', icon: 'id'},
                    {field: 'work history', icon: 'work'},
                    {field: 'education', icon: 'book'},
                    {field: 'projects', icon: 'heart'},
                    {field: 'awards', icon: 'cup'},
                    {field: 'contacts', icon: 'phone'},
                ],
                profile:{
                    name:'1',
                    city:'2',
                    title:'3'
                },
                'work history':[],
                education: [],
                projects: [],
                awards: [],
                contacts: [],
            }
        }
    }
}
</script>
<style lang="scss" scoped>
 #resumeEditor{
     background-color: #fff;
     box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.25);
     display: flex;
     flex-direction: row;
     overflow:auto;
     > nav{
         width:80px;
         background-color: black;
         color:white;
         > ol{
             >li{
                 height: 48px;
                 display: flex;
                 justify-content: center;
                 align-items: center;
                 margin-top: 16px;
                 margin-bottom: 16px;
                 &.active{
                     background-color: white;
                     color: black;
                 }
             }
         }
     }
   }
   ol{
       list-style:none;
   }
</style>
