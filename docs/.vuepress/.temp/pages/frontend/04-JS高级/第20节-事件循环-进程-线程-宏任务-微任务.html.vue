<template><div><h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环" aria-hidden="true">#</a> 事件循环</h1>
<h2 id="进程和线程" tabindex="-1"><a class="header-anchor" href="#进程和线程" aria-hidden="true">#</a> 进程和线程</h2>
<ol>
<li>线程和进程是操作系统中的两个概念：
进程：计算机已经运行的程序，是操作系统管理程序的一种方式
线程：操作系统能够运行运算调度的最小单位，通常情况下它被包含在进程中</li>
<li>理解记忆：
进程： 可以理解为启动一个应用程序，就是默认启动一个进程（也可能是多个进程，这里就当作一个进程，方便解释理解）
线程： 每一个进程中，都会启动至少一个线程来执行程序中的代码，这个线程被称为主线程</li>
</ol>
<ul>
<li>举例理解：
操作系统就i是一个大工厂，
工厂中有很多车间，这个车间就代表的是进程
每个车间中都至少有一个工人在其中，这个工人就代表的是线程</li>
</ul>
<h2 id="浏览器中的-js-线程" tabindex="-1"><a class="header-anchor" href="#浏览器中的-js-线程" aria-hidden="true">#</a> 浏览器中的 JS 线程</h2>
<ol>
<li>JS 是单线程的，JS 的线程应该有自己的容器进程。这个容器就是浏览器或者Node</li>
<li>目前多数的浏览器其实都是多进程的，当我们打开一个tab页面时就会开启一个新的进程，这是为了防止一个页面卡死而造成所有页面无法响应，整个浏览器需要强制退出。每个进程中又有很多的线程，其中包括负责执行JavaScript代码的线程</li>
<li>JavaScript的代码执行是在一个单独的线程中执行的。这就意味着JavaScript的代码，在同一个时刻只能做一件事，如果这件事是非常耗时的，就意味着当前的线程就会被阻塞。</li>
</ol>
<h2 id="浏览器的事件循环" tabindex="-1"><a class="header-anchor" href="#浏览器的事件循环" aria-hidden="true">#</a> 浏览器的事件循环</h2>
<ol>
<li>如果执行 JS 过程中<strong>有异步操作</strong>，会如何执行呢？
比如中间有了一个setTimeout函数调用，那么调用的时候这个函数<strong>会被放入到调用栈中</strong>，该函数也会立即结束，等待后面后执行，并不会阻塞后续代码的执行</li>
</ol>
<h2 id="宏任务和微任务" tabindex="-1"><a class="header-anchor" href="#宏任务和微任务" aria-hidden="true">#</a> 宏任务和微任务</h2>
<ol>
<li>
<p>事件循环中并非只维护着一个队列，事实上是有两个队列：
宏任务队列：ajax、setTimeout、setInterval、DOM监听、UI Rendering等
微任务队列：Promise的then回调、 Mutation Observer API、queueMicrotask()等</p>
</li>
<li>
<p>事件循环对于两个队列的优先级是怎么样的呢？</p>
<ol>
<li>main script中的代码优先执行（编写的顶层script代码）</li>
<li>在执行任何一个宏任务之前（不是队列，是一个宏任务），都会先查看微任务队列中是否有任务需要执行。也就是宏任务执行之前，必须保证微任务队列是空的，如果不为空，那么就优先执行微任务队列中的任务（回调）</li>
</ol>
</li>
</ol>
<h2 id="promise-面试题" tabindex="-1"><a class="header-anchor" href="#promise-面试题" aria-hidden="true">#</a> Promise 面试题</h2>
<ol>
<li>
<p>题一
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204101827921.png"/></p>
</li>
<li>
<p>题二
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204101827948.png"/></p>
</li>
</ol>
<h2 id="node事件循环" tabindex="-1"><a class="header-anchor" href="#node事件循环" aria-hidden="true">#</a> Node事件循环</h2>
<p>跳过</p>
<h2 id="错误处理方案-throw" tabindex="-1"><a class="header-anchor" href="#错误处理方案-throw" aria-hidden="true">#</a> 错误处理方案 throw</h2>
<ol>
<li>throw 语句用于当碰到异常时，抛出一个用户自定义的语句, 当遇到throw语句时，当前的函数执行会被停止（throw后面的语句不会执行）</li>
</ol>
<h3 id="error-类型" tabindex="-1"><a class="header-anchor" href="#error-类型" aria-hidden="true">#</a> Error 类型</h3>
<ol>
<li>JavaScript 给我们提供了一个Error类，可以直接创建这个类的对象用来包裹信息返回。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span>  <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'error message'</span><span class="token punctuation">,</span> <span class="token string">'123'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>
<p>Error包含三个属性:</p>
<ul>
<li>messsage：创建Error对象时传入的message</li>
<li>name：Error的名称，通常和类的名称一致</li>
<li>stack：整个Error的错误信息，包括函数的调用栈，当我们直接打印Error对象时，打印的就是stack</li>
</ul>
</li>
<li>
<p>Error有一些自己的子类:</p>
<ul>
<li>RangeError：下标值越界时使用的错误类型</li>
<li>SyntaxError：解析语法错误时使用的错误类型</li>
<li>TypeError：出现类型错误时，使用的错误类型</li>
</ul>
</li>
</ol>
<h3 id="异常的处理" tabindex="-1"><a class="header-anchor" href="#异常的处理" aria-hidden="true">#</a> 异常的处理</h3>
<ol>
<li>我们会发现在之前的代码中，一个函数抛出了异常，调用它的时候程序会被强制终止：
<ul>
<li>这是因为如果我们在调用一个函数时，这个函数抛出了异常，但是我们并没有对这个异常进行处理，那么这个异常会继续传递到上一个函数调用中</li>
<li>而如果到了最顶层（全局）的代码中依然没有对这个异常的处理代码，这个时候就会报错并且终止程序的运行</li>
</ul>
</li>
<li>我们先来看一下这段代码的异常传递过程：
<ul>
<li>foo函数在被执行时会抛出异常，也就是我们的bar函数会拿到这个异常</li>
<li>但是bar函数并没有对这个异常进行处理，那么这个异常就会被继续传递到调用bar函数的函数，也就是test函数</li>
<li>但是test函数依然没有处理，就会继续传递到我们的全局代码逻辑中</li>
<li>依然没有被处理，这个时候程序会终止执行，后续代码都不会再执行了</li>
</ul>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token string">'这里是错误信息'</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常的捕获" tabindex="-1"><a class="header-anchor" href="#异常的捕获" aria-hidden="true">#</a> 异常的捕获</h3>
<ol>
<li>很多情况下当出现异常时，我们并不希望程序直接推出，而是希望可以正确的处理异常，这个时候我们就可以使用try catch。
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204101845422.png"/></li>
</ol>
<h3 id="finally" tabindex="-1"><a class="header-anchor" href="#finally" aria-hidden="true">#</a> finally</h3>
<p>如果有一些必须要执行的代码，我们可以使用finally来执行, finally表示最终一定会被执行的代码结构.
注意：如果try和finally中都有返回值，那么会使用finally当中的返回值</p>
</div></template>
