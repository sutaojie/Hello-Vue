import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        count: 0,
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
                'work history':[
                    {company:'AL', content: '我的第二份工作是'},
                    {company:'TX', content: '我的第一份工作是'}
                    ],
                education: [
                    {school: 'AL', content: '文字'}
                ],
                projects: [
                    {name:'project A', content:'xxx'}
                ],
                awards: [
                    {name:'awards A', content:'yyy'}
                ],
                contacts: [
                    {contact:'phone', content:'1221313'},
                    {contact:'QQ', content:'1523423'}
                ],
            }
    },
    mutations: {
        increment(state){
            state.count += 1
        }
    }
})