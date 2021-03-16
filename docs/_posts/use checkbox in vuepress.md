---
title: 在vuepress/markdown-it中加入checkbox支持
date: 2021-03-09
tags: 
  - vuepress
  - 插件
author: sicker
location: 移动智地
summary: 引入组件，短短几句搞定在vuepress/markdown-it中加入checkbox支持
---
### 引入组件
下载依赖
```bash
yarn add markdown-it-task-lists
```
### 配置
在 `.vuepress` 下的 `config.js` 中，在如下位置加入
```javascript
module.exports = {
    .
    .
    .
    markdown: {
        lineNumbers: true, // 该行与本文无关，用以使代码行增加行号
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('markdown-it-task-lists'))
        }
    },
    .
    .
    .
}
```