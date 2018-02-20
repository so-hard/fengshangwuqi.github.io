webpackJsonp([0x8af94145d4e7],{485:function(n,a){n.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io/fswq-blog"}},markdownRemark:{html:'<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://codeburst.io/how-to-create-a-beautiful-animated-loader-with-nothing-but-css-d1962fc5a66c"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      How to create a beautiful animated loader with nothing but CSS\n    </a>\n  </div>\n  <div className="original-auth">作者：Julien Benchetrit</div>\n</div>\n<h2 id="为什么要做加载"><a href="#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%81%9A%E5%8A%A0%E8%BD%BD" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为什么要做加载</h2>\n<p>只想说, 本文最重要的是对 <strong>CSS</strong>, <strong>伪元素</strong>, <strong>keyframe</strong> 的分享, 以及读者对这些东西的真正掌握, 我并不是怂恿大家在每一个页面的前面都去加一个酷炫的加载。</p>\n<h2 id="我是如何做的"><a href="#%E6%88%91%E6%98%AF%E5%A6%82%E4%BD%95%E5%81%9A%E7%9A%84" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>我是如何做的</h2>\n<p>不同的页面, 对加载的设计也就可能不同. 本文设计的加载适合大多数页面。</p>\n<p>并且, 本文假设读者已经非常熟悉伪元素, CSS 动画属性和 keyframe, 如果读者想重温, 下面两篇文章可做参考：</p>\n<ul>\n<li><a href="http://t.cn/R98iMag" target="_blank" rel="noopener noreferrer">学会使用 CSS 中的 :after 和 :before</a></li>\n<li><a href="http://t.cn/R98iW8V" target="_blank" rel="noopener noreferrer">keyframe 动画直通车</a></li>\n</ul>\n<h3 id="开始入门"><a href="#%E5%BC%80%E5%A7%8B%E5%85%A5%E9%97%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>开始入门</h3>\n<p>在开始一起构建它前, 我们先看看它最后的效果：</p>\n<p><img src="/result-5fa273f16f8685cd1546be43ecb0cccc.gif" alt="效果"></p>\n<p>正如你所看到的, 我们将经历 <strong>4</strong> 个步骤：</p>\n<ul>\n<li>边框一个接一个地出现；</li>\n<li>红/橙/白色方块向里滑入；</li>\n<li>方块向外划出；</li>\n<li>边框消失；</li>\n</ul>\n<p>我们只需要 <strong>animation-direction: alternate</strong> 来完成步骤 1 和 2, 步骤 3 和 步骤 4 我们可以使用 <strong>reverse</strong>, 另外, 我们可以使用 <strong>animation-iteration-count: infinite</strong> 重复动画。</p>\n<p>首先, 我们先书写好基本的 HTML 结构：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token doctype">&lt;!doctype html></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n    <span class="token comment">&lt;!-- &lt;link rel="preload"> for CSS, JS, and font files  --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text/css<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token style language-css">\n      <span class="token comment">/*\n       *  All the CSS for the loader\n       *  Minified and vendor prefixed\n       */</span>\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loader<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token comment">&lt;!-- HTML for the loader --></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token punctuation">/></span></span>\n    <span class="token comment">&lt;!-- Tags for CSS and JS files --></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="构建-logo-本身"><a href="#%E6%9E%84%E5%BB%BA-logo-%E6%9C%AC%E8%BA%AB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>构建 logo 本身</h3>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/fswq-blog/static/logo-0a4c41676c8226a358b57e7f40fa84e5-3ad8b.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 166px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 100%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYUlEQVQ4y2PIy8kxNTa2t7W1tbZGICsrLAhVys7amiE4OLjS1HJHcMQq38CdwZFB6pr5xUXXrlw9eeLE6VOnIAjIvnb1andnp6eb2/lz54Bo5/bt2hoaDKFhYQvcfd5nFd5LyvyUXZxpYNI7edL//////PnzHwYg7PXr1sVERUFEXrx4YWpkxBAaGjrT2eNpau6VuNTn6Xkpeoad/X1A6d+/f/+DASAbKLJm9erIsDCI5ufPnhkbGEA1P0vNvRqX+iI9L1XPsGtCP1ab165ZExkeDtX8/Plg0wzx869fv/7CAJAN8vOqVXA/P3361EhfH0XzS7Dm/imTsdq8ccP6+JhoiMjLly9MjAxRND9Pzc0xtfAKCO7pmdzc0t3S2gNBQHZ3z+To6CQDQ/P2jv629r6qqgZNdXU0zTm5FnZ25gpFkVrZIZo5oQiUHaJRGKVXnmACZOSFaab4a2goK6D6OS0n1dC6s9j6/6WkX8di/56IQ0Z/jsf+Ohbz+3jc/zMJz7aFG+koo2tOM7KuzTT/tD/y8ZaQp9tCMdGTraGvdoVdWOZvoIVNc0OO+c/D0S93hL3eFY6JXu0M/7Av4tqqQEPtAdY83dnjcUrOpdiUp6nZqUbWddnmXw9GPdsW+mJHGCZ6vj3s7Z7wyysCDIF+Dg8PX+jh9yG7+H5y9ufsomxT+7Yi6/9nEz4fjP52OAYTfTkECvAHm0JN9NQYAgICaowt9gVFbPAJPBAUHqyulxmuc3aB54FprodmuGGig9Pdjs1239DlqKYoxVBeWmJvZ+fm7u4KBu5ubiCWM2Hk4eYGAHVPpDfBQhqNAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="logo"\n        title=""\n        src="/fswq-blog/static/logo-0a4c41676c8226a358b57e7f40fa84e5-3ad8b.png"\n        srcset="/fswq-blog/static/logo-0a4c41676c8226a358b57e7f40fa84e5-8727d.png 165w,\n/fswq-blog/static/logo-0a4c41676c8226a358b57e7f40fa84e5-3ad8b.png 166w"\n        sizes="(max-width: 166px) 100vw, 166px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>一开始我们先实现 logo 本身, 而不是最终版本的效果。</p>\n<p>父级元素 logo, 不同颜色的方块都是它的子元素：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>white<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>orange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>我们用 less 来实现：</p>\n<div class="gatsby-highlight">\n      <pre class="language-less"><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">border</span><span class="token punctuation">:</span> 4px solid black<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n\n  <span class="token selector">&amp; > div</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">.red</span> <span class="token punctuation">{</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 27%<span class="token punctuation">;</span>\n    <span class="token property">border-right</span><span class="token punctuation">:</span> 4px solid black<span class="token punctuation">;</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> #EA5664<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">/* Similar code for div.orange and div.white */</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>logo 的效果图如下：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/fswq-blog/static/logoResult-e0509984455c5b0d81e2fe06baa7bfd2-ed342.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 75.1793400286944%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABMElEQVQ4y61Ty0rDQBTN90iliWs3lUrdZJcGssoP6NZ1/Q6XgjAhCCEPySpoERGpG8XiAxe1K6mIImLMZI7TJL4goyH2wuGeGeYc7h3ulVRVhWEY0DQNuq6j29XR623ANE00GvOQZQXNplyC/F5RFtBuL6PTWUGrtQTJdV0EwS583+c5gOd5iKIo44QQWJYlBCEWbNtGGIaZznEcSJhxSJRSiJAkSSV8vaeQGGMoA6YZ+OQfwQou0glbZrkq4wnHW/zKj+kP09KWhYZpLr6J9jDYtnF6fYvRaPwPQ/4n07jasnC0vobj/ibOT/YLw7S+4ZD4OFhdxHhnDkNumldPaxgWbT1N7nExOMTlWR+PD3f1W/4ujJMUzy/xn2aVKmQlI4PfKhTNU13MfvWqrldVvAMMe15qBFMcfgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="logo result"\n        title=""\n        src="/fswq-blog/static/logoResult-e0509984455c5b0d81e2fe06baa7bfd2-73c38.png"\n        srcset="/fswq-blog/static/logoResult-e0509984455c5b0d81e2fe06baa7bfd2-5902b.png 165w,\n/fswq-blog/static/logoResult-e0509984455c5b0d81e2fe06baa7bfd2-f6c9c.png 330w,\n/fswq-blog/static/logoResult-e0509984455c5b0d81e2fe06baa7bfd2-73c38.png 660w,\n/fswq-blog/static/logoResult-e0509984455c5b0d81e2fe06baa7bfd2-ed342.png 697w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h3 id="边框动画"><a href="#%E8%BE%B9%E6%A1%86%E5%8A%A8%E7%94%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>边框动画</h3>\n<p>接下来, 我们将进入棘手(<strong>有趣</strong>)的部分。</p>\n<p>CSS 不允许我们直接对 div.logo 的边框进行设置达到我们想要的效果, 所以我们必须去除原有的边框, 采用其他的办法来实现。</p>\n<p>我们要把四个边框分割开来, 然后让它们有序地出现, 所以, 我们可以使用覆盖整个 div 的两个透明的 <strong>伪元素</strong>。</p>\n<p>废话少说, 就让我们开始吧, 我们先做出它最初始的样子. 我们让 <strong>div.logo::before</strong> 绝对位于 div.logo 的左上角，代表方块的上边框和右边框, 让 <strong>div.logo::after</strong> 绝对定位 div.logo 的右下角, 代表方块的下边框和左边框。</p>\n<p>现在, less 代码如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-less"><code><span class="token selector">.logo</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>\n  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>\n\n  <span class="token selector">&amp;::before,\n  &amp;::after</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border<span class="token operator">-</span>box<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 4px solid transparent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">border-top-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n    <span class="token property">border-right-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token selector">&amp;::after</span> <span class="token punctuation">{</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">border-bottom-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token comment">// Red for demo purposes only</span>\n    <span class="token property">border-left-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>下面是 <code>效果</code>：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/fswq-blog/static/border-f6345977aa3bba161a3f934867ceed30-2e922.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 74.78510028653295%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAABBklEQVQ4y61Ty66CMBTsB3kj3D/QaLwbdkDCSj+F3ym6ITwMKz7EVxD3xJBoCA1zCwYlBsRUTzKZk7Zn2jltiaIoMAwDqqpC13Vomg7TNDGfLzAY/ECSZAyHUgtu47L8i8lkitnsD6PRGMRxHPj+Gp7ncfbhui7CMKxySiksy+oEpRaWyxWCIKjqbNsGwZeDMMbQhTzP38JjPQMpigJtKKPmZjTn2tBpuS5knLMsq/Bqo7vlPsFLHON0POLEOYoicUGUFkquRTgOZV6PiwhWtNsBSQKcz4i3288tI02R7vdINhtkXFRcsFGYXq9IuPC9FaI9fD5N0dO/Xsttb078lkW/3rcF/wEZCGd23E/LHgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="border"\n        title=""\n        src="/fswq-blog/static/border-f6345977aa3bba161a3f934867ceed30-73c38.png"\n        srcset="/fswq-blog/static/border-f6345977aa3bba161a3f934867ceed30-5902b.png 165w,\n/fswq-blog/static/border-f6345977aa3bba161a3f934867ceed30-f6c9c.png 330w,\n/fswq-blog/static/border-f6345977aa3bba161a3f934867ceed30-73c38.png 660w,\n/fswq-blog/static/border-f6345977aa3bba161a3f934867ceed30-2e922.png 698w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>接下来, 我们就用 <strong>keyframe</strong> 做 <strong>div.logo::before</strong> 的第一个动画。</p>\n<p>我们将 width 和 height 初始都为 0, 然后用 keyframe 将 width 和\nheight 调整到 100%。</p>\n<p>随着我们在相应的时间把边框从透明变为黑色, 我们想要的最开始的效果就出来了。</p>\n<p>该代码展示了伪元素的初始动画：</p>\n<div class="gatsby-highlight">\n      <pre class="language-less"><code><span class="token selector">div.logo</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;::before,\n  &amp;::after</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n    <span class="token property">animation-timing-function</span><span class="token punctuation">:</span> linear<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">&amp;::before</span> <span class="token punctuation">{</span>\n    <span class="token comment">/* ... */</span>\n    <span class="token property">animation</span><span class="token punctuation">:</span> border<span class="token operator">-</span>before 1.5s infinite<span class="token punctuation">;</span>\n    <span class="token property">animation-direction</span><span class="token punctuation">:</span> alternate<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token atrule">@keyframes border-before</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">border-right-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">24.99%</span> <span class="token punctuation">{</span>\n    <span class="token property">border-right-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">25%</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">border-right-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">50%,\n  100%</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>我们对 <strong>div.logo::after</strong> 重复相同的操作, 不要忘了调整时间和反转 width 和 height。现在, 我们就有了最外层边框的整个动画。</p>\n<h3 id="方块动画"><a href="#%E6%96%B9%E5%9D%97%E5%8A%A8%E7%94%BB" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>方块动画</h3>\n<p>最后，我们一起来设置方块的动画。</p>\n<p>我们最大的挑战是无法连接 <strong>keyframes</strong>。因为，我们最终想要的动画中每个小方框都有一定的顺序， 为此， 我们作如下改变：</p>\n<ul>\n<li>0 to 25%：上边框和右边框显现；</li>\n<li>25 to 50%：下边框和左边框显现；</li>\n<li>50 to 65%：红色小方块显现；</li>\n<li>65 to 80%：橙色小方块显现；</li>\n<li>75 to 90%：白色小方块显现；</li>\n</ul>\n<p>红色小方框 <code>keyframe</code> 如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token atrule"><span class="token rule">@keyframes</span> red</span> <span class="token punctuation">{</span>\n  <span class="token selector">0%,\n  50%</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">50.01%</span> <span class="token punctuation">{</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">65%,\n  100%</span> <span class="token punctuation">{</span>\n\t<span class="token property">width</span><span class="token punctuation">:</span> 27%<span class="token punctuation">;</span>\n    <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>重复上面的代码，就可完成我们整个动画， 是不是很完美。</p>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>感谢你的阅读，最后附上 <a href="https://codepen.io/FengShangWuQi/pen/NvjYoN" target="_blank" rel="noopener noreferrer">源码</a>，但个人建议，不要直接阅读源码，根据上面的提示在 <code>codepen</code> 中自己来一遍才是最佳实践。</p>',fields:{path:"/2017-08-12-ru-he-zhi-yong-css-wan-cheng-piao-liang-de-jia-zai/"},frontmatter:{title:"如何只用 CSS 完成漂亮的加载",tag:"FrontEnd,CSS",date:"2017-08-12",original:!1}}},pathContext:{path:"/2017-08-12-ru-he-zhi-yong-css-wan-cheng-piao-liang-de-jia-zai/"}}}});
//# sourceMappingURL=path---2017-08-12-ru-he-zhi-yong-css-wan-cheng-piao-liang-de-jia-zai-5a7c5369af5e7d1cad1f.js.map