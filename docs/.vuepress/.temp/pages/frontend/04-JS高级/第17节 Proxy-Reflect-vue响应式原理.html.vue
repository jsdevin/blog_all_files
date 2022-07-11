<template><div><h1 id="proxy" tabindex="-1"><a class="header-anchor" href="#proxy" aria-hidden="true">#</a> Proxy</h1>
<h2 id="什么是proxy" tabindex="-1"><a class="header-anchor" href="#什么是proxy" aria-hidden="true">#</a> 什么是Proxy</h2>
<ul>
<li>Proxy 是用于帮助我们创建一个代理对象的</li>
<li>也就是说，如果我们希望监听一个对象的相关操作，那么我们可以先创建一个代理对象（Proxy对象）</li>
<li>之后对该对象的所有操作，都通过代理对象来完成，代理对象可以监听我们想要对原对象进行的操作</li>
</ul>
<h2 id="为什么要有proxy" tabindex="-1"><a class="header-anchor" href="#为什么要有proxy" aria-hidden="true">#</a> 为什么要有Proxy</h2>
<ul>
<li>Proxy是代理对象，有了Proxy，它能代表原对象来执行所有的操作，这样原对象就不会发生任何改变，保护了原对象。（通过Proxy搭配reflect实现不改变原对象）</li>
</ul>
<h2 id="怎么使用proxy" tabindex="-1"><a class="header-anchor" href="#怎么使用proxy" aria-hidden="true">#</a> 怎么使用Proxy</h2>
<p>Proxy是一个内置类，使用Proxy就像是使用数组中的length属性一样，可以直接使用，不需要引入任何东西。</p>
<h3 id="proxy语法" tabindex="-1"><a class="header-anchor" href="#proxy语法" aria-hidden="true">#</a> Proxy语法</h3>
<ul>
<li>Proxy的语法如下： const obProxy = new Proxy(target, handler) <code v-pre>//target是目标对象(侦听的对象)，handler是处理对象（一般使用空白对象来作为处理对象，所有重写的捕捉器方法都会放在其中）</code><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const obj = {
  name: 'devin',
  age: 123,
  height: 2.22
}

const objProxy = new Proxy(obj, {
  //四个常用的捕捉器方法
  set: function() {},
  get: function() {},
  has: function() {},
  deleteProperty: function() {}
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="proxy方法-捕获器" tabindex="-1"><a class="header-anchor" href="#proxy方法-捕获器" aria-hidden="true">#</a> Proxy方法(捕获器)</h3>
<p>Proxy中的捕捉器就是我们平时使用的方法。Proxy中常用的方法就只有四个：</p>
<ol>
<li>set()  <strong>设置</strong> 某个属性
<ul>
<li>这个方法有四个参数：</li>
<li>target：目标对象（侦听的对象）</li>
<li>property：将被<strong>设置</strong>的属性的key</li>
<li>value：新的属性值</li>
<li>receiver: 调用的代理对象。（后面再详细学）</li>
</ul>
</li>
<li>get()  <strong>读取</strong> 某个属性
<ul>
<li>这个方法有三个参数：</li>
<li>target：进行操作的对象</li>
<li>property：被获取到属性</li>
<li>receiver: 调用的代理对象。（后面再详细学）</li>
</ul>
</li>
<li>has() ** 判断是否含有** 某个属性
<ul>
<li>两个属性，target 和 property</li>
</ul>
</li>
<li>deleteProperty()  <strong>删除</strong> 某个属性
<ul>
<li>两个属性，target 和 property</li>
</ul>
</li>
</ol>
<ul>
<li>实际代码如下</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const obj = {
  name: 'devin',
  age: 123,
  height: 2.22
}

const objProxy = new Proxy(obj, { //创建的对象都会自带默认的捕捉器方法，下面这个是重写的捕捉器方法。
  //四个常用的捕捉器方法。还没搭配reflect使用，所以会改变原对象。
  set: function(target, key, newValue) { 
    //target是new Proxy时确定的侦听对象，key是外面使用set时(比如objProxy.name的name)调用的属性，value是赋值给key的值
    target[key] = newValue
  },
  get: function(target, key) {
    return target[key]
  },
  has: function(target, key) {
    return key in target
  },
  deleteProperty: function(target, key) {
    delete target[key]
  }
})

console.log(objProxy.name) //devin

objProxy.name = 'lily'  // 还没有搭配reflect使用，所以原对象会发生改变

console.log(obj.name) //lily
console.log(objProxy.name) //lily

console.log('name' in objProxy) //true

delete objProxy.name
console.log('name' in objProxy) // false



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其它方法" tabindex="-1"><a class="header-anchor" href="#其它方法" aria-hidden="true">#</a> 其它方法</h3>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202202121236867.png" alt=""></p>
<h3 id="construct和apply" tabindex="-1"><a class="header-anchor" href="#construct和apply" aria-hidden="true">#</a> construct和apply</h3>
<ul>
<li>construct和apply捕获器方法的作用对象是函数。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function foo() {
  console.log('foo函数被调用了')
  console.log(this)
  console.log(arguments)
  return 'foo'
}

const fooProxy = new Proxy(foo, {
  //target == foo
  apply: function(target, thisArg, otherArgs) {
    console.log('apply调用')
    console.log(thisArg)
    console.log(otherArgs)
    return target.apply(thisArg, otherArgs)
  },
  construct(target, argArray, newTarget) {
    console.log('new调用')
    console.log(argArray)
    console.log(newTarget)
    return new target(argArray, newTarget)
  }
})

fooProxy.apply({}, ['abc', 'cba']) 
new fooProxy('aaa', 'bbb') 


// 运行结果
apply调用
{}
(2) ['abc', 'cba']
foo函数被调用了
{}
Arguments(2) ['abc', 'cba', callee: ƒ, Symbol(Symbol.iterator): ƒ]
new调用
(2) ['aaa', 'bbb']
Proxy {length: 0, name: 'foo', arguments: null, caller: null, prototype: {…}}
foo函数被调用了
foo
Arguments(2) [Array(2), Proxy, callee: ƒ, Symbol(Symbol.iterator): ƒ]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="reflect" tabindex="-1"><a class="header-anchor" href="#reflect" aria-hidden="true">#</a> Reflect</h1>
<h2 id="什么是reflect" tabindex="-1"><a class="header-anchor" href="#什么是reflect" aria-hidden="true">#</a> 什么是Reflect</h2>
<ul>
<li>Reflect是ES6新增的一个API，它是一个 <strong>对象</strong> ，字面的意思是<strong>反射</strong>。</li>
</ul>
<h2 id="为什么需要reflect" tabindex="-1"><a class="header-anchor" href="#为什么需要reflect" aria-hidden="true">#</a> 为什么需要Reflect</h2>
<ul>
<li>它主要提供了很多操作JavaScript对象的方法，有点像Object中操作对象的方法；
<ul>
<li>比如Reflect.getPrototypeOf(target)类似于 Object.getPrototypeOf()；</li>
<li>比如Reflect.defineProperty(target, propertyKey, attributes)类似于Object.defineProperty() ；</li>
</ul>
</li>
<li>如果我们有Object可以做这些操作，那么<strong>为什么还需要有Reflect这样的新增对象呢？</strong>
<ul>
<li>这是因为在早期的ECMA规范中没有考虑到这种对 <strong>对象本身</strong> 的操作如何设计会更加规范，所以<strong>将这些API放到了Object上面</strong>；</li>
<li>但是Object作为一个构造函数，<strong>这些操作实际上放到它身上并不合适</strong>；</li>
<li>另外还包含一些类似于 in、delete操作符，让JS看起来是会有一些奇怪的；</li>
<li>所以在ES6中<strong>新增了Reflect，让我们把这些操作都集中到了Reflect对象上</strong></li>
</ul>
</li>
<li>总结：
<ul>
<li>一些API不适合放在Object对象上面，所以产生了Reflect，把这些API放到Reflect上面。</li>
</ul>
</li>
</ul>
<h2 id="怎么使用reflect" tabindex="-1"><a class="header-anchor" href="#怎么使用reflect" aria-hidden="true">#</a> 怎么使用Reflect</h2>
<h3 id="reflect语法" tabindex="-1"><a class="header-anchor" href="#reflect语法" aria-hidden="true">#</a> Reflect语法</h3>
<ul>
<li>将对原对象的操作，都修改为Reflect方法来操作就行了。</li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202202121348517.png" alt=""></p>
<h3 id="receiver的作用" tabindex="-1"><a class="header-anchor" href="#receiver的作用" aria-hidden="true">#</a> Receiver的作用</h3>
<ul>
<li>我们发现在使用getter、setter的时候有一个receiver的参数，它的作用是什么呢？
<ul>
<li>如果我们的源对象（obj）有setter、getter的访问器属性，那么可以通过receiver来改变里面的this</li>
</ul>
</li>
<li>我们来看这样的一个对象：这里的<strong>receiver == objProxy</strong></li>
</ul>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202202121426200.png" alt=""></p>
<h3 id="reflect的construct" tabindex="-1"><a class="header-anchor" href="#reflect的construct" aria-hidden="true">#</a> Reflect的construct</h3>
<ul>
<li>作用：执行的是A函数的逻辑，单创建出来的对象确实B类型的。</li>
<li>第一个参数： 执行的逻辑函数</li>
<li>第二个参数：给逻辑函数赋的值</li>
<li>第三个参数：要转换成的类型</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Student(name, age) {
  this.name = name,
  this.age = age
}

function Teacher() {

}

// 需求： 执行的是Student函数中的代码逻辑，但是创建出来的是Teacher对象。

// 要使用Reflext的construct方法来实现
const teacher1 = Reflect.construct(Student, ['devin', '2222'], Teacher)

console.log(teacher1) // Teacher {name: 'devin', age: '2222'}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="reflect常见的方法" tabindex="-1"><a class="header-anchor" href="#reflect常见的方法" aria-hidden="true">#</a> Reflect常见的方法</h3>
<p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202202121436950.png" alt=""></p>
<h1 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h1>
<h2 id="先跳过这个-有点混乱-学完js高级再回来学习这个。ppt第17节-视频也是第17节" tabindex="-1"><a class="header-anchor" href="#先跳过这个-有点混乱-学完js高级再回来学习这个。ppt第17节-视频也是第17节" aria-hidden="true">#</a> 先跳过这个，有点混乱，学完JS高级再回来学习这个。ppt第17节，视频也是第17节</h2>
</div></template>
