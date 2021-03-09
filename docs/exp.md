---
layout: Exp
meta: 
  - name: description
    content: 书写示例
---
### 插槽

::: slot module1
this is module1
::::

::: slot module2
this is module2
:::

### 目录

[[toc]]

### 引用
> 这是一条引用
### 自定义容器

::: tip 告示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

::: v-pre
`{{ This will be displayed as-is }}`
:::

::: center

居中文字

:::

注意：如果样式未达到预期，请补充css

### 代码块行高亮

``` js {1,3-5}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

更多用法参照：https://v1.vuepress.vuejs.org/zh/guide/markdown.html

### emoji

:tada:

### 常用Front Matter

```yaml
---
title: 标题
date: 日期 2021-03-4
tags: 
  - JavaScript
  - Vue
  - ElementUI
author: 作者
location: 地理位置
layout: 模板
meta: 
  - name: description
    content: seo用页面描述
  - name: keywords
    content: seo用关键词
summary: 列表显示文章简述
permalink: 伪静态用生成文章url
metaTitle: 网页的title
---
```

