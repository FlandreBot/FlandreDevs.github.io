import{_ as s,c as n,o as a,a as l}from"./app.502e5375.js";const u=JSON.parse('{"title":"OneBot 适配器","description":"","frontmatter":{},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"启动 OneBot 服务","slug":"启动-onebot-服务","link":"#启动-onebot-服务","children":[]},{"level":2,"title":"添加适配器","slug":"添加适配器","link":"#添加适配器","children":[]}],"relativePath":"ecosystem/adapters/onebot.md","lastUpdated":1677953005000}'),p={name:"ecosystem/adapters/onebot.md"},o=l(`<h1 id="onebot-适配器" tabindex="-1">OneBot 适配器 <a class="header-anchor" href="#onebot-适配器" aria-hidden="true">#</a></h1><p>OneBot 适配器适配 OneBot v11 协议，主要对 QQ 平台提供支持。</p><nav class="table-of-contents"><ul><li><a href="#注意事项">注意事项</a></li><li><a href="#启动-onebot-服务">启动 OneBot 服务</a></li><li><a href="#添加适配器">添加适配器</a></li></ul></nav><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h2><ul><li>当前只支持正向 WebSocket 通信方式。</li><li>暂时仅支持了常用的 CQ 码。</li></ul><h2 id="启动-onebot-服务" tabindex="-1">启动 OneBot 服务 <a class="header-anchor" href="#启动-onebot-服务" aria-hidden="true">#</a></h2><p>本节以 <a href="https://github.com/Mrs4s/go-cqhttp/" target="_blank" rel="noreferrer">go-cqhttp</a> 为例，搭建一个正常运行的 OneBot 服务。</p><p>前往 go-cqhttp 的 <a href="https://github.com/Mrs4s/go-cqhttp/releases" target="_blank" rel="noreferrer">Release 页面</a>，根据自己设备的架构选择合适的安装包或压缩包下载。</p><div class="tip custom-block"><p class="custom-block-title">没有找到对应的文件？</p><p>由于 GitHub 限制了单个 Release 默认能显示的文件数量，你可能需要点击 Show all assets 来查看所有文件。</p></div><p>例如我的设备是 64 位 Windows 系统，选择 <code>go-cqhttp_windows_amd64.zip</code> 下载。</p><p>下载后解压到一个空文件夹，运行 <code>go-cqhttp.exe</code>（或其他可执行文件）。首次打开会创建一个配置文件 <code>config.yml</code>，使用文本编辑器打开它，<strong>至少</strong>更改或添加以下内容：</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark has-highlighted-lines has-diff vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#85E89D;">account</span><span style="color:#E1E4E8;">: </span><span style="color:#6A737D;"># 账号相关</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">uin</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">12345678</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># QQ账号</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">password</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;你的密码&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># 密码为空时使用扫码登录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 连接服务列表</span></span>
<span class="line"><span style="color:#85E89D;">servers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># 在这里添加</span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">ws</span><span style="color:#E1E4E8;">: </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;"># 正向 WebSocket 服务器监听地址 </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">address</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">127.0.0.1:8080</span><span style="color:#E1E4E8;"> </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">middlewares</span><span style="color:#E1E4E8;">: </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&lt;&lt;</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">default </span><span style="color:#6A737D;"># 引用默认中间件 </span></span>
<span class="line"></span></code></pre><pre class="shiki github-light has-highlighted-lines has-diff vp-code-light" tabindex="0"><code><span class="line"><span style="color:#22863A;">account</span><span style="color:#24292E;">: </span><span style="color:#6A737D;"># 账号相关</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#22863A;">uin</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">12345678</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># QQ账号</span></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#22863A;">password</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;你的密码&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># 密码为空时使用扫码登录</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 连接服务列表</span></span>
<span class="line"><span style="color:#22863A;">servers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># 在这里添加</span></span>
<span class="line diff add"><span style="color:#24292E;">  - </span><span style="color:#22863A;">ws</span><span style="color:#24292E;">: </span></span>
<span class="line diff add"><span style="color:#24292E;">      </span><span style="color:#6A737D;"># 正向 WebSocket 服务器监听地址 </span></span>
<span class="line diff add"><span style="color:#24292E;">      </span><span style="color:#22863A;">address</span><span style="color:#24292E;">: </span><span style="color:#032F62;">127.0.0.1:8080</span><span style="color:#24292E;"> </span></span>
<span class="line diff add"><span style="color:#24292E;">      </span><span style="color:#22863A;">middlewares</span><span style="color:#24292E;">: </span></span>
<span class="line diff add"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&lt;&lt;</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">default </span><span style="color:#6A737D;"># 引用默认中间件 </span></span>
<span class="line"></span></code></pre></div><p>重新打开 <code>go-cqhttp.exe</code>，可能会提示登录验证，根据终端输出照做即可。输出以下信息则说明登陆成功：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 登录成功 欢迎使用: [机器人名称]</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 开始加载好友列表...</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 共加载 1 个好友.</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 开始加载群列表...</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 共加载 1 个群.</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 资源初始化完成, 开始处理信息.</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: アトリは、高性能ですから!</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: 正在检查更新.</span></span>
<span class="line"><span style="color:#e1e4e8;">[2023-03-04 22:21:35] [INFO]: CQ WebSocket 服务器已启动: 127.0.0.1:8080</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 登录成功 欢迎使用: [机器人名称]</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 开始加载好友列表...</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 共加载 1 个好友.</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 开始加载群列表...</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 共加载 1 个群.</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 资源初始化完成, 开始处理信息.</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: アトリは、高性能ですから!</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: 正在检查更新.</span></span>
<span class="line"><span style="color:#24292e;">[2023-03-04 22:21:35] [INFO]: CQ WebSocket 服务器已启动: 127.0.0.1:8080</span></span>
<span class="line"><span style="color:#24292e;"></span></span></code></pre></div><h2 id="添加适配器" tabindex="-1">添加适配器 <a class="header-anchor" href="#添加适配器" aria-hidden="true">#</a></h2><p>搭建好 OneBot 服务端后，我们需要在 Flandre 应用中添加 OneBot 适配器，来和服务端进行交互：</p><div class="language-csharp"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#F97583;">var</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OneBotAdapterConfig</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">config.Bots.</span><span style="color:#B392F0;">Add</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OneBotBotConfig</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    Protocol </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> OneBotProtocol.WebSocket,</span></span>
<span class="line"><span style="color:#E1E4E8;">    Endpoint </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;ws://127.0.0.1:8080&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 配置的 WebSocket 监听地址</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">builder.</span><span style="color:#B392F0;">AddAdapter</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OneBotAdapter</span><span style="color:#E1E4E8;">(config));</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#D73A49;">var</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">config</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OneBotAdapterConfig</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">config.Bots.</span><span style="color:#6F42C1;">Add</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OneBotBotConfig</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    Protocol </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> OneBotProtocol.WebSocket,</span></span>
<span class="line"><span style="color:#24292E;">    Endpoint </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;ws://127.0.0.1:8080&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 配置的 WebSocket 监听地址</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">builder.</span><span style="color:#6F42C1;">AddAdapter</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OneBotAdapter</span><span style="color:#24292E;">(config));</span></span>
<span class="line"></span></code></pre></div><p>如果你更倾向于使用独立的配置文件，你也可以这样做：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// appsettings.json</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;Adapters&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;OneBot&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;Bots&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;Protocol&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;WebSocket&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;Endpoint&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;ws://127.0.0.1:8080&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A737D;">// appsettings.json</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;Adapters&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;OneBot&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;Bots&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;Protocol&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;WebSocket&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;Endpoint&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;ws://127.0.0.1:8080&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-csharp"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki github-dark vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">builder.</span><span style="color:#B392F0;">AddAdapter</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OneBotAdapter</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">    builder.Configuration</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">GetSection</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;Adapters:OneBot&quot;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        .</span><span style="color:#B392F0;">Get</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">OneBotAdapterConfig</span><span style="color:#E1E4E8;">&gt;()</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">??</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">OneBotAdapterConfig</span><span style="color:#E1E4E8;">()));</span></span>
<span class="line"></span></code></pre><pre class="shiki github-light vp-code-light" tabindex="0"><code><span class="line"><span style="color:#24292E;">builder.</span><span style="color:#6F42C1;">AddAdapter</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OneBotAdapter</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">    builder.Configuration</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">GetSection</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;Adapters:OneBot&quot;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        .</span><span style="color:#6F42C1;">Get</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">OneBotAdapterConfig</span><span style="color:#24292E;">&gt;()</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">??</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">OneBotAdapterConfig</span><span style="color:#24292E;">()));</span></span>
<span class="line"></span></code></pre></div>`,20),e=[o];function t(c,r,E,i,y,d){return a(),n("div",null,e)}const F=s(p,[["render",t]]);export{u as __pageData,F as default};
