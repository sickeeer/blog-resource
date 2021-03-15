---
title: 微信小程序上手常用功能
date: 2021-03-12
tags: 
  - JavaScript
  - Vue
  - 微信小程序
author: LinvKey
location: 移动智地
layout: Post
summary: 快速上手微信小程序用到的语法
---

### 创建pege
创建页面在项目根目录下的page文件夹中创建文件夹，然后再【新建page】
这样就会在刚刚的新建文件夹中生成四个文件，这四个文件就是一个页面需要使用的配件
分别是
- .js文件
- .json文件
- .wxml文件
- .wxss文件

1，js文件
主体是
```
Page({
  data:{},
  //生命周期
  onLoad: function (options) {
    
  },
  //自定义方法
  方法名(){
    方法体
  }
})

```
data中存放着页面定义的变量

2，json文件是用来配置页面
如果项目引用了LinUI那么使用插件就要在json文件中配置
```
{
    "usingComponents":{
        "l-引入的插件名":"/路径"
    }
}
```

3，wxml文件
相当于Vue中的template
不过不需要内部有一个唯一的标签盛放所有代码

4，wxss文件
是编写css的文件

### 页面跳转
```
wx.navigateTo({
   url: '/pages/index/index'
})
```

### 从一个小程序跳转到另一个小程序、
```
wx.navigateToMiniProgram({
  appId: 'wxf464401e737e8c62', //另一个小程序的appid
  path: '', //path （为空时默认首页）
  extraData: { //参数
    foo: 'bar'
  },
  envVersion: 'develop', //开发版  (develop 开发版  trial 体验版   release 正式版 )
  success(res) {
    console.log('成功')
  }
})
```

### 指令

wx:for
```
<view wx:for="{{ List }}" wx:for-index="idx" wx:for-item="item别名" wx:key="idx"
```
wx:if
```
 wx:if="{{isTrue}}"
```

### 注意事项
想用div就用 view标签，
想用span放文本就用text标签，
小程序中放图片用image标签 