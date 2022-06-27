<template><div><h1 id="什么是栈" tabindex="-1"><a class="header-anchor" href="#什么是栈" aria-hidden="true">#</a> 什么是栈？</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>经过前面的学习我们知道，数组是可以在任意位置进行插入和删除操作的，这使得数组具有极大的任意性。在实际开发中，这种任意性往往是致命的，为了限制这种任意性，就产生了栈这种受限的数据结构。</p>
<h2 id="栈的定义" tabindex="-1"><a class="header-anchor" href="#栈的定义" aria-hidden="true">#</a> 栈的定义</h2>
<ol>
<li>栈是数组和链表的衍生物，它的特性是数据 <strong>后进先出。<strong>Last in, first out。</strong>（LIFO）</strong></li>
<li>栈是一种运算受限的线性表，其限制是只允许在<strong>栈顶</strong>进行插入和删除运算。</li>
</ol>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105112819.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105112819.png" width="60%" height="50%"/>
</div>
<h1 id="为什么使用栈" tabindex="-1"><a class="header-anchor" href="#为什么使用栈" aria-hidden="true">#</a> 为什么使用栈？</h1>
<ol>
<li>'为什么使用栈？' 这个问题比较难回答，我们可以换个角度想，栈给我们带来了什么？后进先出是栈的核心，使用栈能让我们实现后进先出这种具体的受限的运算方式，那么就非常方便我们在某种实际情况中使用，不在是使用具有极大任意性的数组。</li>
<li>基于底层的理解还没弄明白。慢慢学，还没学到底层那种程度，学习是个层层递进的过程。</li>
</ol>
<h1 id="怎么使用栈" tabindex="-1"><a class="header-anchor" href="#怎么使用栈" aria-hidden="true">#</a> 怎么使用栈？</h1>
<h2 id="创建栈" tabindex="-1"><a class="header-anchor" href="#创建栈" aria-hidden="true">#</a> 创建栈</h2>
<ul>
<li>外层使用一个函数，函数内使用一个数组代表栈，将数组的末端当作栈顶。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 栈类
function Stack() {
    // 栈中的属性
    var items = []
    
    // 栈相关的方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栈的方法" tabindex="-1"><a class="header-anchor" href="#栈的方法" aria-hidden="true">#</a> 栈的方法</h2>
<h3 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h3>
<ol>
<li>push()
入栈 - 向栈顶位置添加一个元素
我们是将添加的元素放到数组的末尾，那么我们的栈顶就是数组末端。<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 压栈操作
this.push = function (element) {
    items.push(element)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h3>
<ol>
<li>pop()
出栈 - 删除栈顶位置的元素，并且返回<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 出栈操作
this.pop = function (element) {
    return items.pop()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h3 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h3>
<ol>
<li>peek()
<ul>
<li>返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）。</li>
</ul>
</li>
<li>isEmpty()
<ul>
<li>判断栈中元素是否为空，如果为空就返回true，否则返回false.</li>
</ul>
</li>
<li>size()
<ul>
<li>返回栈中的元素个数。— 使用数组的length实现。</li>
</ul>
</li>
</ol>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>  // peek操作
  this.peek = function () {
      return items[items.length - 1]
  }

  // 判断栈中的元素是否为空
  this.isEmpty = function () {
      return items.length == 0
  }

  // 获取栈中元素的个数
  this.size = function () {
      return items.length
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="栈的使用场景是什么" tabindex="-1"><a class="header-anchor" href="#栈的使用场景是什么" aria-hidden="true">#</a> 栈的使用场景是什么？</h1>
<ol>
<li>函数调用
<ul>
<li>实例：js引擎使用的栈空间</li>
</ul>
</li>
<li>表达式求值(加减乘除的混合运算)</li>
<li>括号匹配</li>
<li>浏览器的前进和后退功能</li>
</ol>
<ul>
<li>具体实现代码<a href="https://www.jianshu.com/p/407d0aeb62d3" target="_blank" rel="noopener noreferrer">点击这里跳转<ExternalLinkIcon/></a>。</li>
</ul>
</div></template>
