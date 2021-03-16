---
title: 为 vuepres 增加 favicon 站标
date: 2021-03-09
tags: 
  - vuepress
author: sicker
location: 移动智地
summary: 为 vuepres 增加 favicon 站标，让网站更加美观吧。
---
在 `.vuepress/config.js` 中在合适位置加入如下代码
```javascript
module.exports = {
    .
    .
    .
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    .
    .
    .
}
```
准备 `logo.png` 或者 对应格式的图片文件，置入 `.vuepress/public` 下

打开站点，看看效果吧！