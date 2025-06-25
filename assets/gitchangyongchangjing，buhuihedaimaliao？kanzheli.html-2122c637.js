import{_ as e,o as a,c as n,b as s}from"./app-571c1f36.js";const i={},d=s(`<h1 id="git常用场景-不会合代码了-看这里" tabindex="-1"><a class="header-anchor" href="#git常用场景-不会合代码了-看这里" aria-hidden="true">#</a> git常用场景，不会合代码了？看这里</h1><h3 id="_1-我刚才提交了啥呀" tabindex="-1"><a class="header-anchor" href="#_1-我刚才提交了啥呀" aria-hidden="true">#</a> 1. 我刚才提交了啥呀？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1 </span>
git show
<span class="token comment">// 2 </span>
git log <span class="token operator">-</span>n1 <span class="token operator">-</span>p

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-我上次的commit信息又写错了-怎么改下" tabindex="-1"><a class="header-anchor" href="#_2-我上次的commit信息又写错了-怎么改下" aria-hidden="true">#</a> 2. 我上次的commit信息又写错了，怎么改下？</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 1. 这个操作会打开一个编辑器，输入 i 就可以修改上次的commit信息，保存并退出可以使用 :wq</span>
git commit <span class="token operator">--</span>amend <span class="token operator">--</span>only
<span class="token comment">// 2. 直接改掉</span>
git commit <span class="token operator">--</span>amend <span class="token operator">--</span>only <span class="token operator">-</span>m <span class="token string">&#39;xxxxxxx&#39;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-我上次提交的代码-感觉全错了-我要去掉最后一次的提交-从头开始。" tabindex="-1"><a class="header-anchor" href="#_3-我上次提交的代码-感觉全错了-我要去掉最后一次的提交-从头开始。" aria-hidden="true">#</a> 3. 我上次提交的代码，感觉全错了，我要去掉最后一次的提交，从头开始。</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git reset <span class="token constant">HEAD</span><span class="token operator">^</span> <span class="token operator">--</span>hard <span class="token comment">// 强制退回一个版本</span>
git push <span class="token operator">-</span>f <span class="token punctuation">[</span>remote<span class="token punctuation">]</span> <span class="token punctuation">[</span>branch<span class="token punctuation">]</span> <span class="token comment">// 强制推送到远端</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-我不小心退回了版本-怎么找回这次内容" tabindex="-1"><a class="header-anchor" href="#_4-我不小心退回了版本-怎么找回这次内容" aria-hidden="true">#</a> 4. 我不小心退回了版本，怎么找回这次内容</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git reflog <span class="token comment">// 找到那次的commit的SHA1234</span>
git reset <span class="token operator">--</span>hard <span class="token constant">SHA1234</span> <span class="token comment">// 到这个版本里来</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-前面几次的提交都是一个功能-我想要合并这些commit信息-变成一个提交。" tabindex="-1"><a class="header-anchor" href="#_5-前面几次的提交都是一个功能-我想要合并这些commit信息-变成一个提交。" aria-hidden="true">#</a> 5. 前面几次的提交都是一个功能，我想要合并这些commit信息 变成一个提交。</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>git rebase <span class="token operator">-</span>i <span class="token constant">HEAD</span><span class="token operator">~</span><span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pick a9c8a1d Some refactoring
pick 01b2fd8 New awesome feature
pick b729ad5 fixup
pick e3851e8 another fix

# Rebase 8074d12..b729ad5 onto 8074d12
#
# Commands:
#  p, pick = use commit
#  r, reword = use commit, but edit the commit message
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#  f, fixup = like &quot;squash&quot;, but discard this commit&#39;s log message
#  x, exec = run command (the rest of the line) using shell
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有以 # 开头的行都是注释, 不会影响 rebase.</p><p>然后，你可以用任何上面命令列表的命令替换 pick, 你也可以通过删除对应的行来删除一个提交(commit)。</p><p>然后需要的commit 提交前面 使用 s , 这样就能既保留commit提交，但是又能把几次提交变成一个</p><h3 id="_6-想删除本地的少量分支" tabindex="-1"><a class="header-anchor" href="#_6-想删除本地的少量分支" aria-hidden="true">#</a> 6. 想删除本地的少量分支</h3><p>本地分支比较少的时候，我们可以轻轻松松使用此命令删除</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -d deleteBranchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果发现删除不了，可以强制删除使用大写的D</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch -D deleteBranchName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-想批量删除本地的分支" tabindex="-1"><a class="header-anchor" href="#_7-想批量删除本地的分支" aria-hidden="true">#</a> 7.想批量删除本地的分支</h3><h4 id="批量删除本地已经合并过某分支的所有分支" tabindex="-1"><a class="header-anchor" href="#批量删除本地已经合并过某分支的所有分支" aria-hidden="true">#</a> 批量删除本地已经合并过某分支的所有分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch --merged | egrep -v &quot;(^\\*|master)&quot; | xargs git branch -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同理这个小写的d可以换成大写的D</p><h4 id="批量删除本地所有分支" tabindex="-1"><a class="header-anchor" href="#批量删除本地所有分支" aria-hidden="true">#</a> 批量删除本地所有分支</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git branch | grep -v &#39;master&#39; | xargs git branch -D

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,26),t=[d];function r(c,l){return a(),n("div",null,t)}const m=e(i,[["render",r],["__file","gitchangyongchangjing，buhuihedaimaliao？kanzheli.html.vue"]]);export{m as default};
