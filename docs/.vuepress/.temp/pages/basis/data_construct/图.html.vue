<template><div><h1 id="什么是图" tabindex="-1"><a class="header-anchor" href="#什么是图" aria-hidden="true">#</a> 什么是图？</h1>
<h2 id="图的概念" tabindex="-1"><a class="header-anchor" href="#图的概念" aria-hidden="true">#</a> 图的概念</h2>
<ul>
<li>图是一种比线性表和树更复杂的数据结构，在图中，结点之间的关系是任意的，任意两个数据元素之间都可能相关。</li>
<li>图是一种多对多的数据结构。</li>
<li>图（Graph）是由顶点的有穷非空集合和顶点之间边的集合组成，通常表示为：G（V，E），其中，G表示一个图，V是图G中顶点的集合，E是图G中边的集合。</li>
</ul>
<h2 id="图的构成要素" tabindex="-1"><a class="header-anchor" href="#图的构成要素" aria-hidden="true">#</a> 图的构成要素</h2>
<ul>
<li>一组顶点：通常用 V (Vertex) 表示顶点的集合</li>
<li>一组边：通常用 E (Edge) 表示边的集合
<ul>
<li>边是顶点和顶点之间的连线</li>
<li>边可以是有向的, 也可以是无向的.(比如A --- B, 通常表示无向. A --&gt; B, 通常表示有向)</li>
</ul>
</li>
</ul>
<h1 id="图的一些专业术语" tabindex="-1"><a class="header-anchor" href="#图的一些专业术语" aria-hidden="true">#</a> 图的一些专业术语</h1>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109233428.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109233428.png" width="60%" height="50%"/>
</div>
<ul>
<li>顶点:
<ul>
<li>顶点刚才我们已经介绍过了, 表示图中的一个结点.</li>
<li>比如地铁站中某个站/多个村庄中的某个村庄/互联网中的某台主机/人际关系中的人.</li>
</ul>
</li>
<li>边:
<ul>
<li>边刚才我们也介绍过了, 表示顶点和顶点之间的连线.</li>
<li>比如地铁站中两个站点之间的直接连线, 就是一个边.</li>
<li>注意: 这里的边不要叫做路径, 路径有其他的概念, 待会儿我们会介绍到.</li>
<li>下面的图中: 0 - 1有一条边, 1 - 2有一条边, 0 - 2没有边.</li>
</ul>
</li>
<li>相邻顶点
<ul>
<li>由一条边连接在一起的顶点称为相邻顶点.</li>
<li>比如0 - 1是相邻的, 0 - 3是相邻的. 0 - 2是不相邻的</li>
</ul>
</li>
<li>度:
<ul>
<li>一个顶点的度是相邻顶点的数量.</li>
<li>比如0顶点和其他两个顶点相连, 0顶点的度是2</li>
<li>比如1顶点和其他四个顶点相连, 1顶点的度是4</li>
</ul>
</li>
<li>路径:
<ul>
<li>路径是顶点v1, v2..., vn的一个连续序列, 比如上图中0 1 5 9就是一条路径.</li>
<li>简单路径: 简单路径要求不包含重复的顶点. 比如 0 1 5 9是一条简单路径.</li>
<li>回路: 第一个顶点和最后一个顶点相同的路径称为回路. 比如 0 1 5 6 3 0</li>
</ul>
</li>
<li>无向图:
<ul>
<li>上面的图就是一张无向图, 因为所有的边都没有方向.</li>
<li>比如 0 - 1之间有变, 那么说明这条边可以保证 0 -&gt; 1, 也可以保证 1 -&gt; 0.</li>
</ul>
</li>
<li>有向图:
<ul>
<li>有向图表示的图中的边是有方向的.</li>
<li>比如 0 -&gt; 1, 不能保证一定可以 1 -&gt; 0, 要根据方向来定.</li>
</ul>
</li>
<li>无权图和带权图
<ul>
<li>无权图:
<ul>
<li>我们上面的图就是一张无权图(边没有携带权重)</li>
<li>我们上面的图中的边是没有任何意义的, 不能收 0 - 1的边, 比4 - 9的边更远或者用的时间更长.</li>
</ul>
</li>
<li>带权图:
<ul>
<li>带权图表示边有一定的权重.</li>
<li>这里的权重可以是任意你希望表示的数据: 比如距离或者花费的时间或者票价.</li>
</ul>
</li>
</ul>
</li>
<li>我们来看一张有向和带权的图</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108175313.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108175313.png" width="60%" height="50%"/>
</div>
<h1 id="图的表示" tabindex="-1"><a class="header-anchor" href="#图的表示" aria-hidden="true">#</a> 图的表示</h1>
<h2 id="顶点的表示" tabindex="-1"><a class="header-anchor" href="#顶点的表示" aria-hidden="true">#</a> 顶点的表示</h2>
<ul>
<li>顶点的表示相对简单。上面的顶点，我们抽象成A B C D。这些A B C D我们可以使用一个数组来存储起来(存储所有的顶点)。</li>
</ul>
<h2 id="边的表示" tabindex="-1"><a class="header-anchor" href="#边的表示" aria-hidden="true">#</a> 边的表示</h2>
<ul>
<li>可以用邻接矩阵和邻接表表示。</li>
<li>因为邻接矩阵会浪费很多计算机储存空间，所以这里只看邻接表。</li>
</ul>
<h3 id="邻接表" tabindex="-1"><a class="header-anchor" href="#邻接表" aria-hidden="true">#</a> 邻接表</h3>
<ul>
<li>邻接表由图中每个顶点以及和顶点相邻的顶点列表组成.</li>
<li>这个列表有很多中方式来存储: 数组/链表/字典(哈希表)都可以.</li>
</ul>
<h4 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h4>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108180137.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108180137.png" width="60%" height="50%"/>
</div>
<ul>
<li>图片解析:
<ul>
<li>其实图片比较容易理解.</li>
<li>比如我们要表示和A顶点有关联的顶点(边), A和B/C/D有边, 那么我们可以通过A找到对应的数组/链表/字典, 再取出其中的内容就可以啦.</li>
</ul>
</li>
<li>邻接表的问题:
<ul>
<li>邻接表计算&quot;出度&quot;是比较简单的(出度: 指向别人的数量, 入度: 指向自己的数量)</li>
<li>邻接表如果需要计算有向图的&quot;入度&quot;, 那么是一件非常麻烦的事情.</li>
<li>它必须构造一个&quot;“逆邻接表&quot;, 才能有效的计算&quot;入度&quot;. 而临街矩阵会非常简单.</li>
</ul>
</li>
</ul>
<h1 id="图的封装" tabindex="-1"><a class="header-anchor" href="#图的封装" aria-hidden="true">#</a> 图的封装</h1>
<h2 id="创建图" tabindex="-1"><a class="header-anchor" href="#创建图" aria-hidden="true">#</a> 创建图</h2>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>function Graph() {
    // 属性
    this.vertexes = [] // 存储顶点
    this.adjList = new Dictionay() // 存储边。adj是adjoin的缩写, 邻接的意思
    
    // 方法
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="增" tabindex="-1"><a class="header-anchor" href="#增" aria-hidden="true">#</a> 增</h2>
<h3 id="添加顶点" tabindex="-1"><a class="header-anchor" href="#添加顶点" aria-hidden="true">#</a> 添加顶点</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 添加方法
Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v)
    this.adjList.set(v, [])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码解析:
<ul>
<li>我们将添加的顶点放入到数组中.</li>
<li>另外, 我们给该顶点创建一个数组[], 该数组用于存储顶点连接的所有的边.(回顾邻接表的实现方式)</li>
</ul>
</li>
</ul>
<h3 id="添加边" tabindex="-1"><a class="header-anchor" href="#添加边" aria-hidden="true">#</a> 添加边</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>Graph.prototype.addEdge = function (v, w) {
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码解析:
<ul>
<li>添加边需要传入两个顶点, 因为边是两个顶点之间的边, 边不可能单独存在.</li>
<li>根据顶点v取出对应的数组, 将w加入到它的数组中.</li>
<li>根据顶点w取出对应的数组, 将v加入到它的数组中.</li>
<li>因为我们这里实现的是无向图, 所以边是可以双向的.</li>
</ul>
</li>
</ul>
<h3 id="添加的测试代码" tabindex="-1"><a class="header-anchor" href="#添加的测试代码" aria-hidden="true">#</a> 添加的测试代码</h3>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 测试代码
var graph = new Graph()

// 添加顶点
var myVertexes = [&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;, &quot;E&quot;, &quot;F&quot;, &quot;G&quot;, &quot;H&quot;, &quot;I&quot;]
for (var i = 0; i &lt; myVertexes.length; i++) {
    graph.addVertex(myVertexes[i])
}

// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tostring-方法" tabindex="-1"><a class="header-anchor" href="#tostring-方法" aria-hidden="true">#</a> toString() 方法</h3>
<ul>
<li>为了能够正确的显示图的结果, 我们来实现一下Graph的toString方法。</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>Graph.prototype.toString = function () {
    var resultStr = &quot;&quot;
    for (var i = 0; i &lt; this.vertexes.length; i++) {
        resultStr += this.vertexes[i] + &quot;-&gt;&quot;
        var adj = this.adjList.get(this.vertexes[i])
        for (var j = 0; j &lt; adj.length; j++) {
            resultStr += adj[j] + &quot; &quot;
        }
        resultStr += &quot;\n&quot;
    }
    return resultStr
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查" tabindex="-1"><a class="header-anchor" href="#查" aria-hidden="true">#</a> 查</h2>
<h3 id="图的遍历" tabindex="-1"><a class="header-anchor" href="#图的遍历" aria-hidden="true">#</a> 图的遍历</h3>
<ul>
<li>图的遍历思想
<ul>
<li>图的遍历算法的思想在于必须访问每个第一次访问的节点, 并且追踪有哪些顶点还没有被访问到.</li>
</ul>
</li>
<li>有两种算法可以对图进行遍历
<ul>
<li>广度优先搜索(Breadth-First Search, 简称BFS)</li>
<li>深度优先搜索(Depth-First Search, 简称DFS)</li>
<li>两种遍历算法, 都需要明确指定第一个被访问的顶点.</li>
</ul>
</li>
<li>遍历的注意点:
<ul>
<li>完全探索一个顶点要求我们便查看该顶点的每一条边.</li>
<li>对于每一条所连接的没有被访问过的顶点, 将其标注为被发现的, 并将其加进待访问顶点列表中.</li>
<li>为了保证算法的效率: 每个顶点至多访问两次.</li>
</ul>
</li>
<li>两种算法的思想:
<ul>
<li>BFS: 基于队列, 入队列的顶点先被探索.</li>
<li>DFS: 基于栈, 通过将顶点存入栈中, 顶点是沿着路径被探索的, 存在新的相邻顶点就去访问.</li>
</ul>
</li>
<li>为了记录顶点是否被访问过, 我们使用三种颜色来反应它们的状态:(或者两种颜色也可以)
<ul>
<li>白色: 表示该顶点还没有被访问.</li>
<li>灰色: 表示该顶点被访问过, 但并未被探索过.</li>
<li>黑色: 表示该顶点被访问过且被完全探索过.</li>
</ul>
</li>
<li>初始化颜色的代码</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 广度优先算法
Graph.prototype.initializeColor = function () {
    var colors = []
    for (var i = 0; i &lt; this.vertexes.length; i++) {
        colors[this.vertexes[i]] = &quot;white&quot;
    }
    return colors
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="广度优先搜索" tabindex="-1"><a class="header-anchor" href="#广度优先搜索" aria-hidden="true">#</a> 广度优先搜索</h4>
<ul>
<li>思路：
<ul>
<li>广度优先算法会从指定的第一个顶点开始遍历图, 先访问其所有的相邻点, 就像一次访问图的一层.</li>
</ul>
</li>
<li>图解：</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109233511.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109233511.png" width="60%" height="50%"/>
</div>
<ul>
<li>广度优先搜索的实现:
<ul>
<li>创建一个队列Q.</li>
<li>将v标注为被发现的(灰色), 并将v将入队列Q</li>
<li>如果Q非空, 执行下面的步骤:
<ul>
<li>将v从Q中取出队列.</li>
<li>将v标注为被发现的灰色.</li>
<li>将v所有的未被访问过的邻接点(白色), 加入到队列中.</li>
<li>将v标志为黑色.</li>
</ul>
</li>
</ul>
</li>
<li>广度优先搜索的代码:</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>Graph.prototype.bfs = function (v, handler) {
    // 1.初始化颜色
    var color = this.initializeColor()

    // 2.创建队列
    var queue = new Queue()

    // 3.将传入的顶点放入队列中
    queue.enqueue(v)

    // 4.从队列中依次取出和放入数据
    while (!queue.isEmpty()) {
        // 4.1.从队列中取出数据
        var qv = queue.dequeue()

        // 4.2.获取qv相邻的所有顶点
        var qAdj = this.adjList.get(qv)

        // 4.3.将qv的颜色设置成灰色
        color[qv] = &quot;gray&quot;

        // 4.4.将qAdj的所有顶点依次压入队列中
        for (var i = 0; i &lt; qAdj.length; i++) {
            var a = qAdj[i]
            if (color[a] === &quot;white&quot;) {
                color[a] = &quot;gray&quot;
                queue.enqueue(a)
            }
        }

        // 4.5.因为qv已经探测完毕, 将qv设置成黑色
        color[qv] = &quot;black&quot;

        // 4.6.处理qv
        if (handler) {
            handler(qv)
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码解析:</p>
<ul>
<li>代码序号1: 我们先为每个顶点记录一种颜色, 用于保持它当前的状态.</li>
<li>代码序号2: 创建队列, 这里需要用到我们之前封装的队列类型, 因此需要导入.</li>
<li>代码序号3: 将开始的顶点放入队列中.</li>
<li>代码序号4: 开始处理队列中的数据.
<ul>
<li>4.1.先从队列中取出顶点qv.</li>
<li>4.2.取出该顶点相邻的顶点数组qAdj.</li>
<li>4.3.因为之前的qv已经被探测过, 所有将qv设置为灰色.</li>
<li>4.4.遍历qAdj所有的所有的顶点, 判断颜色, 如果是白色, 那么将其将入到队列中. 并且将该顶点设置为灰色.</li>
<li>4.5.将qv顶点设置为黑色</li>
<li>4.6.处理qv顶点.</li>
</ul>
</li>
</ul>
<p>测试代码：</p>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 调用广度优先算法
var result = &quot;&quot;
graph.bfs(graph.vertexes[0], function (v) {
    result += v + &quot; &quot;
})
alert(result) // A B C D E F G H I 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索" aria-hidden="true">#</a> 深度优先搜索</h4>
<ul>
<li>思路：
<ul>
<li>深度优先搜索算法将会从第一个指定的顶点开始遍历图, 沿着路径知道这条路径最后被访问了.</li>
<li>接着原路回退并探索吓一条路径.</li>
</ul>
</li>
<li>图解过程：</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109233538.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220109233538.png" width="60%" height="50%"/>
</div>
<ul>
<li>深度优先搜索算法的实现 :（方便代码书写, 我们还是使用递归(递归本质上就是函数栈的调用)）</li>
</ul>
<div class="language-JavaScript ext-JavaScript line-numbers-mode"><pre v-pre class="language-JavaScript"><code>// 深度优先搜索
Graph.prototype.dfs = function (handler) {
    // 1.初始化颜色
    var color = this.initializeColor()

    // 2.遍历所有的顶点, 开始访问
    for (var i = 0; i &lt; this.vertexes.length; i++) {
        if (color[this.vertexes[i]] === &quot;white&quot;) {
            this.dfsVisit(this.vertexes[i], color, handler)
        }
    }
}

// dfs的递归调用方法
Graph.prototype.dfsVisit = function (u, color, handler) {
    // 1.将u的颜色设置为灰色
    color[u] = &quot;gray&quot;

    // 2.处理u顶点
    if (handler) {
        handler(u)
    }

    // 3.u的所有邻接顶点的访问
    var uAdj = this.adjList.get(u)
    for (var i = 0; i &lt; uAdj.length; i++) {
        var w = uAdj[i]
        if (color[w] === &quot;white&quot;) {
            this.dfsVisit(w, color, handler)
        }
    }

    // 4.将u设置为黑色
    color[u] = &quot;black&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>代码解析:
<ul>
<li>代码序号1: 初始化颜色.和广度优先搜索算法一样.</li>
<li>代码序号2: 遍历所有的顶点, 每遍历一个顶点, 让其执行递归函数.
<ul>
<li>递归代码1: 探测了u顶点, 所有u顶点的颜色设置为灰色.</li>
<li>递归代码2: 访问u顶点, 通过回调函数传入u.</li>
<li>递归代码3: 访问u顶点的相连的顶点, 在访问的过程中判断该顶点如果为白色, 说明未探测, 调用递归方法.</li>
<li>递归代码4: u被探测过, 也被访问过, 将u的颜色设置为黑色.</li>
</ul>
</li>
</ul>
</li>
<li>递归的代码较难理解一些, 我们这里给出一副图来帮助大家理解过程 :</li>
</ul>
<!-- ![](https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108181919.png) -->
<div align=center>
<img src="https://cdn.jsdelivr.net/gh/DevinLin000/imgBed/img/20220108181919.png" width="60%" height="50%"/>
</div>
</div></template>
