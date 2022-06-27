<template><div><h1 id="什么是字典" tabindex="-1"><a class="header-anchor" href="#什么是字典" aria-hidden="true">#</a> 什么是字典？</h1>
<h2 id="字典有什么特点呢" tabindex="-1"><a class="header-anchor" href="#字典有什么特点呢" aria-hidden="true">#</a> 字典有什么特点呢?</h2>
<ul>
<li>特点：
<ul>
<li>字典的主要特点是一一对应的关系.</li>
<li>比如保存一个人的信息, 在合适的情况下取出这些信息.</li>
<li>使用数组的方式: [18, &quot;Coderwhy&quot;, 1.88]. 可以通过下标值取出信息.</li>
<li>使用字典的方式: {&quot;age&quot; : 18, &quot;name&quot; : &quot;Coderwhy&quot;, &quot;height&quot;: 1.88}. 可以通过key取出value</li>
</ul>
</li>
<li>字典的映射关系:
<ul>
<li>有些编程语言中称这种映射关系为字典, 因为它确实和生活中的字典比较相似. (比如Swift中Dictionary, Python中的dict)</li>
<li>有些编程语言中称这种映射关系为Map, 注意Map在这里不要翻译成地图, 而是翻译成映射. (比如Java中就有HashMap&amp;TreeMap等)</li>
</ul>
</li>
</ul>
<h2 id="字典和其它类型的比较" tabindex="-1"><a class="header-anchor" href="#字典和其它类型的比较" aria-hidden="true">#</a> 字典和其它类型的比较</h2>
<ul>
<li>字典和数组:
<ul>
<li>字典和数组对比的话, 字典可以非常方便的通过key来搜索对应的value, key可以包含特殊含义, 也更容易被人们记住.</li>
</ul>
</li>
<li>字典和对象:
<ul>
<li>很多编程语言(比如Java)中对字典和对象区分比较明显, 对象通常是一种在编译期就确定下来的结构, 不可以动态的添加或者删除属性. 而字典通常会使用类似于哈希表的数据结构去实现一种可以动态的添加数据的结构.</li>
<li>但是在JavaScript中, 似乎对象本身就是一种字典. 所有在早期的JavaScript中, 没有字典这种数据类型, 因为你完全可以使用对象去代替.</li>
<li>但是这里我们还是按照其他语言经常使用字典的方式去封装一个字典类型, 方便我们按照其他语言的方式去使用字典. (虽然本质上它内部还是用了一个对象, 后面学习完哈希表我会简单谈一下对象和哈希表的关系)</li>
</ul>
</li>
</ul>
<h1 id="怎么使用字典" tabindex="-1"><a class="header-anchor" href="#怎么使用字典" aria-hidden="true">#</a> 怎么使用字典？</h1>
<h2 id="创建字典类" tabindex="-1"><a class="header-anchor" href="#创建字典类" aria-hidden="true">#</a> 创建字典类</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 创建字典的构造函数
function Dictionay() {
    // 字典属性
    this.items = {}
    
    // 字典操作方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码解析:
<ul>
<li>非常简单, 创建一个Dictionary的构造函数, 用于我们字典的封装.</li>
<li>在字典中, 我们使用了一个items属性, 该属性是一个Object对象.</li>
<li>也就是我们的字典是基于Object封装的, 这个不难理解: 就像我们之前封装Stack和Queue是基于数组的一样.</li>
</ul>
</li>
</ul>
<p>字典常见的操作
set(key,value)：向字典中添加新元素。
remove(key)：通过使用键值来从字典中移除键值对应的数据值。
has(key)：如果某个键值存在于这个字典中，则返回true，反之则返回false。
get(key)：通过键值查找特定的数值并返回。
clear()：将这个字典中的所有元素全部删除。
size()：返回字典所包含元素的数量。与数组的length属性类似。
keys()：将字典所包含的所有键名以数组形式返回。
values()：将字典所包含的所有数值以数组形式返回。</p>
<h2 id="字典常见的操作" tabindex="-1"><a class="header-anchor" href="#字典常见的操作" aria-hidden="true">#</a> 字典常见的操作</h2>
<ul>
<li><code v-pre>set(key,value)</code>：向字典中添加新元素。</li>
<li><code v-pre>remove(key)</code>：通过使用键值来从字典中移除键值对应的数据值。</li>
<li><code v-pre>has(key)</code>：如果某个键值存在于这个字典中，则返回<code v-pre>true</code>，反之则返回<code v-pre>false</code>。</li>
<li><code v-pre>get(key)</code>：通过键值查找特定的数值并返回。</li>
<li><code v-pre>clear()</code>：将这个字典中的所有元素全部删除。</li>
<li><code v-pre>size()</code>：返回字典所包含元素的数量。与数组的<code v-pre>length</code>属性类似。</li>
<li><code v-pre>keys()</code>：将字典所包含的所有键名以数组形式返回。</li>
<li><code v-pre>values()</code>：将字典所包含的所有数值以数组形式返回。</li>
</ul>
<h2 id="操作的代码实现" tabindex="-1"><a class="header-anchor" href="#操作的代码实现" aria-hidden="true">#</a> 操作的代码实现</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 创建字典的构造函数
function Dictionay() {
    // 字典属性
    this.items = {}

    // 字典操作方法
    // 在字典中添加键值对
    Dictionay.prototype.set = function (key, value) {
        this.items[key] = value
    }

    // 判断字典中是否有某个key
    Dictionay.prototype.has = function (key) {
        return this.items.hasOwnProperty(key)
    }

    // 从字典中移除元素
    Dictionay.prototype.remove = function (key) {
        // 1.判断字典中是否有这个key
        if (!this.has(key)) return false

        // 2.从字典中删除key
        delete this.items[key]
        return true
    }

    // 根据key去获取value
    Dictionay.prototype.get = function (key) {
        return this.has(key) ? this.items[key] : undefined
    }

    // 获取所有的keys
    Dictionay.prototype.keys = function () {
        return Object.keys(this.items)
    }

    // 获取所有的value
    Dictionay.prototype.values = function () {
        return Object.values(this.items)
    }

    // size方法
    Dictionay.prototype.size = function () {
        return this.keys().length
    }

    // clear方法
    Dictionay.prototype.clear = function () {
        this.items = {}
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典的使用" tabindex="-1"><a class="header-anchor" href="#字典的使用" aria-hidden="true">#</a> 字典的使用</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 创建字典对象
var dict = new Dictionay()

// 在字典中添加元素
dict.set(&quot;age&quot;, 18)
dict.set(&quot;name&quot;, &quot;Coderwhy&quot;)
dict.set(&quot;height&quot;, 1.88)
dict.set(&quot;address&quot;, &quot;广州市&quot;)

// 获取字典的信息
alert(dict.keys()) // age,name,height,address
alert(dict.values()) // 18,Coderwhy,1.88,广州市
alert(dict.size()) // 4
alert(dict.get(&quot;name&quot;)) // Coderwhy

// 字典的删除方法
dict.remove(&quot;height&quot;)
alert(dict.keys())// age,name,address

// 清空字典
dict.clear()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
