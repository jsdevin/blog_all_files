<template><div><h1 id="原型、new、instanceof、this、执行上下文" tabindex="-1"><a class="header-anchor" href="#原型、new、instanceof、this、执行上下文" aria-hidden="true">#</a> 原型、new、instanceof、this、执行上下文</h1>
<h2 id="原型" tabindex="-1"><a class="header-anchor" href="#原型" aria-hidden="true">#</a> 原型</h2>
<p>说到原型，要先了解三个知识点。</p>
<ol>
<li>prototype 原型
每一个(构造)函数都有prototype属性，它指向的是构造函数的原型对象</li>
<li><strong>proto</strong>
每一个对象都有<code v-pre>__proto__</code>属性，它指向的是其构造函数的原型对象</li>
<li>Object类是所有类的父类，Object的原型对象是原型链中最低处的原型对象。它的<code v-pre>__proto__</code>值是null</li>
<li><code v-pre>构造函数.prototype.__proto__ = Object.prototype</code> （最顶层了）</li>
<li><code v-pre>对象.__proto__.__proto__ = Object.prototype</code></li>
<li>prototype
只有 函数 有prototype属性。其它人都没有。如果在对象中查询obj.prototype，会和查找obj.a一样性质，都会当作一个普通的自定义属性。默认是undefined</li>
<li>__ proto __
__ proto __ 是浏览器自带的方法，所有对象都能使用，不管是普通对象，还是函数对象。</li>
<li>函数也是对象，也属于Object类。所以函数既有prototype，也有__ proto __</li>
<li>对象可以通过 <strong>proto</strong> 来寻找不属于该对象的属性， <strong>proto</strong> 将对象连接起来就组成了原型链</li>
</ol>
<div align=center>    
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f5444e71c4849f08e924d7a5633f4ff~tplv-k3u1fbpfcp-zoom-1.image" width="60%" height="50%"/>    
</div>    
<h2 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h2>
<p>结合上面原型铺垫的知识点，看懂这个简略版的。</p>
<div align=center>    
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8daee1b227ff41b8921bab8f1095a54d~tplv-k3u1fbpfcp-zoom-1.image" width="60%" height="50%"/>    
</div>    
<p>下面这个图是最全面的</p>
<div align=center>    
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/079c5c379cc84a2696367f26cdcae1dd~tplv-k3u1fbpfcp-zoom-1.image" width="60%" height="50%"/>    
</div>    
<h2 id="new-的调用过程发生了什么" tabindex="-1"><a class="header-anchor" href="#new-的调用过程发生了什么" aria-hidden="true">#</a> new 的调用过程发生了什么？</h2>
<p>首先知道一点: new 调用的函数就是构造函数
new 调用构造函数生成一个对象需要四个过程：</p>
<ol>
<li>在构造函数内部创建一个空对象A</li>
<li>将空对象的__proto__属性链接到构造函数的prototype对象上</li>
<li>将构造函数的this绑定为对象A</li>
<li>返回新对象A</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token comment">// 1.在构造函数内部生成一个空对象A</span>
  <span class="token keyword">let</span> <span class="token constant">A</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>    
  <span class="token comment">// 2.将空对象A的__proto__链接到prototype对象上.    </span>
  <span class="token keyword">let</span> Con <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">[</span>arguments<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 要先获取到构造函数。这里看不懂可以先跳过，后面有解释</span>
  <span class="token constant">A</span><span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Con</span><span class="token punctuation">.</span>prototype
  <span class="token comment">// 3.将构造函数的this绑定为对象A</span>
  <span class="token keyword">let</span> resutl <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token constant">A</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>    
  <span class="token comment">// 4.返回新对象.（确保返回的是一个对象）</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">'object'</span> <span class="token operator">?</span> result <span class="token operator">:</span> <span class="token constant">A</span>
<span class="token punctuation">}</span>    
    
<span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 用new调用构造函数Foo生成一个对象。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释<code v-pre>[].shift.call([arguments])</code>:<br>
[].shift 就是数组shift方法，获取数组的第一项。在没有传入参数的情况下，arguments的第一项callee就是其构造函数。callee是被调用函数的意思（在这里指被new调用的构造函数）。
call方法是用来绑定this的。这<code v-pre>[].shift.call([arguments])</code>一整句的意思就是用arguments来执行[].shift的逻辑。
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206030059242.png" alt=""><br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206030101687.png" alt=""></p>
<p><strong>优先级的问题：new Foo() 的优先级⼤于 new Foo</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
 <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>     
<span class="token punctuation">}</span>    
Foo<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span><span class="token punctuation">;</span>    
<span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
 console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'2'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
<span class="token punctuation">}</span><span class="token punctuation">;</span>    
<span class="token keyword">new</span> <span class="token class-name">Foo<span class="token punctuation">.</span>getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> 1</span>
<span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -> 2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解释：对于第⼀个函数来说，先执⾏了 <code v-pre>Foo.getName()</code> ，所以结果为 1；对于后者来说，先执⾏new Foo() 产⽣了⼀个实例，然后实例__proto__通过原型链找到了 Foo 上的 getName 函数，所以结果为 2。</p>
<h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceof</h2>
<p>instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
换句话说，instanceof是用来检测对象是属于哪种内置类型的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 例子：</span>
<span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span><span class="token parameter">make<span class="token punctuation">,</span> model<span class="token punctuation">,</span> year</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>    
  <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>    
  <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>    
<span class="token punctuation">}</span>    
<span class="token keyword">const</span> auto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">'Honda'</span><span class="token punctuation">,</span> <span class="token string">'Accord'</span><span class="token punctuation">,</span> <span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
    
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>auto <span class="token keyword">instanceof</span> <span class="token class-name">Car</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
    
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>auto <span class="token keyword">instanceof</span> <span class="token class-name">Object</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>手写instanceof: 先获取instanceof右边的对象A，然后获取它的prototype对象B，再获取instanceof左边的实例对象的__proto__值C，判断B和C是否相等，如果不相等就继续后去C的__proto__值</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token keyword">instanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
  <span class="token comment">// 先获取右边对象的prototype对象</span>
  <span class="token keyword">let</span> prototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype
  <span class="token comment">// 然后获取左边实例对象的__proto__值</span>
  <span class="token keyword">let</span> left <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
  <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 原型链搜索到底都没有和对象B相等，证明被检测对象不属于给定的内置类型</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>    
    <span class="token keyword">if</span><span class="token punctuation">(</span>left <span class="token operator">==</span> prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>    
      <span class="token keyword">return</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>    
    left <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__
  <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怎么判断this的值" tabindex="-1"><a class="header-anchor" href="#怎么判断this的值" aria-hidden="true">#</a> 怎么判断this的值？</h2>
<p>this的值有四种绑定规则，分别是默认绑定、隐式绑定、显式绑定、new绑定</p>
<ol>
<li>默认绑定规则：当独立函数<code v-pre>如foo()、fn()</code>调用时，不管调用语句在哪个位置，this的值都会绑定为window</li>
<li>隐式绑定规则：当函数由对象来调用时，this的值就绑定为对象。<code v-pre>obj.foo()</code>的this值绑定的是obj</li>
<li>显式绑定规则：call()、apply()、bind()</li>
<li>new 绑定规则: this绑定的是构造函数内部生成的对象A。（在new调用过程的第三步进行绑定）
特殊的this绑定值： setTimeOut()函数的this绑定的是window，forEach(()=&gt;{}, <strong>this值</strong>)可以通过第二个参数绑定this
<a href="https://github.com/jsdevin/Study-notes/blob/main/04-JS%E9%AB%98%E7%BA%A7/%E7%AC%AC04%E3%80%8105%E8%8A%82%20this%E6%8C%87%E5%90%91.md" target="_blank" rel="noopener noreferrer">有关this的详细解析请看这里<ExternalLinkIcon/></a></li>
</ol>
<h2 id="执行上下文-js代码执行原理详解" tabindex="-1"><a class="header-anchor" href="#执行上下文-js代码执行原理详解" aria-hidden="true">#</a> 执行上下文-JS代码执行原理详解</h2>
<h3 id="go" tabindex="-1"><a class="header-anchor" href="#go" aria-hidden="true">#</a> GO</h3>
<p>在执行代码之前，js引擎会先在堆内存中创建一个全局对象Global Object。它是整个页面的最外面层，是该页面所有对象的父类。</p>
<p>GO中会包含一些js内置的大类，比如Array、Date、String、Number等等</p>
<p>因为GO是该页面的最外层，所有它的this指向是指向自己本身的。所以GO有一个window属性，属性值是其本身。</p>
<!-- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/443dbb94ee914d56b8a74d02e93573b3~tplv-k3u1fbpfcp-zoom-1.image) -->    
<div align=center>    
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000751.png" width="60%" height="50%"/>    
</div>    
<h3 id="ecs" tabindex="-1"><a class="header-anchor" href="#ecs" aria-hidden="true">#</a> ECS</h3>
<p>在js引擎内部有一个执行上下文栈Execution Context Stack，它是用来执行代码的，整个页面所有的代码都将在ECS中执行，也就是说，ECS执行的是全局代码块Global Execution Centext.</p>
<h3 id="gec" tabindex="-1"><a class="header-anchor" href="#gec" aria-hidden="true">#</a> GEC</h3>
<p>全局代码块GEC由两部分组成。</p>
<p>第一部分是 在代码执行前，在parse转成AST的过程中，会将全局定义的变量、函数等加入到GO中，但是不会赋值，这个过程也称为变量的作用域提升。</p>
<p>第二部分是 在代码执行中，对变量赋值，对函数执行。</p>
<h4 id="gec被放入ecs中" tabindex="-1"><a class="header-anchor" href="#gec被放入ecs中" aria-hidden="true">#</a> GEC被放入ECS中</h4>
<div align=center>    
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000824.png" width="60%" height="50%"/>    
</div>    
<h4 id="gec开始执行代码" tabindex="-1"><a class="header-anchor" href="#gec开始执行代码" aria-hidden="true">#</a> GEC开始执行代码</h4>
<div align=center>    
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000846.png" width="60%" height="50%"/>    
</div>    
<h4 id="遇到函数如何执行-→-fec" tabindex="-1"><a class="header-anchor" href="#遇到函数如何执行-→-fec" aria-hidden="true">#</a> 遇到函数如何执行  → FEC</h4>
<p>在执行过程中遇到函数时，会根据函数体创建一个函数执行上下文Functional Execution Context , 并且压入Stack中。</p>
<h5 id="fec由三部分组成" tabindex="-1"><a class="header-anchor" href="#fec由三部分组成" aria-hidden="true">#</a> FEC由三部分组成</h5>
<p>第一部分：AO。 在函数解析成为AST树结构时，会创建一个Activation Object，AO中包含形参、arguments、函数定义和指向函数对象、定义的变量。</p>
<p>第二部分：作用域链。由VO（在函数中就是AO对象）和父级VO组成，查找时会一层层查找；</p>
<p>第三部分：this绑定的值。</p>
<div align=center>    
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000907.png" width="60%" height="50%"/>    
</div>    
<h5 id="fec被放入到ecs中" tabindex="-1"><a class="header-anchor" href="#fec被放入到ecs中" aria-hidden="true">#</a> FEC被放入到ECS中</h5>
<div align=center>    
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000936.png" width="60%" height="50%"/>    
</div>    
<h5 id="fec开始执行代码" tabindex="-1"><a class="header-anchor" href="#fec开始执行代码" aria-hidden="true">#</a> FEC开始执行代码</h5>
<div align=center>    
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000954.png" width="60%" height="50%"/>    
</div>    
<h3 id="js代码执行原理总结" tabindex="-1"><a class="header-anchor" href="#js代码执行原理总结" aria-hidden="true">#</a> js代码执行原理总结</h3>
<p>js引擎在代码执行前会在堆内存中创建一个初始化全局对象GO（GO有三个特点）。js引擎中有一个执行上下文栈ECS , ECS中执行的是全局代码块，全局代码块为了执行会创建一个全局执行上下文GEC，GEC会被放入到ECS中执行（GEC被放入到ECS中包含两部分内容）。GEC在ECS执行的过程中，如果遇到执行函数，会先根据函数体创建一个函数执行上下文FEC（FEC由三部分组成），然后将FEC压入ECS中执行。</p>
</div></template>
