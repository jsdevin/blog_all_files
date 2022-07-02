<template><div><h1 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> JSON</h1>
<h2 id="什么是-json" tabindex="-1"><a class="header-anchor" href="#什么是-json" aria-hidden="true">#</a> 什么是 json</h2>
<p>json 是一种非常重要的数据(文件)格式，是一种可以在服务器和客户端之间传输的数据格式。</p>
<h2 id="怎么使用-json" tabindex="-1"><a class="header-anchor" href="#怎么使用-json" aria-hidden="true">#</a> 怎么使用 json</h2>
<ol>
<li>JSON的顶层支持三种类型的值:
简单值：数字（Number）、字符串（String，不支持单引号）、布尔类型（Boolean）、null类型
对象值：由key、value组成，key是字符串类型，并且必须添加双引号，值可以是简单值、对象值、数组值；
数组值：数组的值可以是简单值、对象值、数组值；</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 简单值</span>
<span class="token number">123</span>
<span class="token string">"aaa"</span>

<span class="token comment">// 对象值</span>
<span class="token punctuation">{</span>
  <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"jsdevin"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"age"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span>
  <span class="token string-property property">"friend"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"ddd"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 数组值</span>
<span class="token punctuation">[</span>
  <span class="token number">123</span><span class="token punctuation">,</span>
  <span class="token string">"aaa"</span>
  <span class="token punctuation">{</span>
    <span class="token string-property property">"name"</span><span class="token operator">:</span> <span class="token string">"jsdevin"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="json-序列化-js复杂类型-json-字符串" tabindex="-1"><a class="header-anchor" href="#json-序列化-js复杂类型-json-字符串" aria-hidden="true">#</a> json 序列化 （JS复杂类型 &lt;-&gt; json 字符串）</h2>
<ol>
<li>stringify方法：将JavaScript类型转成对应的JSON字符串</li>
<li>parse方法：解析JSON字符串，转回对应的JavaScript类型</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'devin'</span>
<span class="token punctuation">}</span>

<span class="token comment">// 1. 将js中的对象类型转换为json中的字符串类型</span>
<span class="token keyword">const</span> objString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">'info'</span><span class="token punctuation">,</span> objString<span class="token punctuation">)</span> <span class="token comment">// localStorage.setItem(key,value)：将value存储到key字段</span>

<span class="token comment">// 2. 获取json字符串，然后将之转换为对象</span>
<span class="token comment">// localStorage.getItem(key):获取指定key本地存储的值 </span>
<span class="token keyword">const</span> itemString <span class="token operator">=</span> localStorage<span class="token punctuation">.</span><span class="token function">getItem</span><span class="token punctuation">(</span><span class="token string">"info"</span><span class="token punctuation">)</span> 
<span class="token keyword">const</span> info <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>itemString<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">)</span> 

<span class="token comment">// 运行结果： {name: 'devin'}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>
<p>Stringify 的参数 <strong>replace</strong>。JSON.stringify() 方法将一个 JavaScript 对象或值转换为 JSON 字符串，如果指定了一个 replacer 函数，则可以选择性地替换值，如果指定的 replacer 是数组，则可选择性地仅包含数组指定的属性
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122123982.png" alt=""></p>
</li>
<li>
<p>Stringify的参数 <strong>space</strong> 。 Stringify的第三个参数是 space。</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'devin'</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> objString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objString<span class="token punctuation">)</span> 

<span class="token comment">// 结果： {"name": "devin"}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果对象本身包含toJSON方法，那么会直接使用toJSON方法的结果:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'devin'</span><span class="token punctuation">,</span> 
  <span class="token function-variable function">toJSON</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"dddd"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 将js中的对象类型转换为json中的字符串类型</span>
<span class="token keyword">const</span> objString <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>objString<span class="token punctuation">)</span>  <span class="token comment">// "dddd"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>
<p>parse方法。JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象。提供可选的 reviver 函数用以在返回之前对所得到的对象执行变换(操作)
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122136782.png"/></p>
</li>
<li>
<p>影响: 使用JSON序列化，我们生成的新对象和之前的对象并不是同一个对象，相当于是进行了一次深拷贝。
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122139136.png"/></p>
</li>
</ol>
<h1 id="storage" tabindex="-1"><a class="header-anchor" href="#storage" aria-hidden="true">#</a> Storage</h1>
<h2 id="什么是-storage" tabindex="-1"><a class="header-anchor" href="#什么是-storage" aria-hidden="true">#</a> 什么是 Storage</h2>
<ol>
<li>WebStorage 要提供了一种机制，可以让浏览器提供一种比cookie更直观的key、value存储方式:
<ul>
<li>localStorage：本地存储，提供的是一种永久性的存储方法，在关闭掉网页重新打开时，存储的内容依然保留</li>
<li>sessionStorage：会话存储，提供的是本次会话的存储，在关闭掉会话时，存储的内容会被清除
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122219030.png"/></li>
</ul>
</li>
</ol>
<h2 id="localstorage-和-sessionstorage的区别" tabindex="-1"><a class="header-anchor" href="#localstorage-和-sessionstorage的区别" aria-hidden="true">#</a> localStorage 和 sessionStorage的区别</h2>
<ol>
<li>关闭网页后重新打开，localStorage会保留，而sessionStorage会被删除</li>
<li>在页面内实现跳转，localStorage会保留，sessionStorage也会保留</li>
<li>在页面外实现跳转（打开新的网页），localStorage会保留，sessionStorage不会被保留</li>
</ol>
<h2 id="storage常见的方法和属性" tabindex="-1"><a class="header-anchor" href="#storage常见的方法和属性" aria-hidden="true">#</a> Storage常见的方法和属性</h2>
<ol>
<li>Storage.length：只读属性。返回一个整数，表示存储在Storage对象中的数据项数量</li>
<li>Storage.key()：该方法接受一个数值n作为参数，返回存储中的第n个key名称</li>
<li>Storage.getItem()：该方法接受一个key作为参数，并且返回key对应的value；</li>
<li>Storage.setItem()：该方法接受一个key和value，并且将会把key和value添加到存储中。如果key存储，则更新其对应的值；</li>
<li>Storage.removeItem()：该方法接受一个key作为参数，并把该key从存储中删除；</li>
<li>Storage.clear()：该方法的作用是清空存储中的所有key</li>
</ol>
<h1 id="indexdb" tabindex="-1"><a class="header-anchor" href="#indexdb" aria-hidden="true">#</a> IndexDB</h1>
<h2 id="认识indexeddb" tabindex="-1"><a class="header-anchor" href="#认识indexeddb" aria-hidden="true">#</a> 认识indexedDB</h2>
<ol>
<li>indexedDB 是什么
我们能看到DB这个词，就说明它其实是一种数据库（Database），通常情况下在服务器端比较常见；<br>
在实际的开发中，大量的数据都是存储在数据库的，客户端主要是请求这些数据并且展示；<br>
有时候我们可能会存储一些简单的数据到本地（浏览器中），比如token、用户名、密码、用户信息等，比较少存储大量的数据；<br>
那么如果确实<strong>有大量的数据需要存储</strong>，这个时候可以选择使用IndexedDB</li>
<li>IndexedDB是一种底层的API，用于在客户端存储大量的结构化数据。
它是一种事务型数据库系统，是一种基于JavaScript面向对象数据库，有点类似于NoSQL（非关系型数据库）
IndexDB本身就是基于事务的，我们只需要指定数据库模式，打开与数据库的连接，然后检索和更新一系列事务即可</li>
</ol>
<h2 id="indexdb-的连接数据库" tabindex="-1"><a class="header-anchor" href="#indexdb-的连接数据库" aria-hidden="true">#</a> indexDB 的连接数据库</h2>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122247892.png"/>
<h2 id="indexeddb的数据库操作" tabindex="-1"><a class="header-anchor" href="#indexeddb的数据库操作" aria-hidden="true">#</a> IndexedDB的数据库操作</h2>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122248180.png"/>
<h1 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie" aria-hidden="true">#</a> Cookie</h1>
<h2 id="认识cookie" tabindex="-1"><a class="header-anchor" href="#认识cookie" aria-hidden="true">#</a> 认识Cookie</h2>
<ol>
<li>
<p>Cookie（复数形态Cookies），类型为“小型文本文件，某些网站为了辨别用户身份而存储在用户本地终端
（Client Side）上的数据。浏览器会在特定的情况下携带上cookie来发送请求，我们可以通过cookie来获取一些信息</p>
</li>
<li>
<p>Cookie总是保存在客户端中，按在客户端中的存储位置，Cookie可以分为内存Cookie和硬盘Cookie</p>
<ul>
<li>内存Cookie由浏览器维护，保存在内存中，浏览器关闭时Cookie就会消失，其存在时间是短暂的</li>
<li>硬盘Cookie保存在硬盘中，有一个过期时间，用户手动清理或者过期时间到时，才会被清理</li>
</ul>
</li>
<li>
<p>如果判断一个cookie是内存cookie还是硬盘cookie呢？</p>
<ul>
<li>没有设置过期时间，默认情况下cookie是内存cookie，在关闭浏览器时会自动删除</li>
<li>有设置过期时间，并且过期时间不为0或者负数的cookie，是硬盘cookie，需要手动或者到期时，才会删除
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204122233463.png"/></li>
</ul>
</li>
</ol>
<h2 id="cookie常见的属性" tabindex="-1"><a class="header-anchor" href="#cookie常见的属性" aria-hidden="true">#</a> cookie常见的属性</h2>
<ol>
<li>cookie的生命周期： 默认情况下的cookie是内存cookie，也称之为会话cookie，也就是在浏览器关闭时会自动被删除。我们可以通过设置expires或者max-age来设置过期的时间。
<ul>
<li>expires：设置的是Date.toUTCString()，设置格式是;expires=date-in-GMTString-format</li>
<li>max-age：设置过期的秒钟，;max-age=max-age-in-seconds (例如一年为60<em>60</em>24*365)</li>
</ul>
</li>
<li>cookie的作用域：（允许cookie发送给哪些URL）
<ul>
<li>Domain：指定哪些主机可以接受cookie。如果不指定，那么默认是 origin，不包括子域名。如果指定Domain，则包含子域名。例如，如果设置 Domain=mozilla.org，则 Cookie 也包含在子域名中（如developer.mozilla.org）</li>
<li>Path：指定主机下哪些路径可以接受cookie。例如，设置 Path=/docs，则以下地址都会匹配：<code v-pre>/docs</code> 、 <code v-pre>/docs/Web/</code>、 <code v-pre>/docs/Web/HTTP</code></li>
</ul>
</li>
</ol>
<h2 id="客户端设置cookie" tabindex="-1"><a class="header-anchor" href="#客户端设置cookie" aria-hidden="true">#</a> 客户端设置cookie</h2>
<ol>
<li>js直接设置和获取cookie：<code v-pre>console.log(document.cookie)</code></li>
<li>这个cookie会在会话关闭时被删除掉：</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"name=devin"</span>
document<span class="token punctuation">.</span>cookie <span class="token operator">=</span> <span class="token string">"age=18"</span>
<span class="token comment">// 设置过期时间就是本地cookie，不设置就是内存cookie</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>设置cookie，同时设置过期时间（默认单位为秒数）<code v-pre>document.cookie = &quot;name=devin;max-age=10&quot;</code></li>
</ol>
<p>学习自 coderwhy !!</p>
</div></template>
