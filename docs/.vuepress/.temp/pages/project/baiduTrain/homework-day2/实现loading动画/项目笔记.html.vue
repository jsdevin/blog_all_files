<template><div><h1 id="实现loading动画" tabindex="-1"><a class="header-anchor" href="#实现loading动画" aria-hidden="true">#</a> 实现loading动画</h1>
<h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> 项目介绍</h2>
<p>用到的技术是HTML、CSS，要求实现一个loading动画。<a href="https://loading.devin.ren/" target="_blank" rel="noopener noreferrer">点击这里预览<ExternalLinkIcon/></a></p>
<h2 id="需求分析与实现" tabindex="-1"><a class="header-anchor" href="#需求分析与实现" aria-hidden="true">#</a> 需求分析与实现</h2>
<ol>
<li>
<p>HTML部分</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>  
    For new sidebar colors, click your workspace name, then Preferences > Sidebar > Theme  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading__author<span class="token punctuation">"</span></span><span class="token punctuation">></span></span> - Your friends at Slack<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>  
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>loading__anim<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span> <span class="token comment">&lt;!--这里是用来放置loading动画的--></span>  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">></span></span>  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>CSS部分</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>    
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>    
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  <span class="token comment">/* justify-content决定了 flex items 整体在主轴上的对齐方式 */</span>  
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>   <span class="token comment">/* align-items决定了 flex item 在cross axis (交叉轴)上的对齐方式 */</span>  
  <span class="token property">min-height</span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span> <span class="token comment">/* 设置元素的最小高度。 */</span>  
<span class="token punctuation">}</span>  

<span class="token selector">.loading</span> <span class="token punctuation">{</span>    
  <span class="token property">max-width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>    
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.4<span class="token punctuation">;</span>  <span class="token comment">/* line-height设置行间的距离（行高） */</span>  
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>    
  <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>  <span class="token comment">/* font-weight 属性设置文本的粗细 */</span>  
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  

<span class="token selector">.loading__author</span> <span class="token punctuation">{</span>    
  <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>    
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.9rem<span class="token punctuation">;</span>    
  <span class="token comment">/* rgba() 函数使用红(R)、绿(G)、蓝(B)、透明度(A)的叠加来生成各式各样的颜色。  
    红色（R）0 到 255 间的整数，代表颜色中的红色成分。。  
    绿色（G）0 到 255 间的整数，代表颜色中的绿色成分。  
    蓝色（B）0 到 255 间的整数，代表颜色中的蓝色成分。  
    透明度（A）取值 0~1 之间， 代表透明度  
  */</span>  
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>189<span class="token punctuation">,</span>189<span class="token punctuation">,</span>189 <span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>    
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.6rem 0 2rem 0<span class="token punctuation">;</span>    
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  

<span class="token selector">.loading__anim</span> <span class="token punctuation">{</span>  
  <span class="token property">width</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>  
  <span class="token property">height</span><span class="token punctuation">:</span> 35px<span class="token punctuation">;</span>  
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>  
  <span class="token property">border</span><span class="token punctuation">:</span> 5px solid <span class="token function">rgba</span><span class="token punctuation">(</span>189<span class="token punctuation">,</span>189<span class="token punctuation">,</span>189 <span class="token punctuation">,</span>0.25<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token property">border-left-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>155<span class="token punctuation">,</span>229 <span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token property">border-top-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span>155<span class="token punctuation">,</span>229 <span class="token punctuation">,</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>  
  <span class="token comment">/* border-radius 属性是一个简写属性，代表的是四个 border-*-radius 属性,   
    border-top-left-radius: ;  
    border-top-right-radius: ;  
    border-bottom-right-radius: ;  
    border-bottom-left-radius: ;  
  */</span>  
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token comment">/* 都变圆50% */</span>  
  <span class="token property">animation</span><span class="token punctuation">:</span> rotate 600ms infinite linear<span class="token punctuation">;</span> <span class="token comment">/* 拿出来后边重点讲 */</span>  
<span class="token punctuation">}</span>  

<span class="token atrule"><span class="token rule">@keyframes</span> rotate</span> <span class="token punctuation">{</span> <span class="token comment">/* 拿出来后边重点讲 */</span>  
  <span class="token selector">to</span> <span class="token punctuation">{</span>  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">rotate</span><span class="token punctuation">(</span>1turn<span class="token punctuation">)</span> <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<ul>
<li>
<p>@keyframes规则<br>
在规则中指定 CSS 样式时，动画将在特定时间逐渐从当前样式更改为新样式。需要注意的是，<code v-pre>@keyframes</code>若要使动画正常工作，必须将动画绑定到元素。<br>
举例：</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>  
  <span class="token property">animation-name</span><span class="token punctuation">:</span> example<span class="token punctuation">;</span> <span class="token comment">/* 绑定动画的名字给@keyframes使用 */</span>  
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 4s<span class="token punctuation">;</span>  
<span class="token punctuation">}</span>  

<span class="token atrule"><span class="token rule">@keyframes</span> example</span> <span class="token punctuation">{</span>  
  <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span><span class="token punctuation">}</span>  
  <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token property">background-color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span><span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>animation 属性</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>  
  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>  
  <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>  
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>  
  <span class="token property">animation</span><span class="token punctuation">:</span> mymove 5s infinite<span class="token punctuation">;</span> <span class="token comment">/* 使用animation 绑定动画给@keyframes使用 */</span>  
<span class="token punctuation">}</span>  

<span class="token atrule"><span class="token rule">@keyframes</span> mymove</span> <span class="token punctuation">{</span>  
  <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token property">left</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>  
  <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token property">left</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span><span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>CSS动画部分是非常重要的知识，<a href="https://www.w3schools.com/css/css3_animations.asp" target="_blank" rel="noopener noreferrer">css动画参考<ExternalLinkIcon/></a></p>
<h2 id="项目结果" tabindex="-1"><a class="header-anchor" href="#项目结果" aria-hidden="true">#</a> 项目结果</h2>
<p>这个项目没什么难点的，就是用到一些css动画。<a href="https://loading.devin.ren/" target="_blank" rel="noopener noreferrer">点击这里预览线上版本<ExternalLinkIcon/></a></p>
<p><img src="https://cdn-media-1.freecodecamp.org/images/W4zbRnaocoYYCf1YLdaAsMdLXnfm7-Dhclyc" alt="预览"></p>
<p>项目的参考地址: https://www.freecodecamp.org/news/how-to-build-a-delightful-loading-screen-in-5-minutes-847991da509f/</p>
</div></template>
