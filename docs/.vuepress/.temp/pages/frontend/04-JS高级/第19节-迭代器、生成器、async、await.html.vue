<template><div><h1 id="迭代器、生成器、async、await" tabindex="-1"><a class="header-anchor" href="#迭代器、生成器、async、await" aria-hidden="true">#</a> 迭代器、生成器、async、await</h1>
<h1 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h1>
<h2 id="什么是迭代器" tabindex="-1"><a class="header-anchor" href="#什么是迭代器" aria-hidden="true">#</a> 什么是迭代器</h2>
<p>通俗点说，迭代器就是一个帮助我们对某个数据结构（比如数组）进行遍历的工具。实质上，迭代器是一个具体的对象，并且这个对象需要实现<code v-pre>迭代器协议</code>。 <strong>实现迭代器协议，就是要实现它的一个next() 函数</strong></p>
<h3 id="next-介绍" tabindex="-1"><a class="header-anchor" href="#next-介绍" aria-hidden="true">#</a> next() 介绍</h3>
<ol>
<li>next() 函数。 它的参数可以 0 个或 1 个，它的返回值是一个包含<code v-pre>done</code>属性和<code v-pre>value</code>属性的对象。（这两个属性很重要）</li>
<li>done(Boolean) 属性。 判断是否耗尽元素（是否迭代完毕）。如果没有迭代完毕，Boolean 值为false, 如果迭代完毕， Boolean 值为true.</li>
<li>value 属性。迭代器获取到的数据。这里任何东西都可以放。</li>
</ol>
<ul>
<li>实现一个迭代器对象的代码演示</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 这个index是为后面遍历作准备的</span>

<span class="token keyword">const</span> arrIterator <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 创建一个专属的迭代器对象</span>
  <span class="token comment">// 迭代器对象要实现迭代器协议，也就是实现next()函数</span>
  <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token comment">// next() 函数的返回值是一个包含done属性和value属性的对象</span>
        <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
        <span class="token literal-property property">value</span><span class="token operator">:</span> arr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {done: false, value: 'a'}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {done: false, value: 'b'}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {done: false, value: '6'}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrIterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// {done: true, value: undefined}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可迭代对象" tabindex="-1"><a class="header-anchor" href="#可迭代对象" aria-hidden="true">#</a> 可迭代对象</h2>
<p>迭代器对象终究是太麻烦，所以引入了新的东西 -&gt; 可迭代对象。</p>
<ol>
<li>可迭代对象的概念：
当一个对象实现可迭代协议的时候，它就是一个可迭代对象。这个对象的要求是必须实现 @@iterator 方法，在代码中我们使用 <code v-pre>Symbol.iterator</code> 访问该属性</li>
</ol>
<p>代码演示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">arr</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'a'</span><span class="token punctuation">,</span> <span class="token string">'b'</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 实现可迭代协议，不可迭代对象info转换为可迭代对象</span>
    <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 箭头函数的this绑定的是父级作用域的</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token comment">// next() 函数的返回值是一个包含done属性和value属性的对象</span>
            <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> 
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span>index<span class="token operator">++</span><span class="token punctuation">]</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">done</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">const</span> i <span class="token keyword">of</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// info 实现了[Symbol.iterator]方法，才能成为可迭代对象，才能使用 for-of。不实现该方法这里会报错</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// a</span>
<span class="token comment">// b</span>
<span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原生的迭代器对象" tabindex="-1"><a class="header-anchor" href="#原生的迭代器对象" aria-hidden="true">#</a> 原生的迭代器对象</h2>
<p>所谓原生的迭代器对象，就是已经实现了可迭代协议，并且是JS的内置对象，直接就能使用for - of 方法的对象。</p>
<ul>
<li>String、Array、Map、Set、arguments对象、NodeList集合</li>
</ul>
<h2 id="迭代器中断时的监听" tabindex="-1"><a class="header-anchor" href="#迭代器中断时的监听" aria-hidden="true">#</a> 迭代器中断时的监听</h2>
<p>迭代器在某些情况下会在没有完全迭代的情况下中断, 比如遍历的过程中通过break、continue等， 如果我们想要监听中断的话，可以添加return() 方法</p>
<p>代码演示：</p>
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310204199.png"/>
</center>
<p>执行结果：</p>
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310206156.png"/>
</center>
<h2 id="迭代器其它东西" tabindex="-1"><a class="header-anchor" href="#迭代器其它东西" aria-hidden="true">#</a> 迭代器其它东西</h2>
<p><strong>需要用时再深入学</strong></p>
<ol>
<li>自定义类的迭代</li>
</ol>
<h1 id="生成器" tabindex="-1"><a class="header-anchor" href="#生成器" aria-hidden="true">#</a> 生成器</h1>
<ol>
<li>生成器是ES6中新增的一种函数控制、使用的方案，它可以让我们更加灵活的控制函数什么时候继续执行、暂停执
行等。<code v-pre>生成器是一种特殊的迭代器</code></li>
<li>生成器函数也是一个函数，但是和普通的函数有一些区别
<ol>
<li>首先，生成器函数需要在function的后面加一个符号：*</li>
<li>其次，生成器函数可以通过yield关键字来控制函数的执行流程：</li>
<li>最后，生成器函数的返回值是一个Generator（生成器）：</li>
</ol>
</li>
</ol>
<p>代码演示：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> value1 <span class="token operator">=</span> <span class="token number">100</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value1<span class="token punctuation">)</span>  
  <span class="token keyword">yield</span> value1

  <span class="token keyword">const</span> value2 <span class="token operator">=</span> <span class="token number">200</span> 
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value2<span class="token punctuation">)</span> 
  <span class="token keyword">yield</span> <span class="token comment">// 这里没有传值，会返回undefined</span>
  
  <span class="token keyword">const</span> value3 <span class="token operator">=</span> <span class="token number">300</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value3<span class="token punctuation">)</span>  
  <span class="token keyword">yield</span> value3

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数执行结束了'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> generator <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 生成一个生成器</span>

<span class="token comment">// 调用next() 可以执行函数中的东西； 如果不希望next返回的是一个undefined，这个时候我们可以通过yield来返回结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>generator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<center><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310217984.png"/></center>
<h2 id="return-函数" tabindex="-1"><a class="header-anchor" href="#return-函数" aria-hidden="true">#</a> return 函数</h2>
<p>可以通过return函数给生成器函数传递参数，return传值后这个生成器函数就会结束，之后调用next不会继续生成值了</p>
<p>代码演示：</p>
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310226955.png"/>
</center>
<p>运行结果：</p>
<center>
  <img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202203310228032.png"/>
</center>
<h2 id="生成器的其它东西" tabindex="-1"><a class="header-anchor" href="#生成器的其它东西" aria-hidden="true">#</a> 生成器的其它东西</h2>
<p><strong>需要用时再深入学</strong></p>
<ol>
<li>通过 next() 传值</li>
<li>抛出异常 – throw函数</li>
<li>替代迭代器</li>
<li>自定义类迭代 – 生成器实现</li>
<li>异步处理</li>
<li>自动执行generator函数</li>
</ol>
<h1 id="async-异步函数" tabindex="-1"><a class="header-anchor" href="#async-异步函数" aria-hidden="true">#</a> async 异步函数</h1>
<ol>
<li>async 关键字用于声明一个异步函数</li>
<li>async 异步函数可以有很多中写法</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>  <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">foo2</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">const</span> <span class="token function-variable function">foo3</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>异步函数的内部代码执行过程和普通的函数是一致的，默认情况下也是会被同步执行,但是在碰到await关键字时会暂停，在执行完await后面的表达式时，才会继续往下执行</li>
<li>异步函数有返回值时，和普通函数会有区别：
情况一：异步函数也可以有返回值，但是异步函数的返回值会被包裹到Promise.resolve中；
情况二：如果我们的异步函数的返回值是Promise，Promise.resolve的状态会由Promise决定；
情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定</li>
<li>如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递</li>
</ol>
<h1 id="await" tabindex="-1"><a class="header-anchor" href="#await" aria-hidden="true">#</a> await</h1>
<ol>
<li>async 函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的</li>
<li>await 关键字有什么特点呢？
通常使用 await 时后面会跟上一个表达式，这个表达式会返回一个Promise;
那么 await 会等到Promise的状态变成fulfilled状态(将Promise执行完毕)，之后再继续执行异步函数</li>
<li>如果 await 后面是一个普通的值，那么会直接返回这个值。实质上是调用Promise.resolve(普通值)</li>
<li>如果 await 后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值</li>
<li>如果 await 后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值</li>
</ol>
<h1 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h1>
<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" rel="noopener noreferrer">MDN 的 async<ExternalLinkIcon/></a><br>
<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await" target="_blank" rel="noopener noreferrer">MDN 的 await<ExternalLinkIcon/></a><br>
coderwhy 深入JS高级<br>
JavaScript 高级程序设计第 4 版 第 7 章</p>
</div></template>
