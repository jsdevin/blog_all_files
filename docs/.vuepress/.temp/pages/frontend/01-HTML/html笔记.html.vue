<template><div><h1 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> HTML</h1>
<h2 id="html中常用的元素" tabindex="-1"><a class="header-anchor" href="#html中常用的元素" aria-hidden="true">#</a> HTML中常用的元素</h2>
<p>第一层次：标题元素h、段落元素p、图片元素img、超链接元素a、嵌入其它HTML文档的元素iframe、非语义化标签div和span<br>
第二层次：ul、ol、li、button、input、table、thead、tbody、thead、th、tr、td<br>
这些标签mdn上都有详细的介绍。</p>
<ol>
<li>img标签有两个常见的属性。src代表的是图片的源，包含的是文件的路径；alt属性有两个作用，其一是当图片加载不成功，会显示这段文本，其二是便于使用阅读代码的人知道图像的含义。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>img  
  src <span class="token operator">=</span> <span class="token string">'https://cn.bing.com/?FORM=Z9FD1'</span>  
  alt <span class="token operator">=</span> <span class="token string">'必应搜索引擎的logo'</span>  
<span class="token operator">></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>a标签有两个常见的属性。href代表的是要打开的url地址，也可以是一个本地地址，href也可以跳转到锚点；target指定的是在何处显示链接的资源，-self表示在当前窗口打开url, _blank表示在新窗口中打开。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>a   
  href <span class="token operator">=</span> <span class="token string">'https://baidu.com'</span>  
  target <span class="token operator">=</span> <span class="token string">'_self'</span>  
<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>  
  
<span class="token comment">// 锚点的设置  </span>
<span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">'one'</span><span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>  
<span class="token operator">&lt;</span>p id<span class="token operator">=</span><span class="token string">'two'</span><span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>  
<span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">'#one'</span><span class="token operator">></span>锚点跳转，用#id格式即可<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>在当前页面嵌入HTML页面的标签iframe，有两个常用属性。src接收的是要嵌套的网页的地址，frameborder代表的是是否要显示边框，1代表着显示，0代表着不显示。</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>iframe  
  src<span class="token operator">=</span><span class="token string">'https://taobao.com'</span>  
  frameborder<span class="token operator">=</span><span class="token string">'0'</span>  
<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>iframe<span class="token operator">></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见的字符实体" tabindex="-1"><a class="header-anchor" href="#常见的字符实体" aria-hidden="true">#</a> 常见的字符实体</h2>
<p>空格：<code v-pre>&amp;nbsp;</code><br>
小于号&lt; : <code v-pre>&amp;It;</code><br>
大于号&gt; : <code v-pre>&amp;gt;</code></p>
<h2 id="html5" tabindex="-1"><a class="header-anchor" href="#html5" aria-hidden="true">#</a> HTML5</h2>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206302019101.png" alt="HTML5页面的标签划分"></p>
<hr>
<h2 id="html-语义化" tabindex="-1"><a class="header-anchor" href="#html-语义化" aria-hidden="true">#</a> html 语义化</h2>
<ul>
<li>【给出结论】语义化标签是好东西，能用就优先用。</li>
<li>【分类】
<ul>
<li>非语义化标签： div 、span</li>
<li>语义化标签： 除了上面的两个，其余都是。
<ul>
<li>语义化标签即是指标签本身有自己的含义，比如标题标签<code v-pre>&lt;h1&gt;&lt;/h1&gt;</code>，段落标签<code v-pre>&lt;p&gt;&lt;/p&gt;</code>。</li>
</ul>
</li>
</ul>
</li>
<li>【官方含义】
<ul>
<li>语义化的含义就是用<strong>正确的标签做正确的事情</strong>，html语义化就是让页面的内容结构化，<strong>便于</strong>对浏览器、搜索引擎<strong>解析</strong>；在没有样式CCS情况下也以一种文档格式显示，并且是<strong>容易阅读</strong>的。 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，<strong>利于 SEO</strong> 。使阅读源代码的人对网站更容易将网站分块，便于<strong>阅读维护理解</strong>。</li>
</ul>
</li>
<li>【补充】
<ul>
<li>我们需要知道的是，语义化标签能干的事，非语义化标签都能干。比如：<code v-pre>&lt;h2&gt;这里是标题&lt;/h2&gt;</code> 也可以写成<code v-pre>&lt;div id = 'onlyname'&gt;这里是标题&lt;/div&gt;</code>，然后再用css来设置div变成h2同样的样式即可。</li>
</ul>
</li>
<li>【含义的通俗理解】
<ul>
<li>对程序员：结构清晰，便于阅读，易于维护。</li>
<li>对浏览器、搜索引擎：便于解析，利于SEO。</li>
</ul>
</li>
<li>【一句话总结】html标签语义化到底是个什么东西？怎么理解它？
<ul>
<li><strong>html标签语义化就是使用正确的标签做正确的事情，避免了大面积使用div+css的混乱现象，写出易于开发者阅读，浏览器解析的规范代码。</strong></li>
</ul>
</li>
</ul>
<!-- 非语义化标签的总结 -->   
<h2 id="div" tabindex="-1"><a class="header-anchor" href="#div" aria-hidden="true">#</a> div</h2>
<ol>
<li>div 是一个非语义化标签元素，也是一个块级标签。</li>
<li>div 标签是一个容器，在不使用CSS的情况下，其对内容或布局没有任何影响。</li>
<li>div 标签可以把文档分割成一块一块的，方便布局。它可以用作严格的组织工具，并且不使用任何格式与其关联。</li>
<li>div在css的作用下会发挥出巨大的作用。<br>
【一句话总结】<strong>div是一个其他标签的容器；div常用于页面布局。</strong></li>
</ol>
<h2 id="span" tabindex="-1"><a class="header-anchor" href="#span" aria-hidden="true">#</a> span</h2>
<ol>
<li>和div一样，都是非语义化标签。</li>
<li>span是行内元素，无法通过css设置宽度和高度，只能设置其所处的位置，而且其不能独占一行，只能占据自身大小，后面有其他行内元素的话，会紧跟着它在同一行排列。</li>
</ol>
<p><em>div 和 span 是 html 最重要的两个标签，其用法可能目前我还没有完全挖掘并掌握，以后再补充。</em></p>
<h2 id="下面是一些常用的标签" tabindex="-1"><a class="header-anchor" href="#下面是一些常用的标签" aria-hidden="true">#</a> 下面是一些常用的标签：</h2>
<ol>
<li><code v-pre>&lt;h&gt;</code> 标题标签，共有六种，分别为h1，h2，h3，h4，h5，h6，字体逐一减小，h1最大，h6最小。语法：<code v-pre>&lt;h1&gt;&lt;/h1&gt;</code></li>
<li><code v-pre>&lt;p&gt;</code> 段落标签，共有六种，分别为p1 ~ h6，字体逐一减小，p1最大，p6最小。语法：<code v-pre>&lt;p1&gt;&lt;/p1&gt;</code></li>
<li><code v-pre>&lt;a&gt;</code> 超链接标签，用于从一张页面链接到另一张页面。语法：<code v-pre>&lt;a href=&quot;链接&quot;&gt;任意文本&lt;/a&gt;</code></li>
<li><code v-pre>&lt;img&gt;</code> 引图片标签，是个单标签。语法：<code v-pre>&lt;img src=&quot;路径&quot;/&gt;</code></li>
<li><code v-pre>ul-li</code> 无序列表，标签效果是在子项前面有小黑点。语法如下：
<ul>
<li><code v-pre>&lt;ul&gt;</code>
<ul>
<li><code v-pre>&lt;li&gt;文本一&lt;li/&gt;</code></li>
<li><code v-pre>&lt;li&gt;文本二&lt;li/&gt;</code></li>
<li><code v-pre>&lt;li&gt;文本三&lt;li/&gt;</code></li>
<li><code v-pre>&lt;li&gt;文本四&lt;li/&gt;</code></li>
</ul>
</li>
<li><code v-pre>&lt;ul/&gt;</code></li>
</ul>
</li>
<li><code v-pre>ol-li</code> 有序列表，标签效果是在子项前面有数字排序。语法如下：
<ul>
<li><code v-pre>&lt;ol&gt;</code>
<ul>
<li><code v-pre>&lt;li&gt;文本一&lt;li/&gt;</code></li>
<li><code v-pre>&lt;li&gt;文本二&lt;li/&gt;</code></li>
<li><code v-pre>&lt;li&gt;文本三&lt;li/&gt;</code></li>
<li><code v-pre>&lt;li&gt;文本四&lt;li/&gt;</code></li>
</ul>
</li>
<li><code v-pre>&lt;ol/&gt;</code></li>
</ul>
</li>
<li><code v-pre>&lt;table&gt;</code> 表格标签
<ul>
<li>可以将一个表格分成三个部分: 头部(thead)、主体(tbody)、底部(tfoot)</li>
<li>在分析这三个部分之前，先介绍两个标签，<code v-pre>&lt;tr&gt;、&lt;td&gt;</code> 。
<ul>
<li><code v-pre>&lt;tr&gt;</code> 标签表示的是表格中的一行。</li>
<li><code v-pre>&lt;td&gt;</code> 标签表示的是表格中一行中的一格。</li>
<li><code v-pre>&lt;th&gt;</code> 标签表示第一行中的一格 (本质上是td元素，就是比td元素多了个加粗的效果)</li>
</ul>
</li>
<li><code v-pre>&lt;thead&gt;</code> 放置的是头部的信息，也就是加粗的那一行。 thead &gt; tr &gt; th</li>
<li><code v-pre>&lt;tbody&gt;</code> 放置的是表格中主体的信息。tbody &gt; tr &gt; td</li>
<li><code v-pre>&lt;tfoot&gt;</code> 和 <code v-pre>&lt;thead&gt;</code> 设置相同。</li>
<li>thead、tbody、tfoot 这三个标签是可以不写的，写了的话结构会更清晰一点。</li>
<li>完整表格代码实例： --表格的主要标签还是 tr、th、td<br>
<img src="https://api2.mubu.com/v3/document_image/b4beeea3-a98a-4b29-86be-2f46a968366a-11752736.jpg" alt="2"></li>
</ul>
</li>
<li><code v-pre>&lt;form&gt;</code>  表单标签 -- 用于搜集不同类型的用户输入
<ul>
<li>
<p>文本框 、密码框 input --- text 、 password</p>
</li>
<li>
<p>单选 input --- type = &quot;radio&quot;</p>
</li>
<li>
<p>多选 input ---type = &quot;checkbox&quot;</p>
</li>
<li>
<p>下拉菜单 select &gt; option</p>
</li>
<li>
<p>表单的一些属性</p>
<ul>
<li>
<p>form标签的属性 action</p>
<ul>
<li><strong>action</strong> 属性 ，它的值写的是要提交的服务器地址。</li>
</ul>
</li>
<li>
<p>input标签的属性 name、value</p>
<ul>
<li><strong>name</strong> 属性，它的值用来区分不同的input标签</li>
<li><strong>value</strong> 属性，它的值作为用户填写的值传递给服务器。</li>
</ul>
</li>
<li>
<p>表单父元素和子元素都有的一些属性</p>
<ul>
<li>
<p>autocomplete = &quot; &quot; -- 自动补全</p>
<ul>
<li>on --- 开启自动补全</li>
<li>off --- 关闭自动补全</li>
<li>自动补全的意思就是 是否联想以往输入过的值</li>
</ul>
</li>
<li>
<p>readonly --- 将表单项设置为只读，数据会提交</p>
</li>
<li>
<p>disabled --- 将表单项设置为禁用，数据不会提交</p>
</li>
<li>
<p>autofocus --- 设置表单项自动获取焦点</p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ol>
<ul>
<li><code v-pre>&lt;form&gt;</code>
<ul>
<li>这里面写的是表单的子标签，input、select之类的。</li>
</ul>
</li>
<li><code v-pre>&lt;form/&gt;</code></li>
</ul>
</div></template>
