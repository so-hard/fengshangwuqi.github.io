webpackJsonp([0xd70cba3b87c1],{767:function(n,a){n.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io"}},markdownRemark:{html:'<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://blog.kentcdodds.com/reacts-%EF%B8%8F-new-context-api-70c9fe01596b"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      React\'s ⚛️ new Context API\n    </a>\n  </div>\n  <div className="original-auth">作者：kentcdodds</div>\n</div>\n<p>这不再是一个 <strong>实验性的 API</strong>，并且它更符合工程化的理念，目前它已成为 <strong>React 一级棒的 API</strong>。</p>\n<blockquote>\n<p>⚠️ ：大家可以通过 <a href="https://tinyletter.com/kentcdodds" target="_blank" rel="noopener noreferrer">newsletter</a> 获取我最新的资讯，我一般每两周通过邮件发送一次，大家可以通过自己的收件箱获取更多的内容。</p>\n</blockquote>\n<p>React 中的 <strong>context API</strong> 相信大家都知道吧，可能跟大伙一样，当看到 React 的官方文档是这样时，都不敢直接使用它。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/API-c35b793fa67380a56edba68e746ca472-b9936.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 80.6149732620321%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsSAAALEgHS3X78AAADhklEQVQ4y6WTS2wbRRjHTQUXpBZBRUVLoa2cxHaTXdvdNGl4VFC4ILgg8Jm4kKQPUXGGC5ee4IBD6QuBEJWKEOXRFirVieW4JqZtIqhjx/EjATuhu+vn2utH1h57/8yuk7jiceKT/vpmdmZ+8z1mDQZqgUuXH/X8+LntK/cl5vo1NzN9w8/4vD7G6/Eyfr+f8U5NMRMTE8zkpIdqUvcej4e57nYzV69cpWeu2b7/4co2w7pFArdOltJR/PZ7WAmG5omYEUlqZZkkU0ki8DwRRYGkUinqRSIIgi7tG8/fJdFoTEksLWF2dvaDDeA3337nisUWEfBPN/2BAKZmfsH07G34b9+E78bP8Pn8CAZDCM9HMK9rQR8vLEQRuDXT8t2cAY307AZw+x6z64mB5/HY4KHGrh6r2m2yqnu6+tSuNW/u5XRvNNnUbku/yg0cVLn9z6g9FptqstgJ3Y/tO41nNoC7u3pdZnYQ3X37ycjY2+q7772PsaMn8ObIMQwfHsMbzlEMO4/AedgJ57ADI6NHMXrkBN4aPY5jx98hL7z0KnY82dOJkEbi2ssMgrUPkTvBObVeV5DNZlEoFJDJZEDrB0HIgV8JQkh+jYosQlEaqFQqoEZOfnwem7fu7ACNPazLQoGMbYiEwxFV25XP5yFJEgoShWbzSIt/gE/+hGqZ15ahqi00m00d+NEn57HlkR33AE1rQPtTJBZL6MBSqYRqtapDRTFLgUmIqcvIZyP0spJ+IS8IOvDM2c+w+eH/AGoRtlotmqKgp7y6ukrBVBUJleId1Co8TXUV5XKZrks68PTfgXoN2QNg9z1N6JOgEaooFouo1WrtCNNZWssV5AU3ioUEsjkJUlGiPgd6OTl1+lM8tPXxDnCXsdfVZdkHM+3yQjSup7y8vKw3RksrTN/d0tIiZCmBSjmDYkluRyi1Ixw/dQ4PbtnWAXKDz7oOHnoZz734SiOeWNSAajqdVmmd9HFbTVWzznxD5IsvL2K3sbfzDoNzc+PtRsgtrXOKoqDRaEA7L8sy7vJppP/0oiBO4F5rUpzSoAWnNhcKnev8y5HIhxqAvrkarV2dQuq0y/+QLK97uZ7L5erRVK7+ayhVq1aqiMfj4+u8+8xm816O416z2+0OlmUdDMP8i9g1tedWq9UxwNkcQwc4R38/97rJZOrTWIZQKKRBN1HdT/XA/9CmCxcuGv4C5VwNs4fLyekAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="API"\n        title=""\n        src="/static/API-c35b793fa67380a56edba68e746ca472-73c38.png"\n        srcset="/static/API-c35b793fa67380a56edba68e746ca472-5902b.png 165w,\n/static/API-c35b793fa67380a56edba68e746ca472-f6c9c.png 330w,\n/static/API-c35b793fa67380a56edba68e746ca472-73c38.png 660w,\n/static/API-c35b793fa67380a56edba68e746ca472-b9936.png 748w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>第一条搜索结果显示的就是 <a href="https://reactjs.org/docs/context.html#why-not-to-use-context" target="_blank" rel="noopener noreferrer">为什么不建议使用 context</a>，让大家瞬间产生忧虑，该章节是这么描述 context 的：</p>\n<blockquote>\n<p>如果你想让你的应用更加稳定，就别使用 <strong>context</strong>，因为这是一个实验性的 API，在未来的 React 版本中可能会发生改变。</p>\n</blockquote>\n<p>⚠️ 注意，这里的改变包含中断，终止，不再使用。</p>\n<h2 id="那么，为什么还要使用-context-呢"><a href="#%E9%82%A3%E4%B9%88%EF%BC%8C%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E8%A6%81%E4%BD%BF%E7%94%A8-context-%E5%91%A2" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>那么，为什么还要使用 context 呢</h2>\n<p>你曾经历过尝试在一个层级很深的组件中获取最外层组件的 state 的痛苦么，这种痛苦叫 <strong>prop drilling</strong>，可谓让人接近崩溃的。当遇到这种情形时，你肯定不会喜欢用 props 来传递数据，因为如果中间有个组件发生改变，这个代价将是几何 😂。</p>\n<p>实际上，你可以通过使用常规的 <strong>JavaScript module</strong> 来规避以上的问题，将数据存在某个 module 中，就可以实现在任何地方访问和导入了，但这么做会让更新变得困难（你必须实现一个 event 在数据更新时触发，通知用户数据发生改变），并且，服务端渲染对 module 也会有 <a href="https://stackoverflow.com/questions/40935571/why-singleton-store-in-flux-can-cause-issue-for-server-side-rendering/40974748#40974748" target="_blank" rel="noopener noreferrer">影响</a>。</p>\n<p>因此，像 <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">redux</a> 这样的负责 <strong>状态管理</strong> 的第三方库进入了大家的视野。它允许你在任何地方从 <strong>store</strong> 获取数据，你需要做的只是使用 <strong>Provider</strong> 包装一下，然后就可以神奇地在 <strong>connected</strong> 的组件中轻松地获取想要的数据了。</p>\n<p>然而，如果我告诉你 <strong>Provider</strong> 就是在使用 context 这个实验性 API 呢？😱 事实确实是这样的！provider 组件将数据存进 context 中，connect 高阶组件从 context 获取数据，所以，redux 事实并不允许你的数据在任何地方访问。</p>\n<p>那么，为什么还要使用 context 呢？可能是大家已经深深地爱上它了吧！即使你没有直接使用 context，你的应用程序也会通过引用像 <a href="https://github.com/reactjs/react-redux/blob/76dd7faa90981dd2f9efa76f3e2f26ecf2c12cf7/src/components/connectAdvanced.js#L136-L143" target="_blank" rel="noopener noreferrer">react-redux</a>， <a href="https://github.com/mobxjs/mobx-react/blob/dc249910c74c1b2e988a879be07f10aeaea90936/src/Provider.js#L19-L34" target="_blank" rel="noopener noreferrer">MobX-react</a>， <a href="https://github.com/ReactTraining/react-router/blob/e6f9017c947b3ae49affa24cc320d0a86f765b55/packages/react-router/modules/Router.js#L23-L34" target="_blank" rel="noopener noreferrer">react-router</a>， <a href="https://github.com/paypal/glamorous/blob/7468bfc76f46783cac841e20973ed119c771f3b7/src/theme-provider.js#L33-L37" target="_blank" rel="noopener noreferrer">glamorous</a> 这样的第三方库间接用到它。</p>\n<h2 id="context-重生啦"><a href="#context-%E9%87%8D%E7%94%9F%E5%95%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context 重生啦</h2>\n<p>现在清楚了，我们是如此地热爱 context，但官方文档的警告依然还在：在 React 的未来版本中，可能不再使用它，好消息是，<strong>context</strong> 要正式跟大家打招呼了，而且大家可能会比之前更爱它。</p>\n<p>一个月前，React 团队 从 <a href="https://github.com/yarnpkg/rfcs" target="_blank" rel="noopener noreferrer">yarn</a>，<a href="https://github.com/rust-lang/rfcs" target="_blank" rel="noopener noreferrer">rust</a> 和 <a href="https://github.com/emberjs/rfcs" target="_blank" rel="noopener noreferrer">Ember</a> 的 <strong>rfcs 仓库</strong> 受到启发，建立了一个自己的 <a href="https://github.com/reactjs/rfcs" target="_blank" rel="noopener noreferrer">rfcs</a> 仓库。仓库第一个 PR 来自 <a href="https://twitter.com/acdlite" target="_blank" rel="noopener noreferrer">Andrew Clark</a>（React 团队核心成员），PR 标题为 <a href="https://github.com/reactjs/rfcs/pull/2" target="_blank" rel="noopener noreferrer">New version of context</a>，其中 <strong>Andrew Clark</strong> 概述了未来新版本的 context 是怎样的，之后还存在一些有趣的讨论，几天后，Andrew Clark 就向 React 仓库提了一个 <a href="https://github.com/facebook/react/pull/11818" target="_blank" rel="noopener noreferrer">New context API</a> 的 PR。</p>\n<p>那么，到底有什么改变呢？据肉眼估计，新的 API 与之前的 API 存在百万级别的差异，下面是一个简单的 <a href="https://codesandbox.io/s/n4r0qq898j?from-embed" target="_blank" rel="noopener noreferrer">示例</a>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">\'light\'</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">ThemeProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>theme<span class="token punctuation">:</span> <span class="token string">\'light\'</span><span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> ThemeContext<span class="token punctuation">.</span><span class="token function">provide</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>theme<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">ThemeConsumer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> ThemeContext<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span>ThemeProvider<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ThemeConsumer<span class="token operator">></span><span class="token punctuation">{</span>val <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>val<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>ThemeConsumer<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<blockquote>\n<p>你可能注意到示例中使用到一个 <strong>render prop</strong>，但实际上并没有任何关于需要使用 render prop 的 context API，你可以使用 context API 轻松实现高阶组件或其他功能。</p>\n</blockquote>\n<p>新的 <strong>context API</strong> 主要由以下三部分组成：</p>\n<ul>\n<li><strong>React.createContext</strong>：用于传递初始值（可选择 <a href="https://twitter.com/acdlite/status/957446433656864768" target="_blank" rel="noopener noreferrer">使用 bitmask 的一个奇妙的选择性退出函数</a>），返回一个包含 provider 和 consumer 的对象；</li>\n<li><strong>provide</strong>：放置在组件树中的较高层，并可以接收任何值；</li>\n<li><strong>consume</strong>：在 provider 之后任何地方使用，并传递一个返回 JSX 的函数（这有点像 render prop 组件，但 consume 不是组件）；</li>\n</ul>\n<p>我对这个 API 充满了期待，React 团队也将会移除 <strong>context 是实验性 API</strong> 的警告，因为它现在是框架 <a href="https://twitter.com/acdlite/status/957445801302618112" target="_blank" rel="noopener noreferrer">一级棒的特性</a>，这也意味着大家将不再那么担心使用 context 来解决应用中 prop-drilling 的问题了，对 Redux 不再那么依赖，对 React 也将更加喜欢。</p>\n<p><a href="https://twitter.com/kentcdodds/status/911276059051438082" target="_blank" rel="noopener noreferrer">我最近在 twitter 看到的</a>，大概意思是：</p>\n<blockquote>\n<p>大家不是很愿意保持使用提倡的 render 方法，加重了 prop drilling 问题，所以，最终想通过 redux 来缓解。</p>\n</blockquote>\n<p>所以，我认为如果我们不过早或武断地去破坏 render 方法，我们可能就不会那么痛苦，即便最终我们实在没有办法避免，我们也可以通过核心的 React API 来解决。</p>\n<h2 id="context-实践"><a href="#context-%E5%AE%9E%E8%B7%B5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Context 实践</h2>\n<p>我看到了一个关于 context API（或普通的 render prop pattern）的问题很多次，就是如何组合 providers 和 consumers，当在一个 render 方法中把一堆 render prop 组件放在一起时，就会像这样 <a href="https://twitter.com/acdlite/status/955955121979969537" target="_blank" rel="noopener noreferrer">嵌套</a>。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/practice-10fcc983644e66d2d824bd1430d25227-f02de.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 404px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 198.01980198019803%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAoCAYAAAD+MdrbAAAACXBIWXMAAAsSAAALEgHS3X78AAAElklEQVRIx51W2ZLiRhDky/3sR3+Rw/6BiVhmvevhktCF7gOpdYt0VgNj7QwzC9sRHYKmSWVV1rVQdYeKu+1GBH6Ef75+R5rkaJsetWrR1j06fu7bnmcd6rpF07RI4gyrlw2+f/sXbTtA8c4hTLG4AtY8KPISQRChKms0PGtUh6Qo4OQBgiJGdjyiqlqoqkGeHRETQEgovrji/0s+F4IsgE17ZlGENbJQoSyVZta0fGFbQ3E3LRnzTsc99CPGYcI0Tuc7xBCsV8COF2SVUYF4ayGLIg1wzxoI+g6w7YbLzyekQQjT2MOyHTiOS1YtXzig15vshkGfiS/bptGsK/pa0cf/A/IyTicN2fFP250Jy9xjvTEJ6sOwAtiOh912i/3eQhzHiKOYPg9QqRpXnB8BcQaUN6/XGxxcD6aXw/EiMt5hb/lYGR7SNP3B5H4Yb5g8AxRzNpsdrL0Nw7RgWxYi34fr+fAOAfyDj2N+RJQq5MWRL8g/Ynhe0zTBpe/Wqw1N3sKybKRhzJisL16+3KOLTtx9/yFD6Av6SVCPJovpJlmuL4yzJEVbKYrY6bun06QF+xRQbwkHnlkE2xkmbCpuk7VNQRIK4biuFkZEieL0Y5NfGV4VJ5Md2W23xkV5C2We6/AR18i+i+EctGFYrNdbhswOURhqc8+//1TlmclyewZeUk3TtLEjyyxOZi++Q5RbLGW5XoIVmcZMy/kap9MDJs++11VFhoZWP0sSqLJCwx0n2eeivGU3F8hkOkqeFxRmHEdMzGvFGnk7l98AzsFG/jFyD8ygLUyy7GeV6Ha1+YShhEZbNyysimmW6acE/qso96g8B5Ry5Xme9l11LLWp4zj8GsPrZ1WWMCRjmNeGwfKVFjq4m6a+XbF/5kNZlu1itVoR0MbLxmLWmFhvbbh+qnvSXSq/mk0WHauzFN+aVUeYiVAD+4p0zId9WBRnE6dhfN9THhVFnlK9pT4aDJkgjBByi/LnljH+gg/5TJgdMRtYTLAsL7TpUg8fjsPX4Ga4BCz/DsWRbuiStbxEOuZDuTwHTRjYW2bLgQVXqviKFd1hBtXt8LnKt7asnKZKG5UKLv502WLDtCTgnWFzrcqydV1kxZHqLV1xI+wY6MfyTV+WIec8ObxndGspdc7pkqUry3K20pKAM5PbXhJ8evdHyd+npycsn5+xXC7xZfkFz89fGTahBowpiM9+LU1KTK6lfEmlsF2HY1qlw0Cxf1SsJvJZdpZl9Fuut7Ap2ApaPYV1eteMRamTqp3IcsQi4ljxx++/4e+//sTy6zeyeGbbNFhITTyy3GRCkJ+wOKfVkc5WeuiRffWexJ2k1ekB4EXX9fA5ZviM/phTgcvAtRmwB59TK88lxgpOrg0Lg3bJxRXyXVwjTxFpmk46ZBdy8PLywpLERs5RLWJHk+lKBAnp/MPhoKcDyQw5s22b33lOMaS/OI6jz8QazbAm4J6xJIxEtXGcdIkaxhGPLgm1hYwRGePoyJiSeJKkT6mmPGUkFpfIpCCKyufp0ks+yqSFUBVfKMqfvwIf6bczuJxdv6dZ8a74vs2s/wBdnBerN1Q9oAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="practice"\n        title=""\n        src="/static/practice-10fcc983644e66d2d824bd1430d25227-f02de.png"\n        srcset="/static/practice-10fcc983644e66d2d824bd1430d25227-70084.png 165w,\n/static/practice-10fcc983644e66d2d824bd1430d25227-1b591.png 330w,\n/static/practice-10fcc983644e66d2d824bd1430d25227-f02de.png 404w"\n        sizes="(max-width: 404px) 100vw, 404px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>那么，我们可以做点什么来避免呢？其实，个人觉得没有那么糟糕，如果你觉得这样并不好，那么可以使用常规的 <strong>utility</strong> 函数/组件来解决，下面是一个示例：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> ThemeContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">\'light\'</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">ThemeProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token comment">/* code */</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">ThemeConsumer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> ThemeContext<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n<span class="token keyword">const</span> LanguageContext <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createContext</span><span class="token punctuation">(</span><span class="token string">\'en\'</span><span class="token punctuation">)</span>\n<span class="token keyword">class</span> <span class="token class-name">LanguageProvider</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span><span class="token comment">/* code */</span><span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">LanguageConsumer</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> LanguageContext<span class="token punctuation">.</span><span class="token function">consume</span><span class="token punctuation">(</span>children<span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">AppProviders</span><span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>LanguageProvider<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ThemeProvider<span class="token operator">></span>\n        <span class="token punctuation">{</span>children<span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeProvider<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>LanguageProvider<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">ThemeAndLanguageConsumer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>children<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span>LanguageConsumer<span class="token operator">></span>\n      <span class="token punctuation">{</span>language <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token operator">&lt;</span>ThemeConsumer<span class="token operator">></span>\n          <span class="token punctuation">{</span>theme <span class="token operator">=></span> <span class="token function">children</span><span class="token punctuation">(</span><span class="token punctuation">{</span>language<span class="token punctuation">,</span> theme<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeConsumer<span class="token operator">></span>\n      <span class="token punctuation">)</span><span class="token punctuation">}</span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>LanguageConsumer<span class="token operator">></span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span>AppProviders<span class="token operator">></span>\n      <span class="token operator">&lt;</span>ThemeAndLanguageConsumer<span class="token operator">></span>\n        <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">{</span>theme<span class="token punctuation">,</span> language<span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token punctuation">{</span>theme<span class="token punctuation">}</span> and <span class="token punctuation">{</span>language<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">}</span>\n      <span class="token operator">&lt;</span><span class="token operator">/</span>ThemeAndLanguageConsumer<span class="token operator">></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span>AppProviders<span class="token operator">></span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>目标是使用常见的案例，结合特殊功能的函数/组件，使案例更加工程化。</p>\n<p>除此之外，大家还可以参考 <a href="https://medium.com/@jmeas" target="_blank" rel="noopener noreferrer">jmeas</a> 的 <a href="https://codesandbox.io/s/92pj14134y?from-embed" target="_blank" rel="noopener noreferrer">react-composer</a>。</p>\n<p>在这里需要提及的是，在实践中，并不建议大家嵌套渲染 props components，无论什么时候，都可以选择创建多个简单易用的组件，然后组合使用。</p>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>正如上面所说的，我对这个 API 充满了期待。目前暂未发布，但应该会包含在下一个 <strong>minor</strong> 版本中。不同担心，之前的 API 会继续正常工作，直到下一个 major 版本发布，所以，每个人都有时间迁移，而且不用过于担心，React 团队在 Facebook 有超过 <strong>50,000</strong> 个 React components 需要维护，所以，将来很有可能会发布一个 <strong>codemod</strong> 去自动更新大多数人的代码（就像以往一样）。</p>\n<p>最后再表达一下我对此的兴奋。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/twitter-140356a80193236669cce8fbf8bff474-f3fd1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 499px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 48.496993987975955%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABgElEQVQoz5VSCU7DQAzMSxGP4FMI8RYKJTRn27SEXklz7GZztMlgu1SiUouEpZE3XnvWGdtaTKfIswymrmGMQVVVyPMcXdeBbRgGwTU7x/t+QKZPedbD3T2eH5/geD4c18Pr+B0voxG01heEt0AZaA8D/K8e/GlNbA9pmqHtDtBVjcrUcnGrq79MOtzsEmy2Cbbkl/FK/Gf8RbGddMm/zlIwapKFYyxL0zQCjjE6aojNchwHU9JxNpshCAIEYSgICRyfz+dwPY/uQsqZU2yGKFrA831MqJbvGJoeORG6LjzSb7VeEwkRRBGmRP42HgupT4+4pO1isRQSl/IjyvH9ALb9IXV7GupZIotftW1bCrmAE+M4hlIKSZKgKApBkqbIqPAc403g8+F4vBietd5sEa/W2CUp+Mza7bP8X8Pofw3QyvISSlcoSo1SafFFqUj8inQxMnVD4HPTtjdWB6ib051l6kaWulQVTc8Iadt24hnqhzgvFE2zubqbbJzb9z2+Aewl+vZT8zHkAAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="twiiter"\n        title=""\n        src="/static/twitter-140356a80193236669cce8fbf8bff474-f3fd1.png"\n        srcset="/static/twitter-140356a80193236669cce8fbf8bff474-6085a.png 165w,\n/static/twitter-140356a80193236669cce8fbf8bff474-948ed.png 330w,\n/static/twitter-140356a80193236669cce8fbf8bff474-f3fd1.png 499w"\n        sizes="(max-width: 499px) 100vw, 499px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>',fields:{slug:"/2018-02-01-react-xin-de-context-api/"},internal:{content:'---\ntitle: React ⚛️ 新的 Context API\noriginal: false\ntag: FrontEnd,React,context\ndate: 2018-02-01T17:57:26+08:00\n---\n\n<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://blog.kentcdodds.com/reacts-%EF%B8%8F-new-context-api-70c9fe01596b"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      React\'s ⚛️ new Context API\n    </a>\n  </div>\n  <div className="original-auth">作者：kentcdodds</div>\n</div>\n\n这不再是一个 **实验性的 API**，并且它更符合工程化的理念，目前它已成为 **React 一级棒的 API**。\n\n> ⚠️ ：大家可以通过 [newsletter](https://tinyletter.com/kentcdodds) 获取我最新的资讯，我一般每两周通过邮件发送一次，大家可以通过自己的收件箱获取更多的内容。\n\nReact 中的 **context API** 相信大家都知道吧，可能跟大伙一样，当看到 React 的官方文档是这样时，都不敢直接使用它。\n\n![API](./images/API.png)\n\n第一条搜索结果显示的就是 [为什么不建议使用 context](https://reactjs.org/docs/context.html#why-not-to-use-context)，让大家瞬间产生忧虑，该章节是这么描述 context 的：\n\n> 如果你想让你的应用更加稳定，就别使用 **context**，因为这是一个实验性的 API，在未来的 React 版本中可能会发生改变。\n\n⚠️ 注意，这里的改变包含中断，终止，不再使用。\n\n## 那么，为什么还要使用 context 呢\n\n你曾经历过尝试在一个层级很深的组件中获取最外层组件的 state 的痛苦么，这种痛苦叫 **prop drilling**，可谓让人接近崩溃的。当遇到这种情形时，你肯定不会喜欢用 props 来传递数据，因为如果中间有个组件发生改变，这个代价将是几何 😂。\n\n实际上，你可以通过使用常规的 **JavaScript module** 来规避以上的问题，将数据存在某个 module 中，就可以实现在任何地方访问和导入了，但这么做会让更新变得困难（你必须实现一个 event 在数据更新时触发，通知用户数据发生改变），并且，服务端渲染对 module 也会有 [影响](https://stackoverflow.com/questions/40935571/why-singleton-store-in-flux-can-cause-issue-for-server-side-rendering/40974748#40974748)。\n\n因此，像 [redux](https://redux.js.org/) 这样的负责 **状态管理** 的第三方库进入了大家的视野。它允许你在任何地方从 **store** 获取数据，你需要做的只是使用 **Provider** 包装一下，然后就可以神奇地在 **connected** 的组件中轻松地获取想要的数据了。\n\n然而，如果我告诉你 **Provider** 就是在使用 context 这个实验性 API 呢？😱 事实确实是这样的！provider 组件将数据存进 context 中，connect 高阶组件从 context 获取数据，所以，redux 事实并不允许你的数据在任何地方访问。\n\n那么，为什么还要使用 context 呢？可能是大家已经深深地爱上它了吧！即使你没有直接使用 context，你的应用程序也会通过引用像 [react-redux](https://github.com/reactjs/react-redux/blob/76dd7faa90981dd2f9efa76f3e2f26ecf2c12cf7/src/components/connectAdvanced.js#L136-L143)， [MobX-react](https://github.com/mobxjs/mobx-react/blob/dc249910c74c1b2e988a879be07f10aeaea90936/src/Provider.js#L19-L34)， [react-router](https://github.com/ReactTraining/react-router/blob/e6f9017c947b3ae49affa24cc320d0a86f765b55/packages/react-router/modules/Router.js#L23-L34)， [glamorous](https://github.com/paypal/glamorous/blob/7468bfc76f46783cac841e20973ed119c771f3b7/src/theme-provider.js#L33-L37) 这样的第三方库间接用到它。\n\n## Context 重生啦\n\n现在清楚了，我们是如此地热爱 context，但官方文档的警告依然还在：在 React 的未来版本中，可能不再使用它，好消息是，**context** 要正式跟大家打招呼了，而且大家可能会比之前更爱它。\n\n一个月前，React 团队 从 [yarn](https://github.com/yarnpkg/rfcs)，[rust](https://github.com/rust-lang/rfcs) 和 [Ember](https://github.com/emberjs/rfcs) 的 **rfcs 仓库** 受到启发，建立了一个自己的 [rfcs](https://github.com/reactjs/rfcs) 仓库。仓库第一个 PR 来自 [Andrew Clark](https://twitter.com/acdlite)（React 团队核心成员），PR 标题为 [New version of context](https://github.com/reactjs/rfcs/pull/2)，其中 **Andrew Clark** 概述了未来新版本的 context 是怎样的，之后还存在一些有趣的讨论，几天后，Andrew Clark 就向 React 仓库提了一个 [New context API](https://github.com/facebook/react/pull/11818) 的 PR。\n\n那么，到底有什么改变呢？据肉眼估计，新的 API 与之前的 API 存在百万级别的差异，下面是一个简单的 [示例](https://codesandbox.io/s/n4r0qq898j?from-embed)：\n\n```javascript\nconst ThemeContext = React.createContext(\'light\')\nclass ThemeProvider extends React.Component {\n  state = {theme: \'light\'}\n  render() {\n    return ThemeContext.provide(this.state.theme, this.props.children)\n  }\n}\n\nconst ThemeConsumer = ({children}) => ThemeContext.consume(children)\n\nclass App extends React.Component {\n  render() {\n    <ThemeProvider>\n      <ThemeConsumer>{val => <div>{val}</div>}</ThemeConsumer>\n    </ThemeProvider>\n  }\n}\n```\n\n> 你可能注意到示例中使用到一个 **render prop**，但实际上并没有任何关于需要使用 render prop 的 context API，你可以使用 context API 轻松实现高阶组件或其他功能。\n\n新的 **context API** 主要由以下三部分组成：\n\n- **React.createContext**：用于传递初始值（可选择 [使用 bitmask 的一个奇妙的选择性退出函数](https://twitter.com/acdlite/status/957446433656864768)），返回一个包含 provider 和 consumer 的对象；\n- **provide**：放置在组件树中的较高层，并可以接收任何值；\n- **consume**：在 provider 之后任何地方使用，并传递一个返回 JSX 的函数（这有点像 render prop 组件，但 consume 不是组件）；\n\n我对这个 API 充满了期待，React 团队也将会移除 **context 是实验性 API** 的警告，因为它现在是框架 [一级棒的特性](https://twitter.com/acdlite/status/957445801302618112)，这也意味着大家将不再那么担心使用 context 来解决应用中 prop-drilling 的问题了，对 Redux 不再那么依赖，对 React 也将更加喜欢。\n\n[我最近在 twitter 看到的](https://twitter.com/kentcdodds/status/911276059051438082)，大概意思是：\n\n> 大家不是很愿意保持使用提倡的 render 方法，加重了 prop drilling 问题，所以，最终想通过 redux 来缓解。\n\n所以，我认为如果我们不过早或武断地去破坏 render 方法，我们可能就不会那么痛苦，即便最终我们实在没有办法避免，我们也可以通过核心的 React API 来解决。\n\n## Context 实践\n\n我看到了一个关于 context API（或普通的 render prop pattern）的问题很多次，就是如何组合 providers 和 consumers，当在一个 render 方法中把一堆 render prop 组件放在一起时，就会像这样 [嵌套](https://twitter.com/acdlite/status/955955121979969537)。\n\n![practice](./images/practice.png)\n\n那么，我们可以做点什么来避免呢？其实，个人觉得没有那么糟糕，如果你觉得这样并不好，那么可以使用常规的 **utility** 函数/组件来解决，下面是一个示例：\n\n```javascript\nconst ThemeContext = React.createContext(\'light\')\nclass ThemeProvider extends React.Component {/* code */}\nconst ThemeConsumer = ({children}) => ThemeContext.consume(children)\nconst LanguageContext = React.createContext(\'en\')\nclass LanguageProvider extends React.Component {/* code */}\nconst LanguageConsumer = ({children}) => LanguageContext.consume(children)\n\nfunction AppProviders({children}) {\n  return (\n    <LanguageProvider>\n      <ThemeProvider>\n        {children}\n      </ThemeProvider>\n    </LanguageProvider>\n  )\n}\n\nfunction ThemeAndLanguageConsumer({children}) {\n  return (\n    <LanguageConsumer>\n      {language => (\n        <ThemeConsumer>\n          {theme => children({language, theme})}\n        </ThemeConsumer>\n      )}\n    </LanguageConsumer>\n  )\n}\n\nclass App extends React.Component {\n  render() {\n    <AppProviders>\n      <ThemeAndLanguageConsumer>\n        {({theme, language}) => <div>{theme} and {language}</div>}\n      </ThemeAndLanguageConsumer>\n    </AppProviders>\n  }\n}\n```\n\n目标是使用常见的案例，结合特殊功能的函数/组件，使案例更加工程化。\n\n除此之外，大家还可以参考 [jmeas](https://medium.com/@jmeas) 的 [react-composer](https://codesandbox.io/s/92pj14134y?from-embed)。\n\n在这里需要提及的是，在实践中，并不建议大家嵌套渲染 props components，无论什么时候，都可以选择创建多个简单易用的组件，然后组合使用。\n\n## 总结\n\n正如上面所说的，我对这个 API 充满了期待。目前暂未发布，但应该会包含在下一个 **minor** 版本中。不同担心，之前的 API 会继续正常工作，直到下一个 major 版本发布，所以，每个人都有时间迁移，而且不用过于担心，React 团队在 Facebook 有超过 **50,000** 个 React components 需要维护，所以，将来很有可能会发布一个 **codemod** 去自动更新大多数人的代码（就像以往一样）。\n\n最后再表达一下我对此的兴奋。\n\n![twiiter](./images/twitter.png)\n'
},frontmatter:{title:"React ⚛️ 新的 Context API",tag:"FrontEnd,React,context",date:"2018-02-01",original:!1}}},pathContext:{slug:"/2018-02-01-react-xin-de-context-api/"}}}});