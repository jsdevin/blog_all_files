<template><div><h1 id="登录页面ui" tabindex="-1"><a class="header-anchor" href="#登录页面ui" aria-hidden="true">#</a> 登录页面UI</h1>
<h2 id="实现登陆页面ui图" tabindex="-1"><a class="header-anchor" href="#实现登陆页面ui图" aria-hidden="true">#</a> 实现登陆页面UI图</h2>
<ol>
<li>
<p>UI图划分基本结构和组件的分布<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206172241287.png" alt="静态页面的划分"></p>
</li>
<li>
<p>静态页面搭建思路：<br>
login.vue中设置页面背景和引入组件LoginPanel（LoginPanel 即是组件login-panel.vue）  LoginPanel是用来控制整个登录面板的，在其中会书写<code v-pre>&lt;h1&gt;</code>和<code v-pre>&lt;el-tabs&gt;</code>，<code v-pre>&lt;el-tabs&gt;</code>代表的是整个标签页（包括标签和表单），<code v-pre>&lt;el-tab-pane&gt;</code>是用一个插槽来实现标签的，为了代码的简洁性，将表单的代码放置到新的组件login-account.vue中。新的组件的用el-form和el-form-item来实现表单，并进行校验。接着在login-panel中补齐el-checkbox和el-button即可完成等于页面的静态网页。<br>
下面第一个图中config文件夹放置的是一些提取出来的<a href="https://github.com/jsdevin/cms-ts-vue3/blob/master/src/views/login/config/account.config.ts" target="_blank" rel="noopener noreferrer">校验规则<ExternalLinkIcon/></a>，也可以不提取，但是为了代码的简洁性，提取出来更好。<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206172245686.png" alt="项目结构"><br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206172304568.png" alt="代码结构"><br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206172312382.png" alt="login-account组件"></p>
</li>
</ol>
<h3 id="完成登录静态页面的总结" tabindex="-1"><a class="header-anchor" href="#完成登录静态页面的总结" aria-hidden="true">#</a> 完成登录静态页面的总结</h3>
<p>通过这次静态页面的搭建，让我熟悉了element-plus的实际使用，不再是熟悉简单的理论层面，而是对每一个标签都有着一定的了解，懂得了通过去看官方文档来配置自己想要的页面，也知道通过斟酌标签的属性来完善页面。除此之外，使用Vue的组件来完成这个经典的页面，让我深刻感受到了Vue的组件化的优势，思路非常清晰，不断地将特定功能的代码提取为一个组件，并且将特定的组件放置到特定的文件夹，非常清晰的项目结构，回顾知识的时候通过直接看项目结构也能快速上手和整理思路。使用Vue组件化来完成这个登录页面，使得代码的简洁性大大提高，让我们阅读文件时能够快速读懂文件。<br>
一些知识点的总结：<br>
<em>参考上图login-account组件:</em><br>
<code v-pre>:rules=&quot;accountRules&quot;</code> 是用来绑定(setup中)定义的校验规则的，这例子的作用是在el-form绑定accountRules。绑定完之后，el-form-item可以通过prop来应用校验，prop的值应当是accountRules的某个属性。<br>
<code v-pre>:model=&quot;account&quot;</code> 是获取最新的值给el-form。这个例子中获取的是account的最新值， 一旦v-model=&quot;account.name&quot;引起account发生改变，el-form立刻就能知道，然后进行校验</p>
</div></template>
