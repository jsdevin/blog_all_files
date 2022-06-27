<template><div><h1 id="内置类型、typeof、类型转换、深浅拷贝" tabindex="-1"><a class="header-anchor" href="#内置类型、typeof、类型转换、深浅拷贝" aria-hidden="true">#</a> 内置类型、typeof、类型转换、深浅拷贝</h1>
<p><img src="01.思维导图.png" alt=""></p>
<h2 id="内置类型" tabindex="-1"><a class="header-anchor" href="#内置类型" aria-hidden="true">#</a> 内置类型</h2>
<p>JavaScript中内置类型分为两种，基本类型和对象类型。</p>
<ol>
<li>基本类型有6个：String、Boolean、Number、undefined、null、Symbol</li>
<li>对象类型是object。object类型的会涉及到浅拷贝和深拷贝，这个放到文章最后讲，把简单的东西秒了先。</li>
</ol>
<h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeof</h2>
<p>搞定了内置类型，我们就可以学习typeof, 它的作用是能够返回变量所属的内置类型。
比如<code v-pre>typeof 111</code>的返回值就是Number.<br>
typeof的返回值有两种情况：</p>
<ol>
<li>第一种情况是碰到基本类型，一般都会返回其相应的类型。但是有例外，如果这个基本类型是null，就会返回object，这个是js存在的bug。</li>
<li>第二种情况是碰到对象类型，一般都是返回object。但是也有例外，如果碰到的函数，就会返回function，而不是object。<code v-pre>typeof function(){} // function</code></li>
</ol>
<h2 id="类型转换" tabindex="-1"><a class="header-anchor" href="#类型转换" aria-hidden="true">#</a> 类型转换</h2>
<h3 id="转为boolean" tabindex="-1"><a class="header-anchor" href="#转为boolean" aria-hidden="true">#</a> 转为Boolean</h3>
<p>如果是undefined、null、false、NaN、''、+0、-0 要转换为Boolean，那么结果就false。其它情况则转换为true</p>
<h3 id="对象类型转换为基本类型" tabindex="-1"><a class="header-anchor" href="#对象类型转换为基本类型" aria-hidden="true">#</a> 对象类型转换为基本类型</h3>
<p>规则：先调用该对象内部方法Symbol.toPrimitive, 如果有返回值就直接返回结果, 如果没有结果就再调用valueOf(),如果还是没有返回值, 就继续调用该对象的toString()方法</p>
<h3 id="四则运算符" tabindex="-1"><a class="header-anchor" href="#四则运算符" aria-hidden="true">#</a> 四则运算符</h3>
<p>四则运算符是 <code v-pre>+、-、*、/</code>。
加法运算的规则： 如果一方是String类型，就会将另一方也转换为String类型，然后进行字符串合并。
其它三则运算的规则：如果一方是Number类型，就会将另一方也转换为Number类型，然后进行数字之间的运算</p>
<h3 id="操作符" tabindex="-1"><a class="header-anchor" href="#操作符" aria-hidden="true">#</a> == 操作符</h3>
<p>问题：x、y是两个值，判断 x == y 的结果是true还是false的方法有？</p>
<ol>
<li>情况一：如果x、y的<code v-pre>类型相同</code>，那么我们根据具体的类型来得出结果：</li>
</ol>
<ul>
<li>二者类型是String, 判断规则：只有二者具有完全相同的字符序列（长度相等且相同字符在相同位置）时才返回true。</li>
<li>二者类型是Boolean, 判断规则：只有二者同时为true或者同时为false才返回true</li>
<li>二者类型是Number, 判断规则：只有二者为相等数值时才返回true.<code v-pre>+0 和 -0 是相等的，二者会返回true</code></li>
<li>二者类型是undefined, 返回true; 二者类型是null, 返回true</li>
<li>二者类型是object，判断规则：只有引用的对象是同一对象时才返回true</li>
</ul>
<ol start="2">
<li>情况二：当x、y的<code v-pre>类型不同</code>时，</li>
</ol>
<ul>
<li>如果有其一为对象类型，需要先转换为基本类型，然后再进行比较</li>
<li>对于基本类型的比较，Number类型的优先级最高，别的基本类型最终都是需要转换为Number类型进行比较。
<blockquote>
<p>undefined == null // true. 理解： undefined和null转换为Number类型都是0
11 == '11' // true. 理解：String会先转换为Number类型，然后再比较
1 = true // true. 理解：Boolean会先转换为Number类型，然后再比较</p>
</blockquote>
</li>
</ul>
<p>例题： [] == ![] 结果是什么？
解析：
第一步：对于<code v-pre>![]</code>中, 其<code v-pre>[]</code>前面有<code v-pre>!</code>,需根据转换为Boolean的规则(除了undefined、null、false、NaN、''、+0、-0，其它都是返回true)，所以<code v-pre>[]</code>的转换结果就是true,然后取反就是false。等号右边结果就是false。等式就转换为求[] == false 的结果是什么。<br>
第二步：object == Boolean 的比较，需要先将object转化为基本类型，空的对象调用Symbol.toPrimitive,无返回值，然后调用valueOf()也没有返回值，最后只能调用toString(),将自己转换为字符串，其转换结果是空字符串<code v-pre>''</code>.等式就转换为求 '' == false 的结果
第三步：都是基本类型，直接转换为Number类型比较即可。''会被转为0，false也会被转换为0。
所以结果是true</p>
<h2 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h2>
<p>为什么要有浅拷贝？先看个问题。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>         
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'devin'</span>         
<span class="token punctuation">}</span>         
<span class="token keyword">let</span> b <span class="token operator">=</span> a
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lily'</span>         
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 这里会打印什么值 ?         </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>没错，会打印lily。
因为<code v-pre>let b = a</code>给变量b赋值一个对象的时候，赋值的是对象的引用，那么也就导致了b和a的引用是一样的，是同一个对象。当我们对a对象进行操作的时候，b对象也会发生改变，这是一个重大缺陷，浅拷贝的出现就是为了解决这个问题！！</p>
<p>有两种方法来进行浅拷贝</p>
<ol>
<li>Object.assign(target, source) <code v-pre>target是接收源对象属性的对象，也是修改后的返回值；source是源对象，包含将被合并的属性</code>。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>         
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'devin'</span>         
<span class="token punctuation">}</span>         
<span class="token comment">// 这里的target就相当于一个新的内存地址，这样操作的话a和b的内存地址就不一样了，a随便操作，b也不会受到影响</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>         
a<span class="token punctuation">.</span>name <span class="token operator">=</span> lily
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// devin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>展开运算符...<br>
和上面同样道理，也是弄一块新的内存地址，只要和原对象的地址不相同，原对象如何操作也不会影响到新对象。
展开运算符(...)的作用是和遍历是一样的，逐个将对象的属性遍历出来。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>         
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'devin'</span>         
<span class="token punctuation">}</span>         
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span> <span class="token comment">// 这里的{}就是一个新对象了，会开辟一块新地址的</span>
a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'lily'</span>         
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// devin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h2>
<p>浅拷贝能解决大部分问题了，深拷贝可以了解一下。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>         
 <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>         
 <span class="token literal-property property">jobs</span><span class="token operator">:</span> <span class="token punctuation">{</span>         
   <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'FE'</span>         
 <span class="token punctuation">}</span>         
<span class="token punctuation">}</span>         
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">}</span>          
a<span class="token punctuation">.</span>jobs<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token string">'native'</span>         
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>jobs<span class="token punctuation">.</span>first<span class="token punctuation">)</span> <span class="token comment">// native</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>浅拷贝只能解决一层问题，这会导致a、b的jobs对象是同一个引用值，所以二者的jobs是同一个对象。为了解决这个问题，引入了深拷贝。
深拷贝是利用JSON的性质来完成的，先将对象转换为JSON字符串, 然后再将JSON字符串转换为对象。JSON.parse(JSON.stringify(a))</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>         
 <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>         
 <span class="token literal-property property">jobs</span><span class="token operator">:</span> <span class="token punctuation">{</span>         
 <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">'FE'</span>         
 <span class="token punctuation">}</span>         
<span class="token punctuation">}</span>         
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span>         
a<span class="token punctuation">.</span>jobs<span class="token punctuation">.</span>first <span class="token operator">=</span> <span class="token string">'native'</span>         
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>jobs<span class="token punctuation">.</span>first<span class="token punctuation">)</span> <span class="token comment">// FE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>深拷贝有着局限性，会忽略 undefined、会忽略 symbol、不能序列化函数、不能解决循环引⽤的对象</p>
</div></template>
