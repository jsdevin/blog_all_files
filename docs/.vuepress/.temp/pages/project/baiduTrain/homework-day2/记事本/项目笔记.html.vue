<template><div><h1 id="使用flex布局完成记事本" tabindex="-1"><a class="header-anchor" href="#使用flex布局完成记事本" aria-hidden="true">#</a> 使用flex布局完成记事本</h1>
<h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景" aria-hidden="true">#</a> 项目背景</h2>
<p>使用flex布局完成下图的静态页面。<a href="https://note.devin.ren/" target="_blank" rel="noopener noreferrer">已完成的线上版本<ExternalLinkIcon/></a>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207090423150.jpg" alt="静态图"></p>
<h2 id="需求分析与实现" tabindex="-1"><a class="header-anchor" href="#需求分析与实现" aria-hidden="true">#</a> 需求分析与实现</h2>
<ol>
<li>
<p>分析第一层布局
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207081558786.png" alt="第一层布局+个人中心的外层布局"></p>
<blockquote>
<p>div的高度是靠内容撑开的，如果只是对外面的第一层开启flex布局，而div里没有内容的话，在页面中是看不到东西的，所以多分析了一层，就是左侧的个人中心。</p>
</blockquote>
<p>在最外层的布局中，有两个红色的方框，div方框默认是换行的，为了使得两个div在同一行，就要开启flex布局，开启了flex布局就要考虑主轴的方向，主轴的方向默认是从左向右的，在这里刚好符合要求，不需要进行改变。
在左边的那个红色方框内，有两个黄色div方框，div默认是换行的，所以这里的两个div就不需要开启flex布局了。</p>
</li>
<li>
<p>分析左边的个人中心部分
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207090123353.png" alt="个人中心的主体内容布局分析">
只有一个需要开启flex布局，其它使用div默认的换行功能即可</p>
</li>
<li>
<p>分析右边的serf、记事本、学习建议部分
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207090145726.png" alt="分析右边部分的布局"></p>
</li>
<li>
<p>对记事本和学习建议这两块的分析
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207090309569.png" alt=""></p>
</li>
</ol>
<h2 id="我做了什么" tabindex="-1"><a class="header-anchor" href="#我做了什么" aria-hidden="true">#</a> 我做了什么</h2>
<p>依据给出的静态图，逐层分析各个结构，有思路有条理地进行布局。同时运用flex的实现这个小项目。</p>
<h2 id="我学到了什么" tabindex="-1"><a class="header-anchor" href="#我学到了什么" aria-hidden="true">#</a> 我学到了什么</h2>
<p>通过这次实践，我对flex语法越发熟悉，对html、css的使用越发熟练，让我对html、css产生信心，不再感觉自己html、css知识很薄弱，起码能完成基础的页面布局。
这是增强信心的一次实战！</p>
<hr>
<p><a href="https://sadose.gitee.io/day2/" target="_blank" rel="noopener noreferrer">参考网址<ExternalLinkIcon/></a></p>
</div></template>
