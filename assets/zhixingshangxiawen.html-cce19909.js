import{_ as n,o as i,c as e,b as s}from"./app-571c1f36.js";const d={},l=s(`<h3 id="执行上下文" tabindex="-1"><a class="header-anchor" href="#执行上下文" aria-hidden="true">#</a> 执行上下文</h3><h3 id="什么是执行上下文" tabindex="-1"><a class="header-anchor" href="#什么是执行上下文" aria-hidden="true">#</a> 什么是执行上下文？</h3><p>​ 简而言之，执行上下文是评估和执行 JavaScript 代码的环境的抽象概念。和文章的上下文是一个意思，在通俗一点，我觉得叫环境更好。看一篇文章，给你摘录一段，没前没后，你读不懂，因为有语境，就是语言环境存在，一段话说了什么，要通过上下文(文章的上下文)来推断。</p><h3 id="执行栈" tabindex="-1"><a class="header-anchor" href="#执行栈" aria-hidden="true">#</a> 执行栈</h3><p>​ 执行栈，也就是在其它编程语言中所说的“调用栈”，是一种拥有 LIFO（后进先出）数据结构的栈，被用来存储代码运行时创建的所有执行上下文。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let a = &#39;Hello World!&#39;;

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​ 最开始创建一个全局上下文，压入栈，每当引擎遇到一个（first（））函数调用，创建一个新的上下文并立即压入栈顶，输出&#39;Inside first function&#39;，然后遇到second（），为second创建一个新的上下文并立即压入栈顶，输出&#39;Inside second function&#39;，执行完整个函数执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文，输出下一个&#39;Again inside first function&#39; ，以此类推，到最后一步&#39;Inside Global Execution Context&#39;， 一旦所有代码执行完毕，JavaScript 引擎从当前栈中移除全局执行上下文。</p><h3 id="试试面试题吧" tabindex="-1"><a class="header-anchor" href="#试试面试题吧" aria-hidden="true">#</a> 试试面试题吧</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const Context = {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题-怎么创建执行上下文" tabindex="-1"><a class="header-anchor" href="#问题-怎么创建执行上下文" aria-hidden="true">#</a> 问题：怎么创建执行上下文？</h3>`,10),a=[l];function v(c,r){return i(),e("div",null,a)}const o=n(d,[["render",v],["__file","zhixingshangxiawen.html.vue"]]);export{o as default};
