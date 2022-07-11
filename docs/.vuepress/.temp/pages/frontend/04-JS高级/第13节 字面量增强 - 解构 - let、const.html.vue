<template><div><h1 id="字面量增强" tabindex="-1"><a class="header-anchor" href="#字面量增强" aria-hidden="true">#</a> 字面量增强</h1>
<ul>
<li>ES6中对 <strong>对象</strong>字面量 进行了增强，主要包括下面几部分：属性的增强、方法的增强、计算属性的增强</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {

//1.属性的增强
  //前
  name: name,
  age: age
  
  //后
  name,
  age

//2.方法的增强
  //前
  bar: function() { ... }
  foo: function() { ... }
  
  //后
  bar() { ... }
  foo() { ... }
 
//3.计算属性的增强
  //前：看最后一行。未增强前要在对象外面写。
  
  //后
  [name + '112233']: '这是添加的属性值'
}

//【这里是没有使用对象字面量增强前的代码】 obj[name + '112233']: '这是添加的属性值'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="解构" tabindex="-1"><a class="header-anchor" href="#解构" aria-hidden="true">#</a> 解构</h1>
<h2 id="数组-的解构" tabindex="-1"><a class="header-anchor" href="#数组-的解构" aria-hidden="true">#</a> 数组 的解构</h2>
<ul>
<li>1）最基本的使用。— 和 <strong>遍历</strong> 一样的效果</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var arr = [11, 22, 33, 44]

//使用解构
var [item1, item2, item3, item4] = arr

console.log(item1); //11
console.log(item2); //22
console.log(item3); //33
console.log(item4); //44
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2）获取数组中某个位置的值</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var arr = [11, 22, 33, 44]

//解构
var [,,,item] = arr

console.log(item); //44
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3）将部分元素作为新数组   — 使用剩余参数...的方法。剩余参数会获取后面的全部元素，然后构建新数组</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var arr = [11, 22, 33, 44, 55]

//解构
var [item1, ...newArr] = arr

console.log(item1); //11
console.log(newArr); //[22, 33, 44, 55] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4）给解构属性设置默认值。当解构数组超出数组长度时(即值为undefined)，等号前面的解构属性会赋值默认值。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var arr = [11, 22, 33, 44]

//解构
var [item1, item2, item3, item4 = '这是超出数组长度时会赋值的默认值', item5 = '这是超出数组长度时会赋值的默认值', item6 = '这是超出数组长度时会赋值的默认值'] = arr

console.log(item1); //11
console.log(item2); //22
console.log(item3); //33
console.log(item4); //44。 因为数组中有值，不为undefined。默认值就不会生效。
console.log(item5); //这是超出数组长度时会赋值的默认值
console.log(item6); //这是超出数组长度时会赋值的默认值

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="对象-的解构" tabindex="-1"><a class="header-anchor" href="#对象-的解构" aria-hidden="true">#</a> 对象 的解构</h2>
<ul>
<li>1）最基本的解构 — 遍历的效果</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {
  name: 'devin',
  age: 13,
  height: 2.22
}

var {name, age, height} = obj

console.log(name);   //devin
console.log(age);    //13
console.log(height); //2.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>2）对象的解构可以按照任意顺序放置属性。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {
  name: 'devin',
  age: 13,
  height: 2.22
}

var {age, height, name} = obj

console.log(name);   //devin
console.log(age);    //13
console.log(height); //2.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>3）对解构属性重命名</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {
  name: 'devin',
  age: 13,
  height: 2.22
}

var {name: newName, age: newAge, height} = obj 

console.log(newName);  //devin
console.log(newAge);  //13
console.log(height);  //2.22
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>4）设置给解构的属性设置默认值</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {
  name: 'devin',
  age: 13,
  height: 2.22
}

var {name, age, height = '这里是obj对象没有height属性时显示的默认值', color = '这里是obj对象没有color属性时显示的默认值',} = obj

console.log(name);   //devin
console.log(age);    //13
console.log(height); //2.22
console.log(color);  //这里是obj对象没有color属性时显示的默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>函数参数 的解构</strong>。 — 调用的时候还是以对象整体作为参数传入的函数中。在函数的实现处，其形参直接使用解构，获取自己想要的属性。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var obj = {
  name: 'devin',
  age: 13,
  height: 2.22
}

function foo({name, age}) { //在函数的实现处，其形参直接使用解构，直接获取自己想要的属性，别的属性不要。
  console.log(name, age) 
}

foo(obj) //结果：devin 13。 //调用的时候还是以对象整体作为参数传入的函数中

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="let-和-const" tabindex="-1"><a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a> let 和 const</h1>
<h2 id="let" tabindex="-1"><a class="header-anchor" href="#let" aria-hidden="true">#</a> let</h2>
<ul>
<li>用来声明变量。</li>
<li>学了let之后，var就永远都不要使用了。 var是js发展过程中的缺陷，是js发展初期不完善留下来的遗留产物。</li>
</ul>
<h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h2>
<ul>
<li>用来声明常量。</li>
<li>通常情况下，建议使用const。— 它保存的数据一旦被赋值，就不能修改。</li>
<li>对于一些明确不会改变的东西，设置为常量可以防止后面不小心将它改变，const能极大程度地减少意外的bug。</li>
</ul>
<h2 id="let-const都没有作用域提升" tabindex="-1"><a class="header-anchor" href="#let-const都没有作用域提升" aria-hidden="true">#</a> let/const都没有作用域提升</h2>
<ul>
<li>作用域提升的概念
<ul>
<li>在声明变量的作用域中，如果这个变量可以在 声明之前 能被访问，那么我们可以称之为作用域提升</li>
</ul>
</li>
<li>let/const 定义的变量，在 执行上下文的词法环境 创建出来的时候，变量事实上已经被创建出来了，只是这个变量不能被访问。</li>
<li>所以let、const没有进行作用域提升。因为它们虽然会在解析阶段被创建出来，但是不能被访问。</li>
</ul>
<h2 id="let-const定义的变量保存在哪" tabindex="-1"><a class="header-anchor" href="#let-const定义的变量保存在哪" aria-hidden="true">#</a> let/const定义的变量保存在哪？</h2>
<ul>
<li>我们知道，在全局通过var定义变量时，会保存在window对象上。（这样子不好，都是JS发展之初的缺陷，变量一多就会很混乱）</li>
<li>那么let/const 定义的变量保存在哪呢 ？
<ul>
<li>变量被保存到VariableMap中。 — 了解就行，不需要深入理解。</li>
</ul>
</li>
</ul>
<h2 id="块级作用域" tabindex="-1"><a class="header-anchor" href="#块级作用域" aria-hidden="true">#</a> 块级作用域</h2>
<h3 id="没有块级作用域时" tabindex="-1"><a class="header-anchor" href="#没有块级作用域时" aria-hidden="true">#</a> 没有块级作用域时</h3>
<ul>
<li>在ES6之前，只有两种作用域。全局作用域和函数作用域。</li>
</ul>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/386f7cb47da04aa48ee30a9703dd99a2~tplv-k3u1fbpfcp-zoom-1.image" alt=""></p>
<ul>
<li>在ES6之前，放到一个大括号中定义的变量，外面是可以访问的：</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>{
  var foo = 'test'
}

console.log(foo); //test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有块级作用域后" tabindex="-1"><a class="header-anchor" href="#有块级作用域后" aria-hidden="true">#</a> 有块级作用域后</h3>
<ul>
<li>在ES6中新增了块级作用域，并且通过let、const、function、class声明的标识符是具备块级作用域的限制的：</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 块级作用域

{
  let foo = 'test'

  function bar() {
    console.log('bar测试')
  }

  class Person {}
}

// console.log(foo) //foo is not defined
bar()  //bar测试
var p = new Person() //Person is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>但是我们会发现 函数 拥有块级作用域，但是外面依然是可以访问的：
<ul>
<li>这是因为引擎会对函数的声明进行特殊的处理，允许像var那样进行提升。</li>
</ul>
</li>
</ul>
<h3 id="块级作用域的几个例子" tabindex="-1"><a class="header-anchor" href="#块级作用域的几个例子" aria-hidden="true">#</a> 块级作用域的几个例子</h3>
<ul>
<li>if - else 、switch、for</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>if(true) {
  let foo = 'test'
}

console.log(foo) // foo is not defined

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>for(let i=0; i &lt; 10; i++) {
  i+=1
}

console.log(i) // i is not defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="var、let-const的选择" tabindex="-1"><a class="header-anchor" href="#var、let-const的选择" aria-hidden="true">#</a> var、let/const的选择</h2>
<ul>
<li>在开发中，我们到底应该选择使用哪一种方式来定义我们的变量呢 ？</li>
<li>对于var：
<ul>
<li>var所表现出来的特殊性：比如作用域提升、window全局对象、没有块级作用域等都是一些历史遗留问题。是JS设计之初的一种语言缺陷。</li>
<li>在实际工作中，不再使用var来定义变量。</li>
</ul>
</li>
<li>对于let、const：
<ul>
<li>对于let和const来说，是目前开发中推荐使用的</li>
<li>我们会 <strong>优先推荐使用const</strong> ，这样可以保证数据的安全性不会被随意的篡改</li>
<li>只有当我们明确知道一个变量后续会需要被重新赋值时，这个时候再使用let</li>
</ul>
</li>
</ul>
<h2 id="暂时性死区-let-const" tabindex="-1"><a class="header-anchor" href="#暂时性死区-let-const" aria-hidden="true">#</a> 暂时性死区 (let/const)</h2>
<ul>
<li>在一个代码中，使用let、const声明的变量，在声明之前，变量都是不可以访问的。这种现象叫暂时性死区。</li>
<li>暂时性死区的产生与let/const有关。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>var foo = 'test'

if(true) {
  console.log(foo)  //Cannot access 'foo' before initialization

  let foo = 'test2' //这个变量会先被创建，但是不能被访问。自己作用域中有这个变量，但是不能访问，形成了暂时性死区。
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
