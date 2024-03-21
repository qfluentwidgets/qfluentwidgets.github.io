import{_ as o,a as p,b as e}from"./ProgressInfoBar-814959f5.js";import{_ as i,r as c,o as l,c as u,b as n,d as s,a as t,e as r}from"./app-cad4e71c.js";const d={},k={id:"infobar",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#infobar","aria-hidden":"true"},"#",-1),m={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/info_bar/index.html",target:"_blank",rel:"noopener noreferrer"},b=r('<p><img src="'+e+`" alt="InfoBar"></p><p><code>InfoBar</code> 用于在应用程序中显示重要的、用户需要知道的信息。这个信息可以是一个错误消息，一个警告，或者一个提示，让用户知道他们需要采取行动。</p><p>组件库提供了便捷的类方法来创建不同类型的 <code>InfoBar</code>：</p><ul><li><p>成功：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>InfoBar<span class="token punctuation">.</span>success<span class="token punctuation">(</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 4&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>InfoBarPosition<span class="token punctuation">.</span>TOP<span class="token punctuation">,</span>
    duration<span class="token operator">=</span><span class="token number">2000</span><span class="token punctuation">,</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>警告：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>InfoBar<span class="token punctuation">.</span>warning<span class="token punctuation">(</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 3&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;相信回旋吧，只相信便是！&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>InfoBarPosition<span class="token punctuation">.</span>BOTTOM<span class="token punctuation">,</span>
    duration<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>    <span class="token comment"># 永不消失</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>失败：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>InfoBar<span class="token punctuation">.</span>error<span class="token punctuation">(</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 5&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;最短的捷径就是绕远路，绕远路才是我的最短捷径。&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Vertical<span class="token punctuation">,</span>  <span class="token comment"># 内容太长时可使用垂直布局</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>InfoBarPosition<span class="token punctuation">.</span>BOTTOM_RIGHT<span class="token punctuation">,</span>
    duration<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>消息：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>InfoBar<span class="token punctuation">.</span>info<span class="token punctuation">(</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 5&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;最短的捷径就是绕远路，绕远路才是我的最短捷径。&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>InfoBarPosition<span class="token punctuation">.</span>BOTTOM_LEFT<span class="token punctuation">,</span>
    duration<span class="token operator">=</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>自定义：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>w <span class="token operator">=</span> InfoBar<span class="token punctuation">.</span>new<span class="token punctuation">(</span>
    icon<span class="token operator">=</span>FluentIcon<span class="token punctuation">.</span>GITHUB<span class="token punctuation">,</span>
    title<span class="token operator">=</span><span class="token string">&#39;波纹疾走&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;人类的赞歌就是勇气的赞歌，人类的伟大就是勇气的伟大！&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>InfoBarPosition<span class="token punctuation">.</span>BOTTOM<span class="token punctuation">,</span>
    duration<span class="token operator">=</span><span class="token number">2000</span><span class="token punctuation">,</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>
w<span class="token punctuation">.</span>setCustomBackgroundColor<span class="token punctuation">(</span><span class="token string">&#39;white&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#202020&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>也可以往消息条上添加按钮等自定义组件：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>w <span class="token operator">=</span> InfoBar<span class="token punctuation">(</span>
    icon<span class="token operator">=</span>InfoBarIcon<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">,</span>
    title<span class="token operator">=</span><span class="token string">&#39;Title&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;我的名字是吉良吉影，年龄 33 岁，只想过平静的生活。&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>InfoBarPosition<span class="token punctuation">.</span>TOP_RIGHT<span class="token punctuation">,</span>
    duration<span class="token operator">=</span><span class="token number">2000</span><span class="token punctuation">,</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>

<span class="token comment"># 添加自定义组件</span>
w<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>PushButton<span class="token punctuation">(</span><span class="token string">&#39;Action&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>消息条的弹出位置由 <code>position</code> 参数指定：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">InfoBarPosition</span><span class="token punctuation">(</span>Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Info bar position &quot;&quot;&quot;</span>
    TOP <span class="token operator">=</span> <span class="token number">0</span>
    BOTTOM <span class="token operator">=</span> <span class="token number">1</span>
    TOP_LEFT <span class="token operator">=</span> <span class="token number">2</span>
    TOP_RIGHT <span class="token operator">=</span> <span class="token number">3</span>
    BOTTOM_LEFT <span class="token operator">=</span> <span class="token number">4</span>
    BOTTOM_RIGHT <span class="token operator">=</span> <span class="token number">5</span>
    NONE <span class="token operator">=</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 <code>InfoBarPosition</code> 为 <code>NONE</code> 时，可以将消息条放在任意位置，如果想进一步管理消息条位置，可继承 <code>InfoBarManager</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@InfoBarManager<span class="token punctuation">.</span>register</span><span class="token punctuation">(</span><span class="token string">&#39;Custom&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">CustomInfoBarManager</span><span class="token punctuation">(</span>InfoBarManager<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 自定义消息条管理器 &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">_pos</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> infoBar<span class="token punctuation">:</span> InfoBar<span class="token punctuation">,</span> parentSize<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> infoBar<span class="token punctuation">.</span>parent<span class="token punctuation">(</span><span class="token punctuation">)</span>
        parentSize <span class="token operator">=</span> parentSize <span class="token keyword">or</span> p<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 第一个消息条的位置</span>
        x <span class="token operator">=</span> <span class="token punctuation">(</span>parentSize<span class="token punctuation">.</span>width<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> infoBar<span class="token punctuation">.</span>width<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
        y <span class="token operator">=</span> <span class="token punctuation">(</span>parentSize<span class="token punctuation">.</span>height<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> infoBar<span class="token punctuation">.</span>height<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>

        <span class="token comment"># 计算当前 infoBar 的位置</span>
        index <span class="token operator">=</span> self<span class="token punctuation">.</span>infoBars<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">.</span>index<span class="token punctuation">(</span>infoBar<span class="token punctuation">)</span>
        <span class="token keyword">for</span> bar <span class="token keyword">in</span> self<span class="token punctuation">.</span>infoBars<span class="token punctuation">[</span>p<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span>index<span class="token punctuation">]</span><span class="token punctuation">:</span>
            y <span class="token operator">+=</span> <span class="token punctuation">(</span>bar<span class="token punctuation">.</span>height<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>spacing<span class="token punctuation">)</span>

        <span class="token keyword">return</span> QPoint<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_slideStartPos</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> infoBar<span class="token punctuation">:</span> InfoBar<span class="token punctuation">)</span><span class="token punctuation">:</span>
        pos <span class="token operator">=</span> self<span class="token punctuation">.</span>_pos<span class="token punctuation">(</span>infoBar<span class="token punctuation">)</span>
        <span class="token keyword">return</span> QPoint<span class="token punctuation">(</span>pos<span class="token punctuation">.</span>x<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pos<span class="token punctuation">.</span>y<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">16</span><span class="token punctuation">)</span>



InfoBar<span class="token punctuation">.</span>success<span class="token punctuation">(</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 4&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！&quot;</span><span class="token punctuation">,</span>
    orient<span class="token operator">=</span>Qt<span class="token punctuation">.</span>Horizontal<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span><span class="token string">&quot;Custom&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 使用自定义管理器</span>
    duration<span class="token operator">=</span><span class="token number">2000</span><span class="token punctuation">,</span>
    parent<span class="token operator">=</span>window
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),g={id:"toast",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#toast","aria-hidden":"true"},"#",-1),h={href:"https://qfluentwidgets.com/zh/price",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[n("img",{src:o,alt:"Toast"})],-1),B=n("p",null,[n("code",null,"Toast"),s(" 用于在应用程序中显示重要的、用户需要知道的信息。")],-1),w={id:"progressinfobar",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#progressinfobar","aria-hidden":"true"},"#",-1),T={href:"https://qfluentwidgets.com/zh/price",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,[n("img",{src:p,alt:"ProgressInfoBar"})],-1),q=n("p",null,[n("code",null,"ProgressInfoBar"),s(" 它不仅显示任务的完成进度，还可以显示额外的信息。这些信息通常包括任务的名称、描述、剩余时间等。这种组件非常适合用于需要同时展示任务进度和其他相关信息的场合。")],-1);function x(O,P){const a=c("ExternalLinkIcon");return l(),u("div",null,[n("h3",k,[v,s(),n("a",m,[s("InfoBar"),t(a)])]),b,n("h3",g,[f,s(),n("a",h,[s("Toast"),t(a)])]),_,B,n("h3",w,[I,s(),n("a",T,[s("ProgressInfoBar"),t(a)])]),y,q])}const H=i(d,[["render",x],["__file","index.html.vue"]]);export{H as default};
