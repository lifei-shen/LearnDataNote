import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c,a as e,b as s,d as o,e as d}from"./app-0939a3f4.js";const r={},l={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://docsify.js.org/#/zh-cn/",target:"_blank",rel:"noopener noreferrer"},p=e("h2",{id:"插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),s(" 插件")],-1),_={href:"https://github.com/docsifyjs/awesome-docsify#plugins",target:"_blank",rel:"noopener noreferrer"},u={class:"task-list-container"},f={class:"task-list-item"},b=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-0",checked:"checked",disabled:"disabled"},null,-1),k={class:"task-list-item-label",for:"task-item-0"},m={href:"https://notebook.js.org/#/README",target:"_blank",rel:"noopener noreferrer"},g={class:"task-list-item"},y=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-1",checked:"checked",disabled:"disabled"},null,-1),x={class:"task-list-item-label",for:"task-item-1"},v={href:"https://github.com/827652549/docsify-count",target:"_blank",rel:"noopener noreferrer"},j={class:"task-list-item"},w=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-2",checked:"checked",disabled:"disabled"},null,-1),E={class:"task-list-item-label",for:"task-item-2"},N={href:"https://github.com/cxcn/docsify-waline/blob/main/README.zh-CN.md",target:"_blank",rel:"noopener noreferrer"},z={class:"task-list-item"},C=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-3",checked:"checked",disabled:"disabled"},null,-1),D={class:"task-list-item-label",for:"task-item-3"},M={href:"https://github.com/mrpotatoes/docsify-toc",target:"_blank",rel:"noopener noreferrer"},S={href:"https://tainacan.github.io/tainacan-wiki/#/general-concepts",target:"_blank",rel:"noopener noreferrer"},A={href:"https://github.com/dromara/sureness/blob/master/docs/index.html",target:"_blank",rel:"noopener noreferrer"},L={href:"https://wiki.lifeupapp.fun/zh-cn/#/features/174",target:"_blank",rel:"noopener noreferrer"},V={class:"task-list-item"},B=e("input",{type:"checkbox",class:"task-list-item-checkbox",id:"task-item-4",checked:"checked",disabled:"disabled"},null,-1),P={class:"task-list-item-label",for:"task-item-4"},R={href:"https://github.com/meff34/docsify-to-pdf-converter",target:"_blank",rel:"noopener noreferrer"},T=e("ul",null,[e("li",null,[e("code",null,"illegal operation on a directory"),s(" 报错：sidebar 中不要使用简写地址，将 "),e("code",null,"main/"),s(" 改为 "),e("code",null,"main/README.md"),s("，否则将读取到目录而报错。")]),e("li",null,[e("code",null,"'node_modules' 不是内部或外部命令"),s(" 报错：将 package.json 的设置修改为 "),e("code",null,'"convert": "node_modules\\\\.bin\\\\docsify-pdf-converter"'),s("。这问题多发生在 Windows，是由 Windows 与 Linux 路径规则不同而引起的。")])],-1),W=e("h2",{id:"配置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置","aria-hidden":"true"},"#"),s(" 配置")],-1),q=e("h3",{id:"docsify-emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docsify-emoji","aria-hidden":"true"},"#"),s(" docsify emoji")],-1),G={href:"https://docsify.js.org/#/zh-cn/plugins?id=emoji",target:"_blank",rel:"noopener noreferrer"},H=e("code",null,"&#58;",-1),I=e("code",null,":100:",-1),F=e("code",null,"&#58;100:",-1),J=e("p",null,"实际使用中，我直接复制 emoji，都能正常显示。",-1),K=e("h2",{id:"本地命令",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地命令","aria-hidden":"true"},"#"),s(" 本地命令")],-1),O={href:"https://github.com/docsifyjs/docsify-cli",target:"_blank",rel:"noopener noreferrer"},Q=d(`<p><code>&lt;path&gt;</code> 默认为当前路径，可使用子文件夹指定路径，如 <code>./docs</code> 或 <code>docs</code>。</p><p><code>[]</code> 为可省略命令区，无实际作用，输出时需要去除。</p><h3 id="serve-启动" tabindex="-1"><a class="header-anchor" href="#serve-启动" aria-hidden="true">#</a> Serve 启动</h3><p>若要在电脑上查看 docsify 页面，可执行 serve 架构命令，在本地主机上运行服务。默认本地端口为 3000，可以指定端口。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docsify serve <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--open false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--port <span class="token number">3000</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用时不要关闭命令终端，否则 serve 也会停止。</p><h3 id="生成侧边栏" tabindex="-1"><a class="header-anchor" href="#生成侧边栏" aria-hidden="true">#</a> 生成侧边栏</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>docsify generate <span class="token operator">&lt;</span>path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>--sidebar _sidebar.md<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>generate 命令会遍历指定目录及其子目录的所有 markdown 文件，并生成全路径的 _sidebar.md。<code>&lt;path&gt;</code> 不能省略，需指定子文件夹路径。</p><p>如果路径中存在 _sidebar.md，则会报错。</p><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="引用路径" tabindex="-1"><a class="header-anchor" href="#引用路径" aria-hidden="true">#</a> 引用路径</h3><p>docsify 引用内部文件时，路径会自带添加域名。</p><p>例如：指向子文档时，链接是 <code>子文件夹/文档名.md</code>；指向子文档的小标题时，链接是 <code>子文件夹/文档名？id=小标题</code>。</p><h3 id="页面未同步更新" tabindex="-1"><a class="header-anchor" href="#页面未同步更新" aria-hidden="true">#</a> 页面未同步更新</h3><blockquote><p>CDN 默认是有缓存的，如果文件更新，访问的可能不是最新的文件。</p><p>我设置了 routerMode 为 history，使用 CDN 访问非首页，再次刷新会找不到文件。</p><p>如果开启了 <code>relativePath: true</code>，文件可以找到，但是侧栏上边的标题点击又有点问题。</p></blockquote><h3 id="github-pages-报错" tabindex="-1"><a class="header-anchor" href="#github-pages-报错" aria-hidden="true">#</a> GitHub Pages 报错</h3><p>如果 SSL 链接 404 报错，显示「There isn&#39;t a GitHub Pages site here」，则目录中加入 <code>CNAME</code> 文件。</p>`,18);function U(X,Y){const t=n("ExternalLinkIcon");return i(),c("div",null,[e("p",null,[e("a",l,[s("docsify"),o(t)]),s(" 是一个神奇的文档网站生成器，可以快速帮你将 .md 文档生成为网站。docsify 入门简单且无需服务器，非常适合个人笔记的简单整理分享。")]),e("p",null,[s("本页集中了我使用 docsify 中遇到的问题，新手先看 "),e("a",h,[s("docsify 入门文档"),o(t)]),s("。")]),p,e("p",null,[e("a",_,[s("docsify 插件列表"),o(t)]),s("：")]),e("ul",u,[e("li",f,[b,e("label",k,[e("a",m,[s("docsify 笔记类参考"),o(t)]),s("：看板娘，多级页面，页面点击效果，网站运行时间。")])]),e("li",g,[y,e("label",x,[e("a",v,[s("docsify-count"),o(t)]),s("：docsify 的字数和阅读时长插件。")])]),e("li",j,[w,e("label",E,[e("a",N,[s("docsify-waline"),o(t)]),s("：提供评论功能的同时，借用 docsify-count 接口展示阅读量。暂时停止 1300 宽度的 waline 显示，避免页面显示异常。")])]),e("li",z,[C,e("label",D,[e("a",M,[s("docsify-toc"),o(t)]),s("：给笔记页内部添加目录。不过本插件与 gitalk、waline 冲突，页面宽于 1300px 时出现 toc 目录，评论区位置也跟着挤到页面顶部，需手动修改。参考链接："),e("a",S,[s("Tainacan Wiki"),o(t)]),s("，"),e("a",A,[s("Sureness"),o(t)]),s("，"),e("a",L,[s("lifeupapp"),o(t)]),s("。")])]),e("li",V,[B,e("label",P,[e("a",R,[s("docsify-pdf-converter"),o(t)]),s("：将 docsify 转为 pdf，不带书签目录。")]),T])]),W,q,e("p",null,[e("a",G,[s("emoji 插件"),o(t)]),s("在标题中使用容易出错，建议使用 "),H,s("。例如，原本是 "),I,s("，替换为 "),F,s("。")]),J,K,e("p",null,[e("a",O,[s("docsify 本地命令"),o(t)]),s(":")]),Q])}const ee=a(r,[["render",U],["__file","docsify.html.vue"]]);export{ee as default};
