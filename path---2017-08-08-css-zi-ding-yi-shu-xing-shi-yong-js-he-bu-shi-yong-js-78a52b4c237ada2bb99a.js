webpackJsonp([0x99918d57a69],{762:function(n,a){n.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io/fswq-blog"}},markdownRemark:{html:'<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="http://vanseodesign.com/css/custom-properties-and-javascript/?utm_source=CSS-Weekly&utm_campaign=Issue-276&utm_medium=web"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      CSS Custom Properties—Dynamic Changes With And Without Javascript\n    </a>\n  </div>\n  <div className="original-auth">作者：Steven Bradley</div>\n</div>\n<blockquote>\n<p>你曾想过在页面加载过后去修改 Sass 或 Less 的变量值么？我曾经尝试过，但并没有成功，因为当预处理的代码编译成了 CSS，它的变量就不再是变量了，然而，<strong>自定义属性</strong> 就没有这样的限制。</p>\n</blockquote>\n<p>在该系列的文章中，我曾提及过自定义属性它最牛扳的特性就是它的 <strong>动态性</strong>。它的强大我们一眼就能对比出来，<strong>预处理变量</strong> 在编译后就成了固定值，而 <strong>自定义属性</strong> 可以在页面加载后继续更改变量的值。</p>\n<p>本篇文章我们将一起来看如何通过用户交互和 JavaScipt 来做一些帅气的改变。</p>\n<h2 id="不用-js-来更改-css-自定义属性"><a href="#%E4%B8%8D%E7%94%A8-js-%E6%9D%A5%E6%9B%B4%E6%94%B9-css-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>不用 JS 来更改 CSS 自定义属性</h2>\n<p>大多数的动态特效貌似多多少少都需要点 JavaScipt，所以，我们就从一个简单的例子入手，使用自定义属性改变 :hover 的效果。</p>\n<p>我们给一个 div 一个 width 和 height，然后，定义一个值为 #ccc 的自定义属性 background，接着，我们用 <strong>var</strong> 函数设置 background-color，并给它 1s 的 transition。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>\n <span class="token property">width</span><span class="token punctuation">:</span> 15em<span class="token punctuation">;</span>\n <span class="token property">height</span><span class="token punctuation">:</span> 15em<span class="token punctuation">;</span>\n\n  <span class="token property">--background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>\n  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transition</span><span class="token punctuation">:</span> background-color 1s<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>为了改变 background-color，我们再次定义 <strong>—background</strong> 的值。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">div:hover</span> <span class="token punctuation">{</span>\n  <span class="token property">--background</span><span class="token punctuation">:</span> #cce<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>虽然，上面的例子不用自定义属性也可以轻松的实现，但如果我们的改变增多，使用自定义属性书写的代码明显要更干净，更易读。</p>\n<h2 id="使用-js-来更改-css-自定义属性"><a href="#%E4%BD%BF%E7%94%A8-js-%E6%9D%A5%E6%9B%B4%E6%94%B9-css-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用 JS 来更改 CSS 自定义属性</h2>\n<p>用 JavaScipt 来更改自定义属性的值将会变的特别有趣。</p>\n<p>首先，我们必须要知道如何获取自定义属性的值，和如何设置。</p>\n<h3 id="获取自定义属性的值"><a href="#%E8%8E%B7%E5%8F%96%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E7%9A%84%E5%80%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>获取自定义属性的值</h3>\n<p>要获取自定义属性的值，你要知道两个 JavaScipt 函数：<a href="http://t.cn/RyWZ4kT" target="_blank" rel="noopener noreferrer">window.getComputedStyle</a> 和 <a href="http://t.cn/R9l85oZ" target="_blank" rel="noopener noreferrer">getPropertyValue</a>，前者可以获取元素所有 CSS 属性的值，后者可以获取特定属性的值。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">let</span> style <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">getComputedStyle</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token punctuation">[</span>pseudoElt<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> value <span class="token operator">=</span> style<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>如果你是 JavaScipt 方向，那么上面的代码你肯定不陌生，如果你并不熟悉，可以参考下面的 demo。</p>\n<p>首先，我们使用 <strong>:root</strong> 定义一个全局变量：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n <span class="token property">--color</span><span class="token punctuation">:</span> red\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>接着，我们使用 <code>getComputedStyle()</code> 和 <code>getPropertyValue()</code> 方法来读取 color 的值。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> styles <span class="token operator">=</span> <span class="token function">getComputedStyle</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 获取 root 的样式</span>\n<span class="token keyword">var</span> colorValue <span class="token operator">=</span> styles<span class="token punctuation">.</span><span class="token function">getPropertyValue</span><span class="token punctuation">(</span><span class="token string">\'--color\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">// 获取 --color 的值</span>\n</code></pre>\n      </div>\n<p>现在 colorValue 的值就为 <strong>—color</strong> 的值，不信你可以在控制台中打印。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>colorValue<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// red</span>\n</code></pre>\n      </div>\n<h3 id="如何设置自定义属性的值"><a href="#%E5%A6%82%E4%BD%95%E8%AE%BE%E7%BD%AE%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7%E7%9A%84%E5%80%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如何设置自定义属性的值</h3>\n<p>要设置自定义属性的值，你要用到 <a href="http://t.cn/R9lEgBy" target="_blank" rel="noopener noreferrer">style.setProperty</a> 这个方法。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code>style.<span class="token function">setProperty</span><span class="token punctuation">(</span>propertyName, value, priority<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><strong>setProperty</strong> 有三个参数，前两个是属性名称和属性的值，其中，属性值可以为空，第三个 <strong>priority</strong> 是可选的，允许你设置 <strong>important</strong>，但 CSS 准则建议尽量不设置该属性。</p>\n<p>设置一个新值比读取一个值更容易，因为你不需要将值保存到变量中。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">\'--color\'</span><span class="token punctuation">,</span> <span class="token string">\'green\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>事实上，在设置新值前，该属性可以不存在，你可以在 <strong>setProperty</strong> 中初始化自定义属性。</p>\n<h3 id="移除自定义属性"><a href="#%E7%A7%BB%E9%99%A4%E8%87%AA%E5%AE%9A%E4%B9%89%E5%B1%9E%E6%80%A7" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>移除自定义属性</h3>\n<p>还有一个 <a href="http://t.cn/R9ln8Pa" target="_blank" rel="noopener noreferrer">removeProperty()</a> 方法可以移除自定义属性，如果你不想要了的话。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> oldValue <span class="token operator">=</span> style<span class="token punctuation">.</span><span class="token function">removeProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h2 id="使用-color-picker-更改颜色值"><a href="#%E4%BD%BF%E7%94%A8-color-picker-%E6%9B%B4%E6%94%B9%E9%A2%9C%E8%89%B2%E5%80%BC" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用 Color Picker 更改颜色值</h2>\n<p>接下来，我们就一起来实践一下。</p>\n<p>首先，我们创建一个空的 div，用于显示用户输入的颜色。</p>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>color<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>div-bkgd<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#cccccc<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>接下来，我们在全局创建一个 <strong>—background</strong> 自定义属性，初始化为 #ccc，给 div 一个 width，height 和 margin，用 <strong>var()</strong> 给 background 赋值, 然后简单设置 input 的样式。</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n <span class="token property">--background</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">div</span> <span class="token punctuation">{</span>\n <span class="token property">width</span><span class="token punctuation">:</span> 20em<span class="token punctuation">;</span>\n <span class="token property">height</span><span class="token punctuation">:</span> 20em<span class="token punctuation">;</span>\n <span class="token property">margin</span><span class="token punctuation">:</span> 1em auto<span class="token punctuation">;</span>\n <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--background<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">input</span> <span class="token punctuation">{</span>\n <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n <span class="token property">width</span><span class="token punctuation">:</span> 10em<span class="token punctuation">;</span>\n <span class="token property">margin</span><span class="token punctuation">:</span> 1em auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>最后，我们使用 <strong>document.querySelector()</strong> 获取 input 元素，给该元素添加一个事件监听器，监听用户输入的变化，然后用 <strong>setProperty</strong> 将输入的值赋给自定义属性 <strong>—background</strong>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> colorInput <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#div-bkgd"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ncolorInput<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"change"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"--background"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>大功告成，你可以在复制代码在浏览器中运行查看效果。另外值得注意的是。color input 并不支持所有浏览器, 像在 <strong>IE</strong> 和 <strong>Safari</strong> 中就无法工作。</p>\n<h2 id="额外的-demo"><a href="#%E9%A2%9D%E5%A4%96%E7%9A%84-demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>额外的 demo</h2>\n<p>为了便于大家充分地理解，下面提供了一些额外的 demo，帮助大家快速掌握。</p>\n<ul>\n<li><a href="http://t.cn/R9YUySH" target="_blank" rel="noopener noreferrer">CSS 变量 demo</a></li>\n<li><a href="http://t.cn/R9lmFHb" target="_blank" rel="noopener noreferrer">Using CSS custom properties for theme previews</a></li>\n</ul>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>将自定义属性和 JavaScipt 或其他脚本语言结合, 你会瞬间坠入 <strong>自定义属性</strong> 的爱河。</p>',fields:{path:"/2017-08-08-css-zi-ding-yi-shu-xing--shi-yong-js-he-bu-shi-yong-js/"},internal:{content:'---\ntitle: CSS 自定义属性 -- 使用 JS 和不使用 JS\noriginal: false\ntag: FrontEnd,CSS\ndate: 2017-08-08T19:29:49+08:00\n---\n\n<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="http://vanseodesign.com/css/custom-properties-and-javascript/?utm_source=CSS-Weekly&utm_campaign=Issue-276&utm_medium=web"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      CSS Custom Properties—Dynamic Changes With And Without Javascript\n    </a>\n  </div>\n  <div className="original-auth">作者：Steven Bradley</div>\n</div>\n\n> 你曾想过在页面加载过后去修改 Sass 或 Less 的变量值么？我曾经尝试过，但并没有成功，因为当预处理的代码编译成了 CSS，它的变量就不再是变量了，然而，**自定义属性** 就没有这样的限制。\n\n在该系列的文章中，我曾提及过自定义属性它最牛扳的特性就是它的 **动态性**。它的强大我们一眼就能对比出来，**预处理变量** 在编译后就成了固定值，而 **自定义属性** 可以在页面加载后继续更改变量的值。\n\n本篇文章我们将一起来看如何通过用户交互和 JavaScipt 来做一些帅气的改变。\n\n## 不用 JS 来更改 CSS 自定义属性\n\n大多数的动态特效貌似多多少少都需要点 JavaScipt，所以，我们就从一个简单的例子入手，使用自定义属性改变 :hover 的效果。\n\n我们给一个 div 一个 width 和 height，然后，定义一个值为 #ccc 的自定义属性 background，接着，我们用 **var** 函数设置 background-color，并给它 1s 的 transition。\n\n```css\ndiv {\n width: 15em;\n height: 15em;\n\n  --background: #ccc;\n  background-color: var(--background);\n  transition: background-color 1s;\n}\n```\n\n为了改变 background-color，我们再次定义 **--background** 的值。\n\n```css\ndiv:hover {\n  --background: #cce;\n}\n```\n\n虽然，上面的例子不用自定义属性也可以轻松的实现，但如果我们的改变增多，使用自定义属性书写的代码明显要更干净，更易读。\n\n## 使用 JS 来更改 CSS 自定义属性\n\n用 JavaScipt 来更改自定义属性的值将会变的特别有趣。\n\n首先，我们必须要知道如何获取自定义属性的值，和如何设置。\n\n### 获取自定义属性的值\n\n要获取自定义属性的值，你要知道两个 JavaScipt 函数：[window.getComputedStyle](http://t.cn/RyWZ4kT) 和 [getPropertyValue](http://t.cn/R9l85oZ)，前者可以获取元素所有 CSS 属性的值，后者可以获取特定属性的值。\n\n```JavaScript\nlet style = window.getComputedStyle(element, [pseudoElt]);\nvar value = style.getPropertyValue(property);\n```\n\n如果你是 JavaScipt 方向，那么上面的代码你肯定不陌生，如果你并不熟悉，可以参考下面的 demo。\n\n首先，我们使用 **:root** 定义一个全局变量：\n\n```css\n:root {\n --color: red\n}\n```\n\n接着，我们使用 `getComputedStyle()` 和 `getPropertyValue()` 方法来读取 color 的值。\n\n```JavaScript\nvar styles = getComputedStyle(document.documentElement);  // 获取 root 的样式\nvar colorValue = styles.getPropertyValue(\'--color\');      // 获取 --color 的值\n```\n\n现在 colorValue 的值就为 **--color** 的值，不信你可以在控制台中打印。\n\n```JavaScript\nconsole.log(colorValue);  // red\n```\n\n### 如何设置自定义属性的值\n\n要设置自定义属性的值，你要用到 [style.setProperty](http://t.cn/R9lEgBy) 这个方法。\n\n```css\nstyle.setProperty(propertyName, value, priority);\n```\n\n**setProperty** 有三个参数，前两个是属性名称和属性的值，其中，属性值可以为空，第三个 **priority** 是可选的，允许你设置 **important**，但 CSS 准则建议尽量不设置该属性。\n\n设置一个新值比读取一个值更容易，因为你不需要将值保存到变量中。\n\n```JavaScript\ndocument.documentElement.style.setProperty(\'--color\', \'green\');\n```\n\n事实上，在设置新值前，该属性可以不存在，你可以在 **setProperty** 中初始化自定义属性。\n\n### 移除自定义属性\n\n还有一个 [removeProperty()](http://t.cn/R9ln8Pa) 方法可以移除自定义属性，如果你不想要了的话。\n\n```JavaScript\nvar oldValue = style.removeProperty(property);\n```\n\n## 使用 Color Picker 更改颜色值\n\n接下来，我们就一起来实践一下。\n\n首先，我们创建一个空的 div，用于显示用户输入的颜色。\n\n```html\n<div></div>\n<input type="color" id="div-bkgd" value="#cccccc">\n```\n\n接下来，我们在全局创建一个 **--background** 自定义属性，初始化为 #ccc，给 div 一个 width，height 和 margin，用 **var()** 给 background 赋值, 然后简单设置 input 的样式。\n\n```css\n:root {\n --background: #ccc;\n}\n\ndiv {\n width: 20em;\n height: 20em;\n margin: 1em auto;\n background: var(--background);\n}\n\ninput {\n display: block;\n width: 10em;\n margin: 1em auto;\n}\n```\n\n最后，我们使用 **document.querySelector()** 获取 input 元素，给该元素添加一个事件监听器，监听用户输入的变化，然后用 **setProperty** 将输入的值赋给自定义属性 **--background**。\n\n```JavaScript\nvar colorInput = document.querySelector("#div-bkgd");\n\ncolorInput.addEventListener("change", function() {\n document.documentElement.style.setProperty("--background", this.value);\n});\n```\n\n大功告成，你可以在复制代码在浏览器中运行查看效果。另外值得注意的是。color input 并不支持所有浏览器, 像在 **IE** 和 **Safari** 中就无法工作。\n\n## 额外的 demo\n\n为了便于大家充分地理解，下面提供了一些额外的 demo，帮助大家快速掌握。\n\n- [CSS 变量 demo](http://t.cn/R9YUySH)\n- [Using CSS custom properties for theme previews](http://t.cn/R9lmFHb)\n\n## 总结\n\n将自定义属性和 JavaScipt 或其他脚本语言结合, 你会瞬间坠入 **自定义属性** 的爱河。'},frontmatter:{title:"CSS 自定义属性 -- 使用 JS 和不使用 JS",tag:"FrontEnd,CSS",date:"2017-08-08",original:!1}}},pathContext:{path:"/2017-08-08-css-zi-ding-yi-shu-xing--shi-yong-js-he-bu-shi-yong-js/"}}}});