<template><div><h1 id="后台管理系统" tabindex="-1"><a class="header-anchor" href="#后台管理系统" aria-hidden="true">#</a> 后台管理系统</h1>
<h2 id="项目搭建规范" tabindex="-1"><a class="header-anchor" href="#项目搭建规范" aria-hidden="true">#</a> 项目搭建规范</h2>
<h2 id="一-代码规范" tabindex="-1"><a class="header-anchor" href="#一-代码规范" aria-hidden="true">#</a> 一. 代码规范</h2>
<h3 id="_1-1-集成editorconfig配置" tabindex="-1"><a class="header-anchor" href="#_1-1-集成editorconfig配置" aria-hidden="true">#</a> 1.1. 集成editorconfig配置</h3>
<p>EditorConfig 有助于为不同 IDE 编辑器上处理同一项目的多个开发人员维护一致的编码风格。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token comment"># http://editorconfig.org</span>

root = true

<span class="token punctuation">[</span>*<span class="token punctuation">]</span> <span class="token comment"># 表示所有文件适用</span>
charset = utf<span class="token punctuation">-</span><span class="token number">8</span> <span class="token comment"># 设置文件字符集为 utf-8</span>
indent_style = space <span class="token comment"># 缩进风格（tab | space）</span>
indent_size = 2 <span class="token comment"># 缩进大小</span>
end_of_line = lf <span class="token comment"># 控制换行类型(lf | cr | crlf)</span>
trim_trailing_whitespace = true <span class="token comment"># 去除行首的任意空白字符</span>
insert_final_newline = true <span class="token comment"># 始终在文件末尾插入一个新行</span>

<span class="token punctuation">[</span><span class="token important">*.md</span><span class="token punctuation">]</span> <span class="token comment"># 表示仅 md 文件适用以下规则</span>
max_line_length = off
trim_trailing_whitespace = false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VSCode需要安装一个插件：EditorConfig for VS Code</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsq2gh989yj30pj05ggmb.jpg" alt="image-20210722215138665"></p>
<h3 id="_1-2-使用prettier工具" tabindex="-1"><a class="header-anchor" href="#_1-2-使用prettier工具" aria-hidden="true">#</a> 1.2. 使用prettier工具</h3>
<p>Prettier 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。</p>
<p>1.安装prettier</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.配置.prettierrc文件：</p>
<ul>
<li>useTabs：使用tab缩进还是空格缩进，选择false；</li>
<li>tabWidth：tab是空格的情况下，是几个空格，选择2个；</li>
<li>printWidth：当行字符的长度，推荐80，也有人喜欢100或者120；</li>
<li>singleQuote：使用单引号还是双引号，选择true，使用单引号；</li>
<li>trailingComma：在多行输入的尾逗号是否添加，设置为 <code v-pre>none</code>；</li>
<li>semi：语句末尾是否要加分号，默认值true，选择false表示不加；</li>
</ul>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"useTabs"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"tabWidth"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"printWidth"</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>
  <span class="token property">"singleQuote"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"trailingComma"</span><span class="token operator">:</span> <span class="token string">"none"</span><span class="token punctuation">,</span>
  <span class="token property">"semi"</span><span class="token operator">:</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.创建.prettierignore忽略文件</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/dist/*
.local
.output.js
/node_modules/**

**/*.svg
**/*.sh

/public/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.VSCode需要安装prettier的插件</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsq2acx21rj30ow057mxp.jpg" alt="image-20210722214543454"></p>
<p>5.测试prettier是否生效</p>
<ul>
<li>测试一：在代码中保存代码；</li>
<li>测试二：配置一次性修改的命令；</li>
</ul>
<p>在package.json中配置一个scripts：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>    <span class="token property">"prettier"</span><span class="token operator">:</span> <span class="token string">"prettier --write ."</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_1-3-使用eslint检测" tabindex="-1"><a class="header-anchor" href="#_1-3-使用eslint检测" aria-hidden="true">#</a> 1.3. 使用ESLint检测</h3>
<p>1.在前面创建项目的时候，我们就选择了ESLint，所以Vue会默认帮助我们配置需要的ESLint环境。</p>
<p>2.VSCode需要安装ESLint插件：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsq2oq26odj30pw05faaq.jpg" alt="image-20210722215933360"></p>
<p>3.解决eslint和prettier冲突的问题：</p>
<p>安装插件：（vue在创建项目时，如果选择prettier，那么这两个插件会自动安装）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i eslint-plugin-prettier eslint-config-prettier -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加prettier插件：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>  extends<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">"plugin:vue/vue3-essential"</span><span class="token punctuation">,</span>
    <span class="token string">"eslint:recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"@vue/typescript/recommended"</span><span class="token punctuation">,</span>
    <span class="token string">"@vue/prettier"</span><span class="token punctuation">,</span>
    <span class="token string">"@vue/prettier/@typescript-eslint"</span><span class="token punctuation">,</span>
    'plugin<span class="token operator">:</span>prettier/recommended'
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-git-husky和eslint" tabindex="-1"><a class="header-anchor" href="#_1-4-git-husky和eslint" aria-hidden="true">#</a> 1.4. git Husky和eslint</h3>
<p>虽然我们已经要求项目使用eslint了，但是不能保证组员提交代码之前都将eslint中的问题解决掉了：</p>
<ul>
<li>
<p>也就是我们希望保证代码仓库中的代码都是符合eslint规范的；</p>
</li>
<li>
<p>那么我们需要在组员执行 <code v-pre>git commit </code> 命令的时候对其进行校验，如果不符合eslint规范，那么自动通过规范进行修复；</p>
</li>
</ul>
<p>那么如何做到这一点呢？可以通过Husky工具：</p>
<ul>
<li>husky是一个git hook工具，可以帮助我们触发git提交的各个阶段：pre-commit、commit-msg、pre-push</li>
</ul>
<p>如何使用husky呢？</p>
<p>这里我们可以使用自动配置命令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx husky-init <span class="token operator">&amp;&amp;</span> <span class="token function">npm</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里会做三件事：</p>
<p>1.安装husky相关的依赖：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqq0o5jxmj30bb04qwen.jpg" alt="image-20210723112648927"></p>
<p>2.在项目目录下创建 <code v-pre>.husky</code> 文件夹：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npx huksy install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqq16zo75j307703mt8m.jpg" alt="image-20210723112719634"></p>
<p>3.在package.json中添加一个脚本：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqq26phpxj30dj06fgm3.jpg" alt="image-20210723112817691"></p>
<p>接下来，我们需要去完成一个操作：在进行commit时，执行lint脚本：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqq3hn229j30nf04z74q.jpg" alt="image-20210723112932943"></p>
<p>这个时候我们执行git commit的时候会自动对代码进行lint校验。</p>
<h3 id="_1-5-git-commit规范" tabindex="-1"><a class="header-anchor" href="#_1-5-git-commit规范" aria-hidden="true">#</a> 1.5. git commit规范</h3>
<h4 id="_1-5-1-代码提交风格" tabindex="-1"><a class="header-anchor" href="#_1-5-1-代码提交风格" aria-hidden="true">#</a> 1.5.1. 代码提交风格</h4>
<p>通常我们的git commit会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqw17gaqjj30to0cj3zp.jpg" alt=""></p>
<p>但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen</p>
<ul>
<li>Commitizen 是一个帮助我们编写规范 commit message 的工具；</li>
</ul>
<p>1.安装Commitizen</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> commitizen -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.安装cz-conventional-changelog，并且初始化cz-conventional-changelog：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx commitizen init cz-conventional-changelog --save-dev --save-exact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令会帮助我们安装cz-conventional-changelog：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqvz2odi4j30ek00zmx2.jpg" alt="image-20210723145249096"></p>
<p>并且在package.json中进行配置：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqvzftay5j30iu04k74d.jpg" alt=""></p>
<p>这个时候我们提交代码需要使用 <code v-pre>npx cz</code>：</p>
<ul>
<li>第一步是选择type，本次更新的类型</li>
</ul>
<table>
<thead>
<tr>
<th>Type</th>
<th>作用</th>
</tr>
</thead>
<tbody>
<tr>
<td>feat</td>
<td>新增特性 (feature)</td>
</tr>
<tr>
<td>fix</td>
<td>修复 Bug(bug fix)</td>
</tr>
<tr>
<td>docs</td>
<td>修改文档 (documentation)</td>
</tr>
<tr>
<td>style</td>
<td>代码格式修改(white-space, formatting, missing semi colons, etc)</td>
</tr>
<tr>
<td>refactor</td>
<td>代码重构(refactor)</td>
</tr>
<tr>
<td>perf</td>
<td>改善性能(A code change that improves performance)</td>
</tr>
<tr>
<td>test</td>
<td>测试(when adding missing tests)</td>
</tr>
<tr>
<td>build</td>
<td>变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）</td>
</tr>
<tr>
<td>ci</td>
<td>更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等</td>
</tr>
<tr>
<td>chore</td>
<td>变更构建流程或辅助工具(比如更改测试环境)</td>
</tr>
<tr>
<td>revert</td>
<td>代码回退</td>
</tr>
</tbody>
</table>
<ul>
<li>第二步选择本次修改的范围（作用域）</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8ca15oj30r600wmx4.jpg" alt="image-20210723150147510"></p>
<ul>
<li>第三步选择提交的信息</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8mq3zlj60ni01hmx402.jpg" alt="image-20210723150204780"></p>
<ul>
<li>第四步提交详细的描述信息</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8y05bjj30kt01fjrb.jpg" alt="image-20210723150223287"></p>
<ul>
<li>第五步是否是一次重大的更改</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqw9z5vbij30bm00q744.jpg" alt="image-20210723150322122"></p>
<ul>
<li>第六步是否影响某个open issue</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqwar8xp1j30fq00ya9x.jpg" alt="image-20210723150407822"></p>
<p>我们也可以在scripts中构建一个命令来执行 cz：</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNgy1gsqwc4gtkxj30e207174t.jpg" alt="image-20210723150526211"></p>
<h4 id="_1-5-2-代码提交验证" tabindex="-1"><a class="header-anchor" href="#_1-5-2-代码提交验证" aria-hidden="true">#</a> 1.5.2. 代码提交验证</h4>
<p>如果我们按照cz来规范了提交风格，但是依然有同事通过 <code v-pre>git commit</code> 按照不规范的格式提交应该怎么办呢？</p>
<ul>
<li>我们可以通过commitlint来限制提交；</li>
</ul>
<p>1.安装 @commitlint/config-conventional 和 @commitlint/cli</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @commitlint/config-conventional @commitlint/cli -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.在根目录创建commitlint.config.js文件，配置commitlint</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">extends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@commitlint/config-conventional'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.使用husky生成commit-msg文件，验证提交信息：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">"npx --no-install commitlint --edit <span class="token variable">$1</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="二-第三方库集成" tabindex="-1"><a class="header-anchor" href="#二-第三方库集成" aria-hidden="true">#</a> 二. 第三方库集成</h2>
<h3 id="_2-1-vue-config-js配置" tabindex="-1"><a class="header-anchor" href="#_2-1-vue-config-js配置" aria-hidden="true">#</a> 2.1. vue.config.js配置</h3>
<p>vue.config.js有三种配置方式：</p>
<ul>
<li>方式一：直接通过CLI提供给我们的选项来配置：
<ul>
<li>比如publicPath：配置应用程序部署的子目录（默认是 <code v-pre>/</code>，相当于部署在 <code v-pre>https://www.my-app.com/</code>）；</li>
<li>比如outputDir：修改输出的文件夹；</li>
</ul>
</li>
<li>方式二：通过configureWebpack修改webpack的配置：
<ul>
<li>可以是一个对象，直接会被合并；</li>
<li>可以是一个函数，会接收一个config，可以通过config来修改配置；</li>
</ul>
</li>
<li>方式三：通过chainWebpack修改webpack的配置：
<ul>
<li>是一个函数，会接收一个基于  <a href="https://github.com/mozilla-neutrino/webpack-chain" target="_blank" rel="noopener noreferrer">webpack-chain<ExternalLinkIcon/></a> 的config对象，可以对配置进行修改；</li>
</ul>
</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">outputDir</span><span class="token operator">:</span> <span class="token string">'./build'</span><span class="token punctuation">,</span>
  <span class="token comment">// configureWebpack: {</span>
  <span class="token comment">//   resolve: {</span>
  <span class="token comment">//     alias: {</span>
  <span class="token comment">//       views: '@/views'</span>
  <span class="token comment">//     }</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>
  <span class="token comment">// configureWebpack: (config) => {</span>
  <span class="token comment">//   config.resolve.alias = {</span>
  <span class="token comment">//     '@': path.resolve(__dirname, 'src'),</span>
  <span class="token comment">//     views: '@/views'</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// },</span>
  <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'@'</span><span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">'src'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'views'</span><span class="token punctuation">,</span> <span class="token string">'@/views'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-vue-router集成" tabindex="-1"><a class="header-anchor" href="#_2-2-vue-router集成" aria-hidden="true">#</a> 2.2. vue-router集成</h3>
<p>安装vue-router的最新版本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vue-router@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建router对象：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRouter<span class="token punctuation">,</span> createWebHashHistory <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> RouteRecordRaw <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-router'</span>

<span class="token keyword">const</span> routes<span class="token operator">:</span> RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/'</span><span class="token punctuation">,</span>
    redirect<span class="token operator">:</span> <span class="token string">'/main'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/main'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/main/main.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    path<span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">'../views/login/login.vue'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  routes<span class="token punctuation">,</span>
  history<span class="token operator">:</span> <span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> router
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装router：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在App.vue中配置跳转：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-vuex集成" tabindex="-1"><a class="header-anchor" href="#_2-3-vuex集成" aria-hidden="true">#</a> 2.3. vuex集成</h3>
<p>安装vuex：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> vuex@next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建store对象：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">createStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      name<span class="token operator">:</span> <span class="token string">'coderwhy'</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装store：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在App.vue中使用：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ $store.state.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-4-element-plus集成" tabindex="-1"><a class="header-anchor" href="#_2-4-element-plus集成" aria-hidden="true">#</a> 2.4. element-plus集成</h3>
<p>Element Plus，一套为开发者、设计师和产品经理准备的基于 Vue 3.0 的桌面端组件库：</p>
<ul>
<li>相信很多同学在Vue2中都使用过element-ui，而element-plus正是element-ui针对于vue3开发的一个UI组件库；</li>
<li>它的使用方式和很多其他的组件库是一样的，所以学会element-plus，其他类似于ant-design-vue、NaiveUI、VantUI都是差不多的；</li>
</ul>
<p>安装element-plus</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> element-plus
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-4-1-全局引入" tabindex="-1"><a class="header-anchor" href="#_2-4-1-全局引入" aria-hidden="true">#</a> 2.4.1. 全局引入</h4>
<p>一种引入element-plus的方式是全局引入，代表的含义是所有的组件和插件都会被自动注册：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token string">'element-plus/lib/theme-chalk/index.css'</span>

<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">'./router'</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">'./store'</span>

<span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>router<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-4-2-局部引入" tabindex="-1"><a class="header-anchor" href="#_2-4-2-局部引入" aria-hidden="true">#</a> 2.4.2. 局部引入</h4>
<p>也就是在开发中用到某个组件对某个组件进行引入：</p>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/login<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>登录<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/main<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>首页<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>{{ $store.state.name }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span><span class="token punctuation">></span></span>默认按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>主要按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>成功按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>信息按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>warning<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>警告按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>危险按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ElButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'App'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    ElButton
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>less<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是我们会发现是没有对应的样式的，引入样式有两种方式：</p>
<ul>
<li>全局引用样式（像之前做的那样）；</li>
<li>局部引用样式（通过babel的插件）；</li>
</ul>
<p>1.安装babel的插件：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> babel-plugin-import -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2.配置babel.config.js</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">'import'</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">'element-plus'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">customStyleName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">element-plus/lib/theme-chalk/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'@vue/cli-plugin-babel/preset'</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这里依然有个弊端：</p>
<ul>
<li>这些组件我们在多个页面或者组件中使用的时候，都需要导入并且在components中进行注册；</li>
<li>所以我们可以将它们在全局注册一次；</li>
</ul>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>
  ElButton<span class="token punctuation">,</span>
  ElTable<span class="token punctuation">,</span>
  ElAlert<span class="token punctuation">,</span>
  ElAside<span class="token punctuation">,</span>
  ElAutocomplete<span class="token punctuation">,</span>
  ElAvatar<span class="token punctuation">,</span>
  ElBacktop<span class="token punctuation">,</span>
  ElBadge<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'element-plus'</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>

<span class="token keyword">const</span> components <span class="token operator">=</span> <span class="token punctuation">[</span>
  ElButton<span class="token punctuation">,</span>
  ElTable<span class="token punctuation">,</span>
  ElAlert<span class="token punctuation">,</span>
  ElAside<span class="token punctuation">,</span>
  ElAutocomplete<span class="token punctuation">,</span>
  ElAvatar<span class="token punctuation">,</span>
  ElBacktop<span class="token punctuation">,</span>
  ElBadge
<span class="token punctuation">]</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> cpn <span class="token keyword">of</span> components<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>cpn<span class="token punctuation">.</span>name<span class="token punctuation">,</span> cpn<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-axios集成" tabindex="-1"><a class="header-anchor" href="#_2-5-axios集成" aria-hidden="true">#</a> 2.5. axios集成</h3>
<p>安装axios：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>封装axios：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> axios<span class="token punctuation">,</span> <span class="token punctuation">{</span> AxiosInstance<span class="token punctuation">,</span> AxiosRequestConfig<span class="token punctuation">,</span> AxiosResponse <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'axios'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Result <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./types'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useUserStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'/@/store/modules/user'</span>

<span class="token keyword">class</span> <span class="token class-name">HYRequest</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> instance<span class="token operator">:</span> AxiosInstance

  <span class="token keyword">private</span> <span class="token keyword">readonly</span> options<span class="token operator">:</span> AxiosRequestConfig

  <span class="token function">constructor</span><span class="token punctuation">(</span>options<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>options <span class="token operator">=</span> options
    <span class="token keyword">this</span><span class="token punctuation">.</span>instance <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> token <span class="token operator">=</span> <span class="token function">useUserStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>getToken
        <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Bearer </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>token<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> config
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>instance<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token comment">// 拦截响应的数据</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>data
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> res<span class="token punctuation">.</span>data
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>instance
        <span class="token punctuation">.</span><span class="token generic-function"><span class="token function">request</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> AxiosResponse<span class="token operator">&lt;</span>Result<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">>>></span></span></span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res <span class="token keyword">as</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
          <span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token generic-function"><span class="token function">get</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'GET'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token generic-function"><span class="token function">post</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'POST'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token generic-function"><span class="token function">patch</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'PATCH'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">delete</span><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">(</span>config<span class="token operator">:</span> AxiosRequestConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span>config<span class="token punctuation">,</span> method<span class="token operator">:</span> <span class="token string">'DELETE'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> HYRequest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-vscode配置" tabindex="-1"><a class="header-anchor" href="#_2-6-vscode配置" aria-hidden="true">#</a> 2.6. VSCode配置</h3>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"workbench.iconTheme"</span><span class="token operator">:</span> <span class="token string">"vscode-great-icons"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontSize"</span><span class="token operator">:</span> <span class="token number">17</span><span class="token punctuation">,</span>
  <span class="token property">"eslint.migration.2_x"</span><span class="token operator">:</span> <span class="token string">"off"</span><span class="token punctuation">,</span>
  <span class="token property">"[javascript]"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"dbaeumer.vscode-eslint"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"files.autoSave"</span><span class="token operator">:</span> <span class="token string">"afterDelay"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.tabSize"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">"terminal.integrated.fontSize"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">"editor.renderWhitespace"</span><span class="token operator">:</span> <span class="token string">"all"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.quickSuggestions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"strings"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"debug.console.fontSize"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span>
  <span class="token property">"window.zoomLevel"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">"emmet.includeLanguages"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"javascript"</span><span class="token operator">:</span> <span class="token string">"javascriptreact"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"explorer.confirmDragAndDrop"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.tree.indent"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span>
  <span class="token property">"javascript.updateImportsOnFileMove.enabled"</span><span class="token operator">:</span> <span class="token string">"always"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.wordWrap"</span><span class="token operator">:</span> <span class="token string">"on"</span><span class="token punctuation">,</span>
  <span class="token property">"path-intellisense.mappings"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"@"</span><span class="token operator">:</span> <span class="token string">"${workspaceRoot}/src"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"hediet.vscode-drawio.local-storage"</span><span class="token operator">:</span> <span class="token string">"eyIuZHJhd2lvLWNvbmZpZyI6IntcImxhbmd1YWdlXCI6XCJcIixcImN1c3RvbUZvbnRzXCI6W10sXCJsaWJyYXJpZXNcIjpcImdlbmVyYWw7YmFzaWM7YXJyb3dzMjtmbG93Y2hhcnQ7ZXI7c2l0ZW1hcDt1bWw7YnBtbjt3ZWJpY29uc1wiLFwiY3VzdG9tTGlicmFyaWVzXCI6W1wiTC5zY3JhdGNocGFkXCJdLFwicGx1Z2luc1wiOltdLFwicmVjZW50Q29sb3JzXCI6W1wiRkYwMDAwXCIsXCIwMENDNjZcIixcIm5vbmVcIixcIkNDRTVGRlwiLFwiNTI1MjUyXCIsXCJGRjMzMzNcIixcIjMzMzMzM1wiLFwiMzMwMDAwXCIsXCIwMENDQ0NcIixcIkZGNjZCM1wiLFwiRkZGRkZGMDBcIl0sXCJmb3JtYXRXaWR0aFwiOjI0MCxcImNyZWF0ZVRhcmdldFwiOmZhbHNlLFwicGFnZUZvcm1hdFwiOntcInhcIjowLFwieVwiOjAsXCJ3aWR0aFwiOjExNjksXCJoZWlnaHRcIjoxNjU0fSxcInNlYXJjaFwiOnRydWUsXCJzaG93U3RhcnRTY3JlZW5cIjp0cnVlLFwiZ3JpZENvbG9yXCI6XCIjZDBkMGQwXCIsXCJkYXJrR3JpZENvbG9yXCI6XCIjNmU2ZTZlXCIsXCJhdXRvc2F2ZVwiOnRydWUsXCJyZXNpemVJbWFnZXNcIjpudWxsLFwib3BlbkNvdW50ZXJcIjowLFwidmVyc2lvblwiOjE4LFwidW5pdFwiOjEsXCJpc1J1bGVyT25cIjpmYWxzZSxcInVpXCI6XCJcIn0ifQ=="</span><span class="token punctuation">,</span>
  <span class="token property">"hediet.vscode-drawio.theme"</span><span class="token operator">:</span> <span class="token string">"Kennedy"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.fontFamily"</span><span class="token operator">:</span> <span class="token string">"Source Code Pro, 'Courier New', monospace"</span><span class="token punctuation">,</span>
  <span class="token property">"editor.smoothScrolling"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.formatOnSave"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.defaultFormatter"</span><span class="token operator">:</span> <span class="token string">"esbenp.prettier-vscode"</span><span class="token punctuation">,</span>
  <span class="token property">"workbench.colorTheme"</span><span class="token operator">:</span> <span class="token string">"Atom One Dark"</span><span class="token punctuation">,</span>
  <span class="token property">"vetur.completion.autoImport"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"security.workspace.trust.untrustedFiles"</span><span class="token operator">:</span> <span class="token string">"open"</span><span class="token punctuation">,</span>
  <span class="token property">"eslint.lintTask.enable"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"eslint.alwaysShowStatus"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">"editor.codeActionsOnSave"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"source.fixAll.eslint"</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三-接口文档" tabindex="-1"><a class="header-anchor" href="#三-接口文档" aria-hidden="true">#</a> 三. 接口文档</h2>
<p>https://documenter.getpostman.com/view/12387168/TzsfmQvw</p>
<p>baseURL的值：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>http://152.136.185.210:5000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置全局token的方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> pm<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
pm<span class="token punctuation">.</span>globals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"token"</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span>data<span class="token punctuation">.</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接口文档v2版本：（有部分更新）</p>
<p>https://documenter.getpostman.com/view/12387168/TzzDKb12</p>
</div></template>
