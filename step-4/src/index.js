import Vue from 'vue'
import AV from 'leancloud-storage'
//import style from './style.sass'
//require('./style.sass')

var APP_ID = '5CKGqqtz4yXqQOccCHL01ubw-gzGzoHsz';
var APP_KEY = 'QkXA6KaoQ3qb5EgqBDiDPWRN';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

 var app = new Vue({
   el: '#app',
   data: {
     newTodo: '',
     todoList:[],
     actionType:'singUp',
     formData:{
       username:'',
       password:''
     },
     currentUser:null
   },
   created(){
     window.onbeforeunload=()=>{
       let dataString = JSON.stringify(this.todoList)
       window.localStorage.setItem('myTodos', dataString)
     }

     let oldDataString = window.localStorage.getItem('myTodos')
     let oldData = JSON.parse(oldDataString)
     this.todoList = oldData || []
   },
   methods:{
     addTodo(){
       this.todoList.push({
         title:this.newTodo,
         createdAt:new Date(),
         done: false
       })
       this.newTodo=''
     },
     removeTodo(todo){
       let index = this.todoList.indexOf(todo)
       this.todoList.splice(index,1)
     },
     singUpp(){
       // 新建 AVUser 对象实例
        var user = new AV.User();
      // 设置用户名
       user.setUsername(this.formData.username);
      // 设置密码
        user.setPassword(this.formData.password);
      // 设置邮箱
       user.signUpp().then((loggedInUser)=>{
         this.currentUser=this.getCurrentUser()
      }, function (error) {
     
      });
     },
     logIn(){
       AV.User.logIn(this.formData.username, this.formData.password).then((loggedInUser)=> {
         this.currentUser=this.getCurrentUser()
        }, function (error) {
      });
     },
     getCurrentUser(){
       let {id, createAt, attributes:{username}} = AV.User.current()
       return {id, createAt, username}
     }
   }
 })

