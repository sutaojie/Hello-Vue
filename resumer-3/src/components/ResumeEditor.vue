<template>
    <div id="resumeEditor">
        <aside>
            <nav>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>
        </aside>
        <section class="userInfo">
           <div>
               <label>
                   姓名
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   出生日期
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   性别
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   目前状态
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   工作年限
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   所在城市
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   期望城市
                   <br>
                   <input type="text">
               </label>
           </div>
           <div>
               <label >
                   期望职位
                   <br>
                   <input type="text">
               </label>
           </div>
        </section>
    </div>
</template>
<script>
export default {
    name:'ResumeEditor'
}
</script>
<style lang="scss" scoped>
 #resumeEditor{
     background-color: #fff;
     box-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.25);
        ul{
            width:40px;
            height:200px;
        }
        ul>li{
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 1px solid #ccc;
            margin-top:10px;
        }
        .userInfo{

            div>label{
                color:#333333;
            }    
        }
    }
</style>
