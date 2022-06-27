<template><div><h1 id="登录逻辑" tabindex="-1"><a class="header-anchor" href="#登录逻辑" aria-hidden="true">#</a> 登录逻辑</h1>
<h2 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h2>
<p>当用户点击登录按钮后
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232134891.png" alt=""></p>
<h2 id="详细过程" tabindex="-1"><a class="header-anchor" href="#详细过程" aria-hidden="true">#</a> 详细过程</h2>
<ol>
<li>
<p>在登录页点击登录的时候，前端会带着用户名和密码去调用后端的登录接口.
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232225710.png" alt=""><br>
<code v-pre>formRef.value?.validate()</code>是验证form表单中输入的账号密码是否符合表单规则(比如密码需要在3个数字以上),如果验证通过返回true,然后就会将值传输给validate里的箭头函数的valid形参.<br>
图中有一个dispatch函数，它的作用机理是调用store中action的方法，然后通过action的方法调用mutation方法，再通过mutation方法改变state，达到改变state中数据的目的。<a href="https://www.jianshu.com/p/ef348d1c8f2b" target="_blank" rel="noopener noreferrer">关于dispatch的详细介绍点这里<ExternalLinkIcon/></a></p>
</li>
<li>
<p>后端收到请求，验证用户名和密码，验证失败，会返回错误信息，前端提示相应错误信息，如果验证成功，就会给前端返回一个token</p>
</li>
<li>
<p>前端拿到token，将token储存到Vuex和localStorage中，并跳转页面，即登录成功
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232302480.png" alt=""></p>
</li>
<li>
<p>前端每次跳转至需要具备登录状态的页面时，都需要判断当前token是否存在，不存在就跳转到登录页，存在则正常跳转(通常封装在路由守卫中)</p>
</li>
<li>
<p>另外，在向后端发送其他请求时，需要在请求头中带上token(项目中通常封装在请求拦截器中)，后端判断请求头中有无token，有则验证该token，验证成功就正常返回数据，验证失败(如已过期)则返回相应错误码。前端拿到错误信息，清除token并回退至登录页。</p>
</li>
</ol>
<h2 id="登录结果" tabindex="-1"><a class="header-anchor" href="#登录结果" aria-hidden="true">#</a> 登录结果</h2>
<ol>
<li>
<p>登录成功<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232327156.png" alt="">
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232330517.png" alt=""></p>
</li>
<li>
<p>登录失败<br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232341051.png" alt=""><br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232331144.png" alt=""><br>
<img src="https://cdn.jsdelivr.net/gh/jsdevin/imgBed/img/202206232332093.png" alt=""></p>
</li>
</ol>
</div></template>
