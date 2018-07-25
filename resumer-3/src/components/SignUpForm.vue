<template>
    <div>
        <form @submit.prevent="signUp">
            <div class="row">
                <input type="text" placeholder="账号" v-model="formData.username" required>
            </div>
            <div class="row">
                <input type="password" placeholder="密码" v-model="formData.password" required>
            </div>
            <div class="actions">
                 <button type="submit" class="button button-glow button-border button-rounded button-primary"> 注册
                </button>
                <br>
                <span class="errorMessage">{{errorMessage}}</span>
            </div>
        </form>
    </div>
</template>
<script>
import AV from '../lib/leancloud'
import getErrorMessage from '../lib/getErrorMessage'
import getAVUser from '../lib/getAVUser'
export default {
    name:'SignUpForm',
    data(){
        return{
            formData:{
                username:'',
                password:''
            },
            errorMessage: ''
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
            user.signUp().then( ()=> {
                this.$emit('success', getAVUser()) 
            },  (error) =>{
                this.errorMessage = getErrorMessage(error)
            });
            

        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../static/buttons.css';
.row{
    width:80%;
    height: 20px;
    margin: 20px auto;
    input{
        padding: 10px;
    height: 1.7em;
    font-size: 1.2em;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: 0;
    &:focus{
    border-bottom-color: #869091;
    }
    }
    
}
.actions{
        display: flex;
        justify-content: center;
        
        > button{
        margin-top: 20px;
        }
    }

</style>


