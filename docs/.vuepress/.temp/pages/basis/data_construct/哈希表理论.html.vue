<template><div><h1 id="哈希化" tabindex="-1"><a class="header-anchor" href="#哈希化" aria-hidden="true">#</a> 哈希化</h1>
<h2 id="什么是哈希化" tabindex="-1"><a class="header-anchor" href="#什么是哈希化" aria-hidden="true">#</a> 什么是哈希化？</h2>
<ul>
<li>将 <strong>单词/大数字</strong> 转化成数组范围内下标 <strong>(小数字)</strong> 的过程, 我们就称之为哈希化.</li>
<li>更广泛点讲，就是将其它东西转换为数组对应的<strong>下标</strong>的过程就是哈希化。</li>
</ul>
<h2 id="为什么要进行哈希化" tabindex="-1"><a class="header-anchor" href="#为什么要进行哈希化" aria-hidden="true">#</a> 为什么要进行哈希化？</h2>
<ul>
<li>哈希化的结果是使得一些大数字转换成小数字，我们应该合理地问一下自己，为什么要将大数字转化为小数字，大数字有什么缺陷吗？ 不难发现，如果用大数字来作为数组下标，会导致数组长度增大很多，而且增大的数组长度很多都是用不上的（如下图以单词为例），所以就需要哈希化来减小数组长度。</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106112708.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106112708.png" width="60%" height="50%"/>
</div>
- 广泛地讲，进行哈希化的原因是：有些东西不适合作数组下标，但是它又非要作为数组下标，这时候就要想办法找一个工具把该东西等效为数组下标。
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106124704.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106124704.png" width="60%" height="50%"/>
</div>
# 哈希函数 
<h2 id="什么是哈希函数" tabindex="-1"><a class="header-anchor" href="#什么是哈希函数" aria-hidden="true">#</a> 什么是哈希函数？</h2>
<ul>
<li>通常我们会将单词转成大数字, 大数字在进行哈希化的代码实现放在一个函数中, 这个函数我们称为哈希函数.</li>
<li>哪个函数负责完成哈希化，哪个函数就是哈希函数！！！</li>
</ul>
<h2 id="为什么需要哈希函数" tabindex="-1"><a class="header-anchor" href="#为什么需要哈希函数" aria-hidden="true">#</a> 为什么需要哈希函数？</h2>
<ol>
<li>哈希化是在哈希函数中完成的。</li>
<li>有了哈希函数，我们就能将其它东西转换成有效的数组下标。就能创建哈希表了，哈希函数和哈希化是哈希表的基础！</li>
</ol>
<h1 id="哈希表" tabindex="-1"><a class="header-anchor" href="#哈希表" aria-hidden="true">#</a> 哈希表</h1>
<h2 id="什么是哈希表" tabindex="-1"><a class="header-anchor" href="#什么是哈希表" aria-hidden="true">#</a> 什么是哈希表？</h2>
<ul>
<li>最终将数据插入到的这个数组, 我们就称之为是一个哈希表</li>
</ul>
<h2 id="哈希表存在的困难" tabindex="-1"><a class="header-anchor" href="#哈希表存在的困难" aria-hidden="true">#</a> 哈希表存在的困难？</h2>
<h3 id="地址的冲突" tabindex="-1"><a class="header-anchor" href="#地址的冲突" aria-hidden="true">#</a> 地址的冲突</h3>
<ol>
<li>例子一
<ul>
<li>一个单词melioration通过哈希函数得到它自己的下标值后，发现那个位置上已经存在一个单词demystify，因为它经过哈希化后和melioration得到的下标值相同的。这样子就形成了冲突。</li>
</ul>
</li>
</ol>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106115914.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106115914.png" width="60%" height="50%"/>
</div>
<ol start="2">
<li>例子二</li>
</ol>
<ul>
<li>以数字为例，除以10，直至最后只剩一个单数。</li>
<li>如果插入的数据是13，24，68，19，22那就没事</li>
<li>但是当插入的数据再加一个32，那就麻烦了，22和32最后都是剩2，对应一个地址。冲突！</li>
</ul>
<h3 id="解决冲突的方法" tabindex="-1"><a class="header-anchor" href="#解决冲突的方法" aria-hidden="true">#</a> 解决冲突的方法</h3>
<h4 id="链地址法" tabindex="-1"><a class="header-anchor" href="#链地址法" aria-hidden="true">#</a> 链地址法</h4>
<ul>
<li>如图，在数组的每一项上存放一条链条，就叫链地址法。
<ul>
<li>链条有什么特点？
<ul>
<li>删除和插入非常方便，无论是在链条首端还是末端。</li>
</ul>
</li>
<li>为什么不用数组？
<ul>
<li>因为数组最大的优势是根据下标查询元素，插入和删除元素恰恰是它的缺陷。</li>
</ul>
</li>
</ul>
</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107111814.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220107111814.png" width="60%" height="50%"/>
</div>
<h4 id="开放地址法-可以跳过" tabindex="-1"><a class="header-anchor" href="#开放地址法-可以跳过" aria-hidden="true">#</a> 开放地址法 （可以跳过）</h4>
<ul>
<li>开放地址法的主要工作方式是寻找空白的单元格来添加重复的数据</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106121734.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220106121734.png" width="60%" height="50%"/>
</div>
<ul>
<li>根据探索步长d不同，探索这个数据的存放位置有三种方法
<ul>
<li>线性探测
<ul>
<li>步长为d++。</li>
<li>从首次哈希化得到的下标值x开始, 线性测试就是x+1, x+2, x+3依次探测。找到合适的地址就插入数据。</li>
</ul>
</li>
<li>二次探测
<ul>
<li>步长为(d++)^2</li>
<li>从首次哈希化得到的下标值x开始, 那么二次测试就是x+1², x+2², x+3²依次探测.</li>
</ul>
</li>
<li>再哈希法
<ul>
<li>线性探测和二次探测都存在一个问题，容易使得元素聚集(例：如果插入的数据是连续的如2，3，4，5...，那线性探测就形成聚集），影响性能。</li>
<li>什么是再哈希法？
<ul>
<li>把关键字用另外一个哈希函数, 再做一次哈希化, 用这次哈希化的结果作为步长，就是再哈希法。</li>
<li>专家设计的很好的哈希函数
<ul>
<li>tepSize = constant - (key - constant)</li>
<li>其中constant是质数, 且小于数组的容量.</li>
<li>例如: stepSize = 5 - (key % 5), 满足需求, 并且结果不可能为0.</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h4 id="对比效率我们知道二者中链地址法更好。开放地址法了解即可-日常使用中还是以链地址法为主。" tabindex="-1"><a class="header-anchor" href="#对比效率我们知道二者中链地址法更好。开放地址法了解即可-日常使用中还是以链地址法为主。" aria-hidden="true">#</a> 对比效率我们知道二者中链地址法更好。开放地址法了解即可，日常使用中还是以链地址法为主。</h4>
<ul>
<li>Java中的hashMap也是使用链地址法。</li>
</ul>
<h1 id="哈希表的优势" tabindex="-1"><a class="header-anchor" href="#哈希表的优势" aria-hidden="true">#</a> 哈希表的优势</h1>
<ol>
<li>哈希表提供非常快的增删查操作。（插入、删除、查找）</li>
<li>相比于树，哈希表的查找速度更快，编码更简单！</li>
</ol>
<h1 id="哈希表的缺陷" tabindex="-1"><a class="header-anchor" href="#哈希表的缺陷" aria-hidden="true">#</a> 哈希表的缺陷</h1>
<ol>
<li>哈希表中的数据是无序的，所以哈希表不支持遍历。</li>
<li>哈希表中的key是不允许重复的，不能用相同的key来保存多个元素。</li>
</ol>
<h1 id="哈希表的使用场景" tabindex="-1"><a class="header-anchor" href="#哈希表的使用场景" aria-hidden="true">#</a> 哈希表的使用场景</h1>
<ol>
<li>哈希表适合那些查找性能要求高，元素之间可以毫无逻辑的情况。</li>
<li>例一：电话本，根据对方名字找电话号码，但是电话本中每一个人的电话号码可以毫无关系。</li>
</ol>
</div></template>
