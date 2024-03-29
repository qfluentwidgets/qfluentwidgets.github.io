import{_ as o,a as p,b as c}from"./IconInfoBadge-c01d3eb8.js";import{_ as i,r as u,o as l,c as d,b as n,d as s,a as t,e}from"./app-cad4e71c.js";const r={},k={id:"infobadge",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#infobadge","aria-hidden":"true"},"#",-1),m={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.InfoBadge",target:"_blank",rel:"noopener noreferrer"},v=e('<p><img src="'+o+`" alt="InfoBadge"></p><p><code>InfoBadge</code> 是一个小型的通知标记，用于在应用的导航菜单或工具栏上显示未读消息、状态更新或其他重要通知。</p><p>徽章支持多种样式，并提供了便捷的类方法来创建实例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>InfoBadge<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
InfoBadge<span class="token punctuation">.</span>success<span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
InfoBadge<span class="token punctuation">.</span>attension<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
InfoBadge<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
InfoBadge<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
InfoBadge<span class="token punctuation">.</span>custom<span class="token punctuation">(</span><span class="token string">&#39;1w+&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#005fb8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#60cdff&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>徽章通常附着在其他组件上，通过设置 <code>target</code> 可指定附着对象：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>button <span class="token operator">=</span> ToolButton<span class="token punctuation">(</span>FIF<span class="token punctuation">.</span>BASKETBALL<span class="token punctuation">,</span> parent<span class="token punctuation">)</span>
vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignHCenter<span class="token punctuation">)</span>
InfoBadge<span class="token punctuation">.</span>success<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> parent<span class="token operator">=</span>parent<span class="token punctuation">,</span> target<span class="token operator">=</span>button<span class="token punctuation">,</span> position<span class="token operator">=</span>InfoBadgePosition<span class="token punctuation">.</span>TOP_RIGHT<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>position</code> 参数用于设置徽章的位置，组件库内置了 7 种徽章位置：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">InfoBadgePosition</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Info badge position &quot;&quot;&quot;</span>
    TOP_RIGHT <span class="token operator">=</span> <span class="token number">0</span>
    BOTTOM_RIGHT <span class="token operator">=</span> <span class="token number">1</span>
    RIGHT <span class="token operator">=</span> <span class="token number">2</span>
    TOP_LEFT <span class="token operator">=</span> <span class="token number">3</span>
    BOTTOM_LEFT <span class="token operator">=</span> <span class="token number">4</span>
    LEFT <span class="token operator">=</span> <span class="token number">5</span>
    NAVIGATION_ITEM <span class="token operator">=</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你想自定义徽章的位置，可继承 <code>InfoBadgeManager</code> 并重写 <code>position()</code> 方法：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@InfoBadgeManager<span class="token punctuation">.</span>register</span><span class="token punctuation">(</span><span class="token string">&#39;Custom&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">CustomInfoBadgeManager</span><span class="token punctuation">(</span>InfoBadgeManager<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Custom info badge manager &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">position</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        pos <span class="token operator">=</span> self<span class="token punctuation">.</span>target<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>center<span class="token punctuation">(</span><span class="token punctuation">)</span>
        x <span class="token operator">=</span> pos<span class="token punctuation">.</span>x<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> self<span class="token punctuation">.</span>badge<span class="token punctuation">.</span>width<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
        y <span class="token operator">=</span> self<span class="token punctuation">.</span>target<span class="token punctuation">.</span>y<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> self<span class="token punctuation">.</span>badge<span class="token punctuation">.</span>height<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
        <span class="token keyword">return</span> QPoint<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>


<span class="token comment"># 使用自定义的徽章位置管理器</span>
InfoBadge<span class="token punctuation">.</span>success<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> parent<span class="token operator">=</span>parent<span class="token punctuation">,</span> target<span class="token operator">=</span>button<span class="token punctuation">,</span> position<span class="token operator">=</span><span class="token string">&quot;Custom&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),b={id:"dotinfobadge",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#dotinfobadge","aria-hidden":"true"},"#",-1),I={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.DotInfoBadge",target:"_blank",rel:"noopener noreferrer"},h=e('<p><img src="'+p+`" alt="DotInfoBadge"></p><p><code>DotInfoBadge</code> 不显示任何数字或图标，而是显示为一个小圆点，用于表示存在未处理的通知或更新。这个组件在需要提醒用户有新的信息或状态变化，但不需要显示具体数量或类型的情况下非常有用。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>DotInfoBadge<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token punctuation">)</span>
DotInfoBadge<span class="token punctuation">.</span>success<span class="token punctuation">(</span><span class="token punctuation">)</span>
DotInfoBadge<span class="token punctuation">.</span>attension<span class="token punctuation">(</span><span class="token punctuation">)</span>
DotInfoBadge<span class="token punctuation">.</span>warning<span class="token punctuation">(</span><span class="token punctuation">)</span>
DotInfoBadge<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token punctuation">)</span>
DotInfoBadge<span class="token punctuation">.</span>custom<span class="token punctuation">(</span><span class="token string">&#39;#005fb8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#60cdff&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),_={id:"iconinfobadge",tabindex:"-1"},B=n("a",{class:"header-anchor",href:"#iconinfobadge","aria-hidden":"true"},"#",-1),y={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_badge/index.html#qfluentwidgets.components.widgets.info_badge.IconInfoBadge",target:"_blank",rel:"noopener noreferrer"},q=e('<p><img src="'+c+`" alt="IconInfoBadge"></p><p><code>IconInfoBadge</code> 在其内部显示一个图标，而不是数字，这个图标可以用来表示特定类型的通知或状态。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>IconInfoBadge<span class="token punctuation">.</span>info<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>ACCEPT_MEDIUM<span class="token punctuation">)</span>
IconInfoBadge<span class="token punctuation">.</span>success<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>ACCEPT_MEDIUM<span class="token punctuation">)</span>
IconInfoBadge<span class="token punctuation">.</span>attension<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>ACCEPT_MEDIUM<span class="token punctuation">)</span>
IconInfoBadge<span class="token punctuation">.</span>warning<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>CANCEL_MEDIUM<span class="token punctuation">)</span>
IconInfoBadge<span class="token punctuation">.</span>error<span class="token punctuation">(</span>FluentIcon<span class="token punctuation">.</span>CANCEL_MEDIUM<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(x,T){const a=u("ExternalLinkIcon");return l(),d("div",null,[n("h3",k,[g,s(),n("a",m,[s("InfoBadge"),t(a)])]),v,n("h3",b,[f,s(),n("a",I,[s("DotInfoBadge"),t(a)])]),h,n("h3",_,[B,s(),n("a",y,[s("IconInfoBadge"),t(a)])]),q])}const C=i(r,[["render",w],["__file","index.html.vue"]]);export{C as default};
