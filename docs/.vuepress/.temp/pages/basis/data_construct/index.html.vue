<template><div><h1 id="什么是队列" tabindex="-1"><a class="header-anchor" href="#什么是队列" aria-hidden="true">#</a> 什么是队列？</h1>
<ol>
<li>队列也是一种受限的线性表，它的核心是先进先出。(FIFO First In First Out)</li>
<li>队列的受限之处在于：只允许在头部删除元素，在尾部添加元素。</li>
<li>队列的图解如下</li>
</ol>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105124320.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105124320.png" width="60%" height="50%"/>
</div>
<h1 id="为什么要使用队列" tabindex="-1"><a class="header-anchor" href="#为什么要使用队列" aria-hidden="true">#</a> 为什么要使用队列？</h1>
<p>暂不明确，后面再补。</p>
<h1 id="怎么使用队列" tabindex="-1"><a class="header-anchor" href="#怎么使用队列" aria-hidden="true">#</a> 怎么使用队列？</h1>
<p>思路和栈在大致上是一样的。</p>
<h2 id="创建队列" tabindex="-1"><a class="header-anchor" href="#创建队列" aria-hidden="true">#</a> 创建队列</h2>
<ol>
<li>外层函数，内层数组，通过给函数定义方法实现队列</li>
</ol>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 自定义队列
function Queue() {
    var items = []
    
    // 队列操作的方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2>
<ol>
<li>enqueue()
<ul>
<li>向队列尾部添加一个（或多个）新的项。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// enter queue方法
this.enqueue = function (element) {
    items.push(element)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2>
<ol>
<li>dequeue()
<ul>
<li>移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// delete queue方法
this.dequeue = function () {
    return items.shift() //删除第一个元素
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>
<ol>
<li>front()
<ul>
<li>回队列中第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息——与Stack类的peek方法非常类似）</li>
</ul>
</li>
<li>isEmpty()
<ul>
<li>如果队列中不包含任何元素，返回true，否则返回false。</li>
</ul>
</li>
<li>size()
<ul>
<li>返回队列包含的元素个数，与数组的length属性类似。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>  // 查看前端的元素
  this.front = function () {
      return items[0]
  }

  // 查看队列是否为空
  this.isEmpty = function () {
      return items.length == 0
  }

  // 查看队列中元素的个数
  this.size = function () {
      return items.length
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h1 id="队列的使用场景" tabindex="-1"><a class="header-anchor" href="#队列的使用场景" aria-hidden="true">#</a> 队列的使用场景</h1>
<ol>
<li>机场排队</li>
<li>打印机任务队列</li>
<li>消息队列</li>
</ol>
<h1 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> 补充</h1>
<p>学习其它的一些队列应用<a href="https://www.zhihu.com/question/315752464" target="_blank" rel="noopener noreferrer"><strong>点这里</strong><ExternalLinkIcon/></a></p>
<p>[补充2](https://zhuanlan.zhihu.com/p/99783523#:~:text=以上就是我们选择使用消息队列能帮我们解决的问题，当然消息队列还有其他的功能：作为发布 /,订阅系统实现一个微服务级系统间的观察者模式；连接流计算任务和数据；用于将消息广播给大量接收者。. 我们不难归纳出这样一个结果：在单应用模式下使用队列的场景，在分布式集群环境下大多都能使用消息队列来解决，当然使用消息队列给我我们带来这么多好处的同时也要做好它带来的常见性问题：消息延迟问题；系统复杂度；数据不一致；诸如这些问题。)</p>
<hr>
<h1 id="什么是二叉树" tabindex="-1"><a class="header-anchor" href="#什么是二叉树" aria-hidden="true">#</a> 什么是二叉树？</h1>
<ul>
<li>如果树中<strong>每个节点</strong>最多只能有两个子节点, 这样的树就成为&quot;二叉树&quot;.</li>
<li>二叉树可以为空, 也就是没有结点.</li>
<li>若不为空，则它是由根结点和称为其左子树TL和右子树TR的两个不相交的二叉树组成。</li>
<li>二叉树的五种形态:
<ul>
<li>c和d是不同的二叉树, 因为二叉树是有左右之分的.</li>
</ul>
</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107150722.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107150722.png" width="60%" height="50%"/>
</div>
<h1 id="二叉树的特性" tabindex="-1"><a class="header-anchor" href="#二叉树的特性" aria-hidden="true">#</a> 二叉树的特性</h1>
<ul>
<li>二叉树有几个比较重要的特性, 在笔试题中比较常见:
<ul>
<li>一个二叉树第 i 层的最大结点数为：2^(i-1), i &gt;= 1;</li>
<li>深度为k的二叉树有最大结点总数为： 2^k - 1, k &gt;= 1;</li>
<li>对任何非空二叉树 T，若n0表示叶结点的个数、n2是度为2的非叶结点个数，那么两者满足关系n0 = n2 + 1。</li>
</ul>
</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107150944.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107150944.png" width="60%" height="50%"/>
</div>
<h1 id="特殊的二叉树" tabindex="-1"><a class="header-anchor" href="#特殊的二叉树" aria-hidden="true">#</a> 特殊的二叉树</h1>
<h2 id="完美二叉树" tabindex="-1"><a class="header-anchor" href="#完美二叉树" aria-hidden="true">#</a> 完美二叉树</h2>
<ul>
<li>完美二叉树(Perfect Binary Tree) , 也称为满二叉树(Full Binary Tree）
<ul>
<li>在二叉树中, 除了最下一层的叶结点外, 每层节点都有2个子结点, 就构成了满二叉树.</li>
</ul>
</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107151104.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107151104.png" width="60%" height="50%"/>
</div>
<h2 id="完全二叉树" tabindex="-1"><a class="header-anchor" href="#完全二叉树" aria-hidden="true">#</a> 完全二叉树</h2>
<ul>
<li>完全二叉树(Complete Binary Tree)
<ul>
<li>除二叉树最后一层外, 其他各层的节点数都达到最大个数.</li>
<li>且最后一层从左向右的叶结点连续存在, 只缺右侧若干节点.</li>
<li>完美二叉树是特殊的完全二叉树.</li>
</ul>
</li>
<li>下面不是完全二叉树, 因为D节点还没有右结点, 但是E节点就有了左右节点.</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107151236.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107151236.png" width="60%" height="50%"/>
</div>
<h1 id="二叉树的存储" tabindex="-1"><a class="header-anchor" href="#二叉树的存储" aria-hidden="true">#</a> 二叉树的存储</h1>
<ul>
<li>二叉树存储的方式通常是数组和链表。数组很少用，就不做笔记了，需要看可以点击<a href="https://www.jianshu.com/p/b7d501591eb7" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>去原文看。下面记录以链表存储的方式。</li>
</ul>
<h2 id="使用链表存储" tabindex="-1"><a class="header-anchor" href="#使用链表存储" aria-hidden="true">#</a> 使用链表存储</h2>
<ul>
<li>每个结点封装成一个Node, Node中包含存储的数据, 左结点的引用, 右结点的引用.</li>
</ul>
<!-- ![]() -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107151517.png" width="60%" height="50%"/>
</div>
<p>学习理解自coderwhy老师的文章，侵删。原文地址<a href="https://www.jianshu.com/p/b7d501591eb7" target="_blank" rel="noopener noreferrer">点这里<ExternalLinkIcon/></a>。</p>
</div></template>
