import{_ as e,o as a,c as r,b as d}from"./app-571c1f36.js";const t="/yydha/assets/2023-01-13_1-d7859aa0.png",i="/yydha/assets/2023-01-13_2-90f3eb1f.png",s="/yydha/assets/2023-01-13_3-383ebeae.png",n="/yydha/assets/2023-01-13_4-9a18b273.png",c="/yydha/assets/2023-01-13_5-2e8d5b46.png",l="/yydha/assets/2023-01-13_6-0b91ec73.png",o="/yydha/assets/2023-01-13_7-ed157013.png",h="/yydha/assets/2023-01-13_8-e21b759f.png",p="/yydha/assets/2023-01-13_9-c9089f19.png",b="/yydha/assets/2023-01-13_10-80010b3e.png",u="/yydha/assets/2023-01-13_11-386287df.png",_={},m=d(`<h1 id="css-backdrop-filter简介-毛玻璃、磨砂效果" tabindex="-1"><a class="header-anchor" href="#css-backdrop-filter简介-毛玻璃、磨砂效果" aria-hidden="true">#</a> CSS backdrop-filter简介：毛玻璃、磨砂效果</h1><p>前两天在实现设计稿的时候，发现有个磨砂的效果，网上搜索了下使用到了这个css，赶完工以后回过头来，看下这个东西，浅浅的记录一下用法。</p><h2 id="在mdn上可以看到详细的介绍" tabindex="-1"><a class="header-anchor" href="#在mdn上可以看到详细的介绍" aria-hidden="true">#</a> 在mdn上可以看到详细的介绍</h2><p>可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* 关键词值 */
backdrop-filter: none;

/* 指向 SVG 滤镜的 URL */
backdrop-filter: url(commonfilters.svg#filter);

/* &lt;filter-function&gt; 滤镜函数值 */
backdrop-filter: blur(2px);
backdrop-filter: brightness(60%);
backdrop-filter: contrast(40%);
backdrop-filter: drop-shadow(4px 4px 10px blue);
backdrop-filter: grayscale(30%);
backdrop-filter: hue-rotate(120deg);
backdrop-filter: invert(70%);
backdrop-filter: opacity(20%);
backdrop-filter: sepia(90%);
backdrop-filter: saturate(80%);

/* 多重滤镜 */
backdrop-filter: url(filters.svg#filter) blur(4px) saturate(150%);

/* 全局值 */
backdrop-filter: inherit;
backdrop-filter: initial;
backdrop-filter: revert;
backdrop-filter: unset;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对滤镜的简介" tabindex="-1"><a class="header-anchor" href="#对滤镜的简介" aria-hidden="true">#</a> 对滤镜的简介</h2><table><thead><tr><th>参数</th><th>备注</th></tr></thead><tbody><tr><td>backdrop-filter: blur(10px)</td><td>模糊</td></tr><tr><td>backdrop-filter: brightness(60%)</td><td>亮度</td></tr><tr><td>backdrop-filter: contrast(40%)</td><td>对比度</td></tr><tr><td>backdrop-filter: drop-shadow(4px 4px 10px blue)</td><td>投影</td></tr><tr><td>backdrop-filter: grayscale(30%)</td><td>灰度</td></tr><tr><td>backdrop-filter: hue-rotate(120deg)</td><td>色调变化</td></tr><tr><td>backdrop-filter: invert(70%)</td><td>反向</td></tr><tr><td>backdrop-filter: opacity(20%)</td><td>透明度</td></tr><tr><td>backdrop-filter: sepia(90%)</td><td>饱和度</td></tr><tr><td>backdrop-filter: saturate(80%)</td><td>褐色</td></tr></tbody></table><h2 id="搞点例子看看" tabindex="-1"><a class="header-anchor" href="#搞点例子看看" aria-hidden="true">#</a> 搞点例子看看</h2><p>为了简单，我们使用一张图片，加一个 <code>p</code> 标签，将 <code>p</code> 标签绝对定位到图片的底部看效果 <code>p</code> 标签的背景我们使用透明背景。注意：必须使元素或其背景至少部分透明。</p><h3 id="_1-原图" tabindex="-1"><a class="header-anchor" href="#_1-原图" aria-hidden="true">#</a> 1. 原图</h3><p><img src="`+t+'" alt="图例"></p><h3 id="_2-blur-模糊" tabindex="-1"><a class="header-anchor" href="#_2-blur-模糊" aria-hidden="true">#</a> 2. blur 模糊</h3><p><img src="'+i+`" alt="图例"></p><pre><code>值越大越看不清背景
</code></pre><h3 id="_3-brightness-亮度" tabindex="-1"><a class="header-anchor" href="#_3-brightness-亮度" aria-hidden="true">#</a> 3. brightness 亮度</h3><p><img src="`+s+`" alt="图例"></p><pre><code>值越大背景越亮，0 是纯黑色
</code></pre><h3 id="_4-contrast-对比度" tabindex="-1"><a class="header-anchor" href="#_4-contrast-对比度" aria-hidden="true">#</a> 4. contrast 对比度</h3><p><img src="`+n+`" alt="图例"></p><pre><code>0是灰色的，值越大 对比度越大。
</code></pre><h3 id="_5-drop-shadow-投影" tabindex="-1"><a class="header-anchor" href="#_5-drop-shadow-投影" aria-hidden="true">#</a> 5. drop-shadow 投影</h3><p><img src="`+c+'" alt="图例"></p><h3 id="_6-grayscale-灰度" tabindex="-1"><a class="header-anchor" href="#_6-grayscale-灰度" aria-hidden="true">#</a> 6. grayscale 灰度</h3><p><img src="'+l+`" alt="图例"></p><pre><code>100%为背景黑白色，0 则无变化
</code></pre><h3 id="_7-hue-rotate-色调变化" tabindex="-1"><a class="header-anchor" href="#_7-hue-rotate-色调变化" aria-hidden="true">#</a> 7. hue-rotate 色调变化</h3><p><img src="`+o+'" alt="图例"></p><h3 id="_8-invert-反向" tabindex="-1"><a class="header-anchor" href="#_8-invert-反向" aria-hidden="true">#</a> 8. invert 反向</h3><p><img src="'+h+'" alt="图例"></p><h3 id="_9-opacity-透明度" tabindex="-1"><a class="header-anchor" href="#_9-opacity-透明度" aria-hidden="true">#</a> 9. opacity 透明度</h3><p><img src="'+p+'" alt="图例"></p><h3 id="_10-sepia-饱和度" tabindex="-1"><a class="header-anchor" href="#_10-sepia-饱和度" aria-hidden="true">#</a> 10. sepia 饱和度</h3><p><img src="'+b+'" alt="图例"></p><h3 id="_11-saturate-褐色" tabindex="-1"><a class="header-anchor" href="#_11-saturate-褐色" aria-hidden="true">#</a> 11. saturate 褐色</h3><p><img src="'+u+'" alt="图例"></p><h2 id="完整demo可以点击下面链接打开-打开调试工具更改样式。" tabindex="-1"><a class="header-anchor" href="#完整demo可以点击下面链接打开-打开调试工具更改样式。" aria-hidden="true">#</a> 完整demo可以点击下面链接打开, 打开调试工具更改样式。</h2><p>[点我查看CSS backdrop-filter简介：毛玻璃、磨砂效果例子](https://yydha.gitee.io/html-demo/html/CSS backdrop-filter简介：毛玻璃、磨砂效果.html)</p>',37),f=[m];function v(g,k){return a(),r("div",null,f)}const x=e(_,[["render",v],["__file","CSS backdrop-filterjianjie：maoboli、moshaxiaoguo.html.vue"]]);export{x as default};
