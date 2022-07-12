<template><div><h1 id="用js数组生成html字符" tabindex="-1"><a class="header-anchor" href="#用js数组生成html字符" aria-hidden="true">#</a> 用JS数组生成HTML字符</h1>
<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2>
<p>给定一个数组，输出一个HTML字符。<a href="https://arrTohtml.devin.ren" target="_blank" rel="noopener noreferrer">线上地址<ExternalLinkIcon/></a></p>
<h2 id="分析需求" tabindex="-1"><a class="header-anchor" href="#分析需求" aria-hidden="true">#</a> 分析需求</h2>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207111950204.png" alt="分析">
从图片要求我们可以看到，每一个数组，最终都是会生成一个ul&gt;li。 也就是会有父元素和子元素产生。<br>
如果我们只是对给出的数组遍历一次，不做任何处理，我们得到的应该都是兄弟元素。
<strong>解决办法：</strong>
对于最外层的ul，我们是可以通过<code v-pre>&lt;ul&gt; + res + &lt;/ul&gt;</code>来得到的，res代表的是最后的结果。
观察里面的ul&gt;li，我们发现ul和外面li内容是一起的，也就是说ul是外层li标签的内容，且外层li本身也是有着内容的，那么我们只需要在添加外层li本身内容的时候，加上ul&gt;li即可，我们可以通过递归来实现加上ul&gt;li.</p>
<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"index.html"</span><span class="token punctuation">,</span> <span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"index.js"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">"css"</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"index.css"</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 返回数组代表的文件树 HTML</span>
<span class="token keyword">function</span> <span class="token function">toHTML</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">"string"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 有下一项，并且下一项是数组</span>
      <span class="token keyword">const</span> subArr <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 把下一项保存起来</span>
      res <span class="token operator">+=</span> <span class="token string">"&lt;li>"</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">toHTML</span><span class="token punctuation">(</span>subArr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"&lt;/li>"</span><span class="token punctuation">;</span> <span class="token comment">// 递归, toHTML(subArr)会返回一个ul>li</span>
      i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 跳过是数组的那个项</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 当前项是文件</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> <span class="token string">"&lt;li>"</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">"&lt;/li>"</span><span class="token punctuation">;</span>
      i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">"&lt;ul>"</span> <span class="token operator">+</span> res <span class="token operator">+</span> <span class="token string">"&lt;/ul>"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">toHTML</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最终渲染出来的结构" tabindex="-1"><a class="header-anchor" href="#最终渲染出来的结构" aria-hidden="true">#</a> 最终渲染出来的结构</h2>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207111947101.png" alt="项目结构"></p>
</div></template>
