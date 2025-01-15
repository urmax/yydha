import{_ as n,o as s,c as a,b as t}from"./app-b1695fab.js";const e={},p=t(`<h1 id="使用-print-js-打印-pdf-文件" tabindex="-1"><a class="header-anchor" href="#使用-print-js-打印-pdf-文件" aria-hidden="true">#</a> 使用 print-js 打印 pdf 文件</h1><h3 id="先上官网" tabindex="-1"><a class="header-anchor" href="#先上官网" aria-hidden="true">#</a> 先上官网</h3><p>https://printjs.crabbly.com/</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> print-js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> printJS <span class="token keyword">from</span> <span class="token string">&#39;print-js&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 这个url也可以是后端返回二进制流 前端把blob生成一个连接</span>
res <span class="token operator">=</span> <span class="token keyword">await</span> axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;https://example.com/file.pdf&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">responseType</span><span class="token operator">:</span> <span class="token string">&#39;blob&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> url <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">revokeObjectURL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 释放URL</span>
<span class="token comment">// 这个url可以直接访问到这个pdf文件</span>
<span class="token comment">// 预览方式可以通过pdfjs 也可以直接使用iframe嵌入</span>
<span class="token comment">// 当然也可以通过这个链接下载此文件</span>

<span class="token function">printJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com/file.pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base64</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">documentTitle</span><span class="token operator">:</span> <span class="token string">&#39;PDF&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;file.pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onPrintDialogClose</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 打印完成后执行的回调函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h3><table><thead><tr><th style="text-align:center;">参数</th><th style="text-align:center;">类型</th><th style="text-align:center;">默认值</th><th style="text-align:center;">说明</th></tr></thead><tbody><tr><td style="text-align:center;">printable</td><td style="text-align:center;">String</td><td style="text-align:center;">-</td><td style="text-align:center;">要打印的文件地址</td></tr><tr><td style="text-align:center;">type</td><td style="text-align:center;">String</td><td style="text-align:center;">&#39;html&#39;</td><td style="text-align:center;">打印的文件类型，支持 &#39;pdf&#39;, &#39;html&#39;, &#39;image&#39;</td></tr><tr><td style="text-align:center;">base64</td><td style="text-align:center;">Boolean</td><td style="text-align:center;">false</td><td style="text-align:center;">是否使用 base64 编码</td></tr><tr><td style="text-align:center;">documentTitle</td><td style="text-align:center;">String</td><td style="text-align:center;">&#39;Document&#39;</td><td style="text-align:center;">打印的文档标题</td></tr><tr><td style="text-align:center;">fileName</td><td style="text-align:center;">String</td><td style="text-align:center;">&#39;document.pdf&#39;</td><td style="text-align:center;">打印的文件名</td></tr><tr><td style="text-align:center;">onPrintDialogClose</td><td style="text-align:center;">Function</td><td style="text-align:center;">-</td><td style="text-align:center;">打印对话框关闭时的回调函数</td></tr></tbody></table><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">printJS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">printable</span><span class="token operator">:</span> <span class="token string">&#39;https://example.com/file.pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">base64</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">documentTitle</span><span class="token operator">:</span> <span class="token string">&#39;PDF&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">&#39;file.pdf&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">onPrintDialogClose</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 打印完成后执行的回调函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><ul><li>需要确保要打印的文件是可访问的，并且支持跨域访问。</li><li>如果要打印的文件是 pdf 格式，需要确保服务器支持返回 pdf 文件。</li></ul>`,15),l=[p];function i(c,o){return s(),a("div",null,l)}const d=n(e,[["render",i],["__file","blank.html.vue"]]);export{d as default};
