import{_ as e,a as o}from"./CustomFlyout-2c5c5d4b.js";import{_ as c,r as u,o as i,c as l,b as n,d as s,a as t,e as p}from"./app-cad4e71c.js";const k={},d={id:"flyout",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#flyout","aria-hidden":"true"},"#",-1),v={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.Flyout",target:"_blank",rel:"noopener noreferrer"},m=p('<p><img src="'+e+`" alt="Flyout"></p><p><code>Flyout</code> 可以收集用户的输入、显示项目的更多详细信息或要求用户确认操作。与对话框不同的是，可以通过点击空白位置来轻松关闭弹出窗口。</p><p>下述示例创建了一个包含图标、标题、内容和关闭按钮的弹出窗口：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>button <span class="token operator">=</span> PushButton<span class="token punctuation">(</span><span class="token string">&quot;Click Me&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>button<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>showFlyout<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>hBoxLayout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>hBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>button<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">showFlyout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Flyout<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
            icon<span class="token operator">=</span>InfoBarIcon<span class="token punctuation">.</span>SUCCESS<span class="token punctuation">,</span>
            title<span class="token operator">=</span><span class="token string">&#39;Lesson 4&#39;</span><span class="token punctuation">,</span>
            content<span class="token operator">=</span><span class="token string">&quot;表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！&quot;</span><span class="token punctuation">,</span>
            target<span class="token operator">=</span>self<span class="token punctuation">.</span>button<span class="token punctuation">,</span>
            parent<span class="token operator">=</span>self<span class="token punctuation">,</span>
            isClosable<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
            aniType<span class="token operator">=</span>FlyoutAnimationType<span class="token punctuation">.</span>PULL_UP
        <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在弹出窗口中显示图片：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Flyout<span class="token punctuation">.</span>create<span class="token punctuation">(</span>
    image<span class="token operator">=</span><span class="token string">&quot;/path/to/image.png&quot;</span><span class="token punctuation">,</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 4&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;表达敬意吧，表达出敬意，然后迈向回旋的另一个全新阶段！&quot;</span><span class="token punctuation">,</span>
    target<span class="token operator">=</span>self<span class="token punctuation">.</span>button<span class="token punctuation">,</span>
    parent<span class="token operator">=</span>self<span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">False</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下述例子向弹出窗口中添加了自定义组件：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>view <span class="token operator">=</span> FlyoutView<span class="token punctuation">(</span>
    title<span class="token operator">=</span><span class="token string">&#39;Lesson 5&#39;</span><span class="token punctuation">,</span>
    content<span class="token operator">=</span><span class="token string">&quot;最短的捷径就是绕远路，绕远路才是我的最短捷径。&quot;</span><span class="token punctuation">,</span>
    image<span class="token operator">=</span><span class="token string">&#39;/path/to/image.png&#39;</span><span class="token punctuation">,</span>
    isClosable<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>

<span class="token comment"># 添加按钮</span>
button <span class="token operator">=</span> PushButton<span class="token punctuation">(</span><span class="token string">&#39;Action&#39;</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span>setFixedWidth<span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">)</span>
view<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>button<span class="token punctuation">,</span> align<span class="token operator">=</span>Qt<span class="token punctuation">.</span>AlignRight<span class="token punctuation">)</span>

<span class="token comment"># 调整布局</span>
view<span class="token punctuation">.</span>widgetLayout<span class="token punctuation">.</span>insertSpacing<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
view<span class="token punctuation">.</span>widgetLayout<span class="token punctuation">.</span>addSpacing<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>

<span class="token comment"># 显示弹出窗口</span>
w <span class="token operator">=</span> Flyout<span class="token punctuation">.</span>make<span class="token punctuation">(</span>view<span class="token punctuation">,</span> self<span class="token punctuation">.</span>button<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
view<span class="token punctuation">.</span>closed<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>w<span class="token punctuation">.</span>close<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),b={id:"flyoutviewbase",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#flyoutviewbase","aria-hidden":"true"},"#",-1),y={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/components/widgets/flyout/index.html#qfluentwidgets.components.widgets.flyout.FlyoutViewBase",target:"_blank",rel:"noopener noreferrer"},g=p('<p><img src="'+o+`" alt="CustomFlyout"></p><p><code>Flyout</code> 只是个容器，内部的 <code>view</code> 可被任何 <code>FlyoutViewBase</code> 的子类实例替换，从而自定义窗口内容。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CustomFlyoutView</span><span class="token punctuation">(</span>FlyoutViewBase<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>parent<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>label <span class="token operator">=</span> BodyLabel<span class="token punctuation">(</span><span class="token string">&#39;这是一场「试炼」，我认为这就是一场为了战胜过去的「试炼」，\\n只有战胜了那些幼稚的过去，人才能有所成长。&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>button <span class="token operator">=</span> PrimaryPushButton<span class="token punctuation">(</span><span class="token string">&#39;Action&#39;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>button<span class="token punctuation">.</span>setFixedWidth<span class="token punctuation">(</span><span class="token number">140</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>setSpacing<span class="token punctuation">(</span><span class="token number">12</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>setContentsMargins<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>label<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>button<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>button <span class="token operator">=</span> PushButton<span class="token punctuation">(</span><span class="token string">&quot;Click Me&quot;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>button<span class="token punctuation">.</span>clicked<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>showFlyout<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>hBoxLayout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>hBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>button<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">600</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">showFlyout</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Flyout<span class="token punctuation">.</span>make<span class="token punctuation">(</span>CustomFlyoutView<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> self<span class="token punctuation">.</span>button<span class="token punctuation">,</span> self<span class="token punctuation">,</span> aniType<span class="token operator">=</span>FlyoutAnimationType<span class="token punctuation">.</span>PULL_UP<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(h,w){const a=u("ExternalLinkIcon");return i(),l("div",null,[n("h3",d,[r,s(),n("a",v,[s("Flyout"),t(a)])]),m,n("h3",b,[f,s(),n("a",y,[s("FlyoutViewBase"),t(a)])]),g])}const B=c(k,[["render",_],["__file","index.html.vue"]]);export{B as default};