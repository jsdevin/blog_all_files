<template><div><h1 id="什么是二叉树" tabindex="-1"><a class="header-anchor" href="#什么是二叉树" aria-hidden="true">#</a> 什么是二叉树？</h1>
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
