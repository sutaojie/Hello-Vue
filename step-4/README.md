# npm
- - -
数据库我选择[leancloud](https://leancloud.cn)
```
npm install leancloud-storage
```

按照文档来操作
安装、引用、初始化、测试demo

**数据**
```
data:{
    //..
    formData:{
        username:'',
        password:''
    }
}
```
**登录**
在 page.html 中
给表单提交添加事件
```
        <div class="singUp" v-if='actionType === "singUp"'>
          <form @submit.prevent='singUpp'>
            <div class="formRow">
              用户名<input type="text" v-model='formData.username'>
            </div>
            <div class="formRow">
              密码<input type="password" v-model='formData.password'>
            </div>
            <div>
              <input type="submit" value='注册'>
            </div>
          </form>
        </div>
```

设置注册信息
```
     singUpp(){
       // 新建 AVUser 对象实例
        var user = new AV.User();
      // 设置用户名
       user.setUsername(this.formData.username);
      // 设置密码
        user.setPassword(this.formData.password);
       user.signUpp().then((loggedInUser)=>{
      }, function (error) {

      });
     },

```
**注册**
和登录类似


**获取用户信息ID，账号，创建时间**

```
    getCurrentUser(){
       let {id, createAt, attributes:{username}} = AV.User.current()
       return {id, createAt, username}
     }
```
