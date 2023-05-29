import { defineUserConfig } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'blog for tanyaohua',
  description: '今天你学习了吗？',
  dest: 'public',
  base: '/yydha/', /* 基础虚拟路径: */
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'tanyaohua',
    authorAvatar: '/touxiang.png',
    docsRepo: 'https://github.com/urmax/yydha',
    docsBranch: 'master',
    docsDir: 'blogs',
    lastUpdatedText: '最后更新时间',
    autoSetBlogCategories: true,         // 自动设置分类
    autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签添加至头部导航条
    // series 为原 sidebar
    series: {
    //   '/docs/theme-reco/': [
    //     {
    //       text: 'module one',
    //       children: ['home', 'theme']
    //     },
    //     {
    //       text: 'module two',
    //       children: ['api', 'plugin']
    //     }
    //   ]
    },
    navbar:
    [
    //   { text: '首页', link: '/' },
      { text: '留言板', link: '/docs/message-board', icon: 'Message2' },
      { text: '在线文档',
        children: [
          { text: 'pug 组件(github)', link: 'https://urmax.github.io/pug-components-api/' },
          { text: 'pug 组件(gitee)', link: 'https://yydha.gitee.io/pug-components-api/' }
        ]
      },
      { text: '一些有意思的效果', link: '/docs/html/amazing', icon: 'Message2' },
    ],
    bulletin: {
      body: [
        {
            type: 'title',
            content: '警告',
        },
        {
          type: 'text',
          content: `今天有好好学习吗！`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: '关于',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://github.com/urmax/yydha/issues">Github<a/></li>
            <li><a href="https://yydha.gitee.io/blog1.0">旧版博客<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'buttongroup',
          children: [
            {
              text: '打赏',
              link: '/docs/others/donate.html'
            }
          ]
        }
      ],
    },
    // valineConfig 配置与 1.x 一致
    commentConfig: {
        type: 'valine',
        options: {
            appId: 'OfHiIoLeJpzEmtI6Fqt9PQw6-gzGzoHsz',
            appKey: '0muOlJwko13DTKJPAnwKx0l4',
            placeholder: '在此输入',
            verify: false, // 验证码服务
            // notify: true,
            recordIP: true,
            // hideComments: false, // 隐藏评论
        }
    },
  }),
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: "/favicon.png" }],
        [
            'script', {}, `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?fb58001ea3cd3202f909c70467d3d036";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
            `
        ]
    ],
})
