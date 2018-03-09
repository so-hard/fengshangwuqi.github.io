webpackJsonp([0xc0a4ccc4aa7f],{768:function(n,a){n.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io"}},markdownRemark:{html:'<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://github.com/jbtronics/CrookedStyleSheets"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      Crooked Style Sheets\n    </a>\n  </div>\n  <div className="original-auth">作者：jbtronics</div>\n</div>\n<blockquote>\n<p>除了使用 JS 追踪用户，现在有人提出了还可以使用 <strong>CSS 进行网页追踪和分析</strong>，译者认为，这种方式更为 <strong>优雅</strong>，更为 <strong>简洁</strong>，且 <strong>不好屏蔽</strong>，值得尝试一波，了解更多，可查看 <a href="https://github.com/jbtronics/CrookedStyleSheets" target="_blank" rel="noopener noreferrer">仓库地址</a> 和 <a href="http://crookedss.bplaced.net/" target="_blank" rel="noopener noreferrer">demo</a>。</p>\n</blockquote>\n<h2 id="我们可以用它来做什么"><a href="#%E6%88%91%E4%BB%AC%E5%8F%AF%E4%BB%A5%E7%94%A8%E5%AE%83%E6%9D%A5%E5%81%9A%E4%BB%80%E4%B9%88" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>我们可以用它来做什么</h2>\n<p>我们可以收集关于用户的一些基本信息，例如 <strong>屏幕分辨率</strong>（当浏览器最大化时）以及用户使用的什么浏览器（引擎）。</p>\n<p>此外，我们可以监测用户是否点击某个链接或鼠标悬停在某个元素上，用来 <strong>追踪用户悬停的链接</strong>，甚至可以 <strong>追踪用户如何移动鼠标</strong>（在页面使用不可见的字段），然而，使用目前我的方法只能追踪用户的第一次点击或悬停，我相信，修改我的方法最终可以实现追踪用户的每次点击。</p>\n<p>最后，我们还可以监测用户是否安装了某个特殊的字体，基于这个信息，我们可以追踪用户使用的 <strong>操作系统</strong>，因为不同操作系统使用的字体也稍有不同，例如 Windows 的 Calibri。</p>\n<h2 id="这又是如何实现的"><a href="#%E8%BF%99%E5%8F%88%E6%98%AF%E5%A6%82%E4%BD%95%E5%AE%9E%E7%8E%B0%E7%9A%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>这又是如何实现的</h2>\n<h3 id="普通的做法"><a href="#%E6%99%AE%E9%80%9A%E7%9A%84%E5%81%9A%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>普通的做法</h3>\n<p>用 CSS 你可以使用 <strong>url(“foo.bar”)</strong> 属性引用外部资源添加图像，有趣的是，这个资源只在需要的时候被加载（例如，当链接被点击时）。</p>\n<p>所以，我们可以用 CSS 创建一个选择器，当用户点击某个链接时调用某个特定的 URL：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#link2:active::after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=link2_clicked\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>服务端 php 脚本会在调用 URL 时保存时间戳。</p>\n<h3 id="浏览器监测"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9B%91%E6%B5%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器监测</h3>\n<p>浏览器监测是基于 <strong>@supports Media-Query</strong> 的，我们可以监测浏览器的一些特殊的属性，例如 -webkit-appearance：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token atrule"><span class="token rule">@supports</span> <span class="token punctuation">(</span><span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">#chrome_detect::after</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=browser_chrome\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="字体监测"><a href="#%E5%AD%97%E4%BD%93%E7%9B%91%E6%B5%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>字体监测</h3>\n<p>对于字体监测，需要定义一个新的字体，如果一个字体存在，文本会尝试使用该字体进行样式设置，然而，当用户在系统上找不到该字体时，定义的字体会作为备用，在这种情况下，浏览器会尝试去加载定义的字体并在服务器上调用追踪脚本：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token comment">/** Font detection **/</span>\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> Font1<span class="token punctuation">;</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=font1\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">#font_detection1</span> <span class="token punctuation">{</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> Calibri, Font1<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3 id="悬停监测"><a href="#%E6%82%AC%E5%81%9C%E7%9B%91%E6%B5%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>悬停监测</h3>\n<p>对于悬停监测（基于 <a href="https://github.com/jeyroik" target="_blank" rel="noopener noreferrer">jeyroik</a> 的想法），我们需定义一个 <strong>关键帧</strong>，每次使用这个关键帧都要去请求一个 URL：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> pulsate</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=00\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">20%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=20\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">40%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=40\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">60%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=60\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">80%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=80\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">100%</span> <span class="token punctuation">{</span>\n    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=100\')</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>然后，我们使用定义的关键帧创建动画，我们可以定义动画持续的时间，这也是我们测量的最大时间：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#duration:hover::after</span> <span class="token punctuation">{</span>\n  <span class="token property">-moz-animation</span><span class="token punctuation">:</span> pulsate 5s infinite<span class="token punctuation">;</span>\n  <span class="token property">-webkit-animation</span><span class="token punctuation">:</span> pulsate 5s infinite<span class="token punctuation">;</span>\n  <span class="token comment">/*animation: pulsate 5s infinite;*/</span>\n  <span class="token property">animation-name</span><span class="token punctuation">:</span> pulsate<span class="token punctuation">;</span>\n  <span class="token property">animation-duration</span><span class="token punctuation">:</span> 10s<span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?duration=-1\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>我们可以通过补充关键帧的设置，来优化分辨率的监测。</p>\n<h3 id="输入监测"><a href="#%E8%BE%93%E5%85%A5%E7%9B%91%E6%B5%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>输入监测</h3>\n<p>我们可以使用 CSS 提供的 <strong>:selected</strong> 选择器监测用户选中的复选框：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#checkbox:checked</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=checkbox\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>为了监测字符串，我们结合了 <strong>HTML pattern</strong> 属性，它可以帮助我们解决一些基本的输入验证，再结合 <strong>:valid</strong> 选择器，浏览器当输入匹配成功时会去请求我们的追踪站点：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text_input<span class="token punctuation">"</span></span> <span class="token attr-name">pattern</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>^test$<span class="token punctuation">"</span></span> <span class="token attr-name">required</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">#text_input:valid</span> <span class="token punctuation">{</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url">url(\'track.php?action=text_input\')</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<p>点击 <a href="http://crookedss.bplaced.net/" target="_blank" rel="noopener noreferrer">这里</a> 你可以查看该仓库的一个 demo，index.html 实践了的上述的方法，访问 results.php 可以查看结果。</p>\n<p>如果属性后面没有任何 content 或出现 php 警告，意味着这个属性的值为 false 或用户还没访问页面或链接（这个，确实很烦，但你可以知道这些方法的原理）。</p>\n<p>此外，分辨率监测还不是特别的准确，因为目前只能监测最常用的屏幕宽度。最后还想说的是，监测用户实际屏幕的宽度并没有想象中的那么简单，因为 CSS 监测的高度为浏览器窗口的高度，而通常由于系统面板 / 任务栏的原因，使得浏览器窗口要小于显示器。</p>\n<h2 id="有什么办法可以防止使用上面的方法进行追踪"><a href="#%E6%9C%89%E4%BB%80%E4%B9%88%E5%8A%9E%E6%B3%95%E5%8F%AF%E4%BB%A5%E9%98%B2%E6%AD%A2%E4%BD%BF%E7%94%A8%E4%B8%8A%E9%9D%A2%E7%9A%84%E6%96%B9%E6%B3%95%E8%BF%9B%E8%A1%8C%E8%BF%BD%E8%B8%AA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>有什么办法可以防止使用上面的方法进行追踪</h2>\n<p>目前我知道的唯一办法就是 <strong>完全禁用 CSS</strong>（你可以使用像 <a href="https://github.com/gorhill/uMatrix" target="_blank" rel="noopener noreferrer">uMatrix</a> 的插件来实现），但它的代价也是十分巨大的，没有 CSS，网页就没有那么赏心悦目了，甚至导致无法正常使用，所以，禁用 CSS 算不上一个真正的选择，除非，你实在担心你的隐私（例如，当你在使用 Tor 浏览器，也许你应该禁用 CSS）。</p>\n<p>一个更好的解决方案是，在网页加载时，浏览器不会去加载需要的外部资源，这样，就不可能监测到用户的个人行为，这种对内容加载的修改可以通过浏览器来实现，也可以通过插件来实现（类似 <a href="https://noscript.net/" target="_blank" rel="noopener noreferrer">NoScript</a> 或 uMatrix）。</p>\n<p>上述方法也存在一个明显的问题，那就是对性能会造成一定的影响，因为浏览器会在初始化页面时加载大量的内容（有些内容是页面根本不需要的）。</p>',fields:{path:"/2018-01-19-shi-yong-css-zhui-zong-yong-hu/"},internal:{content:"---\ntitle: 使用 CSS 追踪用户\noriginal: false\ntag: FrontEnd,CSS,track\ndate: 2018-01-19T17:55:21+08:00\n---\n\n<div class=\"original-info\">\n  <div className=\"original-address\">\n    原文地址：\n    <a\n      href=\"https://github.com/jbtronics/CrookedStyleSheets\"\n      target=\"_blank\"\n      rel=\"noopener noreferrer\"\n    >\n      Crooked Style Sheets\n    </a>\n  </div>\n  <div className=\"original-auth\">作者：jbtronics</div>\n</div>\n\n> 除了使用 JS 追踪用户，现在有人提出了还可以使用 **CSS 进行网页追踪和分析**，译者认为，这种方式更为 **优雅**，更为 **简洁**，且 **不好屏蔽**，值得尝试一波，了解更多，可查看 [仓库地址](https://github.com/jbtronics/CrookedStyleSheets) 和 [demo](http://crookedss.bplaced.net/)。\n\n## 我们可以用它来做什么\n\n我们可以收集关于用户的一些基本信息，例如 **屏幕分辨率**（当浏览器最大化时）以及用户使用的什么浏览器（引擎）。\n\n此外，我们可以监测用户是否点击某个链接或鼠标悬停在某个元素上，用来 **追踪用户悬停的链接**，甚至可以 **追踪用户如何移动鼠标**（在页面使用不可见的字段），然而，使用目前我的方法只能追踪用户的第一次点击或悬停，我相信，修改我的方法最终可以实现追踪用户的每次点击。\n\n最后，我们还可以监测用户是否安装了某个特殊的字体，基于这个信息，我们可以追踪用户使用的 **操作系统**，因为不同操作系统使用的字体也稍有不同，例如 Windows 的 Calibri。\n\n## 这又是如何实现的\n\n### 普通的做法\n\n用 CSS 你可以使用 **url(\"foo.bar\")** 属性引用外部资源添加图像，有趣的是，这个资源只在需要的时候被加载（例如，当链接被点击时）。\n\n所以，我们可以用 CSS 创建一个选择器，当用户点击某个链接时调用某个特定的 URL：\n\n```css\n#link2:active::after {\n  content: url('track.php?action=link2_clicked');\n}\n```\n\n服务端 php 脚本会在调用 URL 时保存时间戳。\n\n### 浏览器监测\n\n浏览器监测是基于 **@supports Media-Query** 的，我们可以监测浏览器的一些特殊的属性，例如 -webkit-appearance：\n\n```css\n@supports (-webkit-appearance: none) {\n  #chrome_detect::after {\n    content: url('track.php?action=browser_chrome');\n  }\n}\n```\n\n### 字体监测\n\n对于字体监测，需要定义一个新的字体，如果一个字体存在，文本会尝试使用该字体进行样式设置，然而，当用户在系统上找不到该字体时，定义的字体会作为备用，在这种情况下，浏览器会尝试去加载定义的字体并在服务器上调用追踪脚本：\n\n```css\n/** Font detection **/\n@font-face {\n  font-family: Font1;\n  src: url('track.php?action=font1');\n}\n\n#font_detection1 {\n  font-family: Calibri, Font1;\n}\n```\n\n### 悬停监测\n\n对于悬停监测（基于 [jeyroik](https://github.com/jeyroik) 的想法），我们需定义一个 **关键帧**，每次使用这个关键帧都要去请求一个 URL：\n\n```css\n@keyframes pulsate {\n  0% {\n    background-image: url('track.php?duration=00');\n  }\n  20% {\n    background-image: url('track.php?duration=20');\n  }\n  40% {\n    background-image: url('track.php?duration=40');\n  }\n  60% {\n    background-image: url('track.php?duration=60');\n  }\n  80% {\n    background-image: url('track.php?duration=80');\n  }\n  100% {\n    background-image: url('track.php?duration=100');\n  }\n}\n```\n\n然后，我们使用定义的关键帧创建动画，我们可以定义动画持续的时间，这也是我们测量的最大时间：\n\n```css\n#duration:hover::after {\n  -moz-animation: pulsate 5s infinite;\n  -webkit-animation: pulsate 5s infinite;\n  /*animation: pulsate 5s infinite;*/\n  animation-name: pulsate;\n  animation-duration: 10s;\n  content: url('track.php?duration=-1');\n}\n```\n\n我们可以通过补充关键帧的设置，来优化分辨率的监测。\n\n### 输入监测\n\n我们可以使用 CSS 提供的 **:selected** 选择器监测用户选中的复选框：\n\n```css\n#checkbox:checked {\n  content: url('track.php?action=checkbox');\n}\n```\n\n为了监测字符串，我们结合了 **HTML pattern** 属性，它可以帮助我们解决一些基本的输入验证，再结合 **:valid** 选择器，浏览器当输入匹配成功时会去请求我们的追踪站点：\n\n```html\n<input type=\"text\" id=\"text_input\" pattern=\"^test$\" required>\n```\n\n```css\n#text_input:valid {\n  background: green;\n  background-image: url('track.php?action=text_input');\n}\n```\n\n## Demo\n\n点击 [这里](http://crookedss.bplaced.net/) 你可以查看该仓库的一个 demo，index.html 实践了的上述的方法，访问 results.php 可以查看结果。\n\n如果属性后面没有任何 content 或出现 php 警告，意味着这个属性的值为 false 或用户还没访问页面或链接（这个，确实很烦，但你可以知道这些方法的原理）。\n\n此外，分辨率监测还不是特别的准确，因为目前只能监测最常用的屏幕宽度。最后还想说的是，监测用户实际屏幕的宽度并没有想象中的那么简单，因为 CSS 监测的高度为浏览器窗口的高度，而通常由于系统面板 / 任务栏的原因，使得浏览器窗口要小于显示器。\n\n## 有什么办法可以防止使用上面的方法进行追踪\n\n目前我知道的唯一办法就是 **完全禁用 CSS**（你可以使用像 [uMatrix](https://github.com/gorhill/uMatrix) 的插件来实现），但它的代价也是十分巨大的，没有 CSS，网页就没有那么赏心悦目了，甚至导致无法正常使用，所以，禁用 CSS 算不上一个真正的选择，除非，你实在担心你的隐私（例如，当你在使用 Tor 浏览器，也许你应该禁用 CSS）。\n\n一个更好的解决方案是，在网页加载时，浏览器不会去加载需要的外部资源，这样，就不可能监测到用户的个人行为，这种对内容加载的修改可以通过浏览器来实现，也可以通过插件来实现（类似 [NoScript](https://noscript.net/) 或 uMatrix）。\n\n上述方法也存在一个明显的问题，那就是对性能会造成一定的影响，因为浏览器会在初始化页面时加载大量的内容（有些内容是页面根本不需要的）。\n"},frontmatter:{title:"使用 CSS 追踪用户",tag:"FrontEnd,CSS,track",date:"2018-01-19",original:!1}}},pathContext:{path:"/2018-01-19-shi-yong-css-zhui-zong-yong-hu/"}}}});