<template><div><h1 id="什么是树" tabindex="-1"><a class="header-anchor" href="#什么是树" aria-hidden="true">#</a> 什么是树？</h1>
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107144035.png" width="60%" height="50%"/>
</div>
<h2 id="树的定义" tabindex="-1"><a class="header-anchor" href="#树的定义" aria-hidden="true">#</a> 树的定义</h2>
<ul>
<li>树的定义: n（n≥0）个结点构成的有限集合。</li>
<li>当n=0时，称为空树；</li>
<li>对于任一棵非空树（当n&gt; 0时），它具备以下性质：
<ol>
<li>树中有一个称为“根（Root）”的特殊结点，用 r 表示；</li>
<li>其余结点可分为m(m&gt;0)个互不相交的有限集T1，T2，... ，Tm，其中每个集合本身又是一棵树，称为原来树的“子树（SubTree）”</li>
</ol>
<ul>
<li>注意 :</li>
<li>子树之间不可以相交</li>
<li>除了根结点外，每个结点有且仅有一个父结点；
一棵N个结点的树有N-1条边。</li>
</ul>
</li>
</ul>
<h2 id="树的术语" tabindex="-1"><a class="header-anchor" href="#树的术语" aria-hidden="true">#</a> 树的术语</h2>
<ol>
<li>
<p>结点的度（Degree）：结点的子树个数.</p>
</li>
<li>
<p>树的度：树的所有结点中最大的度数. (树的度通常为结点的个数N-1)</p>
</li>
<li>
<p>叶结点（Leaf）：度为0的结点. (也称为叶子结点)</p>
</li>
<li>
<p>父结点（Parent）：有子树的结点是其子树的根结点的父结点</p>
</li>
<li>
<p>子结点（Child）：若A结点是B结点的父结点，则称B结点是A结点的子结点；子结点也称孩子结点。</p>
</li>
<li>
<p>兄弟结点（Sibling）：具有同一父结点的各结点彼此是兄弟结点。</p>
</li>
<li>
<p>路径和路径长度：从结点n1到nk的路径为一个结点序列n1 , n2,… , nk, ni是 ni+1的父结点。路径所包含边的个数为路径的长度。</p>
</li>
<li>
<p>结点的层次（Level）：规定根结点在1层，其它任一结点的层数是其父结点的层数加1。</p>
</li>
<li>
<p>树的深度（Depth）：树中所有结点中的最大层次是这棵树的深度。</p>
</li>
</ol>
<h1 id="为什么要有树" tabindex="-1"><a class="header-anchor" href="#为什么要有树" aria-hidden="true">#</a> 为什么要有树？</h1>
<p>我们之前已经学习了多种数据结构来保存数据，为什么要使用树结构来保存数据呢？ 树结构和数组 / 链表 / 哈希表的对比有什么优点呢？</p>
<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h3>
<h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点</h4>
<ul>
<li>数组的主要优点是根据下标值访问效率会很高.</li>
<li>但是如果我们希望根据元素来查找对应的位置呢?</li>
<li>比较好的方式是先对数组进行排序, 再进行二分查找.</li>
</ul>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4>
<ul>
<li>需要先对数组进行排序, 生成有序数组, 才能提高查找效率.</li>
<li>另外数组在插入和删除数据时, 需要有大量的位移操作(插入到首位或者中间位置的时候), 效率很低.</li>
</ul>
<h3 id="链表" tabindex="-1"><a class="header-anchor" href="#链表" aria-hidden="true">#</a> 链表</h3>
<h4 id="优点-1" tabindex="-1"><a class="header-anchor" href="#优点-1" aria-hidden="true">#</a> 优点</h4>
<ul>
<li>链表的插入和删除操作效率都很高.</li>
</ul>
<h4 id="缺点-1" tabindex="-1"><a class="header-anchor" href="#缺点-1" aria-hidden="true">#</a> 缺点</h4>
<ul>
<li>查找效率很低, 需要从头开始依次访问链表中的每个数据项, 直到找到.</li>
<li>而且即使插入和删除操作效率很高, 但是如果要插入和删除中间位置的数据, 还是需要重头先找到对应的数据.</li>
</ul>
<h3 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h3>
<h4 id="优点-2" tabindex="-1"><a class="header-anchor" href="#优点-2" aria-hidden="true">#</a> 优点</h4>
<ul>
<li>我们学过哈希表后, 已经发现了哈希表的插入/查询/删除效率都是非常高的</li>
<li>但是哈希表也有很多缺点.</li>
</ul>
<h4 id="缺点-2" tabindex="-1"><a class="header-anchor" href="#缺点-2" aria-hidden="true">#</a> 缺点</h4>
<ul>
<li>空间利用率不高, 底层使用的是数组, 并且某些单元是没有被利用的.</li>
<li>哈希表中的元素是无序的, 不能按照固定的顺序来遍历哈希表中的元素.</li>
<li>不能快速的找出哈希表中的最大值或者最小值这些特殊的值.</li>
</ul>
<h3 id="树结构" tabindex="-1"><a class="header-anchor" href="#树结构" aria-hidden="true">#</a> 树结构</h3>
<ul>
<li>我们不能说树结构比其他结构都要好, 因为每种数据结构都有自己特定的应用场景.</li>
<li>但是树确实也综合了上面的数据结构的优点(当然优点不足于盖过其他数据结构, 比如效率一般情况下没有哈希表高), 并且也弥补了上面数据结构的缺点.</li>
<li>而且为了模拟某些场景, 我们使用树结构会更加方便. 比如文件的目录结构.</li>
</ul>
<p>学习理解自coderwhy老师的文章，侵删。原文地址<a href="https://www.jianshu.com/p/b7d501591eb7" target="_blank" rel="noopener noreferrer">点这里<ExternalLinkIcon/></a>。</p>
</div></template>
