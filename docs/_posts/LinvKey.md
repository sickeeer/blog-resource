---
title: 关于el-input标签无法输入文字的问题
date: 2021-03-4
tags: 
  - JavaScript
  - Vue
  - ElementUI
author: LinvKey
location: yidonghzidi
layout: Post
---

> 关于el-input标签无法输入文字的问题

问题描述：
  在项目中引用elementUI的<el-input></el-input>标签，打字时按空格键无法显示在文本框中。

解决方法：
  在<el-input>标签内使用 v-model属性，然后在data()中定义一个值为空，赋给v-model属性
  例如 
  <el-input v-model="content" /> 
  data(){
      return{
          content:""
      }
  }

亲测有效！！！

 

 





```

```