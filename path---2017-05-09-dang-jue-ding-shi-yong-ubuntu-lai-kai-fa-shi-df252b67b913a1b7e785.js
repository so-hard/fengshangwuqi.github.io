webpackJsonp([77691349768468],{758:function(n,a){n.exports={data:{site:{siteMetadata:{siteUrl:"https://fengshangwuqi.github.io"}},markdownRemark:{html:'<h2 id="入门"><a href="#%E5%85%A5%E9%97%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>入门</h2>\n<h3 id="目录"><a href="#%E7%9B%AE%E5%BD%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>目录</h3>\n<ul>\n<li><strong>/home</strong>：用户的主目录</li>\n<li><strong>/boot</strong>：启动目录，启动相关文件</li>\n<li><strong>/sbin</strong>：超级用户才能使用的目录</li>\n<li><strong>/root</strong>：超级用户的主目录</li>\n<li><strong>/proc</strong>：系统内存的映射</li>\n<li><strong>/dev</strong>：设备文件保存目录</li>\n<li><strong>/etc</strong>：配置文件保存目录</li>\n<li><strong>/lib</strong>：系统库保存目录</li>\n<li><strong>/usr</strong>：系统软件资源目录</li>\n<li><strong>/var</strong>：经常变化目录，经常放日志文件</li>\n<li><strong>/tmp</strong>：临时目录</li>\n</ul>\n<h3 id="终端"><a href="#%E7%BB%88%E7%AB%AF" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>终端</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ ctrl + alt + t    // 新窗口打开终端\n$ ctrl + <span class="token function">shift</span> + t  // 新标签页打开终端</code></pre>\n      </div>\n<h3 id="获取-root-权限"><a href="#%E8%8E%B7%E5%8F%96-root-%E6%9D%83%E9%99%90" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>获取 root 权限</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">passwd</span> root      // 激活账号，设置密码\n$ <span class="token function">sudo</span> <span class="token function">passwd</span> -l root   // 再次禁用 root 帐号</code></pre>\n      </div>\n<h3 id="安装"><a href="#%E5%AE%89%E8%A3%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> package    // 安装包\n$ <span class="token function">sudo</span> dpkg -i package_file.deb   // 安装 .deb 文件</code></pre>\n      </div>\n<h3 id="删除"><a href="#%E5%88%A0%E9%99%A4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>删除</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">apt-get</span> remove package           // 删除包\n$ <span class="token function">sudo</span> <span class="token function">apt-get</span> remove --purge package   // 删除包和配置文件\n$ <span class="token function">sudo</span> dpkg -r package_name             // 卸载 .deb 文件\n$ <span class="token function">sudo</span> dpkg -P package                  // 删除包和配置文件</code></pre>\n      </div>\n<h3 id="更新"><a href="#%E6%9B%B4%E6%96%B0" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更新</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update   // 更新源\n$ <span class="token function">sudo</span> <span class="token function">apt-get</span> upgrade  // 更新已安装的包</code></pre>\n      </div>\n<h3 id="清理"><a href="#%E6%B8%85%E7%90%86" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>清理</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">apt-get</span> autoclean  // 清理已经卸载的包\n$ <span class="token function">sudo</span> <span class="token function">apt-get</span> clean      // 清理所有的安装包\n$ <span class="token function">sudo</span> <span class="token function">apt-get</span> autoremove // 清理因依赖而安装但现在不再需要的包</code></pre>\n      </div>\n<h2 id="可能遇到的一些问题"><a href="#%E5%8F%AF%E8%83%BD%E9%81%87%E5%88%B0%E7%9A%84%E4%B8%80%E4%BA%9B%E9%97%AE%E9%A2%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>可能遇到的一些问题</h2>\n<h3 id="开机启动项没有-windows"><a href="#%E5%BC%80%E6%9C%BA%E5%90%AF%E5%8A%A8%E9%A1%B9%E6%B2%A1%E6%9C%89-windows" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>开机启动项没有 windows</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> update-grub</code></pre>\n      </div>\n<h3 id="更改-hosts"><a href="#%E6%9B%B4%E6%94%B9-hosts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更改 hosts</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> gedit /etc/hosts</code></pre>\n      </div>\n<h3 id="安装搜狗输入法"><a href="#%E5%AE%89%E8%A3%85%E6%90%9C%E7%8B%97%E8%BE%93%E5%85%A5%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>安装搜狗输入法</h3>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">下载 -&gt; 系统设置 -&gt; 语言支持 -&gt; 键盘输入法系统 =&gt; fcitx</code></pre>\n      </div>\n<h3 id="解决端口冲突"><a href="#%E8%A7%A3%E5%86%B3%E7%AB%AF%E5%8F%A3%E5%86%B2%E7%AA%81" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>解决端口冲突</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">lsof</span> -i:8000      // 查看 8000 端口\n$ <span class="token function">kill</span> 对应的 pid    // 停止使用这个端口的程序</code></pre>\n      </div>\n<h3 id="设置环境变量"><a href="#%E8%AE%BE%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>设置环境变量</h3>\n<p>对所有用户生效：</p>\n<ul>\n<li>/etc/profile：为系统的每个用户设置环境信息</li>\n<li>/etc/bashrc：每次新打开一个终端 shell，该文件被读取</li>\n</ul>\n<p>对单个用户生效：</p>\n<ul>\n<li>/.bash_profile：当用户登录时该文件仅执行一次</li>\n<li>/.bashrc：当登录以及每次打开新的 shell 时，该文件被读取</li>\n</ul>\n<p>使用 <strong>source /etc/environment</strong> 可以使变量设置在当前窗口立即生效，需 <strong>注销/重启</strong> 之后，才能对每个新终端窗口都生效。</p>\n<h3 id="设置-java-环境变量"><a href="#%E8%AE%BE%E7%BD%AE-java-%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>设置 JAVA 环境变量</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># 更改配置文件</span>\n$ <span class="token function">sudo</span> gedit /etc/profile\n\n<span class="token comment"># set java environment</span>\n<span class="token function">export</span> JAVA_HOME<span class="token operator">=</span>/home/feng/download/jdk1.8.0_131\n<span class="token function">export</span> JRE_HOME<span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/jre\n<span class="token function">export</span> CLASSPATH<span class="token operator">=</span>.:<span class="token variable">$CLASSPATH</span><span class="token keyword">:</span><span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$JRE_HOME</span>/lib\n<span class="token function">export</span> PATH<span class="token operator">=</span><span class="token variable">$PATH</span><span class="token keyword">:</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token variable">$JRE_HOME</span>/bin</code></pre>\n      </div>\n<p><a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank" rel="noopener noreferrer">Java SE Development Kit 8 Downloads</a></p>\n<h3 id="没有-wifi-选项"><a href="#%E6%B2%A1%E6%9C%89-wifi-%E9%80%89%E9%A1%B9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>没有 WIFI 选项</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> apt <span class="token function">install</span> linux-generic-hwe-16.04  // LTSEnablementStack</code></pre>\n      </div>\n<h3 id="使用-vim"><a href="#%E4%BD%BF%E7%94%A8-vim" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用 vim</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> apt <span class="token function">install</span> vim</code></pre>\n      </div>\n<p><a href="https://fengshangwuqi.github.io/2017-10-08-ru-he-rang-vim-cheng-wei-wo-men-de-shen-qi/" target="_blank" rel="noopener noreferrer">如何让 vim 成为我们的神器</a></p>\n<h3 id="文件操作"><a href="#%E6%96%87%E4%BB%B6%E6%93%8D%E4%BD%9C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>文件操作</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">pwd</span>         // 输出当前工作目录的绝对路径\n$ <span class="token function">rmdir</span>       // 移除空文件\n$ <span class="token function">rm</span> -rf      // 删除目录包含子目录和文件\n$ <span class="token function">mv</span>          // 重命名/移动文件/目录\n$ <span class="token function">cp</span>          // 复制文件\n$ <span class="token function">cp</span> -r       // 复制目录\n$ <span class="token function">ls</span> -l       // 显示文件详细信息\n$ <span class="token function">chmod</span> -/+   // 修改文件权限\n$ <span class="token function">zip</span> -r XX.zip XX\n$ unzip XX.zip</code></pre>\n      </div>\n<h3 id="编辑图片"><a href="#%E7%BC%96%E8%BE%91%E5%9B%BE%E7%89%87" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>编辑图片</h3>\n<p><strong>gimp</strong> 类似 PS，功能十分强大，若只是裁剪图片，可以使用自带的截屏软件 <strong>gnome-screenshot</strong>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$  <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> gimp</code></pre>\n      </div>\n<h3 id="扁平化主题"><a href="#%E6%89%81%E5%B9%B3%E5%8C%96%E4%B8%BB%E9%A2%98" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>扁平化主题</h3>\n<p><a href="https://github.com/anmoljagetia/Flatabulous" target="_blank" rel="noopener noreferrer">Flatabulous</a></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Ubuntu Tweak：\n# GTK 主题：Flatabulous\n# 图表主题：Ultra-Flat\n# 光标主题：DMZ-Black\n# 窗口主题：Flatabulous</code></pre>\n      </div>\n<h3 id="护眼应用"><a href="#%E6%8A%A4%E7%9C%BC%E5%BA%94%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>护眼应用</h3>\n<p><a href="https://justgetflux.com/" target="_blank" rel="noopener noreferrer">f.lux</a></p>\n<h3 id="使用-curl"><a href="#%E4%BD%BF%E7%94%A8-curl" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用 curl</h3>\n<p>一个利用 URL 语法在命令行下工作的 <strong>文件传输工具</strong>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># 执行下载</span>\n<span class="token comment">## 抓取页面内容到一个文件中</span>\n$ curl -o index.html https://www.baidu.com/\n<span class="token comment">## 只打印头部信息</span>\n$ curl -I https://www.baidu.com/\n<span class="token comment">## 显示抓取错误</span>\n$ curl -f https://segmentfault.com/n/1330000011469701\n\n<span class="token comment"># 发送请求</span>\n<span class="token comment">## GET</span>\n$ curl -i -H <span class="token string">"Accept: application/json"</span> -H <span class="token string">"Content-Type: application/json"</span> http://hostname/resource\n<span class="token comment">## POST</span>\n$ curl -i -H <span class="token string">"Content-Type: application/json"</span> -X POST -d <span class="token string">\'{"username":"xyz","password":"xyz"}\'</span> http://hostname/resource</code></pre>\n      </div>\n<h3 id="更新源失败"><a href="#%E6%9B%B4%E6%96%B0%E6%BA%90%E5%A4%B1%E8%B4%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>更新源失败</h3>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># 错误提示</span>\n校验数字签名时出错。此仓库未被更新，所以仍然使用此前的索引文件。GPG 错误：https://dl.yarnpkg.com/debian stable InRelease: 由于没有公钥，无法验证下列签名： NO_PUBKEY\n\n<span class="token comment"># 错误原因</span>\n- 人为造成，更新系统或添加 PPA\n- 无缘无故出现，如软件源服务器被黑造成了签名被篡改、文件被替换或与服务器的中间传输被某些人重置（如DNS被污染）\n- 储存 APT 数据和 GPG 签名的目录 /var/lib/apt/ 损坏（这种情况一般会同时伴有其他严重问题）\n\n<span class="token comment"># 解决方案</span>\n<span class="token comment">## 重新加入以上出现问题的apt-key</span>\n$ <span class="token function">sudo</span> apt-key adv --recv-keys --keyserver keyserver.ubuntu.com PGP签名</code></pre>\n      </div>\n<h3 id="录制-gif"><a href="#%E5%BD%95%E5%88%B6-gif" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>录制 GIF</h3>\n<p>byzanz 能制作文件小，清晰的 GIF 动态效果图，不足就是，目前只能通过输入命令方式来录制</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># 安装</span>\n$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> byzanz\n\n<span class="token comment"># xwininfo</span>\n查询要录制的窗口位置、宽度和高度\n\n<span class="token comment"># 示例</span>\n$ byzanz-record -x 0 -y 24 -w 1920 -h 1056 -c -d 10 --delay<span class="token operator">=</span>3 -v app.gif</code></pre>\n      </div>\n<h3 id="硬链接与软链接"><a href="#%E7%A1%AC%E9%93%BE%E6%8E%A5%E4%B8%8E%E8%BD%AF%E9%93%BE%E6%8E%A5" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>硬链接与软链接</h3>\n<p>为解决文件的共享使用，Linux 系统引入了两种链接：<strong>硬链接</strong>(hard link) 与 <strong>软链接</strong>（又称 <strong>符号链接</strong>，即 soft link 或 symbolic link）</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">ln</span> 源文件 目标文件   // 硬链接\n$ <span class="token function">ln</span> -s 源文件或目录 目标文件或目录  // 软链接</code></pre>\n      </div>\n<h3 id="修改终端提示符"><a href="#%E4%BF%AE%E6%94%B9%E7%BB%88%E7%AB%AF%E6%8F%90%E7%A4%BA%E7%AC%A6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>修改终端提示符</h3>\n<p><strong>PS1</strong> 是 Linux 终端用户的一个环境变量，用来定义命令行提示符的参数。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/PS1-9cd627a143f92ccd410b42b45959413e-f404e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 16.50485436893204%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAIAAAAcOLh5AAAACXBIWXMAAAsSAAALEgHS3X78AAAAbklEQVQI12PwdrTQ9TJVNzbTNrVQMTBWMTBRNzbVNDGX1tDRs3bQs7aT0dSV1zFAQ3La+soGxgwMOpZMWpYchjacRrYs+pas+lbsYDaDlimDpgkIaZthQVqmLHqWDAzapiCkhYG0zRh1zIEIj2YATHwadwXsS9sAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="PS1"\n        title=""\n        src="/static/PS1-9cd627a143f92ccd410b42b45959413e-73c38.png"\n        srcset="/static/PS1-9cd627a143f92ccd410b42b45959413e-5902b.png 165w,\n/static/PS1-9cd627a143f92ccd410b42b45959413e-f6c9c.png 330w,\n/static/PS1-9cd627a143f92ccd410b42b45959413e-73c38.png 660w,\n/static/PS1-9cd627a143f92ccd410b42b45959413e-f404e.png 721w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># 查看默认设置</span>\n$ <span class="token keyword">echo</span> <span class="token variable">$PS1</span>\n\n<span class="token comment"># 常用参数及其含义</span>\n\\H    完整的主机名\n\\h    主机中的第一个名字\n\\u    当前用户的账号名称\n\\w    完整的工作目录名称\n\\$    提示字符，如果是root用户，提示为<span class="token comment">#，普通用户则为$</span>\n\n<span class="token comment"># 临时修改</span>\n$ <span class="token function">export</span> PS1<span class="token operator">=</span><span class="token string">\'[\\u@\\h\\w]\\$\'</span>\n\n<span class="token comment"># 永久修改</span>\n$ vim /.bashrc</code></pre>\n      </div>\n<h3 id="tmux"><a href="#tmux" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tmux</h3>\n<p><strong>Tmux</strong> 是 Linux 的终端利器，不仅可以拆分窗口，还可以在在 <strong>SSH</strong> 环境下，避免网络不稳定，导致工作现场的丢失，一个窗口，帮你搞定所有。</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/tmux-3861fd057f8eab4da618c0035f2ac979-64449.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 660px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 23.375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAAA20lEQVQY002OvU4EMQyE8who9zaJHdu5/HF3LCeuoEFUiGbFdUggGqCkQLx/i3eXgi8jy1ImmTG1trwA4FUKM+6vDsfjzThel1JyLutMKc2+UojIqxfAWOfmR4CAQaULS1Q3s+iJ/xCR7YIsMLNpuwNxDCTAUeUDU9I2l2taLQu15r8KVe/0GwpB801sxQmkfQO7gf7CW0sxqXEN0RoIEnmrycQ8p8c4EG2ss8Ngvu+mn9Pb13jOt5OdPn3aIQYrtev7vuvum3t4DDQOztuA6BFLwPfEH+en55fXXySbJ33FtQn0AAAAAElFTkSuQmCC\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="tmux"\n        title=""\n        src="/static/tmux-3861fd057f8eab4da618c0035f2ac979-73c38.png"\n        srcset="/static/tmux-3861fd057f8eab4da618c0035f2ac979-5902b.png 165w,\n/static/tmux-3861fd057f8eab4da618c0035f2ac979-f6c9c.png 330w,\n/static/tmux-3861fd057f8eab4da618c0035f2ac979-73c38.png 660w,\n/static/tmux-3861fd057f8eab4da618c0035f2ac979-64449.png 800w"\n        sizes="(max-width: 660px) 100vw, 660px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://github.com/FengShangWuQi/to-vim-tmux-zsh" target="_blank" rel="noopener noreferrer">to-vim-tmux-zsh</a></p>',fields:{slug:"/2017-05-09-dang-jue-ding-shi-yong-ubuntu-lai-kai-fa-shi/"},internal:{content:'---\ntitle: 当决定使用 Ubuntu 来开发时\noriginal: true\ntag: Linux,Ubuntu\ndate: 2017-05-09T16:01:20+08:00\n---\n\n## 入门\n\n### 目录\n\n- **/home**：用户的主目录\n- **/boot**：启动目录，启动相关文件\n- **/sbin**：超级用户才能使用的目录\n- **/root**：超级用户的主目录\n- **/proc**：系统内存的映射\n- **/dev**：设备文件保存目录\n- **/etc**：配置文件保存目录\n- **/lib**：系统库保存目录\n- **/usr**：系统软件资源目录\n- **/var**：经常变化目录，经常放日志文件\n- **/tmp**：临时目录\n\n### 终端\n\n```bash\n$ ctrl + alt + t    // 新窗口打开终端\n$ ctrl + shift + t  // 新标签页打开终端\n```\n\n### 获取 root 权限\n\n```bash\n$ sudo passwd root      // 激活账号，设置密码\n$ sudo passwd -l root   // 再次禁用 root 帐号\n```\n\n### 安装\n\n```bash\n$ sudo apt-get install package    // 安装包\n$ sudo dpkg -i package_file.deb   // 安装 .deb 文件\n```\n\n### 删除\n\n```bash\n$ sudo apt-get remove package           // 删除包\n$ sudo apt-get remove --purge package   // 删除包和配置文件\n$ sudo dpkg -r package_name             // 卸载 .deb 文件\n$ sudo dpkg -P package                  // 删除包和配置文件\n```\n\n### 更新\n\n```bash\n$ sudo apt-get update   // 更新源\n$ sudo apt-get upgrade  // 更新已安装的包\n```\n\n###  清理\n\n```bash\n$ sudo apt-get autoclean  // 清理已经卸载的包\n$ sudo apt-get clean      // 清理所有的安装包\n$ sudo apt-get autoremove // 清理因依赖而安装但现在不再需要的包\n```\n\n## 可能遇到的一些问题\n\n### 开机启动项没有 windows\n\n```bash\n$ sudo update-grub\n```\n\n###  更改 hosts\n\n```bash\n$ sudo gedit /etc/hosts\n```\n\n### 安装搜狗输入法\n\n```\n下载 -> 系统设置 -> 语言支持 -> 键盘输入法系统 => fcitx\n```\n\n###  解决端口冲突\n\n```bash\n$ lsof -i:8000      // 查看 8000 端口\n$ kill 对应的 pid    // 停止使用这个端口的程序\n```\n\n### 设置环境变量\n\n对所有用户生效：\n\n- /etc/profile：为系统的每个用户设置环境信息\n- /etc/bashrc：每次新打开一个终端 shell，该文件被读取\n\n对单个用户生效：\n\n- /.bash_profile：当用户登录时该文件仅执行一次\n- /.bashrc：当登录以及每次打开新的 shell 时，该文件被读取\n\n使用 **source /etc/environment** 可以使变量设置在当前窗口立即生效，需 **注销/重启** 之后，才能对每个新终端窗口都生效。\n\n### 设置 JAVA 环境变量\n\n```bash\n# 更改配置文件\n$ sudo gedit /etc/profile\n\n# set java environment\nexport JAVA_HOME=/home/feng/download/jdk1.8.0_131\nexport JRE_HOME=$JAVA_HOME/jre\nexport CLASSPATH=.:$CLASSPATH:$JAVA_HOME/lib:$JRE_HOME/lib\nexport PATH=$PATH:$JAVA_HOME/bin:$JRE_HOME/bin\n```\n\n[Java SE Development Kit 8 Downloads](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)\n\n### 没有 WIFI 选项\n\n```bash\n$ sudo apt install linux-generic-hwe-16.04  // LTSEnablementStack\n```\n\n### 使用 vim\n\n```bash\n$ sudo apt install vim\n```\n\n[如何让 vim 成为我们的神器](https://fengshangwuqi.github.io/2017-10-08-ru-he-rang-vim-cheng-wei-wo-men-de-shen-qi/)\n\n### 文件操作\n\n```bash\n$ pwd         // 输出当前工作目录的绝对路径\n$ rmdir       // 移除空文件\n$ rm -rf      // 删除目录包含子目录和文件\n$ mv          // 重命名/移动文件/目录\n$ cp          // 复制文件\n$ cp -r       // 复制目录\n$ ls -l       // 显示文件详细信息\n$ chmod -/+   // 修改文件权限\n$ zip -r XX.zip XX\n$ unzip XX.zip\n```\n\n### 编辑图片\n\n**gimp** 类似 PS，功能十分强大，若只是裁剪图片，可以使用自带的截屏软件 **gnome-screenshot**。\n\n```bash\n$  sudo apt-get install gimp\n```\n\n### 扁平化主题\n\n[Flatabulous](https://github.com/anmoljagetia/Flatabulous)\n\n```\nUbuntu Tweak：\n# GTK 主题：Flatabulous\n# 图表主题：Ultra-Flat\n# 光标主题：DMZ-Black\n# 窗口主题：Flatabulous\n```\n\n### 护眼应用\n\n[f.lux](https://justgetflux.com/)\n\n### 使用 curl\n\n一个利用 URL 语法在命令行下工作的 **文件传输工具**。\n\n```bash\n# 执行下载\n## 抓取页面内容到一个文件中\n$ curl -o index.html https://www.baidu.com/\n## 只打印头部信息\n$ curl -I https://www.baidu.com/\n## 显示抓取错误\n$ curl -f https://segmentfault.com/n/1330000011469701\n\n# 发送请求\n## GET\n$ curl -i -H "Accept: application/json" -H "Content-Type: application/json" http://hostname/resource\n## POST\n$ curl -i -H "Content-Type: application/json" -X POST -d \'{"username":"xyz","password":"xyz"}\' http://hostname/resource\n```\n\n### 更新源失败\n\n```bash\n# 错误提示\n校验数字签名时出错。此仓库未被更新，所以仍然使用此前的索引文件。GPG 错误：https://dl.yarnpkg.com/debian stable InRelease: 由于没有公钥，无法验证下列签名： NO_PUBKEY\n\n# 错误原因\n- 人为造成，更新系统或添加 PPA\n- 无缘无故出现，如软件源服务器被黑造成了签名被篡改、文件被替换或与服务器的中间传输被某些人重置（如DNS被污染）\n- 储存 APT 数据和 GPG 签名的目录 /var/lib/apt/ 损坏（这种情况一般会同时伴有其他严重问题）\n\n# 解决方案\n## 重新加入以上出现问题的apt-key\n$ sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com PGP签名\n```\n\n### 录制 GIF\n\nbyzanz 能制作文件小，清晰的 GIF 动态效果图，不足就是，目前只能通过输入命令方式来录制\n\n```bash\n# 安装\n$ sudo apt-get install byzanz\n\n# xwininfo\n查询要录制的窗口位置、宽度和高度\n\n# 示例\n$ byzanz-record -x 0 -y 24 -w 1920 -h 1056 -c -d 10 --delay=3 -v app.gif\n```\n\n### 硬链接与软链接\n为解决文件的共享使用，Linux 系统引入了两种链接：**硬链接**(hard link) 与 **软链接**（又称 **符号链接**，即 soft link 或 symbolic link）\n\n```bash\n$ ln 源文件 目标文件   // 硬链接\n$ ln -s 源文件或目录 目标文件或目录  // 软链接\n```\n\n### 修改终端提示符\n\n**PS1** 是 Linux 终端用户的一个环境变量，用来定义命令行提示符的参数。\n\n![PS1](./images/PS1.png)\n\n```bash\n# 查看默认设置\n$ echo $PS1\n\n# 常用参数及其含义\n\\H    完整的主机名\n\\h    主机中的第一个名字\n\\u    当前用户的账号名称\n\\w    完整的工作目录名称\n\\$    提示字符，如果是root用户，提示为#，普通用户则为$\n\n# 临时修改\n$ export PS1=\'[\\u@\\h\\w]\\$\'\n\n# 永久修改\n$ vim /.bashrc\n```\n\n### Tmux\n**Tmux** 是 Linux 的终端利器，不仅可以拆分窗口，还可以在在 **SSH** 环境下，避免网络不稳定，导致工作现场的丢失，一个窗口，帮你搞定所有。\n\n![tmux](./images/tmux.png)\n\n[to-vim-tmux-zsh](https://github.com/FengShangWuQi/to-vim-tmux-zsh)\n'
},frontmatter:{title:"当决定使用 Ubuntu 来开发时",tag:"Linux,Ubuntu",date:"2017-05-09",original:!0}}},pathContext:{slug:"/2017-05-09-dang-jue-ding-shi-yong-ubuntu-lai-kai-fa-shi/"}}}});