<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <label >用户名</label>
                <input type="text" v-model="formData.username">
            </div>
            <div class="row">
                <label >密码</label>
                <input type="text" v-model="formData.password">
            </div>
            <div class="actions">
                <input type="submit" value="提交">
            </div>
        </form>
    </div>
</template>
<script>
import AV from '../lib/leancloud'
export default {
    name:'SignUpForm',
    data(){
        return{
            formData:{
                username:'',
                password:''
            }
        }
    },
    created(){
    },
    methods:{
        signUp(){
            let {username, password} = this.formData
            // 新建 AVUser 对象实例
            var user = new AV.User();
            // 设置用户名
            user.setUsername(username);
            // 设置密码
            user.setPassword(password);
            user.signUp().then( (loggedInUser)=> {
                this.$emit('success', {
                    username: loggedInUser.attributes.username,
                    id: loggedInUser.id
                })
            }, function (error) {
                console.log(JSON.stringify(error))
            });
            

        }
    }
}
</script>

