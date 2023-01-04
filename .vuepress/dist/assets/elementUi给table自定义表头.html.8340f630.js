import{_ as n,o as s,c as a,e as t}from"./app.88a444fe.js";const p={},e=t(`<h2 id="\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42" aria-hidden="true">#</a> \u9700\u6C42</h2><p>elementUi\u7684table\u9700\u8981\u81EA\u5B9A\u4E49\u8868\u5934\uFF0C\u70B9\u51FB\u8868\u5934\u9700\u8981\u6709click\u4E8B\u4EF6\u3002</p><h2 id="\u76F4\u63A5\u4E0A\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u4E0A\u4EE3\u7801" aria-hidden="true">#</a> \u76F4\u63A5\u4E0A\u4EE3\u7801</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table</span>
    <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name">border</span>
    <span class="token attr-name">stripe</span>
    <span class="token attr-name">:header-cell-style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{&#39;background&#39;:&#39;#fff&#39;}<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
    ...
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-table-column</span>
        <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>order<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u5012\u5E8F<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">min-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5%<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">:render-header</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(h, obj) =&gt; renderHeaderMethods(h, obj)<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">show-overflow-tooltip</span>
    <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table-column</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token operator">...</span>
<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
    * [renderHeaderMethods description]\u95EE\u53F7\u4E2D\u7684\u63D0\u793A
    *
    * <span class="token keyword">@param</span>   <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">}</span></span>  <span class="token parameter">h</span>       [h description]
    * <span class="token keyword">@param</span>   <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">}</span></span>  <span class="token parameter">column</span>  [column description]
    *
    * <span class="token keyword">@return</span>  <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">[</span>type<span class="token punctuation">]</span><span class="token punctuation">}</span></span>          [return description]
    */</span>
    <span class="token function">renderHeaderMethods</span><span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span> <span class="token punctuation">{</span> column <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>
            <span class="token string">&#39;div&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&#39;display:flex;margin:auto;justify-content:center;align-items:center;&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">[</span>
                <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">&#39;span&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">cursor: pointer;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
                    <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sortFn</span><span class="token punctuation">(</span>column<span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span> column<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5177\u4F53\u6392\u5E8F</span>
    <span class="token function">sortFn</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token operator">...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function l(o,i){return s(),a("div",null,c)}const r=n(p,[["render",l],["__file","elementUi\u7ED9table\u81EA\u5B9A\u4E49\u8868\u5934.html.vue"]]);export{r as default};
