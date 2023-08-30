import{_ as o,r as p,o as i,c,b as n,d as s,a as t,e}from"./app-6d437e8a.js";const l={},u=n("h2",{id:"navigationinterface",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#navigationinterface","aria-hidden":"true"},"#"),s(" NavigationInterface")],-1),d=n("h3",{id:"structure",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#structure","aria-hidden":"true"},"#"),s(" Structure")],-1),r=n("code",null,"NavigationInterface",-1),k=n("code",null,"QStackWidget",-1),m=n("code",null,"QHBoxLayout",-1),v={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation2",target:"_blank",rel:"noopener noreferrer"},b=e(`<p><img src="https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Structure.3c6pzmvz8fc0.webp" alt=""></p><p><code>NavigationInterface</code> contains <code>NavigationPanel</code> which is used to place navigation menu items. All navigation menu items should inherit from <code>NavigationWidget</code> and you can add them to the panel by calling <code>NavigationInterface.addWidget()</code> or <code>NavigationPanel.addWidget()</code>. PyQt-Fluent-Widgets implements subclass <code>NavigationPushButton</code> and provides a convenient method <code>NavigationInterface.addItem()</code> to add it to the panel.</p><p>If you want to customize a navigation menu item, you should inherit the <code>NavigationWidget</code> and rewrite its <code>paintEvent()</code> and <code>setCompacted()</code>(optional). Here an example shows how to create an avatar item.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> NavigationWidget


<span class="token keyword">class</span> <span class="token class-name">AvatarWidget</span><span class="token punctuation">(</span>NavigationWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Avatar widget &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>isSelectable<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> parent<span class="token operator">=</span>parent<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>avatar <span class="token operator">=</span> QImage<span class="token punctuation">(</span><span class="token string">&#39;resource/shoko.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>scaled<span class="token punctuation">(</span>
            <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>KeepAspectRatio<span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>SmoothTransformation<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">paintEvent</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">:</span>
        painter <span class="token operator">=</span> QPainter<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>setRenderHints<span class="token punctuation">(</span>
            QPainter<span class="token punctuation">.</span>SmoothPixmapTransform <span class="token operator">|</span> QPainter<span class="token punctuation">.</span>Antialiasing<span class="token punctuation">)</span>

        painter<span class="token punctuation">.</span>setPen<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>NoPen<span class="token punctuation">)</span>

        <span class="token keyword">if</span> self<span class="token punctuation">.</span>isPressed<span class="token punctuation">:</span>
            painter<span class="token punctuation">.</span>setOpacity<span class="token punctuation">(</span><span class="token number">0.7</span><span class="token punctuation">)</span>

        <span class="token comment"># draw background</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>isEnter<span class="token punctuation">:</span>
            c <span class="token operator">=</span> <span class="token number">255</span> <span class="token keyword">if</span> isDarkTheme<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token number">0</span>
            painter<span class="token punctuation">.</span>setBrush<span class="token punctuation">(</span>QColor<span class="token punctuation">(</span>c<span class="token punctuation">,</span> c<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            painter<span class="token punctuation">.</span>drawRoundedRect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>rect<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>

        <span class="token comment"># draw avatar</span>
        painter<span class="token punctuation">.</span>setBrush<span class="token punctuation">(</span>QBrush<span class="token punctuation">(</span>self<span class="token punctuation">.</span>avatar<span class="token punctuation">)</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>translate<span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>drawEllipse<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>translate<span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token keyword">not</span> self<span class="token punctuation">.</span>isCompacted<span class="token punctuation">:</span>
            painter<span class="token punctuation">.</span>setPen<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>white <span class="token keyword">if</span> isDarkTheme<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> Qt<span class="token punctuation">.</span>black<span class="token punctuation">)</span>
            font <span class="token operator">=</span> QFont<span class="token punctuation">(</span><span class="token string">&#39;Segoe UI&#39;</span><span class="token punctuation">)</span>
            font<span class="token punctuation">.</span>setPixelSize<span class="token punctuation">(</span><span class="token number">14</span><span class="token punctuation">)</span>
            painter<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span>font<span class="token punctuation">)</span>
            painter<span class="token punctuation">.</span>drawText<span class="token punctuation">(</span>QRect<span class="token punctuation">(</span><span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignVCenter<span class="token punctuation">,</span> <span class="token string">&#39;zhiyiYo&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Now let&#39;s take a look at the parameters required for the <code>addWidget()</code> method:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">addWidget</span><span class="token punctuation">(</span>
    self<span class="token punctuation">,</span>
    routeKey<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    widget<span class="token punctuation">:</span> NavigationWidget<span class="token punctuation">,</span>
    onClick<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>NavigationItemPosition<span class="token punctuation">.</span>TOP<span class="token punctuation">,</span>
    tooltip<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">,</span>
    parentRouteKey<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see, this method requires four parameters:</p><ul><li><code>routeKey</code>: A unique name for the <code>widget</code> to be added. You can consider the sub interface in the <code>QStackWidget</code> as a web page, and the <code>routeKey</code> is the url of the web page. When you switch between sub interfaces, <code>NavigationPanel</code> will add a <code>routeKey</code> to the navigation history. When you click the return button, the <code>routeKey</code> at the top of the navigation history will pop up. If there are other <code>routeKeys</code> in the history at this time, PyQt-Fluent-Widgets will switch to the corresponding sub interface corresponding to current top <code>routeKey</code>. Otherwise, it will switch to the sub interface corresponding to <code>defaultRouteKey</code>, so you should call <code>NavigationInterface.setDefaultRouteKey()</code> before running app.</li><li><code>widget</code>: The widget to be added to panel.</li><li><code>onClick</code>: Slot function connected to the widget&#39;s <code>clicked</code> signal. If you want to switch sub interfaces when clicking <code>widget</code>, it is recommended to write this slot function as <code>lambda: self.stackWidget.setCurrentWidget(self.xxxInterface) </code>.</li><li><code>position</code>: Where to add the <code>widget</code> to the panel. The following values are available: <ul><li><code>NavigationItemPosition.TOP</code>: add <code>widget</code> to the top layout of panel.</li><li><code>NavigationItemPosition.SCROLL</code>: add <code>widget</code> to the scroll layout of panel. You can scroll the widgets in scroll layout when there are too many menu items.</li><li><code>NavigationItemPosition.BOTTOM</code>: add <code>widget</code> to the bottom layout of panel.</li></ul></li><li><code>tooltip</code>: The tooltip of menu item.</li><li><code>parentRouteKey</code>: The route key of parent menu item, the widget of parent item must be the instance of <code>NavigationTreeWidgetBase</code></li></ul><h3 id="display-mode" tabindex="-1"><a class="header-anchor" href="#display-mode" aria-hidden="true">#</a> Display mode</h3><p>The navigation panel has four display modes:</p>`,10),g=n("li",null,[n("p",null,[n("code",null,"NavigationDisplayMode.EXPAND"),s(": An expanded left pane on large window widths (1008px or greater). "),n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Expand.39gngq1yta40.webp",alt:""})])],-1),h=n("li",null,[n("p",null,[n("code",null,"NavigationDisplayMode.COMPACT"),s(": A left, icon-only, nav panel on medium window widths (1007px or less). "),n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Compact.20s8q00qtvfk.webp",alt:""})])],-1),f=n("li",null,[n("p",null,[n("code",null,"NavigationDisplayMode.MENU"),s(": An expanded left menu (1007px or less). "),n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Menu.5qqwsbrrs4w0.webp",alt:""})])],-1),w=n("code",null,"NavigationDisplayMode.MINIMAL",-1),y={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation3",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,[s("If you call "),n("code",null,"NavigationInterface.setExpandWidth()"),s(", the large window width (1008px) will change accordingly.")],-1),x=n("h3",{id:"more-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#more-examples","aria-hidden":"true"},"#"),s(" More examples")],-1),I={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation",target:"_blank",rel:"noopener noreferrer"},W=n("p",null,[n("img",{src:"https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/NavigationInterface.3tihov4epdi0.webp",alt:""})],-1),N={href:"https://github.com/zhiyiYo/PyQt-Fluent-Widgets/tree/master/examples/navigation3",target:"_blank",rel:"noopener noreferrer"},F=e(`<p><img src="https://cdn.staticaly.com/gh/qfluentwidgets/picx-images-hosting@master/20230824/Minimal.dpm79rl6e7k.webp" alt=""></p><h2 id="fluentwindow" tabindex="-1"><a class="header-anchor" href="#fluentwindow" aria-hidden="true">#</a> FluentWindow</h2><p>QFluentWidgets encapsulates the side navigation bar and provides out-of-the-box <code>FluentWindow</code>, <code>SplitFluentWindow</code> and <code>MSFluentWindow</code> classes. The usage of these three classes is similar. Taking <code>FluentWindow</code> as an example, you can simply call the <code>addSubInterface()</code> method to add a sub-interface.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">addSubInterface</span><span class="token punctuation">(</span>
    self<span class="token punctuation">,</span>
    interface<span class="token punctuation">:</span> QWidget<span class="token punctuation">,</span>
    icon<span class="token punctuation">:</span> FluentIconBase <span class="token operator">|</span> QIcon <span class="token operator">|</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    text<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span>
    position<span class="token operator">=</span>NavigationItemPosition<span class="token punctuation">.</span>TOP<span class="token punctuation">,</span>
    parent<span class="token punctuation">:</span> QWidget <span class="token operator">=</span> <span class="token boolean">None</span>
<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> NavigationTreeWidget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The explanations for each parameter are as follows:</p><ul><li><code>interface</code>: The sub-interface that needs to be added.</li><li><code>icon</code>: The icon of the sidebar menu item.</li><li><code>text</code>: The text of the sidebar menu item.</li><li><code>position</code>: The position of the sidebar menu item.</li><li><code>parent</code>: The sub-interface corresponding to the parent menu item in the sidebar.</li></ul>`,6),P=n("div",{class:"custom-container warning"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8v4"}),n("path",{d:"M12 16h.01"})])]),n("p",{class:"custom-container-title"},"WARNING"),n("p",null,[s("Before calling "),n("code",null,"addSubInterface()"),s(", it is necessary to set a globally unique object name for the sub-interface as the routing key. Otherwise, the back navigation functionality may encounter issues, and the corresponding menu item for the sub-interface will not be visible in the sidebar.")])],-1),Q={href:"https://www.bilibili.com/video/BV1Uu411j7AV",target:"_blank",rel:"noopener noreferrer"},q=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> NavigationItemPosition<span class="token punctuation">,</span> FluentWindow<span class="token punctuation">,</span> SubtitleLabel<span class="token punctuation">,</span> setFont
<span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> FluentIcon <span class="token keyword">as</span> FIF


<span class="token keyword">class</span> <span class="token class-name">Widget</span><span class="token punctuation">(</span>QFrame<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>parent<span class="token operator">=</span>parent<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>label <span class="token operator">=</span> SubtitleLabel<span class="token punctuation">(</span>text<span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>hBoxLayout <span class="token operator">=</span> QHBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

        setFont<span class="token punctuation">(</span>self<span class="token punctuation">.</span>label<span class="token punctuation">,</span> <span class="token number">24</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>label<span class="token punctuation">.</span>setAlignment<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>hBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>label<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>

        <span class="token comment"># unique object name</span>
        self<span class="token punctuation">.</span>setObjectName<span class="token punctuation">(</span>text<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">Window</span><span class="token punctuation">(</span>FluentWindow<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; 主界面 &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 创建子界面，实际使用时将 Widget 换成自己的子界面</span>
        self<span class="token punctuation">.</span>homeInterface <span class="token operator">=</span> Widget<span class="token punctuation">(</span><span class="token string">&#39;Home Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>musicInterface <span class="token operator">=</span> Widget<span class="token punctuation">(</span><span class="token string">&#39;Music Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>videoInterface <span class="token operator">=</span> Widget<span class="token punctuation">(</span><span class="token string">&#39;Video Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>settingInterface <span class="token operator">=</span> Widget<span class="token punctuation">(</span><span class="token string">&#39;Setting Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>albumInterface <span class="token operator">=</span> Widget<span class="token punctuation">(</span><span class="token string">&#39;Album Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>albumInterface1 <span class="token operator">=</span> Widget<span class="token punctuation">(</span><span class="token string">&#39;Album Interface 1&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>initNavigation<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>initWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">initNavigation</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>homeInterface<span class="token punctuation">,</span> FIF<span class="token punctuation">.</span>HOME<span class="token punctuation">,</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>musicInterface<span class="token punctuation">,</span> FIF<span class="token punctuation">.</span>MUSIC<span class="token punctuation">,</span> <span class="token string">&#39;Music library&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>videoInterface<span class="token punctuation">,</span> FIF<span class="token punctuation">.</span>VIDEO<span class="token punctuation">,</span> <span class="token string">&#39;Video library&#39;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>navigationInterface<span class="token punctuation">.</span>addSeparator<span class="token punctuation">(</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>albumInterface<span class="token punctuation">,</span> FIF<span class="token punctuation">.</span>ALBUM<span class="token punctuation">,</span> <span class="token string">&#39;Albums&#39;</span><span class="token punctuation">,</span> NavigationItemPosition<span class="token punctuation">.</span>SCROLL<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>albumInterface1<span class="token punctuation">,</span> FIF<span class="token punctuation">.</span>ALBUM<span class="token punctuation">,</span> <span class="token string">&#39;Album 1&#39;</span><span class="token punctuation">,</span> parent<span class="token operator">=</span>self<span class="token punctuation">.</span>albumInterface<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>settingInterface<span class="token punctuation">,</span> FIF<span class="token punctuation">.</span>SETTING<span class="token punctuation">,</span> <span class="token string">&#39;Settings&#39;</span><span class="token punctuation">,</span> NavigationItemPosition<span class="token punctuation">.</span>BOTTOM<span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">initWindow</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">900</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setWindowIcon<span class="token punctuation">(</span>QIcon<span class="token punctuation">(</span><span class="token string">&#39;:/qfluentwidgets/images/logo.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&#39;PyQt-Fluent-Widgets&#39;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    w <span class="token operator">=</span> Window<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),T=n("div",{class:"custom-container tip"},[n("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},[n("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[n("circle",{cx:"12",cy:"12",r:"9"}),n("path",{d:"M12 8h.01"}),n("path",{d:"M11 12h1v4h1"})])]),n("p",{class:"custom-container-title"},"TIP"),n("p",null,[s("If you see something strange in the top left corner of main window, it means that you forgot to call "),n("code",null,"addSubInterface()"),s(" to add a particular sub-interface.")])],-1);function S(A,M){const a=p("ExternalLinkIcon");return i(),c("div",null,[u,d,n("p",null,[s("PyQt Fluent Widgets provides a side navigation class "),r,s(". You can use it with "),k,s(" and put them in "),m,s(". Examples are available at "),n("a",v,[s("navigation2"),t(a)]),s(".")]),b,n("ul",null,[g,h,f,n("li",null,[n("p",null,[w,s(": Only a menu button on small window widths (you should add and manage the menu button to main window by yourself like "),n("a",y,[s("navigation3"),t(a)]),s(" does).")])])]),_,x,n("p",null,[s("Here is an another style of navigation interface, and its corresponding example program is available at "),n("a",I,[s("navigation"),t(a)]),s(".")]),W,n("p",null,[s("Minimal display mode navigation interface is available at "),n("a",N,[s("navigation3"),t(a)]),s(".")]),F,P,n("p",null,[s("Here is a simple example. For more complex examples with multiple sub-interfaces, please refer to the "),n("a",Q,[s("video tutorial"),t(a)]),s(".")]),q,T])}const C=o(l,[["render",S],["__file","index.html.vue"]]);export{C as default};
