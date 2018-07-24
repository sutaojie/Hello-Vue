import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        selected:'profile',
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
                    name:'wang',
                    city:'anhui',
                    title:'resume',
                    birthday:'1995-3-3'
                },
                workHistory:[ 
                {
                    company: '鸡飞狗跳公司', 
                    content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                    我的主要工作如下:
                    1. 完成既定产品需求。
                    2. 修复 bug。`
                },
                {
                    company: '狗急跳墙责任有限公司', 
                    content: `公司总部设在XXXX区，先后在北京、上海成立分公司。专注于移动XXX领域，主打产品XXXXX，它将资讯、报纸、杂志、图片、微信等众多内容，按照用户意愿聚合到一起，实现深度个性化 定制。
                    我的主要工作如下:1. 完成既定产品需求。2. 修复 bug`
                }
                ],
                education: [
                    { school: '黄志诚警官大学', content: '本科' }, 
                ],
                projects: [
                    {name:'project A', content:'xxx'}
                ],
                awards: [
                    {name:'少年先锋队', content:'小学生'}
                ],
                contacts: [
                    {contact:'phone', content:'1221313'},
                    {contact:'QQ', content:'1523423'}
                ],
            }
    },
    mutations: {
        switchTab(state, payload){
            state.selected = payload
        },
        updateResume(state, {field, subfield, value}){
            state.resume[field][subfield] = value
        }
    }
})