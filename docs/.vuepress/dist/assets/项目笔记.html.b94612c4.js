import{_ as t,r as e,o as p,c as o,a as n,b as c,d as s,e as l}from"./app.be996f63.js";const i={},r=n("h1",{id:"\u7528js\u6570\u7EC4\u751F\u6210html\u5B57\u7B26",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7528js\u6570\u7EC4\u751F\u6210html\u5B57\u7B26","aria-hidden":"true"},"#"),s(" \u7528JS\u6570\u7EC4\u751F\u6210HTML\u5B57\u7B26")],-1),u=n("h2",{id:"\u9879\u76EE\u80CC\u666F",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u9879\u76EE\u80CC\u666F","aria-hidden":"true"},"#"),s(" \u9879\u76EE\u80CC\u666F")],-1),k=s("\u7ED9\u5B9A\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8F93\u51FA\u4E00\u4E2AHTML\u5B57\u7B26\u3002"),d={href:"https://arrTohtml.devin.ren",target:"_blank",rel:"noopener noreferrer"},m=s("\u7EBF\u4E0A\u5730\u5740"),v=l(`<h2 id="\u5206\u6790\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u9700\u6C42" aria-hidden="true">#</a> \u5206\u6790\u9700\u6C42</h2><p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207111950204.png" alt="\u5206\u6790"> \u4ECE\u56FE\u7247\u8981\u6C42\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u6BCF\u4E00\u4E2A\u6570\u7EC4\uFF0C\u6700\u7EC8\u90FD\u662F\u4F1A\u751F\u6210\u4E00\u4E2Aul&gt;li\u3002 \u4E5F\u5C31\u662F\u4F1A\u6709\u7236\u5143\u7D20\u548C\u5B50\u5143\u7D20\u4EA7\u751F\u3002<br> \u5982\u679C\u6211\u4EEC\u53EA\u662F\u5BF9\u7ED9\u51FA\u7684\u6570\u7EC4\u904D\u5386\u4E00\u6B21\uFF0C\u4E0D\u505A\u4EFB\u4F55\u5904\u7406\uFF0C\u6211\u4EEC\u5F97\u5230\u7684\u5E94\u8BE5\u90FD\u662F\u5144\u5F1F\u5143\u7D20\u3002 <strong>\u89E3\u51B3\u529E\u6CD5\uFF1A</strong> \u5BF9\u4E8E\u6700\u5916\u5C42\u7684ul\uFF0C\u6211\u4EEC\u662F\u53EF\u4EE5\u901A\u8FC7<code>&lt;ul&gt; + res + &lt;/ul&gt;</code>\u6765\u5F97\u5230\u7684\uFF0Cres\u4EE3\u8868\u7684\u662F\u6700\u540E\u7684\u7ED3\u679C\u3002 \u89C2\u5BDF\u91CC\u9762\u7684ul&gt;li\uFF0C\u6211\u4EEC\u53D1\u73B0ul\u548C\u5916\u9762li\u5185\u5BB9\u662F\u4E00\u8D77\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4ul\u662F\u5916\u5C42li\u6807\u7B7E\u7684\u5185\u5BB9\uFF0C\u4E14\u5916\u5C42li\u672C\u8EAB\u4E5F\u662F\u6709\u7740\u5185\u5BB9\u7684\uFF0C\u90A3\u4E48\u6211\u4EEC\u53EA\u9700\u8981\u5728\u6DFB\u52A0\u5916\u5C42li\u672C\u8EAB\u5185\u5BB9\u7684\u65F6\u5019\uFF0C\u52A0\u4E0Aul&gt;li\u5373\u53EF\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u9012\u5F52\u6765\u5B9E\u73B0\u52A0\u4E0Aul&gt;li.</p><h2 id="\u4EE3\u7801\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u5B9E\u73B0" aria-hidden="true">#</a> \u4EE3\u7801\u5B9E\u73B0</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;index.html&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;index.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;index.css&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD4\u56DE\u6570\u7EC4\u4EE3\u8868\u7684\u6587\u4EF6\u6811 HTML</span>
<span class="token keyword">function</span> <span class="token function">toHTML</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> len <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6709\u4E0B\u4E00\u9879\uFF0C\u5E76\u4E14\u4E0B\u4E00\u9879\u662F\u6570\u7EC4</span>
      <span class="token keyword">const</span> subArr <span class="token operator">=</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u628A\u4E0B\u4E00\u9879\u4FDD\u5B58\u8D77\u6765</span>
      res <span class="token operator">+=</span> <span class="token string">&quot;&lt;li&gt;&quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token function">toHTML</span><span class="token punctuation">(</span>subArr<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/li&gt;&quot;</span><span class="token punctuation">;</span> <span class="token comment">// \u9012\u5F52, toHTML(subArr)\u4F1A\u8FD4\u56DE\u4E00\u4E2Aul&gt;li</span>
      i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// \u8DF3\u8FC7\u662F\u6570\u7EC4\u7684\u90A3\u4E2A\u9879</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u5F53\u524D\u9879\u662F\u6587\u4EF6</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      res <span class="token operator">+=</span> <span class="token string">&quot;&lt;li&gt;&quot;</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&quot;&lt;/li&gt;&quot;</span><span class="token punctuation">;</span>
      i <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token string">&quot;&lt;ul&gt;&quot;</span> <span class="token operator">+</span> res <span class="token operator">+</span> <span class="token string">&quot;&lt;/ul&gt;&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> <span class="token function">toHTML</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6700\u7EC8\u6E32\u67D3\u51FA\u6765\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6700\u7EC8\u6E32\u67D3\u51FA\u6765\u7684\u7ED3\u6784" aria-hidden="true">#</a> \u6700\u7EC8\u6E32\u67D3\u51FA\u6765\u7684\u7ED3\u6784</h2><p><img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202207111947101.png" alt="\u9879\u76EE\u7ED3\u6784"></p>`,6);function h(g,b){const a=e("ExternalLinkIcon");return p(),o("div",null,[r,u,n("p",null,[k,n("a",d,[m,c(a)])]),v])}var q=t(i,[["render",h],["__file","\u9879\u76EE\u7B14\u8BB0.html.vue"]]);export{q as default};
