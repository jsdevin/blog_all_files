<template><div><h1 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> arguments</h1>
<h2 id="什么是arguments" tabindex="-1"><a class="header-anchor" href="#什么是arguments" aria-hidden="true">#</a> 什么是arguments ？</h2>
<ul>
<li>arguments 是一个类数组。这意味着它不是数组类型，而是对象类型。</li>
<li>arguments 只有数组中的length、数组下标等特性，而没有数组的一些方法</li>
<li>arguments 在什么位置？
<ul>
<li>在函数的参数那里，是内置的且是隐藏的。如果函数没有定义参数，而外面调用函数的时候又传输值进来，那么就会封装到arguments类数组中。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>	function foo(隐藏的arguments类数组) {
	  ...
	}
	
	//如果执行foo(a,b,c), 那么结果就是arguments = [a,b,c]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="为什么要有arguments" tabindex="-1"><a class="header-anchor" href="#为什么要有arguments" aria-hidden="true">#</a> 为什么要有arguments ？</h2>
<ul>
<li>这是ES6之前的语法了，其实ES6之后推荐使用的箭头函数，箭头函数是没有内置arguments的。ES6之后就不再推荐使用带有arguments的函数了。
<ul>
<li>如果我们在箭头函数中使用arguments，它会去上层作用域查找，如果上层作用域中也没有，就会去上上层作用域查找，直到找到为止。注：最外层作用域也就是全局作用域是有arguments的。</li>
</ul>
</li>
<li>但是我们还是得知道为什么ES6之前要有arguments这种类数组。
<ul>
<li>原因就是为了应付处理参数传输多了的情况。</li>
<li>比如定义的函数只有两个形参，那么应该一次只能传输两个值，但是如果一次传输了四个呢，多了的怎么办？</li>
<li>为了解决这个问题，引进arguments，这时候多了的就会存进arguments.</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>	<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token operator">...</span>
	<span class="token punctuation">}</span>
	
	<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token number">40</span><span class="token punctuation">)</span> <span class="token comment">//执行结果：x=10,y=20,arguments = [30,40]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怎么运用arguments" tabindex="-1"><a class="header-anchor" href="#怎么运用arguments" aria-hidden="true">#</a> 怎么运用arguments ？</h2>
<ul>
<li>将arguments转换为Array
<ul>
<li>1）遍历然后用push封装到一个新的数组中</li>
<li>2）Array.prototype.slice.call(arguments)</li>
<li>3）[].slice.call(arguments)</li>
<li>4）Array.from(arguments)</li>
<li>5）<strong>[ ...arguments ]</strong>  解构方法！最好用的是这个，建议直接使用这个</li>
</ul>
</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/20220112174938.png" alt=""></p>
<h1 id="纯函数" tabindex="-1"><a class="header-anchor" href="#纯函数" aria-hidden="true">#</a> 纯函数</h1>
<ul>
<li>函数式编程中有一个非常重要的概念叫纯函数</li>
</ul>
<h2 id="什么是纯函数" tabindex="-1"><a class="header-anchor" href="#什么是纯函数" aria-hidden="true">#</a> 什么是纯函数？</h2>
<h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h3>
<ul>
<li>确定的输入，就一定会产生确定的输出。</li>
<li>函数在执行的过程中，没有任何副作用。</li>
</ul>
<h3 id="副作用的理解" tabindex="-1"><a class="header-anchor" href="#副作用的理解" aria-hidden="true">#</a> 副作用的理解</h3>
<ul>
<li>在执行一个函数时，除了返回函数值之外，还对调用函数产生了附加的影响，比如修改了全局变量，修改参数或者改变外部的存储等，就叫产生了副作用。</li>
<li>后果：副作用容易产生非常多的bug。</li>
</ul>
<h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3>
<h4 id="例子一" tabindex="-1"><a class="header-anchor" href="#例子一" aria-hidden="true">#</a> 例子一</h4>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/20220112213417.png" alt=""></p>
<ul>
<li>slice是纯函数，因为它不会对原函数造成造成影响；而splice不是纯函数，因为它对原数组进行了修改，当下一次输入同样的输入时，不能产生同样的输出。</li>
</ul>
<h4 id="其它例子" tabindex="-1"><a class="header-anchor" href="#其它例子" aria-hidden="true">#</a> 其它例子</h4>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/20220112214338.png" alt="">
sum是纯函数；add不是纯函数，因为中途foo被改变了，那么同样的输入就得不到同样的输出。printInfo是纯函数。</p>
<h2 id="为什么使用纯函数" tabindex="-1"><a class="header-anchor" href="#为什么使用纯函数" aria-hidden="true">#</a> 为什么使用纯函数？</h2>
<p>纯函数在函数式编程中非常重要，因为我们编写的时候保证了：“同样的输入，必定会得到同样的输出；没有副作用！”。这样子，我们在封装他们的时候，就没有后顾之忧，不需要考虑什么全局变量发生改变等内容。</p>
</div></template>
