<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <label >用户名</label>
                <input type="text" v-model="formData.username" required>
            </div>
            <div class="row">
                <label >密码</label>
                <input type="password" v-model="formData.password" required>
            </div>
            <div class="actions">
                 <input type="submit" value="提交">
                 {{errorMessage}}
            </div>
        </form>
    </div>
</template>
<script>
import AV from '../lib/leancloud'
import getAVUser from '../lib/getAVUser'
import getErrorMessage from '../lib/getErrorMessage'
export default {
    data(){
        return{
            formData:{
                username:'',
                password:''
            },
            errorMessage:''
        }
    },
    methods:{
        signIn(){
            let {username, password} = this.formData
            AV.User.logIn(username, password).then( () =>{
                this.$store.commit('setUser', getAVUser())
            },  (error) =>{
                this.errorMessage = getErrorMessage(error)
            });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

