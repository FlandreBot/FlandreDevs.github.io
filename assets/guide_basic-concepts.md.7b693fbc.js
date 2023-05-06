import{_ as e,c as t,o as a,O as n}from"./chunks/framework.d7e37bdc.js";const _=JSON.parse('{"title":"基本概念","description":"","frontmatter":{},"headers":[],"relativePath":"guide/basic-concepts.md","filePath":"guide/basic-concepts.md","lastUpdated":1677953005000}'),r={name:"guide/basic-concepts.md"},l=n('<h1 id="基本概念" tabindex="-1">基本概念 <a class="header-anchor" href="#基本概念" aria-label="Permalink to &quot;基本概念&quot;">​</a></h1><h2 id="群组-频道-guild-channel" tabindex="-1">群组/频道 - Guild/Channel <a class="header-anchor" href="#群组-频道-guild-channel" aria-label="Permalink to &quot;群组/频道 - Guild/Channel&quot;">​</a></h2><p>考虑到众多聊天平台具有不统一的架构（例如 Discord 的服务器、频道，QQ 的群聊），Flandre 将其抽象成两层：Guild 和 Channel。Guild 泛指大的群组构成，其中有许多的分区和成员；Channel 指各种不同功能的分区，也是用户们具体聊天的地方。</p><p>对于拥有 Discord 使用经验的用户来说这种结构很好理解；但在 QQ 这样只用一层群聊划分用户的平台，我们定义 Guild 为群聊的基本抽象，是群成员的一个集合，Channel 为群成员具体聊天的环境。例如发送群聊消息使用 <code>SendChannelMessage</code>，而获取群成员使用 <code>GetGuildMember</code>。</p><p>出于方便目的，我们在文档中会将 Guild 译为 <strong>群组</strong>，Channel 译为 <strong>频道</strong>。在文档中，除非是特定平台相关的场景，我们都会用 <strong>群组/频道</strong> 代替 Guild/Channel。</p><p>为了能更好地理解，在这里整理了一个对照表，对应不同平台使用的不同术语：</p><table><thead><tr><th style="text-align:center;">Flandre</th><th style="text-align:center;">OneBot (QQ)</th><th style="text-align:center;">Discord</th><th style="text-align:center;">QQ 频道</th></tr></thead><tbody><tr><td style="text-align:center;"><strong>群组/Guild</strong></td><td style="text-align:center;">群聊成员的一个抽象集合</td><td style="text-align:center;">服务器 (Server)</td><td style="text-align:center;">频道</td></tr><tr><td style="text-align:center;"><strong>频道/Channel</strong></td><td style="text-align:center;">群成员的具体聊天环境</td><td style="text-align:center;">频道</td><td style="text-align:center;">子频道</td></tr></tbody></table><h2 id="适配器-adapter" tabindex="-1">适配器 - Adapter <a class="header-anchor" href="#适配器-adapter" aria-label="Permalink to &quot;适配器 - Adapter&quot;">​</a></h2><p>对于跨平台的实现方案，Flandre 参考诸多同类项目，使用了适配器 (Adapter) 模式。在适配器模式中，核心组件 (Flandre.Core) 不会发生变化，对于不同平台只需要编写对应的适配器，充当和 Core 通信的桥梁。</p><h2 id="插件-plugin" tabindex="-1">插件 - Plugin <a class="header-anchor" href="#插件-plugin" aria-label="Permalink to &quot;插件 - Plugin&quot;">​</a></h2><p>插件是由开发者自行编写的功能模块，包含了 Bot 的各种行为逻辑，如指令、事件处理都是包含在一个个模块里的。</p><h2 id="中间件-middleware" tabindex="-1">中间件 - Middleware <a class="header-anchor" href="#中间件-middleware" aria-label="Permalink to &quot;中间件 - Middleware&quot;">​</a></h2><p>中间件是消息进出的管道。Flandre 的中间件设计参考了洋葱模型，便于对消息进行全面的控制。</p>',13),d=[l];function i(o,s,c,h,p,g){return a(),t("div",null,d)}const x=e(r,[["render",i]]);export{_ as __pageData,x as default};
