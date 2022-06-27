<template><div><h2 id="什么是数组" tabindex="-1"><a class="header-anchor" href="#什么是数组" aria-hidden="true">#</a> 什么是数组？</h2>
<p>数组是一种特殊的变量对象，它能够一次存放多个值。</p>
<h2 id="为什么需要数组" tabindex="-1"><a class="header-anchor" href="#为什么需要数组" aria-hidden="true">#</a> 为什么需要数组？</h2>
<p>通过将数据封装到数组中，能够更好地对多个数据进行管理和操作。同时将数据封装为数组也能使得代码更简洁。</p>
<h3 id="不使用数组时" tabindex="-1"><a class="header-anchor" href="#不使用数组时" aria-hidden="true">#</a> 不使用数组时</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var car1 = &quot;Saab&quot;;
var car2 = &quot;Volvo&quot;;
var car3 = &quot;BMW&quot;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用数组后" tabindex="-1"><a class="header-anchor" href="#使用数组后" aria-hidden="true">#</a> 使用数组后</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var cars = [&quot;Saab&quot;,&quot;Volvo&quot;,&quot;BMW&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>有了数组后，数据之间还产生了联系(通过下标有先后的排序，方便获取和遍历)，更加方便对数据进行管理和操作。</p>
<h2 id="怎么使用数组这种数据结构-数组都有哪些操作" tabindex="-1"><a class="header-anchor" href="#怎么使用数组这种数据结构-数组都有哪些操作" aria-hidden="true">#</a> 怎么使用数组这种数据结构？(数组都有哪些操作)</h2>
<h3 id="创建数组" tabindex="-1"><a class="header-anchor" href="#创建数组" aria-hidden="true">#</a> 创建数组</h3>
<p>语法：var 数组名 = [ ]</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var arr = ['devin','lily','PinkPig'] //封装了三个字符串数据的数组arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数组的核心操作-—-增删改查" tabindex="-1"><a class="header-anchor" href="#数组的核心操作-—-增删改查" aria-hidden="true">#</a> 数组的核心操作 — 增删改查</h3>
<h4 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h4>
<ol>
<li>
<p>push()
在数组最后面添加一个元素。—使用得最多得方法</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>arr.push('SmallPig') //执行完之后，数组arr将会变成['devin','lily','PinkPig','SmallPig']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>unshift()
在数组最前面添加一个元素。</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>arr.unshift('Home') //执行完之后，数组arr将会变成['Home','devin','lily','PinkPig','SmallPig']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ps:  虽然可以用遍历来达到在数组最前面添加一个元素的目标，但是性能不高，不建议使用。</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//代码来自coderwhy老师,侵删。

// 初始化一个数组
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// 在数组首位插入一个元素
for (var i = numbers.length; i &gt; 0; i--) {
    numbers[i] = numbers[i-1] //前一位元素的值赋到后一位去。
}
numbers[0] = -1 //最开始的那一位赋值自己想要插入的值
alert(numbers) // -1,0,1,2,3,4,5,6,7,8,9

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h4>
<ol>
<li>
<p>pop()
删除数组最后面的一个元素。 — 使用得最多</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>arr.pop() //执行完之后数组arr将会变成['Home','devin','lily','PinkPig']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>shift()
删除数组最前面的一个元素。</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>arr.shift() ////执行完之后数组arr将会变成['devin','lily','PinkPig']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>ps: 自己用遍历实现删除首位元素。（太耗性能，不建议使用）</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//代码来自于coderwhy老师，侵删。
// 删除首位的元素
for (var i = 0; i &lt; numbers.length; i++) {
    numbers[i] = numbers[i+1] //后一位替代前一位
}
numbers.pop() //删掉最后的那一个，它已经跑到前一位去了。
console.log(numbers) //0,1,2,3,4,5,6,7,8,9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="改" tabindex="-1"><a class="header-anchor" href="#改" aria-hidden="true">#</a> 改</h4>
<ol>
<li>splice()
<ul>
<li>splice的语法：splice('开始操作的索引位置'，'删除的元素个数'，'','','')</li>
<li>第三个参数开始可以理解为要在索引前面插入的内容。根据这一点，会发现splice()可以实现增删改。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//初始时：arr: ['devin','lily','PinkPig']

//增
arr.splice('2','0','pig1','pig2','pig3') //可以理解为从索引为2的元素开始(包括索引2)，删除0个元素，并且将'pig1','pig2','pig3'插入到索引为2的元素前面的位置。
//结果时arr：['devin', 'lily', 'pig1', 'pig2', 'pig3', 'PinkPig']

//删
arr.splice('2','3')  //从索引2开始，包括索引2的元素，删除三个元素
//结果时arr：['devin', 'lily', 'PinkPig']

//改
arr.splice('1','2','pig1','pig2','pig3')  //从索引1 开始，包括索引1的元素，删除两个元素，将后面三个参数元素插入到索引1前面。
//结果时arr：['devin', 'pig1', 'pig2', 'pig3']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h4 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h4>
<ol>
<li>
<p>获得数组长度
获得数组长度的语法是：<code v-pre>arr.length</code> ;</p>
</li>
<li>
<p>获得数组的所有元素 — 遍历数组
数组遍历的语法如下：</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//数组遍历
for(int i = 0; i &lt; arr.length; i++) {
  console.log(arr[i]) // 依次会打印出devin, pig1, pig2, pig3
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>获取数组的单个元素
语法： 数组名.[元素的索引]</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>arr[2] //pig2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<h3 id="数组的其它方法" tabindex="-1"><a class="header-anchor" href="#数组的其它方法" aria-hidden="true">#</a> 数组的其它方法</h3>
<p>详细请到原文地址看，侵删。</p>
<p><a href="https://www.jianshu.com/p/9521594710d7" target="_blank" rel="noopener noreferrer">数据结构(二)之数组结构 - 简书 (jianshu.com)<ExternalLinkIcon/></a></p>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000336.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105000336.png" width="60%" height="50%"/>
</div>
<h2 id="数组的缺陷" tabindex="-1"><a class="header-anchor" href="#数组的缺陷" aria-hidden="true">#</a> 数组的缺陷</h2>
<h3 id="增删改的能力弱" tabindex="-1"><a class="header-anchor" href="#增删改的能力弱" aria-hidden="true">#</a> 增删改的能力弱</h3>
<ol>
<li>数组创建的时候必须分配一块固定的连续的内存，数组大小一经确定无法改变，当数组需要扩容时代价极大</li>
<li>对数组开头的元素和中间的元素操作时，代价极大。使用unshift和splice时也是一样，背后的代价极大。</li>
<li>查找某个元素是否存在时需要遍历整个数组，代价大。</li>
</ol>
<h2 id="数组的优点" tabindex="-1"><a class="header-anchor" href="#数组的优点" aria-hidden="true">#</a> 数组的优点</h2>
<h3 id="读数据的能力强" tabindex="-1"><a class="header-anchor" href="#读数据的能力强" aria-hidden="true">#</a> 读数据的能力强</h3>
<ol>
<li>根据<strong>数组下标</strong>查找元素速度快，遍历数据快。 —这是数组最大的优势。</li>
</ol>
<h2 id="数组的适用范围" tabindex="-1"><a class="header-anchor" href="#数组的适用范围" aria-hidden="true">#</a> 数组的适用范围</h2>
<p>数据所适合的是 <strong>读操作多，写操作少</strong> 的场景！</p>
</div></template>
