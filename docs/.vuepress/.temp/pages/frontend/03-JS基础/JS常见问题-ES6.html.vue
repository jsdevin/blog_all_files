<template><div><h1 id="js常见问题" tabindex="-1"><a class="header-anchor" href="#js常见问题" aria-hidden="true">#</a> JS常见问题</h1>
<h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3>
<ul>
<li>知识点
<img src="https://api2.mubu.com/v3/document_image/1620638167770b5e2.jpg" alt=""></li>
<li><strong>第一问常出现在面试题中</strong></li>
<li>解释undefined
<ul>
<li>var a；</li>
<li>console.log(a); //undefined</li>
</ul>
</li>
<li>解释null
<ul>
<li>var a = null；</li>
<li>console.log(a); //null</li>
</ul>
</li>
</ul>
<h3 id="数据、变量、内存" tabindex="-1"><a class="header-anchor" href="#数据、变量、内存" aria-hidden="true">#</a> 数据、变量、内存</h3>
<ul>
<li>知识点一
<img src="https://api2.mubu.com/v3/document_image/16206408602485840.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/16206408683441075.jpg" alt=""></li>
<li>相关问题
<img src="https://api2.mubu.com/v3/document_image/162069593668988fe.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/1620696885955c608.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/1620701006495cfd0.jpg" alt="">
<ul>
<li><a href="https://www.cnblogs.com/bigsoft-185025529/articles/10164275.html" target="_blank" rel="noopener noreferrer">最后一张图的解析<ExternalLinkIcon/></a></li>
<li>对象名 = { 属性...}；该语句会创建一个对象，每创建一个对象就会产生一个新的地址值，使得指针改向，指向那个新的地址值</li>
<li>最后一条语句结果是13</li>
<li>fn2函数里创建新的obj对象后，在函数内就成了局部变量，调用完之后立刻销毁，对a无影响。</li>
</ul>
</li>
<li>知识点二
<img src="https://api2.mubu.com/v3/document_image/16207049061749ac7.jpg" alt=""></li>
<li><a href="https://www.cnblogs.com/bigsoft-185025529/articles/10164275.html" target="_blank" rel="noopener noreferrer">解析<ExternalLinkIcon/></a></li>
<li>举例结果：3 Tom
<img src="https://api2.mubu.com/v3/document_image/1620704147712ccd6.jpg" alt="">
<ul>
<li>函数内 a = a+1，理解为创建了一个新的对象a。类似于a={属性1，属性....}</li>
</ul>
</li>
<li>知识点三
<img src="https://api2.mubu.com/v3/document_image/162070484850219a0.jpg" alt=""></li>
</ul>
<h3 id="对象" tabindex="-1"><a class="header-anchor" href="#对象" aria-hidden="true">#</a> 对象</h3>
<ul>
<li>知识点
<img src="https://api2.mubu.com/v3/document_image/16207055905410fa0.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/16207056043415d49.jpg" alt=""></li>
<li>一些注意点
<img src="https://api2.mubu.com/v3/document_image/1620705919216d60d.jpg" alt=""></li>
</ul>
<h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3>
<ul>
<li>知识点一 <em>函数介绍</em>
<img src="https://api2.mubu.com/v3/document_image/1620715012562e494.jpg" alt=""></li>
<li>知识点二 <em>回调函数</em>
<img src="https://api2.mubu.com/v3/document_image/1620717218322bd33.jpg" alt=""></li>
<li>知识点三 <em>立即执行函数</em>
<img src="https://api2.mubu.com/v3/document_image/1620717999180ef65.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/1620718004287fcba.jpg" alt="">
<ul>
<li>立即执行函数里面的内容只能通过 window.$ 绑定函数来传输出去。</li>
</ul>
</li>
<li>知识点四 <em>this</em>
<img src="https://api2.mubu.com/v3/document_image/16207221302098d75.jpg" alt=""></li>
</ul>
<h3 id="原型对象-原型链-面试题" tabindex="-1"><a class="header-anchor" href="#原型对象-原型链-面试题" aria-hidden="true">#</a> 原型对象_原型链_面试题</h3>
<ul>
<li>原型对象
<ul>
<li>在HBuild中弄过来，之前学的很详细。</li>
</ul>
</li>
<li>显式原型和隐式原型
<ul>
<li>显式原型prototype：构造函数和function声明函数中才有</li>
<li>隐式原型__proto__：在实例中才有</li>
<li>知识点
<img src="https://api2.mubu.com/v3/document_image/1620883973668f1c2.jpg" alt=""></li>
<li>知识点讲解
<img src="https://api2.mubu.com/v3/document_image/1620883998303a204.jpg" alt=""></li>
<li>用内存来辅助理解
<img src="https://api2.mubu.com/v3/document_image/1620884604938758c.jpg" alt=""></li>
<li>通过实例调用原型例题中，找test()方法，先在实例对象中找，找不到再去实例对象的隐式原型中找。</li>
</ul>
</li>
</ul>
<h3 id="原型链" tabindex="-1"><a class="header-anchor" href="#原型链" aria-hidden="true">#</a> 原型链</h3>
<ul>
<li>原型链是什么：我们把__proto__ 与prototype 的链条关系称为“原型链”
<img src="https://api2.mubu.com/v3/document_image/1620915067284ca71.jpg" alt=""></li>
<li><a href="https://zhuanlan.zhihu.com/p/35790971" target="_blank" rel="noopener noreferrer">原型链的详细介绍<ExternalLinkIcon/></a></li>
<li>原型链的终点：构造函数的原型的原型为null时，到达终点。Object.prototype.<strong>proto</strong> === null
<img src="https://api2.mubu.com/v3/document_image/1620925094575d9e0.jpg" alt="">
<ul>
<li>构造函数是Foo(),Object()</li>
<li>实例对象是f1，f2</li>
<li>实例对象.<strong>proto</strong> = 构造函数.prototype</li>
<li>这里的Object指function声明的函数，只有它有prototype。</li>
</ul>
</li>
<li>属性添加读取问题
<ul>
<li>知识点
<img src="https://api2.mubu.com/v3/document_image/1620924114523bcc6.jpg" alt=""></li>
<li>代码运行结果
<img src="https://api2.mubu.com/v3/document_image/1620924198693e655.jpg" alt=""></li>
<li>总结：读取属性才用到原型链，设置属性不需要。</li>
</ul>
</li>
<li>探索instanceof
<ul>
<li>这个不重要。
<img src="https://api2.mubu.com/v3/document_image/1620926501363117d.jpg" alt=""></li>
</ul>
</li>
<li>原型面试题
<ul>
<li>图一 ：1，undefined，2，3
<img src="https://api2.mubu.com/v3/document_image/1620955327695a2f2.jpg" alt=""></li>
<li>A.prototype={n=2,m=3}是将一个新的对象的地址值赋值给A.prototype。即图中与❌相反的箭头。</li>
<li>题二：a() 报错 a() b()
<img src="https://api2.mubu.com/v3/document_image/1621299320586c998.jpg" alt=""></li>
<li>解决方法：
<img src="https://api2.mubu.com/v3/document_image/162130024375289ad.jpg" alt=""></li>
<li>题中的f.a()相当于上图中的f1.a()</li>
<li>题中的F.a()相当于上图中的Foo.a()</li>
<li>反向的箭头不能通过；有null优先执行输出null。</li>
</ul>
</li>
</ul>
<h3 id="执行上下文和执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文和执行上下文栈" aria-hidden="true">#</a> 执行上下文和执行上下文栈</h3>
<ul>
<li>变量提升
<img src="https://api2.mubu.com/v3/document_image/162130093536137fa.jpg" alt=""></li>
<li>变量声明提升
<img src="https://api2.mubu.com/v3/document_image/1621300996839ee77.jpg" alt="">
<ul>
<li>解析：在fn函数体内，在console语句之前有隐藏的var a声明变量a，但是还没赋值，到后面的var a=4 才赋值。故console语句返回的说undefined</li>
</ul>
</li>
<li>函数声明提升
<img src="https://api2.mubu.com/v3/document_image/1621301546170ef92.jpg" alt="">
<ul>
<li>只有用函数声明创建的函数对象，才能实现函数提升。</li>
</ul>
</li>
<li>全局执行上下文
<img src="https://api2.mubu.com/v3/document_image/162130744772576f5.jpg" alt="">
<ul>
<li>其实就是在基础js教程中说的全局变量和局部变量。</li>
</ul>
</li>
<li>全局执行上下文栈
<img src="https://api2.mubu.com/v3/document_image/1621308245664ffa8.jpg" alt="">
<ul>
<li>先执行后移除：先执行上下文创建的对象，后移除。（如左上角图。先执行的放在下面，后执行的放在上面，当移除对象时，先移除较上的）</li>
</ul>
</li>
<li>面试题</li>
<li>题一
<img src="https://api2.mubu.com/v3/document_image/1621308909584de96.jpg" alt="">
<img src="https://api2.mubu.com/v3/document_image/1621308942456223a.jpg" alt="">
<ul>
<li>解析递归执行顺序：蓝线所示
<img src="https://api2.mubu.com/v3/document_image/1621308977529ba2b.jpg" alt=""></li>
<li>先执行后移除（先压栈后出栈）</li>
</ul>
</li>
<li>题二
<img src="https://api2.mubu.com/v3/document_image/1621309699143a3ca.jpg" alt=""></li>
<li>题三
<img src="https://api2.mubu.com/v3/document_image/16213095003838ac5.jpg" alt="">
<ul>
<li>c = 1 使得 c 最后不是函数，不能调用c(2)，上面用function创建c等于白忙活，无用，所以报错了</li>
</ul>
</li>
</ul>
<h3 id="分号的生存" tabindex="-1"><a class="header-anchor" href="#分号的生存" aria-hidden="true">#</a> 分号的生存</h3>
<ul>
<li>什么情况可以不加，什么情况必须加
<img src="https://api2.mubu.com/v3/document_image/16207228357270f2a.jpg" alt=""></li>
<li>括号开头的前一句要加分号，其它不用加。举例：立即执行函数的前一句要加分号。</li>
</ul>
</div></template>
