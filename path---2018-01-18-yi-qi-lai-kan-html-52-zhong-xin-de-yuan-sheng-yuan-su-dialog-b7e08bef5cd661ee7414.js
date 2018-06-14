webpackJsonp([0x74019a06a031],{765:function(n,a){n.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io"}},markdownRemark:{html:'<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://keithjgrant.com/posts/2018/meet-the-new-dialog-element"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      Meet the New Dialog Element\n    </a>\n  </div>\n  <div className="original-auth">作者：Keith</div>\n</div>\n<blockquote>\n<p>不到一个月前，<strong>HTML 5.2</strong> 正式成为 <strong>W3C</strong> 的推荐标准（<strong>REC</strong>）,其中，推出了一个新的原生模态对话框元素 <strong>dialog</strong>，乍一看，可能感觉它就是一个新增的元素，然而，作者最近在玩的时候，发现它确实是一个值得期待和很有意思的元素，在这里分享给大家。</p>\n</blockquote>\n<p>这是 <strong>diglog</strong> 最基础的示例：</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dialog</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>\n\tNative dialog box!\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dialog</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>其中，<strong>open</strong> 属性表示此时 dialog 是可见的，如果没有 open，dialog 将会隐藏，你可以使用 JavaScipt 将它显现出来，此时，dialog 渲染如下：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/dialog-e8ef25dd6a89db40163649ea6bac1edc-73b36.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 186px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 39.784946236559136%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABPElEQVQoz62QTUsCURSG58+5cOtKEVwp4o9QEBVcChEYItMmqAwqa3AGmlpUGzchCG2F1Bkw0RmdqRkZn8YLLeyDgrrwcC/veXnvOUeSZZlCoUC5XKZUKv2JYrGIFIlEaLVa6LpOp9NB07RPqKr6pf6Ooih0u13i8ThSKpVivV7zH6dWqyElEglmsxkr3+P+9o6xaTIYDHieTELdYrFY0u8/YhojnoZD3JdXptOp8CzDmmGYjMaGCNysTQTO5xbBykdptzk4OqZZ3+PmKlyBotF76LGzW2dfbqJqKo1GE/1a57J9xvnpBYeHJ+FHYxFYqVSQkskktm3/eizbmuM4zpYWBIG4q9UqUiwWC9s28H1fGF3X/RYnxAt9nudteS3LEoH5fB4pk8mw6TKbzbJ5/0Q6nRZ81HK5HNFolDfTwgPffFla1gAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="dialog"\n        title=""\n        src="/static/dialog-e8ef25dd6a89db40163649ea6bac1edc-73b36.png"\n        srcset="/static/dialog-e8ef25dd6a89db40163649ea6bac1edc-50360.png 165w,\n/static/dialog-e8ef25dd6a89db40163649ea6bac1edc-73b36.png 186w"\n        sizes="(max-width: 186px) 100vw, 186px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>它绝对定位于页面之上，就如我们期望的一样，出现在内容的上方，并且水平居中，默认情况下，它和内容一样宽。</p>\n<h2 id="基本操作"><a href="#%E5%9F%BA%E6%9C%AC%E6%93%8D%E4%BD%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>基本操作</h2>\n<p>JavaScipt 有几个方法和属性可以很方便地处理 dialog 元素，使用最多的可能还是 <strong>showModal()</strong> 和 <strong>close()</strong>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> modal <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'dialog\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// makes modal appear (adds `open` attribute)</span>\nmodal<span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// hides modal (removes `open` attribute)</span>\nmodal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>当你使用 showModal() 来打开 dialog 时，将会在 dialog 周围加一层阴影，阻止用户与非 diglog 元素的交互，默认情况下，阴影是完全透明的，你可以使用 CSS 来修改它。</p>\n<p>按 <strong>Esc</strong> 可以关闭 dialog，你也可以提供一个按钮来触发 <strong>close()</strong>。</p>\n<p>还有一个方法是 <strong>show()</strong>，它也可以让 dialog 显现，但与 showModal() 不同的是它没有阴影，用户可以与非 dialog 元素进行交互。</p>\n<h2 id="浏览器支持和-polyfill"><a href="#%E6%B5%8F%E8%A7%88%E5%99%A8%E6%94%AF%E6%8C%81%E5%92%8C-polyfill" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>浏览器支持和 Polyfill</h2>\n<p>目前，只有 <strong>chrome</strong> 支持 dialog，<strong>Firefox</strong> 需要在 <strong>about:config</strong> 里允许 <strong>dom.dialog_element.enabled</strong> 才能正常使用，我猜想，Firefox 在不久的将来就会支持。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/can-i-use-ec483de2a2acfe37e18490b054b509f5-64449.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 38.62500000000001%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAIAAAB2/0i6AAAACXBIWXMAAAsSAAALEgHS3X78AAABt0lEQVQY01WO3U7aYByHe75b2GV4uivYDSxZdrzdwC5h2ZlhJ4sxcUwdYWqCiCBMqdr2RRn9Atq3LeUttFBb+l1ssWxHK2cuefIc/H75f2Cy2B6J12hCeC4Xuf3Q7QcOv8Htx/7wOctAWJi0Ne8loeg4rGYBTBjg4uBywDUF/lduBeIqvBnLhGMxzycjb2Pf5hyLzbf4Hm85NDb8faAjaoqoyRgsTC4J4NIXlqGYxjBN4GMkPoZifiqJcmAaS0mch0IawTzEFP5golJTFRhjwjW5ucHYJmPqXcvoaZA00d0cAW1EoREli/hYvkUiaaB7TSXz/7GZytsL1naZwOlMPbDjV0nvNk4ZcrtReLkL61dhfP+AeiaidYWcKcBV+rbK6Aph611sZ+srXjgh907vvp1fViuF+PBnp9zdrZXeFD+/+FL7WAbFM5KvgWkDoIuOdkGhc4DqnWmTn7Sx3mHr9H35+F3p+6vi/of90qpyUjs+ev3jZrs6bLbpcpMutRj5in3AGaPNzDZmc8xrOCew7I/ylEmxLzTenrU+1Svr1nDVXSfSKpOe1lLeZn/lLJayQMrC/1iF8B/4mIccvmtF3QAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="can i use"\n        title=""\n        src="/static/can-i-use-ec483de2a2acfe37e18490b054b509f5-73c38.png"\n        srcset="/static/can-i-use-ec483de2a2acfe37e18490b054b509f5-5902b.png 165w,\n/static/can-i-use-ec483de2a2acfe37e18490b054b509f5-f6c9c.png 330w,\n/static/can-i-use-ec483de2a2acfe37e18490b054b509f5-73c38.png 660w,\n/static/can-i-use-ec483de2a2acfe37e18490b054b509f5-64449.png 800w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>上图为 <a href="http://caniuse.com/#search=dialog" target="_blank" rel="noopener noreferrer">caniuse.com</a> 关于 dialog 特性主流浏览器的兼容情况。</p>\n<p>幸运的是，我们可以使用 <a href="https://github.com/GoogleChrome/dialog-polyfill" target="_blank" rel="noopener noreferrer">dialog-polyfill</a> 来缓解这种尴尬，它既提供了 JavaScript 的行为，也包含了默认的样式，我们可以使用 npm 来安装它，也可以使用 script 标签来引用它。目前，它已支持各主流浏览器，包括 IE 9 及其以上版本。</p>\n<p>只是，在使用它时，每个 dialog 需要使用下面语句进行初始化：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">dialogPolyfill<span class="token punctuation">.</span><span class="token function">registerDialog</span><span class="token punctuation">(</span>dialog<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>并且，它并不会取代浏览器原生的行为。</p>\n<h2 id="样式"><a href="#%E6%A0%B7%E5%BC%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>样式</h2>\n<p>打开和关闭模态框是最基本的，但这是肯定不够的，dialog 最开始时样式是不怎么好看的，因此，我们需要自定义它的样式，此外，我们可以通过设置伪元素 <strong>::backdrop</strong> 来优化 dialog 显现时背影的样式。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">dialog</span> <span class="token punctuation">{</span>\n\t<span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n\t<span class="token property">width</span><span class="token punctuation">:</span> 478px<span class="token punctuation">;</span>\n\t<span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n\t<span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n\t<span class="token property">border-radius</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>\n\t<span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">dialog::backdrop</span> <span class="token punctuation">{</span>\n\t<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0, 0, 0, 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>为了兼容老的浏览器，使用 polyfill 时，::backdrop 是不起作用的，但 polyfill 会在 dialog 后面添加一个 <strong>.backdrop</strong> 元素，我们可以像下面这样定位它：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code class="language-css"><span class="token selector">dialog + .backdrop</span> <span class="token punctuation">{</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>0, 0, 0, 0.4<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>接下来，是时候向 dialog 里添加更多的内容，一般包括 header， body 和 footer。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dialog</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sweet-modal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-header<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>sweet dialog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-body<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>This is a sweet dialog, which is much better.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>modal-footer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>get-it<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Get<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dialog</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<p>最后，在添加一些 CSS，你就能得到你想要的。</p>\n<h2 id="进阶操作"><a href="#%E8%BF%9B%E9%98%B6%E6%93%8D%E4%BD%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>进阶操作</h2>\n<p>通常，我们期望能从 dialog 中获取一些用户的信息。关闭 dialog 时，我们可以给 close() 传递一个 string，然后通过 dialog 元素的 <strong>returnValue</strong> 属性来获取。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">modal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string">\'Accepted\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>modal<span class="token punctuation">.</span>returnValue<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// logs `Accepted`</span></code></pre>\n      </div>\n<p>当然，还存在额外的事件我们可以监听，其中，最常用的可能是 close（关闭 dialog 时触发），还有 cancel （用户按 Esc 关闭 dialog 时触发） 。</p>\n<p>此外，我们可能还期望点击 dialog 旁边的阴影来关闭，当然，这也是有解决办法的，点击阴影会触发 dialog 的点击事件，如果 dialog 的子元素占满了整个 dialog，那么我们可以通过监听 dialog 的点击，当 target 为 modal 时来关闭。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">modal<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'click\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>event<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>target <span class="token operator">===</span> modal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tmodal<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string">\'cancelled\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>当然，这不是完美的，但它确实有效，如果你有更好的方式，欢迎在评论中交流。</p>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>说了这么多，不如自己实际演练一番，作者也做了一个 <a href="https://codepen.io/FengShangWuQi/pen/qpMgZB" target="_blank" rel="noopener noreferrer">demo</a>，欢迎参考。</p>',fields:{slug:"/2018-01-18-yi-qi-lai-kan-html-52-zhong-xin-de-yuan-sheng-yuan-su-dialog/"},internal:{content:'---\ntitle: 一起来看 HTML 5.2 中新的原生元素 <dialog>\noriginal: false\ntag: FrontEnd,HTML 5,dialog\ndate: 2018-01-18T17:51:32+08:00\n---\n\n<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://keithjgrant.com/posts/2018/meet-the-new-dialog-element"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      Meet the New Dialog Element\n    </a>\n  </div>\n  <div className="original-auth">作者：Keith</div>\n</div>\n\n> 不到一个月前，**HTML 5.2** 正式成为 **W3C** 的推荐标准（**REC**）,其中，推出了一个新的原生模态对话框元素 **dialog**，乍一看，可能感觉它就是一个新增的元素，然而，作者最近在玩的时候，发现它确实是一个值得期待和很有意思的元素，在这里分享给大家。\n\n这是 **diglog** 最基础的示例：\n\n```html\n<dialog open>\n\tNative dialog box!\n</dialog>\n```\n\n其中，**open** 属性表示此时 dialog 是可见的，如果没有 open，dialog 将会隐藏，你可以使用 JavaScipt 将它显现出来，此时，dialog 渲染如下：\n\n![dialog](./images/dialog.png)\n\n它绝对定位于页面之上，就如我们期望的一样，出现在内容的上方，并且水平居中，默认情况下，它和内容一样宽。\n\n## 基本操作\n\nJavaScipt 有几个方法和属性可以很方便地处理 dialog 元素，使用最多的可能还是 **showModal()** 和 **close()**：\n\n ```javascript\nconst modal = document.querySelector(\'dialog\');\n\n// makes modal appear (adds `open` attribute)\nmodal.showModal();\n\n// hides modal (removes `open` attribute)\nmodal.close();\n ```\n\n当你使用 showModal() 来打开 dialog 时，将会在 dialog 周围加一层阴影，阻止用户与非 diglog 元素的交互，默认情况下，阴影是完全透明的，你可以使用 CSS 来修改它。\n\n按 **Esc** 可以关闭 dialog，你也可以提供一个按钮来触发 **close()**。\n\n还有一个方法是 **show()**，它也可以让 dialog 显现，但与 showModal() 不同的是它没有阴影，用户可以与非 dialog 元素进行交互。\n\n## 浏览器支持和 Polyfill\n\n目前，只有 **chrome** 支持 dialog，**Firefox** 需要在 **about:config** 里允许 **dom.dialog_element.enabled** 才能正常使用，我猜想，Firefox 在不久的将来就会支持。\n\n![can i use](./images/can-i-use.png)\n\n上图为 [caniuse.com](http://caniuse.com/#search=dialog) 关于 dialog 特性主流浏览器的兼容情况。\n\n幸运的是，我们可以使用 [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill) 来缓解这种尴尬，它既提供了 JavaScript 的行为，也包含了默认的样式，我们可以使用 npm 来安装它，也可以使用 script 标签来引用它。目前，它已支持各主流浏览器，包括 IE 9 及其以上版本。\n\n只是，在使用它时，每个 dialog 需要使用下面语句进行初始化：\n\n```javascript\ndialogPolyfill.registerDialog(dialog);\n```\n\n并且，它并不会取代浏览器原生的行为。\n\n## 样式\n打开和关闭模态框是最基本的，但这是肯定不够的，dialog 最开始时样式是不怎么好看的，因此，我们需要自定义它的样式，此外，我们可以通过设置伪元素 **::backdrop** 来优化 dialog 显现时背影的样式。\n\n```css\ndialog {\n\tpadding: 0;\n\twidth: 478px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tborder-radius: 5px;\n\tborder: 0;\n}\n\ndialog::backdrop {\n\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n```\n\n为了兼容老的浏览器，使用 polyfill 时，::backdrop 是不起作用的，但 polyfill 会在 dialog 后面添加一个 **.backdrop** 元素，我们可以像下面这样定位它：\n\n```css\ndialog + .backdrop {\n  background-color: rgba(0, 0, 0, 0.4);\n}\n```\n\n接下来，是时候向 dialog 里添加更多的内容，一般包括 header， body 和 footer。\n\n```html\n<dialog id="sweet-modal">\n    <h3 class="modal-header">sweet dialog</h3>\n\t<div class="modal-body">\n\t    <p>This is a sweet dialog, which is much better.</p>\n\t</div>\n\t<footer class="modal-footer">\n\t    <button id="get-it" type="button">Get</button>\n\t</footer>\n</dialog>\n```\n\n最后，在添加一些 CSS，你就能得到你想要的。\n\n## 进阶操作\n通常，我们期望能从 dialog 中获取一些用户的信息。关闭 dialog 时，我们可以给 close() 传递一个 string，然后通过 dialog 元素的 **returnValue** 属性来获取。\n\n```javascript\nmodal.close(\'Accepted\');\n\nconsole.log(modal.returnValue); // logs `Accepted`\n```\n\n当然，还存在额外的事件我们可以监听，其中，最常用的可能是 close（关闭 dialog 时触发），还有 cancel （用户按 Esc 关闭 dialog 时触发） 。\n\n此外，我们可能还期望点击 dialog 旁边的阴影来关闭，当然，这也是有解决办法的，点击阴影会触发 dialog 的点击事件，如果 dialog 的子元素占满了整个 dialog，那么我们可以通过监听 dialog 的点击，当 target 为 modal 时来关闭。\n\n```javascript\nmodal.addEventListener(\'click\', (event) => {\n\tif (event.target === modal) {\n\t\tmodal.close(\'cancelled\');\n\t}\n});\n```\n\n当然，这不是完美的，但它确实有效，如果你有更好的方式，欢迎在评论中交流。\n\n## 总结\n说了这么多，不如自己实际演练一番，作者也做了一个 [demo](https://codepen.io/FengShangWuQi/pen/qpMgZB)，欢迎参考。\n\n'},frontmatter:{title:"一起来看 HTML 5.2 中新的原生元素 <dialog>",tag:"FrontEnd,HTML 5,dialog",date:"2018-01-18",original:!1}}},pathContext:{slug:"/2018-01-18-yi-qi-lai-kan-html-52-zhong-xin-de-yuan-sheng-yuan-su-dialog/"}}}});