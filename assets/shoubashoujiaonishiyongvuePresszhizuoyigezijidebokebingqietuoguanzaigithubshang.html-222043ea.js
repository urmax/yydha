import{_ as d,r as s,o as a,c as l,a as e,d as i,e as r,b as c}from"./app-571c1f36.js";const t={},v={id:"_1-vuepress",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_1-vuepress","aria-hidden":"true"},"#",-1),o={href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},m=c(`<p>VuePress 自然不用多说，基于 Vue 的静态网站生成器，风格简约，配置简单。按照你的md文件生成静态页面，非常舒服。</p><h2 id="_1-1-快速上手同官网" tabindex="-1"><a class="header-anchor" href="#_1-1-快速上手同官网" aria-hidden="true">#</a> 1.1 快速上手同官网</h2><ol><li>创建并进入一个新目录</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 文件名自定义
mkdir vuepress-starter &amp;&amp; cd vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用你喜欢的包管理器进行初始化</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>将 <code>VuePress</code> 安装为本地依赖</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>创建你的第一篇文档，<code>VuePress</code> 会以 <code>docs</code> 为文档根目录，所以这个 <code>README.md</code> 相当于主页：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir docs &amp;&amp; echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>在 <code>package.json</code> 中添加一些 <code>scripts</code></li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;serve&quot;: &quot;vuepress dev docs&quot;,
    &quot;build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>在本地启动服务器</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>VuePress</code> 会在 <code>http://localhost:8080</code> (opens new window) 启动一个热重载的开发服务器。</p><h2 id="_1-2-基础配置" tabindex="-1"><a class="header-anchor" href="#_1-2-基础配置" aria-hidden="true">#</a> 1.2 基础配置</h2><p>在文档目录下创建一个 <code>.vuepress</code> 目录，所有 <code>VuePress</code> 相关的文件都会被放在这里。此时你的项目结构可能是这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 .vuepress 文件夹下添加 config.js，配置网站的标题和描述。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    title: &#39;pug 组件库&#39;, // 标题
    description: &#39;学习使用 pug 组件&#39;, // 标题下的描述
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-添加导航栏" tabindex="-1"><a class="header-anchor" href="#_1-3-添加导航栏" aria-hidden="true">#</a> 1.3 添加导航栏</h2><p>我们现在在页首的右上角添加导航栏，修改 <code>config.js</code> :</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    title: &#39;pug 组件库&#39;, // 标题
    description: &#39;学习使用 pug 组件&#39;, // 标题下的描述
    themeConfig: {
        nav: [
            { text: &#39;首页&#39;, link: &#39;/&#39; },
            { text: &#39;关于&#39;, link: &#39;https://yydha.gitee.io/&#39; },
            {
                text: &#39;关于&#39;,
                items: [
                    { text: &#39;name1&#39;, link: &#39;url1&#39; 
                    },
                    { text: &#39;name2&#39;, link: &#39;url2&#39; }
                ]
            }
        ],
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-添加侧边栏" tabindex="-1"><a class="header-anchor" href="#_1-4-添加侧边栏" aria-hidden="true">#</a> 1.4 添加侧边栏</h2><p>现在我们添加一些 <code>md</code> 文档，目前文档的目录如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ README.md
│  └─ .vuepress
│     └─ config.js
│  └─ 介绍
│     └─ 由来.md
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依然在 <code>config.js</code> 添加配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: &#39;简介&#39;, // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                &#39;介绍/由来&#39;,
                ]
            },
          ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-努力写完文档及其配置" tabindex="-1"><a class="header-anchor" href="#_1-5-努力写完文档及其配置" aria-hidden="true">#</a> 1.5 努力写完文档及其配置</h2><h1 id="部署-github-page" tabindex="-1"><a class="header-anchor" href="#部署-github-page" aria-hidden="true">#</a> 部署 <code>github-page</code></h1><p>我们的博客就算是做好了，接下来我们部署到 <code>Github Pages</code> 上。我们在 <code>Github</code> 上新建一个仓库，这里我取得仓库名为： <code>pug-components-api</code> 对应在 <code>config.js</code> 要新增一个配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>module.exports = {
    base: &#39;/pug-components-api/&#39;, // 必须和仓库名保持一致
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: &#39;简介&#39;, // 标题
                collapsable: false, // 下级列表不可折叠
                children: [ // 下级列表
                &#39;介绍/由来&#39;,
                ]
            },
          ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-普通部署" tabindex="-1"><a class="header-anchor" href="#_2-1-普通部署" aria-hidden="true">#</a> 2.1 普通部署</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm run build

git add .

git commit -m &#39;deploy&#39;

git push 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>github</code> 仓库的 <code>Settings -&gt; Pages</code>， 部署的时候，选择对应分支的 <code>dist</code> 目录就行， 这个页面也能看到地址。</p><h2 id="_2-2-使用脚本提交代码" tabindex="-1"><a class="header-anchor" href="#_2-2-使用脚本提交代码" aria-hidden="true">#</a> 2.2 使用脚本提交代码</h2><p>我们在项目 <code>vuepress-starter</code> 目录下建立文件：<code>deploy.sh</code> ，注意修改一下对应的用户名和仓库名：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd ../dist

git init
git add -A
git commit -m &#39;deploy&#39;

# 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:urmax/仓库名称.git master:gh-pages

cd -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-执行脚本" tabindex="-1"><a class="header-anchor" href="#_2-3-执行脚本" aria-hidden="true">#</a> 2.3 执行脚本</h2><p>然后命令行切换到 <code>vuepress-starter</code> 目录下，执行 <code>sh deploy.sh</code>，就会开始构建，然后提交到远程仓库，注意这里提交到了 <code>gh-pages</code> 分支。</p><h2 id="_2-4-地址查看" tabindex="-1"><a class="header-anchor" href="#_2-4-地址查看" aria-hidden="true">#</a> 2.4 地址查看</h2><p><code>github</code> 仓库的 <code>Settings -&gt; Pages</code> 中看到地址。</p>`,42);function b(h,g){const n=s("ExternalLinkIcon");return a(),l("div",null,[e("h1",v,[u,i(" 1. "),e("a",o,[i("VuePress"),r(n)])]),m])}const x=d(t,[["render",b],["__file","shoubashoujiaonishiyongvuePresszhizuoyigezijidebokebingqietuoguanzaigithubshang.html.vue"]]);export{x as default};
