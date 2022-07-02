<template><div><h2 id="promise-是异步编程的一种解决方案" tabindex="-1"><a class="header-anchor" href="#promise-是异步编程的一种解决方案" aria-hidden="true">#</a> Promise 是异步编程的一种解决方案</h2>
<ul>
<li>这里是简单的介绍
<img src="https://api2.mubu.com/v3/document_image/1631091868310ecb5.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/1631091872832f5de.jpg" alt=""></li>
</ul>
<h2 id="promise初体验" tabindex="-1"><a class="header-anchor" href="#promise初体验" aria-hidden="true">#</a> Promise初体验</h2>
<ul>
<li>一个resolve()对应一个then()，resolve()是代表函数，实质上还是得靠then()，可以说resolve()是形式函数，then()是执行函数。这样子做的话，会使得逻辑十分清晰，而且可以避免进入回调地狱。
<ul>
<li>如果是多次嵌套，可以在then()函数中return下一次的new Promise()函数，在then()函数外执行下一次的then()函数。
<img src="https://api2.mubu.com/v3/document_image/0023eced-164e-4e7c-bb12-9716a5292628-11752736.jpg" alt=""></li>
</ul>
</li>
<li>失败的时候调用reject，reject()对应的函数是catch()
<img src="https://api2.mubu.com/v3/document_image/fd1a8d9d-d728-4489-802b-dbe11c9b6faf-11752736.jpg" alt=""></li>
</ul>
<h2 id="promise-三种状态" tabindex="-1"><a class="header-anchor" href="#promise-三种状态" aria-hidden="true">#</a> Promise 三种状态</h2>
<ul>
<li>当我们开发中有异步操作时，就可以给异步操作包装一个Promise</li>
<li>异步操作之后会有三种状态
<ul>
<li>pending : 等待状态，比如正在进行网络请求，或者定时器没有到时间</li>
<li>fulfill : 满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()</li>
<li>reject : 拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()。</li>
</ul>
</li>
</ul>
<h2 id="promise-链式调用" tabindex="-1"><a class="header-anchor" href="#promise-链式调用" aria-hidden="true">#</a> Promise 链式调用</h2>
<ul>
<li>我们在看 Promise 的流程图时，发现无论是then还是catch都可以返回一个Promise对象</li>
<li>所以，我们的代码其实是可以进行链式调用的</li>
<li>这里我们直接通过Promise包装了一下新的数据，将Promise对象返回了
<ul>
<li>Promise.resolve() : 将数据包装成Promise对象，并且在内部回调了resolve() 函数</li>
<li>Promise.reject() ： 将数据包装成Promise对象，并且在内部回调reject函数</li>
</ul>
</li>
<li>原版写法
<img src="https://api2.mubu.com/v3/document_image/811bb4cc-a12d-4058-bf0f-578f4371eec5-11752736.jpg" alt=""></li>
<li>【简化版一】data代表了第一次setTimeout里面的resolve括号内的内容，后面的Promise.resolve是那一堆的简化写法。
<img src="https://api2.mubu.com/v3/document_image/89dbf3a9-aa96-4bc6-89a6-35bb673c5001-11752736.jpg" alt=""></li>
<li>【简化版二】在简化版一 的基础上，更加简洁欸，直接把Promise.resolve 省略
<img src="https://api2.mubu.com/v3/document_image/e6f99fc8-5047-444b-b48e-13e3d7f38718-11752736.jpg" alt=""></li>
</ul>
<h2 id="promise-all-解决多次访问问题" tabindex="-1"><a class="header-anchor" href="#promise-all-解决多次访问问题" aria-hidden="true">#</a> Promise.all() 解决多次访问问题</h2>
<p><img src="https://api2.mubu.com/v3/document_image/f227f440-82be-43d2-95f7-95e3194ee907-11752736.jpg" alt=""></p>
</div></template>
