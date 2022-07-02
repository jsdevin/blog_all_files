<template><div><h1 id="内存管理详解" tabindex="-1"><a class="header-anchor" href="#内存管理详解" aria-hidden="true">#</a> 内存管理详解</h1>
<h2 id="_1-什么是内存管理" tabindex="-1"><a class="header-anchor" href="#_1-什么是内存管理" aria-hidden="true">#</a> 1.什么是内存管理？</h2>
<p>对栈内存和堆内存进行合理的分配和回收的过程就是内存管理。</p>
<h2 id="_2-为什么要有内存管理" tabindex="-1"><a class="header-anchor" href="#_2-为什么要有内存管理" aria-hidden="true">#</a> 2.为什么要有内存管理？</h2>
<p>内存得到有效管理能节省大量内存，使程序运行更加高效，用户体验提升！</p>
<h2 id="_3-怎么进行内存管理" tabindex="-1"><a class="header-anchor" href="#_3-怎么进行内存管理" aria-hidden="true">#</a> 3.怎么进行内存管理？</h2>
<h2 id="_3-1内存分配" tabindex="-1"><a class="header-anchor" href="#_3-1内存分配" aria-hidden="true">#</a> 3.1内存分配</h2>
<h3 id="什么时候分配内存" tabindex="-1"><a class="header-anchor" href="#什么时候分配内存" aria-hidden="true">#</a> 什么时候分配内存？</h3>
<p>在定义变量的时候会分配内存。</p>
<h3 id="分配在栈空间" tabindex="-1"><a class="header-anchor" href="#分配在栈空间" aria-hidden="true">#</a> 分配在栈空间</h3>
<p>对于一些简单的数据类型，是在栈空间中分配内存。</p>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001049.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001049.png" width="60%" height="50%"/>
</div>
<h3 id="分配在堆内存" tabindex="-1"><a class="header-anchor" href="#分配在堆内存" aria-hidden="true">#</a> 分配在堆内存</h3>
<p>对于一些复杂的数据类型，会在堆内存中分配内存(也就是在堆内存中开辟一处新空间），在栈空间中会有一个变量是指向这个新开辟的空间的。</p>
<h2 id="_3-2内存回收-垃圾回收" tabindex="-1"><a class="header-anchor" href="#_3-2内存回收-垃圾回收" aria-hidden="true">#</a> 3.2内存回收 (垃圾回收)</h2>
<h3 id="垃圾回收器" tabindex="-1"><a class="header-anchor" href="#垃圾回收器" aria-hidden="true">#</a> 垃圾回收器</h3>
<p>js引擎内置了一个垃圾回收器。<em>垃圾回收的英文是Garbage Collection，简称GC</em>。我们也将垃圾回收器简称为GC。</p>
<h3 id="gc怎么起作用的" tabindex="-1"><a class="header-anchor" href="#gc怎么起作用的" aria-hidden="true">#</a> GC怎么起作用的？</h3>
<h4 id="法一-引用计数法" tabindex="-1"><a class="header-anchor" href="#法一-引用计数法" aria-hidden="true">#</a> 法一：引用计数法</h4>
<p>创建对象时都会内置一个引用计数属性，当一个对象有一个引用指向它时，这个对象的引用计数属性的值就会+1，当一个对象的引用为0时，这个对象就会被GC销毁掉。</p>
<h4 id="引用计数法的弊端" tabindex="-1"><a class="header-anchor" href="#引用计数法的弊端" aria-hidden="true">#</a> 引用计数法的弊端</h4>
<p>会产生循环引用。又因为循环引用的引用计数属性的值不为0，GC无法清理，所以会占据大量内存。弊大于利，js引擎使用的不是这种方法。</p>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001101.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001101.png" width="60%" height="50%"/>
</div>
<h4 id="法二-标记清除法" tabindex="-1"><a class="header-anchor" href="#法二-标记清除法" aria-hidden="true">#</a> 法二：标记清除法</h4>
<p>设置一个根对象(如下图中A)，GC会定期从A出发，找出所有有引用的对象，对于没有引用的对象，就认为是不可用的对象，直接清理掉。这个方法可以很好地解决了循环引用的问题。标记清除法用得最广泛，大多数js引擎用的是标记清除法。</p>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001112.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001112.png" width="60%" height="50%"/>
</div>
<h1 id="闭包详解" tabindex="-1"><a class="header-anchor" href="#闭包详解" aria-hidden="true">#</a> 闭包详解</h1>
<h2 id="什么是闭包" tabindex="-1"><a class="header-anchor" href="#什么是闭包" aria-hidden="true">#</a> 什么是闭包？</h2>
<p>一个函数如果 <strong>能够</strong> 访问到外层作用域的<strong>变量</strong>，那么就认为这个函数是一个闭包。广泛地来说，js中所有函数都是闭包，因为所有函数都能访问最外层的全局(GO)作用域。</p>
<h2 id="为什么要有闭包" tabindex="-1"><a class="header-anchor" href="#为什么要有闭包" aria-hidden="true">#</a> 为什么要有闭包？</h2>
<p>js的一个特点是内层作用域可以访问外层作用域(也就是说子级作用域可以访问父级作用域)，但是某些情况下我们父级是需要获取子级作用域中的变量的（也就是说<strong>从父级作用域访问子级作用域</strong>），js做不到从外层作用域访问内层作用域，所以就产生了闭包来解决这个问题。</p>
<p>视频解析：</p>
<p><a href="https://www.zhihu.com/question/283708101" target="_blank" rel="noopener noreferrer">什么是闭包，为什么要用它？ - 知乎 (zhihu.com)<ExternalLinkIcon/></a></p>
<h2 id="怎么形成闭包" tabindex="-1"><a class="header-anchor" href="#怎么形成闭包" aria-hidden="true">#</a> 怎么形成闭包？</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function outer() {
  var name = devin 
  var age = 18
  
  function inner() {
    console.log(name)
  }
  
  return inner
}

var test = new outer() //这里的test实质上等于函数outer()返回的值，也就是return的inner函数。因为inner函数用到了外层函数的变量name，所以会有指向外层函数AO对象的引用，则外层函数的AO对象不会被销毁，形成闭包
test() //实质上是inner()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上图为例，闭包的形成是由于outer函数return的是内层函数inner，而inner函数用到了外层函数的参数name，也就是说，inner函数是有指向外层函数AO对象的引用的，当GC进行垃圾回收的时候，从根对象出发，因为inner函数的AO对象存在引用，那么GC就不会回收它，所以它就会一直存在。</p>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001128.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001128.png" width="60%" height="50%"/>
</div>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001142.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001142.png" width="60%" height="50%"/>
</div>
<h2 id="闭包的弊端-—-内存泄漏" tabindex="-1"><a class="header-anchor" href="#闭包的弊端-—-内存泄漏" aria-hidden="true">#</a> 闭包的弊端 — 内存泄漏</h2>
<h3 id="为什么会有内存泄漏" tabindex="-1"><a class="header-anchor" href="#为什么会有内存泄漏" aria-hidden="true">#</a> 为什么会有内存泄漏？</h3>
<p>当我们不再使用这一部分存在闭包的函数时，理论上应该是要清除掉其AO对象(作用域)的，但是因为外层函数的AO对象被内层函数引用，也就是说外层函数存在引用，那么使用标记清除法的GC就不能清除掉这一部分内存，它就会一直存在，导致内存无法回收，形成了内存泄漏。</p>
<h3 id="怎么解决内存泄露问题" tabindex="-1"><a class="header-anchor" href="#怎么解决内存泄露问题" aria-hidden="true">#</a> 怎么解决内存泄露问题？</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//举例说明
//假如这里有一个闭包，外层函数outer，内层函数inner
var test = new outer()
test()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决内存问题我们只需要将test设置为null即可（<code v-pre>test = null</code>）。因为test设置为null之后，就不会有指针指向外层函数的AO对象(作用域)，自然也就会被GC清理掉内存。</p>
<h2 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//例子
function outer() (
  var a = 1
  var b = 2
  var c = 3
  var d = 4
  
  function inner() {
    console.log(b)
  }
  
  return inner
)

var test = new outer()
test()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上例，外层函数中的变量a，c，d，在内存泄漏的时候，会被清理掉吗？</p>
<p>答案：会！！！</p>
<p>因为闭包父作用域中只有被引用到的变量不会被清理。 —有用才留着嘛，没用留着干嘛。v8引擎就这么优化的。</p>
</div></template>
