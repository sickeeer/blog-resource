module.exports = {
  title: '养鱼技术交流博客',
  description: '前后端技术文章分享', // 文章页面描述
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  theme: 'blog',
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    dateFormat: 'YYYY-MM-DD',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文章',
        link: '/post/',
      },
      {
        text: '标签',
        link: '/tag/',
      },
      {
        text: '我们',
        link: '/we',
      },
      {
        text: '书写',
        link: '/exp'
      }
    ],
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/sickeeer/blog-resource',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2021-present Vue.js',
        },
      ],
    },
  },
  plugins: ['@vuepress/back-to-top']
}