<template><div><h1 id="v8引擎" tabindex="-1"><a class="header-anchor" href="#v8引擎" aria-hidden="true">#</a> v8引擎</h1>
<h1 id="js引擎是什么" tabindex="-1"><a class="header-anchor" href="#js引擎是什么" aria-hidden="true">#</a> js引擎是什么？</h1>
<p>是一个将js代码转换为CPU指令的东西。</p>
<h1 id="为什么需要js引擎" tabindex="-1"><a class="header-anchor" href="#为什么需要js引擎" aria-hidden="true">#</a> 为什么需要JS引擎？</h1>
<p><strong>帮助我们将JS代码翻译成CPU指令来执行</strong></p>
<p>我们写的代码最终都是要靠CPU来执行的，但是CPU只能识别机器语言(这是低级语言，例子：0101010)，像JavaScript这种高级语言是无法在CPU中运行的。那么为了让写的js代码能够发挥效果，我们就要想办法将js代码等效转换成CPU认识的机器语言，这时候我们就要用到JavaScript引擎，它能帮助我们将JavaScript代码翻译成CPU指令来执行；</p>
<h1 id="浏览器内核和js引擎的关系" tabindex="-1"><a class="header-anchor" href="#浏览器内核和js引擎的关系" aria-hidden="true">#</a> 浏览器内核和JS引擎的关系</h1>
<p><strong>浏览器内核 = 负责HTML解析、布局、渲染部分的引擎  +  JS引擎</strong></p>
<h1 id="v8引擎是怎么起作用的-v8引擎的执行原理" tabindex="-1"><a class="header-anchor" href="#v8引擎是怎么起作用的-v8引擎的执行原理" aria-hidden="true">#</a> v8引擎是怎么起作用的？（v8引擎的执行原理）</h1>
<p><img src="https://img-blog.csdnimg.cn/img_convert/818528e143e97e3767116e62a42b9acd.png" alt=""></p>
<h2 id="js代码-ast" tabindex="-1"><a class="header-anchor" href="#js代码-ast" aria-hidden="true">#</a> JS代码  -&gt; AST</h2>
<h3 id="parse" tabindex="-1"><a class="header-anchor" href="#parse" aria-hidden="true">#</a> Parse</h3>
<p>Parse模块会将js代码转换成AST(抽象语法树)。如果函数没有被调用，该函数是不会被转换成AST的。</p>
<p>这个阶段会对js代码进行词法分析和语法分析。</p>
<h3 id="理由-ignition解析器不能识别js代码" tabindex="-1"><a class="header-anchor" href="#理由-ignition解析器不能识别js代码" aria-hidden="true">#</a> 理由：Ignition解析器不能识别js代码</h3>
<p>要将js代码转换成Ignition认识的抽象语法树，才能实现将js代码等效转换成字节码bytecode.</p>
<h2 id="ast-bytecode" tabindex="-1"><a class="header-anchor" href="#ast-bytecode" aria-hidden="true">#</a> AST -&gt; bytecode</h2>
<h3 id="ignition" tabindex="-1"><a class="header-anchor" href="#ignition" aria-hidden="true">#</a> Ignition</h3>
<p>Ignition是一个解析器，会将AST转换成ByteCode（字节码）.</p>
<p>同时会收集TurboFan优化所需要的信息（比如函数参数的类型信息，有了类型才能进行真实的运算）</p>
<p>如果函数只调用一次，Ignition会执行解释执行ByteCode；</p>
<h2 id="bytecode-machinecode" tabindex="-1"><a class="header-anchor" href="#bytecode-machinecode" aria-hidden="true">#</a> bytecode -&gt; MachineCode</h2>
<h3 id="turbofan" tabindex="-1"><a class="header-anchor" href="#turbofan" aria-hidden="true">#</a> TurboFan</h3>
<p>是一个编译器，可以将字节码编译为CPU可以直接执行的机器码</p>
<p>如果一个函数被多次调用，那么就会被标记为热点函数，那么就会经过TurboFan转换成优化的机器码，提高代码的执行性能</p>
<p>但是，机器码实际上也会被还原为ByteCode，这是因为如果后续执行函数的过程中，类型发生了变化（比如sum函数原来执行的是number类型，后来执行变成了string类型），之前优化的机器码并不能正确的处理运算，就会逆向的转换成字节码；</p>
<h1 id="v8的执行细节" tabindex="-1"><a class="header-anchor" href="#v8的执行细节" aria-hidden="true">#</a> v8的执行细节</h1>
<p><img src="https://img-blog.csdnimg.cn/img_convert/e30775fcfc3fc3487db188e756d19a8e.png" alt=""></p>
<h3 id="那么我们的js源码是如何被解析-parse过程-的呢" tabindex="-1"><a class="header-anchor" href="#那么我们的js源码是如何被解析-parse过程-的呢" aria-hidden="true">#</a> 那么我们的JS源码是如何被解析（Parse过程）的呢？</h3>
<ol>
<li>
<p>Blink将源码交给V8引擎，Stream获取到源码并且进行编码转换；</p>
</li>
<li>
<p>Scanner会进行词法分析（lexical analysis），词法分析会将代码转换成tokens；</p>
</li>
<li>
<p>接下来tokens会被转换成AST树，经过Parser和PreParser：</p>
<ul>
<li>
<p>Parser就是直接将tokens转成AST树架构；</p>
</li>
<li>
<p>PreParser称之为预解析，为什么需要预解析呢？</p>
<p>这是因为并不是所有的JavaScript代码，在一开始时就会被执行。那么对所有的JavaScript代码进行解析，必然会影响网页的运行效率；<br>
所以V8引擎就实现了Lazy Parsing（延迟解析）的方案，它的作用是将不必要的函数进行预解析，也就是只解析暂时需要的内容，而对函数的全量解析是在函数被调用时才会进行；</p>
<p>比如我们在一个函数outer内部定义了另外一个函数inner，那么inner函数就会进行预解析；</p>
</li>
</ul>
</li>
<li>
<p>生成AST树后，会被Ignition转成字节码（bytecode），之后的过程就是代码的执行过程。</p>
</li>
</ol>
</div></template>
