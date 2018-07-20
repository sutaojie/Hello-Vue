# Usage
- - - 
**安装依赖**
```
npm install vue
npm install http-server
```
**命令**
`http-server -c-1` 浏览器中输入 `http://127.0.0.1:8080`
`webpack` 运行

## 绑定数据
- - -
`<input type="text" v-model="newTodo"` 让 `input.value` 与 `data.newTodo` 双向绑定。

## 绑定事件
- - -
### 添加
`<input type="text" v-model="newTodo" @keypress.enter='addTodo'>` 这样 `input` 绑定 `keypress.enter`事件。
在 `methods` 中写入 `addTodo` 方法
```
methods:{
    addTodo(){
    //...
    }
}
```

### 标记
在 `addTodo` 方法中添加 `done` 属性来标记完成状态
```
     addTodo(){
       this.todoList.push({
         title:this.newTodo,
         createdAt:new Date(),
         done: false
       })
 
```

`v-if` 来展示
```
<span v-if='todo.done'>已完成</span>
 <span v-else>未完成</span>

```
### 删除
给 `button` 绑定 `click` 事件
```
     removeTodo(todo){
       let index = this.todoList.indexOf(todo)
       this.todoList.splice(index,1)
     }
 
```

### 保存
`created` 钩子用来在实例创建之后执行代码
```
   created(){
    //执行的代码
   }
 
```
`onbeforeunload` 可以在窗口即将被关闭时，会触发事件。
然后用 `JSON` 来解析，`JSON.stringify` 可以`返回与指定值对应的JSON字符串`
用 `localStorage` 来永久的保存数据，否则每次刷新页面数据会被清除。
访问当前域名下的本地 `Storage`对象，并增加了一个数据项通过使用`Storage.setItem()`
```
     window.onbeforeunload=()=>{
       let dataString = JSON.stringify(this.todoList)
       window.localStorage.setItem('myTodos', dataString)
     }
 
```
紧接着 `getItem()` 获取 `Storage`对象
`JSON.parse()` 解析JSON字符串并返回对应的值

```
    let oldDataString = window.localStorage.getItem('myTodos')
    let oldData = JSON.parse(oldDataString)
    this.todoList = oldData || []

```

`oldData || []` 或运算(`||`)符常用于为一个变量设置默认值
