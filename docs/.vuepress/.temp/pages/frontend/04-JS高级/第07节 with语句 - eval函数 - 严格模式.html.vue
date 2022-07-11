<template><div><h1 id="with语句" tabindex="-1"><a class="header-anchor" href="#with语句" aria-hidden="true">#</a> with语句</h1>
<ul>
<li><strong>不建议使用，知道有这么个东西就行。</strong></li>
<li>with语句 可能导致混淆错误和兼容性问题。</li>
<li>with语句 扩展一个语句的作用域链。</li>
</ul>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/20d1511ece77434d8cef1602bef51aad~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<h1 id="eval函数" tabindex="-1"><a class="header-anchor" href="#eval函数" aria-hidden="true">#</a> eval函数</h1>
<ul>
<li><strong>不建议使用，知道这么个东西就行。</strong></li>
<li>eval代码的可读性非常的差</li>
<li>eval是一个字符串，那么有可能在执行的过程中被刻意篡改，那么可能会造成被攻击的风险</li>
<li>eval的执行必须经过JS解释器，不能被JS引擎优化；</li>
</ul>
<ol>
<li>eval是一个特殊的函数，它可以将传入的字符串当做JavaScript代码来运行</li>
</ol>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/89b03f63f6d747f3a1bf1da2982719a6~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<h1 id="严格模式" tabindex="-1"><a class="header-anchor" href="#严格模式" aria-hidden="true">#</a> 严格模式</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<ul>
<li>JavaScript在设计之初，为了方便初学者学习，并不强制要求用var申明变量。这个设计错误带来了严重的后果 : 如果一个变量没有通过var申明就被使用，那么该变量就自动被申明为全局变量 :</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>i=10; // i现在是全局变量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>在同一个页面的不同的JavaScript文件中，如果都不用 var申明，恰好都使用了变量i，将造成变量i互相影响，产生难以调试的错误结果。</li>
<li>使用var申明的变量则不是全局变量，它的范围被限制在该变量被申明的函数体内，同名变量在不同的函数体内互不冲突。</li>
<li>为了修补JavaScript这一严重设计缺陷，ECMA在后续规范中推出了strict模式，</li>
<li>在strict模式下运行的JavaScript代码，强制通过var申明变量，未使用var申明变量就使用的，将导致运行错误。</li>
<li>启用strict模式的方法是在JavaScript代码的第一行写上:  'use strict' ;</li>
<li>这是一个字符串，不支持strict模式的浏览器会把它当做一个字符串语句执行，支持strict模式的浏览器将开启strict模式运行JavaScript</li>
</ul>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2>
<ul>
<li>严格模式很好理解，是一种具有限制性的JavaScript模式，从而使代码隐式的脱离了 “懒散（sloppy）模式”。</li>
<li>支持严格模式的浏览器在检测到代码中有严格模式时，会以更加严格的方式对代码进行检测和执行；</li>
</ul>
<ol>
<li>严格模式对正常的JavaScript语义进行了一些限制：
<ul>
<li>严格模式通过 抛出错误 来消除一些原有的 静默（silent）错误；</li>
<li>严格模式让JS引擎在执行代码时可以进行更多的优化（不需要对一些特殊的语法进行处理）；</li>
<li>严格模式禁用了在ECMAScript未来版本中可能会定义的一些语法；</li>
</ul>
</li>
</ol>
<h2 id="开启严格模式" tabindex="-1"><a class="header-anchor" href="#开启严格模式" aria-hidden="true">#</a> 开启严格模式</h2>
<h4 id="在js文件中开启" tabindex="-1"><a class="header-anchor" href="#在js文件中开启" aria-hidden="true">#</a> 在js文件中开启</h4>
<ul>
<li>在文件最上方输入 'use strict'</li>
</ul>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc00bf382719463ca18715ceb19fa953~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<h4 id="在某个函数中开启" tabindex="-1"><a class="header-anchor" href="#在某个函数中开启" aria-hidden="true">#</a> 在某个函数中开启</h4>
<ul>
<li>在函数最上方输入 'use strict'</li>
</ul>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97bee6fbd35143f0a705c50bb38da165~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<h2 id="严格模式的限制" tabindex="-1"><a class="header-anchor" href="#严格模式的限制" aria-hidden="true">#</a> 严格模式的限制</h2>
<ol>
<li>无法意外的创建全局变量</li>
<li>严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常</li>
<li>严格模式下试图删除不可删除的属性</li>
<li>严格模式不允许函数参数有相同的名称</li>
<li>不允许0的八进制语法</li>
<li>在严格模式下，不允许使用with</li>
<li>在严格模式下，eval不再为上层引用变量</li>
<li>严格模式下，this绑定不会默认转成对象</li>
</ol>
</div></template>
