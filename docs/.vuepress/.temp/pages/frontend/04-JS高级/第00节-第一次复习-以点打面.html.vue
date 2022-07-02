<template><div><ol>
<li>浏览器工作原理:
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a78e00a08d02412081c9682cb5ef5921~tplv-k3u1fbpfcp-zoom-1.image" alt="">
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fc16184cad044e20a43cd00efcd5208e~tplv-k3u1fbpfcp-zoom-1.image" alt=""></li>
</ol>
<ul>
<li>v8 引擎
<img src="https://img-blog.csdnimg.cn/img_convert/818528e143e97e3767116e62a42b9acd.png" alt=""></li>
</ul>
<ol start="2">
<li>
<p>JS 代码的的执行原理：
js引擎在代码执行前会在堆内存中创建一个初始化全局对象GO<a href="https://www.wolai.com/opLa1X12opMnewvBqfLCUa" target="_blank" rel="noopener noreferrer">（GO有三个特点）<ExternalLinkIcon/></a>。js引擎中有一个执行上下文栈ECS , ECS中执行的是全局代码块，全局代码块为了执行会创建一个全局执行上下文GEC，GEC会被放入到ECS中执行<a href="https://www.wolai.com/hhCJYFJzvg9kd85dx3iP21" target="_blank" rel="noopener noreferrer">（GEC被放入到ECS中包含两部分内容）<ExternalLinkIcon/></a>。GEC在ECS执行的过程中，如果遇到执行函数，会先根据函数体创建一个函数执行上下文FEC<a href="https://www.wolai.com/sPbcds65tJiFS4tHnAm5Hc" target="_blank" rel="noopener noreferrer">（FEC由三部分组成）<ExternalLinkIcon/></a>，然后将FEC压入ECS中执行。</p>
</li>
<li>
<p>内存管理-闭包：<br>
在定义变量的时候分配内存；标记清除法；闭包（一个函数如果 能够 访问到外层作用域的变量，那么就认为这个函数是一个闭包。）（访问外层作用域，外层作用域就有着标记，就无法清除，就形成了闭包）</p>
</li>
<li>
<p>this指向：</p>
<ol>
<li>默认绑定（window）。 <code v-pre>foo() // 绑定的是window</code></li>
<li>隐式绑定（调用函数的对象）。 <code v-pre>obj.foo() // 绑定的是obj</code></li>
<li>显示绑定（给谁绑定谁）。 <code v-pre>apply('devin'); call('devin'); bind('devin') // 绑定的是devin</code>
优先级： 显示 &gt; 隐式 &gt; 默认
第4-5都是在讲this，下面是第6节</li>
</ol>
</li>
<li>
<p>arguments、纯函数：
arguments、纯函数（同样的输入，就是同样的输出，无副作用）</p>
</li>
<li>
<p>严格模式</p>
</li>
<li>
<p>柯里化、组合函数：
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204142235453.png" alt="柯里化">
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202204142235547.png" alt=""></p>
</li>
<li>
<p>面向对象：
属性操作符Object.defineProperty()可用作数据描述符和存取描述符；
用构造函数创建对象（new 一下发生了什么）
prototype 和 __ proto __</p>
</li>
<li>
<p>原型链：</p>
</li>
<li>
<p>继承：</p>
</li>
</ol>
<h2 id="es6-开始统治时代" tabindex="-1"><a class="header-anchor" href="#es6-开始统治时代" aria-hidden="true">#</a> ES6 开始统治时代</h2>
<ol start="11">
<li>类的定义 - 方法 - 继承 - 多态</li>
<li>解构 - let - const</li>
<li>模板字符串： <code v-pre>console.log(`my name is ${name}, age is ${age}`) //my name is devin, age is 19</code></li>
<li>Symbol、 Set唯一、Map映射</li>
<li>ES7-12： 要回来学</li>
<li>proxy - reflect： 要回来学</li>
<li>Promise</li>
<li>迭代器 - 生成器 - async - await</li>
<li>事件循环 - 进程 - 线程 - 宏任务 - 微任务</li>
<li>模块化ES Moudle - 包管理工具</li>
<li>JSON - Storage - IndexDB</li>
<li>DOM、 BOM</li>
</ol>
</div></template>
