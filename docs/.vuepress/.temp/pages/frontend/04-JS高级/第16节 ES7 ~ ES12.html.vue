<template><div><h1 id="es7" tabindex="-1"><a class="header-anchor" href="#es7" aria-hidden="true">#</a> ES7</h1>
<h2 id="array-includes" tabindex="-1"><a class="header-anchor" href="#array-includes" aria-hidden="true">#</a> Array.Includes</h2>
<ul>
<li>在ES7之前，如果我们想判断一个数组中是否包含某个元素，需要通过 indexOf 获取结果，并且判断是否为 -1。</li>
<li>在ES7中，我们可以通过includes来 <strong>判断一个数组中是否包含一个指定的元素</strong> ，根据情况，如果包含则返回 true，否则返回false</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const names = ['devin', 'lily', 'pig1', 'pig2']

if(names.includes('devin')) {
  console.log('所查询的devin存在')
}

if(names.includes('pig1', 2)) { //这里的 2 是指从数组下标2开始找。（包含数组下标2对应的元素）
  console.log('所查询的pig1存在')
}

//结果：
  // 所查询的devin存在
  // 所查询的pig1存在

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="乘方运算符" tabindex="-1"><a class="header-anchor" href="#乘方运算符" aria-hidden="true">#</a> 乘方运算符（ ** ）</h2>
<ul>
<li>在ES7之前，计算数字的乘方需要通过 Math.pow 方法来完成。</li>
<li>在ES7中，增加了 ** 运算符，可以对数字来计算乘方。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const result1 = Math.pow(3, 3)
const result2 = 3 ** 3
 
console.log(result1) //27
console.log(result2) //27

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="es8" tabindex="-1"><a class="header-anchor" href="#es8" aria-hidden="true">#</a> ES8</h1>
<h2 id="object-values-获取所有value值" tabindex="-1"><a class="header-anchor" href="#object-values-获取所有value值" aria-hidden="true">#</a> Object.values 获取所有value值</h2>
<ul>
<li>之前我们可以通过 Object.keys 获取一个对象所有的key，在ES8中提供了 Object.values 来获取所有的value值。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 普通对象使用
const obj = {
  name: 'devin',
  age: 22,
  height: 2.222
}

console.log(Object.values(obj)) // ['devin', 22, 2.222]

//字符串对象使用
console.log(Object.values('abcdefg')) // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-entries-获取所有键值对" tabindex="-1"><a class="header-anchor" href="#object-entries-获取所有键值对" aria-hidden="true">#</a> Object.entries 获取所有键值对</h2>
<ul>
<li>通过Object.entries 可以获取到一个数组，数组中会存放可枚举属性的键值对数组。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 普通对象使用
const obj = {
  name: 'devin',
  age: 22,
  height: 2.222
}

console.log(Object.entries(obj)) // [ ['name', 'devin'], ['age', 22], ['height', 2.222] ]

// 数组使用
const arr = ['aaa', 'bbb', 'ccc']
console.log(Object.entries(arr)) // [ ['0', 'aaa'], ['1', 'bbb'], ['2', 'ccc'] ]

// 字符串使用
console.log(Object.entries('abcds')) // [ ['0', 'a'], ['1', 'b'], ['2', 'c'], ['3', 'd'], ['4', 's'] ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-padding-填充" tabindex="-1"><a class="header-anchor" href="#string-padding-填充" aria-hidden="true">#</a> String Padding 填充</h2>
<ul>
<li>某些字符串我们需要对其进行前后的填充，来实现某种格式化效果，ES8中增加了 padStart 和 padEnd 方法，分别是对字符串的首尾进行填充的。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const demo = 'aabbcc'

// 这里的第一个参数是填充之后的字符串长度，这个参数是用来给定填充的最大范围的。 
console.log(demo.padEnd(10, '-')) //// 结果： aabbcc----
console.log(demo.padStart(12, 't')) // ttttttaabbcc

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>案例： 需要对身份证、银行卡的前面位数进行隐藏</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const cardNumber = '2343425564576423234234'

//思路：先截取供外界看到的部分，然后给这一部分填充加密符号即可。
const lastFourNumber = cardNumber.slice(-4) //-4代表你从倒数第四个元素开始获取，包括倒数第四个
const finalNumber = lastFourNumber.padStart(cardNumber.length, '*') //这里的cardNumber.length非常巧妙，保证了填充之后和原来的长度一样

console.log(finalNumber) //******************4234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它" tabindex="-1"><a class="header-anchor" href="#其它" aria-hidden="true">#</a> 其它</h2>
<ol>
<li>
<p>Trailing Commas</p>
<ul>
<li>在ES8中，我们允许在函数定义和调用时多加一个逗号。</li>
<li>这个没什么用，不建议使用，巨丑。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function foo(m, n, ){
  console.log(m, n)
}

foo(12,13,) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Object Descriptors</p>
<ul>
<li>ES8中增加了另一个对对象的操作是 Object.getOwnPropertyDescriptors ，这个在之前已经讲过了，这里不再重复</li>
</ul>
</li>
<li>
<p>Async Function 异步函数</p>
<ul>
<li>后面详细讲</li>
</ul>
</li>
</ol>
<h1 id="es9" tabindex="-1"><a class="header-anchor" href="#es9" aria-hidden="true">#</a> ES9</h1>
<h2 id="展开语法" tabindex="-1"><a class="header-anchor" href="#展开语法" aria-hidden="true">#</a> ...展开语法</h2>
<ul>
<li>...展开语法是ES9的内容，前面学过了，不重复。</li>
</ul>
<h2 id="其它-1" tabindex="-1"><a class="header-anchor" href="#其它-1" aria-hidden="true">#</a> 其它</h2>
<ol>
<li>Async iterators
<ul>
<li>后面详细讲</li>
</ul>
</li>
<li>Promise
<ul>
<li>后面详细讲</li>
</ul>
</li>
</ol>
<h1 id="es10" tabindex="-1"><a class="header-anchor" href="#es10" aria-hidden="true">#</a> ES10</h1>
<h2 id="flat、flatmap" tabindex="-1"><a class="header-anchor" href="#flat、flatmap" aria-hidden="true">#</a> flat、flatMap</h2>
<ul>
<li>**flat() **方法会按照一个 <strong>可指定的深度</strong> 递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const nums = [10, 20, [5, 2], [4, 9], [ [1, 3] ], 99, 100]  //  [4, 9]深度为1； [ [1, 3] ]深度为2。

const newNums1 = nums.flat(1) //深度为1，也就是除一层中括号[]
const newNums2 = nums.flat(2) //深度为2，也就是除二层中括号[]

console.log(newNums1) // [10, 20, 5, 2, 4, 9, [1, 3], 99, 100]
console.log(newNums2) // [10, 20, 5, 2, 4, 9, 1, 3, 99, 100]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>flatMap()</strong> 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
<ul>
<li>注意一：flatMap是先进行map操作，再做flat的操作</li>
<li>注意二：flatMap中的flat相当于深度为1</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const messages = ['hell0', 'devin', '打发打发', 'ma sd sd']

const newMessage = messages.flatMap(item =&gt; { //先进行map转换成[ ['hell0'], ['devin'], ['打发打发'], ['ma sd sd'] ]; 然后进行深度为1的flat()
  return item.split(' ') //这里是将它们分割开
})

console.log(newMessage) //['hell0', 'devin', '打发打发', 'ma sd sd']
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="object-fromentries" tabindex="-1"><a class="header-anchor" href="#object-fromentries" aria-hidden="true">#</a> Object.fromEntries</h2>
<ul>
<li>在前面，我们可以通过 Object.entries 将一个对象转换成 entries，那么如果我们有一个entries了，如何将其转换成对象呢？</li>
<li>ES10提供了 Object.formEntries来完成转换。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const obj = {
  name: 'devin',
  age: 10,
  height: 2.22
}

const ent = Object.entries(obj) //将对象转换为键值对
console.log(ent) // [ ['name', 'devin'], ['age', 10], ['height', 2.22] ]
 
const info = Object.fromEntries(ent) //将键值对转换为对象
console.log(info) // {name: 'devin', age: 10, height: 2.22}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="trimstart、trimend" tabindex="-1"><a class="header-anchor" href="#trimstart、trimend" aria-hidden="true">#</a> trimStart、trimEnd</h2>
<ul>
<li>去除一个字符串首尾的空格，我们可以通过trim方法，如果单独去除前面或者后面呢？</li>
<li>ES10中给我们提供了trimStart和trimEnd</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const str = '  handsome boy   '

console.log(str.trim())       //handsome boy
console.log(str.trimStart())  //handsome boy___   
console.log(str.trimEnd())    //  handsome boy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它-2" tabindex="-1"><a class="header-anchor" href="#其它-2" aria-hidden="true">#</a> 其它</h2>
<ol>
<li>Symbol description
<ul>
<li>已经讲过了</li>
</ul>
</li>
<li>Optional catch binding
<ul>
<li>后面讲解try cach讲解</li>
</ul>
</li>
</ol>
<h1 id="es11" tabindex="-1"><a class="header-anchor" href="#es11" aria-hidden="true">#</a> ES11</h1>
<h2 id="bigint" tabindex="-1"><a class="header-anchor" href="#bigint" aria-hidden="true">#</a> BigInt</h2>
<ul>
<li>在早期的JavaScript中，我们不能正确的表示过大的数字：
<ul>
<li>大于MAX_SAFE_INTEGER的数值，表示的可能是不正确的。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const maxInt = Number.MAX_SAFE_INTEGER
console.log(maxInt) //9007199254740991

console.log(maxInt + 1) //9007199254740992
console.log(maxInt + 2) //9007199254740992

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>为了解决这个问题，在ES11中，引入了新的数据类型BigInt，用于表示大的整数：
<ul>
<li>BigInt的表示方法是在数值的后面加上n</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const bigInt = 9007199254740991n

console.log(bigInt + 1n) // 9007199254740992n
console.log(bigInt + 2n) // 9007199254740993n

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空集合并运算" tabindex="-1"><a class="header-anchor" href="#空集合并运算" aria-hidden="true">#</a> 空集合并运算 （ ?? ）</h2>
<ul>
<li>在ES11中，增加了空集合并运算符。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 空集合并运算符( ?? )的出现是为了解决或运算( || )存在的缺陷。

// 或运算( || )的规则：对于类似 A || B 这样的式子，会先进行A的逻辑运算，只有当A的结果为null或undefined时，才会执行B的逻辑代码。


// 先探讨 || 的缺陷
const demo1 = 0 || '前面为null或者undefined才会执行到的默认值'
const demo2 = '' || '前面为null或者undefined才会执行到的默认值'

console.log(demo1) //前面为null或者undefined才会执行到的默认值
console.log(demo2) //前面为null或者undefined才会执行到的默认值

// 缺陷：当A位置是0和空字符串''时，照样会执行B位置的逻辑代码。

// 使用空集合并运算符( ?? )解决缺陷
const demo3 = 0 ?? '前面为null或者undefined才会执行到的默认值'
const demo4 = '' ?? '前面为null或者undefined才会执行到的默认值'

console.log(demo3) // 0
console.log(demo4) // 空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="可选链" tabindex="-1"><a class="header-anchor" href="#可选链" aria-hidden="true">#</a> 可选链 （ ? ）</h2>
<ul>
<li>可选链( ? )也是ES11中新增一个特性，主要作用是让我们的代码在进行null和undefined判断时更加清晰和简洁</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const guangDong = {
  demo1: 'dddd',
  zhanJiang: {
    potou: {
      height: 2.22
    }
  }
}

// console.log(guangDong.xxx)  //会报错。报错之后，后面的代码就执行不了了，卡死在这。
console.log(guangDong?.xxx) //返回undefined，后面代码照常执行

//对于这种深入的访问，结合可选链( ? )使用，可以保证后面代码的正常执行，即使这里的访问了不存在的属性，对后面也不影响。
console.log(guangDong?.zhanJiang?.potou?.height) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-this" tabindex="-1"><a class="header-anchor" href="#global-this" aria-hidden="true">#</a> Global This</h2>
<ul>
<li>在之前我们希望获取JavaScript环境的全局对象，不同的环境获取的方式是不一样的
<ul>
<li>比如在浏览器中可以通过this、window来获取</li>
<li>比如在Node中我们需要通过global来获取</li>
</ul>
</li>
<li>那么在ES11中对获取全局对象进行了统一的规范：globalThis</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e260a98735db4fdd9d8e62612107f80b~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
## for..in标准化
<ul>
<li>在ES11之前，虽然很多浏览器支持for...in来遍历对象类型，但是并没有被ECMA标准化.</li>
<li>在ES11中，对其进行了标准化，for...in是用于<strong>遍历对象的key</strong>的：</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>const obj = {
  name: 'devin',
  age: 111,
  height: 1212
}

for(const key in obj) {
  console.log(key)
} //结果： name; age; height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其它-3" tabindex="-1"><a class="header-anchor" href="#其它-3" aria-hidden="true">#</a> 其它</h2>
<ol>
<li>Dynamic Import：后续ES Module模块化中讲解</li>
<li>Promise.allSettled：后续讲Promise的时候讲解</li>
<li>import meta：后续ES Module模块化中讲解</li>
</ol>
<h1 id="es12" tabindex="-1"><a class="header-anchor" href="#es12" aria-hidden="true">#</a> ES12</h1>
<h2 id="回调显示-finalizationregistry" tabindex="-1"><a class="header-anchor" href="#回调显示-finalizationregistry" aria-hidden="true">#</a> 回调显示 FinalizationRegistry</h2>
<ul>
<li>FinalizationRegistry 对象可以让你在对象被垃圾回收时请求一个回调。</li>
<li>FinalizationRegistry 提供了这样的一种方法：当一个在注册表中注册的对象被回收时，请求在某个时间点上调用一个清理回调。（清理回调有时被称为 finalizer ）</li>
<li>可以通过调用register方法，注册任何你想要清理回调的对象，传入该对象和所含的值</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 先创建一个提供回调的FinalizationRegistry对象
const registry = new FinalizationRegistry(value =&gt; {
  console.log(value)
})

// 定义要在清理时发生回调的对象
let obj = {name: 'devin', age: 22}

// 使用注册方法，将对象放到注册表中
registry.register(obj, '这里是可以传到回调函数的value值')

// 将对象指向null。发生清理
obj = null 

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>结果：</li>
</ul>
<div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cf884240941d427f95eaed051f329ecc~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
## 弱引用 WeakRefs
<ul>
<li>如果我们默认将一个对象赋值给另外一个引用，那么这个引用是一个强引用：</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>let obj = {name: 'devin'}
let info = obj //强引用。将obj设为null时不会清理

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f8acef862ce46bc818af6745def642d~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
- 如果我们希望是一个弱引用的话，可以使用WeakRef
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>let obj = {name: 'devin'}
let info = new WeakRef(obj) //弱引用。将obj设为null时，info也会被GC清理。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div align=center>
<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd4346a091254c0e9e35d173614e07af~tplv-k3u1fbpfcp-zoom-1.image""" width="60%" height="50%"/>
</div>
## 运算符的语法糖 logical assignment operators
<ul>
<li>准备知识介绍，这个看懂了，后面直接理解了<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 不使用语法糖
let n = 0
n = n + 1
console.log(n) // 1

// 使用语法糖
let n = 0
n += 1
console.log(n) // 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<ol>
<li>
<p>或运算( | | )  的语法糖</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 不使用语法糖
let message = ''
message = message || 'hello world'
console.log(message) // hello world

// 使用语法糖
let message = ''
message ||= 'hello world'
console.log(message) // hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>与运算( | | )的语法糖</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 与运算的规则： 类似 result = A &amp;&amp; B 的代码逻辑，当A执行结果为true时，再执行B并将B的执行结果赋值给result。当A的结果不为true时，直接将A的结果赋值给result

// 不使用语法糖
let obj = {name : 'devin'}
obj = obj &amp;&amp; obj.name // obj存在即为true。 当obj存在时，执行obj.name，并将obj.name的值赋给obj
console.log(obj) // devin

// 使用语法糖
let obj = {name: 'devin'}
obj &amp;&amp;= obj.name
console.log(obj) // devin

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>空集合并运算符( ?? )的语法糖</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 不使用语法糖
let obj1 = 123412321 ?? '这里是默认值' 
console.log(obj1) // 123412321

let obj2 = null ?? '这里是默认值' 
console.log(obj2) // 这里是默认值

let obj3 = undefined ?? '这里是默认值' 
console.log(obj3) // 这里是默认值

// 使用语法糖
let obj4 = null
obj4 ??= '这里是默认值'
console.log(obj4) // 这里是默认值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
<h2 id="其它-4" tabindex="-1"><a class="header-anchor" href="#其它-4" aria-hidden="true">#</a> 其它</h2>
<ol>
<li>Numeric Separator：数字分离看法
<ul>
<li>讲过了。比如100000000可以写成100_000_000</li>
</ul>
</li>
<li>String.replaceAll：字符串替换
<ul>
<li>少用，略。</li>
</ul>
</li>
</ol>
</div></template>
