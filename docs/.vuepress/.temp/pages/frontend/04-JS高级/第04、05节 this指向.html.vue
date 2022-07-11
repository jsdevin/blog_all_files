<template><div><h2 id="什么是this" tabindex="-1"><a class="header-anchor" href="#什么是this" aria-hidden="true">#</a> 什么是this</h2>
<p>this是js语言的一个关键字，它是函数运行时，在函数体内部自动生成的一个对象，只能在函数体内部使用。<em>只有函数才有this</em>.</p>
<h3 id="this的值是什么" tabindex="-1"><a class="header-anchor" href="#this的值是什么" aria-hidden="true">#</a> this的值是什么</h3>
<p>根据不同的调用方式，this会被绑定不同的值。总的来说，this就是函数运行时所在的环境对象。</p>
<h2 id="为什么要有this" tabindex="-1"><a class="header-anchor" href="#为什么要有this" aria-hidden="true">#</a> 为什么要有this</h2>
<p>this是ES5之后提出来的，为什么要在es5之后补充一个this呢？肯定是因为this带来了便利！</p>
<h3 id="_1-使得复杂代码的重用性高" tabindex="-1"><a class="header-anchor" href="#_1-使得复杂代码的重用性高" aria-hidden="true">#</a> 1）使得复杂代码的重用性高</h3>
<h4 id="没有this时" tabindex="-1"><a class="header-anchor" href="#没有this时" aria-hidden="true">#</a> 没有this时</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var test1 = {
  name: 'test1'
  singing: function() {
    console.log(test1.name + 'is singing')
  }
  running: function() {
    console.log(test1.name + 'is running')
  }
  rapping: function() {
    console.log(test1.name + 'is rapping')
  }
}

//以下是实现需求的代码，可以先跳过看后面的文字。
var test2 = {
  name: 'test2'
  singing: function() {
    console.log(test2.name + 'is singing')
  }
  running: function() {
    console.log(test2.name + 'is running')
  }
  rapping: function() {
    console.log(test2.name + 'is rapping')
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果现在需求是要新建一个test2对象，也和test1对象一样，有singing、running、rapping功能，同时也要访问外面的name属性，那没有this的情况下，我们就要去修改singing、running、rapping函数的内容(比如例子中的test1.name要改成test2.name)，不要小看这其中的修改，实际开发中函数都是非常复杂的，通常要修改都是大改，会带来很麻烦的事情！</p>
<h4 id="有this后" tabindex="-1"><a class="header-anchor" href="#有this后" aria-hidden="true">#</a> 有this后</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var test1 = {
  name: 'test1'
  singing: function() {
    console.log(this.name + 'is singing')
  }
  running: function() {
    console.log(this.name + 'is running')
  }
  rapping: function() {
    console.log(this.name + 'is rapping')
  }
}

//实现需求
var test2 = {
  name: 'test2'
  singing: function() {
    console.log(this.name + 'is singing')
  }
  running: function() {
    console.log(this.name + 'is running')
  }
  rapping: function() {
    console.log(this.name + 'is rapping')
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还是上面没有this的情况时的需求，我们就不需要去修改函数singing、running、rapping的内容了。</p>
<h3 id="_2-结合箭头函数-操作-外层作用域的变量" tabindex="-1"><a class="header-anchor" href="#_2-结合箭头函数-操作-外层作用域的变量" aria-hidden="true">#</a> 2）结合箭头函数 操作 外层作用域的变量</h3>
<p>首先我们需要知道的是箭头函数的this是根据外层函数作用域(父级作用域)来决定(绑定)值的。举个访问外层作用域的变量的例子</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var test1 = {
  data: [],
  getDate: function() {
    setTimeout(() =&gt; {
      var arr = ['devin','lily','pig']
      this.data.push(...arr) //这里的...就相当于遍历的作用 具体解析看这里https://blog.csdn.net/xqhys/article/details/105736902
    }, 1000);
  }
}

test1.getDate() //运行一下才能将数据加到data中。
//解析: 像test1这种对象是不另外划分空间作为作用域的，它是处于全局作用域中的。所以这例子里的this绑定的是window，test1也是window作用域中的一个对象，data是window作用域中的一个对象的属性。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此例子中，this和箭头函数结合，使得内层对象的数据直接传输到外层对象，太牛了！</p>
<h2 id="怎么给this绑定值-怎么使用this" tabindex="-1"><a class="header-anchor" href="#怎么给this绑定值-怎么使用this" aria-hidden="true">#</a> 怎么给this绑定值 （怎么使用this）</h2>
<p>this的值有四种绑定规则！分别是默认规则、隐式规则、显式规则、new规则。</p>
<h3 id="默认绑定规则" tabindex="-1"><a class="header-anchor" href="#默认绑定规则" aria-hidden="true">#</a> 默认绑定规则</h3>
<p>独立函数调用时会使用默认绑定规则。比如foo()，goo(), hoo() 这样子，函数名字前面没有任何东西的称之为独立函数，用的是默认绑定规则，无论运行时的位置处于哪里，this都是绑定window</p>
<h4 id="案例一" tabindex="-1"><a class="header-anchor" href="#案例一" aria-hidden="true">#</a> 案例一</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>//案例代码来自于coderwhy老师，侵删。
function foo() {
  console.log(this)
}

foo() //window。---独立函数调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例二" tabindex="-1"><a class="header-anchor" href="#案例二" aria-hidden="true">#</a> 案例二</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function test1() {
  console.log(this)
  test2() //window。---独立函数调用
}

function test2() {
  console.log(this)
  test3() //window。---独立函数调用
}

function test3() {
  console.log(this)
}
test1() //window。---独立函数调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="案例三" tabindex="-1"><a class="header-anchor" href="#案例三" aria-hidden="true">#</a> 案例三</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function foo(func) {
  func() //window 。---独立函数调用
}

var obj = {
  name: 'why'
  bar: function() {
    console.log(this)
  }
}

foo(obj.bar) //window 。---独立函数调用
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="隐式绑定规则" tabindex="-1"><a class="header-anchor" href="#隐式绑定规则" aria-hidden="true">#</a> 隐式绑定规则</h3>
<h4 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h4>
<p>在调用函数的对象内部必须要有一个对函数的引用。比如下图中obj的foo属性，其属性值是图中该行上面定义的foo函数。</p>
<h4 id="调用函数的对象就是this绑定的值" tabindex="-1"><a class="header-anchor" href="#调用函数的对象就是this绑定的值" aria-hidden="true">#</a> 调用函数的对象就是this绑定的值</h4>
<p>当函数由对象来调用时，this的值就绑定为该对象。格式就是 <strong>对象.函数名()</strong>. 比如obj.foo() 的this的值就是obj对象。</p>
<!-- ![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/07345af53676454fbb0ddc1afe67b69b~tplv-k3u1fbpfcp-zoom-1.image) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220105001223.png" width="60%" height="50%"/>
</div>
<h3 id="显式绑定规则" tabindex="-1"><a class="header-anchor" href="#显式绑定规则" aria-hidden="true">#</a> 显式绑定规则</h3>
<p>显式绑定通常情况下使用的是apply()、call()、bind()函数。</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function foo() {
  console.log(this)
}

//三种显式绑定的方式
foo.apply('devin')
foo.call('devin')
foo.bind('devin')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="特殊-部分内置函数的绑定" tabindex="-1"><a class="header-anchor" href="#特殊-部分内置函数的绑定" aria-hidden="true">#</a> 特殊：部分内置函数的绑定</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>1)setTimeout() 的this是指向window的
setTimeout(function() {
  console.log(this)  //window
},1000)

2)forEach() 的是可以显式绑定this值的
遍历对象.forEach(function(item) {},this对象)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="new绑定规则" tabindex="-1"><a class="header-anchor" href="#new绑定规则" aria-hidden="true">#</a> new绑定规则</h3>
<h4 id="使用new来调用函数-会执行如下操作" tabindex="-1"><a class="header-anchor" href="#使用new来调用函数-会执行如下操作" aria-hidden="true">#</a> 使用new来调用函数，会执行如下操作</h4>
<p>1.先创建一个全新的对象</p>
<p>2.这个新对象会被指向prototype连接</p>
<p>3.这个新对象会绑定到函数调用的this上</p>
<p>4.如果函数没有返回其他对象，表达式会返回这个新对象</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Person(name) {
  console.log(this); //this 是 创建的新对象Person {}
  this.name = name // 给新对象添加属性name。Person {name: 'why'}
}

var p = new Person('why')
console.log(p);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="绑定规则的优先级" tabindex="-1"><a class="header-anchor" href="#绑定规则的优先级" aria-hidden="true">#</a> 绑定规则的优先级</h3>
<p>new &gt; 显式 &gt; 隐式 &gt; 默认</p>
</div></template>
