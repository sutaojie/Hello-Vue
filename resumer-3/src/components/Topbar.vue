<template>
    <div id="topbar">
        <div class="wrapper">
            <span class="logo">Resumer</span>
            <div class="actions">
                <div v-if="logined" class="userActions">
                    <span>你好，{{user.username}}</span>
                    <a href="#" class="button">登出</a>
                </div>
                <div v-else class="userActions">
                    <a class="button primary" href="#" @click.prevent='signUpDialogVisible = true'>注册</a>
                    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
                        <SignUpForm @success='login($event)'/>
                    </MyDialog>
                    <a class="button" href="#">登录</a>
                    <button class="primary">保存</button>
                    <button>预览</button>
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import MyDialog from './MyDialog.vue'
import SignUpForm from './SignUpForm.vue'
export default {
    name:'Topbar',
    data(){
        return{
            signUpDialogVisible:false
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        },
        logined(){
            return this.user.id
        }
    },
    components:{
        MyDialog,
        SignUpForm
    },
    methods:{
        login(user){
            this.signUpDialogVisible = false
            this.$store.commit('setUser', user)
        },
         
    }
}
</script>
<style lang="scss" scoped>
    #topbar{
        background-color: white;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        >.wrapper{
            min-width:1024px;
            max-width:1440px;
            margin:0 auto;
            height:64px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:0 16px;
        }
        .logo{
            font-size:24px;
            color:#000000;
        }
        .button{
            width:72px;
            height: 32px;
            border:none;
            cursor:pointer;
            font-size:18px;
            background-color: #dddddd;
            color:#222;
            text-decoration: none;
            display: inline-flex;
            justify-content: center;
            align-content: center;
            vertical-align:middle;
            &:hover{
                box-shadow: 1px 1px 1px hsla(0, 0, 0, 0.50);
            }
            &.primary{
                background: #02af5f;
                color:white;
            }
        }
       .actions{
           display: flex;
           .userActions{
               margin-right: 3em;
           }
       } 
    }
</style>

