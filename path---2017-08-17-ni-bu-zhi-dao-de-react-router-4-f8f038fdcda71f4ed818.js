webpackJsonp([0x644a8433ae87],{766:function(t,n){t.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io"}},markdownRemark:{html:'<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://css-tricks.com/react-router-4/"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      All About React Router 4\n    </a>\n  </div>\n  <div className="original-auth">作者：James K Nelson</div>\n</div>\n<blockquote>\n<p>几个月前，<strong>React Router 4</strong> 发布，我能清晰地感觉到来自 Twitter 大家对新版本中其大量的修改的不同声音，诚然，我在学习 React Router 4 的第一天，也是非常痛苦的，但是，这并不是因为看它的 API，而是反复思考使用它的 <strong>模式</strong> 和 <strong>策略</strong>，因为 V4 的变化确实有点大，V3 的功能它都有，除此之外，还增加了一些特性，我不能直接将使用 V3 的心得直接迁移过来，现在，我必须重新审视 <strong>router</strong> 和 <strong>layout components</strong> 之间的关系</p>\n</blockquote>\n<p>本篇文章不是把 <strong>React Router 4</strong> 的 API 再次呈现给读者看，而是简单介绍其中最常用的几个概念，和重点讲解我在实践的过程中发现的比较好的 <strong>模式</strong> 和 <strong>策略</strong>。</p>\n<p>开始阅读之前，你得保证对以下概念并不陌生：</p>\n<ul>\n<li>React stateless（Functional） 组件；</li>\n<li>ES6 的 箭头函数和它的隐式返回；</li>\n<li>ES6 的 解构；</li>\n<li>ES6 的 模板字符串；</li>\n</ul>\n<h2 id="一个全新的-api"><a href="#%E4%B8%80%E4%B8%AA%E5%85%A8%E6%96%B0%E7%9A%84-api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一个全新的 API</h2>\n<p>React Router 的早期版本是將 router 和 layout components 分开，为了彻底搞清楚 V4 究竟有什么不同，下面我们来写两个简单的 demo，demo 就两个 route，一个 home，一个 user。</p>\n<p><strong>V3</strong>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">import React from &quot;react&quot;;\nimport { render } from &quot;react-dom&quot;;\nimport { Router, Route, IndexRoute, Link, browserHistory } from &quot;react-router&quot;;\n\nconst PrimaryLayout = props =&gt;\n  &lt;div className=&quot;primary-layout&quot;&gt;\n    &lt;header&gt;Our React Router 3 App&lt;/header&gt;\n    &lt;ul&gt;\n      &lt;li&gt;\n        &lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;\n      &lt;/li&gt;\n      &lt;li&gt;\n        &lt;Link to=&quot;/user&quot;&gt;User&lt;/Link&gt;\n      &lt;/li&gt;\n    &lt;/ul&gt;\n    &lt;main&gt;\n      {props.children}\n    &lt;/main&gt;\n  &lt;/div&gt;;\n\nconst HomePage = () =&gt; &lt;h1&gt;Home Page&lt;/h1&gt;;\nconst UsersPage = () =&gt; &lt;h1&gt;User Page&lt;/h1&gt;;\n\nconst App = () =&gt;\n  &lt;Router history={browserHistory}&gt;\n    &lt;Route path=&quot;/&quot; component={PrimaryLayout}&gt;\n      &lt;IndexRoute component={HomePage} /&gt;\n      &lt;Route path=&quot;/user&quot; component={UsersPage} /&gt;\n    &lt;/Route&gt;\n  &lt;/Router&gt;;\n\nrender(&lt;App /&gt;, document.getElementById(&quot;root&quot;));</code></pre>\n      </div>\n<blockquote>\n<p>在这里给大家推荐一个在线 react 编译器 <a href="https://codesandbox.io/" target="_blank" rel="noopener noreferrer">codesandbox</a>，正所谓，实践是检验真理的唯一标准，这也是一种良好的学习习惯。</p>\n</blockquote>\n<p>上面代码主要包含下面几个关键点， 但在 V4 中都不复存在了：</p>\n<ul>\n<li>集中式 router；</li>\n<li>通过 Route 嵌套，实现 Layout 和 page 嵌套；</li>\n<li>Layout 和 page 组件是作为 router 的一部分；</li>\n</ul>\n<p><strong>V4</strong>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">import React from &quot;react&quot;;\nimport { render } from &quot;react-dom&quot;;\nimport { BrowserRouter, Route, Link } from &quot;react-router-dom&quot;;\n\nconst PrimaryLayout = () =&gt;\n  &lt;div className=&quot;primary-layout&quot;&gt;\n    &lt;header&gt;Our React Router 4 App&lt;/header&gt;\n    &lt;ul&gt;\n      &lt;li&gt;\n        &lt;Link to=&quot;/&quot;&gt;Home&lt;/Link&gt;\n      &lt;/li&gt;\n      &lt;li&gt;\n        &lt;Link to=&quot;/User&quot;&gt;User&lt;/Link&gt;\n      &lt;/li&gt;\n    &lt;/ul&gt;\n    &lt;main&gt;\n      &lt;Route path=&quot;/&quot; exact component={HomePage} /&gt;\n      &lt;Route path=&quot;/user&quot; component={UsersPage} /&gt;\n    &lt;/main&gt;\n  &lt;/div&gt;;\n\nconst HomePage = () =&gt; &lt;h1&gt;Home Page&lt;/h1&gt;;\nconst UsersPage = () =&gt; &lt;h1&gt;User Page&lt;/h1&gt;;\n\nconst App = () =&gt;\n  &lt;BrowserRouter&gt;\n    &lt;PrimaryLayout /&gt;\n  &lt;/BrowserRouter&gt;;\n\nrender(&lt;App /&gt;, document.getElementById(&quot;root&quot;));</code></pre>\n      </div>\n<blockquote>\n<p>⚠️ 注意，我们引入的是 <strong>BrowserRouter</strong>，而且是从 <strong>react-router-dom</strong> 引入，不是 react-router。</p>\n</blockquote>\n<p>相信大家一眼就能看出很多变化，首先，V3 中的 router 不在了，在 V3 中，我们是将整个庞大的 router 直接丢给 DOM，而在 V4 中，除了 BrowserRouter， 我们丢给 DOM 的是我们的应用程序本身。</p>\n<p>另外，V4 中，我们不再使用 <strong>props.children</strong> 来嵌套组件了，替代的 <strong>Route</strong>，当 route 匹配时，子组件会被渲染到 Route 书写的地方。</p>\n<h2 id="inclusive-routing"><a href="#inclusive-routing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Inclusive Routing</h2>\n<p>在上面的 demo 中，读者可能注意到 V4 中有 <strong>exact</strong> 这么一个 props，那么，这个 props 有什么用呢？ V3 中的 routing 规则是 <strong>exclusive</strong>，意思就是最终只获取一个 route，而 V4 中的 routes 默认是 <strong>inclusive</strong>，这就意味着多个 Route 可以同时匹配和呈现。</p>\n<p>还是使用上面的 demo，如果我们调皮地删除 <strong>exact</strong> 这个 props，那么我们在访问 /user 的时候，Home 和 User 两个 Page 都将被渲染，是不是恍然大明白了。</p>\n<blockquote>\n<p>为了更好地理解 V4 的匹配逻辑，可以查看 <a href="http://t.cn/RCZlIbF" target="_blank" rel="noopener noreferrer">path-to-regexp</a>，就是它决定 routes 是否匹配 URL。</p>\n</blockquote>\n<p>为了演示 <strong>inclusive routing</strong> 的作用，我们新增一个 UserMenu 组件如下。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const PrimaryLayout = () =&gt;\n  &lt;div className=&quot;primary-layout&quot;&gt;\n    &lt;header&gt;\n      Our React Router 4 App\n      &lt;Route path=&quot;/user&quot; component={UsersMenu} /&gt;\n    &lt;/header&gt;\n    &lt;main&gt;\n      &lt;Route path=&quot;/&quot; exact component={HomePage} /&gt;\n      &lt;Route path=&quot;/user&quot; component={UsersPage} /&gt;\n    &lt;/main&gt;\n  &lt;/div&gt;;</code></pre>\n      </div>\n<p>现在，当访问 /user 时，两个组价都会被渲染，在 V3 中存在一些模式也可以实现，但其过程却比较复杂，在 V4 中，是不是瞬间感觉轻松了很多。</p>\n<h2 id="exclusive-routing"><a href="#exclusive-routing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exclusive Routing</h2>\n<p>如果你只想匹配一个 route，那么你也可以使用 <strong>Switch</strong> 来 exclusive routing。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const PrimaryLayout = () =&gt;\n  &lt;div className=&quot;primary-layout&quot;&gt;\n    &lt;PrimaryHeader /&gt;\n    &lt;main&gt;\n      &lt;Switch&gt;\n        &lt;Route path=&quot;/&quot; exact component={HomePage} /&gt;\n        &lt;Route path=&quot;/user/add&quot; component={UserAddPage} /&gt;\n        &lt;Route path=&quot;/user&quot; component={UsersPage} /&gt;\n        &lt;Redirect to=&quot;/&quot; /&gt;\n      &lt;/Switch&gt;\n    &lt;/main&gt;\n  &lt;/div&gt;;</code></pre>\n      </div>\n<p>在 <strong>Switch</strong> 中只有一个 Route 会被渲染，另外，我们还是要给 HomePage 所在 Route 添加 <strong>exact</strong>，否则，在访问 /user 或 /user/add 的时候还是会匹配到 /。同理，不知有没同学注意到，我们将 /user/add 放在 /user 前面是保证正确匹配很有策略性的一步，因为，/user/add 会同时匹配 /user 和 /user/add，如果不这么做，大家可以尝试交换它们两个的位置，看下会发生什么。</p>\n<p>当然，如果我们给每一个 Route 都添加一个 <strong>exact</strong>，那就不用考虑上面的策略问题了，但至少现在，我们懂的更多。</p>\n<p><strong>Redirect</strong> 组件不用多说，执行浏览器重定向，但它在 <strong>Switch</strong> 中时，Redirect 组件只会在 routes 匹配不成功的情况下渲染，另外，要想了解 Redirect 如何在 <strong>non-switch</strong> 环境下使用，可以参考下面的 Authorized Route。</p>\n<h2 id="index-routes-和-not-found"><a href="#index-routes-%E5%92%8C-not-found" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>“Index Routes” 和 “Not Found”</h2>\n<p>V4 中也没有 <strong>IndexRoute</strong>，但 Route exact 可以实现相同的功能，或者 Switch 和 Redirect 重定向到默认的有效路径，甚至一个找不到的页面。</p>\n<h2 id="嵌套布局"><a href="#%E5%B5%8C%E5%A5%97%E5%B8%83%E5%B1%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>嵌套布局</h2>\n<p>接下来，你可能很想知道 V4 中是如何实现嵌套布局的，V4 确实给我们了很多选择，但这并不一定是好事，表面上，嵌套布局微不足道，但选择的空间越大，出现的问题也就可能越多。</p>\n<p>现在，我们假设我们要增加两个 user 相关的页面，一个 browse user，一个 user profile，对 product 我们也有相同的需求，实现的方法可能并不少，但有的仔细思考后可能并不会采纳。</p>\n<p>第一种，如下修改 PrimaryLayout：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const PrimaryLayout = props =&gt; {\n  return (\n    &lt;div className=&quot;primary-layout&quot;&gt;\n      &lt;PrimaryHeader /&gt;\n      &lt;main&gt;\n        &lt;Switch&gt;\n          &lt;Route path=&quot;/&quot; exact component={HomePage} /&gt;\n          &lt;Route path=&quot;/user&quot; exact component={BrowseUsersPage} /&gt;\n          &lt;Route path=&quot;/user/:userId&quot; component={UserProfilePage} /&gt;\n          &lt;Route path=&quot;/products&quot; exact component={BrowseProductsPage} /&gt;\n          &lt;Route path=&quot;/products/:productId&quot; component={ProductProfilePage} /&gt;\n          &lt;Redirect to=&quot;/&quot; /&gt;\n        &lt;/Switch&gt;\n      &lt;/main&gt;\n    &lt;/div&gt;\n  );\n};</code></pre>\n      </div>\n<p>虽然这种方法可以实现，但仔细观察下面的两个 user 页面，就会发现有点潜在的问题。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const BrowseUsersPage = () =&gt; (\n  &lt;div className=&quot;user-sub-layout&quot;&gt;\n    &lt;aside&gt;\n      &lt;UserNav /&gt;\n    &lt;/aside&gt;\n    &lt;div className=&quot;primary-content&quot;&gt;\n      &lt;BrowseUserTable /&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n)\n\nconst UserProfilePage = props =&gt; (\n  &lt;div className=&quot;user-sub-layout&quot;&gt;\n    &lt;aside&gt;\n      &lt;UserNav /&gt;\n    &lt;/aside&gt;\n    &lt;div className=&quot;primary-content&quot;&gt;\n      &lt;UserProfile userId={props.match.params.userId} /&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n)</code></pre>\n      </div>\n<blockquote>\n<p>userId 通过 <strong>props.match.params</strong> 获取，props.match 赋予给了 Route 中的任何组件。除此之外，如果组件不通过 Route 来渲染，要访问 props.match，可以使用 withRouter() 高阶组件来实现。</p>\n</blockquote>\n<p>估计大家都发现了吧，两个 user 页面中都有一个 UserNav，这明显会导致不必要的请求，以上只是一个简单 demo，如果是在真实的项目中，不知道会重复消耗多少的流量，然而，这就是由我们采用以上方式使用路由引起的。</p>\n<p>接下来，我们再看看另一种实现方式：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const PrimaryLayout = props =&gt; {\n  return (\n    &lt;div className=&quot;primary-layout&quot;&gt;\n      &lt;PrimaryHeader /&gt;\n      &lt;main&gt;\n        &lt;Switch&gt;\n          &lt;Route path=&quot;/&quot; exact component={HomePage} /&gt;\n          &lt;Route path=&quot;/user&quot; component={UserSubLayout} /&gt;\n          &lt;Route path=&quot;/products&quot; component={ProductSubLayout} /&gt;\n          &lt;Redirect to=&quot;/&quot; /&gt;\n        &lt;/Switch&gt;\n      &lt;/main&gt;\n    &lt;/div&gt;\n  );\n};</code></pre>\n      </div>\n<p>我们用 2 个 routes 替换之前的 4 个 routes。</p>\n<blockquote>\n<p>⚠️ 注意，这里我们没有再使用 <strong>exact</strong>，因为，我们希望 /user 可以匹配任何以 /user 开始的 route，products 同理。</p>\n</blockquote>\n<p>使用这种策略，子布局也开始承担起了渲染 routes 的职责：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const UserSubLayout = () =&gt;\n  &lt;div className=&quot;user-sub-layout&quot;&gt;\n    &lt;aside&gt;\n      &lt;UserNav /&gt;\n    &lt;/aside&gt;\n    &lt;div className=&quot;primary-content&quot;&gt;\n      &lt;Switch&gt;\n        &lt;Route path=&quot;/user&quot; exact component={BrowseUsersPage} /&gt;\n        &lt;Route path=&quot;/user/:userId&quot; component={UserProfilePage} /&gt;\n      &lt;/Switch&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;;</code></pre>\n      </div>\n<p>是不是很好解决了第一种方式中的重复渲染等问题呢？</p>\n<p>另外，routes 需要识别它的完整路径才能匹配，为了减少我们的重复输入，我们可以使用 <strong>props.match.path</strong> 来代替。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const UserSubLayout = props =&gt;\n  &lt;div className=&quot;user-sub-layout&quot;&gt;\n    &lt;aside&gt;\n      &lt;UserNav /&gt;\n    &lt;/aside&gt;\n    &lt;div className=&quot;primary-content&quot;&gt;\n      &lt;Switch&gt;\n        &lt;Route path={props.match.path} exact component={BrowseUsersPage} /&gt;\n        &lt;Route\n          path={`${props.match.path}/:userId`}\n          component={UserProfilePage}\n        /&gt;\n      &lt;/Switch&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;;</code></pre>\n      </div>\n<h2 id="match"><a href="#match" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Match</h2>\n<p>正如我们上面看到的那样，<strong>props.match</strong> 可以帮我们获取 userId 和 routes。</p>\n<p>match 对象为我们提供了 <strong>match.params</strong>，<strong>match.path</strong>，和 <strong>match.url</strong> 等属性。</p>\n<h3 id="matchpath-vs-matchurl"><a href="#matchpath-vs-matchurl" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>match.path VS match.url</h3>\n<p>最开始，可能觉得这两者并没有什么区别。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const UserSubLayout = ({ match }) =&gt; {\n  console.log(match.url)   // output: &quot;/user&quot;\n  console.log(match.path)  // output: &quot;/user&quot;\n  return (\n    &lt;div className=&quot;user-sub-layout&quot;&gt;\n      &lt;aside&gt;\n        &lt;UserNav /&gt;\n      &lt;/aside&gt;\n      &lt;div className=&quot;primary-content&quot;&gt;\n        &lt;Switch&gt;\n          &lt;Route path={match.path} exact component={BrowseUsersPage} /&gt;\n          &lt;Route path={`${match.path}/:userId`} component={UserProfilePage} /&gt;\n        &lt;/Switch&gt;\n      &lt;/div&gt;\n    &lt;/div&gt;\n  )\n}</code></pre>\n      </div>\n<blockquote>\n<p>match 在组件的参数中被 <strong>解构</strong>，我们可以使用 match.path 代替 props.match.path。</p>\n</blockquote>\n<p>虽然控制台的输出一模一样，但我们需要明白的是：<strong>match.url</strong> 是浏览器 URL 的一部分，<strong>match.path</strong> 是我们 router 书写的路径。</p>\n<h3 id="如何选择"><a href="#%E5%A6%82%E4%BD%95%E9%80%89%E6%8B%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如何选择</h3>\n<p>如果我们是构建 route 路径，那么肯定使用 <strong>match.path</strong>。</p>\n<p>为了说明问题，我们创建两个子组件，一个 route 路径来自 <strong>match.url</strong>，一个 route 路径来自 <strong>match.path</strong>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const UserComments = ({ match }) =&gt;\n  &lt;div&gt;\n    UserId: {match.params.userId}\n  &lt;/div&gt;;\n\nconst UserSettings = ({ match }) =&gt;\n  &lt;div&gt;\n    UserId: {match.params.userId}\n  &lt;/div&gt;;\n\nconst UserProfilePage = ({ match }) =&gt;\n  &lt;div&gt;\n    User Profile:\n    &lt;Route path={`${match.url}/comments`} component={UserComments} /&gt;\n    &lt;Route path={`${match.path}/settings`} component={UserSettings} /&gt;\n  &lt;/div&gt;;</code></pre>\n      </div>\n<p>然后，我们按下面方式来访问：</p>\n<ul>\n<li>/user/5/comments</li>\n<li>/user/5/settings</li>\n</ul>\n<p>实践后，我们发现，访问 comments 返回的是 undefined，访问 settings 返回的是 5。</p>\n<p>正如 API 所述:</p>\n<ul>\n<li>path - (string) The path pattern used to match. Useful for building nested <Route>s</li>\n<li>url - (string) The matched portion of the URL. Useful for building nested <Link>s</li>\n</ul>\n<h2 id="避免-match-collisions"><a href="#%E9%81%BF%E5%85%8D-match-collisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>避免 Match Collisions</h2>\n<p>假设我们的 App 是一个仪表盘，我们希望访问 /user/add 和 /user/5/edit 添加和编辑 user。使用上面的实例，user/:userId 已经指向 UserProfilePage，我们这是需要在 UserProfilePage 中再添加一层 routes 么？显然不是这样的。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">const UserSubLayou = ({ match }) =&gt;\n  &lt;div className=&quot;user-sub-layout&quot;&gt;\n    &lt;aside&gt;\n      &lt;UserNav /&gt;\n    &lt;/aside&gt;\n    &lt;div className=&quot;primary-content&quot;&gt;\n      &lt;Switch&gt;\n        &lt;Route exact path={match.path} component={BrowseUsersPage} /&gt;\n        &lt;Route path={`${match.path}/add`} component={AddUserPage} /&gt;\n        &lt;Route path={`${match.path}/:userId/edit`} component={EditUserPage} /&gt;\n        &lt;Route path={`${match.path}/:userId`} component={UserProfilePage} /&gt;\n      &lt;/Switch&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;;</code></pre>\n      </div>\n<p>现在，看清楚这个策略了么。</p>\n<p>另外，我们可以使用 <strong>${match.path}/:userId(\\d+)</strong> 作为 UserProfilePage 对应的 path，保证 :userId 是一个数字，可以避免与 /users/add 的冲突，这样，将其所在的 Route 丢到最前面去也能正常访问 add 页面，这一招，就是我在 <a href="http://t.cn/RCZlIbF" target="_blank" rel="noopener noreferrer">path-to-regexp</a> 学的。</p>\n<h2 id="authorized-route"><a href="#authorized-route" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Authorized Route</h2>\n<p>在应用程序中限制未登录的用户访问某些路由是非常常见的，还有对于授权和未授权的用户 UI 也可能大不一样，为了解决这样的需求，我们可以考虑为应用程序设置一个主入口。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">class App extends React.Component {\n  render() {\n    return (\n      &lt;Provider store={store}&gt;\n        &lt;BrowserRouter&gt;\n          &lt;Switch&gt;\n            &lt;Route path=&quot;/auth&quot; component={UnauthorizedLayout} /&gt;\n            &lt;AuthorizedRoute path=&quot;/app&quot; component={PrimaryLayout} /&gt;\n          &lt;/Switch&gt;\n        &lt;/BrowserRouter&gt;\n      &lt;/Provider&gt;\n    )\n  }\n}</code></pre>\n      </div>\n<p>现在，我们首先会去选择应用程序在哪个顶级布局中，比如，/auth/login 和 /auth/forgot-password 肯定在 UnauthorizedLayout 中，另外，当用户登陆时，我们将判断所有的路径都有一个 /app 前缀以确保是否登录。如果用户访问 /app 开头的页面但并没有登录，我们将会重定向到登录页面。</p>\n<p>下面就是我写的 AuthorizedRoute 组件，这也是 V4 中一个惊奇的特性，可以为了满足某种需要而书写自己的路由。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">class AuthorizedRoute extends React.Component {\n  componentWillMount() {\n    getLoggedUser();\n  }\n\n  render() {\n    const { component: Component, pending, logged, ...rest } = this.props;\n    return (\n      &lt;Route\n        {...rest}\n        render={props =&gt; {\n          if (pending) return &lt;div&gt;Loading...&lt;/div&gt;;\n          return logged\n            ? &lt;Component {...this.props} /&gt;\n            : &lt;Redirect to=&quot;/auth/login&quot; /&gt;;\n        }}\n      /&gt;\n    );\n  }\n}\n\nconst stateToProps = ({ loggedUserState }) =&gt; ({\n  pending: loggedUserState.pending,\n  logged: loggedUserState.logged\n});\n\nexport default connect(stateToProps)(AuthorizedRoute);</code></pre>\n      </div>\n<p>点击 <a href="http://t.cn/RC7Sc3s" target="_blank" rel="noopener noreferrer">这里</a> 可以查看的我的整个 Authentication。</p>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>React Router 4 相比 V3，变化很大，若是之前的项目使用的 V3，不建议立即升级，但 V4 比 V3 确实存在较大的优势。</p>',fields:{slug:"/2017-08-17-ni-bu-zhi-dao-de-react-router-4/"},internal:{content:'---\ntitle: 你不知道的 React Router 4\noriginal: false\ntag: FrontEnd,React Router 4\ndate: 2017-08-17T17:15:06+08:00\n---\n\n<div class="original-info">\n  <div className="original-address">\n    原文地址：\n    <a\n      href="https://css-tricks.com/react-router-4/"\n      target="_blank"\n      rel="noopener noreferrer"\n    >\n      All About React Router 4\n    </a>\n  </div>\n  <div className="original-auth">作者：James K Nelson</div>\n</div>\n\n> 几个月前，**React Router 4** 发布，我能清晰地感觉到来自 Twitter 大家对新版本中其大量的修改的不同声音，诚然，我在学习 React Router 4 的第一天，也是非常痛苦的，但是，这并不是因为看它的 API，而是反复思考使用它的 **模式** 和 **策略**，因为 V4 的变化确实有点大，V3 的功能它都有，除此之外，还增加了一些特性，我不能直接将使用 V3 的心得直接迁移过来，现在，我必须重新审视 **router** 和 **layout components** 之间的关系\n\n本篇文章不是把 **React Router 4** 的 API 再次呈现给读者看，而是简单介绍其中最常用的几个概念，和重点讲解我在实践的过程中发现的比较好的 **模式** 和 **策略**。\n\n开始阅读之前，你得保证对以下概念并不陌生：\n\n- React stateless（Functional） 组件；\n- ES6 的 箭头函数和它的隐式返回；\n- ES6 的 解构；\n- ES6 的 模板字符串；\n\n## 一个全新的 API\n\nReact Router 的早期版本是將 router 和 layout components 分开，为了彻底搞清楚 V4 究竟有什么不同，下面我们来写两个简单的 demo，demo 就两个 route，一个 home，一个 user。\n\n**V3**：\n\n```JavaScript\nimport React from "react";\nimport { render } from "react-dom";\nimport { Router, Route, IndexRoute, Link, browserHistory } from "react-router";\n\nconst PrimaryLayout = props =>\n  <div className="primary-layout">\n    <header>Our React Router 3 App</header>\n    <ul>\n      <li>\n        <Link to="/">Home</Link>\n      </li>\n      <li>\n        <Link to="/user">User</Link>\n      </li>\n    </ul>\n    <main>\n      {props.children}\n    </main>\n  </div>;\n\nconst HomePage = () => <h1>Home Page</h1>;\nconst UsersPage = () => <h1>User Page</h1>;\n\nconst App = () =>\n  <Router history={browserHistory}>\n    <Route path="/" component={PrimaryLayout}>\n      <IndexRoute component={HomePage} />\n      <Route path="/user" component={UsersPage} />\n    </Route>\n  </Router>;\n\nrender(<App />, document.getElementById("root"));\n```\n\n> 在这里给大家推荐一个在线 react 编译器 [codesandbox](https://codesandbox.io/)，正所谓，实践是检验真理的唯一标准，这也是一种良好的学习习惯。\n\n上面代码主要包含下面几个关键点， 但在 V4 中都不复存在了：\n\n- 集中式 router；\n- 通过 Route 嵌套，实现 Layout 和 page 嵌套；\n- Layout 和 page 组件是作为 router 的一部分；\n\n**V4**：\n\n```JavaScript\nimport React from "react";\nimport { render } from "react-dom";\nimport { BrowserRouter, Route, Link } from "react-router-dom";\n\nconst PrimaryLayout = () =>\n  <div className="primary-layout">\n    <header>Our React Router 4 App</header>\n    <ul>\n      <li>\n        <Link to="/">Home</Link>\n      </li>\n      <li>\n        <Link to="/User">User</Link>\n      </li>\n    </ul>\n    <main>\n      <Route path="/" exact component={HomePage} />\n      <Route path="/user" component={UsersPage} />\n    </main>\n  </div>;\n\nconst HomePage = () => <h1>Home Page</h1>;\nconst UsersPage = () => <h1>User Page</h1>;\n\nconst App = () =>\n  <BrowserRouter>\n    <PrimaryLayout />\n  </BrowserRouter>;\n\nrender(<App />, document.getElementById("root"));\n```\n\n> ⚠️ 注意，我们引入的是 **BrowserRouter**，而且是从 **react-router-dom** 引入，不是 react-router。\n\n相信大家一眼就能看出很多变化，首先，V3 中的 router 不在了，在 V3 中，我们是将整个庞大的 router 直接丢给 DOM，而在 V4 中，除了 BrowserRouter， 我们丢给 DOM 的是我们的应用程序本身。\n\n另外，V4 中，我们不再使用 **props.children** 来嵌套组件了，替代的 **Route**，当 route 匹配时，子组件会被渲染到 Route 书写的地方。\n\n## Inclusive Routing\n\n在上面的 demo 中，读者可能注意到 V4 中有 **exact** 这么一个 props，那么，这个 props 有什么用呢？ V3 中的 routing 规则是 **exclusive**，意思就是最终只获取一个 route，而 V4 中的 routes 默认是 **inclusive**，这就意味着多个 Route 可以同时匹配和呈现。\n\n还是使用上面的 demo，如果我们调皮地删除 **exact** 这个 props，那么我们在访问 /user 的时候，Home 和 User 两个 Page 都将被渲染，是不是恍然大明白了。\n\n> 为了更好地理解 V4 的匹配逻辑，可以查看 [path-to-regexp](http://t.cn/RCZlIbF)，就是它决定 routes 是否匹配 URL。\n\n为了演示 **inclusive routing** 的作用，我们新增一个 UserMenu 组件如下。\n\n```JavaScript\nconst PrimaryLayout = () =>\n  <div className="primary-layout">\n    <header>\n      Our React Router 4 App\n      <Route path="/user" component={UsersMenu} />\n    </header>\n    <main>\n      <Route path="/" exact component={HomePage} />\n      <Route path="/user" component={UsersPage} />\n    </main>\n  </div>;\n```\n\n现在，当访问 /user 时，两个组价都会被渲染，在 V3 中存在一些模式也可以实现，但其过程却比较复杂，在 V4 中，是不是瞬间感觉轻松了很多。\n\n## Exclusive Routing\n\n如果你只想匹配一个 route，那么你也可以使用 **Switch** 来 exclusive routing。\n\n```JavaScript\nconst PrimaryLayout = () =>\n  <div className="primary-layout">\n    <PrimaryHeader />\n    <main>\n      <Switch>\n        <Route path="/" exact component={HomePage} />\n        <Route path="/user/add" component={UserAddPage} />\n        <Route path="/user" component={UsersPage} />\n        <Redirect to="/" />\n      </Switch>\n    </main>\n  </div>;\n```\n\n在 **Switch** 中只有一个 Route 会被渲染，另外，我们还是要给 HomePage 所在 Route 添加 **exact**，否则，在访问 /user 或 /user/add 的时候还是会匹配到 /。同理，不知有没同学注意到，我们将 /user/add 放在 /user 前面是保证正确匹配很有策略性的一步，因为，/user/add 会同时匹配 /user 和 /user/add，如果不这么做，大家可以尝试交换它们两个的位置，看下会发生什么。\n\n当然，如果我们给每一个 Route 都添加一个 **exact**，那就不用考虑上面的策略问题了，但至少现在，我们懂的更多。\n\n**Redirect** 组件不用多说，执行浏览器重定向，但它在 **Switch** 中时，Redirect 组件只会在 routes 匹配不成功的情况下渲染，另外，要想了解 Redirect 如何在 **non-switch** 环境下使用，可以参考下面的 Authorized Route。\n\n## "Index Routes" 和 "Not Found"\n\nV4 中也没有 **IndexRoute**，但 Route exact 可以实现相同的功能，或者 Switch 和 Redirect 重定向到默认的有效路径，甚至一个找不到的页面。\n\n## 嵌套布局\n\n接下来，你可能很想知道 V4 中是如何实现嵌套布局的，V4 确实给我们了很多选择，但这并不一定是好事，表面上，嵌套布局微不足道，但选择的空间越大，出现的问题也就可能越多。\n\n现在，我们假设我们要增加两个 user 相关的页面，一个 browse user，一个 user profile，对 product 我们也有相同的需求，实现的方法可能并不少，但有的仔细思考后可能并不会采纳。\n\n第一种，如下修改 PrimaryLayout：\n\n```JavaScript\nconst PrimaryLayout = props => {\n  return (\n    <div className="primary-layout">\n      <PrimaryHeader />\n      <main>\n        <Switch>\n          <Route path="/" exact component={HomePage} />\n          <Route path="/user" exact component={BrowseUsersPage} />\n          <Route path="/user/:userId" component={UserProfilePage} />\n          <Route path="/products" exact component={BrowseProductsPage} />\n          <Route path="/products/:productId" component={ProductProfilePage} />\n          <Redirect to="/" />\n        </Switch>\n      </main>\n    </div>\n  );\n};\n```\n\n虽然这种方法可以实现，但仔细观察下面的两个 user 页面，就会发现有点潜在的问题。\n\n```JavaScript\nconst BrowseUsersPage = () => (\n  <div className="user-sub-layout">\n    <aside>\n      <UserNav />\n    </aside>\n    <div className="primary-content">\n      <BrowseUserTable />\n    </div>\n  </div>\n)\n\nconst UserProfilePage = props => (\n  <div className="user-sub-layout">\n    <aside>\n      <UserNav />\n    </aside>\n    <div className="primary-content">\n      <UserProfile userId={props.match.params.userId} />\n    </div>\n  </div>\n)\n```\n\n> userId 通过 **props.match.params** 获取，props.match 赋予给了 Route 中的任何组件。除此之外，如果组件不通过 Route 来渲染，要访问 props.match，可以使用 withRouter() 高阶组件来实现。\n\n估计大家都发现了吧，两个 user 页面中都有一个 UserNav，这明显会导致不必要的请求，以上只是一个简单 demo，如果是在真实的项目中，不知道会重复消耗多少的流量，然而，这就是由我们采用以上方式使用路由引起的。\n\n接下来，我们再看看另一种实现方式：\n\n```JavaScript\nconst PrimaryLayout = props => {\n  return (\n    <div className="primary-layout">\n      <PrimaryHeader />\n      <main>\n        <Switch>\n          <Route path="/" exact component={HomePage} />\n          <Route path="/user" component={UserSubLayout} />\n          <Route path="/products" component={ProductSubLayout} />\n          <Redirect to="/" />\n        </Switch>\n      </main>\n    </div>\n  );\n};\n```\n\n我们用 2 个 routes 替换之前的 4 个 routes。\n\n> ⚠️ 注意，这里我们没有再使用 **exact**，因为，我们希望 /user 可以匹配任何以 /user 开始的 route，products 同理。\n\n使用这种策略，子布局也开始承担起了渲染 routes 的职责：\n\n```JavaScript\nconst UserSubLayout = () =>\n  <div className="user-sub-layout">\n    <aside>\n      <UserNav />\n    </aside>\n    <div className="primary-content">\n      <Switch>\n        <Route path="/user" exact component={BrowseUsersPage} />\n        <Route path="/user/:userId" component={UserProfilePage} />\n      </Switch>\n    </div>\n  </div>;\n```\n\n是不是很好解决了第一种方式中的重复渲染等问题呢？\n\n另外，routes 需要识别它的完整路径才能匹配，为了减少我们的重复输入，我们可以使用 **props.match.path** 来代替。\n\n```JavaScript\nconst UserSubLayout = props =>\n  <div className="user-sub-layout">\n    <aside>\n      <UserNav />\n    </aside>\n    <div className="primary-content">\n      <Switch>\n        <Route path={props.match.path} exact component={BrowseUsersPage} />\n        <Route\n          path={`${props.match.path}/:userId`}\n          component={UserProfilePage}\n        />\n      </Switch>\n    </div>\n  </div>;\n```\n\n## Match\n\n正如我们上面看到的那样，**props.match** 可以帮我们获取 userId 和 routes。\n\nmatch 对象为我们提供了 **match.params**，**match.path**，和 **match.url** 等属性。\n\n### match.path VS match.url\n\n最开始，可能觉得这两者并没有什么区别。\n\n```JavaScript\nconst UserSubLayout = ({ match }) => {\n  console.log(match.url)   // output: "/user"\n  console.log(match.path)  // output: "/user"\n  return (\n    <div className="user-sub-layout">\n      <aside>\n        <UserNav />\n      </aside>\n      <div className="primary-content">\n        <Switch>\n          <Route path={match.path} exact component={BrowseUsersPage} />\n          <Route path={`${match.path}/:userId`} component={UserProfilePage} />\n        </Switch>\n      </div>\n    </div>\n  )\n}\n```\n\n> match 在组件的参数中被 **解构**，我们可以使用 match.path 代替 props.match.path。\n\n虽然控制台的输出一模一样，但我们需要明白的是：**match.url** 是浏览器 URL 的一部分，**match.path** 是我们 router 书写的路径。\n\n### 如何选择\n\n如果我们是构建 route 路径，那么肯定使用 **match.path**。\n\n为了说明问题，我们创建两个子组件，一个 route 路径来自 **match.url**，一个 route 路径来自 **match.path**。\n\n```JavaScript\nconst UserComments = ({ match }) =>\n  <div>\n    UserId: {match.params.userId}\n  </div>;\n\nconst UserSettings = ({ match }) =>\n  <div>\n    UserId: {match.params.userId}\n  </div>;\n\nconst UserProfilePage = ({ match }) =>\n  <div>\n    User Profile:\n    <Route path={`${match.url}/comments`} component={UserComments} />\n    <Route path={`${match.path}/settings`} component={UserSettings} />\n  </div>;\n```\n\n然后，我们按下面方式来访问：\n\n- /user/5/comments\n- /user/5/settings\n\n实践后，我们发现，访问 comments 返回的是 undefined，访问 settings 返回的是 5。\n\n正如 API 所述:\n\n- path - (string) The path pattern used to match. Useful for building nested <Route>s\n- url - (string) The matched portion of the URL. Useful for building nested <Link>s\n\n## 避免 Match Collisions\n\n假设我们的 App 是一个仪表盘，我们希望访问 /user/add 和 /user/5/edit 添加和编辑 user。使用上面的实例，user/:userId 已经指向 UserProfilePage，我们这是需要在 UserProfilePage 中再添加一层 routes 么？显然不是这样的。\n\n```JavaScript\nconst UserSubLayou = ({ match }) =>\n  <div className="user-sub-layout">\n    <aside>\n      <UserNav />\n    </aside>\n    <div className="primary-content">\n      <Switch>\n        <Route exact path={match.path} component={BrowseUsersPage} />\n        <Route path={`${match.path}/add`} component={AddUserPage} />\n        <Route path={`${match.path}/:userId/edit`} component={EditUserPage} />\n        <Route path={`${match.path}/:userId`} component={UserProfilePage} />\n      </Switch>\n    </div>\n  </div>;\n```\n\n现在，看清楚这个策略了么。\n\n另外，我们可以使用 **${match.path}/:userId(\\\\d+)** 作为 UserProfilePage 对应的 path，保证 :userId 是一个数字，可以避免与 /users/add 的冲突，这样，将其所在的 Route 丢到最前面去也能正常访问 add 页面，这一招，就是我在 [path-to-regexp](http://t.cn/RCZlIbF) 学的。\n\n## Authorized Route\n\n在应用程序中限制未登录的用户访问某些路由是非常常见的，还有对于授权和未授权的用户 UI 也可能大不一样，为了解决这样的需求，我们可以考虑为应用程序设置一个主入口。\n\n```JavaScript\nclass App extends React.Component {\n  render() {\n    return (\n      <Provider store={store}>\n        <BrowserRouter>\n          <Switch>\n            <Route path="/auth" component={UnauthorizedLayout} />\n            <AuthorizedRoute path="/app" component={PrimaryLayout} />\n          </Switch>\n        </BrowserRouter>\n      </Provider>\n    )\n  }\n}\n```\n\n现在，我们首先会去选择应用程序在哪个顶级布局中，比如，/auth/login 和 /auth/forgot-password 肯定在 UnauthorizedLayout 中，另外，当用户登陆时，我们将判断所有的路径都有一个 /app 前缀以确保是否登录。如果用户访问 /app 开头的页面但并没有登录，我们将会重定向到登录页面。\n\n下面就是我写的 AuthorizedRoute 组件，这也是 V4 中一个惊奇的特性，可以为了满足某种需要而书写自己的路由。\n\n```JavaScript\nclass AuthorizedRoute extends React.Component {\n  componentWillMount() {\n    getLoggedUser();\n  }\n\n  render() {\n    const { component: Component, pending, logged, ...rest } = this.props;\n    return (\n      <Route\n        {...rest}\n        render={props => {\n          if (pending) return <div>Loading...</div>;\n          return logged\n            ? <Component {...this.props} />\n            : <Redirect to="/auth/login" />;\n        }}\n      />\n    );\n  }\n}\n\nconst stateToProps = ({ loggedUserState }) => ({\n  pending: loggedUserState.pending,\n  logged: loggedUserState.logged\n});\n\nexport default connect(stateToProps)(AuthorizedRoute);\n```\n\n点击 [这里](http://t.cn/RC7Sc3s) 可以查看的我的整个 Authentication。\n\n## 总结\nReact Router 4 相比 V3，变化很大，若是之前的项目使用的 V3，不建议立即升级，但 V4 比 V3 确实存在较大的优势。'
},frontmatter:{title:"你不知道的 React Router 4",tag:"FrontEnd,React Router 4",date:"2017-08-17",original:!1}}},pathContext:{slug:"/2017-08-17-ni-bu-zhi-dao-de-react-router-4/"}}}});