<template><div><h1 id="css基础" tabindex="-1"><a class="header-anchor" href="#css基础" aria-hidden="true">#</a> CSS基础</h1>
<h3 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h3>
<ul>
<li>
<p>行内元素的盒模型</p>
<ul>
<li>行内元素不支持设置width和height，即使设置了也不会发生效果，也就是说行内元素的大小是固定的。</li>
<li>行内元素可以设置padding，border，margin的值，但是垂直方向的设置都不会发生效果</li>
<li>行内元素如span，可以设置位置，但不能设置大小。</li>
</ul>
</li>
<li>
<p>行内元素和块元素的互换</p>
<ul>
<li>
<p><strong>display</strong> 用来设置元素显示的类型</p>
<ul>
<li>
<p>inline 将元素设置为行内元素</p>
</li>
<li>
<p>block 将元素设置为块元素</p>
</li>
<li>
<p>inline-block 将元素设置为行内块元素</p>
</li>
<li>
<p>行内块，既可以设置宽度和高度又不会独占一行</p>
</li>
<li>
<p>table 将元素设置为一个表格</p>
</li>
<li>
<p>none 元素不在页面中显示</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p><strong>visibility</strong> 用来设置元素的显示状态</p>
<ul>
<li>visible 默认值，元素在页面中正常显示</li>
<li>hidden 元素在页面中隐藏 不显示，但是依然占据页面的位置</li>
</ul>
</li>
<li>
<p>盒子的大小</p>
<ul>
<li>
<p>默认情况下，盒子可见框的大小由内容区、内边距和边框共同决定</p>
</li>
<li>
<p><strong>属性box-sizing</strong> 用来设置盒子尺寸的计算方式(设置width和height的作用)</p>
</li>
<li>
<p>可选值：</p>
</li>
<li>
<p>conten-box 默认值，宽度和高度用来设置内容区的大小</p>
<ul>
<li>此时的width和height指的是内容区的大小</li>
</ul>
</li>
<li>
<p>border-box 宽度和高度用来设置整个盒子可见框的大小</p>
<ul>
<li>此时的width 和 height 指的是内容区 和 内边距和 边框的总大小</li>
</ul>
</li>
</ul>
</li>
<li>
<p>轮廓阴影</p>
<ul>
<li>
<p>属性<strong>box-shadow</strong> 用来设置元素的阴影效果，阴影不会影响页面布局</p>
<ul>
<li>第一个值 水平偏移量 设置阴影的水平位置 正值向右移动 负值向左移动</li>
<li>第二个值垂直偏移量 设置阴影的水平位置 正值向下移动 负值向上移动</li>
<li>第三个值 阴影的模糊半径</li>
<li>第四个值 阴影的颜色</li>
<li>box-shadow：Opx apx 50px Orgba(0, 0, 9, .3) ;</li>
</ul>
</li>
<li>
<p>属性 <strong>outline</strong> 用来设置元素的轮廓线，用法和border一模一样</p>
</li>
<li>
<p>轮廓和边框border不同的点，就是轮廓不会影响到可见框的大小</p>
</li>
</ul>
</li>
<li>
<p>圆角</p>
<ul>
<li>border-radius：用来设置圆角 圆角设置的圆的半径大小</li>
<li>border-top-left-radius:</li>
<li>border-top-right-radius</li>
<li>border-bottom-left-radius:</li>
<li>border-bottom-right-radius:</li>
<li>border-top-left-radius:50px 100px；</li>
<li>border-radius 可以分别指定四个角的圆角
<ul>
<li>四个值    左上 右上 右下 左下</li>
<li>三个值    左上 右上/左下 右下</li>
<li>两个值    左上/右下 右上/左下</li>
</ul>
</li>
</ul>
</li>
<li>
<p>将元素设置为一个圆形</p>
<ul>
<li>border-radius：50%；</li>
</ul>
</li>
</ul>
<h3 id="浮动-设置大局" tabindex="-1"><a class="header-anchor" href="#浮动-设置大局" aria-hidden="true">#</a> 浮动 - - -设置大局</h3>
<ul>
<li>
<p>浮动介绍</p>
<ul>
<li>
<p>基础介绍</p>
<ul>
<li>
<p>通过浮动可以使一个元素向其父元素的左侧或右侧移动</p>
</li>
<li>
<p>使用<strong>float</strong> 属性来设置于元素的浮动</p>
</li>
<li>
<p>可选值：</p>
<ul>
<li>none 默认值 ，元素不浮动</li>
<li>left 元素向左浮动</li>
<li>right 元素向右浮动</li>
</ul>
</li>
<li>
<p>注意，元素设置浮动以后，水平布局的等式便不需要强制成立</p>
</li>
<li>
<p><strong>元素设置浮动以后，会完全从文档流中脱离，不再占用文档流的位置</strong>，所以元素下边的还在文档流中的元素会自动向上移动</p>
</li>
</ul>
</li>
<li>
<p>浮动的特点：</p>
<ul>
<li>1、浮动元素会完全脱离文档流，不再占据文档流中的位置</li>
<li>2、设置浮动以后元素会向父元素的左侧或右侧移动，</li>
<li>3、浮动元素默认不会从父元素中移出</li>
<li>4、浮动元素向左或向右移动时，不会超过它前边的其他浮动元素</li>
<li>5、如果浮动元素的上边是一个没有浮动的块元素，则浮动元素无法上移</li>
<li>6、浮动元素不会超过它上边的浮动的兄弟元素，最多最多就是和它一样高</li>
</ul>
</li>
<li>
<p>简单总结：</p>
<ul>
<li>浮动目前来讲它的主要作用就是让页面中的元素可以水平排列，通过浮动可以制作一些水平方向的布局</li>
</ul>
</li>
<li>
<p>浮动带来的问题</p>
<ul>
<li>
<p>高度塌陷问题</p>
<ul>
<li>为父元素设置overflow:auto;就能解决子元素浮动带来的高度塌陷问题，也就可以不用写死父元素的高度，让它可以自由地被内容撑开。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>解决浮动隐患 -- after 、clear</p>
</li>
<li>
<p><strong>clearfix</strong> 最好的解决浮动隐患办法。</p>
<ul>
<li>
<p>可以同时解决高度塌陷和外边距重叠的问题。需要使用时，在所设元素的类名中加入clearfix就行，前提是需要在style标签中设置clearfix的功能。</p>
</li>
<li>
<p>clearfix代码</p>
<ul>
<li>
<p>如下css代码即可设置clearfix的功能</p>
<p><img src="https://api2.mubu.com/v3/document_image/bf0a00e2-45eb-4c8e-8ae3-d0d22e113d2a-11752736.jpg" alt=""></p>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="定位-细节微调" tabindex="-1"><a class="header-anchor" href="#定位-细节微调" aria-hidden="true">#</a> 定位  - - - 细节微调</h3>
<ul>
<li>
<p>定位语法：position： ；</p>
<ul>
<li>
<p>可选类型：</p>
<ul>
<li>relative 相对定位</li>
<li>absolutive 绝对定位</li>
<li>...</li>
</ul>
</li>
<li>
<p>可选值（偏移值）offset</p>
<ul>
<li>top</li>
<li>button</li>
<li>left</li>
<li>right</li>
</ul>
</li>
<li>
<p>开启定位以后，如果不设置偏移量，元素位置不会发生改变。</p>
</li>
<li>
<p>开启定位以后，元素提升一个层级，优先显示。</p>
</li>
</ul>
</li>
<li>
<p>相对定位（灵魂出窍，肉体仍在） relative</p>
<ul>
<li>开启相对定位<strong>不会跳出文档流, 也不能使元素由行内元素变成块元素。</strong></li>
<li>相对定位的偏移基准是其本身所处的位置。也就是参照其本身所处的位置进行偏移的。</li>
</ul>
</li>
<li>
<p>绝对定位 （超出三界之外，不在五行之中） absolutive</p>
<ul>
<li>
<p>开启绝对定位直接跳出文档流，也会使得元素变成块元素，这时元素如果不写死宽高就会由内容撑开。</p>
</li>
<li>
<p>绝对定位的移动基准是包含块。</p>
<ul>
<li>
<p>绝对定位的包含块就是<strong>离它最近的开启了定位的祖先元素。</strong></p>
<ul>
<li>如果所有的祖先元素都没有开启定位，则根元素（html）就是它的代码块。</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>固定定位 （不动明王） fixed</p>
<ul>
<li>固定定位是绝对定位的一种，继承了绝对定位的大部分属性，只有一点不同。</li>
<li>不同：固定定位偏移的参照物是相对与浏览器窗口的。而且，滚动条滚动，开启固定位的元素并没有移动，还是占据窗口的某个位置，通常用于作为广告。</li>
</ul>
</li>
<li>
<p>粘滞定位 sticky</p>
<ul>
<li>
<p>粘滞定位和相对定位的特点基本一致，不同的是粘滞定位可以在元素达到某个位置时将其固定，使其起到固定定位一样的效果。</p>
</li>
<li>
<p>语法：</p>
<ul>
<li>position：sticky; 对某个元素开启粘滞定位</li>
<li>top : 20px; 当元素满足这里设置的偏移值条件时，发挥和固定定位一样的效果。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>绝对定位的位置
<img src="https://api2.mubu.com/v3/document_image/b0f8a6de-235f-4f42-a117-19e9d350c037-11752736.jpg" alt=""></p>
<ul>
<li>如果开始了定位，那么在水平布局和竖直布局中就自动分别添加了两个值，水平方向是left和right，竖直方向是top和buttom。这四个值的默认值都是auto，一旦开始了定位，这四个值 就会参与布局公式 的计算中。</li>
</ul>
</li>
<li>
<p>元素的层级</p>
<ul>
<li>元素的显示优先顺序由其自身层级大小决定，越大就越优先显示。</li>
<li>z-index 可以设置元素的层级</li>
<li>注意点：祖先元素层级再高，也不能盖住后代元素。（虎毒不食子，这是忌讳）</li>
</ul>
</li>
</ul>
<h3 id="表单-form" tabindex="-1"><a class="header-anchor" href="#表单-form" aria-hidden="true">#</a> 表单 form</h3>
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
<li><strong>action</strong>属性 ，它的值写的是要提交的服务器地址。</li>
</ul>
</li>
<li>
<p>input标签的属性 name、value</p>
<ul>
<li><strong>name</strong>属性，它的值用来区分不同的input标签</li>
<li><strong>value</strong>属性，它的值作为用户填写的值传递给服务器。</li>
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
<p>以上即为CSS中较为重要的部分，<strong>CSS中比较重要的还有flex布局。</strong>
以下相对不那么重要但是也需要了解的部分内容<a href="https://www.mubucm.com/doc/7cyVC0s8MMg" target="_blank" rel="noopener noreferrer">请点击这里进入阅读<ExternalLinkIcon/></a>， 文档阅读密码: DevinLin</p>
<ul>
<li>对第一个字或者第一行内容特别修饰</li>
<li>文档流(normal flow)</li>
<li>布局</li>
<li>轮廓阴影和圆角</li>
<li>字体</li>
<li>背景</li>
<li>表格 table &gt; tr &gt; (th)td</li>
</ul>
</div></template>
