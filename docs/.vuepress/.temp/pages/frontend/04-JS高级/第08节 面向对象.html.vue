<template><div><h1 id="创建对象的方式" tabindex="-1"><a class="header-anchor" href="#创建对象的方式" aria-hidden="true">#</a> 创建对象的方式</h1>
<ul>
<li>推荐通过 <strong>字面量形式</strong> 创建对象</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3fb8037595848379787189d42709e2f~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<h1 id="属性的控制" tabindex="-1"><a class="header-anchor" href="#属性的控制" aria-hidden="true">#</a> 属性的控制</h1>
<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<ul>
<li>像上面一样通过字面量方式添加的属性name、age等，我们只能对它进行赋值，修改等基本操作。我们很难对它进行一些高级操作，比如通过设置一些操作让name属性不可以通过delete删除，或者通过给age属性设置一些操作，让它面临for in遍历的时候，可以不被遍历出去。</li>
</ul>
<h2 id="属性操作符" tabindex="-1"><a class="header-anchor" href="#属性操作符" aria-hidden="true">#</a> 属性操作符</h2>
<ul>
<li>如果我们想要对一个属性进行高级的操作控制，我们可以使用属性描述符。属性描述符通过Object.defineProperty来实现。</li>
</ul>
<h3 id="object-defineproperty" tabindex="-1"><a class="header-anchor" href="#object-defineproperty" aria-hidden="true">#</a> Object.defineProperty ()</h3>
<ul>
<li>Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/aec03e6c7db24d9a94a78804133179d4~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<ul>
<li>
<p>可接收三个参数：</p>
<ul>
<li>obj 要定义属性的对象；</li>
<li>prop要定义或修改的属性的名称</li>
<li>descriptor要定义或修改的属性描述符；</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>Object.defineProperty(obj2,'name',{
  //控制是否支持delete删除、控制是否支持遍历的代码。
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>返回值：</p>
</li>
<li>
<p>被传递给函数的对象。</p>
</li>
</ul>
<h3 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h3>
<ul>
<li>属性描述符分为两类，一类是 <strong>数据</strong> 属性描述符，另一类是 <strong>存取</strong>属性描述符。</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/52e9e857df7d4e43aa2ef2ecb7cf3d01~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<h4 id="数据属性描述符" tabindex="-1"><a class="header-anchor" href="#数据属性描述符" aria-hidden="true">#</a> 数据属性描述符</h4>
<ul>
<li>数据属性描述符有四个特性：</li>
</ul>
<ol>
<li>Configurable
<ul>
<li>作用：控制属性能否通过delete删除。</li>
<li>当我们通过 <strong>字面量方式</strong> 定义某个属性时，这个属性的Configurable默认为<strong>true</strong></li>
<li>当我们通过 属性描述符 定义一个属性时，这个属性的 Configurable 默认为false</li>
</ul>
</li>
<li>Enumerable
<ul>
<li>作用：控制属性是否可以通过for-in或者Object.keys()遍历该属性</li>
<li><strong>字面量方式</strong> 定义的属性，Enumerable为<strong>true</strong></li>
<li>属性操作符 定义的属性，Enumerable为 false</li>
</ul>
</li>
<li>Writable
<ul>
<li>作用：控制是否可以修改属性的value值。</li>
<li><strong>字面量方式</strong> 定义的属性，Writable为<strong>true</strong></li>
<li>属性操作符 定义的属性，Writable为 false</li>
</ul>
</li>
<li>value
<ul>
<li>属性的value值，读取属性时返回的值，修改属性时，会对其进行修改，默认情况下这个值是undefined</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {
  name: value值
  age: value值
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<ul>
<li>数据属性描述符 的测试代码</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cd7b55171aa64a108d23ebc004cf49cf~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<h4 id="存取属性描述符" tabindex="-1"><a class="header-anchor" href="#存取属性描述符" aria-hidden="true">#</a> 存取属性描述符</h4>
<ul>
<li>存储属性描述符有四个特性：</li>
</ul>
<ol>
<li>Configurable
<ul>
<li>作用：控制属性能否通过delete删除。</li>
<li>当我们通过 <strong>字面量方式</strong> 定义某个属性时，这个属性的Configurable默认为<strong>true</strong></li>
<li>当我们通过 属性描述符 定义一个属性时，这个属性的 Configurable 默认为false</li>
</ul>
</li>
<li>Enumerable
<ul>
<li>作用：控制属性是否可以通过for-in或者Object.keys()遍历该属性</li>
<li><strong>字面量方式</strong> 定义的属性，Enumerable为<strong>true</strong></li>
<li>属性操作符 定义的属性，Enumerable为 false</li>
</ul>
</li>
<li>get
<ul>
<li><strong>获取</strong> 属性时会执行的函数。默认为undefined</li>
</ul>
</li>
<li>set
<ul>
<li><strong>设置</strong>属性时会执行的函数。默认为undefined</li>
</ul>
</li>
</ol>
<ul>
<li>存储属性描述符 的测试代码</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97ea64e3607042378a87b4c0dc8bfc32~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<h3 id="object-defineproperties-—-同时定义多个属性" tabindex="-1"><a class="header-anchor" href="#object-defineproperties-—-同时定义多个属性" aria-hidden="true">#</a> Object.defineProperties () — 同时定义多个属性</h3>
<ul>
<li>Object.defineProperties() 方法直接在一个对象上定义** 多个** 新的属性或修改现有属性，并且返回该对象。</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2cee36ff22c545488a52617e43c989eb~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<h1 id="对象方法的补充" tabindex="-1"><a class="header-anchor" href="#对象方法的补充" aria-hidden="true">#</a> 对象方法的补充</h1>
<ul>
<li>获取对象的属性描述符：
<ul>
<li>getOwnPropertyDescriptor</li>
<li>getOwnPropertyDescriptor<strong>s</strong></li>
</ul>
</li>
<li>禁止对象扩展新属性：preventExtensions
<ul>
<li>给一个对象使用preventExtensions方法后，再给这个对象添加新的属性会失败（在严格模式下会报错）；</li>
</ul>
</li>
<li>密封对象，不允许配置和删除属性：seal
<ul>
<li>实际是调用preventExtensions</li>
<li>并且将现有属性的configurable:false</li>
</ul>
</li>
<li>冻结对象，不允许修改现有属性： freeze
<ul>
<li>实际上是调用seal</li>
<li>并且将现有属性的writable: false</li>
</ul>
</li>
<li>hasOwnProperty
<ul>
<li>对象是否有某一个属于自己的属性（不是在原型上的属性）</li>
</ul>
</li>
<li>in/for in 操作符
<ul>
<li>判断某个属性是否在某个对象或者对象的原型上</li>
</ul>
</li>
<li>instanceof
<ul>
<li>用于检测构造函数的pototype，是否出现在某个实例对象的原型链上</li>
</ul>
</li>
<li>isPrototypeOf
<ul>
<li>用于检测某个对象，是否出现在某个实例对象的原型链上</li>
</ul>
</li>
</ul>
<h1 id="创建对象" tabindex="-1"><a class="header-anchor" href="#创建对象" aria-hidden="true">#</a> 创建对象</h1>
<h2 id="用构造函数创建对象" tabindex="-1"><a class="header-anchor" href="#用构造函数创建对象" aria-hidden="true">#</a> 用构造函数创建对象</h2>
<ul>
<li>如果一个普通的函数被用new操作符来调用了，那么这个函数就称之为是一个构造函数。</li>
</ul>
<h2 id="new调用的过程" tabindex="-1"><a class="header-anchor" href="#new调用的过程" aria-hidden="true">#</a> new调用的过程</h2>
<ol>
<li>在内存中创建一个新的对象（空函数对象）；</li>
<li>这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性；（后面详细讲）；</li>
<li>构造函数内部的this，会指向创建出来的新对象；</li>
<li>执行函数的内部代码（函数体代码）；</li>
<li>如果构造函数没有返回非空对象，则返回创建出来的新对象</li>
</ol>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Person() {
  //1.创建一个空对象 Person {}
  //2.外面调用prototype值时，会调用第一步创建的对象的prototype值
  //3.this = Person
  //4.执行函数体内的代码
  //5.默认会返回创建的这个Person对象
  
  //前面这五步都是外面使用new来调用函数，在函数执行内部代码前发生的。
  
  ...函数的具体代码
}

new Person()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="构造函数的缺点" tabindex="-1"><a class="header-anchor" href="#构造函数的缺点" aria-hidden="true">#</a> 构造函数的缺点</h2>
<ul>
<li>构造函数的缺点是<strong>有点浪费内存空间</strong></li>
<li>每一次用new来调用构造函数，都需要在内部创建空白对象。不管什么时候，什么位置调用，都一样。</li>
<li>构造函数你用new调用多少次，就会产生多少个空白对象。而且这些空白对象都是独立存在的，都占用着一定空间。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Person(){

}

new Person //这里会返回一个对象a
new Person //这里也会返回一个对象b
new Person //这里还会返回一个对象c
//a,b,c这三个对象不是同一个东西。
//这三个对象都是独立的。都占用着一定的内存空间。
//所以构造函数的缺点是 有点浪费内存空间。


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="prototype-和-proto" tabindex="-1"><a class="header-anchor" href="#prototype-和-proto" aria-hidden="true">#</a> prototype 和 __ proto __</h1>
<ol>
<li>prototype
<ul>
<li>只有 <strong>函数</strong> 有prototype属性。其它人都没有。 — 如果在对象中查询obj.prototype，会和查找obj.a一样性质，都会当作一个普通的自定义属性。默认是undefined</li>
</ul>
</li>
<li>__ proto __
<ul>
<li>__ proto __ 是浏览器自带的方法，所有对象都能使用，不管是普通对象，还是函数对象。</li>
</ul>
</li>
<li>函数也是对象，也属于Object类。所以函数既有prototype，也有__ proto __</li>
</ol>
<h1 id="创建对象的内存表现" tabindex="-1"><a class="header-anchor" href="#创建对象的内存表现" aria-hidden="true">#</a> 创建对象的内存表现</h1>
<ul>
<li>我们通过Person构造函数创建出来的所有对象（p1、p2）的__proto__属性，都指向Person.prototype
<ul>
<li>普通对象是没有prototype属性的，普通对象只有浏览器赋予的__proto__属性。</li>
<li>通过同一个构造函数（new）创建出来的对象，他的__proto__指向的值都是构造函数的prototype属性。</li>
</ul>
</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a3b6fc4e9f934b4eb6a05b1995cca58d~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
<h2 id="constructor属性" tabindex="-1"><a class="header-anchor" href="#constructor属性" aria-hidden="true">#</a> constructor属性</h2>
<ul>
<li>默认情况下原型上都会添加一个属性叫做constructor，这个constructor指向当前的函数对象</li>
</ul>
</div></template>
