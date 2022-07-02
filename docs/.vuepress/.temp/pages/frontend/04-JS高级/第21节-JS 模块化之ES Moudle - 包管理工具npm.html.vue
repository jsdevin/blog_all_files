<template><div><h1 id="js-模块化" tabindex="-1"><a class="header-anchor" href="#js-模块化" aria-hidden="true">#</a> JS 模块化</h1>
<h2 id="什么是模块化" tabindex="-1"><a class="header-anchor" href="#什么是模块化" aria-hidden="true">#</a> 什么是模块化</h2>
<ol>
<li>到底什么是模块化、模块化开发呢？
事实上模块化开发最终的目的是将程序划分成<strong>一个个小的结构</strong>
这个结构中编写属于自己的逻辑代码，<strong>有自己的作用域</strong>，不会影响到其他的结构
这个结构可以将自己希望暴露的<strong>变量、函数、对象</strong>等导出给其结构使用，
也可以通过某种方式，导入另外结构中的变量、函数、对象等
上面说提到的结构，就是模块；按照这种结构划分开发程序的过程，就是模块化开发的过程。</li>
</ol>
<h2 id="为什么需要模块化开发" tabindex="-1"><a class="header-anchor" href="#为什么需要模块化开发" aria-hidden="true">#</a> 为什么需要模块化开发</h2>
<ol>
<li>没有模块化带来了很多的问题：比如命名冲突的问题。在A文件中创建的变量，如果在B文件中重新创建赋值，可能会发生不可预料的后果</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// A.js</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span>

<span class="token comment">// B.js </span>
<span class="token comment">// 在不知道A文件存在flag变量的情况下，重新创建flag变量，并且赋值了相反值</span>
<span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">false</span> 

<span class="token comment">// main.js </span>
<span class="token comment">// 如果main.js 同时引入了A.js和B.js </span>
<span class="token keyword">if</span><span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// flag 会带来不可预料的后果</span>
  <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="commonjs、amd、-cmd" tabindex="-1"><a class="header-anchor" href="#commonjs、amd、-cmd" aria-hidden="true">#</a> CommonJS、AMD、 CMD</h2>
<p>CommonJS 可能还有点用，AMD、CMD 已经淘汰了。现在都是在用 ESMoudle, 这里就直接跳到ESMoudle，需要再回头学CommonJS</p>
<h2 id="esmoudle" tabindex="-1"><a class="header-anchor" href="#esmoudle" aria-hidden="true">#</a> ESMoudle</h2>
<ol>
<li>
<p>ES Module模块采用export和import关键字来实现模块化：
export负责将模块内的内容导出
import负责从其他模块导入内容</p>
</li>
<li>
<p>采用ES Module将自动采用严格模式：use strict</p>
</li>
<li>
<p>export 导出方式很多， import 导入方式也很多，这里只记录推荐使用的。</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 1. 将所有需要导出的标识符，放到export后面的 {}中. 这里的 {} 不表示对象，</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
  name<span class="token punctuation">,</span>
  age
<span class="token punctuation">}</span>

<span class="token comment">// 2. 这里的{}也不是一个对象，里面只是存放导入的标识符列表内容</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>标识符列表<span class="token punctuation">}</span> <span class="token keyword">from</span> '模块
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li>export和import可以结合使用。好处： 将暴露的所有接口放到一个文件中，这样方便指定统一的接口规范，也方便阅读</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> sum <span class="token keyword">as</span> <span class="token constant">B</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./A.js'</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>default 默认导出。 <code v-pre>default export {} </code>. 注意：在一个模块中，只能有一个默认导出（default export）</li>
</ol>
<h3 id="es-moudle-的解析流程-es-moudle原理" tabindex="-1"><a class="header-anchor" href="#es-moudle-的解析流程-es-moudle原理" aria-hidden="true">#</a> ES Moudle 的解析流程（ES Moudle原理）</h3>
<ol>
<li><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" target="_blank" rel="noopener noreferrer">ES Module是如何被浏览器解析并且让模块之间可以相互引用的呢？<ExternalLinkIcon/></a></li>
<li><strong>简单介绍</strong>。 ES Module的解析过程可以划分为三个阶段：
<ul>
<li>阶段一：构建（Construction），根据地址查找js文件，并且下载，将其解析成模块记录（Module Record）</li>
<li>阶段二：实例化（Instantiation），对模块记录进行实例化，并且分配内存空间，解析模块的导入和导出语句，把模块指向对应的内存地址</li>
<li>阶段三：运行（Evaluation），运行代码，计算值，并且将值填充到内存地址中
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204121944884.png" alt=""></li>
</ul>
</li>
</ol>
<h2 id="包管理工具详解" tabindex="-1"><a class="header-anchor" href="#包管理工具详解" aria-hidden="true">#</a> 包管理工具详解</h2>
<p>npm、 yarn、 cnpm、 npx
这部分的笔记太杂，了解就行了，直接下一个，需要使用时回头再看。</p>
</div></template>
