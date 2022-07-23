<template><div><h1 id="学习-mvvm-数据劫持的实现" tabindex="-1"><a class="header-anchor" href="#学习-mvvm-数据劫持的实现" aria-hidden="true">#</a> 学习：MVVM 数据劫持的实现</h1>
<h2 id="什么是数据劫持" tabindex="-1"><a class="header-anchor" href="#什么是数据劫持" aria-hidden="true">#</a> 什么是数据劫持？</h2>
<p>数据劫持指的是在访问或者修改对象的某个属性时，除了执行基本的数据获取和修改操作以外，还基于数据的操作行为，以数据为基础去执行额外的操作。</p>
<ul>
<li>
<p>怎么理解呢？举个例子</p>
<p>比如foo对象有一个name属性，我们现在有一个需求，就是每次name值被改变的时候都需要在控制台打印出'name属性被改变了'。</p>
</li>
<li>
<p>例子怎么实现呢？</p>
<p>使用数据劫持就能实现。通过对数据劫持的分析我们可以知道：如果使用数据劫持，在访问或修改对象的属性时，除了可以执行基本的数据获取和修改操作以外,还可以进行一系列额外的操作A。我们在控制台打印值这个需求就能在数据劫持的一系列额外操作A中完成。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'lily'</span>  
<span class="token punctuation">}</span>  

<span class="token comment">// 为了便于理解, 不引入Reflect  </span>
<span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>  
    <span class="token comment">// return Reflect.get(target, key)  </span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token string">'属性被改变了'</span><span class="token punctuation">)</span>  
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> newValue  
    <span class="token comment">// Reflect.set(target, key, newValue)  </span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  

<span class="token keyword">let</span> proxyObj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>foo<span class="token punctuation">,</span> handle<span class="token punctuation">)</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// lily  </span>
proxyObj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'devin'</span> <span class="token comment">// name属性被改变了  </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyObj<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// devin  </span>

<span class="token comment">// 控制台打印结果:  </span>
lily  
name属性被改变了  
devin  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="为什么要有数据劫持" tabindex="-1"><a class="header-anchor" href="#为什么要有数据劫持" aria-hidden="true">#</a> 为什么要有数据劫持？</h2>
<p>为了实现响应式!! 响应式的基础就是数据劫持,只有实现了数据劫持,才能将数据变成动态变化的响应式.</p>
<ul>
<li>
<p>怎么理解呢?<br>
proxy代理data接收数据，然后通过reflect映射给data；然后，当有获取Data数据时，Proxy会将get操作拦截下来，再通过reflect映射出data的真实数据。<br>
解读: 每当数据data发生变化, proxy代理器都会通过set捕获器将数据改变后Reflect映射到data中, 当下一次需要获取data数据时, 就会Reflect映射出data的最新值.<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207210052284.png" alt="proxy"></p>
<p>我们知道在前端页面渲染中，最经典的触发渲染方案必然是<strong>基于事件机制</strong>实现，这种实现渲染的方案有个很大的闭端就是需要通过事件监听机制触发JS事件，然后JS通过document获取需要<strong>重新渲染的DOM</strong>，然后在js的DOM模型上修改数据触发document渲染页面。<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207210049728.png" alt="前端页面渲染"></p>
<p>在浏览器中document只是提供给JS操作文档模型的接口，双方通讯通道资源有限，基于事件机制触发页面渲染会消耗这个这个通道的大量资源，降低浏览器性能，下面来看看基于数据劫持实现数渲染的模型图（JS与document通讯仅仅只需要一次，而且基于虚拟DOM的支持还可以实现最精准的DOM渲染）：<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207210050964.png" alt="浏览器"></p>
</li>
</ul>
<h2 id="怎么实现数据劫持" tabindex="-1"><a class="header-anchor" href="#怎么实现数据劫持" aria-hidden="true">#</a> 怎么实现数据劫持?</h2>
<h3 id="劫持数组" tabindex="-1"><a class="header-anchor" href="#劫持数组" aria-hidden="true">#</a> 劫持数组</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>  
<span class="token keyword">const</span> handle <span class="token operator">=</span> <span class="token punctuation">{</span>  
  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持数组, 调用了get()'</span><span class="token punctuation">)</span>  
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>  
  <span class="token punctuation">}</span><span class="token punctuation">,</span>  
  <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持数组, 调用了set()'</span><span class="token punctuation">)</span>  
    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 会将数据(target.key的值)修改后重新映射到target对象中  </span>
  <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">const</span> arrProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> handle<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// new Proxy() 返回值的类型是对象.  </span>
  
arrProxy<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">66</span><span class="token punctuation">;</span>  
arrProxy<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">9999</span><span class="token punctuation">;</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arrProxy<span class="token punctuation">)</span> <span class="token comment">// Proxy {0: 66, 1: 9999}   </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果:</p>
<blockquote>
<p>劫持数组, 调用了set()<br>
劫持数组, 调用了set()<br>
Proxy {0: 66, 1: 9999}</p>
</blockquote>
<h3 id="劫持对象" tabindex="-1"><a class="header-anchor" href="#劫持对象" aria-hidden="true">#</a> 劫持对象</h3>
<p>需要深度遍历对象的每个属性, 因为可能对象的属性的属性值也是对象. 当对象的属性是深度嵌套的时候，只会触发 getter，并不会触发setter，所以需要对深度嵌套的属性进一步使用 proxy</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>onst toProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// WeakMap的 key是对象, value是任意值  </span>
<span class="token keyword">const</span> toRaw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  
<span class="token keyword">const</span> <span class="token function-variable function">isObject</span> <span class="token operator">=</span> <span class="token parameter">val</span> <span class="token operator">=></span> <span class="token keyword">typeof</span> val <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">&amp;&amp;</span> val <span class="token operator">!==</span> <span class="token keyword">null</span>  
<span class="token keyword">const</span> handle2 <span class="token operator">=</span> <span class="token punctuation">{</span>  
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">const</span> res <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>  
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isObject</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
            <span class="token keyword">return</span> <span class="token function">reactive</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>  
        <span class="token punctuation">}</span>  
  
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持对象, 调用了get()'</span><span class="token punctuation">)</span>  
        <span class="token keyword">return</span> res  
    <span class="token punctuation">}</span><span class="token punctuation">,</span>  
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'劫持对象, 调用了set()'</span><span class="token punctuation">)</span>  
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
  
<span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
    <span class="token keyword">const</span> res <span class="token operator">=</span> toProxy<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> res  
    <span class="token punctuation">}</span>  
    <span class="token keyword">if</span> <span class="token punctuation">(</span>toRaw<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">return</span> target  
    <span class="token punctuation">}</span>  
  
    <span class="token keyword">const</span> observed <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> handle2<span class="token punctuation">)</span>  
    toProxy<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> observed<span class="token punctuation">)</span>  
    toRaw<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>observed<span class="token punctuation">,</span> target<span class="token punctuation">)</span>  
    <span class="token keyword">return</span> observed  
<span class="token punctuation">}</span>  
  
<span class="token keyword">const</span> test <span class="token operator">=</span> <span class="token punctuation">{</span>  
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>  
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>  
        <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span>  
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>  
<span class="token keyword">const</span> testProxy <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span>  
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>testProxy<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token punctuation">)</span>  
testProxy<span class="token punctuation">.</span>b<span class="token punctuation">.</span>d <span class="token operator">=</span> <span class="token number">3</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印结果:</p>
<blockquote>
<p>劫持对象, 调用了get()<br>
abc<br>
劫持对象, 调用了set()</p>
</blockquote>
<p><strong>参考文章</strong>:</p>
<p><a href="https://github.com/jsdevin/Study-notes/blob/main/04-JS%E9%AB%98%E7%BA%A7/%E7%AC%AC17%E8%8A%82%20Proxy-Reflect-vue%E5%93%8D%E5%BA%94%E5%BC%8F%E5%8E%9F%E7%90%86.md" target="_blank" rel="noopener noreferrer">参考1: 学习使用Proxy-Reflect<ExternalLinkIcon/></a><br>
<a href="https://zhuanlan.zhihu.com/p/47041290#tocbar--1aqj2ue" target="_blank" rel="noopener noreferrer">参考2: 什么是数据劫持? 为什么要有数据劫持?<ExternalLinkIcon/></a><br>
<a href="https://zhuanlan.zhihu.com/p/60791215" target="_blank" rel="noopener noreferrer">参考3: 什么是数据劫持? 为什么要有数据劫持?<ExternalLinkIcon/></a><br>
<a href="https://www.cnblogs.com/yangzhou33/p/13772074.html" target="_blank" rel="noopener noreferrer">参考4: 实现数据劫持?<ExternalLinkIcon/></a><br>
<a href="https://www.cnblogs.com/ZheOneAndOnly/p/11404109.html#tocbar-1m42r84" target="_blank" rel="noopener noreferrer">参考5: 实现数据劫持?<ExternalLinkIcon/></a></p>
</div></template>
