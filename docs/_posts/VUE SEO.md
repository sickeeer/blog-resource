---
title: 关于VUE的SEO优化
date: 2021-03-8
tags: 
  - JavaScript
  - Vue
  - SEO
author: LinvKey
location: 移动智地
layout: Post
summary: 对于VUE的SEO优化
---



1.在项目中安装

```bash
  npm install prerender-spa-plugin --save 
```

2.在vue.config.js中写入以下代码

注意修改routes数组的值
```vue
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        return {
            plugins: [
                new PrerenderSPAPlugin({
                   //网页包的路径将应用程序输出到prerender
                    staticDir: path.join(__dirname,'dist'),
                    //Routes to render 对应自己router
                    routes: ['/', '/home','/blog','/aboutMe','/message'],
                    renderer: new Renderer({
                        inject: {
                            foo: 'bar'
                        },
                        //渲染时显示浏览器窗口。对调试有用。
                        headless: false,
                        // // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        renderAfterDocumentEvent: 'render-event'
                    })
                }),
            ],
        };
    }
}
```
3.在main.js中添加如下内容

```vue
new Vue({
  router,
  store,
  render: h => h(App),
  //这里与vue.config.js中的事件名相对应
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
```

4.注意项目的router必须是history模式

```
mode:"history"
```











亲测有效！！！