<template>
    <div>
        <form @submit.prevent="signIn">
            <div class="row">
                <input type="text" placeholder="账号" v-model="formData.username" required>
            </div>
            <div class="row">
                <input type="password" placeholder="密码" v-model="formData.password" required>
            </div>
            <div class="actions">
                <button type="submit" class="button button-glow button-border button-rounded button-primary"> 登录
                </button> <br>
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
                this.$emit('setUser', getAVUser())
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

