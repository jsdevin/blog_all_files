<template><div><h1 id="实现深拷贝" tabindex="-1"><a class="header-anchor" href="#实现深拷贝" aria-hidden="true">#</a> 实现深拷贝</h1>
<h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2>
<p>写一个函数，可以实现简单的对象深拷贝，即 <code v-pre>clone({id: 1, obj: {id: 2}})</code> 返回<code v-pre>{id: 1, obj: {id: 2}}</code>，传入对象与返回对象互相独立。</p>
<h2 id="分析" tabindex="-1"><a class="header-anchor" href="#分析" aria-hidden="true">#</a> 分析</h2>
<p>之前分析过，直接引用了。<a href="https://devin.ren/interview/JS%E7%AF%87/01.%E5%86%85%E7%BD%AE%E7%B1%BB%E5%9E%8B-typeof-%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2-%E6%B7%B1%E6%B5%85%E6%8B%B7%E8%B4%9D.html#%E6%B7%B1%E6%8B%B7%E8%B4%9D" target="_blank" rel="noopener noreferrer">点击这里<ExternalLinkIcon/></a></p>
<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 先将对象转换为JSON字符串</span>
  <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
  <span class="token comment">// 再将JSON字符串转换为新的对象，至此实现深拷贝,传入的对象和返回的对象相互独立</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span>
  <span class="token keyword">return</span> res

<span class="token punctuation">}</span>
<span class="token keyword">let</span> resObj <span class="token operator">=</span> <span class="token function">clone</span><span class="token punctuation">(</span>obj1<span class="token punctuation">)</span>
obj1<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>id <span class="token operator">=</span> <span class="token number">555</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>resObj<span class="token punctuation">.</span>obj<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token comment">// 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
