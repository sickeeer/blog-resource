---
title: 微信小程序常用API
date: 2021-03-12
tags: 
  - 微信小程序
author: 孙一钫
location: 移动智地
layout: Post
---
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021031515240685.gif)

### 要点swiper内部套scroll-view
**注意：
1.scroll竖直滚动高度不能给百分比要给px/rpx
2.swiper内部item posiiton定位高度100%
3.swiper高度要给定值
4.如果横向滚动也要给水平的宽度**

### 代码
xml
```javascript
    <swiper class="tab-box" current="{{currentTab}}" duration="300" bindchange="switchTab">
      <swiper-item class="tab-content">
        <scroll-view class="scroll-height" scroll-y="true" scroll-with-animation="{{true}}">
          <view class="cont">
            <view class="jira-card" wx:for="{{jiraArray}}" wx:for-index="idx" wx:for-item="itemJira" wx:key="idx">
              <card itemJira="{{itemJira}}" data-item="{{itemJira}}" bindtap="goDetail"></card>
            </view>
          </view>
        </scroll-view>

      </swiper-item>
      <swiper-item class="tab-content">
        <scroll-view class="scroll-height" scroll-y="true" scroll-with-animation="{{true}}">
          <view class="cont">
            <view class="jira-card" wx:for="{{jiraArray}}" wx:for-index="idx" wx:for-item="itemJira" wx:key="idx">
              <card itemJira="{{itemJira}}" data-item="{{itemJira}}" bindtap="goDetail"></card>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
```
wxss

```javascript
.tab-box{
  height: 1040rpx;
}
.scroll-height {
height: 1040rpx;
}
```
js

```javascript
myAudit(){
  this.setData({
    currentTab:0,
  })
},
myInitiate(){
  this.setData({
    currentTab:1,
    // jiraArray:[]
  })
},
switchTab(event){
  var cur = event.detail.current;
  var singleNavWidth = this.data.windowWidth / 5;
  this.setData({
      currentTab: cur,
      navScrollLeft: (cur - 2) * singleNavWidth
  });
}
```
