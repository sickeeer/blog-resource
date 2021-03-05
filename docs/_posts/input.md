---
title: 微信小程序输入框上移问题
date: 2021-03-5
tags: 
  - JavaScript
  - 微信小程序
author: 孙一钫
location: 移动智地
layout: Post
---

## 微信小程序输入框上移问题
- 缺陷：输入框顶起整个页面 包括自定义顶栏
- 解决方式：给input设置adjust-position="{{false}}"后自定义input高度
- wxml

```javascript
  <view class="submit" style="bottom:{{bottom}}px">
    <view class="serch-view">
    <input bindconfirm="toSubmit"
          value="{{code}}"
          bindfocus="inputFocus"
          bindblur="inputBlur"
          adjust-position="{{false}}"
          class="block-main"
          type="text"
          confirm-type="go"
          cursor-spacing="100" class="course-search"></input>
    <view bindtap="search"  class="search-button">发 送</view>
  </view>
```
- js

```javascript
  inputFocus (e) {
    console.log(e);
    this.setData({bottom: e.detail.height})
  },
  inputBlur () {
    this.setData({bottom: 0})
  },
```
