import{_ as n,o as e,c as a,b as o}from"./app-571c1f36.js";const d={},l=o(`<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><p>onunload，onbeforeunload的区别和差异</p><h3 id="发表一篇试试" tabindex="-1"><a class="header-anchor" href="#发表一篇试试" aria-hidden="true">#</a> 发表一篇试试</h3><p>onunload，onbeforeunload的区别和差异</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>相同点：onunload，onbeforeunload都是在刷新或关闭时调用。
不同点：
a<span class="token punctuation">)</span>onbeforeunload在onunload之前执行 ，它还可以阻止onunload的执行。
b<span class="token punctuation">)</span>onbeforeunload是正要去服务器读取新的页面时调用，此时还没开始读取<span class="token punctuation">;</span>nunload则已经从服务器上读到了需要加载的新的页面，在即将替换掉当前页面时调用 。
c<span class="token punctuation">)</span>onbeforeunload是可以阻止页面的更新和关闭的。但是onunload不能。
onload、onbeforeunload、onunload事件的执行顺序:
打开页面时：只执行onload
关闭页面时：先onbeforeunload（bug或许位置：可以不关闭页面，但是此事件是执行了）,后onunload
刷新页面时：先onbeforeunload,后onunload，再onload

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),s=[l];function i(u,r){return e(),a("div",null,s)}const t=n(d,[["render",i],["__file","onunload，onbeforeunloaddequbiehechayi - fuben.html.vue"]]);export{t as default};
