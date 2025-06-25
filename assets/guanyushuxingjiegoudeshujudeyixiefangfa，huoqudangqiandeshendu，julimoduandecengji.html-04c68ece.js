import{_ as n,o as s,c as a,b as p}from"./app-571c1f36.js";const t={},e=p(`<h1 id="关于树型结构的数据的一些方法-获取当前的深度-距离末端的层级" tabindex="-1"><a class="header-anchor" href="#关于树型结构的数据的一些方法-获取当前的深度-距离末端的层级" aria-hidden="true">#</a> 关于树型结构的数据的一些方法，获取当前的深度，距离末端的层级</h1><h3 id="_1-一段js代码-用于向一棵树型结构的数据中每个对象增加一个属性-这个属性代表的是距离根节点的层级" tabindex="-1"><a class="header-anchor" href="#_1-一段js代码-用于向一棵树型结构的数据中每个对象增加一个属性-这个属性代表的是距离根节点的层级" aria-hidden="true">#</a> 1. 一段JS代码，用于向一棵树型结构的数据中每个对象增加一个属性，这个属性代表的是距离根节点的层级</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原始树型结构数据</span>
<span class="token keyword">let</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.1&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.1.1&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.1.2&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.2&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历树型结构数据函数</span>
<span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token parameter">nodes<span class="token punctuation">,</span> depth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    node<span class="token punctuation">.</span>depth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">,</span> depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在每个对象中添加 depth 属性</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>treeData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印新的树型结构数据</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>treeData<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们首先定义了一棵树型结构的数据 treeData，它包含了多层嵌套的子节点。接着，我们定义了一个函数 traverse，它接受两个参数：nodes 表示当前节点的子节点数组，depth 表示当前节点的深度。函数内部，我们首先在当前节点的对象中添加一个属性 depth，它代表当前节点距离末端的层级。然后，我们递归遍历当前节点的子节点，将它们的 depth 属性设置为当前节点的 depth 属性加 1。</p><p>最后，我们调用 traverse(treeData, 0)，将树型结构数据和深度 0 作为参数传入函数中，从而在每个对象中添加了 depth 属性。新的树型结构数据将会被打印出来，每个对象都包含了 depth 属性，它们分别代表了当前节点距离末端的层级。</p><h3 id="_2-一段js代码-用于向一棵树型结构的数据中每个对象增加一个属性-这个属性代表的是距离叶子节点的层级" tabindex="-1"><a class="header-anchor" href="#_2-一段js代码-用于向一棵树型结构的数据中每个对象增加一个属性-这个属性代表的是距离叶子节点的层级" aria-hidden="true">#</a> 2. 一段JS代码，用于向一棵树型结构的数据中每个对象增加一个属性，这个属性代表的是距离叶子节点的层级</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 原始树型结构数据</span>
<span class="token keyword">let</span> treeData <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.1&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.1.1&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.1.2&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点1.2&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;节点2&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 遍历树型结构数据函数</span>
<span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token parameter">nodes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  nodes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">traverse</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
      node<span class="token punctuation">.</span>depth <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>node<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span> child<span class="token punctuation">.</span>depth<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      node<span class="token punctuation">.</span>depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在每个对象中添加 depth 属性</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>treeData<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 打印新的树型结构数据</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>treeData<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，我们首先定义了一棵树型结构的数据 treeData，它包含了多层嵌套的子节点。接着，我们定义了一个函数 traverse，它接受一个参数：nodes 表示当前节点的子节点数组。函数内部，我们首先判断当前节点是否有子节点。如果有子节点，我们递归遍历当前节点的子节点，并计算出子节点中 depth 属性的最大值，然后将当前节点的 depth 属性设置为子节点的最大值加 1。如果没有子节点，我们将当前节点的 depth 属性设置为 0。</p><p>最后，我们调用 traverse(treeData)，将树型结构数据作为参数传入函数中，从而在每个对象中添加了 depth 属性。新的树型结构数据将会被打印出来，每个对象都包含了 depth 属性，它们分别代表了当前节点距离叶子节点的层级。</p>`,9),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","guanyushuxingjiegoudeshujudeyixiefangfa，huoqudangqiandeshendu，julimoduandecengji.html.vue"]]);export{r as default};
