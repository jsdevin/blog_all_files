<template><div><h1 id="响应式设计" tabindex="-1"><a class="header-anchor" href="#响应式设计" aria-hidden="true">#</a> 响应式设计</h1>
<p><a href="https://media.devin.ren/" target="_blank" rel="noopener noreferrer">响应式设计demo地址<ExternalLinkIcon/></a>
设计一个小的响应式页面demo, 功能是当页面宽度发生变化时，背景颜色会发生改变。
这里主要使用到的东西是css中的<code v-pre>@media</code>。</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code>  <span class="token selector">&lt;style>
    .demo</span> <span class="token punctuation">{</span>
      <span class="token property">background-color</span><span class="token punctuation">:</span> greenyellow<span class="token punctuation">;</span>
      <span class="token property">width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
      <span class="token property">height</span><span class="token punctuation">:</span> 500px<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/* 屏幕尺寸发生变化，但是最大尺寸不超过1000px，则显示背景为red */</span>
    <span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1000px<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
      <span class="token selector">.demo</span> <span class="token punctuation">{</span>
        <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/* 屏幕尺寸发生变化，但是最大尺寸不超过800px，则显示背景为blue */</span>
    <span class="token comment">/* 注意：后面的样式设计会覆盖前面的设计 */</span>
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
  &lt;/style>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://www.cnblogs.com/theblogs/p/10516098.html" target="_blank" rel="noopener noreferrer">学习rem、vh等<ExternalLinkIcon/></a></p>
</div></template>
