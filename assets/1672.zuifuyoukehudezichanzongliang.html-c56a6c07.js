import{_ as n,o as a,c as s,b as t}from"./app-b1695fab.js";const p={},e=t(`<h1 id="_1672-最富有客户的资产总量" tabindex="-1"><a class="header-anchor" href="#_1672-最富有客户的资产总量" aria-hidden="true">#</a> 1672. 最富有客户的资产总量</h1><p>给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。</p><p>客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。</p><p>示例 1：</p><p>输入：accounts = [[1,2,3],[3,2,1]] 输出：6 解释： 第 1 位客户的资产总量 = 1 + 2 + 3 = 6 第 2 位客户的资产总量 = 3 + 2 + 1 = 6 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。 示例 2：</p><p>输入：accounts = [[1,5],[7,3],[3,5]] 输出：10 解释： 第 1 位客户的资产总量 = 6 第 2 位客户的资产总量 = 10 第 3 位客户的资产总量 = 8 第 2 位客户是最富有的，资产总量是 10 示例 3：</p><p>输入：accounts = [[2,8,7],[7,1,3],[1,9,5]] 输出：17</p><p>提示：</p><p>m == accounts.length n == accounts[i].length 1 &lt;= m, n &lt;= 50 1 &lt;= accounts[i][j] &lt;= 100</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">accounts</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximumWealth</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">accounts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    accounts<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item1<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">var</span> curMaxU <span class="token operator">=</span> accounts<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> tpl <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        curMaxU<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            tpl <span class="token operator">=</span> tpl <span class="token operator">+</span> item<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        max <span class="token operator">&gt;</span> tpl <span class="token operator">?</span> max <span class="token operator">=</span> max <span class="token operator">:</span> max <span class="token operator">=</span> tpl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),c=[e];function o(l,u){return a(),s("div",null,c)}const r=n(p,[["render",o],["__file","1672.zuifuyoukehudezichanzongliang.html.vue"]]);export{r as default};
