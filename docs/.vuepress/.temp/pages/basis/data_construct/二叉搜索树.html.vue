<template><div><h1 id="什么是二叉搜索树" tabindex="-1"><a class="header-anchor" href="#什么是二叉搜索树" aria-hidden="true">#</a> 什么是二叉搜索树？</h1>
<h2 id="性质" tabindex="-1"><a class="header-anchor" href="#性质" aria-hidden="true">#</a> 性质</h2>
<ul>
<li>二叉搜索树是一颗二叉树, 可以为空；如果不为空，满足以下性质：
<ol>
<li>非空左子树的所有键值小于其根结点的键值。</li>
<li>非空右子树的所有键值大于其根结点的键值。</li>
<li>左、右子树本身也都是二叉搜索树。
举例：</li>
</ol>
</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108121418.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108121418.png" width="60%" height="50%"/>
</div>
<p>解析 : 对于10-7-5这个二叉树，右子树不满足<em>非空右子树的所有键值大于其根结点的键值</em> 的性质，所以其不是二叉搜索树。</p>
<h1 id="二叉搜索树有什么特点" tabindex="-1"><a class="header-anchor" href="#二叉搜索树有什么特点" aria-hidden="true">#</a> 二叉搜索树有什么特点？</h1>
<ul>
<li>二叉搜索树的特点就是相对较小的值总是保存在左结点上, 相对较大的值总是保存在右结点上.</li>
</ul>
<h1 id="二叉搜索树的操作" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的操作" aria-hidden="true">#</a> 二叉搜索树的操作？</h1>
<ul>
<li>insert(key)：向树中插入一个新的键。</li>
<li>search(key)：在树中查找一个键，如果结点存在，则返回true；如果不存在，则返回false。</li>
<li>inOrderTraverse：通过中序遍历方式遍历所有结点。</li>
<li>preOrderTraverse：通过先序遍历方式遍历所有结点。</li>
<li>postOrderTraverse：通过后序遍历方式遍历所有结点。</li>
<li>min：返回树中最小的值/键。</li>
<li>max：返回树中最大的值/键。</li>
<li>remove(key)：从树中移除某个键。</li>
</ul>
<h1 id="二叉搜索树的实现" tabindex="-1"><a class="header-anchor" href="#二叉搜索树的实现" aria-hidden="true">#</a> 二叉搜索树的实现</h1>
<h2 id="创建二叉搜索树" tabindex="-1"><a class="header-anchor" href="#创建二叉搜索树" aria-hidden="true">#</a> 创建二叉搜索树</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 创建BinarySearchTree
function BinarySerachTree() {
    // 创建结点构造函数
    function Node(key) {   //封装节点的类
        this.key = key     //节点对应的key
        this.left = null   //左子树指针
        this.right = null  //右子树指针
    }
    
    // 保存根的属性
    this.root = null
    
    // 二叉搜索树相关的操作方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2>
<h3 id="供外界调用的方法" tabindex="-1"><a class="header-anchor" href="#供外界调用的方法" aria-hidden="true">#</a> 供外界调用的方法</h3>
<ol>
<li>向树中插入数据</li>
</ol>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 向树中插入数据
BinarySerachTree.prototype.insert = function (key) {
    // 1.根据key创建对应的node
    var newNode = new Node(key)
    
    // 2.判断根结点是否有值
    if (this.root === null) {
        this.root = newNode //在根节点处插入值
    } else { //在非根节点处插入值
        this.insertNode(this.root, newNode) //这里的insertNode方法后面会封装到BinarySerachTree二叉搜索树中。
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>insertNode()方法的实现</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>BinarySerachTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key &lt; node.key) { // 1.准备向左子树插入数据
        if (node.left === null) { // 1.1.node的左子树上没有内容
            node.left = newNode
        } else { // 1.2.node的左子树上已经有了内容
            this.insertNode(node.left, newNode)
        }
    } else { // 2.准备向右子树插入数据
        if (node.right === null) { // 2.1.node的右子树上没有内容
            node.right = newNode
        } else { // 2.2.node的右子树上有内容
            this.insertNode(node.right, newNode)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h2>
<h3 id="树的遍历" tabindex="-1"><a class="header-anchor" href="#树的遍历" aria-hidden="true">#</a> 树的遍历</h3>
<ul>
<li>
<p>树的三种遍历方式：先序遍历、中序遍历、后序遍历</p>
</li>
<li>
<p>树的遍历针对所有二叉树都是适用的。</p>
</li>
</ul>
<h3 id="先序遍历" tabindex="-1"><a class="header-anchor" href="#先序遍历" aria-hidden="true">#</a> 先序遍历</h3>
<h4 id="过程" tabindex="-1"><a class="header-anchor" href="#过程" aria-hidden="true">#</a> 过程</h4>
<ul>
<li>①访问根结点；</li>
<li>②先序遍历其左子树；</li>
<li>③先序遍历其右子树。</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130049.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130049.png" width="60%" height="50%"/>
</div>
<h4 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h4>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130205.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130205.png" width="60%" height="50%"/>
</div>
<h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>BinarySerachTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTranversalNode(this.root, handler)
}

BinarySerachTree.prototype.preOrderTranversalNode = function (node, handler) {
    if (node !== null) {
        // 1.打印当前经过的节点
        handler(node.key)
        // 2.遍历所有的左子树
        this.preOrderTranversalNode(node.left, handler) //用到递归思想
        // 3.遍历所有的右子树
        this.preOrderTranversalNode(node.right, handler)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中序遍历" tabindex="-1"><a class="header-anchor" href="#中序遍历" aria-hidden="true">#</a> 中序遍历</h3>
<h4 id="过程-1" tabindex="-1"><a class="header-anchor" href="#过程-1" aria-hidden="true">#</a> 过程</h4>
<ul>
<li>①中序遍历其左子树；</li>
<li>②访问根结点；</li>
<li>③中序遍历其右子树</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130752.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130752.png" width="60%" height="50%"/>
</div>
<h4 id="图解-1" tabindex="-1"><a class="header-anchor" href="#图解-1" aria-hidden="true">#</a> 图解</h4>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130821.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130821.png" width="60%" height="50%"/>
</div>
<h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 中序遍历
BinarySerachTree.prototype.inOrderTraversal = function (handler) {
    this.inOrderTraversalNode(this.root, handler)
}

BinarySerachTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
        this.inOrderTraversalNode(node.left, handler)
        handler(node.key)
        this.inOrderTraversalNode(node.right, handler)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="后序遍历" tabindex="-1"><a class="header-anchor" href="#后序遍历" aria-hidden="true">#</a> 后序遍历</h3>
<h4 id="过程-2" tabindex="-1"><a class="header-anchor" href="#过程-2" aria-hidden="true">#</a> 过程</h4>
<ul>
<li>①后序遍历其左子树；</li>
<li>②后序遍历其右子树；</li>
<li>③访问根结点。</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130935.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130935.png" width="60%" height="50%"/>
</div>
<h4 id="图解-2" tabindex="-1"><a class="header-anchor" href="#图解-2" aria-hidden="true">#</a> 图解</h4>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130959.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108130959.png" width="60%" height="50%"/>
</div>
<h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 后续遍历
BinarySerachTree.prototype.postOrderTraversal = function (handler) {
    
}

BinarySerachTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
        this.postOrderTraversalNode(node.left, handler)
        this.postOrderTraversalNode(node.right, handler)
        handler(node.key)
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取最大值和最小值" tabindex="-1"><a class="header-anchor" href="#获取最大值和最小值" aria-hidden="true">#</a> 获取最大值和最小值</h3>
<h4 id="图解-3" tabindex="-1"><a class="header-anchor" href="#图解-3" aria-hidden="true">#</a> 图解</h4>
<ul>
<li>在二叉搜索树中搜索最值是一件非常简单的事情, 其实用眼睛看就可以看出来了.</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108131236.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108131236.png" width="60%" height="50%"/>
</div>
<h4 id="代码实现-3" tabindex="-1"><a class="header-anchor" href="#代码实现-3" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 获取最大值和最小值
BinarySerachTree.prototype.min = function () {
    var node = this.root
    while (node.left !== null) {
        node = node.left
    }
    return node.key
}

BinarySerachTree.prototype.max = function () {
    var node = this.root
    while (node.right !== null) {
        node = node.right
    }
    return node.key
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="搜索特定的值" tabindex="-1"><a class="header-anchor" href="#搜索特定的值" aria-hidden="true">#</a> 搜索特定的值</h3>
<ul>
<li>二叉搜索树不仅仅获取最值效率非常高, 搜索特定的值效率也非常高.</li>
</ul>
<h4 id="用递归来实现" tabindex="-1"><a class="header-anchor" href="#用递归来实现" aria-hidden="true">#</a> 用递归来实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 搜搜特定的值
BinarySerachTree.prototype.search = function (key) {
    return this.searchNode(this.root, key)
}

BinarySerachTree.prototype.searchNode = function (node, key) {
    // 1.如果传入的node为null那么, 那么就退出递归
    if (node === null) {
        return false
    }

    // 2.判断node节点的值和传入的key大小
    if (node.key &gt; key) { // 2.1.传入的key较小, 向左边继续查找
        return this.searchNode(node.left, key)
    } else if (node.key &lt; key) { // 2.2.传入的key较大, 向右边继续查找
        return this.searchNode(node.right, key)
    } else { // 2.3.相同, 说明找到了key
        return true
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="用循环来实现" tabindex="-1"><a class="header-anchor" href="#用循环来实现" aria-hidden="true">#</a> 用循环来实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>BinarySerachTree.prototype.search = function (key) {
    var node = this.root
    while (node !== null) {
        if (node.key &gt; key) {
            node = node.left
        } else if (node.key &lt; key) {
            node = node.right
        } else {
            return true
        }
    }
    return false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删" tabindex="-1"><a class="header-anchor" href="#删" aria-hidden="true">#</a> 删</h2>
<h3 id="删除节点的思路" tabindex="-1"><a class="header-anchor" href="#删除节点的思路" aria-hidden="true">#</a> 删除节点的思路</h3>
<p>删除节点要从查找要删的节点开始, 找到节点后, 需要考虑三种情况 :</p>
<ul>
<li>该节点是也结点(没有字节点, 比较简单)</li>
<li>该节点有一个子节点(也相对简单)</li>
<li>该节点有两个子节点.(情况比较复杂, 我们后面慢慢道来)
从查找要删除的节点入手</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 删除结点
BinarySerachTree.prototype.remove = function (key) {
    // 1.定义临时保存的变量
    var current = this.root   //current 用于一会儿找到的要删除的节点对应的node.
    //parent 用于保存current节点的父节点. 因为如果current有子节点, 
    //那么在删除current节点的时候, 必然需要将parent的left或者right指向它的某一个子节点. 所以需要保存起来current的parent. (树中的节点关系不能向上的, 和链表非常相似)
    var parent = this.root     
    var isLeftChild = true // boolean类型,它用户记录我们是在current是在父节点的左侧还是右侧, 以便到时候设置parent的left或者right

    // 2.开始查找节点
    while (current.key !== key) {
        parent = current
        if (key &lt; current.key) {
            isLeftChild = true
            current = current.left
        } else {
            isLeftChild = false
            current = current.right
        }

        // 如果发现current已经指向null, 那么说明没有找到要删除的数据
        if (current === null) return false
    }

    return true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="情况一-没有子节点" tabindex="-1"><a class="header-anchor" href="#情况一-没有子节点" aria-hidden="true">#</a> 情况一：没有子节点</h3>
<ul>
<li>这种情况相对比较简单, 我们需要检测current的left以及right是否都为null.</li>
<li>都为null之后还要检测一个东西, 就是是否current就是根, 都为null, 并且为跟根, 那么相当于要清空二叉树(当然, 只是清空了根, 因为只有它).</li>
<li>否则就把父节点的left或者right字段设置为null即可.</li>
</ul>
<h4 id="图解过程" tabindex="-1"><a class="header-anchor" href="#图解过程" aria-hidden="true">#</a> 图解过程</h4>
<ul>
<li>如果只有一个单独的根, 直接删除即可</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108132915.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108132915.png" width="60%" height="50%"/>
</div>
<ul>
<li>如果是叶结点, 那么处理方式如下 :</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108132937.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108132937.png" width="60%" height="50%"/>
</div>
<h4 id="代码实现-4" tabindex="-1"><a class="header-anchor" href="#代码实现-4" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 3.删除的结点是叶结点
if (current.left === null &amp;&amp; current.right === null) {
    if (current == this.root) {
        this.root == null
    } else if (isLeftChild) {
        parent.left = null
    } else {
        parent.right = null
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="情况二-一个子节点" tabindex="-1"><a class="header-anchor" href="#情况二-一个子节点" aria-hidden="true">#</a> 情况二：一个子节点</h3>
<ul>
<li>这种情况也不是很难.</li>
<li>要删除的current结点, 只有2个连接(如果有两个子结点, 就是三个连接了), 一个连接父节点, 一个连接唯一的子节点.</li>
<li>需要从这三者之间: 爷爷 - 自己 - 儿子, 将自己(current)剪短, 让爷爷直接连接儿子即可.</li>
<li>这个过程要求改变父节点的left或者right, 指向要删除节点的子节点.</li>
<li>当然, 在这个过程中还要考虑是否current就是根.</li>
</ul>
<h4 id="图解过程-1" tabindex="-1"><a class="header-anchor" href="#图解过程-1" aria-hidden="true">#</a> 图解过程</h4>
<ul>
<li>如果是根，比较简单，略。</li>
<li>如果不是根，并且只有一个子节点的情况.</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108133237.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108133237.png" width="60%" height="50%"/>
</div>
<h4 id="代码实现-5" tabindex="-1"><a class="header-anchor" href="#代码实现-5" aria-hidden="true">#</a> 代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 4.删除有一个子节点的节点
else if (current.right === null) {
    if (current == this.root) {
        this.root = current.left
    } else if (isLeftChild) {
        parent.left = current.left
    } else {
        parent.right = current.left
    }
} else if (current.left === null) {
    if (current == this.root) {
        this.root = current.right
    } else if (isLeftChild) {
        parent.left = current.right
    } else {
        parent.right = current.right
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="情况三-两个子节点" tabindex="-1"><a class="header-anchor" href="#情况三-两个子节点" aria-hidden="true">#</a> 情况三：两个子节点</h3>
<ul>
<li>思考</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109232933.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109232933.png" width="60%" height="50%"/>
</div>
<h4 id="删除有两个节点的规律" tabindex="-1"><a class="header-anchor" href="#删除有两个节点的规律" aria-hidden="true">#</a> 删除有两个节点的规律</h4>
<ul>
<li>先来, 我们来总结一下删除有两个节点的规律:
<ul>
<li>如果我们要删除的节点有两个子节点, 甚至子节点还有子节点, 这种情况下我们需要从下面的子节点中找到一个节点, 来替换当前的节点.</li>
<li>但是找到的这个节点有什么特征呢? 应该是current节点下面所有节点中最接近current节点的.
<ul>
<li>要么比current节点小一点点, 要么比current节点大一点点.</li>
<li>总结你最接近current, 你就可以用来替换current的位置.</li>
</ul>
</li>
<li>这个节点怎么找呢?
<ul>
<li>比current小一点点的节点, 一定是current左子树的最大值.</li>
<li>比current大一点点的节点, 一定是current右子树的最小值.</li>
</ul>
</li>
<li>前驱&amp;后继
<ul>
<li>而在二叉搜索树中, 这两个特别的节点, 有两个特比的名字.</li>
<li>比current小一点点的节点, 称为current节点的前驱.</li>
<li>比current大一点点的节点, 称为current节点的后继.</li>
</ul>
</li>
<li>也就是为了能够删除有两个子节点的current, 要么找到它的前驱, 要么找到它的后继.</li>
<li>所以, 接下来, 我们先找到这样的节点(前驱或者后继都可以, 我这里以找后继为例)</li>
</ul>
</li>
</ul>
<h4 id="寻找后继的代码实现" tabindex="-1"><a class="header-anchor" href="#寻找后继的代码实现" aria-hidden="true">#</a> 寻找后继的代码实现</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 找后继的方法
BinarySerachTree.prototype.getSuccessor = function (delNode) {
    // 1.使用变量保存临时的节点
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right // 要从右子树开始找

    // 2.寻找节点
    while (current != null) {
        successorParent = successor
        successor = current
        current = current.left
    }

    // 3.如果是删除图中15的情况, 还需要如下代码
    if (successor != delNode.right) {
        successorParent.left = successor.right
        successor.right = delNode.right
    }
    
    return successor
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码解析
<ul>
<li>代码是根据传入的delNode来寻找后继节点.</li>
<li>本身代码比较简单, 但是后面有一个序号3的代码, 相对较难理解.</li>
<li>我们这里先不做讨论, 先把找到后继后进行的操作写完, 再后头理解这段代码.</li>
<li>序号3: TODO</li>
</ul>
</li>
</ul>
<h4 id="找到后续后的处理代码" tabindex="-1"><a class="header-anchor" href="#找到后续后的处理代码" aria-hidden="true">#</a> 找到后续后的处理代码</h4>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 5.删除有两个节点的节点
else {
    // 1.获取后继节点
    var successor = this.getSuccessor(current)
    
    // 2.判断是否是根节点
    if (current == this.root) {
        this.root = successor
    } else if (isLeftChild) {
        parent.left = successor
    } else {
        parent.right = successor
    }
    
    // 3.将删除节点的左子树赋值给successor
    successor.left = current.left
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码解析:
<ul>
<li>序号1: 调用刚才封装的方法, 获取后继节点.</li>
<li>序号2: 判断三种情况:
<ul>
<li>情况一: 是根节点, 那么this.root = successor. 并且successor的left应该等于current的left</li>
<li>情况二: 是父节点的左结点, parent.left = successor, 并且successor的left应该等于current的left</li>
<li>情况三: 是父节点的右结点, parent.right = successor, 并且successor的left应该等于current的left</li>
</ul>
</li>
<li>需要3: 就是将successor.left = current.left从判断中抽取出来.</li>
</ul>
</li>
<li>回头头看TODO的情况
<ul>
<li>上面的代码实现, 对于删除9是适用的. 做法就是将7节点的left 赋值为 10. 10节点的left应该赋值为8即可.</li>
<li>但是, 对于删除15我们还缺少什么呢?
<ul>
<li>已经完成: 11的left指向了18, 18的right指向了13.</li>
<li>没有完成: 19怎么办? 20这个左子树怎么办?</li>
<li>很明显, 19应该放在20的左边, 20应该放在18的右边.</li>
<li>19放在20的左边代码: successorParent.left = successor.right</li>
<li>20放在18的右边代码: successor.right = delNode.right</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="删除节点完整代码" tabindex="-1"><a class="header-anchor" href="#删除节点完整代码" aria-hidden="true">#</a> 删除节点完整代码</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 删除结点
BinarySerachTree.prototype.remove = function (key) {
    // 1.定义临时保存的变量
    var current = this.root
    var parent = this.root
    var isLeftChild = true

    // 2.开始查找节点
    while (current.key !== key) {
        parent = current
        if (key &lt; current.key) {
            isLeftChild = true
            current = current.left
        } else {
            isLeftChild = false
            current = current.right
        }

        // 如果发现current已经指向null, 那么说明没有找到要删除的数据
        if (current === null) return false
    }

    // 3.删除的结点是叶结点
    if (current.left === null &amp;&amp; current.right === null) {
        if (current == this.root) {
            this.root == null
        } else if (isLeftChild) {
            parent.left = null
        } else {
            parent.right = null
        }
    }

    // 4.删除有一个子节点的节点
    else if (current.right === null) {
        if (current == this.root) {
            this.root = current.left
        } else if (isLeftChild) {
            parent.left = current.left
        } else {
            parent.right = current.left
        }
    } else if (current.left === null) {
        if (current == this.root) {
            this.root = current.right
        } else if (isLeftChild) {
            parent.left = current.right
        } else {
            parent.right = current.right
        }
    }

    // 5.删除有两个节点的节点
    else {
        // 1.获取后继节点
        var successor = this.getSuccessor(current)

        // 2.判断是否是根节点
        if (current == this.root) {
            this.root = successor
        } else if (isLeftChild) {
            parent.left = successor
        } else {
            parent.right = successor
        }

        // 3.将删除节点的左子树赋值给successor
        successor.left = current.left
    }

    return true
}

// 找后继的方法
BinarySerachTree.prototype.getSuccessor = function (delNode) {
    // 1.使用变量保存临时的节点
    var successorParent = delNode
    var successor = delNode
    var current = delNode.right // 要从右子树开始找

    // 2.寻找节点
    while (current != null) {
        successorParent = successor
        successor = current
        current = current.left
    }

    // 3.如果是删除图中15的情况, 还需要如下代码
    if (successor != delNode.right) {
        successorParent.left = successor.right
        successor.right = delNode.right
    }
    
    return successor
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解：理解自coderwhy老师的文章，原文地址<a href="https://www.jianshu.com/p/ad811c95aad3#tocbar--j1ttnb" target="_blank" rel="noopener noreferrer">点这里<ExternalLinkIcon/></a>。非商业化转载，学习做笔记使用，侵删。</p>
</div></template>
