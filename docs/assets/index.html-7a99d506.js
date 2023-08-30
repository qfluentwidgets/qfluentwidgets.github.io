import{_ as o,r as l,o as c,c as r,a as n,w as a,b as e,d as s,e as p}from"./app-6d437e8a.js";const d={},u=e("p",null,"QFluentWidgets 分为轻量版和完整版，其中完整版多了亚克力标签组件。由于完整版依赖 scipy，会导致打包体积变大许多，所以建议安装轻量版。",-1),m=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装轻量版"),s(`
pip `),e("span",{class:"token function"},"install"),s(" PyQt-Fluent-Widgets "),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/

`),e("span",{class:"token comment"},"# 安装完整版"),s(`
pip `),e("span",{class:"token function"},"install"),s(),e("span",{class:"token string"},'"PyQt-Fluent-Widgets[full]"'),s(),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装轻量版"),s(`
pip `),e("span",{class:"token function"},"install"),s(" PyQt6-Fluent-Widgets "),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/

`),e("span",{class:"token comment"},"# 安装完整版"),s(`
pip `),e("span",{class:"token function"},"install"),s(),e("span",{class:"token string"},'"PyQt6-Fluent-Widgets[full]"'),s(),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),b=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装轻量版"),s(`
pip `),e("span",{class:"token function"},"install"),s(" PySide2-Fluent-Widgets "),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/

`),e("span",{class:"token comment"},"# 安装完整版"),s(`
pip `),e("span",{class:"token function"},"install"),s(),e("span",{class:"token string"},'"PySide2-Fluent-Widgets[full]"'),s(),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 安装轻量版"),s(`
pip `),e("span",{class:"token function"},"install"),s(" PySide6-Fluent-Widgets "),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/

`),e("span",{class:"token comment"},"# 安装完整版"),s(`
pip `),e("span",{class:"token function"},"install"),s(),e("span",{class:"token string"},'"PySide6-Fluent-Widgets[full]"'),s(),e("span",{class:"token parameter variable"},"-i"),s(` https://pypi.org/simple/
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),v=e("div",{class:"custom-container warning"},[e("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"9"}),e("path",{d:"M12 8v4"}),e("path",{d:"M12 16h.01"})])]),e("p",{class:"custom-container-title"},"警告"),e("p",null,[s("请勿同时安装 PyQt-Fluent-Widgets、PyQt6-Fluent-Widgets、PySide2-Fluent-Widgets 和 PySide6-Fluent-Widgets，因为他们的包名都是 "),e("code",null,"qfluentwidgets")])],-1),k=p(`<h2 id="运行示例" tabindex="-1"><a class="header-anchor" href="#运行示例" aria-hidden="true">#</a> 运行示例</h2><p>使用 pip 安装好 QFluentWidgets 包并下载好项目仓库<strong>对应分支</strong>的代码之后，就可以运行 examples 目录下的任意示例程序，比如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> examples/gallery
python demo.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果遇到 <code>ImportError: cannot import name &#39;XXX&#39; from &#39;qfluentwidgets&#39;</code>，这表明安装的包版本过低，可以按照上面的安装指令将 pypi 源替换为 https://pypi.org/simple 并重新安装最新版本的包。</p>`,4);function _(y,f){const t=l("CodeGroupItem"),i=l("CodeGroup");return c(),r("div",null,[u,n(i,null,{default:a(()=>[n(t,{title:"PyQt5"},{default:a(()=>[m]),_:1}),n(t,{title:"PyQt6"},{default:a(()=>[g]),_:1}),n(t,{title:"PySide2"},{default:a(()=>[b]),_:1}),n(t,{title:"PySide6"},{default:a(()=>[h]),_:1})]),_:1}),v,k])}const P=o(d,[["render",_],["__file","index.html.vue"]]);export{P as default};