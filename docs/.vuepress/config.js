// https://github.com/ekoeryanto/vuepress-plugin-sitemap#options  sitemap 配置
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
    globalPagination: {
      prevText: 'prev', // Text for previous links.
      nextText: 'next', // Text for next links.
      lengthPerPage: '8', // Maximum number of posts per page.
      layout: 'Pagination', // Layout for pagination page
    },
    sitemap: {
      hostname: 'https://110501.com',
      exclude: ["/404.html"]
    },
    // smoothScroll: true, // 效果较差 移除
    pwa: {
      serviceWorker: true,
      updatePopup: true
    },
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/post/',
        title: '文章',
        frontmatter: { //Front matter for entry page.
          description: '博客文章列表，分享前后端技术'
        },
        layout: 'Layout',
        itemLayout: 'Post', // Layout for matched pages.
        // itemPermalink: '/writings/:year/:month/:day/:slug', // Permalink for matched pages.
        pagination: { // Pagination behavior
          lengthPerPage: 8,
        },
      },
    ],
    frontmatters: [
      {
        id: 'tag', // Unique id for current classifier
        keys: ['tag', 'tags'], // Frontmatter keys used to classify pages
        path: '/tag/', // Entry page for current classifier
        title: '标签', // Entry, scope and pagination page titles for current classifier.
        // layout: 'FrontmatterKey', // Layout component name for entry page.
        // scopeLayout: 'ScopeLocation', // Layout component name for scope page.
        frontmatter: { //Front matter for entry page.
          description: '博客内文章标签一览'
        },
        pagination: { // Pagination behavior
          lengthPerPage: 8,
        },
      },
      {
        id: 'author', // Unique id for current classifier
        keys: ['author'], // Frontmatter keys used to classify pages
        path: '/author/', // Entry page for current classifier
        title: '作者', // Entry, scope and pagination page titles for current classifier.
        // layout: 'FrontmatterKey', // Layout component name for entry page.
        // scopeLayout: 'ScopeLocation', // Layout component name for scope page.
        frontmatter: { //Front matter for entry page.
          description: '博客作者一览'
        },
        pagination: { // Pagination behavior
          lengthPerPage: 8,
        },
      },
    ],
    feed: {
      canonical_base: 'https://110501.com',
      rss: true,
      atom: true,
      json: true
    },
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
  plugins: [
    '@vuepress/back-to-top',
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale(lang)
          return moment(timestamp).fromNow()
        }
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'T8D4HdGDG2rdC67ellt0Y6NS-gzGzoHsz',
          appKey: 'HvusVCh8ROBwFdMYdDjBxLI2',
          visitor: true
        }
      }
    ]
  ]
}