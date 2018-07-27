import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        selected:'profile',
        user:{
            id:'',
            username:''
        },
            resume:{
                config: [
                    {field: 'profile', icon: 'id'},
                    {field: 'workHistory', icon: 'work'},
                    {field: 'education', icon: 'book'},
                    {field: 'projects', icon: 'heart'},
                    {field: 'awards', icon: 'cup'},
                    {field: 'contacts', icon: 'phone'},
                ],
                profile:{
                    name:'苏赵勇',
                    city:'安徽',
                    title:'这是我的简历',
                    birthday:'1995-3-13'
                },
                workHistory:[ 
                {
                    company: '杭州碧图电子科技有限公司', 
                    content: `工作内容和编程不相关。在工作之余的时间里，自学前端半年，喜欢逛技术之类的网站，比如： statck overflow, V2EX, github, CSS-Ticks, 阮一峰博客等。
                    遇到不明白的地方或在项目中出现报错，第一反应是去查阅文档说明，其次去 Google, statck overflow，github 中参考解决方案。 
                    不断练习动手能力，看的新技术敢于尝试。
                    `
                }
                ],
                education: [
                    { school: '安徽财贸职业技术学院', content: '专科' }, 
                ],
                projects: [
                    {name:'', content:'xxx'}
                ],
                awards: [
                    {name:'再来一瓶', content:'自己本身中奖绝缘体，T_T'}
                ],
                contacts: [
                    {contact:'手机', content:'17682488600'},
                    {contact:'QQ', content:'1522006120'}
                ],
            }
    },
    mutations: {
        initState(state, payload){
            Object.assign(state, payload)
        },
        switchTab(state, payload){
            state.selected = payload
            localStorage.setItem('state', JSON.stringify(state))
        },
        updateResume(state, {path, value}){
            objectPath.set(state.resume, path, value)
            localStorage.setItem('state', JSON.stringify(state))
        },
        setUser(state, payload){
            Object.assign(state.user, payload)
        },
        removeUser(state){
            state.user.id = null
        }
    }
})