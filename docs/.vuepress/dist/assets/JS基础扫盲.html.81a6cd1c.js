import{_ as l,o as i,c as u,e as t}from"./app.be996f63.js";const e={},o=t('<h1 id="js\u57FA\u7840\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#js\u57FA\u7840\u8BED\u6CD5" aria-hidden="true">#</a> JS\u57FA\u7840\u8BED\u6CD5</h1><h2 id="\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u5F3A\u5236\u7C7B\u578B\u8F6C\u6362" aria-hidden="true">#</a> \u5F3A\u5236\u7C7B\u578B\u8F6C\u6362</h2><ul><li>String() <ul><li>\u4F5C\u7528\uFF1A\u5F3A\u5236\u5176\u5B83\u7C7B\u578B\u8F6C\u6362\u4E3AString</li><li>\u4F7F\u7528toString()\u65B9\u6CD5\u3002\u8BED\u6CD5\uFF1A \u8981\u8F6C\u6362\u7684\u53D8\u91CF.toStrin(); <ul><li>var x=12345;</li><li>y=x.toString(); //\u5C06x\u4ECENumber\u8F6C\u6362\u6210String</li></ul></li><li>\u4F7F\u7528String()\u65B9\u6CD5\u3002 \u8BED\u6CD5\uFF1AString(\u8981\u8F6C\u6362\u7684\u53D8\u91CF)\uFF1B <ul><li>var x=123456;</li><li>y=String(x); //\u8C03\u7528String()\u65B9\u6CD5\u5C06x\u8F6C\u6362\u6210String\u7C7B\u578B</li></ul></li></ul></li><li>Number() <ul><li>\u4F5C\u7528\uFF1A\u5F3A\u5236\u5C06String\u8F6C\u6362\u6210Number</li><li>\u4F7F\u7528Number()\u65B9\u6CD5\uFF0C \u8BED\u6CD5\uFF1ANumber(\u8981\u8F6C\u6362\u7684\u53D8\u91CF)\uFF1B <ul><li>var x=&quot;45678&quot;;</li><li>y=Number(x);</li></ul></li></ul></li><li>Boolean() <ul><li>\u4F5C\u7528\uFF1A\u5F3A\u5236\u8F6C\u6362Boolean</li><li>\u4F7F\u7528Boolean()\u65B9\u6CD5\uFF0C \u8BED\u6CD5\uFF1ABoolean(\u8981\u8F6C\u6362\u7684\u53D8\u91CF)\uFF1B <ul><li>x=32546;</li><li>a=Boolean(x);</li></ul></li></ul></li></ul><h2 id="\u7528\u6237\u8F93\u5165\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u8F93\u5165\u7C7B" aria-hidden="true">#</a> \u7528\u6237\u8F93\u5165\u7C7B</h2><ul><li>prompth() <ul><li>\u952E\u76D8\u8F93\u5165\u4E8B\u4EF6\u3002</li><li>\u8BED\u6CD5\uFF1Aprompt(&quot;\u8FD9\u91CC\u63A7\u5236\u5F39\u51FA\u7A97\u53E3\u5F15\u5BFC\u7528\u6237\u4ECE\u952E\u76D8\u8F93\u5165\u6587\u5B57\u6216\u6570\u5B57&quot;);</li></ul></li></ul><h2 id="\u5FAA\u73AF\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u7C7B" aria-hidden="true">#</a> \u5FAA\u73AF\u7C7B</h2><ul><li>while() <ul><li>\u5148\u5224\u65AD\u6761\u4EF6\u662F\u5426\u6210\u7ACB\uFF0C\u6210\u7ACB\u4E86\u518D\u8FDB\u884C\u5FAA\u73AF\u3002</li><li>\u8BED\u6CD5\uFF1Awhile(\u6761\u4EF6){\u5FAA\u73AF\u7684\u8BED\u53E5}</li></ul></li><li>do... while() <ul><li>\u5148\u5FAA\u73AF\u4E00\u6B21\uFF0C\u518D\u5224\u65ADwhile\u7684\u6761\u4EF6\u662F\u5426\u6210\u7ACB\uFF0C\u6210\u7ACB\u4E86\u518D\u8FDB\u884C\u4E0B\u4E00\u4E2A\u5FAA\u73AF</li><li>do {\u5FAA\u73AF\u7684\u8BED\u53E5} while(\u6761\u4EF6)\uFF1B</li></ul></li></ul><h2 id="\u679A\u4E3E\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u679A\u4E3E\u7C7B" aria-hidden="true">#</a> \u679A\u4E3E\u7C7B</h2><ul><li>in \u8FD0\u7B97\u7B26 <ul><li>\u901A\u8FC7in\u8FD0\u7B97\u7B26\u68C0\u67E5\u5BF9\u8C61\u662F\u5426\u542B\u6709\u6307\u5B9A\u7684\u5C5E\u6027\uFF0C\u542B\u6709\u5C31\u8FD4\u56DEtrue , \u4E0D\u542B\u6709\u5C31\u8FD4\u56DEfalse.</li><li>\u8BED\u6CD5: &quot;\u5C5E\u6027\u540D&quot; in \u5BF9\u8C61;</li></ul></li><li>for\xB7\xB7\xB7in \u679A\u4E3E\u65B9\u6CD5 <ul><li>\u8BED\u6CD5\uFF1Afor\uFF08var \u53D8\u91CF in \u5BF9\u8C61\uFF09{\u8BED\u53E5} ;</li><li>\u82B1\u62EC\u53F7\u4E2D\u7684\u8BED\u53E5\u6267\u884C\u591A\u5C11\u6B21\uFF0C\u5BF9\u8C61\u4E2D\u5C31\u542B\u6709\u51E0\u4E2A\u5C5E\u6027\u3002 <img src="https://api2.mubu.com/v3/document_image/6ed9fd27-18f4-445a-a91f-75eade10eec3-11752736.jpg" alt=""></li></ul></li></ul><h2 id="\u6570\u7EC4\u7C7B-\u589E\u5220\u6539" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7C7B-\u589E\u5220\u6539" aria-hidden="true">#</a> \u6570\u7EC4\u7C7B --\u589E\u5220\u6539</h2><ul><li>push() <ul><li>\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5728\u6570\u7EC4\u5BF9\u8C61\u6700\u540E\u52A0\u4E0A\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u65B0\u7684\u6570\u7EC4\u957F\u5EA6\u3002</li><li>\u8BED\u6CD5: \u6570\u7EC4\u540D.puch(&quot;\u767D\u9F99\u9A6C&quot;,&quot;\u5510\u50E7&quot;)\uFF1B</li></ul></li><li>pop() <ul><li>\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5220\u9664\u6570\u7EC4\u6700\u540E\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u8FD9\u4E2A\u88AB\u5220\u6389\u7684\u5143\u7D20\u8FD4\u56DE</li><li>\u8BED\u6CD5\uFF1A\u6570\u7EC4\u540D.pop();</li></ul></li><li>shift() <ul><li>\u53EF\u4EE5\u5220\u9664\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u88AB\u5220\u6389\u7684\u8FD9\u4E2A\u5143\u7D20\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8FD4\u56DE\u3002</li><li>\u8BED\u6CD5\uFF1A\u6570\u7EC4\u540D.shift();</li></ul></li><li>unshift() <ul><li>\u5728\u6570\u7EC4\u5F00\u5934\u4F9D\u6B21\u6DFB\u52A0\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u5143\u7D20\uFF0C\u5E76\u5C06\u65B0\u7684\u6570\u7EC4\u957F\u5EA6\u8FD4\u56DE</li><li>\u6DFB\u52A0\u5143\u7D20\u4E4B\u540E\uFF0C\u7D22\u5F15\u4F1A\u91CD\u65B0\u5BF9\u5E94\u5143\u7D20\u3002\u539F\u6765\u7684\u7D22\u5F15\u4E0D\u4F1A\u5BF9\u5E94\u539F\u6765\u7684\u5143\u7D20\u3002</li><li>\u8BED\u6CD5\uFF1A \u6570\u7EC4\u540D.unshift(&quot;\u767D\u9F99\u9A6C&quot;,&quot;\u5510\u50E7&quot;);</li></ul></li><li>slice() <ul><li>\u5176\u4F5C\u7528\u662F\u4ECE\u6570\u7EC4\u4E2D\u63D0\u53D6\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20</li><li>\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u6539\u53D8\u539F\u672C\u7684\u6570\u7EC4\uFF0C\u800C\u662F\u5C06\u63D0\u53D6\u7684\u5143\u7D20\u5C01\u88C5\u5230\u65B0\u7684\u6570\u7EC4\u4E2D</li><li>\u8BED\u6CD5\uFF1A \u6570\u7EC4\u540D.slice(x,x+n) <ul><li>\u63D0\u53D6\u5143\u7D20\u4E2D\u5305\u542B\u7D22\u5F15\u4E3Ax\u7684\u5143\u7D20\uFF0C\u4F46\u662F\u4E0D\u5305\u542B\u7D22\u5F15\u4E3Ax+n\u7684\u5143\u7D20\u3002</li><li>x+n\u53EF\u4EE5\u4E3A\u8D1F\u6570\uFF0C\u662F\u8D1F\u51E0\u5C31\u662F\u5012\u6570\u7B2C\u51E0\u4E2A\uFF0C\u6BD4\u5982-1\u5C31\u662F\u5012\u6570\u7B2C\u4E00\u4E2A\uFF0C-2\u5C31\u662F\u5012\u6570\u7B2C\u4E8C\u4E2A\u3002</li></ul></li></ul></li><li>splice() <ul><li>\u5176\u4F5C\u7528\u662F\u5220\u9664\u6570\u7EC4\u4E2D\u6307\u5B9A\u7D22\u5F15\u8303\u56F4\u7684\u5143\u7D20</li><li>\u4F7F\u7528\u8BE5\u65B9\u6CD5\u4F1A\u5F71\u54CD\u5230\u539F\u6570\u7EC4\uFF0C\u4F1A\u5C06\u6307\u5B9A\u7684\u5143\u7D20\u4ECE\u539F\u6570\u7EC4\u4E2D\u5220\u9664\uFF0C\u7136\u540E\u5C06\u88AB\u5220\u9664\u7684\u5143\u7D20\u4F5C\u4E3A\u8FD4\u56DE\u503C\u8FD4\u56DE\u3002</li><li>\u8BED\u6CD5\uFF1A \u6570\u7EC4\u540D.splice(\u5F00\u59CB\u5220\u9664\u4F4D\u7F6E\u7684\u7D22\u5F15,\u5220\u9664\u7684\u6570\u91CF,&quot;\u6DFB\u52A0\u5728x\u524D\u9762\u7684\u5185\u5BB9&quot;)</li></ul></li><li>concat() <ul><li>concat()\u53EF\u4EE5\u5C06\u591A\u4E2A\u6570\u7EC4\u8FDE\u63A5\u8D77\u6765\uFF0C\u4E5F\u53EF\u4EE5\u5C06\u6570\u7EC4\u548C\u5B50\u5B57\u7B26\u4E32\u8FDE\u63A5\u8D77\u6765\uFF0C\u5C01\u88C5\u5230\u65B0\u7684\u6570\u7EC4\u4E2D</li><li>\u800C\u4E14\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u5BF9\u539F\u6570\u7EC4\u4EA7\u751F\u5F71\u54CD\u3002</li><li>\u8BED\u6CD5\uFF1Aarr1.concat(arr2,arr3,&quot;\u8FD9\u662F\u7B2C\u4E00\u4E2A\u5B57\u7B26\u4E32&quot;,&quot;\u8FD9\u662F\u7B2C\u4E8C\u4E2A\uFF0C\u53EF\u4EE5\u65E0\u9650\u52A0&quot;);</li></ul></li><li>join() <ul><li>\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u6362\u6210\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5BF9\u6570\u7EC4\u4EA7\u751F\u5F71\u54CD\uFF0C\u4EE5\u5B57\u7B26\u4E32\u4F5C\u4E3A\u8FD4\u56DE\u503C</li><li>\u5728join()\u65B9\u6CD5\u4E2D\uFF0C\u53EF\u4EE5\u6307\u5B9A\u4EFB\u610F\u4E1C\u897F\u4F5C\u4E3A\u6570\u7EC4\u5143\u7D20\u7684\u8FDE\u63A5\u7B26\u3002\u8BED\u6CD5: join(&quot;\u4EFB\u610F\u4E1C\u897F&quot;)</li><li>\u8FDE\u63A5\u7B26\u5FC5\u987B\u4F7F\u7528\u53CC\u5F15\u53F7\u5F15\u7740\uFF0C\u4E0D\u4F7F\u7528\u5C31\u9ED8\u8BA4\u662F\u7528\u9017\u53F7\u8FDE\u63A5\u3002</li><li>\u7ED3\u679C\uFF1A\u5B59\u609F\u7A7A-\u732A\u516B\u6212-\u8718\u86DB\u7CBE-\u5510\u50E7 <img src="https://api2.mubu.com/v3/document_image/4b8bb1f2-9089-430d-a1c4-f6d312835c56-11752736.jpg" alt=""></li></ul></li><li>reverse() <ul><li>\u4F5C\u7528\u662F\u98A0\u5012\u6570\u7EC4\u4E2D\u7684\u5143\u7D20\u987A\u5E8F\u3002.</li><li>\u7ED3\u679C\uFF1A {&quot;0&quot;:&quot;\u5510\u50E7&quot;,&quot;1&quot;:&quot;\u8718\u86DB\u7CBE&quot;,&quot;2&quot;:&quot;\u732A\u516B\u6212&quot;,&quot;3&quot;:&quot;\u5B59\u609F\u7A7A&quot;,&quot;length&quot;:4} <img src="https://api2.mubu.com/v3/document_image/332a9bf2-4dd4-4acc-afca-fc1edc424c01-11752736.jpg" alt=""></li></ul></li></ul><h2 id="\u65F6\u95F4\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u65F6\u95F4\u7C7B" aria-hidden="true">#</a> \u65F6\u95F4\u7C7B</h2><ul><li>getDate() <ul><li>\u83B7\u53D6\u5F53\u524D\u65E5\u671F\u5BF9\u8C61\u7684\u65E5\u3002\uFF08\u83B7\u53D6\u5B9E\u53C2\u7684\u5177\u4F53\u662F\u54EA\u4E00\u65E5\uFF09</li><li>var d2 = new Date(&quot;03/09/2021 14:23:53&quot;);</li><li>var dg = d2.getDate();</li><li>console.log(dg); //9</li></ul></li><li>getDay() <ul><li>\u83B7\u53D6\u5F53\u524D\u65E5\u5BF9\u8C61\u662F\u5468\u51E0.0\u8868\u793A\u5468\u65E5\uFF0C\u4EE5\u6B64\u7C7B\u63A8\u81F36\u8868\u793A\u5468\u516D\u3002</li><li>var d2 = new Date(&quot;03/09/2021 14:23:53&quot;);</li><li>var dg2 = d2.getDay();</li><li>console.log(dg2); //2</li></ul></li><li>getTime() <ul><li>\u83B7\u53D6\u5F53\u524D\u5BF9\u8C61\u7684\u65F6\u95F4\u6233</li><li>\u65F6\u95F4\u6233\u6307\u7684\u662F\u4ECE1970\u5E741\u67081\u65E5 0\u65F60\u52060\u79D2\u5F00\u59CB\u5230\u5F53\u524D\u65E5\u671F\u6240\u82B1\u8D39\u7684\u6BEB\u79D2\u6570\uFF081s = 1000ms\uFF09</li><li>\u8BA1\u7B97\u673A\u5E95\u5C42\u5728\u4FDD\u5B58\u65F6\u95F4\u65F6\u4F7F\u7528\u7684\u90FD\u662F\u65F6\u95F4\u6233</li></ul></li></ul><h2 id="\u6570\u5B57\u8FD0\u7B97\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6570\u5B57\u8FD0\u7B97\u7C7B" aria-hidden="true">#</a> \u6570\u5B57\u8FD0\u7B97\u7C7B</h2><ul><li>Math <ul><li>Math\u548C\u5176\u5B83\u5BF9\u8C61\u4E0D\u540C\uFF0C\u5B83\u4E0D\u662F\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u3002</li><li>\u5B83\u5C5E\u4E8E\u4E00\u4E2A\u5DE5\u5177\u7C7B\u4E0D\u7528\u521B\u5EFA\u5BF9\u8C61\uFF0C\u5B83\u91CC\u9762\u5C01\u88C5\u4E86\u6570\u5B66\u8FD0\u7B97\u76F8\u5173\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u3002</li><li>\u6BD4\u5982\uFF1AMath.PI\u8868\u793A\u5706\u5468\u7387\u3002</li></ul></li><li>abs() <ul><li>\u53EF\u4EE5\u7528\u6765\u8BA1\u7B97\u4E00\u4E2A\u6570\u7684\u7EDD\u5BF9\u503C\u3002\u8BED\u6CD5\uFF1AMath.abs(\u6570\u5B57)</li><li>console.log(Math.abs(2.3)); //2.3</li><li>Math.ceil()</li><li>\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u5411\u4E0A\u53D6\u6574\uFF0C\u5C0F\u6570\u4F4D\u53EA\u8981\u6709\u503C\u5C31\u4F1A\u81EA\u52A8\u8FDB1</li><li>console.log(Math.ceil(4.3)); //5</li><li>Math.floor()</li><li>\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u5411\u4E0B\u53D6\u6574\uFF0C\u5C0F\u6570\u90E8\u5206\u4F1A\u88AB\u820D\u5F03\u6389</li><li>console.log(Math.floor(4.3)); //4</li></ul></li><li>Math.round() <ul><li>\u53EF\u4EE5\u5BF9\u4E00\u4E2A\u6570\u8FDB\u884C\u56DB\u820D\u4E94\u5165\u53D6\u6574\u3002</li><li>console.log(Math.round(4.3)); //4</li><li>console.log(Math.round(4.6)); //5</li></ul></li><li>Math.random() <ul><li>\u53EF\u4EE5\u7528\u6765\u751F\u6210\u4E00\u4E2A0-1\u7684\u968F\u673A\u6570\u3002</li><li>console.log(Math.random()); // \u6240\u6709\u7684\u5176\u5B83\u8303\u56F4\u90FD\u662F\u5728\u8FD9\u4E2A\u57FA\u7840\u4E0A\u53D8\u6362\u6765\u7684\u3002</li><li>\u6BD4\u5982\u751F\u6210\u4E00\u4E2A0-10\u7684\u6570\u3002 <ul><li>console.log(Math.random()/*10);</li></ul></li><li>\u751F\u6210\u4E00\u4E2A0-x\u7684\u6570 <ul><li>console.log(Math.random()/*x);</li></ul></li><li>\u9AD8\u7EA7\u4F7F\u7528 <ul><li>\u751F\u62101-10 <ul><li>console.log(Math.random()/*9+1);</li></ul></li><li>\u751F\u6210\u4E00\u4E2Ax-y\u4E4B\u95F4\u7684\u968F\u673A\u6570 <ul><li>console.log(Math.random()/*(y-x)+x);</li></ul></li></ul></li></ul></li><li>Math.max() \u3001 Math.min() <ul><li>var m1 = Math.max(10,31,41,53,36);</li><li>var n1 = Math.min(10,31,41,53,36);</li></ul></li><li>Math.pow(x,y) <ul><li>\u8FD4\u56DEx\u7684y\u6B21\u5E42</li><li>console.log(Math.pow(5,3)); //125</li></ul></li><li>Math.sqrt() <ul><li>\u5F00\u5E73\u65B9\u8FD0\u7B97\u3002</li><li>console.log(Math.sqrt(81)); //9</li></ul></li></ul><h2 id="\u5B57\u7B26\u4E32\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u7C7B" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u7C7B</h2><ul><li>\u6CE8\u610F\u4E8B\u9879 <ul><li>\u521B\u5EFA\u4E00\u4E2A\u5B57\u7B26\u4E32 var std = &quot;hello&quot;;</li><li>\u51E1\u662F\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\uFF0C\u4F7F\u7528\u7684\u65F6\u5019\u90FD\u8981\u5728\u524D\u9762\u52A0\u4E0A\u5B57\u7B26\u4E32\u7684\u540D\u5B57\u3002\u8BED\u6CD5\uFF1A\u5B57\u7B26\u4E32\u540D.\u65B9\u6CD5()\uFF1B</li><li>\u5728\u5E95\u5C42\uFF0C\u5B57\u7B26\u4E32\u662F\u4EE5\u5B57\u7B26\u6570\u7EC4\u7684\u5F62\u5F0F\u4FDD\u5B58\u7684\u3002\u4E0A\u8FF0\u5B57\u7B26\u4E32\u7684\u4FDD\u5B58\u7ED3\u679C\u662F[&quot;h&quot;,&quot;e&quot;,&quot;l&quot;,&quot;l&quot;,&quot;o&quot;]</li></ul></li><li>charAt() <ul><li>\u53EF\u4EE5\u8FD4\u56DE\u5B57\u7B26\u4E32\u4E2D\u6307\u5B9A\u7D22\u5F15\u7684\u5B57\u7B26\u3002 <ul><li>var std = &quot;hello&quot;;</li><li>var result = std.charAt(3);</li><li>console.log(result); // l</li></ul></li></ul></li><li>charCodeAt() <ul><li>\u83B7\u53D6\u6307\u5B9A\u4F4D\u7F6E\u5B57\u7B26\u7684\u5B57\u7B26\u7F16\u7801\uFF08Unicode\u7F16\u7801\uFF09 <ul><li>var std = &quot;hello&quot;;</li><li>var result = std.charCodeAt(3);</li><li>console.log(result); //108 \uFF08l\u5728Unicode\u7F16\u7801\u8868\u4E2D\u7684\u7F16\u7801\u662F108\uFF09</li></ul></li></ul></li><li>String.fromCharCode() <ul><li>\u53EF\u4EE5\u6839\u636E\u5B57\u7B26\u7F16\u7801\u53BB\u83B7\u53D6\u5B57\u7B26 <ul><li>var result = String.fromCharCode(108);</li><li>console.log(result); // l</li></ul></li></ul></li><li>concat() <ul><li>\u53EF\u4EE5\u7528\u6765\u8FDE\u63A5\u4E24\u4E2A\u6216\u591A\u4E2A\u5B57\u7B26\u4E32\u3002\u4F5C\u7528\u548C + \u4E00\u6837\uFF08\u62FC\u4E32\uFF09 <ul><li>var std = &quot;hello&quot;;</li><li>var result = std.concat(&quot;\u4F60\u597D&quot;,&quot;\u8FD9\u662F\u6D4B\u8BD5&quot;);</li><li>console.log(result); //hello\u4F60\u597D\u8FD9\u662F\u6D4B\u8BD5</li></ul></li></ul></li><li>indexof() <ul><li>\u8BE5\u65B9\u6CD5\u53EF\u4EE5\u68C0\u7D22\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u542B\u6709\u6307\u5B9A\u7684\u5185\u5BB9</li><li>\u5982\u679C\u5B57\u7B26\u4E32\u542B\u6709\u8BE5\u5185\u5BB9\uFF0C\u5219\u4F1A\u8FD4\u56DE\u6307\u5B9A\u5185\u5BB9\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u7D22\u5F15 \uFF08\u56E0\u4E3A\u6709\u53EF\u80FD\u51FA\u73B0\u591A\u6B21\uFF09</li><li>\u5982\u679C\u6CA1\u6709\u627E\u5230\u6307\u5B9A\u7684\u5185\u5BB9\uFF0C\u5C31\u4F1A\u8FD4\u56DE-1 <ul><li>var std = &quot;hello&quot;;</li><li>var result = std.indexOf(&quot;e&quot;); //\u975E\u6570\u5B57\u7C7B\u578B\u7684\u5F15\u7528\u4E00\u5B9A\u8981\u6709\u5F15\u53F7\u3002\u3002</li><li>console.log(result); //1</li></ul></li><li>\u53EF\u4EE5\u5229\u7528\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u6307\u5B9A\u5F00\u59CB\u627E\u7684\u8D77\u59CB\u4F4D\u7F6E\u3002\uFF08\u627E\u7684\u65F6\u5019\u5305\u542B\u8FD9\u4E2A\u4F4D\u7F6E\uFF09 <ul><li>var std = &quot;hello&quot;;</li><li>var result = std.indexOf(&quot;e&quot;,3);</li><li>console.log(result); //-1</li></ul></li></ul></li><li>lastIndexOf() <ul><li>\u8BE5\u65B9\u6CD5\u7684\u7528\u6CD5\u548Cindexof()\u4E00\u6837\uFF0C\u4E0D\u540C\u7684\u662Findexif\u662F\u524D\u9762\u5F00\u59CB\u5F80\u540E\u9762\u627E,\u800ClastIndexOf\u662F\u4ECE\u540E\u9762\u5F00\u59CB\u5F80\u524D\u9762\u627E\u3002</li><li>\u4F46\u4E0D\u7BA1\u662F\u4ECE\u524D\u9762\u5F80\u540E\u9762\u627E\uFF0C\u8FD8\u662F\u4ECE\u540E\u9762\u5F80\u524D\u9762\u627E\uFF0C\u6BCF\u4E2A\u6570\u5BF9\u5E94\u7684\u7D22\u5F15\u90FD\u662F\u56FA\u5B9A\u7684\u3002</li><li>var std = &quot;hello&quot;;</li><li>var result = std.lastIndexOf(&quot;e&quot;); //1. \u867D\u7136\u627E\u7684\u65B9\u5411\u4E0D\u540C\uFF0C\u4F46\u6BCF\u4E2A\u6570\u5BF9\u5E94\u7684\u7D22\u5F15\u90FD\u662F\u56FA\u5B9A\u7684\uFF0C\u5982\u679C\u65E0\u91CD\u590D\uFF0C\u8FD4\u56DE\u503C\u53EF\u80FD\u4E0D\u4F1A\u53D1\u751F\u6539\u53D8</li><li>var result2 = std.lastIndexOf(&quot;o&quot;); //4.</li><li>console.log(result);</li><li>console.log(result2);</li><li>\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5F00\u59CB\u67E5\u627E\u7684\u4F4D\u7F6E</li><li>var result3 = std.lastIndexOf(&quot;o&quot;,3); //-1</li><li>console.log(result3);</li></ul></li><li>slice() <ul><li>\u53EF\u4EE5\u4ECE\u5B57\u7B26\u4E32\u4E2D\u622A\u53D6\u6307\u5B9A\u7684\u5185\u5BB9\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u539F\u5B57\u7B26\u4E32\uFF0C\u800C\u662F\u5C06\u622A\u53D6\u7684\u5185\u5BB9\u8FD4\u56DE\u3002</li><li>\u53C2\u6570 <ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u8868\u793A\u5F00\u59CB\u7684\u7D22\u5F15\uFF08\u622A\u53D6\u5185\u5BB9\u5305\u62EC\u5F00\u59CB\u7684\u4F4D\u7F6E\uFF09</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A\u8868\u793A\u7ED3\u675F\u7684\u7D22\u5F15\uFF08\u622A\u53D6\u5185\u5BB9\u4E0D\u5305\u62EC\u7ED3\u675F\u7684\u4F4D\u7F6E\uFF09</li><li>\u5982\u679C\u7701\u7565\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u5219\u4F1A\u622A\u53D6\u5230\u540E\u9762\u6240\u6709\u7684\u3002</li><li>\u4E5F\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u8D1F\u6570\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4E0D\u8FC7\u8D1F\u6570\u7684\u8BDD\u8981\u4ECE\u540E\u9762\u5F00\u59CB\u7B97\u8D77\u3002</li></ul></li><li>var str = &quot;wshd9h0hanfafeq&quot;;</li><li>var result = str.slice(2,5); // \u5B57\u7B26\u4E32.\u65B9\u6CD5();</li><li>console.log(result); //hd9</li></ul></li><li>substring() <ul><li>\u53EF\u4EE5\u7528\u6765\u622A\u53D6\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u4F5C\u7528\u4E5Fslice()\u7C7B\u4F3C\u3002</li><li>\u53C2\u6570 <ul><li>\u7B2C\u4E00\u4E2A\uFF1A\u5F00\u59CB\u622A\u53D6\u4F4D\u7F6E\u7684\u7D22\u5F15\uFF08\u5305\u62EC\u5F00\u59CB\u4F4D\u7F6E\uFF09</li><li>\u7B2C\u4E8C\u4E2A\uFF1A\u7ED3\u675F\u4F4D\u7F6E\u7684\u7D22\u5F15\uFF08\u4E0D\u5305\u62EC\u7ED3\u675F\u4F4D\u7F6E\uFF09</li></ul></li><li>\u4E0D\u540C\u7684\u662F\u8FD9\u4E2A\u65B9\u6CD5\u4E0D\u80FD\u63A5\u53D7\u8D1F\u6570\u4F5C\u4E3A\u53C2\u6570\u3002</li><li>\u5982\u679C\u4F20\u9012\u4E86\u4E00\u4E2A\u8D1F\u6570\uFF0C\u5219\u4F1A\u9ED8\u8BA4\u53D8\u6210 0</li><li>\u800C\u4E14\u89E3\u6790\u5668\u4F1A\u81EA\u52A8\u8C03\u6574\u53C2\u6570\u7684\u987A\u5E8F\uFF0C\u5C0F\u7684\u5728\u524D\u9762\uFF0C\u5927\u7684\u5728\u540E\u9762\u3002</li><li>var str = &quot;wshd9h0hanfafeq&quot;;</li><li>var result = str.substring(2,-3); // \u5B57\u7B26\u4E32.\u65B9\u6CD5\uFF08\uFF09;</li><li>console.log(result); //ws</li></ul></li><li>substr() <ul><li>\u7528\u6765\u622A\u53D6\u5B57\u7B26\u4E32</li><li>\u53C2\u6570 <ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570\u8868\u793A\u5F00\u59CB\u622A\u53D6\u7684\u4F4D\u7F6E\u3002\uFF08\u5305\u62EC\u8FD9\u4E2A\u4F4D\u7F6E\uFF09</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u622A\u53D6\u7684\u957F\u5EA6\u3002\u4E5F\u8868\u793A\u622A\u53D6\u7684\u4E2A\u6570\u3002</li></ul></li><li>var str = &quot;wshd9h0hanfafeq&quot;;</li><li>var result = str.substr(2,4);</li><li>console.log(result); //hd9h</li></ul></li><li>split() <ul><li>\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u62C6\u5206\u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002</li><li>\u53C2\u6570 <ul><li>\u9700\u8981\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u89E3\u6790\u5668\u5C06\u4F1A\u6839\u636E\u6570\u7EC4\u5185\u7684\u8BE5\u5B57\u7B26\u4E32\u6240\u5904\u4F4D\u7F6E\u8FDB\u884C\u62C6\u5206\u3002</li></ul></li><li>var str = &quot;abc,bks,hsn,hij,bcd&quot;;</li><li>var result = str.split(&quot;b&quot;);</li><li>console.log(result); <img src="https://api2.mubu.com/v3/document_image/3eb7dcd8-a17d-47db-b18e-2171af146878-11752736.jpg" alt=""></li><li>\u5982\u679C\u4F20\u9012\u4E00\u4E2A\u7A7A\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u5219\u4F1A\u5C06\u6BCF\u4E2A\u5B57\u7B26\u90FD\u62C6\u5206\u4E3A\u6570\u7EC4\u7684\u4E00\u4E2A\u5143\u7D20</li><li>var result1 = str.split(&quot;&quot;);</li><li>console.log(result1); <img src="https://api2.mubu.com/v3/document_image/e13b3ede-f1b6-4d35-97f7-e092d1d5fd12-11752736.jpg" alt=""></li></ul></li><li>toUpperCase() <ul><li>\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5927\u5199\u5E76\u8FD4\u56DE\u3002</li><li>var str = &quot;sdbgndnfegrt&quot;;</li><li>var result = str.toUpperCase();</li><li>console.log(result); //SDBGNDNFEGRT</li></ul></li><li>toLowerCase() <ul><li>\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u5C0F\u5199\u5E76\u8FD4\u56DE\u3002</li><li>var str = &quot;SDBGNDNFEGRT&quot;;</li><li>var result = str.toLowerCase();</li><li>console.log(result); ///sdbgndnfegrt</li></ul></li></ul><h2 id="\u6B63\u5219\u8868\u8FBE\u5F0F\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6B63\u5219\u8868\u8FBE\u5F0F\u7C7B" aria-hidden="true">#</a> \u6B63\u5219\u8868\u8FBE\u5F0F\u7C7B</h2><ul><li>\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5BF9\u8C61\u3002 <ul><li>\u8BED\u6CD5\uFF1A</li><li>var \u53D8\u91CF = new RegExp(&quot;\u6B63\u5219\u8868\u8FBE\u5F0F&quot;,&quot;\u5339\u914D\u6A21\u5F0F&quot;);</li><li>var reg = new RegExp(&quot;a&quot;);</li><li>var reg = new RegExp(&quot;a&quot;); \u8FD9\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u53EF\u4EE5\u6765\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u542B\u6709a,</li><li>\u5728\u6784\u9020\u51FD\u6570\u4E2D\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u5339\u914D\u6A21\u5F0F\u4F5C\u4E3A\u7B2C\u4E8C\u4E2A\u53C2\u6570, \u53EF\u4EE5\u662F\uFF1A <ul><li>i \u8868\u793A\u5FFD\u7565\u5927\u5C0F\u5199</li><li>g \u8868\u793A\u5168\u5C40\u5339\u914D\u6A21\u5F0F</li></ul></li></ul></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u65B9\u6CD5 <ul><li>test() <ul><li>\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u7B26\u5408\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u89C4\u5219\u3002</li><li>\u5982\u679C\u7B26\u5408\u5C31\u8FD4\u56DEtrue,\u5426\u5219\u5C31\u8FD4\u56DEfalse.</li></ul></li></ul></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u8BED\u6CD5 <ul><li>\u4F7F\u7528\u5B57\u9762\u91CF\u6765\u521B\u5EFA\u6B63\u5219\u8868\u8FBE\u5F0F <ul><li>\u8BED\u6CD5\uFF1A var \u53D8\u91CF = /\u6B63\u5219\u8868\u8FBE\u5F0F/\u5339\u914D\u6A21\u5F0F;</li><li>\u533A\u522B\uFF1A <ul><li>\u4F7F\u7528\u5B57\u9762\u91CF\u7684\u65B9\u5F0F\u521B\u5EFA\u66F4\u52A0\u7B80\u5355</li><li>\u4F7F\u7528\u6784\u9020\u51FD\u6570\u7684\u65B9\u5F0F\u521B\u5EFA\u66F4\u52A0\u7075\u6D3B.</li></ul></li><li>var reg = /a/i;</li><li>console.log(reg.test(&quot;absdsafaassd&quot;)); //true //\u8FD9\u4E2Atest\u540E\u9762\u7684\u53C2\u6570\u662F\u5B57\u7B26\u4E32\u3002</li></ul></li></ul></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5C0F\u6280\u5DE7 <ul><li>(1) \u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u7531 a \u6216 b <ul><li>\u4F7F\u7528 | \u8868\u793A\u6216\u8005\u7684\u610F\u601D\u3002</li><li>var reg = /a|b/;</li><li>console.log(reg.test(&quot;abjobdu9gefipnav&quot;)); //true</li></ul></li><li>\u7279\u6B8A\u6807\u8BC6\u7B26 <ul><li>[]\u91CC\u7684\u5185\u5BB9\u4E5F\u662F\u6216\u7684\u5173\u7CFB</li><li>[ab] == a|b</li><li>[a-z] == \u4EFB\u610F\u5C0F\u5199\u5B57\u6BCD</li><li>[A-Z] == \u4EFB\u610F\u5927\u5199\u5B57\u6BCD</li><li>[A-z] == \u4EFB\u610F\u5B57\u6BCD</li><li>[^ ] == \u9664\u4E86</li></ul></li><li>(2)\u68C0\u67E5\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709 abc \u540E adc \u6216 aec <ul><li>var reg = /a[bde]c/;</li><li>console.log(reg.test(&quot;bvidauacnadcojdbaaecoeb&quot;)); //true</li><li>\u68C0\u6D4B[^ ] ^\u9664\u4E86\u8BED\u6CD5 <ul><li>var reg1 = /[^ab]/ //\u9664\u4E86ab\u4EE5\u5916\u8FD8\u6709\u4E1C\u897F\u3002</li><li>console.log(reg1.test(&quot;ab279\u6211\u662F&quot;)); //true /*/</li></ul></li></ul></li></ul></li><li>\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u4F7F\u7528 <ul><li>(1) \u5229\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u66F4\u597D\u5730\u5E2E\u52A9\u62C6\u5206\u5B57\u7B26\u4E32 <ul><li>split() <ul><li>\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u62C6\u5206\u4E3A\u4E00\u4E2A\u6570\u7EC4\u3002</li><li>\u65B9\u6CD5\u4E2D\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u6837\u65B9\u6CD5\u5C06\u4F1A\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u53BB\u62C6\u5206\u5B57\u7B26\u4E32</li><li>\u6839\u636E\u4EFB\u610F\u5B57\u6BCD\u5C06\u5B57\u7B26\u4E32\u62C6\u5206\u3002</li><li>var str = &quot;1d2d3f4h4b3b333h3b35b3b224n2f2&quot;</li><li>var result = str.split(/[A-z]/);</li><li>console.log(result); <img src="https://api2.mubu.com/v3/document_image/50f602df-6547-4ded-b199-e7986cf9911c-11752736.jpg" alt=""></li></ul></li></ul></li><li>(2)search() <ul><li>\u53EF\u4EE5\u641C\u7D22\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u542B\u6709\u6307\u5B9A\u5185\u5BB9</li><li>\u5982\u679C\u641C\u7D22\u5230\u6307\u5B9A\u5185\u5BB9\uFF0C\u5219\u4F1A\u8FD4\u56DE\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u7D22\u5F15\uFF0C\u5982\u679C\u6CA1\u6709\u641C\u7D22\u5230\u8FD4\u56DE-1</li><li>\u5B83\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7136\u540E\u4F1A\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u53BB\u68C0\u7D22\u5B57\u7B26\u4E32\u3002</li><li>search()\u53EA\u4F1A\u67E5\u627E\u7B2C\u4E00\u4E2A\uFF0C\u5373\u4F7F\u8BBE\u7F6E\u5168\u5C40\u5339\u914D\u4E5F\u6CA1\u7528\u3002</li><li>var str = &quot;hello abd hei dav abd&quot;;</li><li>var result = str.search(/abd/);</li><li>console.log(result); //6 abd\u6700\u5148\u51FA\u73B0\u7684\u7D22\u5F15\u662F6</li></ul></li><li>(3)match() <ul><li>\u53EF\u4EE5\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4ECE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u5C06\u7B26\u5408\u6761\u4EF6\u7684\u5185\u5BB9\u63D0\u53D6\u51FA\u6765</li><li>\u9ED8\u8BA4\u6761\u4EF6\u4E0B\u6211\u4EEC\u7684match\u53EA\u4F1A\u627E\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u8981\u6C42\u7684\u5185\u5BB9\uFF0C\u627E\u5230\u4EE5\u540E\u5C31\u505C\u6B62\u68C0\u7D22</li><li>\u6211\u4EEC\u53EF\u4EE5\u8BBE\u7F6E\u6B63\u5219\u8868\u8FBE\u5F0F\u4E3A\u5168\u5C40\u5339\u914D\u6A21\u5F0F\uFF0C\u8FD9\u6837\u5C31\u4F1A\u5339\u914D\u5230\u6240\u6709\u7684\u5185\u5BB9\u3002</li><li>\u53EF\u4EE5\u4E3A\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u8BBE\u7F6E\u591A\u4E2A\u5339\u914D\u6A21\u5F0F\uFF0C\u4E14\u987A\u5E8F\u65E0\u6240\u8C13</li><li>match\uFF08\uFF09\u4F1A\u5C06\u5339\u914D\u5230\u7684\u5185\u5BB9\u5C01\u88C5\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\u8FD4\u56DE\uFF0C\u5373\u4F7F\u53EA\u67E5\u8BE2\u5230\u4E00\u4E2A\u7ED3\u679C\u3002</li><li>var str = &quot;1a2b3c4d5e6f7g8h9j10k&quot;;</li><li>var result = str.match(/[A-z]/g); //A-z \u5FC5\u987B\u8981\u7531[]\u62EC\u7740\u624D\u8868\u793A\u4EFB\u610F\u7684\u5B57\u6BCD.[]\u8868\u793A\u4EFB\u610F\u7684\u4EC0\u4E48\u4EC0\u4E48</li><li>console.log(result); <img src="https://api2.mubu.com/v3/document_image/65925703-5887-4ba2-b3da-9fe99b405564-11752736.jpg" alt=""></li></ul></li><li>(4)replace() <ul><li>\u53EF\u4EE5\u5C06\u5B57\u7B26\u4E32\u4E2D\u6307\u5B9A\u5185\u5BB9\u66FF\u6362\u4E3A\u65B0\u7684\u5185\u5BB9</li><li>\u53C2\u6570\uFF1A <ul><li>\u7B2C\u4E00\u4E2A\u53C2\u6570 \u8868\u793A\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u53C2\u6570</li><li>\u7B2C\u4E8C\u4E2A\u53C2\u6570 \u8868\u793A\u65B0\u7684\u5185\u5BB9\u3002</li></ul></li><li>\u9ED8\u8BA4\u53EA\u4F1A\u66FF\u6362\u7B2C\u4E00\u4E2A</li><li>var str = &quot;1a2b3c4d5e6f7g8h9j10k&quot;;</li><li>var result = str.replace(/[A-z]/gi,&quot;,&quot;); //\u6B63\u5219\u8868\u8FBE\u5F0F\u4E0D\u9700\u8981\u62EC\u53F7\u62EC\u7740</li><li>console.log(result); <img src="https://api2.mubu.com/v3/document_image/ce74f8c5-f73b-4f8d-b901-bc52d3ea981e-11752736.jpg" alt=""></li></ul></li><li>(5)split() <ul><li>\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5B57\u7B26\u4E32\u62C6\u5206\u4E3A\u4E00\u4E2A\u6570\u7EC4</li><li>\u65B9\u6CD5\u4E2D\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u6837\u65B9\u6CD5\u5C06\u4F1A\u6839\u636E\u6B63\u5219\u8868\u8FBE\u5F0F\u53BB\u62C6\u5206\u5B57\u7B26\u4E32</li><li>\u8FD9\u4E2A\u65B9\u6CD5\u5373\u4F7F\u4E0D\u6307\u5B9A\u5168\u5C40\u5339\u914D\uFF0C\u4E5F\u4F1A\u5168\u90FD\u62C6\u5206\u3002</li><li>\u6839\u636E\u4EFB\u610F\u5B57\u6BCD\u62C6\u5206</li><li>var str = &quot;1a2b3c4d5e6f7g8h9j10k&quot;;</li><li>var result = str.split(/[A-z]/); //\u6B63\u5219\u8868\u8FBE\u5F0F\u4E0D\u9700\u8981\u62EC\u53F7\u62EC\u7740</li><li>console.log(result); <img src="https://api2.mubu.com/v3/document_image/189ea26f-3699-40b5-91e9-b3de393da119-11752736.jpg" alt=""></li></ul></li><li>\u91CF\u8BCD <ul><li>\u901A\u8FC7\u91CF\u8BCD\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5185\u5BB9\u51FA\u73B0\u7684\u6B21\u6570\u3002</li><li>\u91CF\u8BCD\u53EA\u5BF9\u5B83\u524D\u9762\u7684\u4E00\u4E2A\u5185\u5BB9 \u6216\u8005 \u5B57\u6BCD \u8D77\u4F5C\u7528</li><li>{n} \u8868\u793A\u524D\u9762\u4E00\u4E2A\u5185\u5BB9\u6216\u8005\u5B57\u6BCD\u91CD\u590Dn\u6B21</li><li>{m,n} \u8868\u793A\u91CD\u590D m \u5230 n \u6B21</li><li>{m, } \u8868\u793A\u91CD\u590D m \u6B21\u4EE5\u4E0A</li><li><code>+</code> \u81F3\u5C11\u4E00\u4E2A \u7B49\u4EF7\u4E8E {1, }</li><li><code>*</code> 0\u4E2A\u6216\u591A\u4E2A</li><li>\uFF1F0\u4E2A\u62161\u4E2A \u7B49\u4EF7\u4E8E {0,1}</li></ul></li></ul></li></ul><h2 id="dom\u7C7B" tabindex="-1"><a class="header-anchor" href="#dom\u7C7B" aria-hidden="true">#</a> DOM\u7C7B</h2><ul><li>getElementsByTagName() <ul><li>\u65B9\u6CD5\uFF0C\u8FD4\u56DE\u5F53\u524D\u8282\u70B9\u7684\u6307\u5B9A\u6807\u7B7E\u540D\u7684\u540E\u4EE3\u8282\u70B9</li></ul></li><li>childNodes() <ul><li>\u5C5E\u6027\uFF0C\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684\u6240\u6709\u5B50\u8282\u70B9</li></ul></li><li>firstChild() <ul><li>\u5C5E\u6027\uFF0C\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9</li></ul></li><li>lastChild() <ul><li>\u5C5E\u6027\uFF0C\u8868\u793A\u5F53\u524D\u8282\u70B9\u7684\u6700\u540E\u4E00\u4E2A\u8282\u70B9\u3002</li></ul></li><li>querySelector() <ul><li>\u83B7\u53D6\u6307\u5BF9\u5E94id\u7684\u5143\u7D20\u3002</li><li>\u8BED\u6CD5\uFF1Adocument.querySelector(&quot;/#demo&quot;);</li></ul></li><li>appendChild() <ul><li>\u5728\u5217\u8868\u7684\u540E\u9762\u6DFB\u52A0\u9879\u76EE\u3002</li><li>\u8BED\u6CD5: \u7236\u5143\u7D20\u8282\u70B9.appendChild(\u5B50\u5143\u7D20\u8282\u70B9);</li></ul></li><li>insertBefore() <ul><li>\u5728\u6307\u5B9A\u7684\u8282\u70B9\u524D\u9762\u63D2\u5165\u65B0\u7684\u8282\u70B9</li><li>\u8BED\u6CD5\uFF1A\u7236\u8282\u70B9\u5143\u7D20.insertBefore(\u65B0\u8282\u70B9\u5143\u7D20\uFF0C\u65E7\u8282\u70B9\u5143\u7D20);</li></ul></li><li>repalceChild() <ul><li>\u53EF\u4EE5\u4F7F\u7528\u6307\u5B9A\u7684\u5B50\u8282\u70B9\u66FF\u6362\u5B50\u8282\u70B9\uFF1B</li><li>\u8BED\u6CD5\uFF1A\u7236\u5143\u7D20\u8282\u70B9.repalceChild(\u65B0\u8282\u70B9\u5143\u7D20\uFF0C\u65E7\u8282\u70B9\u5143\u7D20)\uFF1B</li></ul></li><li>removeChild() <ul><li>\u5220\u9664\u7279\u5B9A\u5B50\u8282\u70B9</li></ul></li><li>\u83B7\u53D6\u5143\u7D20\u5F53\u524D\u7684\u6837\u5F0F\u503C</li><li>(1) \u8BED\u6CD5\uFF1A\u5143\u7D20.currenStyle.\u6837\u5F0F\u540D <ul><li>\u5B83\u53EF\u4EE5\u7528\u6765\u8BFB\u53D6\u5F53\u524D\u5143\u7D20\u6B63\u5728\u663E\u793A\u7684\u6837\u5F0F\uFF0C\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u5230\u8BE5\u6837\u5F0F\uFF0C\u5C31\u83B7\u53D6\u9ED8\u8BA4\u503C</li><li>currenStyle\u53EA\u6709iE\u6D4F\u89C8\u5668\u652F\u6301\uFF0C\u53EF\u601C</li></ul></li><li>(2)getComputedStyle() <ul><li>\u800C\u5728\u5176\u5B83\u6D4F\u89C8\u5668\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 getComputedStyle\u65B9\u6CD5 \u6765\u83B7\u53D6\u5F53\u524D\u5143\u7D20\u7684\u6837\u5F0F</li><li>\u8FD9\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u524D\u9762\u4E0D\u9700\u8981\u52A0\u5143\u7D20,\u9700\u8981\u4E24\u4E2A\u53C2\u6570\uFF1A <ul><li>\u7B2C\u4E00\u4E2A\uFF1A\u8981\u83B7\u53D6\u6837\u5F0F\u7684\u5143\u7D20</li><li>\u7B2C\u4E8C\u4E2A\uFF1A\u76EE\u524D\u5199\u4E0Anull</li></ul></li><li>\u8BE5\u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4E2D\u5C01\u88C5\u4E86\u5F53\u524D\u5143\u7D20\u5BF9\u5E94\u7684\u6837\u5F0F</li><li>\u53EF\u4EE5\u901A\u8FC7 \u5BF9\u8C61.\u6837\u5F0F\u540D \u6765\u8BFB\u53D6\u6837\u5F0F</li><li>\u5982\u679C\u83B7\u53D6\u7684\u6837\u5F0F\u6CA1\u6709\u8BBE\u7F6E\uFF0C\u5219\u4F1A\u83B7\u53D6\u5230\u771F\u5B9E\u7684\u503C\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u503C</li><li>\u6BD4\u5982:\u6CA1\u6709\u8BBE\u7F6Ewidth\uFF0C\u5B83\u4E0D\u4F1A\u8FD4\u56DEauto\uFF0C\u800C\u662F\u4F1A\u653E\u56DE\u4E00\u4E2A\u5B9E\u65F6\u5C4F\u5E55\u5927\u5C0F\u7684\u503C</li><li>\u8BE5\u65B9\u6CD5\u4E0D\u652F\u6301iE8</li><li>var obj = getComputedStyle(box1,null);</li><li>alert(obj.width);</li></ul></li><li>(3)\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570\uFF0C\u4F7F\u5B83\u65E0\u8BBA\u5728\u4EC0\u4E48\u6D4F\u89C8\u5668\u4E2D\u90FD\u80FD\u83B7\u53D6\u6307\u5B9A\u5143\u7D20\u5F53\u524D\u7684\u6837\u5F0F\u3002 <img src="https://api2.mubu.com/v3/document_image/586d27ec-544b-440a-ada8-4e911d7b6e07-11752736.jpg" alt=""></li><li>\u957F\u5EA6\u5C3A\u5BF8\u95EE\u9898</li><li>clientWidth\u5C5E\u6027\u3001clientHeight\u5C5E\u6027 <ul><li>\u8FD9\u4E24\u4E2A\u5C5E\u6027\u53EF\u4EE5\u83B7\u53D6\u5143\u7D20\u7684\u53EF\u89C1\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u3002</li><li>\u8FD9\u4E9B\u5C5E\u6027\u90FD\u662F\u4E0D\u5E26px\u7684\uFF0C\u8FD4\u56DE\u90FD\u662F\u4E00\u4E2A\u6570\u5B57\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7528\u4E8E\u8BA1\u7B97\u3002</li><li>\u4F1A\u83B7\u53D6\u5143\u7D20\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5305\u62EC\u5185\u5BB9\u533A\u548C\u5185\u8FB9\u8DDD</li><li>\u8FD9\u4E9B\u5C5E\u6027\u90FD\u662F\u53EA\u5141\u8BB8\u8BFB\u53D6\uFF0C\u4E0D\u5141\u8BB8\u4FEE\u6539\u7684\u3002</li></ul></li><li>offsetWidth\u5C5E\u6027 \u3001offsetHeight\u5C5E\u6027 <ul><li>\u83B7\u53D6\u5143\u7D20\u7684\u6574\u4E2A\u5BBD\u5EA6\u548C\u9AD8\u5EA6\uFF0C\u5305\u62EC\u5185\u5BB9\u533A\u3001\u5185\u8FB9\u8DDD\u3001\u8FB9\u6846</li><li>\u5176\u5B83\u7279\u70B9\u548CcliendWidth\u3001cliendHeight\u4E00\u6837</li></ul></li><li>offsetParent\u5C5E\u6027 <ul><li>\u53EF\u4EE5\u83B7\u53D6\u5F53\u524D\u5143\u7D20\u7684\u5B9A\u4F4D\u7236\u5143\u7D20\uFF0C\u6CE8\u610F\u8FD9\u91CC\u7684\u7236\u5143\u7D20\u5FC5\u987B\u8981\u662F\u6709\u5B9A\u4F4D\u7684\u4E14\u662F\u6700\u8FD1\u7684\u90A3\u4E2A</li><li>\u4F1A\u83B7\u5F97\u79BB\u5F53\u524D\u5143\u7D20\u6700\u8FD1\u7684\u5F00\u542F\u4E86\u5B9A\u4F4D\u7684\u7956\u5148\u5143\u7D20</li><li>\u5982\u679C\u6240\u6709\u7684\u7956\u5148\u5143\u7D20\u90FD\u6CA1\u6709\u5F00\u542F\u5B9A\u4F4D\uFF0C\u5219\u4F1A\u8FD4\u56DEbody.</li></ul></li><li>offsetLeft\u5C5E\u6027 <ul><li>\u5F53\u524D\u5143\u7D20\u76F8\u5BF9\u4E8E\u5176\u5B9A\u4F4D\u7236\u5143\u7D20\u7684\u6C34\u5E73\u504F\u79FB\u91CF</li></ul></li><li>offsetTop\u5C5E\u6027 <ul><li>\u5F53\u524D\u5143\u7D20\u76F8\u5BF9\u4E8E\u5176\u5B9A\u4F4D\u7236\u5143\u7D20\u7684\u5782\u76F4\u504F\u79FB\u91CF\u3002</li></ul></li><li>scrollWidth \u548C scrollHeight <ul><li>\u53EF\u4EE5\u83B7\u53D6\u5143\u7D20\u6574\u4E2A\u6EDA\u52A8\u533A\u57DF\u7684\u5BBD\u5EA6\u548C\u9AD8\u5EA6</li></ul></li><li>scrollLeft\u5C5E\u6027\u3001scrollTop\u5C5E\u6027 <ul><li>\u53EF\u4EE5\u83B7\u53D6\u6EDA\u52A8\u6761\u6EDA\u52A8\u7684\u8DDD\u79BB</li></ul></li><li>\u5F53\u6EE1\u8DB3scrollHeight - scrollTop == clientHeight \u65F6\uFF0C <ul><li>\u8BF4\u660E\u5782\u76F4\u6EDA\u52A8\u6761\u6ED1\u5230\u5E95\u4E86</li></ul></li><li>\u5F53\u6EE1\u8DB3scrollWidth - scrollLeft == clientWidth \u65F6\uFF0C <ul><li>\u8BF4\u660E\u6C34\u5E73\u6EDA\u52A8\u6761\u6ED1\u5230\u5E95\u4E86</li></ul></li><li>scrollHeight \u662F\u957F\u5C4F\u5E55\u7684\u56FA\u5B9A\u957F\u5EA6\uFF0C\u8FD9\u662F\u5B9A\u91CF</li><li>clientHeight \u662F\u6587\u672C\u5BF9\u8C61\u7684\u56FA\u5B9A\u957F\u5EA6\uFF0C\u8FD9\u662F\u5B9A\u91CF</li><li>scrollTop \u662F\u6587\u672C\u5BF9\u8C61\u6EDA\u52A8\u7684\u8DDD\u79BB\uFF0C\u8FD9\u662F\u53D8\u91CF</li><li>\u5F53scrollHeight - scrollTop == clientHeight\uFF0C\u8BF4\u660E\u6587\u672C\u5BF9\u8C61\u5DF2\u7ECF\u6EDA\u52A8\u5230\u5E95\u4E86\uFF0C\u6B64\u65F6scrollTop\u662F\u6700\u5927\u503C\uFF0C\u4E0D\u80FD\u518D\u53D1\u751F\u53D8\u5316</li><li>onscroll <ul><li>\u8BE5\u4E8B\u4EF6\u4F1A\u5728\u5143\u7D20\u7684\u6EDA\u52A8\u6761\u6EDA\u52A8\u65F6\u89E6\u53D1</li></ul></li><li>disabled\u5C5E\u6027\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u4E2A\u5143\u7D20\u662F\u5426\u7981\u7528 <ul><li>\u5982\u679C\u662Ftrue,\u5C31\u8868\u793A\u7981\u7528\uFF0C</li><li>\u5982\u679C\u662Ffalse,\u5C31\u8868\u793A\u4E0D\u7981\u7528\u3002</li></ul></li><li>\u4E8B\u4EF6\u5BF9\u8C61 <ul><li>onmousemove <ul><li>\u8BE5\u4E8B\u4EF6\u5C06\u4F1A\u5728\u9F20\u6807\u4E8E\u5143\u7D20\u4E2D\u79FB\u52A8\u662F\u88AB\u89E6\u53D1</li></ul></li><li>\u4E8B\u4EF6\u5BF9\u8C61\u7684\u517C\u5BB9\u6027\u95EE\u9898 <ul><li>\u4E8B\u4EF6\u5BF9\u8C61\u5B9A\u4E49\u4E00\u4E2A\u5F62\u53C2event\u5C31\u597D\uFF0C\u5728IE8\u4EE5\u4E0A\u7684\u6D4F\u89C8\u5668\u4E2D\u8FD9\u4E2A\u5F62\u53C2\u4F1A\u7531\u6D4F\u89C8\u5668\u8D4B\u503C\u3002</li><li>\u5728IE8\u53CA\u4EE5\u4E0B\u7231\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0Cevent\u4F5C\u4E3Awindow\u7684\u5C5E\u6027\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u8D4B\u503C\u7ED9event</li></ul></li><li>\u89E3\u51B3\u517C\u5BB9\u6027\u95EE\u9898\u7684\u65B9\u6CD5\uFF1A <ul><li>\u591A\u5199\u4E00\u6761\u8BED\u53E5 if(!event){ event = window.event; }</li><li>\u6216\u8005 event = event || window.event</li></ul></li><li>clientX \u65B9\u6CD5 <ul><li>\u53EF\u4EE5\u83B7\u53D6\u5230\u9F20\u6807\u6307\u9488\u7684\u6C34\u5E73\u5750\u6807</li></ul></li><li>clientY \u65B9\u6CD5 <ul><li>\u53EF\u4EE5\u83B7\u53D6\u5230\u9F20\u6807\u6307\u9488\u7684\u7AD6\u76F4\u5750\u6807</li></ul></li></ul></li></ul><h2 id="bom\u7C7B-dom\u3001bom-\u4E0D\u5B8C\u6574-\u540E\u7EED\u8865\u5145" tabindex="-1"><a class="header-anchor" href="#bom\u7C7B-dom\u3001bom-\u4E0D\u5B8C\u6574-\u540E\u7EED\u8865\u5145" aria-hidden="true">#</a> BOM\u7C7B --- DOM\u3001BOM \u4E0D\u5B8C\u6574\uFF0C\u540E\u7EED\u8865\u5145</h2>',22),a=[o];function r(s,d){return i(),u("div",null,a)}var c=l(e,[["render",r],["__file","JS\u57FA\u7840\u626B\u76F2.html.vue"]]);export{c as default};
