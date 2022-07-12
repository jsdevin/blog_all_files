<template><div><h1 id="闭包、模块化、防抖、节流、继承" tabindex="-1"><a class="header-anchor" href="#闭包、模块化、防抖、节流、继承" aria-hidden="true">#</a> 闭包、模块化、防抖、节流、继承</h1>
<h2 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h2>
<p>定义：一个函数如果 能够 访问到外层作用域的变量，那么就认为这个函数是一个闭包。广泛地来说，js中所有函数都是闭包，因为所有函数都能访问最外层的全局(GO)作用域。
<a href="https://blog.csdn.net/weixin_43789897/article/details/85210069" target="_blank" rel="noopener noreferrer">大佬关于闭包的解析<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span>
    
  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">{</span>    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>    
  <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经典面试题，循环中使用闭包解决var定义函数的问题</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> i <span class="token punctuation">)</span><span class="token punctuation">;</span>     
  <span class="token punctuation">}</span><span class="token punctuation">,</span> i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>    
<span class="token comment">// 结果：6 6 6 6 6</span>
<span class="token comment">// 原因：setTimeout是异步函数，它会等主线程上的所有代码执行完毕，然后才会执行异步函数。不理解可以看上面大佬的解析</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法1 - 使用闭包：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>     
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> i <span class="token punctuation">)</span><span class="token punctuation">;</span>     
    <span class="token punctuation">}</span><span class="token punctuation">,</span> i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">)</span>    
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>    
<span class="token punctuation">}</span>    
<span class="token comment">// 结果：1 2 3 4 5</span>
<span class="token comment">// 解析：在setTimeout外面套一层函数A，A和for循环都是在主线程中执行的，那么就会依次执行每一个i的情况。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法二 - 使用setTimeout()的第二个参数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
 <span class="token function">setTimeout</span><span class="token punctuation">(</span> <span class="token keyword">function</span> <span class="token function">timer</span><span class="token punctuation">(</span><span class="token parameter">j</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> j <span class="token punctuation">)</span><span class="token punctuation">;</span>    
 <span class="token punctuation">}</span><span class="token punctuation">,</span> i<span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法三 - 使用let</p>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>
<p><a href="https://juejin.cn/post/6844903744518389768#heading-38" target="_blank" rel="noopener noreferrer">模块化详解<ExternalLinkIcon/></a></p>
<ol>
<li>什么是模块化？
将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信</li>
<li>模块化有什么好处？
避免命名冲突(减少命名空间污染)、更好的分离, 按需加载、更高复用性、高可维护性</li>
<li>CommonJS 和 ES6 二者模块化的区别：
<ul>
<li>前者⽀持动态导⼊，也就是 require(${path}/xx.js) ，后者⽬前不⽀持，但是已有提案</li>
<li>前者是同步导⼊，因为⽤于服务端，⽂件都在本地，同步导⼊即使卡住主线程影响也不⼤。⽽后者是异步导⼊，因为⽤于浏览器，需要下载⽂件，如果也采⽤同步导⼊会对渲染有很⼤影响</li>
<li>前者在导出时都是值拷⻉，就算导出的值变了，导⼊的值也不会改变，所以如果想更新值，必须重新导⼊⼀次。但是后者采⽤实时绑定的⽅式，导⼊导出的值都指向同⼀个内存地址，所以导⼊值会跟随导出值变化</li>
</ul>
</li>
</ol>
<h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2>
<p>防抖的定义：所谓防抖，就是指触发事件后 n 秒后才执行函数，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。（类似LOL中回城技能，有人打断就要重新计时）</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 手写防抖</span>
<span class="token keyword">const</span> <span class="token function-variable function">debounce</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> waitTime</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// fn是要进行防抖的函数，waitTime 是延迟执行的时间</span>
  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">// 做清除前一个setTimeout的操作</span>
    
  <span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token comment">// 终止条件</span>
    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>     
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token comment">// 显式绑定this, 将fn的this绑定为foo</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> waitTime<span class="token punctuation">)</span>    
  <span class="token punctuation">}</span>    
    
  <span class="token keyword">return</span> foo
<span class="token punctuation">}</span>    
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2>
<p>定义：规定在一个单位时间内，只能执行一次函数。如果这个函数单位时间内触发多次函数，只有一次生效。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token keyword">var</span> context<span class="token punctuation">,</span> args<span class="token punctuation">,</span> result<span class="token punctuation">;</span>    
  <span class="token keyword">var</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    
  <span class="token comment">// 之前的时间戳</span>
  <span class="token keyword">var</span> previous <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>    
  <span class="token comment">// 如果 options 没传则设为空对象</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">)</span> options <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>    
  <span class="token comment">// 定时器回调函数</span>
  <span class="token keyword">var</span> <span class="token function-variable function">later</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token comment">// 如果设置了 leading，就将 previous 设为 0</span>
    <span class="token comment">// ⽤于下⾯函数的第⼀个 if 判断</span>
    previous <span class="token operator">=</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> _<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token comment">// 置空⼀是为了防⽌内存泄漏，⼆是为了下⾯的定时器判断</span>
    timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    
    result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    
  <span class="token punctuation">}</span><span class="token punctuation">;</span>    
    
  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token comment">// 获得当前时间戳</span>
    <span class="token keyword">var</span> now <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token comment">// ⾸次进⼊前者肯定为 true</span>
    <span class="token comment">// 如果需要第⼀次不执⾏函数</span>
    <span class="token comment">// 就将上次时间戳设为当前的</span>
    <span class="token comment">// 这样在接下来计算 remaining 的值时会⼤于0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>previous <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>leading <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">)</span> previous <span class="token operator">=</span> now<span class="token punctuation">;</span>    
    <span class="token comment">// 计算剩余时间</span>
    <span class="token keyword">var</span> remaining <span class="token operator">=</span> wait <span class="token operator">-</span> <span class="token punctuation">(</span>now <span class="token operator">-</span> previous<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    context <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>    
    args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>    
    <span class="token comment">// 如果当前调⽤已经⼤于上次调⽤时间 + wait</span>
    <span class="token comment">// 或者⽤户⼿动调了时间</span>
    <span class="token comment">// 如果设置了 trailing，只会进⼊这个条件</span>
    <span class="token comment">// 如果没有设置 leading，那么第⼀次会进⼊这个条件</span>
    <span class="token comment">// 还有⼀点，你可能会觉得开启了定时器那么应该不会进⼊这个 if 条件了</span>
    <span class="token comment">// 其实还是会进⼊的，因为定时器的延时</span>
    <span class="token comment">// 并不是准确的时间，很可能你设置了2秒</span>
    <span class="token comment">// 但是他需要2.2秒才触发，这时候就会进⼊这个条件</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>remaining <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> remaining <span class="token operator">></span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
      <span class="token comment">// 如果存在定时器就清理掉否则会调⽤⼆次回调</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>    
      timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    
      <span class="token punctuation">}</span>    
      previous <span class="token operator">=</span> now<span class="token punctuation">;</span>    
      result <span class="token operator">=</span> <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>    
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout<span class="token punctuation">)</span> context <span class="token operator">=</span> args <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timeout <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>trailing <span class="token operator">!==</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
      <span class="token comment">// 判断是否设置了定时器和 trailing</span>
      <span class="token comment">// 没有的话就开启⼀个定时器</span>
      <span class="token comment">// 并且不能不能同时设置 leading 和 trailing</span>
      timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>later<span class="token punctuation">,</span> remaining<span class="token punctuation">)</span><span class="token punctuation">;</span>    
    <span class="token punctuation">}</span>    
        
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>    
  <span class="token punctuation">}</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span><span class="token punctuation">;</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h2>
<p>ES5 - 用原型链来实现</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">MyData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
<span class="token punctuation">}</span>    
<span class="token class-name">MyData</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">test</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
<span class="token punctuation">}</span>    
<span class="token keyword">let</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>    
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span> <span class="token class-name">MyData</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>    
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token class-name">MyData</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">Date</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>    
<span class="token comment">// Object.setPrototypeOf(obj, obj2.prototype) 方法的作用是设置一个指定的对象的原型到另一个对象.这里的效果是将obj指向原型对象的指针指向obj2.prototype对象。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解析：
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206040053817.png" alt=""></p>
<p>ES6 - 用 extends 即可
<code v-pre>class MyData extends Date</code></p>
</div></template>
