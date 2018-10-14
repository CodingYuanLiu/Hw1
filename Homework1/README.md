# Hw1

## 1 Brief Introduction to Vue.js
 Vue.js<sup>[1]</sup> (commonly referred to as Vue; pronounced /vjuː/, like view) is an open-source JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is simplified with Vue because it is designed to be incrementally adoptable. Vue can also function as a web application framework capable of powering advanced single-page applications.

### 1.1 History
Vue was created by Evan You after working for Google using AngularJS in a number of projects. He later summed up his thought process, 
> "I figured, what if I could just extract the part that I really liked about Angular and build something really lightweight." 

Vue was originally released in February 2014. 

### 1.2 Features
#### 1.2.1 Templates
Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying Vue instance’s data. All Vue templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers. Under the hood, Vue compiles the templates into virtual DOM render functions. Combined with the reactivity system, Vue is able to calculate the minimal number of components to re-render and apply the minimal amount of DOM manipulations when the app state changes. 
    
In Vue, you can use the template syntax or choose to directly write render functions using JSX. In order to do so just replace the template option with a render function. Render functions open up possibilities for powerful component-based patterns — for example, the new transition system is now completely component-based, using render functions internally.

#### 1.2.2 Reactivity
One of Vue’s most distinctive features is the unobtrusive reactivity system. Models are just plain JavaScript objects. When you modify them, the view updates. It makes state management very simple and intuitive. Vue provides optimized re-rendering out of the box without you having to do anything. Each component keeps track of its reactive dependencies during its render, so the system knows precisely when to re-render, and which components to re-render.

#### 1.2.3 Components
Components are one of the most powerful features of Vue. In a large application, it is necessary to divide the whole app into small, self-contained, and often reusable components to make development manageable. Components extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements to which the Vue’s compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.

## 2 Pros and Cons Compared with My Technology Stack
### 2.1 Compared with jquery
Although There seems to be no comparability between vue and jquery (vue is a framework while jquery is a library of Javascript), we can still compare them in the aspect of thoughts.
#### 2.1.1 Pros
Jquery<sup>[2]</sup> uses ($) to pick DOM object and operate, which can be complex when the structure of DOM is too complicated. Vue can operate the data itself.
For example: Add an element to the list,it's obvious that the code using vue is more pity.

Vue:
``` HTML
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>

<body>
    <div id="app">
        <ul>
            <!--根据数组数据自动渲染页面-->
            <li v-for="item in message">{{item}}</li>
        </ul>
        <button @click="add">添加数据</button>
    </div>
</body>

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app',
        data: {
            message: ["第1条数据","第2条数据"],
            i:2
        },
        methods:{
            //向数组添加一条数据即可
            add:function(){
                this.i++
                this.message.push("第"+this.i+"条数据")
            }
        }
    })
</script>
```
Jquery:
``` HTML
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
</head>

<body>
    <div id="app">
        <ul id="list">
            <li>第1条数据</li>
            <li>第2条数据</li>
        </ul>
        <button id="add">添加数据</button>
    </div>

</body>

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
<script>
    $(document).ready(function() {  
    var i=2;
    $('#add').click(function() { 
       i++; 
       //通过dom操作在最后一个li元素后手动添加一个标签
      $("#list").children("li").last().append("<li>第"+i+"条数据</li>")
    });  
  }); 
</script>
```
#### 2.1.2 Cons
Jquery has been popular for many years. However, people using vue is much less than those using Jquery. As a result, the community of vue is too small. There are only a little relative questions on stackoverflow, compared with Jquery.

### 2.2 Compared with React
Although I'm not familiar with React, information of both of the frameworks on the internet is adequate for me to understand them further.

#### 2.2.1 Pros
Compared<sup>[3]</sup> with React, vue is faster, smaller and much simpler.
Here is an example: show a message and set a button to reverse it
Vue:
``` HTML
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">Reverse Message</button>
</div>

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  }
});
```
React:
``` HTML
<div id="app"></div>

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello React.js!'
    };
  }
  reverseMessage() {
    this.setState({ 
      message: this.state.message.split('').reverse().join('') 
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <button onClick={() => this.reverseMessage()}>
          Reverse Message
        </button>
      </div>
    )
  }
}

ReactDOM.render(App, document.getElementById('app'));
```
Obviously, the code using vue is simpler.
#### 2.2.2 Cons
React is better when constructing an enoumous project. Vue is easier to master, but it may generate technical debts, which make it harder to test or restore.
Besides, the community of React is also larger than Vue. React is downloaded 2.5 million times on NPM every month, while Vue is downloaded only 225 thousand times.

---
**Reference：**

***1.Wikipedia of Vue.js:*** [https://en.wikipedia.org/wiki/Vue.js](https://en.wikipedia.org/wiki/Vue.js)

***2.Blog of MR-YY:*** [https://www.cnblogs.com/MR-YY/p/6898464.html](https://www.cnblogs.com/MR-YY/p/6898464.html)

***3.Blog of Chenxj:*** [https://www.cnblogs.com/Chen-XiaoJun/p/6246946.html](https://www.cnblogs.com/Chen-XiaoJun/p/6246946.html)

