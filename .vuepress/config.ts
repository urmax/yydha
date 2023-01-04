import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'blog for tanyaohua',
  description: 'Just playing',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    author: 'tanyaohua',
    docsRepo: 'https://github.com/urmax/yydha',
    docsBranch: 'master',
    docsDir: 'blogs',
    lastUpdatedText: '最后更新时间',
    autoSetBlogCategories: true,         // 自动设置分类
    // autoAddCategoryToNavbar: true,  // 自动将首页、分类和标签添加至头部导航条
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
      { text: '首页', link: '/' },
      { text: '留言板', link: '/docs/message-board', icon: 'Message2' },
      { text: '我的在线文档',
        children: [
          { text: 'pug 组件(github)', link: 'https://urmax.github.io/pug-components-api/' },
          { text: 'pug 组件(gitee)', link: 'https://yydha.gitee.io/pug-components-api/' }
        ]
      },
    ],
    bulletin: {
      body: [
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
          content: '返回旧版',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://yydha.gitee.io/blog1.0">旧版博客<a/></li>
          </ul>`,
          style: 'font-size: 12px;'
        },
        {
          type: 'hr',
        },
        {
          type: 'title',
          content: 'GitHub',
        },
        {
          type: 'text',
          content: `
          <ul>
            <li><a href="https://github.com/urmax/yydha/issues">Issues<a/></li>
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
            placeholder: '填写邮箱可以收到回复提醒哦！',
            verify: true, // 验证码服务
            // notify: true,
            recordIP: true,
            hideComments: true, // 隐藏评论
        }
    },
  }),
  // debug: true,
})
