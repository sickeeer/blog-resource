---
title: 关于el-input标签无法输入文字的问题
date: 2021-03-4
tags: 
  - JavaScript
  - Vue
  - ElementUI
author: LinvKey
location: yidonghzhidi
layout: Post
meta: 
  - name: description
    content: 关于el-input标签无法输入文字的问题
  - name: keywords
    content: linvkey,javascript,ElementUI
summary: 在项目中引用elementUI的<el-input></el-input>标签，打字时按空格键无法显示在文本框中，让我们看看如何去解决这个问题。
---

> 关于el-input标签无法输入文字的问题

问题描述：
  在项目中引用elementUI的```<el-input></el-input>```标签，打字时按空格键无法显示在文本框中。

解决方法：
  在```<el-input>```标签内使用 v-model属性，然后在data()中定义一个值为空，赋给v-model属性
  例如 

```vue
<template>
   <el-input v-model="content" /> 
</template>
<script>
  data(){
      return{
          content:""
      }
  }
</script>
```
亲测有效！！！
