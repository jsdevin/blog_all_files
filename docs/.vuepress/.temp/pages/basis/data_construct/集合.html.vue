<template><div><h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1>
<ul>
<li>
<p>2015年6月份发布的ES6中包含了Set类,也就是说集合已经被JavaScript这门语言内置了。</p>
</li>
<li>
<p>这里学习只是为了更好地理解集合的内部实现机制。</p>
</li>
<li>
<p>开发的时候可以直接使用集合。</p>
</li>
</ul>
<h1 id="什么是集合" tabindex="-1"><a class="header-anchor" href="#什么是集合" aria-hidden="true">#</a> 什么是集合？</h1>
<ul>
<li>集合通常是由一组无序的, 不能重复的元素构成.</li>
<li>集合可以看成一种特殊的数组
<ul>
<li>其实集合你可以将它看成一种特殊的数组.</li>
<li>特殊之处在于里面的元素没有顺序, 也不能重复.</li>
<li>没有顺序意味着不能通过下标值进行访问, 不能重复意味着相同的对象在集合中只会存在一份.</li>
</ul>
</li>
</ul>
<h1 id="封装集合" tabindex="-1"><a class="header-anchor" href="#封装集合" aria-hidden="true">#</a> 封装集合</h1>
<h2 id="创建集合类" tabindex="-1"><a class="header-anchor" href="#创建集合类" aria-hidden="true">#</a> 创建集合类</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 封装集合的构造函数
function Set() {
    // 使用一个对象来保存集合的元素
    this.items = {} 
    
    // 集合的操作方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2>
<ul>
<li>has(value) 方法
<ul>
<li>因为集合中不能重复的元素，所以要先判断集合中是否有某个元素。</li>
<li>如果值在集合中，返回<code v-pre>true</code>，否则返回<code v-pre>false</code>。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 判断集合中是否有某个元素
Set.prototype.has = function (value) {
    return this.items.hasOwnProperty(value)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>add(value)
<ul>
<li>向集合添加一个新的项。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 向集合中添加元素
Set.prototype.add = function (value) {
    // 1.判断集合中是否已经包含了该元素
    if (this.has(value)) return false

    // 2.将元素添加到集合中
    this.items[value] = value
    return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2>
<ul>
<li>remove(value)
<ul>
<li>从集合移除一个值</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 从集合中删除某个元素
Set.prototype.remove = function (value) {
    // 1.判断集合中是否包含该元素
    if (!this.has(value)) return false

    // 2.包含该元素, 那么将元素删除
    delete this.items[value]
    return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>clear()
<ul>
<li>移除集合中的所有项。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 清空集合中所有的元素
Set.prototype.clear = function () {
    this.items = {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h2>
<ul>
<li>size()
<ul>
<li>返回集合所包含元素的数量。与数组的length属性类似。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 获取集合的大小
Set.prototype.size = function () {
    return Object.keys(this.items).length
    
    /*
    考虑兼容性问题, 使用下面的代码
    var count = 0
    for (var value in this.items) {
        if (this.items.hasOwnProperty(value)) {
            count++
        }
    }
    return count
    */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>value()
<ul>
<li>返回一个包含集合中所有值的数组。</li>
</ul>
</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 获取集合中所有的值
Set.prototype.values = function () {
    return Object.keys(this.items)

    /*
    考虑兼容性问题, 使用下面的代码
    var keys = []
    for (var value in this.items) {
        keys.push(value)
    }
    return keys
    */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
