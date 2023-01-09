---
title: 手把手教你使用vuePress制作一个自己的博客并且托管在github上
date: 2023-01-03
updated: 2023-01-03
tags: 
    - 前端
categories: 
    - vuePress
keywords: vuePress
description: 手把手教你使用vuePress制作一个自己的博客并且托管在github上
top_img: 
comments: 
cover:
---
# 1. [VuePress](https://vuepress.vuejs.org/zh/guide/getting-started.html)
VuePress 自然不用多说，基于 Vue 的静态网站生成器，风格简约，配置简单。按照你的md文件生成静态页面，非常舒服。

## 1.1 快速上手同官网
1. 创建并进入一个新目录
```
// 文件名自定义
mkdir vuepress-starter && cd vuepress-starter
```
2. 使用你喜欢的包管理器进行初始化
```
npm init
```
3. 将 `VuePress` 安装为本地依赖
```
npm install -D vuepress
```
4. 创建你的第一篇文档，`VuePress` 会以 `docs` 为文档根目录，所以这个 `README.md` 相当于主页：
```
mkdir docs && echo '# Hello VuePress' > docs/README.md
```
5. 在 `package.json` 中添加一些 `scripts`
```
{
  "scripts": {
    "serve": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
6. 在本地启动服务器
```
npm run docs:dev
```
`VuePress` 会在 `http://localhost:8080` (opens new window) 启动一个热重载的开发服务器。

## 1.2 基础配置
在文档目录下创建一个 `.vuepress` 目录，所有 `VuePress` 相关的文件都会被放在这里。此时你的项目结构可能是这样
```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
```
在 .vuepress 文件夹下添加 config.js，配置网站的标题和描述。
```
module.exports = {
    title: 'pug 组件库', // 标题
    description: '学习使用 pug 组件', // 标题下的描述
}
```
## 1.3 添加导航栏
我们现在在页首的右上角添加导航栏，修改 `config.js` :
```
module.exports = {
    title: 'pug 组件库', // 标题
    description: '学习使用 pug 组件', // 标题下的描述
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '关于', link: 'https://yydha.gitee.io/' },
            {
                text: '关于',
                items: [
                    { text: 'name1', link: 'url1' 
                    },
                    { text: 'name2', link: 'url2' }
                ]
            }
        ],
    }
}
```
## 1.4 添加侧边栏
现在我们添加一些 `md` 文档，目前文档的目录如下：
```
├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
│  └─ 介绍
│     └─ 由来.md
└─ package.json
```
依然在 `config.js` 添加配置
```
module.exports = {
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: '简介', // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                '介绍/由来',
                ]
            },
          ]
    }
}
```
## 1.5 努力写完文档及其配置

# 部署 `github-page`
我们的博客就算是做好了，接下来我们部署到 `Github Pages` 上。我们在 `Github` 上新建一个仓库，这里我取得仓库名为： `pug-components-api`
对应在 `config.js` 要新增一个配置
```
module.exports = {
    base: '/pug-components-api/', // 必须和仓库名保持一致
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: '简介', // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                '介绍/由来',
                ]
            },
          ]
    }
}
```
## 2.1 普通部署
```
npm run build

git add .

git commit -m 'deploy'

git push 
```
`github` 仓库的 `Settings -> Pages`， 部署的时候，选择对应分支的 `dist` 目录就行， 这个页面也能看到地址。
## 2.2 使用脚本提交代码
我们在项目 `vuepress-starter` 目录下建立文件：`deploy.sh` ，注意修改一下对应的用户名和仓库名：
```
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ../dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:urmax/仓库名称.git master:gh-pages

cd -
```
## 2.3 执行脚本
然后命令行切换到 `vuepress-starter` 目录下，执行 `sh deploy.sh`，就会开始构建，然后提交到远程仓库，注意这里提交到了 `gh-pages` 分支。
## 2.4 地址查看
`github` 仓库的 `Settings -> Pages` 中看到地址。