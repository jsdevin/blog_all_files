<template><div><h1 id="call、apply、bind、promise、async、await、迭代器、生成器、proxy" tabindex="-1"><a class="header-anchor" href="#call、apply、bind、promise、async、await、迭代器、生成器、proxy" aria-hidden="true">#</a> call、apply、bind、Promise、async、await、迭代器、生成器、Proxy</h1>
<h2 id="call、apply" tabindex="-1"><a class="header-anchor" href="#call、apply" aria-hidden="true">#</a> call、apply</h2>
<p>call、apply都是可以绑定this的函数，它们的区别就是接收参数的方式不一样。call接受的是一个参数列表，apply接受的是一个数组
<code v-pre>fn.call(obj, 'a', 'b', 'c')</code>, <code v-pre>fn.apply(obj, ['a', 'b', 'c'])</code>。
上面的代码效果是：截取fn的逻辑，用obj作为fn的新this值，后面的参数作为fn新的传入参数，并执行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 举例：</span>
<span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'aa'</span><span class="token punctuation">,</span> <span class="token string">'bb'</span><span class="token punctuation">,</span> <span class="token string">'cc'</span><span class="token punctuation">]</span>    
<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>    
arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// // 截取arr.push方法逻辑，用res作为其this值去执行，并将后面的数组[1,2,3,4]作为执行参数，执行得到结果</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token comment">// [ 1, 2, 3, 4 ]    </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写call" tabindex="-1"><a class="header-anchor" href="#手写call" aria-hidden="true">#</a> 手写call</h3>
<p>手写call，首先要知到其执行效果是什么，<code v-pre>fn.call(obj, 'a', 'b', 'c')</code>截取fn的逻辑，然后用obj作为新的this值去执行逻辑，并将<code v-pre>'a', 'b', 'c'</code>作为执行参数，执行。
分析执行原理的条件：要有fn, fn要有新this, 要将obj后面的参数作为fn的参数执行。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thisObj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token comment">// 1.要先获得fn。外面的调用方式是fn.myCall()，属于隐式绑定，所以fn就是myCall的this值</span>
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
    
  <span class="token comment">// 看4.1。 执行obj.func(...arg)要确保obj是一个对象，只有对象才有属性，才能使用`.`操作来执行属性.（这个细节要在执行obj.func = fn之前完善）</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> thisObj <span class="token operator">||</span> window
    
  <span class="token comment">// 2.fn要有新this,也就是第一个参数。可以通过先赋值给obj.func,然后通过隐式绑定即obj.func()来绑定fn的新this</span>
  <span class="token comment">// 3.要将obj后面的参数作为fn的执行参数obj.fn(...args)    </span>
  obj<span class="token punctuation">.</span>func <span class="token operator">=</span> fn
  obj<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>    
      
  <span class="token comment">// 4. 细节补充，有两个细节，</span>
    <span class="token comment">// 1）执行obj.func(...arg)要确保obj是一个对象，只有对象才有属性，才能使用`.`操作来执行属性.（这个细节要在执行obj.func = fn之前完善）</span>
    <span class="token comment">// 2）对于myCall内部来说，func这个属性是新增的，原本函数没有这个属性，为了复原也为了干净点还是删了比较好</span>
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>func
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写apply" tabindex="-1"><a class="header-anchor" href="#手写apply" aria-hidden="true">#</a> 手写apply</h3>
<p>apply和call唯一的区别就是传入参数的方式，apply用数组，call用参数列表。所以手写方式内部逻辑是一样的，收集参数的逻辑改改就行。
apply收集参数用数组，所以直接用<code v-pre>function(thisObj, **args**)</code>即可。call用剩余参数语法<code v-pre>...args</code>来收集是因为其传入的是参数列表</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thisObj<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> thisObj <span class="token operator">||</span> window
    
  obj<span class="token punctuation">.</span>func <span class="token operator">=</span> fn
  obj<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>    
      
  <span class="token keyword">delete</span> obj<span class="token punctuation">.</span>func
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="手写bind" tabindex="-1"><a class="header-anchor" href="#手写bind" aria-hidden="true">#</a> 手写bind</h3>
<p>和call、apply不同，bind返回一个函数，传参方式是使用参数列表</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">thisObj<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token keyword">let</span> fn <span class="token operator">=</span> <span class="token keyword">this</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> thisObj <span class="token operator">||</span> window
    
  obj<span class="token punctuation">.</span>func <span class="token operator">=</span> fn
      
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    obj<span class="token punctuation">.</span><span class="token function">func</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>    
  <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手写promise" tabindex="-1"><a class="header-anchor" href="#手写promise" aria-hidden="true">#</a> 手写Promise</h2>
<p>先跳过吧</p>
<h2 id="async-异步函数" tabindex="-1"><a class="header-anchor" href="#async-异步函数" aria-hidden="true">#</a> async 异步函数</h2>
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
<li>异步函数有返回值时，和普通函数会有区别：<br>
情况一：异步函数也可以有返回值，但是异步函数的返回值会被包裹到Promise.resolve中；
情况二：如果我们的异步函数的返回值是Promise，Promise.resolve的状态会由Promise决定；
情况三：如果我们的异步函数的返回值是一个对象并且实现了thenable，那么会由对象的then方法来决定</li>
<li>如果我们在async中抛出了异常，那么程序它并不会像普通函数一样报错，而是会作为Promise的reject来传递</li>
</ol>
<h2 id="await" tabindex="-1"><a class="header-anchor" href="#await" aria-hidden="true">#</a> await</h2>
<ol>
<li>async 函数另外一个特殊之处就是可以在它内部使用await关键字，而普通函数中是不可以的</li>
<li>await 关键字有什么特点呢？
通常使用 await 时后面会跟上一个表达式，这个表达式会返回一个Promise;<br>
那么 await 会等到Promise的状态变成fulfilled状态(将Promise执行完毕)，之后再继续执行异步函数</li>
<li>如果 await 后面是一个普通的值，那么会直接返回这个值。实质上是调用Promise.resolve(普通值)</li>
<li>如果 await 后面是一个thenable的对象，那么会根据对象的then方法调用来决定后续的值</li>
<li>如果 await 后面的表达式，返回的Promise是reject的状态，那么会将这个reject结果直接作为函数的Promise的reject值</li>
</ol>
<h2 id="迭代器和生成器" tabindex="-1"><a class="header-anchor" href="#迭代器和生成器" aria-hidden="true">#</a> 迭代器和生成器</h2>
<p><a href="https://github.com/jsdevin/Study-notes/blob/main/04-JS%E9%AB%98%E7%BA%A7/%E7%AC%AC19%E8%8A%82-%E8%BF%AD%E4%BB%A3%E5%99%A8%E3%80%81%E7%94%9F%E6%88%90%E5%99%A8%E3%80%81async%E3%80%81await.md" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
<h2 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h2>
<p><a href="https://github.com/jsdevin/Study-notes/blob/main/04-JS%E9%AB%98%E7%BA%A7/%E7%AC%AC17%E8%8A%82%20Proxy-Reflect-vue%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.md" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon/></a></p>
</div></template>
