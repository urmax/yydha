import{_ as d,o as s,c as a,a as e,b as i,e as l,d as r,r as c}from"./app.14c04107.js";const v={},t={id:"_1-vuepress",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#_1-vuepress","aria-hidden":"true"},"#",-1),o={href:"https://vuepress.vuejs.org/zh/guide/getting-started.html",target:"_blank",rel:"noopener noreferrer"},m=r(`<p>VuePress \u81EA\u7136\u4E0D\u7528\u591A\u8BF4\uFF0C\u57FA\u4E8E Vue \u7684\u9759\u6001\u7F51\u7AD9\u751F\u6210\u5668\uFF0C\u98CE\u683C\u7B80\u7EA6\uFF0C\u914D\u7F6E\u7B80\u5355\u3002\u6309\u7167\u4F60\u7684md\u6587\u4EF6\u751F\u6210\u9759\u6001\u9875\u9762\uFF0C\u975E\u5E38\u8212\u670D\u3002</p><h2 id="_1-1-\u5FEB\u901F\u4E0A\u624B\u540C\u5B98\u7F51" tabindex="-1"><a class="header-anchor" href="#_1-1-\u5FEB\u901F\u4E0A\u624B\u540C\u5B98\u7F51" aria-hidden="true">#</a> 1.1 \u5FEB\u901F\u4E0A\u624B\u540C\u5B98\u7F51</h2><ol><li>\u521B\u5EFA\u5E76\u8FDB\u5165\u4E00\u4E2A\u65B0\u76EE\u5F55</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u6587\u4EF6\u540D\u81EA\u5B9A\u4E49
mkdir vuepress-starter &amp;&amp; cd vuepress-starter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4F7F\u7528\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u8FDB\u884C\u521D\u59CB\u5316</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5C06 <code>VuePress</code> \u5B89\u88C5\u4E3A\u672C\u5730\u4F9D\u8D56</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install -D vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>\u521B\u5EFA\u4F60\u7684\u7B2C\u4E00\u7BC7\u6587\u6863\uFF0C<code>VuePress</code> \u4F1A\u4EE5 <code>docs</code> \u4E3A\u6587\u6863\u6839\u76EE\u5F55\uFF0C\u6240\u4EE5\u8FD9\u4E2A <code>README.md</code> \u76F8\u5F53\u4E8E\u4E3B\u9875\uFF1A</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir docs &amp;&amp; echo &#39;# Hello VuePress&#39; &gt; docs/README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>\u5728 <code>package.json</code> \u4E2D\u6DFB\u52A0\u4E00\u4E9B <code>scripts</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;scripts&quot;: {
    &quot;serve&quot;: &quot;vuepress dev docs&quot;,
    &quot;build&quot;: &quot;vuepress build docs&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>\u5728\u672C\u5730\u542F\u52A8\u670D\u52A1\u5668</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>VuePress</code> \u4F1A\u5728 <code>http://localhost:8080</code> (opens new window) \u542F\u52A8\u4E00\u4E2A\u70ED\u91CD\u8F7D\u7684\u5F00\u53D1\u670D\u52A1\u5668\u3002</p><h2 id="_1-2-\u57FA\u7840\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-2-\u57FA\u7840\u914D\u7F6E" aria-hidden="true">#</a> 1.2 \u57FA\u7840\u914D\u7F6E</h2><p>\u5728\u6587\u6863\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A <code>.vuepress</code> \u76EE\u5F55\uFF0C\u6240\u6709 <code>VuePress</code> \u76F8\u5173\u7684\u6587\u4EF6\u90FD\u4F1A\u88AB\u653E\u5728\u8FD9\u91CC\u3002\u6B64\u65F6\u4F60\u7684\u9879\u76EE\u7ED3\u6784\u53EF\u80FD\u662F\u8FD9\u6837</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500 docs
\u2502  \u251C\u2500 README.md
\u2502  \u2514\u2500 .vuepress
\u2502     \u2514\u2500 config.js
\u2514\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 .vuepress \u6587\u4EF6\u5939\u4E0B\u6DFB\u52A0 config.js\uFF0C\u914D\u7F6E\u7F51\u7AD9\u7684\u6807\u9898\u548C\u63CF\u8FF0\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    title: &#39;pug \u7EC4\u4EF6\u5E93&#39;, // \u6807\u9898
    description: &#39;\u5B66\u4E60\u4F7F\u7528 pug \u7EC4\u4EF6&#39;, // \u6807\u9898\u4E0B\u7684\u63CF\u8FF0
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-\u6DFB\u52A0\u5BFC\u822A\u680F" tabindex="-1"><a class="header-anchor" href="#_1-3-\u6DFB\u52A0\u5BFC\u822A\u680F" aria-hidden="true">#</a> 1.3 \u6DFB\u52A0\u5BFC\u822A\u680F</h2><p>\u6211\u4EEC\u73B0\u5728\u5728\u9875\u9996\u7684\u53F3\u4E0A\u89D2\u6DFB\u52A0\u5BFC\u822A\u680F\uFF0C\u4FEE\u6539 <code>config.js</code> :</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    title: &#39;pug \u7EC4\u4EF6\u5E93&#39;, // \u6807\u9898
    description: &#39;\u5B66\u4E60\u4F7F\u7528 pug \u7EC4\u4EF6&#39;, // \u6807\u9898\u4E0B\u7684\u63CF\u8FF0
    themeConfig: {
        nav: [
            { text: &#39;\u9996\u9875&#39;, link: &#39;/&#39; },
            { text: &#39;\u5173\u4E8E&#39;, link: &#39;https://yydha.gitee.io/&#39; },
            {
                text: &#39;\u5173\u4E8E&#39;,
                items: [
                    { text: &#39;name1&#39;, link: &#39;url1&#39; 
                    },
                    { text: &#39;name2&#39;, link: &#39;url2&#39; }
                ]
            }
        ],
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-4-\u6DFB\u52A0\u4FA7\u8FB9\u680F" tabindex="-1"><a class="header-anchor" href="#_1-4-\u6DFB\u52A0\u4FA7\u8FB9\u680F" aria-hidden="true">#</a> 1.4 \u6DFB\u52A0\u4FA7\u8FB9\u680F</h2><p>\u73B0\u5728\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E9B <code>md</code> \u6587\u6863\uFF0C\u76EE\u524D\u6587\u6863\u7684\u76EE\u5F55\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500 docs
\u2502  \u251C\u2500 README.md
\u2502  \u2514\u2500 .vuepress
\u2502     \u2514\u2500 config.js
\u2502  \u2514\u2500 \u4ECB\u7ECD
\u2502     \u2514\u2500 \u7531\u6765.md
\u2514\u2500 package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F9D\u7136\u5728 <code>config.js</code> \u6DFB\u52A0\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    themeConfig: {
        nav: [...],
        sidebar: [
            {
                title: &#39;\u7B80\u4ECB&#39;, // \u6807\u9898
                collapsable: false, // \u4E0B\u7EA7\u5217\u8868\u4E0D\u53EF\u6298\u53E0
                children: [ // \u4E0B\u7EA7\u5217\u8868
                &#39;\u4ECB\u7ECD/\u7531\u6765&#39;,
                ]
            },
          ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-5-\u52AA\u529B\u5199\u5B8C\u6587\u6863\u53CA\u5176\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_1-5-\u52AA\u529B\u5199\u5B8C\u6587\u6863\u53CA\u5176\u914D\u7F6E" aria-hidden="true">#</a> 1.5 \u52AA\u529B\u5199\u5B8C\u6587\u6863\u53CA\u5176\u914D\u7F6E</h2><h1 id="\u90E8\u7F72-github-page" tabindex="-1"><a class="header-anchor" href="#\u90E8\u7F72-github-page" aria-hidden="true">#</a> \u90E8\u7F72 <code>github-page</code></h1><p>\u6211\u4EEC\u7684\u535A\u5BA2\u5C31\u7B97\u662F\u505A\u597D\u4E86\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u90E8\u7F72\u5230 <code>Github Pages</code> \u4E0A\u3002\u6211\u4EEC\u5728 <code>Github</code> \u4E0A\u65B0\u5EFA\u4E00\u4E2A\u4ED3\u5E93\uFF0C\u8FD9\u91CC\u6211\u53D6\u5F97\u4ED3\u5E93\u540D\u4E3A\uFF1A <code>pug-components-api</code> \u5BF9\u5E94\u5728 <code>config.js</code> \u8981\u65B0\u589E\u4E00\u4E2A\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>module.exports = {
    themeConfig: {
        base: &#39;/pug-components-api/&#39;, // \u5FC5\u987B\u548C\u4ED3\u5E93\u540D\u4FDD\u6301\u4E00\u81F4
        nav: [...],
        sidebar: [
            {
                title: &#39;\u7B80\u4ECB&#39;, // \u6807\u9898
                collapsable: false, // \u4E0B\u7EA7\u5217\u8868\u4E0D\u53EF\u6298\u53E0
                children: [ // \u4E0B\u7EA7\u5217\u8868
                &#39;\u4ECB\u7ECD/\u7531\u6765&#39;,
                ]
            },
          ]
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-1-\u666E\u901A\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_2-1-\u666E\u901A\u90E8\u7F72" aria-hidden="true">#</a> 2.1 \u666E\u901A\u90E8\u7F72</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm run build

git add .

git commit -m &#39;deploy&#39;

git push 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>github</code> \u4ED3\u5E93\u7684 <code>Settings -&gt; Pages</code>\uFF0C \u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u9009\u62E9\u5BF9\u5E94\u5206\u652F\u7684 <code>dist</code> \u76EE\u5F55\u5C31\u884C\uFF0C \u8FD9\u4E2A\u9875\u9762\u4E5F\u80FD\u770B\u5230\u5730\u5740\u3002</p><h2 id="_2-2-\u4F7F\u7528\u811A\u672C\u63D0\u4EA4\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-2-\u4F7F\u7528\u811A\u672C\u63D0\u4EA4\u4EE3\u7801" aria-hidden="true">#</a> 2.2 \u4F7F\u7528\u811A\u672C\u63D0\u4EA4\u4EE3\u7801</h2><p>\u6211\u4EEC\u5728\u9879\u76EE <code>vuepress-starter</code> \u76EE\u5F55\u4E0B\u5EFA\u7ACB\u6587\u4EF6\uFF1A<code>deploy.sh</code> \uFF0C\u6CE8\u610F\u4FEE\u6539\u4E00\u4E0B\u5BF9\u5E94\u7684\u7528\u6237\u540D\u548C\u4ED3\u5E93\u540D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/env sh

# \u786E\u4FDD\u811A\u672C\u629B\u51FA\u9047\u5230\u7684\u9519\u8BEF
set -e

# \u751F\u6210\u9759\u6001\u6587\u4EF6
npm run build

# \u8FDB\u5165\u751F\u6210\u7684\u6587\u4EF6\u5939
cd ../dist

git init
git add -A
git commit -m &#39;deploy&#39;

# \u5982\u679C\u53D1\u5E03\u5230 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;
git push -f git@github.com:urmax/\u4ED3\u5E93\u540D\u79F0.git master:gh-pages

cd -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3-\u6267\u884C\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_2-3-\u6267\u884C\u811A\u672C" aria-hidden="true">#</a> 2.3 \u6267\u884C\u811A\u672C</h2><p>\u7136\u540E\u547D\u4EE4\u884C\u5207\u6362\u5230 <code>vuepress-starter</code> \u76EE\u5F55\u4E0B\uFF0C\u6267\u884C <code>sh deploy.sh</code>\uFF0C\u5C31\u4F1A\u5F00\u59CB\u6784\u5EFA\uFF0C\u7136\u540E\u63D0\u4EA4\u5230\u8FDC\u7A0B\u4ED3\u5E93\uFF0C\u6CE8\u610F\u8FD9\u91CC\u63D0\u4EA4\u5230\u4E86 <code>gh-pages</code> \u5206\u652F\u3002</p><h2 id="_2-4-\u5730\u5740\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5730\u5740\u67E5\u770B" aria-hidden="true">#</a> 2.4 \u5730\u5740\u67E5\u770B</h2><p><code>github</code> \u4ED3\u5E93\u7684 <code>Settings -&gt; Pages</code> \u4E2D\u770B\u5230\u5730\u5740\u3002</p>`,42);function b(p,h){const n=c("ExternalLinkIcon");return s(),a("div",null,[e("h1",t,[u,i(" 1. "),e("a",o,[i("VuePress"),l(n)])]),m])}const x=d(v,[["render",b],["__file","\u624B\u628A\u624B\u6559\u4F60\u4F7F\u7528vuePress\u5236\u4F5C\u4E00\u4E2A\u81EA\u5DF1\u7684\u535A\u5BA2\u5E76\u4E14\u6258\u7BA1\u5728github\u4E0A.html.vue"]]);export{x as default};
