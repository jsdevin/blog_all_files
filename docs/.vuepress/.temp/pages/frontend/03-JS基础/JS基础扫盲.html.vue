<template><div><h1 id="js基础语法" tabindex="-1"><a class="header-anchor" href="#js基础语法" aria-hidden="true">#</a> JS基础语法</h1>
<h2 id="强制类型转换" tabindex="-1"><a class="header-anchor" href="#强制类型转换" aria-hidden="true">#</a> 强制类型转换</h2>
<ul>
<li>String()
<ul>
<li>作用：强制其它类型转换为String</li>
<li>使用toString()方法。语法： 要转换的变量.toStrin();
<ul>
<li>var x=12345;</li>
<li>y=x.toString(); //将x从Number转换成String</li>
</ul>
</li>
<li>使用String()方法。 语法：String(要转换的变量)；
<ul>
<li>var x=123456;</li>
<li>y=String(x); //调用String()方法将x转换成String类型</li>
</ul>
</li>
</ul>
</li>
<li>Number()
<ul>
<li>作用：强制将String转换成Number</li>
<li>使用Number()方法， 语法：Number(要转换的变量)；
<ul>
<li>var x=&quot;45678&quot;;</li>
<li>y=Number(x);</li>
</ul>
</li>
</ul>
</li>
<li>Boolean()
<ul>
<li>作用：强制转换Boolean</li>
<li>使用Boolean()方法， 语法：Boolean(要转换的变量)；
<ul>
<li>x=32546;</li>
<li>a=Boolean(x);</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="用户输入类" tabindex="-1"><a class="header-anchor" href="#用户输入类" aria-hidden="true">#</a> 用户输入类</h2>
<ul>
<li>prompth()
<ul>
<li>键盘输入事件。</li>
<li>语法：prompt(&quot;这里控制弹出窗口引导用户从键盘输入文字或数字&quot;);</li>
</ul>
</li>
</ul>
<h2 id="循环类" tabindex="-1"><a class="header-anchor" href="#循环类" aria-hidden="true">#</a> 循环类</h2>
<ul>
<li>while()
<ul>
<li>先判断条件是否成立，成立了再进行循环。</li>
<li>语法：while(条件){循环的语句}</li>
</ul>
</li>
<li>do... while()
<ul>
<li>先循环一次，再判断while的条件是否成立，成立了再进行下一个循环</li>
<li>do {循环的语句} while(条件)；</li>
</ul>
</li>
</ul>
<h2 id="枚举类" tabindex="-1"><a class="header-anchor" href="#枚举类" aria-hidden="true">#</a> 枚举类</h2>
<ul>
<li>in 运算符
<ul>
<li>通过in运算符检查对象是否含有指定的属性，含有就返回true , 不含有就返回false.</li>
<li>语法: &quot;属性名&quot; in 对象;</li>
</ul>
</li>
<li>for···in 枚举方法
<ul>
<li>语法：for（var 变量 in 对象）{语句} ;</li>
<li>花括号中的语句执行多少次，对象中就含有几个属性。
<img src="https://api2.mubu.com/v3/document_image/6ed9fd27-18f4-445a-a91f-75eade10eec3-11752736.jpg" alt=""></li>
</ul>
</li>
</ul>
<h2 id="数组类-增删改" tabindex="-1"><a class="header-anchor" href="#数组类-增删改" aria-hidden="true">#</a> 数组类 --增删改</h2>
<ul>
<li>push()
<ul>
<li>该方法可以在数组对象最后加上一个或者多个元素，并返回新的数组长度。</li>
<li>语法: 数组名.puch(&quot;白龙马&quot;,&quot;唐僧&quot;)；</li>
</ul>
</li>
<li>pop()
<ul>
<li>该方法可以删除数组最后一个元素，并将这个被删掉的元素返回</li>
<li>语法：数组名.pop();</li>
</ul>
</li>
<li>shift()
<ul>
<li>可以删除数组的第一个元素，并将被删掉的这个元素作为返回值返回。</li>
<li>语法：数组名.shift();</li>
</ul>
</li>
<li>unshift()
<ul>
<li>在数组开头依次添加一个或者多个元素，并将新的数组长度返回</li>
<li>添加元素之后，索引会重新对应元素。原来的索引不会对应原来的元素。</li>
<li>语法： 数组名.unshift(&quot;白龙马&quot;,&quot;唐僧&quot;);</li>
</ul>
</li>
<li>slice()
<ul>
<li>其作用是从数组中提取指定索引范围的元素</li>
<li>该方法不会改变原本的数组，而是将提取的元素封装到新的数组中</li>
<li>语法： 数组名.slice(x,x+n)
<ul>
<li>提取元素中包含索引为x的元素，但是不包含索引为x+n的元素。</li>
<li>x+n可以为负数，是负几就是倒数第几个，比如-1就是倒数第一个，-2就是倒数第二个。</li>
</ul>
</li>
</ul>
</li>
<li>splice()
<ul>
<li>其作用是删除数组中指定索引范围的元素</li>
<li>使用该方法会影响到原数组，会将指定的元素从原数组中删除，然后将被删除的元素作为返回值返回。</li>
<li>语法： 数组名.splice(开始删除位置的索引,删除的数量,&quot;添加在x前面的内容&quot;)</li>
</ul>
</li>
<li>concat()
<ul>
<li>concat()可以将多个数组连接起来，也可以将数组和子字符串连接起来，封装到新的数组中</li>
<li>而且该方法不会对原数组产生影响。</li>
<li>语法：arr1.concat(arr2,arr3,&quot;这是第一个字符串&quot;,&quot;这是第二个，可以无限加&quot;);</li>
</ul>
</li>
<li>join()
<ul>
<li>该方法可以将一个数组转换成一个字符串，并且不会对数组产生影响，以字符串作为返回值</li>
<li>在join()方法中，可以指定任意东西作为数组元素的连接符。语法: join(&quot;任意东西&quot;)</li>
<li>连接符必须使用双引号引着，不使用就默认是用逗号连接。</li>
<li>结果：孙悟空-猪八戒-蜘蛛精-唐僧
<img src="https://api2.mubu.com/v3/document_image/4b8bb1f2-9089-430d-a1c4-f6d312835c56-11752736.jpg" alt=""></li>
</ul>
</li>
<li>reverse()
<ul>
<li>作用是颠倒数组中的元素顺序。.</li>
<li>结果： {&quot;0&quot;:&quot;唐僧&quot;,&quot;1&quot;:&quot;蜘蛛精&quot;,&quot;2&quot;:&quot;猪八戒&quot;,&quot;3&quot;:&quot;孙悟空&quot;,&quot;length&quot;:4}
<img src="https://api2.mubu.com/v3/document_image/332a9bf2-4dd4-4acc-afca-fc1edc424c01-11752736.jpg" alt=""></li>
</ul>
</li>
</ul>
<h2 id="时间类" tabindex="-1"><a class="header-anchor" href="#时间类" aria-hidden="true">#</a> 时间类</h2>
<ul>
<li>getDate()
<ul>
<li>获取当前日期对象的日。（获取实参的具体是哪一日）</li>
<li>var d2 = new Date(&quot;03/09/2021 14:23:53&quot;);</li>
<li>var dg = d2.getDate();</li>
<li>console.log(dg); //9</li>
</ul>
</li>
<li>getDay()
<ul>
<li>获取当前日对象是周几.0表示周日，以此类推至6表示周六。</li>
<li>var d2 = new Date(&quot;03/09/2021 14:23:53&quot;);</li>
<li>var dg2 = d2.getDay();</li>
<li>console.log(dg2); //2</li>
</ul>
</li>
<li>getTime()
<ul>
<li>获取当前对象的时间戳</li>
<li>时间戳指的是从1970年1月1日 0时0分0秒开始到当前日期所花费的毫秒数（1s = 1000ms）</li>
<li>计算机底层在保存时间时使用的都是时间戳</li>
</ul>
</li>
</ul>
<h2 id="数字运算类" tabindex="-1"><a class="header-anchor" href="#数字运算类" aria-hidden="true">#</a> 数字运算类</h2>
<ul>
<li>Math
<ul>
<li>Math和其它对象不同，它不是一个构造函数。</li>
<li>它属于一个工具类不用创建对象，它里面封装了数学运算相关的属性和方法。</li>
<li>比如：Math.PI表示圆周率。</li>
</ul>
</li>
<li>abs()
<ul>
<li>可以用来计算一个数的绝对值。语法：Math.abs(数字)</li>
<li>console.log(Math.abs(2.3)); //2.3</li>
<li>Math.ceil()</li>
<li>可以对一个数进行向上取整，小数位只要有值就会自动进1</li>
<li>console.log(Math.ceil(4.3)); //5</li>
<li>Math.floor()</li>
<li>可以对一个数进行向下取整，小数部分会被舍弃掉</li>
<li>console.log(Math.floor(4.3)); //4</li>
</ul>
</li>
<li>Math.round()
<ul>
<li>可以对一个数进行四舍五入取整。</li>
<li>console.log(Math.round(4.3)); //4</li>
<li>console.log(Math.round(4.6)); //5</li>
</ul>
</li>
<li>Math.random()
<ul>
<li>可以用来生成一个0-1的随机数。</li>
<li>console.log(Math.random()); // 所有的其它范围都是在这个基础上变换来的。</li>
<li>比如生成一个0-10的数。
<ul>
<li>console.log(Math.random()/*10);</li>
</ul>
</li>
<li>生成一个0-x的数
<ul>
<li>console.log(Math.random()/*x);</li>
</ul>
</li>
<li>高级使用
<ul>
<li>生成1-10
<ul>
<li>console.log(Math.random()/*9+1);</li>
</ul>
</li>
<li>生成一个x-y之间的随机数
<ul>
<li>console.log(Math.random()/*(y-x)+x);</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>Math.max() 、 Math.min()
<ul>
<li>var m1 = Math.max(10,31,41,53,36);</li>
<li>var n1 = Math.min(10,31,41,53,36);</li>
</ul>
</li>
<li>Math.pow(x,y)
<ul>
<li>返回x的y次幂</li>
<li>console.log(Math.pow(5,3)); //125</li>
</ul>
</li>
<li>Math.sqrt()
<ul>
<li>开平方运算。</li>
<li>console.log(Math.sqrt(81)); //9</li>
</ul>
</li>
</ul>
<h2 id="字符串类" tabindex="-1"><a class="header-anchor" href="#字符串类" aria-hidden="true">#</a> 字符串类</h2>
<ul>
<li>注意事项
<ul>
<li>创建一个字符串 var std = &quot;hello&quot;;</li>
<li>凡是字符串的方法，使用的时候都要在前面加上字符串的名字。语法：字符串名.方法()；</li>
<li>在底层，字符串是以字符数组的形式保存的。上述字符串的保存结果是[&quot;h&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;]</li>
</ul>
</li>
<li>charAt()
<ul>
<li>可以返回字符串中指定索引的字符。
<ul>
<li>var std = &quot;hello&quot;;</li>
<li>var result = std.charAt(3);</li>
<li>console.log(result); // l</li>
</ul>
</li>
</ul>
</li>
<li>charCodeAt()
<ul>
<li>获取指定位置字符的字符编码（Unicode编码）
<ul>
<li>var std = &quot;hello&quot;;</li>
<li>var result = std.charCodeAt(3);</li>
<li>console.log(result); //108 （l在Unicode编码表中的编码是108）</li>
</ul>
</li>
</ul>
</li>
<li>String.fromCharCode()
<ul>
<li>可以根据字符编码去获取字符
<ul>
<li>var result = String.fromCharCode(108);</li>
<li>console.log(result); // l</li>
</ul>
</li>
</ul>
</li>
<li>concat()
<ul>
<li>可以用来连接两个或多个字符串。作用和 + 一样（拼串）
<ul>
<li>var std = &quot;hello&quot;;</li>
<li>var result = std.concat(&quot;你好&quot;,&quot;这是测试&quot;);</li>
<li>console.log(result); //hello你好这是测试</li>
</ul>
</li>
</ul>
</li>
<li>indexof()
<ul>
<li>该方法可以检索一个字符串是否含有指定的内容</li>
<li>如果字符串含有该内容，则会返回指定内容第一次出现的索引 （因为有可能出现多次）</li>
<li>如果没有找到指定的内容，就会返回-1
<ul>
<li>var std = &quot;hello&quot;;</li>
<li>var result = std.indexOf(&quot;e&quot;); //非数字类型的引用一定要有引号。。</li>
<li>console.log(result); //1</li>
</ul>
</li>
<li>可以利用第二个参数，指定开始找的起始位置。（找的时候包含这个位置）
<ul>
<li>var std = &quot;hello&quot;;</li>
<li>var result = std.indexOf(&quot;e&quot;,3);</li>
<li>console.log(result); //-1</li>
</ul>
</li>
</ul>
</li>
<li>lastIndexOf()
<ul>
<li>该方法的用法和indexof()一样，不同的是indexif是前面开始往后面找,而lastIndexOf是从后面开始往前面找。</li>
<li>但不管是从前面往后面找，还是从后面往前面找，每个数对应的索引都是固定的。</li>
<li>var std = &quot;hello&quot;;</li>
<li>var result = std.lastIndexOf(&quot;e&quot;); //1. 虽然找的方向不同，但每个数对应的索引都是固定的，如果无重复，返回值可能不会发生改变</li>
<li>var result2 = std.lastIndexOf(&quot;o&quot;); //4.</li>
<li>console.log(result);</li>
<li>console.log(result2);</li>
<li>也可以指定开始查找的位置</li>
<li>var result3 = std.lastIndexOf(&quot;o&quot;,3); //-1</li>
<li>console.log(result3);</li>
</ul>
</li>
<li>slice()
<ul>
<li>可以从字符串中截取指定的内容，不会影响原字符串，而是将截取的内容返回。</li>
<li>参数
<ul>
<li>第一个参数：表示开始的索引（截取内容包括开始的位置）</li>
<li>第二个参数：表示结束的索引（截取内容不包括结束的位置）</li>
<li>如果省略第二个参数，则会截取到后面所有的。</li>
<li>也可以传递一个负数作为参数，不过负数的话要从后面开始算起。</li>
</ul>
</li>
<li>var str = &quot;wshd9h0hanfafeq&quot;;</li>
<li>var result = str.slice(2,5);   // 字符串.方法();</li>
<li>console.log(result); //hd9</li>
</ul>
</li>
<li>substring()
<ul>
<li>可以用来截取一个字符串，作用也slice()类似。</li>
<li>参数
<ul>
<li>第一个：开始截取位置的索引（包括开始位置）</li>
<li>第二个：结束位置的索引（不包括结束位置）</li>
</ul>
</li>
<li>不同的是这个方法不能接受负数作为参数。</li>
<li>如果传递了一个负数，则会默认变成 0</li>
<li>而且解析器会自动调整参数的顺序，小的在前面，大的在后面。</li>
<li>var str = &quot;wshd9h0hanfafeq&quot;;</li>
<li>var result = str.substring(2,-3);  // 字符串.方法（）;</li>
<li>console.log(result); //ws</li>
</ul>
</li>
<li>substr()
<ul>
<li>用来截取字符串</li>
<li>参数
<ul>
<li>第一个参数表示开始截取的位置。（包括这个位置）</li>
<li>第二个参数表示截取的长度。也表示截取的个数。</li>
</ul>
</li>
<li>var str = &quot;wshd9h0hanfafeq&quot;;</li>
<li>var result = str.substr(2,4);</li>
<li>console.log(result); //hd9h</li>
</ul>
</li>
<li>split()
<ul>
<li>可以将一个字符串拆分为一个数组。</li>
<li>参数
<ul>
<li>需要一个字符串作为参数，解析器将会根据数组内的该字符串所处位置进行拆分。</li>
</ul>
</li>
<li>var str = &quot;abc,bks,hsn,hij,bcd&quot;;</li>
<li>var result = str.split(&quot;b&quot;);</li>
<li>console.log(result);
<img src="https://api2.mubu.com/v3/document_image/3eb7dcd8-a17d-47db-b18e-2171af146878-11752736.jpg" alt=""></li>
<li>如果传递一个空串作为参数，则会将每个字符都拆分为数组的一个元素</li>
<li>var result1 = str.split(&quot;&quot;);</li>
<li>console.log(result1);
<img src="https://api2.mubu.com/v3/document_image/e13b3ede-f1b6-4d35-97f7-e092d1d5fd12-11752736.jpg" alt=""></li>
</ul>
</li>
<li>toUpperCase()
<ul>
<li>将一个字符串转换为大写并返回。</li>
<li>var str = &quot;sdbgndnfegrt&quot;;</li>
<li>var result = str.toUpperCase();</li>
<li>console.log(result); //SDBGNDNFEGRT</li>
</ul>
</li>
<li>toLowerCase()
<ul>
<li>将一个字符串转换为小写并返回。</li>
<li>var str = &quot;SDBGNDNFEGRT&quot;;</li>
<li>var result = str.toLowerCase();</li>
<li>console.log(result); ///sdbgndnfegrt</li>
</ul>
</li>
</ul>
<h2 id="正则表达式类" tabindex="-1"><a class="header-anchor" href="#正则表达式类" aria-hidden="true">#</a> 正则表达式类</h2>
<ul>
<li>创建正则表达式的对象。
<ul>
<li>语法：</li>
<li>var 变量 = new RegExp(&quot;正则表达式&quot;,&quot;匹配模式&quot;);</li>
<li>var reg = new RegExp(&quot;a&quot;);</li>
<li>var reg = new RegExp(&quot;a&quot;); 这个正则表达式可以来检查一个字符串是否含有a,</li>
<li>在构造函数中可以传递一个匹配模式作为第二个参数, 可以是：
<ul>
<li>i 表示忽略大小写</li>
<li>g 表示全局匹配模式</li>
</ul>
</li>
</ul>
</li>
<li>正则表达式的方法
<ul>
<li>test()
<ul>
<li>使用这个方法可以用来检查一个字符串是否符合正则表达式的规则。</li>
<li>如果符合就返回true,否则就返回false.</li>
</ul>
</li>
</ul>
</li>
<li>正则表达式的语法
<ul>
<li>使用字面量来创建正则表达式
<ul>
<li>语法： var 变量 = /正则表达式/匹配模式;</li>
<li>区别：
<ul>
<li>使用字面量的方式创建更加简单</li>
<li>使用构造函数的方式创建更加灵活.</li>
</ul>
</li>
<li>var reg = /a/i;</li>
<li>console.log(reg.test(&quot;absdsafaassd&quot;)); //true //这个test后面的参数是字符串。</li>
</ul>
</li>
</ul>
</li>
<li>正则表达式的小技巧
<ul>
<li>(1) 检查一个字符串中是否由 a 或 b
<ul>
<li>使用 | 表示或者的意思。</li>
<li>var reg = /a|b/;</li>
<li>console.log(reg.test(&quot;abjobdu9gefipnav&quot;)); //true</li>
</ul>
</li>
<li>特殊标识符
<ul>
<li>[]里的内容也是或的关系</li>
<li>[ab] == a|b</li>
<li>[a-z] == 任意小写字母</li>
<li>[A-Z] == 任意大写字母</li>
<li>[A-z] == 任意字母</li>
<li>[^ ] == 除了</li>
</ul>
</li>
<li>(2)检查一个字符串中是否含有 abc 后 adc 或 aec
<ul>
<li>var reg = /a[bde]c/;</li>
<li>console.log(reg.test(&quot;bvidauacnadcojdbaaecoeb&quot;)); //true</li>
<li>检测[^ ] ^除了语法
<ul>
<li>var reg1 = /[^ab]/ //除了ab以外还有东西。</li>
<li>console.log(reg1.test(&quot;ab279我是&quot;)); //true /*/</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>正则表达式的使用
<ul>
<li>(1) 利用正则表达式更好地帮助拆分字符串
<ul>
<li>split()
<ul>
<li>可以将一个字符串拆分为一个数组。</li>
<li>方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串</li>
<li>根据任意字母将字符串拆分。</li>
<li>var str = &quot;1d2d3f4h4b3b333h3b35b3b224n2f2&quot;</li>
<li>var result = str.split(/[A-z]/);</li>
<li>console.log(result);
<img src="https://api2.mubu.com/v3/document_image/50f602df-6547-4ded-b199-e7986cf9911c-11752736.jpg" alt=""></li>
</ul>
</li>
</ul>
</li>
<li>(2)search()
<ul>
<li>可以搜索字符串中是否含有指定内容</li>
<li>如果搜索到指定内容，则会返回第一次出现的索引，如果没有搜索到返回-1</li>
<li>它可以接受一个正则表达式作为参数，然后会根据正则表达式去检索字符串。</li>
<li>search()只会查找第一个，即使设置全局匹配也没用。</li>
<li>var str = &quot;hello abd hei dav abd&quot;;</li>
<li>var result = str.search(/abd/);</li>
<li>console.log(result); //6 abd最先出现的索引是6</li>
</ul>
</li>
<li>(3)match()
<ul>
<li>可以根据正则表达式，从一个字符串中将符合条件的内容提取出来</li>
<li>默认条件下我们的match只会找到第一个符合要求的内容，找到以后就停止检索</li>
<li>我们可以设置正则表达式为全局匹配模式，这样就会匹配到所有的内容。</li>
<li>可以为一个正则表达式设置多个匹配模式，且顺序无所谓</li>
<li>match（）会将匹配到的内容封装到一个数组中返回，即使只查询到一个结果。</li>
<li>var str = &quot;1a2b3c4d5e6f7g8h9j10k&quot;;</li>
<li>var result = str.match(/[A-z]/g); //A-z 必须要由[]括着才表示任意的字母.[]表示任意的什么什么</li>
<li>console.log(result);
<img src="https://api2.mubu.com/v3/document_image/65925703-5887-4ba2-b3da-9fe99b405564-11752736.jpg" alt=""></li>
</ul>
</li>
<li>(4)replace()
<ul>
<li>可以将字符串中指定内容替换为新的内容</li>
<li>参数：
<ul>
<li>第一个参数 表示可以接受一个正则表达式作为参数</li>
<li>第二个参数 表示新的内容。</li>
</ul>
</li>
<li>默认只会替换第一个</li>
<li>var str = &quot;1a2b3c4d5e6f7g8h9j10k&quot;;</li>
<li>var result = str.replace(/[A-z]/gi,&quot;,&quot;); //正则表达式不需要括号括着</li>
<li>console.log(result);
<img src="https://api2.mubu.com/v3/document_image/ce74f8c5-f73b-4f8d-b901-bc52d3ea981e-11752736.jpg" alt=""></li>
</ul>
</li>
<li>(5)split()
<ul>
<li>可以将一个字符串拆分为一个数组</li>
<li>方法中可以传递一个正则表达式作为参数，这样方法将会根据正则表达式去拆分字符串</li>
<li>这个方法即使不指定全局匹配，也会全都拆分。</li>
<li>根据任意字母拆分</li>
<li>var str = &quot;1a2b3c4d5e6f7g8h9j10k&quot;;</li>
<li>var result = str.split(/[A-z]/); //正则表达式不需要括号括着</li>
<li>console.log(result);
<img src="https://api2.mubu.com/v3/document_image/189ea26f-3699-40b5-91e9-b3de393da119-11752736.jpg" alt=""></li>
</ul>
</li>
<li>量词
<ul>
<li>通过量词可以设置一个内容出现的次数。</li>
<li>量词只对它前面的一个内容 或者 字母 起作用</li>
<li>{n} 表示前面一个内容或者字母重复n次</li>
<li>{m,n} 表示重复 m 到 n 次</li>
<li>{m, } 表示重复 m 次以上</li>
<li><code v-pre>+</code> 至少一个 等价于 {1, }</li>
<li><code v-pre>*</code> 0个或多个</li>
<li>？0个或1个 等价于 {0,1}</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="dom类" tabindex="-1"><a class="header-anchor" href="#dom类" aria-hidden="true">#</a> DOM类</h2>
<ul>
<li>getElementsByTagName()
<ul>
<li>方法，返回当前节点的指定标签名的后代节点</li>
</ul>
</li>
<li>childNodes()
<ul>
<li>属性，表示当前节点的所有子节点</li>
</ul>
</li>
<li>firstChild()
<ul>
<li>属性，表示当前节点的第一个子节点</li>
</ul>
</li>
<li>lastChild()
<ul>
<li>属性，表示当前节点的最后一个节点。</li>
</ul>
</li>
<li>querySelector()
<ul>
<li>获取指对应id的元素。</li>
<li>语法：document.querySelector(&quot;/#demo&quot;);</li>
</ul>
</li>
<li>appendChild()
<ul>
<li>在列表的后面添加项目。</li>
<li>语法: 父元素节点.appendChild(子元素节点);</li>
</ul>
</li>
<li>insertBefore()
<ul>
<li>在指定的节点前面插入新的节点</li>
<li>语法：父节点元素.insertBefore(新节点元素，旧节点元素);</li>
</ul>
</li>
<li>repalceChild()
<ul>
<li>可以使用指定的子节点替换子节点；</li>
<li>语法：父元素节点.repalceChild(新节点元素，旧节点元素)；</li>
</ul>
</li>
<li>removeChild()
<ul>
<li>删除特定子节点</li>
</ul>
</li>
<li>获取元素当前的样式值</li>
<li>(1) 语法：元素.currenStyle.样式名
<ul>
<li>它可以用来读取当前元素正在显示的样式，如果没有设置到该样式，就获取默认值</li>
<li>currenStyle只有iE浏览器支持，可怜</li>
</ul>
</li>
<li>(2)getComputedStyle()
<ul>
<li>而在其它浏览器中，可以使用 getComputedStyle方法 来获取当前元素的样式</li>
<li>这个方法可以直接使用，前面不需要加元素,需要两个参数：
<ul>
<li>第一个：要获取样式的元素</li>
<li>第二个：目前写上null</li>
</ul>
</li>
<li>该方法会返回一个对象，对象中封装了当前元素对应的样式</li>
<li>可以通过 对象.样式名 来读取样式</li>
<li>如果获取的样式没有设置，则会获取到真实的值，而不是默认值</li>
<li>比如:没有设置width，它不会返回auto，而是会放回一个实时屏幕大小的值</li>
<li>该方法不支持iE8</li>
<li>var obj = getComputedStyle(box1,null);</li>
<li>alert(obj.width);</li>
</ul>
</li>
<li>(3)创建一个函数，使它无论在什么浏览器中都能获取指定元素当前的样式。
<img src="https://api2.mubu.com/v3/document_image/586d27ec-544b-440a-ada8-4e911d7b6e07-11752736.jpg" alt=""></li>
<li>长度尺寸问题</li>
<li>clientWidth属性、clientHeight属性
<ul>
<li>这两个属性可以获取元素的可见宽度和高度。</li>
<li>这些属性都是不带px的，返回都是一个数字，可以直接用于计算。</li>
<li>会获取元素的宽度和高度，包括内容区和内边距</li>
<li>这些属性都是只允许读取，不允许修改的。</li>
</ul>
</li>
<li>offsetWidth属性 、offsetHeight属性
<ul>
<li>获取元素的整个宽度和高度，包括内容区、内边距、边框</li>
<li>其它特点和cliendWidth、cliendHeight一样</li>
</ul>
</li>
<li>offsetParent属性
<ul>
<li>可以获取当前元素的定位父元素，注意这里的父元素必须要是有定位的且是最近的那个</li>
<li>会获得离当前元素最近的开启了定位的祖先元素</li>
<li>如果所有的祖先元素都没有开启定位，则会返回body.</li>
</ul>
</li>
<li>offsetLeft属性
<ul>
<li>当前元素相对于其定位父元素的水平偏移量</li>
</ul>
</li>
<li>offsetTop属性
<ul>
<li>当前元素相对于其定位父元素的垂直偏移量。</li>
</ul>
</li>
<li>scrollWidth 和 scrollHeight
<ul>
<li>可以获取元素整个滚动区域的宽度和高度</li>
</ul>
</li>
<li>scrollLeft属性、scrollTop属性
<ul>
<li>可以获取滚动条滚动的距离</li>
</ul>
</li>
<li>当满足scrollHeight - scrollTop == clientHeight 时，
<ul>
<li>说明垂直滚动条滑到底了</li>
</ul>
</li>
<li>当满足scrollWidth - scrollLeft == clientWidth 时，
<ul>
<li>说明水平滚动条滑到底了</li>
</ul>
</li>
<li>scrollHeight 是长屏幕的固定长度，这是定量</li>
<li>clientHeight 是文本对象的固定长度，这是定量</li>
<li>scrollTop 是文本对象滚动的距离，这是变量</li>
<li>当scrollHeight - scrollTop == clientHeight，说明文本对象已经滚动到底了，此时scrollTop是最大值，不能再发生变化</li>
<li>onscroll
<ul>
<li>该事件会在元素的滚动条滚动时触发</li>
</ul>
</li>
<li>disabled属性可以设置一个元素是否禁用
<ul>
<li>如果是true,就表示禁用，</li>
<li>如果是false,就表示不禁用。</li>
</ul>
</li>
<li>事件对象
<ul>
<li>onmousemove
<ul>
<li>该事件将会在鼠标于元素中移动是被触发</li>
</ul>
</li>
<li>事件对象的兼容性问题
<ul>
<li>事件对象定义一个形参event就好，在IE8以上的浏览器中这个形参会由浏览器赋值。</li>
<li>在IE8及以下爱的浏览器中，event作为window的属性，浏览器不会赋值给event</li>
</ul>
</li>
<li>解决兼容性问题的方法：
<ul>
<li>多写一条语句 if(!event){ event = window.event; }</li>
<li>或者 event = event || window.event</li>
</ul>
</li>
<li>clientX 方法
<ul>
<li>可以获取到鼠标指针的水平坐标</li>
</ul>
</li>
<li>clientY 方法
<ul>
<li>可以获取到鼠标指针的竖直坐标</li>
</ul>
</li>
</ul>
</li>
</ul>
<h2 id="bom类-dom、bom-不完整-后续补充" tabindex="-1"><a class="header-anchor" href="#bom类-dom、bom-不完整-后续补充" aria-hidden="true">#</a> BOM类 --- DOM、BOM 不完整，后续补充</h2>
</div></template>
