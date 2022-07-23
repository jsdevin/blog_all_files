<template><div><h1 id="学习-mvvm-数据单向绑定" tabindex="-1"><a class="header-anchor" href="#学习-mvvm-数据单向绑定" aria-hidden="true">#</a> 学习：MVVM 数据单向绑定</h1>
<h2 id="什么是单向绑定" tabindex="-1"><a class="header-anchor" href="#什么是单向绑定" aria-hidden="true">#</a> 什么是单向绑定？</h2>
<p>把Model绑定到View，当Model更新时View就会自动更新。</p>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207220722965.png" alt=""></p>
<h2 id="实现单向绑定" tabindex="-1"><a class="header-anchor" href="#实现单向绑定" aria-hidden="true">#</a> 实现单向绑定{{}}</h2>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>单向绑定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>  
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
    姓名：{{name}}  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span> 年龄：{{age}}  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>  

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">  
  <span class="token keyword">let</span> el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">'app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token keyword">let</span> template <span class="token operator">=</span> el<span class="token punctuation">.</span>innerHTML<span class="token punctuation">;</span>  
  <span class="token keyword">let</span> _data <span class="token operator">=</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Devin'</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">18</span>  
  <span class="token punctuation">}</span><span class="token punctuation">;</span>  
  
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>_data<span class="token punctuation">,</span> <span class="token punctuation">{</span>  
    <span class="token function">set</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> name<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
      obj<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>  
      <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span>  
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  
  <span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token comment">// \w+：匹配一个或多个非字母进行切割，匹配到的非字母不缓存；  </span>
    el<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\{\{\w+\}\}</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token parameter">str</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  
      str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
      <span class="token keyword">return</span> _data<span class="token punctuation">[</span>str<span class="token punctuation">]</span><span class="token punctuation">;</span>  
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span>  
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>  
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参考文章：</strong><br>
<a href="https://www.liaoxuefeng.com/wiki/1022910821149312/1109447325776608" target="_blank" rel="noopener noreferrer">参考1：单向绑定介绍<ExternalLinkIcon/></a><br>
<a href="https://blog.csdn.net/Gaozihang777/article/details/121906849" target="_blank" rel="noopener noreferrer">参考2：单向绑定介绍<ExternalLinkIcon/></a><br>
<a href="https://blog.csdn.net/weixin_42397257/article/details/89685079" target="_blank" rel="noopener noreferrer">参考3：实现单向绑定{{}}<ExternalLinkIcon/></a><br>
<a href="https://blog.csdn.net/weixin_44356698/article/details/108082449" target="_blank" rel="noopener noreferrer">参考4：正则表达式w+<ExternalLinkIcon/></a></p>
</div></template>
