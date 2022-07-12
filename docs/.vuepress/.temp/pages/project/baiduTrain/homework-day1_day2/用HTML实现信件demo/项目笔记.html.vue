<template><div><h1 id="用html实现信件demo" tabindex="-1"><a class="header-anchor" href="#用html实现信件demo" aria-hidden="true">#</a> 用HTML实现信件demo</h1>
<h2 id="项目概要" tabindex="-1"><a class="header-anchor" href="#项目概要" aria-hidden="true">#</a> 项目概要</h2>
<p>本项目中，你的任务为对一封大学内网信件进行标记，这封信是研究人员对一名学生有关申请博士学位问题的回复。<a href="https://letter.devin.ren/" target="_blank" rel="noopener noreferrer">线上预览<ExternalLinkIcon/></a><br>
ps: 开始项目之前，请先下载信件的<a href="https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/letter-text.txt" target="_blank" rel="noopener noreferrer">原始文本<ExternalLinkIcon/></a>和 <a href="https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/marking-up-a-letter-start/css.txt" target="_blank" rel="noopener noreferrer">CSS 代码<ExternalLinkIcon/></a>。然后用文本编辑器创建一个新的 .html 文件来开始即可。</p>
<h2 id="需求分析与实现" tabindex="-1"><a class="header-anchor" href="#需求分析与实现" aria-hidden="true">#</a> 需求分析与实现</h2>
<ol>
<li>
<p>块/结构语义的分析<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207070044493.png" alt="块/结构语义的分析"><br>
异域舞蹈的列表使用的是dl&gt;dt&gt;dd， 详细介绍<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/dl" target="_blank" rel="noopener noreferrer">点击这里<ExternalLinkIcon/></a></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 补充：address标签的简单使用  </span>
<span class="token operator">&lt;</span>address<span class="token operator">></span>  
  <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>第<span class="token number">1</span>个a<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span><span class="token operator">&lt;</span>br<span class="token operator">></span>  
  <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">""</span><span class="token operator">></span>第<span class="token number">2</span>个a<span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">></span>  
<span class="token operator">&lt;</span><span class="token operator">/</span>address<span class="token operator">></span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>内联语义的分析<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207070055914.png" alt="内联语义"><br>
机器可读的日期需要使用<code v-pre>&lt;time&gt;</code>标签来标记。解析：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/time" target="_blank" rel="noopener noreferrer">机器可读的日期的解释<ExternalLinkIcon/></a><br>
设置类属性sender-column。解析：<a href="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207070232241.png" target="_blank" rel="noopener noreferrer">解析<ExternalLinkIcon/></a><br>
上标<code v-pre>&lt;sup&gt;上标&lt;/sup&gt;</code>，下标<code v-pre>&lt;sub&gt;下标&lt;/sub&gt;</code>。解析：<a href="https://www.php.cn/div-tutorial-413878.html" target="_blank" rel="noopener noreferrer">HTML中上标和下标的实现<ExternalLinkIcon/></a><br>
校训和引文: 用<code v-pre>&lt;cite&gt;</code>标签把指向其他文档的引用分离出来，尤其是分离那些传统媒体中的文档，如书籍、杂志、期刊等</p>
</li>
<li>
<p>文档的头部的分析<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207070102262.png" alt="文档的头部"><br>
<code v-pre>&lt;meta charset=&quot;UTF-8&quot;&gt;</code><br>
<code v-pre>&lt;meta name=&quot;author&quot; content=Devin&quot;&gt;</code></p>
</li>
</ol>
<h2 id="我干了什么" tabindex="-1"><a class="header-anchor" href="#我干了什么" aria-hidden="true">#</a> 我干了什么</h2>
<p>根据给出的要求，分析需要用到的元素标签，并将各个要求依照合理的先后顺序依次实现，完成HTML页面。</p>
<h2 id="我学到了什么" tabindex="-1"><a class="header-anchor" href="#我学到了什么" aria-hidden="true">#</a> 我学到了什么</h2>
<ol>
<li>列表的种类，除了有无序列表、有序列表外，还有dl&gt;dt&gt;dd列表</li>
<li>用<code v-pre>&lt;time&gt;</code>标签可以设置机器可读的时间、日期、时区</li>
<li>上标用<code v-pre>&lt;sup&gt;</code>设置，下标用<code v-pre>&lt;sub&gt;</code>设置</li>
<li>把文档的字符集声明为 utf-8： <code v-pre>&lt;meta charset=&quot;UTF-8&quot;&gt;</code></li>
<li>说明信件的作者：<code v-pre>&lt;meta name=&quot;author&quot; content=Devin&quot;&gt;</code></li>
</ol>
<h2 id="线上部署" tabindex="-1"><a class="header-anchor" href="#线上部署" aria-hidden="true">#</a> 线上部署</h2>
<p>自己有服务器，对html、css文件弄上线很容易，创建一个二级域名，在宝塔面板上将项目的源文件传上去即可。<br>
项目部署的线上地址: <a href="https://letter.devin.ren/" target="_blank" rel="noopener noreferrer">点击这里<ExternalLinkIcon/></a></p>
<p>项目的参考地址：https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter</p>
</div></template>
