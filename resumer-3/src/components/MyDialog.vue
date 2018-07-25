<template>
    <div class="dialogWrapper" v-show="visible">
        <div class="dialog">
            <header>
                <span class="title">{{title}}</span>
                <span class="close" @click="close"><span>x</span></span>
            </header>
            <main>
                <div>
                <span class="welcome">{{welcome}}</span> <br>
                <span class="tips">{{tips}}</span>
                </div>
                <div class="input-slot">
                <slot></slot>
                </div>
            </main>
        </div>
    </div>
</template>
<script>

export default {
    name: 'MyDialog',
    data(){
        return {
            welcome:'Good Morning, Welcome Back!',
            tips:'Please login bellow.'
        }
    },
    props: ['title', 'visible'],
    methods:{
        close(){
            this.$emit('close')
        }        
    } 
}
</script>
<style lang="scss" scoped>
    .dialogWrapper{
        position:fixed;
        background: hsla(0,0,0,0.25);
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:0;
        display: flex;
        justify-content:center;
        align-items:center;
    }
    .dialog{
        background-color: #F2FCF9;
        min-width: 422px;
        height: 470px;
        > header{
            width: 422px;
            height: 200px;
           position: relative; 
           display:flex;
            justify-content:center;
            align-content: center;
            .title{
                color:#00C58F;
                font-size: 24px;
                font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                font-weight: 800;
                position: absolute;
                top:107px;
            }
            .close{
                width: 25px;
                height: 25px;
                position: absolute;
                top:10px;
                right: 10px;
                background-color: #FF6159;
                border-radius: 50%;
                > span{
                    display: inline-block;
                    line-height: 25px;
                    margin-bottom: 10px;
                    cursor: pointer;
                    display: flex;
                    justify-content: center;
                }
            }
        }
        > main{
            width: 422px;
            padding: 16px;
            /*两项垂直居中*/
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            .welcome{
                font-size:18px;
                color: #495357;
            }
            .tips{
                font-size: 10px;
                color: #869091;
            }
            .input-slot{
                width: 300px;
                margin-top: 30px;
            }
        }
    }
</style>

