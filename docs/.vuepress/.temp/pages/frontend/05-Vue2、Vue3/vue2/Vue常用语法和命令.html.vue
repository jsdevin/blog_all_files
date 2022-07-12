<template><div><h5 id="v-系列" tabindex="-1"><a class="header-anchor" href="#v-系列" aria-hidden="true">#</a> v- 系列</h5>
<ul>
<li>v-bind 作用是可以动态<strong>绑定属性</strong>，语法糖是 <code v-pre>:</code></li>
<li>v-on 作用是动态<strong>绑定事件</strong>，语法糖是 <code v-pre>@</code></li>
<li>v-for 作用是<strong>遍历</strong>，语法是 <code v-pre>&lt;li v-for = &quot;item in objects&quot;&gt;{{item}}&lt;/li&gt;</code></li>
<li>v-model 作用是<strong>双向数据绑定</strong>，语法是 <code v-pre>&lt;input v-model=&quot;message&quot;&gt;</code>，这里的message对象是在new Vue的data属性中定义的。</li>
</ul>
<h5 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h5>
<ul>
<li>创建全局组件的语法糖是 <code v-pre>Vue component('自定义标签名',{template模板})</code></li>
<li>创建局部组件的语法糖是 <code v-pre>'自定义标签名'：'#tm1'</code> ，在new Vue实例的components的大括号中输入语法糖代码，其中#tm1代表的是id为tm1的template模板</li>
</ul>
<h5 id="父子组件的数据传输" tabindex="-1"><a class="header-anchor" href="#父子组件的数据传输" aria-hidden="true">#</a> 父子组件的数据传输</h5>
<ul>
<li>props <strong>父传子</strong> 。<a href="https://api2.mubu.com/v3/document_image/0b1ae913-b190-4b14-8fc6-1dbbfe164f93-11752736.jpg" target="_blank" rel="noopener noreferrer">使用演示<ExternalLinkIcon/></a></li>
<li>this.$emit (‘自定义事件’，函数的参数item) <strong>子传父</strong> 。 <a href="https://api2.mubu.com/v3/document_image/3bae8786-0153-4ee1-acc2-88aa22742f7e-11752736.jpg" target="_blank" rel="noopener noreferrer">使用演示<ExternalLinkIcon/></a></li>
</ul>
<h5 id="vue-cli-用来初始化项目" tabindex="-1"><a class="header-anchor" href="#vue-cli-用来初始化项目" aria-hidden="true">#</a> vue-cli 用来初始化项目</h5>
<ul>
<li>用 vue-cli2 初始化项目： <code v-pre>vue init webpack my-project-name</code></li>
<li>用 vue-cli3 初始化项目： <code v-pre>vue create my_protect_name</code></li>
</ul>
<hr>
<hr>
<h3 id="下面的没有什么便捷的命令了-都是些知识-多用自然熟-传送门贴上-方便从本页面传送到指定知识点" tabindex="-1"><a class="header-anchor" href="#下面的没有什么便捷的命令了-都是些知识-多用自然熟-传送门贴上-方便从本页面传送到指定知识点" aria-hidden="true">#</a> 下面的没有什么便捷的命令了，都是些知识，多用自然熟，传送门贴上，方便从本页面传送到指定知识点</h3>
<h5 id="vue-router-用来设置页面的跳转路径" tabindex="-1"><a class="header-anchor" href="#vue-router-用来设置页面的跳转路径" aria-hidden="true">#</a> vue-router 用来设置页面的跳转路径</h5>
<ul>
<li><a href="https://devinlin000.github.io/2021/09/29/VUE/vue-router/" target="_blank" rel="noopener noreferrer">所有知识点传送门<ExternalLinkIcon/></a></li>
<li>路由的基本配置 <a href="https://api2.mubu.com/v3/document_image/49ad03d2-50bd-4d09-9d07-3c758be70cba-11752736.jpg" target="_blank" rel="noopener noreferrer">配置文件index.js的基本格式<ExternalLinkIcon/></a></li>
</ul>
<h5 id="tabbar-是封装组件" tabindex="-1"><a class="header-anchor" href="#tabbar-是封装组件" aria-hidden="true">#</a> tabbar 是封装组件</h5>
<ul>
<li><a href="http://localhost:4000/2021/09/29/VUE/tabbar/" target="_blank" rel="noopener noreferrer">所有知识点传送门<ExternalLinkIcon/></a></li>
</ul>
<h5 id="promise-用来解决调用问题" tabindex="-1"><a class="header-anchor" href="#promise-用来解决调用问题" aria-hidden="true">#</a> Promise 用来解决调用问题</h5>
<ul>
<li><a href="https://api2.mubu.com/v3/document_image/fd1a8d9d-d728-4489-802b-dbe11c9b6faf-11752736.jpg" target="_blank" rel="noopener noreferrer">Promise的基本使用<ExternalLinkIcon/></a></li>
<li><a href="https://api2.mubu.com/v3/document_image/e6f99fc8-5047-444b-b48e-13e3d7f38718-11752736.jpg" target="_blank" rel="noopener noreferrer">Promise的链式调用<ExternalLinkIcon/></a></li>
<li><a href="https://api2.mubu.com/v3/document_image/f227f440-82be-43d2-95f7-95e3194ee907-11752736.jpg" target="_blank" rel="noopener noreferrer">Promise.all()解决多次访问问题<ExternalLinkIcon/></a></li>
</ul>
<h5 id="vuex-管理全局共享的对象和方法-追踪记录数据的改变" tabindex="-1"><a class="header-anchor" href="#vuex-管理全局共享的对象和方法-追踪记录数据的改变" aria-hidden="true">#</a> Vuex 管理全局共享的对象和方法，追踪记录数据的改变</h5>
<ul>
<li><a href="https://devinlin000.github.io/2021/09/29/VUE/Vuex/" target="_blank" rel="noopener noreferrer">所有知识点传送门<ExternalLinkIcon/></a></li>
</ul>
<h5 id="axios-基于promise的可用在浏览器和node-js中的异步通信框架-主要作用是实现ajax异步通信" tabindex="-1"><a class="header-anchor" href="#axios-基于promise的可用在浏览器和node-js中的异步通信框架-主要作用是实现ajax异步通信" aria-hidden="true">#</a> Axios 基于promise的可用在浏览器和node.js中的异步通信框架；主要作用是实现AJAX异步通信</h5>
<ul>
<li><a href="https://devinlin000.github.io/2021/09/29/VUE/axios/" target="_blank" rel="noopener noreferrer">所有知识点传送门<ExternalLinkIcon/></a></li>
</ul>
</div></template>
