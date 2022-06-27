<template><div><h2 id="什么是双向链表" tabindex="-1"><a class="header-anchor" href="#什么是双向链表" aria-hidden="true">#</a> 什么是双向链表？</h2>
<p>双向链表 = head指针 + 双指针的节点 + 双指针的节点 + 双指针的节点 + ... 最后一个双指针节点</p>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105110813.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105110813.png" width="60%" height="50%"/>
</div>
# 为什么需要双向链表？
<h2 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h2>
<ol>
<li>相对于单向链表，双向链表中的有两个方向的指针的，所以双向链表既可以从头遍历到尾，也可以从尾遍历到头。</li>
<li>双向链表中每一个节点都包含两个指针，一个是向前的指针，一个是向后的指针。所以双向链表中很容易到达下一个节点，也很容易到达上一个节点。</li>
</ol>
<h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h2>
<ol>
<li>每一个节点都有两个指针，那么当我们插入或删除某个节点的时候就需要处理四个节点的引用。 — 但是当我们掌握的时候，这个缺点是可以忽略不计的。</li>
</ol>
<h2 id="怎么使用双向链表" tabindex="-1"><a class="header-anchor" href="#怎么使用双向链表" aria-hidden="true">#</a> 怎么使用双向链表？</h2>
<p>思路和单向链表基本一样，直接去看原文即可。侵删！<a href="https://www.jianshu.com/p/fb5a4169a618" target="_blank" rel="noopener noreferrer"> 点击这里看具体的实现方法<ExternalLinkIcon/></a></p>
</div></template>
