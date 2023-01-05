import{_ as t,o as p,c as e,a as n,b as o,e as c,d as s,r as l}from"./app.14c04107.js";const i="/yydha/assets/vue2lifecycle.e0fdf4d9.png",u="/yydha/assets/vue3life.249aecbc.jpeg",r={},k=s(`<h1 id="\u521D\u8BC6-vue3" tabindex="-1"><a class="header-anchor" href="#\u521D\u8BC6-vue3" aria-hidden="true">#</a> \u521D\u8BC6 Vue3</h1><h2 id="\u8BA4\u8BC6vue3" tabindex="-1"><a class="header-anchor" href="#\u8BA4\u8BC6vue3" aria-hidden="true">#</a> \u8BA4\u8BC6Vue3</h2><h3 id="\u76F8\u5173\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u76F8\u5173\u4FE1\u606F" aria-hidden="true">#</a> \u76F8\u5173\u4FE1\u606F</h3><pre><code>\xB7 Vue.js 3.0 &quot;One Piece&quot; \u6B63\u5F0F\u7248\u5728\u4ECA\u5E749\u6708\u4EFD\u53D1\u5E03
\xB7 2\u5E74\u591A\u5F00\u53D1, 100+\u4F4D\u8D21\u732E\u8005, 2600+\u6B21\u63D0\u4EA4, 600+\u6B21PR
\xB7 Vue3\u652F\u6301vue2\u7684\u5927\u591A\u6570\u7279\u6027
\xB7 \u66F4\u597D\u7684\u652F\u6301Typescript
</code></pre><h3 id="\u6027\u80FD\u63D0\u5347" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u63D0\u5347" aria-hidden="true">#</a> \u6027\u80FD\u63D0\u5347</h3><pre><code>\xB7 \u6253\u5305\u5927\u5C0F\u51CF\u5C1141%
\xB7 \u521D\u6B21\u6E32\u67D3\u5FEB55%, \u66F4\u65B0\u6E32\u67D3\u5FEB133%
\xB7 \u5185\u5B58\u51CF\u5C1154%
\xB7 \u4F7F\u7528Proxy\u4EE3\u66FFdefineProperty\u5B9E\u73B0\u6570\u636E\u54CD\u5E94\u5F0F
\xB7 \u91CD\u5199\u865A\u62DFDOM\u7684\u5B9E\u73B0\u548CTree-Shaking
</code></pre><h3 id="\u65B0\u589E\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u7279\u6027" aria-hidden="true">#</a> \u65B0\u589E\u7279\u6027</h3><pre><code>\xB7 Composition (\u7EC4\u5408) API
\xB7 setup
    \xB7 ref \u548C reactive
    \xB7 computed \u548C watch
    \xB7 \u65B0\u7684\u751F\u547D\u5468\u671F\u51FD\u6570
    \xB7 provide \u4E0E inject
\xB7 \u65B0\u7EC4\u4EF6
    \xB7 Fragment - \u6587\u6863\u788E\u7247
    \xB7 Teleport - \u77AC\u79FB\u7EC4\u4EF6\u7684\u4F4D\u7F6E
    \xB7 Suspense - \u5F02\u6B65\u52A0\u8F7D\u7EC4\u4EF6\u7684loading\u754C\u9762
\xB7 \u5176\u5B83API\u66F4\u65B0
</code></pre><h1 id="composition-\u7EC4\u5408-api-\u5E38\u7528\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#composition-\u7EC4\u5408-api-\u5E38\u7528\u90E8\u5206" aria-hidden="true">#</a> <code>Composition</code> (\u7EC4\u5408 API ) \u5E38\u7528\u90E8\u5206</h1>`,9),d={href:"https://composition-api.vuejs.org/zh/api.html",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> <code>setup</code></h2><p>\u65B0\u7684option, \u6240\u6709\u7684\u7EC4\u5408API\u51FD\u6570\u90FD\u5728\u6B64\u4F7F\u7528, \u53EA\u5728\u521D\u59CB\u5316\u65F6\u6267\u884C\u4E00\u6B21\u51FD\u6570\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61, \u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u6216\u65B9\u6CD5, \u6A21\u677F\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</p><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> <code>ref</code></h2><p>\u4F5C\u7528: \u5B9A\u4E49\u4E00\u4E2A\u6570\u636E\u7684\u54CD\u5E94\u5F0F \u8BED\u6CD5: <code>const xxx = ref(initValue)</code>: \u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5F15\u7528(<code>reference</code>)\u5BF9\u8C61 js\u4E2D\u64CD\u4F5C\u6570\u636E: <code>xxx.value</code> \u6A21\u677F\u4E2D\u64CD\u4F5C\u6570\u636E: \u4E0D\u9700\u8981<code>.value</code> \u4E00\u822C\u7528\u6765\u5B9A\u4E49\u4E00\u4E2A\u57FA\u672C\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u6570\u636E</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token comment">/* \u5728Vue3\u4E2D\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528data\u548Cmethods\u914D\u7F6E, \u4F46\u5EFA\u8BAE\u4F7F\u7528\u5176\u65B0\u8BED\u6CD5\u5B9E\u73B0 */</span>
  <span class="token comment">// data () {</span>
  <span class="token comment">//   return {</span>
  <span class="token comment">//     count: 0</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// },</span>
  <span class="token comment">// methods: {</span>
  <span class="token comment">//   update () {</span>
  <span class="token comment">//     this.count++</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>

  <span class="token comment">/* \u4F7F\u7528vue3\u7684composition API */</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E ref\u5BF9\u8C61</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

    <span class="token comment">// \u66F4\u65B0\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u51FD\u6570</span>
    <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// alert(&#39;update&#39;)</span>
      count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> <code>reactive</code></h2><p>\u4F5C\u7528: \u5B9A\u4E49\u591A\u4E2A\u6570\u636E\u7684\u54CD\u5E94\u5F0F <code>const proxy = reactive(obj)</code>: \u63A5\u6536\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u7136\u540E\u8FD4\u56DE\u8BE5\u666E\u901A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\u5668\u5BF9\u8C61 \u54CD\u5E94\u5F0F\u8F6C\u6362\u662F\u201C\u6DF1\u5C42\u7684\u201D\uFF1A\u4F1A\u5F71\u54CD\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u5D4C\u5957\u7684\u5C5E\u6027 \u5185\u90E8\u57FA\u4E8E <code>ES6</code> \u7684 <code>Proxy</code> \u5B9E\u73B0\uFF0C\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u6570\u636E\u90FD\u662F\u54CD\u5E94\u5F0F\u7684</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>name: {{state.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>age: {{state.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>wife: {{state.wife}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* 
reactive: 
    \u4F5C\u7528: \u5B9A\u4E49\u591A\u4E2A\u6570\u636E\u7684\u54CD\u5E94\u5F0F
    const proxy = reactive(obj): \u63A5\u6536\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u7136\u540E\u8FD4\u56DE\u8BE5\u666E\u901A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\u5668\u5BF9\u8C61
    \u54CD\u5E94\u5F0F\u8F6C\u6362\u662F\u201C\u6DF1\u5C42\u7684\u201D\uFF1A\u4F1A\u5F71\u54CD\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u5D4C\u5957\u7684\u5C5E\u6027
    \u5185\u90E8\u57FA\u4E8E ES6 \u7684 Proxy \u5B9E\u73B0\uFF0C\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u6570\u636E\u90FD\u662F\u54CD\u5E94\u5F0F\u7684
*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 
    \u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61
    */</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token literal-property property">wife</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;marry&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">.</span>wife<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>name <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      state<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">1</span>
      state<span class="token punctuation">.</span>wife<span class="token punctuation">.</span>name <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
      state<span class="token punctuation">.</span>wife<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vue2-\u4E0E-vue3-\u7684\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue2-\u4E0E-vue3-\u7684\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> <code>Vue2</code> \u4E0E <code>Vue3</code> \u7684\u54CD\u5E94\u5F0F</h2><h3 id="vue2" tabindex="-1"><a class="header-anchor" href="#vue2" aria-hidden="true">#</a> <code>vue2</code></h3><pre><code>\xB7\u6838\u5FC3:
    \xB7 \u5BF9\u8C61: \u901A\u8FC7defineProperty\u5BF9\u5BF9\u8C61\u7684\u5DF2\u6709\u5C5E\u6027\u503C\u7684\u8BFB\u53D6\u548C\u4FEE\u6539\u8FDB\u884C\u52AB\u6301(\u76D1\u89C6/\u62E6\u622A)
    \xB7 \u6570\u7EC4: \u901A\u8FC7\u91CD\u5199\u6570\u7EC4\u66F4\u65B0\u6570\u7EC4\u4E00\u7CFB\u5217\u66F4\u65B0\u5143\u7D20\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u5143\u7D20\u4FEE\u6539\u7684\u52AB\u6301
</code></pre><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\xB7\u95EE\u9898:
    \xB7 \u5BF9\u8C61\u76F4\u63A5\u65B0\u6DFB\u52A0\u7684\u5C5E\u6027\u6216\u5220\u9664\u5DF2\u6709\u5C5E\u6027, \u754C\u9762\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0
    \xB7 \u76F4\u63A5\u901A\u8FC7\u4E0B\u6807\u66FF\u6362\u5143\u7D20\u6216\u66F4\u65B0length, \u754C\u9762\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0
</code></pre><h3 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> <code>vue3</code></h3><pre><code>\xB7 \u6838\u5FC3:
    \xB7 \u901A\u8FC7Proxy(\u4EE3\u7406): \u62E6\u622A\u5BF9data\u4EFB\u610F\u5C5E\u6027\u7684\u4EFB\u610F(13\u79CD)\u64CD\u4F5C, \u5305\u62EC\u5C5E\u6027\u503C\u7684\u8BFB\u5199, \u5C5E\u6027\u7684\u6DFB\u52A0, \u5C5E\u6027\u7684\u5220\u9664\u7B49...
    \xB7 \u901A\u8FC7 Reflect(\u53CD\u5C04): \u52A8\u6001\u5BF9\u88AB\u4EE3\u7406\u5BF9\u8C61\u7684\u76F8\u5E94\u5C5E\u6027\u8FDB\u884C\u7279\u5B9A\u7684\u64CD\u4F5C
\xB7 \u6587\u6863:
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
</code></pre><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u62E6\u622A\u8BFB\u53D6\u5C5E\u6027\u503C</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u5C5E\u6027\u503C\u6216\u6DFB\u52A0\u65B0\u5C5E\u6027</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u62E6\u622A\u5220\u9664\u5C5E\u6027</span>
    <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Proxy \u4E0E Reflect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/* 
    proxyUser\u662F\u4EE3\u7406\u5BF9\u8C61, user\u662F\u88AB\u4EE3\u7406\u5BF9\u8C61
    \u540E\u9762\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u6765\u64CD\u4F5C\u88AB\u4EE3\u7406\u5BF9\u8C61\u5185\u90E8\u5C5E\u6027
    */</span>
    <span class="token keyword">const</span> proxyUser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">{</span>

      <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52AB\u6301get()&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52AB\u6301set()&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (2)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52AB\u6301delete\u5C5E\u6027&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BFB\u53D6\u5C5E\u6027\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token operator">===</span>user<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token punctuation">.</span>name<span class="token punctuation">,</span> proxyUser<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027\u503C</span>
    proxyUser<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;bob&#39;</span>
    proxyUser<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">13</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token comment">// \u6DFB\u52A0\u5C5E\u6027</span>
    proxyUser<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&#39;\u7537&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token comment">// \u5220\u9664\u5C5E\u6027</span>
    <span class="token keyword">delete</span> proxyUser<span class="token punctuation">.</span>sex
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="setup-\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#setup-\u7EC6\u8282" aria-hidden="true">#</a> <code>setup</code> \u7EC6\u8282</h2><pre><code>\xB7 setup \u6267\u884C\u7684\u65F6\u673A
    \xB7 \u5728 beforeCreate \u4E4B\u524D\u6267\u884C(\u4E00\u6B21), \u6B64\u65F6\u7EC4\u4EF6\u5BF9\u8C61\u8FD8\u6CA1\u6709\u521B\u5EFA
    \xB7 this \u662F undefined, \u4E0D\u80FD\u901A\u8FC7 this \u6765\u8BBF\u95EE data/computed/methods/props
    \xB7 \u5176\u5B9E\u6240\u6709\u7684 composition API \u76F8\u5173\u56DE\u8C03\u51FD\u6570\u4E2D\u4E5F\u90FD\u4E0D\u53EF\u4EE5
\xB7 setup\u7684\u8FD4\u56DE\u503C
    \xB7 \u4E00\u822C\u90FD\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61: \u4E3A\u6A21\u677F\u63D0\u4F9B\u6570\u636E, \u4E5F\u5C31\u662F\u6A21\u677F\u4E2D\u53EF\u4EE5\xB7 \u76F4\u63A5\u4F7F\u7528\u6B64\u5BF9\u8C61\u4E2D\u7684\u6240\u6709\u5C5E\u6027/\u65B9\u6CD5
    \xB7 \u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u4F1A\u4E0Edata\u51FD\u6570\u8FD4\u56DE\u5BF9\u8C61\u7684\u5C5E\u6027\u5408\u5E76\u6210\u4E3A\u7EC4\u4EF6\u5BF9\u8C61\u7684\u5C5E\u6027
    \xB7 \u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u4F1A\u4E0Emethods\u4E2D\u7684\u65B9\u6CD5\u5408\u5E76\u6210\u529F\u7EC4\u4EF6\u5BF9\u8C61\u7684\u65B9\u6CD5
    \xB7 \u5982\u679C\u6709\u91CD\u540D, setup\u4F18\u5148
    \xB7 \u6CE8\u610F:
        \xB7 \u4E00\u822C\u4E0D\u8981\u6DF7\u5408\u4F7F\u7528: methods\u4E2D\u53EF\u4EE5\u8BBF\u95EEsetup\u63D0\u4F9B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5, \u4F46\u5728setup\u65B9\u6CD5\u4E2D\u4E0D\u80FD\u8BBF\u95EEdata\u548Cmethods
        \xB7 setup\u4E0D\u80FD\u662F\u4E00\u4E2Aasync\u51FD\u6570: \u56E0\u4E3A\u8FD4\u56DE\u503C\u4E0D\u518D\u662Freturn\u7684\u5BF9\u8C61, \u800C\u662Fpromise, \u6A21\u677F\u770B\u4E0D\u5230return\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u6570\u636E
\xB7 setup\u7684\u53C2\u6570
    setup(props, context) / setup(props, {attrs, slots, emit})
        props: \u5305\u542Bprops\u914D\u7F6E\u58F0\u660E\u4E14\u4F20\u5165\u4E86\u7684\u6240\u6709\u5C5E\u6027\u7684\u5BF9\u8C61
        attrs: \u5305\u542B\u6CA1\u6709\u5728props\u914D\u7F6E\u4E2D\u58F0\u660E\u7684\u5C5E\u6027\u7684\u5BF9\u8C61, \u76F8\u5F53\u4E8E this.$attrs
        slots: \u5305\u542B\u6240\u6709\u4F20\u5165\u7684\u63D2\u69FD\u5185\u5BB9\u7684\u5BF9\u8C61, \u76F8\u5F53\u4E8E this.$slots
        emit: \u7528\u6765\u5206\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u51FD\u6570, \u76F8\u5F53\u4E8E this.$emit
</code></pre><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn(&#39;--&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msg2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cba<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@fn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&#39;./child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">content</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">.</span>value <span class="token operator">+=</span> content
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">,</span>
      fn
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{n}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{m}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>msg2: {{$attrs.msg2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>
  defineComponent
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u9009\u7684, \u58F0\u660E\u4E86\u66F4\u5229\u4E8E\u7A0B\u5E8F\u5458\u9605\u8BFB, \u4E14\u53EF\u4EE5\u5BF9\u5206\u53D1\u7684\u4E8B\u4EF6\u6570\u636E\u8FDB\u884C\u6821\u9A8C</span>

  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// n: 1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// update () {</span>
    <span class="token comment">//   this.n++</span>
    <span class="token comment">//   this.m++</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// setup (props, context) {</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span>attrs<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> slots<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">,</span> attrs<span class="token punctuation">.</span>msg2<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit<span class="token punctuation">)</span>

    <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(&#39;--&#39;, this)</span>
      <span class="token comment">// this.n += 2 </span>
      <span class="token comment">// this.m += 2</span>

      m<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">2</span>
      n<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">2</span>

      <span class="token comment">// \u5206\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;++&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m<span class="token punctuation">,</span>
      n<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reactive\u4E0Eref\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#reactive\u4E0Eref\u7EC6\u8282" aria-hidden="true">#</a> <code>reactive</code>\u4E0E<code>ref</code>\u7EC6\u8282</h2><pre><code>\xB7 \u662FVue3\u7684 composition API\u4E2D2\u4E2A\u6700\u91CD\u8981\u7684\u54CD\u5E94\u5F0FAPI
\xB7 ref\u7528\u6765\u5904\u7406\u57FA\u672C\u7C7B\u578B\u6570\u636E, reactive\u7528\u6765\u5904\u7406\u5BF9\u8C61(\u9012\u5F52\u6DF1\u5EA6\u54CD\u5E94\u5F0F)
\xB7 \u5982\u679C\u7528ref\u5BF9\u8C61/\u6570\u7EC4, \u5185\u90E8\u4F1A\u81EA\u52A8\u5C06\u5BF9\u8C61/\u6570\u7EC4\u8F6C\u6362\u4E3Areactive\u7684\u4EE3\u7406\u5BF9\u8C61
\xB7 ref\u5185\u90E8: \u901A\u8FC7\u7ED9value\u5C5E\u6027\u6DFB\u52A0getter/setter\u6765\u5B9E\u73B0\u5BF9\u6570\u636E\u7684\u52AB\u6301
\xB7 reactive\u5185\u90E8: \u901A\u8FC7\u4F7F\u7528Proxy\u6765\u5B9E\u73B0\u5BF9\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u6570\u636E\u7684\u52AB\u6301, \u5E76\u901A\u8FC7Reflect\u64CD\u4F5C\u5BF9\u8C61\u5185\u90E8\u6570\u636E
\xB7 ref\u7684\u6570\u636E\u64CD\u4F5C: \u5728js\u4E2D\u8981.value, \u5728\u6A21\u677F\u4E2D\u4E0D\u9700\u8981(\u5185\u90E8\u89E3\u6790\u6A21\u677F\u65F6\u4F1A\u81EA\u52A8\u6DFB\u52A0.value)
</code></pre><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m1: {{m1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m2: {{m2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m3: {{m3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u4F7F\u7528ref\u5904\u7406\u5BF9\u8C61  ==&gt; \u5BF9\u8C61\u4F1A\u88AB\u81EA\u52A8reactive\u4E3Aproxy\u5BF9\u8C61</span>
    <span class="token keyword">const</span> m3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">,</span> m3<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">)</span> <span class="token comment">// \u4E5F\u662F\u4E00\u4E2Aproxy\u5BF9\u8C61</span>

    <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      m2<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span>
      m2<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>

      m3<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&#39;abc---&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
      m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">.</span>a3 <span class="token operator">+=</span> <span class="token string">&#39;==&#39;</span> <span class="token comment">// reactive\u5BF9\u5BF9\u8C61\u8FDB\u884C\u4E86\u6DF1\u5EA6\u6570\u636E\u52AB\u6301</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">,</span>
      m2<span class="token punctuation">,</span>
      m3<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6" aria-hidden="true">#</a> \u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6</h2><p>computed\u51FD\u6570:</p><pre><code>\u4E0Ecomputed\u914D\u7F6E\u529F\u80FD\u4E00\u81F4
\u53EA\u6709getter
\u6709getter\u548Csetter
</code></pre><p>watch\u51FD\u6570</p><pre><code>\u4E0Ewatch\u914D\u7F6E\u529F\u80FD\u4E00\u81F4
\u76D1\u89C6\u6307\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E, \u4E00\u65E6\u6570\u636E\u53D8\u5316, \u5C31\u81EA\u52A8\u6267\u884C\u76D1\u89C6\u56DE\u8C03
\u9ED8\u8BA4\u521D\u59CB\u65F6\u4E0D\u6267\u884C\u56DE\u8C03, \u4F46\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6Eimmediate\u4E3Atrue, \u6765\u6307\u5B9A\u521D\u59CB\u65F6\u7ACB\u5373\u6267\u884C\u7B2C\u4E00\u6B21
\u901A\u8FC7\u914D\u7F6Edeep\u4E3Atrue, \u6765\u6307\u5B9A\u6DF1\u5EA6\u76D1\u89C6
</code></pre><p>watchEffect\u51FD\u6570</p><pre><code>\u4E0D\u7528\u76F4\u63A5\u6307\u5B9A\u8981\u76D1\u89C6\u7684\u6570\u636E, \u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E\u5C31\u76D1\u89C6\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E
\u9ED8\u8BA4\u521D\u59CB\u65F6\u5C31\u4F1A\u6267\u884C\u7B2C\u4E00\u6B21, \u4ECE\u800C\u53EF\u4EE5\u6536\u96C6\u9700\u8981\u76D1\u89C6\u7684\u6570\u636E
\u76D1\u89C6\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\u56DE\u8C03
</code></pre><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  fistName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.firstName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  lastName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.lastName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName1: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName2: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName3: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6
1. computed\u51FD\u6570: 
  \u4E0Ecomputed\u914D\u7F6E\u529F\u80FD\u4E00\u81F4
  \u53EA\u6709getter
  \u6709getter\u548Csetter
2. watch\u51FD\u6570
  \u4E0Ewatch\u914D\u7F6E\u529F\u80FD\u4E00\u81F4
  \u76D1\u89C6\u6307\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E, \u4E00\u65E6\u6570\u636E\u53D8\u5316, \u5C31\u81EA\u52A8\u6267\u884C\u76D1\u89C6\u56DE\u8C03
  \u9ED8\u8BA4\u521D\u59CB\u65F6\u4E0D\u6267\u884C\u56DE\u8C03, \u4F46\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6Eimmediate\u4E3Atrue, \u6765\u6307\u5B9A\u521D\u59CB\u65F6\u7ACB\u5373\u6267\u884C\u7B2C\u4E00\u6B21
  \u901A\u8FC7\u914D\u7F6Edeep\u4E3Atrue, \u6765\u6307\u5B9A\u6DF1\u5EA6\u76D1\u89C6
3. watchEffect\u51FD\u6570
  \u4E0D\u7528\u76F4\u63A5\u6307\u5B9A\u8981\u76D1\u89C6\u7684\u6570\u636E, \u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E\u5C31\u76D1\u89C6\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E
  \u9ED8\u8BA4\u521D\u59CB\u65F6\u5C31\u4F1A\u6267\u884C\u7B2C\u4E00\u6B21, \u4ECE\u800C\u53EF\u4EE5\u6536\u96C6\u9700\u8981\u76D1\u89C6\u7684\u6570\u636E
  \u76D1\u89C6\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\u56DE\u8C03
*/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  watchEffect
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u53EA\u6709getter\u7684\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">const</span> fullName1 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName1&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6709getter\u4E0Esetter\u7684\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">const</span> fullName2 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName2 get&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">set</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName2 set&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
        user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> fullName3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watchEffect: \u76D1\u89C6\u6240\u6709\u56DE\u8C03\u4E2D\u4F7F\u7528\u7684\u6570\u636E
    */</span>
    <span class="token comment">/* 
    watchEffect(() =&gt; {
      console.log(&#39;watchEffect&#39;)
      fullName3.value = user.firstName + &#39;-&#39; + user.lastName
    }) 
    */</span>

    <span class="token comment">/* 
    \u4F7F\u7528watch\u76842\u4E2A\u7279\u6027:
      \u6DF1\u5EA6\u76D1\u89C6
      \u521D\u59CB\u5316\u7ACB\u5373\u6267\u884C
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      fullName3<span class="token punctuation">.</span>value <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u662F\u5426\u521D\u59CB\u5316\u7ACB\u5373\u6267\u884C\u4E00\u6B21, \u9ED8\u8BA4\u662Ffalse</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u662F\u6DF1\u5EA6\u76D1\u89C6, \u9ED8\u8BA4\u662Ffalse</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watch\u4E00\u4E2A\u6570\u636E
      \u9ED8\u8BA4\u5728\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u6267\u884C\u56DE\u8C03
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>fullName3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
      user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watch\u591A\u4E2A\u6570\u636E: 
      \u4F7F\u7528\u6570\u7EC4\u6765\u6307\u5B9A
      \u5982\u679C\u662Fref\u5BF9\u8C61, \u76F4\u63A5\u6307\u5B9A
      \u5982\u679C\u662Freactive\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027,  \u5FC5\u987B\u901A\u8FC7\u51FD\u6570\u6765\u6307\u5B9A
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">,</span> fullName3<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u76D1\u89C6\u591A\u4E2A\u6570\u636E&#39;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">,</span>
      fullName1<span class="token punctuation">,</span>
      fullName2<span class="token punctuation">,</span>
      fullName3
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> \u751F\u547D\u5468\u671F</h2><h3 id="vue2-1" tabindex="-1"><a class="header-anchor" href="#vue2-1" aria-hidden="true">#</a> vue2</h3><p><img src="`+i+'" alt="\u56FE\u4F8B"></p><h3 id="vue3-1" tabindex="-1"><a class="header-anchor" href="#vue3-1" aria-hidden="true">#</a> vue3</h3><p><img src="'+u+`" alt="\u56FE\u4F8B"> vue3\u4E2D\u53EF\u4EE5\u7EE7\u7EED\u4F7F\u7528vue2.x\u4E2D\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u4F46\u662F\u6709\u4E24\u4E2A\u88AB\u6539\u540D\uFF1A beforeDestroy\u6539\u540D\u4E3AbeforeUnmount destroyed\u6539\u540D\u4E3Aunmounted</p><h2 id="\u4E0E-2-x-\u7248\u672C\u751F\u547D\u5468\u671F\u76F8\u5BF9\u5E94\u7684\u7EC4\u5408\u5F0F-api" tabindex="-1"><a class="header-anchor" href="#\u4E0E-2-x-\u7248\u672C\u751F\u547D\u5468\u671F\u76F8\u5BF9\u5E94\u7684\u7EC4\u5408\u5F0F-api" aria-hidden="true">#</a> \u4E0E 2.x \u7248\u672C\u751F\u547D\u5468\u671F\u76F8\u5BF9\u5E94\u7684\u7EC4\u5408\u5F0F API</h2><pre><code>beforeCreate -&gt; \u4F7F\u7528 setup()
created -&gt; \u4F7F\u7528 setup()
beforeMount -&gt; onBeforeMount
mounted -&gt; onMounted
beforeUpdate -&gt; onBeforeUpdate
updated -&gt; onUpdated
beforeDestroy -&gt; onBeforeUnmount
destroyed -&gt; onUnmounted
errorCaptured -&gt; onErrorCaptured
</code></pre><h2 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h2><p>\u628A\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u8F6C\u6362\u6210\u666E\u901A\u5BF9\u8C61\uFF0C\u8BE5\u666E\u901A\u5BF9\u8C61\u7684\u6BCF\u4E2A property \u90FD\u662F\u4E00\u4E2A ref \u5E94\u7528: \u5F53\u4ECE\u5408\u6210\u51FD\u6570\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0CtoRefs \u975E\u5E38\u6709\u7528\uFF0C\u8FD9\u6837\u6D88\u8D39\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u5728\u4E0D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u60C5\u51B5\u4E0B\u5BF9\u8FD4\u56DE\u7684\u5BF9\u8C61\u8FDB\u884C\u5206\u89E3\u4F7F\u7528 \u95EE\u9898: reactive \u5BF9\u8C61\u53D6\u51FA\u7684\u6240\u6709\u5C5E\u6027\u503C\u90FD\u662F\u975E\u54CD\u5E94\u5F0F\u7684 \u89E3\u51B3: \u5229\u7528 toRefs \u53EF\u4EE5\u5C06\u4E00\u4E2A\u54CD\u5E94\u5F0F reactive \u5BF9\u8C61\u7684\u6240\u6709\u539F\u59CB\u5C5E\u6027\u8F6C\u6362\u4E3A\u54CD\u5E94\u5F0F\u7684 ref \u5C5E\u6027</p><h2 id="ref\u83B7\u53D6\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#ref\u83B7\u53D6\u5143\u7D20" aria-hidden="true">#</a> ref\u83B7\u53D6\u5143\u7D20</h2><p>\u5229\u7528ref\u51FD\u6570\u83B7\u53D6\u7EC4\u4EF6\u4E2D\u7684\u6807\u7B7E\u5143\u7D20</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>---
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
ref\u83B7\u53D6\u5143\u7D20: \u5229\u7528ref\u51FD\u6570\u83B7\u53D6\u7EC4\u4EF6\u4E2D\u7684\u6807\u7B7E\u5143\u7D20
\u529F\u80FD\u9700\u6C42: \u8BA9\u8F93\u5165\u6846\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> inputRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">|</span><span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> inputRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      inputRef
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shallowreactive-\u4E0E-shallowref" tabindex="-1"><a class="header-anchor" href="#shallowreactive-\u4E0E-shallowref" aria-hidden="true">#</a> <code>shallowReactive</code> \u4E0E <code>shallowRef</code></h2><p><code>shallowReactive</code>: \u53EA\u5904\u7406\u4E86\u5BF9\u8C61\u5185\u6700\u5916\u5C42\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F(\u4E5F\u5C31\u662F\u6D45\u54CD\u5E94\u5F0F) <code>shallowRef</code>: \u53EA\u5904\u7406\u4E86 <code>value</code> \u7684\u54CD\u5E94\u5F0F, \u4E0D\u8FDB\u884C\u5BF9\u8C61\u7684 <code>reactive</code> \u5904\u7406 \u4EC0\u4E48\u65F6\u5019\u7528\u6D45\u54CD\u5E94\u5F0F\u5462? \u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528 <code>ref</code> \u548C <code>reactive</code> \u5373\u53EF \u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u7ED3\u6784\u6BD4\u8F83\u6DF1, \u4F46\u53D8\u5316\u65F6\u53EA\u662F\u5916\u5C42\u5C5E\u6027\u53D8\u5316 ===&gt; <code>shallowReactive</code> \u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u540E\u9762\u4F1A\u4EA7\u751F\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362 ===&gt; <code>shallowRef</code></p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m1: {{m1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m2: {{m2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m3: {{m3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m4: {{m4}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shallowReactive<span class="token punctuation">,</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
shallowReactive\u4E0EshallowRef
  shallowReactive: \u53EA\u5904\u7406\u4E86\u5BF9\u8C61\u5185\u6700\u5916\u5C42\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F(\u4E5F\u5C31\u662F\u6D45\u54CD\u5E94\u5F0F)
  shallowRef: \u53EA\u5904\u7406\u4E86value\u7684\u54CD\u5E94\u5F0F, \u4E0D\u8FDB\u884C\u5BF9\u8C61\u7684reactive\u5904\u7406
\u603B\u7ED3:
  reactive\u4E0Eref\u5B9E\u73B0\u7684\u662F\u6DF1\u5EA6\u54CD\u5E94\u5F0F, \u800CshallowReactive\u4E0EshallowRef\u662F\u6D45\u54CD\u5E94\u5F0F
  \u4EC0\u4E48\u65F6\u5019\u7528\u6D45\u54CD\u5E94\u5F0F\u5462?
    \u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528ref\u548Creactive\u5373\u53EF,
    \u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u7ED3\u6784\u6BD4\u8F83\u6DF1, \u4F46\u53D8\u5316\u65F6\u53EA\u662F\u5916\u5C42\u5C5E\u6027\u53D8\u5316 ===&gt; shallowReactive
    \u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u540E\u9762\u4F1A\u4EA7\u751F\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362 ===&gt; shallowRef
*/</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> m3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m4 <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// m1.b.c += 1</span>
      <span class="token comment">// m2.b.c += 1</span>

      <span class="token comment">// m3.value.a += 1</span>
      m4<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">,</span>
      m2<span class="token punctuation">,</span>
      m3<span class="token punctuation">,</span>
      m4<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="toref" tabindex="-1"><a class="header-anchor" href="#toref" aria-hidden="true">#</a> <code>toRef</code></h2><p>\u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A\u5C5E\u6027\u521B\u5EFA\u4E00\u4E2A ref\u5BF9\u8C61, \u4E8C\u8005\u5185\u90E8\u64CD\u4F5C\u7684\u662F\u540C\u4E00\u4E2A\u6570\u636E\u503C, \u66F4\u65B0\u65F6\u4E8C\u8005\u662F\u540C\u6B65\u7684 \u533A\u522B <code>ref</code>: \u62F7\u8D1D\u4E86\u4E00\u4EFD\u65B0\u7684\u6570\u636E\u503C\u5355\u72EC\u64CD\u4F5C, \u66F4\u65B0\u65F6\u76F8\u4E92\u4E0D\u5F71\u54CD \u5E94\u7528: \u5F53\u8981\u5C06 \u67D0\u4E2A <code>prop</code> \u7684 <code>ref</code> \u4F20\u9012\u7ED9\u590D\u5408\u51FD\u6570\u65F6\uFF0C<code>toRef</code> \u5F88\u6709\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{state}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{foo}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{foo2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
toRef:
  \u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A\u5C5E\u6027\u521B\u5EFA\u4E00\u4E2A ref\u5BF9\u8C61, \u4E8C\u8005\u5185\u90E8\u64CD\u4F5C\u7684\u662F\u540C\u4E00\u4E2A\u6570\u636E\u503C, \u66F4\u65B0\u65F6\u4E8C\u8005\u662F\u540C\u6B65\u7684
  \u533A\u522Bref: \u62F7\u8D1D\u4E86\u4E00\u4EFD\u65B0\u7684\u6570\u636E\u503C\u5355\u72EC\u64CD\u4F5C, \u66F4\u65B0\u65F6\u76F8\u4E92\u4E0D\u5F71\u54CD
  \u5E94\u7528: \u5F53\u8981\u5C06\u67D0\u4E2A prop \u7684 ref \u4F20\u9012\u7ED9\u590D\u5408\u51FD\u6570\u65F6\uFF0CtoRef \u5F88\u6709\u7528
*/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  toRef<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./Child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> foo2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
      <span class="token comment">// foo.value++</span>
      <span class="token comment">// foo2.value++  // foo\u548Cstate\u4E2D\u7684\u6570\u636E\u4E0D\u4F1A\u66F4\u65B0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      foo<span class="token punctuation">,</span>
      foo2<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{foo}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{length}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">require</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      length
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">foo</span><span class="token operator">:</span> Ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> lenth <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

  <span class="token keyword">return</span> lenth
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> component
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="provide-\u4E0E-inject" tabindex="-1"><a class="header-anchor" href="#provide-\u4E0E-inject" aria-hidden="true">#</a> <code>provide</code> \u4E0E <code>inject</code></h2><p><code>provide</code> \u548C <code>inject</code> \u63D0\u4F9B\u4F9D\u8D56\u6CE8\u5165\uFF0C\u529F\u80FD\u7C7B\u4F3C <code>2.x</code> \u7684 <code>provide/inject</code> \u4E3E\u4E2A\u4F8B\u5B50\uFF1A\u5B9E\u73B0\u8DE8\u5C42\u7EA7\u7EC4\u4EF6(\u7956\u5B59)\u95F4\u901A\u4FE1</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u7236\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u5F53\u524D\u989C\u8272: {{color}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color=&#39;red&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7EA2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color=&#39;yellow&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9EC4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color=&#39;blue&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u84DD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
- provide\` \u548C \`inject\` \u63D0\u4F9B\u4F9D\u8D56\u6CE8\u5165\uFF0C\u529F\u80FD\u7C7B\u4F3C 2.x \u7684 \`provide/inject
- \u5B9E\u73B0\u8DE8\u5C42\u7EA7\u7EC4\u4EF6(\u7956\u5B59)\u95F4\u901A\u4FE1
*/</span>

<span class="token keyword">import</span> Son <span class="token keyword">from</span> <span class="token string">&#39;./Son.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ProvideInject&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Son
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>

    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> color<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      color
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u5B50\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GrandSon</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GrandSon <span class="token keyword">from</span> <span class="token string">&#39;./GrandSon.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GrandSon
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{color}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5B59\u5B50\u7EC4\u4EF6: {{color}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      color
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD</h2><p><code>isRef</code>: \u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u4E00\u4E2A <code>ref</code> \u5BF9\u8C61 <code>isReactive</code>: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406 <code>isReadonly</code>: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>readonly</code> \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406 <code>isProxy</code>: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u6216\u8005 <code>readonly</code> \u65B9\u6CD5\u521B\u5EFA\u7684\u4EE3\u7406</p><h1 id="\u65B0\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u7EC4\u4EF6" aria-hidden="true">#</a> \u65B0\u7EC4\u4EF6</h1><h2 id="fragment-\u7247\u6BB5" tabindex="-1"><a class="header-anchor" href="#fragment-\u7247\u6BB5" aria-hidden="true">#</a> <code>Fragment</code>(\u7247\u6BB5)</h2><p>\u5728Vue2\u4E2D: \u7EC4\u4EF6\u5FC5\u987B\u6709\u4E00\u4E2A\u6839\u6807\u7B7E \u5728Vue3\u4E2D: \u7EC4\u4EF6\u53EF\u4EE5\u6CA1\u6709\u6839\u6807\u7B7E, \u5185\u90E8\u4F1A\u5C06\u591A\u4E2A\u6807\u7B7E\u5305\u542B\u5728\u4E00\u4E2AFragment\u865A\u62DF\u5143\u7D20\u4E2D \u597D\u5904: \u51CF\u5C11\u6807\u7B7E\u5C42\u7EA7, \u51CF\u5C0F\u5185\u5B58\u5360\u7528</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>aaaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>aaaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="teleport-\u77AC\u79FB" tabindex="-1"><a class="header-anchor" href="#teleport-\u77AC\u79FB" aria-hidden="true">#</a> <code>Teleport</code>(\u77AC\u79FB)</h2><p><code>Teleport</code> \u63D0\u4F9B\u4E86\u4E00\u79CD\u5E72\u51C0\u7684\u65B9\u6CD5, \u8BA9\u7EC4\u4EF6\u7684 <code>html</code> \u5728\u7236\u7EC4\u4EF6\u754C\u9762\u5916\u7684\u7279\u5B9A\u6807\u7B7E(\u5F88\u53EF\u80FD\u662F <code>body</code> )\u4E0B\u63D2\u5165\u663E\u793A</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modalOpen = true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      Open full screen modal! (With teleport!)
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>body<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modalOpen<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modal<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
        I&#39;m a teleported modal! 
        (My parent is &quot;body&quot;)
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>modalOpen = false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
          Close
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;modal-button&#39;</span><span class="token punctuation">,</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> modalOpen <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      modalOpen
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.modal</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.modal div</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="suspense-\u4E0D\u786E\u5B9A\u7684" tabindex="-1"><a class="header-anchor" href="#suspense-\u4E0D\u786E\u5B9A\u7684" aria-hidden="true">#</a> <code>Suspense</code> (\u4E0D\u786E\u5B9A\u7684)</h2><p>\u5B83\u4EEC\u5141\u8BB8\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u5728\u7B49\u5F85\u5F02\u6B65\u7EC4\u4EF6\u65F6\u6E32\u67D3\u4E00\u4E9B\u540E\u5907\u5185\u5BB9\uFF0C\u53EF\u4EE5\u8BA9\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u5E73\u6ED1\u7684\u7528\u6237\u4F53\u9A8C</p><h1 id="\u65B0-api" tabindex="-1"><a class="header-anchor" href="#\u65B0-api" aria-hidden="true">#</a> \u65B0 <code>API</code></h1><h2 id="\u5168\u5C40-api" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40-api" aria-hidden="true">#</a> \u5168\u5C40 <code>API</code></h2><h3 id="createapp" tabindex="-1"><a class="header-anchor" href="#createapp" aria-hidden="true">#</a> createApp()</h3><p>\u521B\u5EFA\u5E94\u7528</p><h4 id="vue2-2" tabindex="-1"><a class="header-anchor" href="#vue2-2" aria-hidden="true">#</a> vue2</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="vue3-2" tabindex="-1"><a class="header-anchor" href="#vue3-2" aria-hidden="true">#</a> vue3</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53EF\u4EE5\u5728\u5176\u540E\u94FE\u5F0F\u8C03\u7528\u5176\u4ED6\u65B9\u6CD5\uFF0C\u4E3B\u8981\u6709\u4E00\u4E0B\u51E0\u79CD\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u7528\u6CD5</th></tr></thead><tbody><tr><td>component\uFF08\u7EC4\u4EF6\uFF09</td><td>\u6CE8\u518C\u6216\u68C0\u7D22\u5168\u5C40\u7EC4\u4EF6\u3002\u6CE8\u518C\u8FD8\u4F1A\u4F7F\u7528\u7ED9\u5B9A\u7684 name \u53C2\u6570\u81EA\u52A8\u8BBE\u7F6E\u7EC4\u4EF6\u7684 name\u3002</td></tr><tr><td>use\uFF08\u4F7F\u7528\uFF09</td><td>\u5B89\u88C5 Vue.js \u63D2\u4EF6\u3002\u5728\u540C\u4E00\u4E2A\u63D2\u4EF6\u4E0A\u591A\u6B21\u8C03\u7528\u6B64\u65B9\u6CD5\u65F6\uFF0C\u6539\u63D2\u4EF6\u5C06\u4EC5\u5B89\u88C5\u4E00\u6B21\u3002</td></tr><tr><td>config\uFF08\u914D\u7F6E\uFF09</td><td>\u5305\u542B\u5E94\u7528\u914D\u7F6E\u7684\u5BF9\u8C61\u3002\u540CVue2\u4E2Dconfig\u3002\u63D0\u4F9B\u7EDF\u4E00\u914D\u7F6E\u3002</td></tr><tr><td>directive\uFF08\u6307\u4EE4\uFF09</td><td>\u6CE8\u518C\u6216\u68C0\u7D22\u5168\u5C40\u6307\u4EE4\u3002\u6307\u4EE4\u662F\u4E00\u7EC4\u5177\u6709\u751F\u547D\u5468\u671F\u7684\u94A9\u5B50\u3002</td></tr><tr><td>mixin\uFF08\u6DF7\u5165\uFF09</td><td>\u5728\u6574\u4E2A\u5E94\u7528\u8303\u56F4\u5185\u5E94\u7528\u6DF7\u5165\u3002\u4E00\u65E6\u6CE8\u518C\uFF0C\u5B83\u4EEC\u5C31\u53EF\u4EE5\u5728\u5F53\u524D\u7684\u5E94\u7528\u4E2D\u4EFB\u4F55\u7EC4\u4EF6\u6A21\u677F\u5185\u4F7F\u7528\u5B83\u3002\u63D2\u4EF6\u4F5C\u8005\u53EF\u4EE5\u4F7F\u7528\u6B64\u65B9\u6CD5\u5C06\u81EA\u5B9A\u4E49\u884C\u4E3A\u6CE8\u5165\u7EC4\u4EF6\u3002\u4E0D\u5EFA\u8BAE\u5728\u5E94\u7528\u4EE3\u7801\u4E2D\u4F7F\u7528\u3002</td></tr><tr><td>mount\uFF08\u6302\u8F7D\uFF09</td><td>\u5E94\u7528\u5B9E\u4F8B\u7684\u6839\u7EC4\u4EF6\u6302\u8F7D\u5728\u63D0\u4F9B\u7684 DOM \u5143\u7D20\u4E0A\u3002\u540CVue2\u4E2D\u7684el\u3002</td></tr><tr><td>provide\uFF08\u642D\u914DInject\uFF09</td><td>\u8BBE\u7F6E\u4E00\u4E2A\u53EF\u4EE5\u88AB\u6CE8\u5165\u5230\u5E94\u7528\u8303\u56F4\u5185\u6240\u6709\u7EC4\u4EF6\u4E2D\u7684\u503C\u3002\u7EC4\u4EF6\u5E94\u8BE5\u4F7F\u7528 inject \u6765\u63A5\u6536 provide \u7684\u503C\u3002provide \u548C inject \u7ED1\u5B9A\u4E0D\u662F\u54CD\u5E94\u5F0F\u7684\u3002</td></tr><tr><td>unmount\uFF08\u5378\u8F7D\uFF09</td><td>\u5728\u63D0\u4F9B\u7684 DOM \u5143\u7D20\u4E0A\u5378\u8F7D\u5E94\u7528\u5B9E\u4F8B\u7684\u6839\u7EC4\u4EF6\u3002</td></tr></tbody></table><h3 id="defineasynccomponent" tabindex="-1"><a class="header-anchor" href="#defineasynccomponent" aria-hidden="true">#</a> defineAsyncComponent()</h3><p>\u5F02\u6B65\u7EC4\u4EF6</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>change<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u89C6\u56FE\u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span> <span class="token attr-name">:is</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>currentTab<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> defineAsyncComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">const</span> AsyncComp1 <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/MyComponent1.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">const</span> AsyncComp2 <span class="token operator">=</span> <span class="token function">defineAsyncComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./components/MyComponent2.vue&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span>
    AsyncComp1<span class="token punctuation">,</span>
    AsyncComp2
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> currentTab <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;AsyncComp1&#39;</span><span class="token punctuation">)</span>
 
 
    <span class="token keyword">function</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      currentTab<span class="token punctuation">.</span>value <span class="token operator">=</span> currentTab<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;AsyncComp1&#39;</span> <span class="token operator">?</span> <span class="token string">&#39;AsyncComp2&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;AsyncComp1&#39;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      currentTab<span class="token punctuation">,</span>
      change
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nexttick" tabindex="-1"><a class="header-anchor" href="#nexttick" aria-hidden="true">#</a> nextTick()</h3><p>\u7B49\u5F85\u4E0B\u4E00\u6B21 DOM \u66F4\u65B0\u5237\u65B0\u7684\u5DE5\u5177\u65B9\u6CD5</p><h2 id="\u6A21\u677F\u8BED\u6CD5\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u6A21\u677F\u8BED\u6CD5\u53D8\u5316" aria-hidden="true">#</a> \u6A21\u677F\u8BED\u6CD5\u53D8\u5316</h2><pre><code>v-model\u7684\u672C\u8D28\u53D8\u5316
prop\uFF1Avalue -&gt; modelValue\uFF1B
event\uFF1Ainput -&gt; update:modelValue\uFF1B
.sync\u4FEE\u6539\u7B26\u5DF2\u79FB\u9664, \u7531v-model\u4EE3\u66FF
v-if\u4F18\u5148v-for\u89E3\u6790
</code></pre>`,85);function m(b,g){const a=l("ExternalLinkIcon");return p(),e("div",null,[k,n("p",null,[n("a",d,[o("\u5B98\u65B9\u6587\u6863"),c(a)])]),v])}const h=t(r,[["render",m],["__file","vue3\u5FEB\u901F\u4E0A\u624B.html.vue"]]);export{h as default};
