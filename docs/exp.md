---
layout: Exp
title: Markdown 书写示例
meta: 
  - name: description
    content: Markdown 书写示例
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

::: info 信息
这是一个信息
:::

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

::: right

居右文字

:::

### 高亮

我是 ==高亮== 的

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

###  复选框

- [ ] 看板娘

- [ ] 调色板

- [x] 多语言

### 上下标

19^th^
H~2~O

### 脚注

脚注 1 链接[^first].

[^first]: 这是一个脚注

### 流程图

@flowstart
st=>start: Start|past:>http://localhost:8080/exp.html[blank]
e=>end: End|future:>http://localhost:8080/exp.html
op1=>operation: My Operation|past
op2=>operation: Stuff|current
sub1=>subroutine: My Subroutine|invalid
cond=>condition: Yes
or No?|approved:>http://localhost:8080/exp.html
c2=>condition: Good idea|rejected
io=>inputoutput: catch something...|future

st->op1(right)->cond
cond(yes, right)->c2
cond(no)->sub1(left)->op1
c2(yes)->io->e
c2(no)->op2->e
@flowend

### Tex
Euler’s identity $e^{i\pi}+1=0$ is a beautiful formula in $\mathbb{R}^2$.

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^i r \cdots (r-i+1) (\log y)^{r-i}} {\omega^i} \right\}
$$

### 演示

::: demo 这是 demo 标题

```html
<p><span id="hello">点我试试</span></p>
```

```js
document.querySelector("#hello").addEventListener("click", () => {
  alert("hello world");
});
```

```css
span {
  color: red;
}
```

:::

存在超自然现象，谨慎使用！

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
sitemap:
  changefreq: monthly [alway|shourly|daily|weekly|monthly|yearly|never]
comment: false
waiting: false
---
```

### 其他

其他格式 请使用 Typora 编辑器辅助使用
或者参照

https://markdown-it.github.io/

https://vuepress-theme-hope.github.io/md-enhance/zh/guide/

