---
title: 测试
date: 2021-03-4
tags: 
  - JavaScript
  - Vue
  - ElementUI
author: LinvKey
location: yidonghzidi
layout: Post
---

### 1.wx:for

```javascript
    <view  class="jira-card" wx:for="{{jiraArray}}" wx:for-index="idx" wx:for-item="itemJira" wx:key="idx">
      <card itemJira="{{itemJira}}" data-item="{{itemJira}}" bindtap="goDetail"></card> 
    </view>
```

**itemJira：循环数据
data-item="{{itemJira}}" ：点击后传入的数据
注意：data-item、bindtap要在一个标签上**

### 2.父传子

**父：**

```javascript
      <card itemJira="{{itemJira}}" ></card> 
```

**子：**

```javascript
  properties: {
    itemJira:{
      type:"object",
      value:"{}"
    },
  },
```

### 子传父

**子：**

```javascript
 this.triggerEvent("up",res)  //第一个是自定义事件名，第二个是要传递的值（可以为空）
```
**父：**

```javascript
    <music
         id='music'
         list='{{list}}'
         bind:up="_up" 
            >
    </music>
```

```
javascript
  methods: {
    _up(e) { //e为子组件传过来的值
      console.log(e.detail.data)
      this.setData({
        list: e.detail.data //这里是改变Page中data上的值
      })
    }
  }
```

**注意：在父组件中的js文件里获取子组件传过来的值,这里的自定义方法要写在Component构造器中的methods里，因为我写在Page中他不会被触发**

### 根据值来给定不同的CSS样式

```javascript
<view class="{{isChecked?'is_checked':'normal'}}" bindtap="serviceSelection"></view>
```

```javascript
.is_checked{  
  color: #FE0002 ;  
  background: #fff;  
}  
.normal{  
  color: #333;  
  background: #F0F1EC;  
} 
```

**注意：样式要用引号包裹**