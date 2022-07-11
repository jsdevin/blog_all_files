<template><div><h1 id="promise-是异步编程的一种解决方案" tabindex="-1"><a class="header-anchor" href="#promise-是异步编程的一种解决方案" aria-hidden="true">#</a> Promise 是异步编程的一种解决方案</h1>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061622797.png" alt=""></p>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061622412.png" alt=""></p>
<h1 id="promise初体验" tabindex="-1"><a class="header-anchor" href="#promise初体验" aria-hidden="true">#</a> Promise初体验</h1>
<ul>
<li>一个resolve()对应一个then()，resolve()是代表函数，实质上还是得靠then()，可以说resolve()是形式函数，then()是执行函数。这样子做的话，会使得逻辑十分清晰，而且可以避免进入回调地狱。
<ul>
<li>
<p>如果是多次嵌套，可以在then()函数中return下一次的new Promise()函数，在then()函数外执行下一次的then()函数。
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061625623.png" alt=""></p>
</li>
<li>
<p>失败的时候调用reject，reject()对应的函数是catch()</p>
</li>
</ul>
</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061626985.png" alt=""></p>
<h1 id="promise-三种状态" tabindex="-1"><a class="header-anchor" href="#promise-三种状态" aria-hidden="true">#</a> Promise 三种状态</h1>
<ul>
<li>我们开发中有异步操作时，就可以给异步操作包装一个Promise</li>
<li>异步操作之后会有三种状态
<ul>
<li>pending : 等待状态，比如正在进行网络请求，或者定时器没有到时间</li>
<li>fulfill : 满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()</li>
<li>reject : 拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()。</li>
</ul>
</li>
</ul>
<h1 id="promise-链式调用" tabindex="-1"><a class="header-anchor" href="#promise-链式调用" aria-hidden="true">#</a> Promise 链式调用</h1>
<ul>
<li>我们在看 Promise 的流程图时，发现无论是then还是catch都可以返回一个Promise对象</li>
<li>所以，我们的代码其实是可以进行链式调用的</li>
<li>这里我们直接通过Promise包装了一下新的数据，将Promise对象返回了
<ul>
<li>Promise.resolve() : 将数据包装成Promise对象，并且在内部回调了resolve() 函数</li>
<li>Promise.reject() ： 将数据包装成Promise对象，并且在内部回调reject函数</li>
</ul>
</li>
<li>原版写法</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061624727.png" alt=""></p>
<ul>
<li>【简化版一】data代表了第一次setTimeout里面的resolve括号内的内容，后面的Promise.resolve是那一堆的简化写法。</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061629306.png" alt=""></p>
<ul>
<li>【简化版二】在简化版一 的基础上，更加简洁欸，直接把Promise.resolve 省略</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061630692.png" alt=""></p>
<h1 id="promise-all-解决多次访问问题" tabindex="-1"><a class="header-anchor" href="#promise-all-解决多次访问问题" aria-hidden="true">#</a> Promise.all() 解决多次访问问题</h1>
<p><img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/202203061630764.png" alt=""></p>
</div></template>
