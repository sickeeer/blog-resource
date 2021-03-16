---
title: Vue 文档速查
date: 2021-02-24
tags: 
  - JavaScript
  - Vue
author: sicker
location: 移动智地
---
### html

vue 参数为html

```vue
<div v-html="someData"></div>
```



### 属性

v-bind:id

```vue
<div v-bind:id="someData"></div>
```



### 表达式

```vue
<div>{{number + 1}}</div>
```



### 指令

v-if

```vue
<div v-if="a === 0">看不看得到我？</div>
<div v-else-if="a === 1">你能看到第二行拉</div>
<div v-else>你看不到它</div>
```



### 参数

v-bind:href

缩写 :href



### 可变参数

```vue
<a v-on:[eventName]="doSomething"> ... </a>
```

如果 `eventName` 为 href ，则等价于 `v-bind:href`

如果 `eventName` 为 focus，则等价于 `v-on:focus`

避免使用大写字符来命名键名，因为浏览器会把 attribute 名全部强制转为小写



### 事件

#### v-on:click

缩写:@click

后面可以接 表达式 或者 方法

```vue
<div @click="a+1">点我</div>
<div @click="hello('hello',$event)">点我</div>
<script>
	export default {
        methods: {
            hello(a,b){
                alert(a)
            }
        }
    }
</script>
```

第二个参数 $event 可以获取到节点信息  

#### 事件修饰符

```vue
<div @click="a">
    点我
    <div @click="b.stop">
        点我
    </div>
</div>
```

阻止冒泡

其他修饰符

- `.stop`
- `.prevent`
- `.capture`
- `.self`
- `.once`
- `.passive`

- `.enter`
- `.tab`
- `.delete` (捕获“删除”和“退格”键)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

更多查看事件文档    https://cn.vuejs.org/v2/guide/events.html



### 自定义指令

some.js

```js
import Vue from 'vue'

Vue.directive('n',{
 bind: (el,binding)=>{
    el.textContent=Math.pow(binding.value,2)
 },
 update: (el,binding)=>{
    el.textContent=Math.pow(binding.value,2)
 }
})
```

some.vue

```vue
<template>
	<div v-n="32"></div>
</template>

<script>
    import  './components/n'
</script>
```



### 计算属性

```vue
<template>
    <div>
        {{c}}
    </div>
</template>
<script>
  export default {
    data(){
        return {
            a:1,
            b:2
        }
    },
    computed:{
        c: function() {
            return this.b - this.a
        }
    }
  }
</script>
```



### 样式 动态class

#### 数组传输

```vue
<template>
	<div :class="[a,b]"
</template>
<script>
	export default {
        data() {
            return {
                a:'min',
                b:'max'
            }
        }
    }
</script>
```

#### 对象方式

```vue
<template>
	<div :class="c"
</template>
<script>
	export default {
        data() {
            return {
                c:{'max':true,'min':false},
            }
        }
    }
</script>
```



### v-for

```vue
<div v-for="(item,index) in list" :key="item.id">
	{{index}}. {{item}}
</div>
<div v-for="(val, key) in object" :key="key"></div>
<div v-for="(val, name, index) in object" :key="name"></div>
<span v-for="n in 10">{{ n }} </span> <!--直接输出从1开始的n个整数-->
```

也可以用 of 来等代替 in

#### 分组

```vue
<ul>
  <template v-for="(item,index) in object">
    <li :key="item">{{ item }}</li>
    <li :key="index" class="divider" role="presentation">line 2</li>
  </template>
</ul>
```

两行需要绑定不同的 key

#### 触发监听

Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`



### 组件

#### slot 插槽 与 传参 props

some.vue

```vue
<navigation-link url="/profile">
      <template #slot1>这里会渲染slot1插槽</template>
      <div>-----父组件分割线---</div>
      <template #slot2>这里会渲染slot2插槽</template>
</navigation-link>
<script>
	import navigationLink from ./navigationLink
</script>
```

navigationLink.vue

```vue
<a
  v-bind:href="url"
  class="nav-link"
>
    <slot name="slot1">默认插槽会显示我</slot>
    <slot></slot>
    <div>-----子组件分割线---</div>
    <slot name="slot2">默认插槽会显示我 2</slot>
</a>
<script>
	export default{
        props:{
            url: String,
        }
    }
</script>
```

渲染成

```vue
<a href="/profile" class="nav-link">
	这里会渲染slot1插槽
    <div>-----父组件分割线---</div>
    <div>-----子组件分割线---</div>
    这里会渲染slot2插槽
</a>
```

props类型

- `String`
- `Number`
- `Boolean`
- `Array`
- `Object`
- `Date`
- `Function`
- `Symbol`

多个可能的类型    prop: [String, Number]

示例

```js
export default{
    props:{
        type: String,
        default: function () {
        	return 'success'
        },
		validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
        }
    }
}
```

非 Prop 的 Attribute 将会被添加到这个组件的根元素上

如果子组件存在class、style，则会自动合并父组件外部提供给组件的值

如果你**不**希望组件的根元素继承 attribute，你可以在组件的选项中设置 `inheritAttrs: false`。

示例：

父组件提供 class

```html
 <s class="big" a=2222 />
```

子组件自带 class

```vue
<template>
	<div class="colorful">
    </div>
</template>
<script>
    export default {
      name: "HelloWorld",
      inheritAttrs: false,
    }
</script>
```

渲染后

```html
<div class="colorful big"></div>
```

注意 `inheritAttrs: false` 选项**不会**影响 `style` 和 `class` 的绑定。

`v-slot:header` 可以被重写为 `#header`：

更多见 https://cn.vuejs.org/v2/guide/components-slots.html



### 跨组件传参
> 以下示例均以 vue-cli 创建的默认实例为模板
#### 根实例
在 `main.js` 实例化vue对象时，引入 `data` 与 `methods`
``` javascript
new Vue({
  data: {who:"我是main.js"},
  methods: { hello(){console.log("hello from main.js")} }
  render: h => h(App),
}).$mount('#app')
```
那么所有的节点均可以以 `this.$root.xxx` 获取到属性与方法

#### 父级组件
app.vue
``` javascript
data() {
    return {
      who: "我是App.vue",
    };
},
methods: { hello(){console.log("hello from parent component")} }
```
那么，其子组件 如 `helloworld.vue` 则可以通过 `this.$parents.xxx` 来获取其属性与方法
#### 子组件
```
<HelloWorld ref="helloworld" msg="Welcome to Your Vue.js App" />
```
通过 `this.$refs.helloworld.XXX` 获取子组件的属性与方法

### 依赖注入
在最上级的组件中注入属性与方法
``` javascript
export default {
  name: "App",
  data() {},
  provide: function () {
    return {
      provide: this.provide,
    };
  },
}
```
子孙组件通过
``` javascript
export default {
  name: "App",
  data() {},
  inject: ['provide'],
  mounted(){
    console.log("从祖节点获取到的provide：",this.provide)
  }
}
```
可直接使用该属性方法

#### 综合示例
main.js
```javascript
import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
new Vue({
  data: {who:"我是main.js"},
  methods: {hello(){console.log("hello from main.js")}},
  render: h => h(App),
}).$mount('#app')
```
App.vue
```vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld ref="helloworld" msg="Welcome to Your Vue.js App" />
    <button @click="b = !b">button</button>
    <transition
      name="slide-fade"
      :duration="{ enter: 500, leave: 800 }"
      mode="out-in"
    >
      <div v-if="b">111</div>
    </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated tada"
      leave-active-class="animated bounceOutRight"
    >
      <p v-if="b">需要配 animated.css 库</p>
    </transition>
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  data() {
    return {
      who: "我是App.vue",
      provide: "我是App.vue的提供者",
      b: true,
    };
  },
  methods: {
    hello() {
      console.log("hello from parent component");
    },
  },
  computed: {},
  mounted() {
    console.log(this.$refs.helloworld.who);
  },
  provide: function () {
    return {
      provide: this.provide,
      hello: this.hello
    };
  },
  components: {
    HelloWorld,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
components/HelloWorld.vue
``` vue
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <HelloChild />
  </div>
</template>
<script>
import HelloChild from './HelloChild.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
    who: "我是helloWorld.vue"
    }
  },
  components: {
    HelloChild
  },
  inject: ['provide'],
  props: {
    msg: String
  },
  mounted(){
      console.log("父节点",this.$parent.who)
      console.log("根节点",this.$root.who)
      this.$root.hello()
      this.$parent.hello()
      console.log("从父节点获取到的provide：",this.provide)
  }
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
```
components/HelloChild.vue
```vue
<template>
  <div class="hello">
      我是 hello  的子组件
  </div>
</template>
<script>
export default {
  name: 'helloChild',
  data() {
    return {
    who: "我是helloChild.vue"
    }
  },
  inject: ['provide','hello'],
  mounted(){
    console.log("父节点",this.$parent.who)
    console.log("从祖节点获取到的provide：",this.provide)
    console.log(this.hello)
  }
}
</script>
```
> 输出结果
``` bash
HelloChild.vue
---
父节点 我是helloWorld.vue
从祖节点获取到的provide： 我是App.vue的提供者
ƒ hello() {
    console.log("hello from parent component");
  }
---

HelloWorld.vue
---
父节点 我是App.vue
根节点 我是main.js
从父节点获取到的provide： 我是App.vue的提供者
---

main.js
---
hello from main.js
---

App.vue
---
hello from parent component
我是helloWorld.vue
```
#### vuex
...
### 组件复用与自动销毁
```javascript
mounted: function () {
  this.attachDatepicker('startDateInput')
  this.attachDatepicker('endDateInput')
},
methods: {
  attachDatepicker: function (refName) {
    var picker = new Pikaday({
      field: this.$refs[refName],
      format: 'YYYY-MM-DD'
    })

    this.$once('hook:beforeDestroy', function () {
      picker.destroy()
    })
  }
}
```

### 过渡
template
```javascript
<button @click="b = !b">button</button>
<transition
    name="slide-fade"
    :duration="{ enter: 500, leave: 800 }"
    mode="out-in"
>
    <div v-if="b">111</div>
</transition>
<transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
>
    <p v-if="b">需要配 animated.css 库</p>
</transition>
```
js
```javascript
data() {
    return {
      b: true,
    };
},
```
css
```css
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
```
