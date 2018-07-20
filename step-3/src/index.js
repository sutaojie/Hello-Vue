import Vue from 'vue'
import style from './style.sass'
require('./style.sass')
 var app = new Vue({
   el: '#app',
   data: {
     newTodo: '',
     todoList:[]
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
     }
   }
 })

