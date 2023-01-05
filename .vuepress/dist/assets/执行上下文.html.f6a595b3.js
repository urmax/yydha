import{_ as n,o as i,c as e,d as s}from"./app.14c04107.js";const d={},l=s(`<h3 id="\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u6267\u884C\u4E0A\u4E0B\u6587</h3><h3 id="\u4EC0\u4E48\u662F\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u6267\u884C\u4E0A\u4E0B\u6587\uFF1F</h3><p>\u200B \u7B80\u800C\u8A00\u4E4B\uFF0C\u6267\u884C\u4E0A\u4E0B\u6587\u662F\u8BC4\u4F30\u548C\u6267\u884C JavaScript \u4EE3\u7801\u7684\u73AF\u5883\u7684\u62BD\u8C61\u6982\u5FF5\u3002\u548C\u6587\u7AE0\u7684\u4E0A\u4E0B\u6587\u662F\u4E00\u4E2A\u610F\u601D\uFF0C\u5728\u901A\u4FD7\u4E00\u70B9\uFF0C\u6211\u89C9\u5F97\u53EB\u73AF\u5883\u66F4\u597D\u3002\u770B\u4E00\u7BC7\u6587\u7AE0\uFF0C\u7ED9\u4F60\u6458\u5F55\u4E00\u6BB5\uFF0C\u6CA1\u524D\u6CA1\u540E\uFF0C\u4F60\u8BFB\u4E0D\u61C2\uFF0C\u56E0\u4E3A\u6709\u8BED\u5883\uFF0C\u5C31\u662F\u8BED\u8A00\u73AF\u5883\u5B58\u5728\uFF0C\u4E00\u6BB5\u8BDD\u8BF4\u4E86\u4EC0\u4E48\uFF0C\u8981\u901A\u8FC7\u4E0A\u4E0B\u6587(\u6587\u7AE0\u7684\u4E0A\u4E0B\u6587)\u6765\u63A8\u65AD\u3002</p><h3 id="\u6267\u884C\u6808" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u6808" aria-hidden="true">#</a> \u6267\u884C\u6808</h3><p>\u200B \u6267\u884C\u6808\uFF0C\u4E5F\u5C31\u662F\u5728\u5176\u5B83\u7F16\u7A0B\u8BED\u8A00\u4E2D\u6240\u8BF4\u7684\u201C\u8C03\u7528\u6808\u201D\uFF0C\u662F\u4E00\u79CD\u62E5\u6709 LIFO\uFF08\u540E\u8FDB\u5148\u51FA\uFF09\u6570\u636E\u7ED3\u6784\u7684\u6808\uFF0C\u88AB\u7528\u6765\u5B58\u50A8\u4EE3\u7801\u8FD0\u884C\u65F6\u521B\u5EFA\u7684\u6240\u6709\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>let a = &#39;Hello World!&#39;;

function first() {
  console.log(&#39;Inside first function&#39;);
  second();
  console.log(&#39;Again inside first function&#39;);
}

function second() {
  console.log(&#39;Inside second function&#39;);
}

first();
console.log(&#39;Inside Global Execution Context&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B \u6700\u5F00\u59CB\u521B\u5EFA\u4E00\u4E2A\u5168\u5C40\u4E0A\u4E0B\u6587\uFF0C\u538B\u5165\u6808\uFF0C\u6BCF\u5F53\u5F15\u64CE\u9047\u5230\u4E00\u4E2A\uFF08first\uFF08\uFF09\uFF09\u51FD\u6570\u8C03\u7528\uFF0C\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E0A\u4E0B\u6587\u5E76\u7ACB\u5373\u538B\u5165\u6808\u9876\uFF0C\u8F93\u51FA&#39;Inside first function&#39;\uFF0C\u7136\u540E\u9047\u5230second\uFF08\uFF09\uFF0C\u4E3Asecond\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u4E0A\u4E0B\u6587\u5E76\u7ACB\u5373\u538B\u5165\u6808\u9876\uFF0C\u8F93\u51FA&#39;Inside second function&#39;\uFF0C\u6267\u884C\u5B8C\u6574\u4E2A\u51FD\u6570\u6267\u884C\u4E0A\u4E0B\u6587\u4ECE\u6808\u4E2D\u5F39\u51FA\uFF0C\u63A7\u5236\u6D41\u7A0B\u5230\u8FBE\u5F53\u524D\u6808\u4E2D\u7684\u4E0B\u4E00\u4E2A\u4E0A\u4E0B\u6587\uFF0C\u8F93\u51FA\u4E0B\u4E00\u4E2A&#39;Again inside first function&#39; \uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u5230\u6700\u540E\u4E00\u6B65&#39;Inside Global Execution Context&#39;\uFF0C \u4E00\u65E6\u6240\u6709\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\uFF0CJavaScript \u5F15\u64CE\u4ECE\u5F53\u524D\u6808\u4E2D\u79FB\u9664\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u3002</p><h3 id="\u8BD5\u8BD5\u9762\u8BD5\u9898\u5427" tabindex="-1"><a class="header-anchor" href="#\u8BD5\u8BD5\u9762\u8BD5\u9898\u5427" aria-hidden="true">#</a> \u8BD5\u8BD5\u9762\u8BD5\u9898\u5427</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>const Context = {
    name: &#39;context&#39;,
    run: function () {
        const obj1 = {
            name: &#39;obj1&#39;,
            getName: () =&gt; {
                console.log(2, this);
            }
        }
        const obj2 = {
            name: &#39;obj2&#39;,
            getName: function () {
                console.log(3, this);
                setTimeout(() =&gt; {
                    console.log(6, this);
                }, 0)
            }
        }
        const obj3 = {
            name: &#39;obj3&#39;,
            getName: function () {
                console.log(4, this);
                setTimeout(() =&gt; {
                    console.log(7, this);
                }, 0)
            }
        }
        const obj4 = {
            name: &#39;obj4&#39;,
            getName: () =&gt; {
                console.log(10, this);
                setTimeout(() =&gt; {
                    console.log(11, this);
                }, 0)
            }
        }

        function getName2() {
            console.log(5, this);
        }
        const getName = obj3.getName;
        const getName3 = obj4.getName;
        getName();

        console.log(1, this);
        obj1.getName();
        getName3();
        obj2.getName();
        getName();
        getName2();
        setTimeout(() =&gt; {
            console.log(8, this);
        }, 0)
        setTimeout(function () {
            console.log(9, this);
        }, 0)
    }
}
Context.run()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u95EE\u9898-\u600E\u4E48\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898-\u600E\u4E48\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587" aria-hidden="true">#</a> \u95EE\u9898\uFF1A\u600E\u4E48\u521B\u5EFA\u6267\u884C\u4E0A\u4E0B\u6587\uFF1F</h3>`,10),a=[l];function v(c,r){return i(),e("div",null,a)}const o=n(d,[["render",v],["__file","\u6267\u884C\u4E0A\u4E0B\u6587.html.vue"]]);export{o as default};
