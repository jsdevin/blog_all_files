<template><div><h1 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计" aria-hidden="true">#</a> 响应式设计</h1>
<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2>
<p>依据屏幕尺寸的不同显示不同的背景颜色。<br>
<a href="https://media.devin.ren" target="_blank" rel="noopener noreferrer">线上预览<ExternalLinkIcon/></a></p>
<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.demo</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> greenyellow<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.demo</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.demo</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 500px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.demo</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> pink<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.demo</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> purple<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>demo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>调用f12缩小尺寸即可使得背景变色<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Responsive_Design" target="_blank" rel="noopener noreferrer">响应式设计参考资料<ExternalLinkIcon/></a></p>
</div></template>
