import{_ as o,a as p,b as i,c,d as l}from"./TopNavigationBar-13cd26e2.js";import{_ as u,r as d,o as r,c as k,b as n,d as s,a as t,e}from"./app-cad4e71c.js";const m={},g={id:"pivot",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#pivot","aria-hidden":"true"},"#",-1),b={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.Pivot",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,[n("img",{src:o,alt:"Pivot"})],-1),f=n("p",null,[s("The "),n("code",null,"Pivot"),s(" widget supports switching between a set of tab items, with an underline appearing under the selected tab item.")],-1),_=n("code",null,"addItem()",-1),w=n("code",null,"routeKey",-1),q={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/pivot/index.html#qfluentwidgets.components.navigation.pivot.PivotItem",target:"_blank",rel:"noopener noreferrer"},I=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pivot <span class="token operator">=</span> Pivot<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Add tab items</span>
pivot<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>routeKey<span class="token operator">=</span><span class="token string">&quot;songInterface&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;Song&quot;</span><span class="token punctuation">,</span> onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
pivot<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>routeKey<span class="token operator">=</span><span class="token string">&quot;albumInterface&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;Album&quot;</span><span class="token punctuation">,</span> onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Album&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
pivot<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>routeKey<span class="token operator">=</span><span class="token string">&quot;artistInterface&quot;</span><span class="token punctuation">,</span> text<span class="token operator">=</span><span class="token string">&quot;Artist&quot;</span><span class="token punctuation">,</span> onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Artist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Set the current tab item</span>
pivot<span class="token punctuation">.</span>setCurrentItem<span class="token punctuation">(</span><span class="token string">&quot;albumInterface&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Get the current tab item</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>pivot<span class="token punctuation">.</span>currentItem<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The top navigation bar is often used with <code>QStackedWidget</code>. When users click on different tab items, the current page will be switched.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>pivot <span class="token operator">=</span> Pivot<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget <span class="token operator">=</span> QStackedWidget<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span>self<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>songInterface <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&#39;Song Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>albumInterface <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&#39;Album Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>artistInterface <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&#39;Artist Interface&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>

        <span class="token comment"># Add tabs</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>songInterface<span class="token punctuation">,</span> <span class="token string">&#39;songInterface&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Song&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>albumInterface<span class="token punctuation">,</span> <span class="token string">&#39;albumInterface&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Album&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>addSubInterface<span class="token punctuation">(</span>self<span class="token punctuation">.</span>artistInterface<span class="token punctuation">,</span> <span class="token string">&#39;artistInterface&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Artist&#39;</span><span class="token punctuation">)</span>

        <span class="token comment"># Connect signal and initialize the current tab</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>currentChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>onCurrentIndexChanged<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>setCurrentWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>songInterface<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>pivot<span class="token punctuation">.</span>setCurrentItem<span class="token punctuation">(</span>self<span class="token punctuation">.</span>songInterface<span class="token punctuation">.</span>objectName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>setContentsMargins<span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>pivot<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignHCenter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>vBoxLayout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">addSubInterface</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> widget<span class="token punctuation">:</span> QLabel<span class="token punctuation">,</span> objectName<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> text<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        widget<span class="token punctuation">.</span>setObjectName<span class="token punctuation">(</span>objectName<span class="token punctuation">)</span>
        widget<span class="token punctuation">.</span>setAlignment<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>widget<span class="token punctuation">)</span>

        <span class="token comment"># Use the globally unique objectName as the route key</span>
        self<span class="token punctuation">.</span>pivot<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>
            routeKey<span class="token operator">=</span>objectName<span class="token punctuation">,</span>
            text<span class="token operator">=</span>text<span class="token punctuation">,</span>
            onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>setCurrentWidget<span class="token punctuation">(</span>widget<span class="token punctuation">)</span>
        <span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">onCurrentIndexChanged</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">:</span>
        widget <span class="token operator">=</span> self<span class="token punctuation">.</span>stackedWidget<span class="token punctuation">.</span>widget<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>pivot<span class="token punctuation">.</span>setCurrentItem<span class="token punctuation">(</span>widget<span class="token punctuation">.</span>objectName<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),y={id:"segmentedwidget",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#segmentedwidget","aria-hidden":"true"},"#",-1),S={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidget",target:"_blank",rel:"noopener noreferrer"},T=n("p",null,[n("img",{src:p,alt:"SegmentedWidget"})],-1),W=n("code",null,"SegmentedWidget",-1),C=n("a",{href:"#pivot"},"Pivot",-1),A=n("code",null,"addItem()",-1),N={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedWidgetItem",target:"_blank",rel:"noopener noreferrer"},B={id:"segmentedtoolwidget",tabindex:"-1"},L=n("a",{class:"header-anchor",href:"#segmentedtoolwidget","aria-hidden":"true"},"#",-1),K={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolWidget",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,[n("img",{src:i,alt:"SegmentedToolWidget"})],-1),Q=n("p",null,[s("The "),n("code",null,"SegmentedToolWidget"),s(" icon segmented navigation widget supports switching between a set of icon tab items.")],-1),j=n("code",null,"addItem()",-1),E=n("code",null,"routeKey",-1),V={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToolItem",target:"_blank",rel:"noopener noreferrer"},F=e(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sw <span class="token operator">=</span> SegmentedToolWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Add tab items</span>
sw<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>routeKey<span class="token operator">=</span><span class="token string">&quot;songInterface&quot;</span><span class="token punctuation">,</span> icon<span class="token operator">=</span>FluentIcon<span class="token punctuation">.</span>TRANSPARENT<span class="token punctuation">,</span> onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Song&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sw<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>routeKey<span class="token operator">=</span><span class="token string">&quot;albumInterface&quot;</span><span class="token punctuation">,</span> icon<span class="token operator">=</span>FluentIcon<span class="token punctuation">.</span>CHECKBOX<span class="token punctuation">,</span> onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Album&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
sw<span class="token punctuation">.</span>addItem<span class="token punctuation">(</span>routeKey<span class="token operator">=</span><span class="token string">&quot;artistInterface&quot;</span><span class="token punctuation">,</span> icon<span class="token operator">=</span>FluentIcon<span class="token punctuation">.</span>CONSTRACT<span class="token punctuation">,</span> onClick<span class="token operator">=</span><span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Artist&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Set the current tab item</span>
sw<span class="token punctuation">.</span>setCurrentItem<span class="token punctuation">(</span><span class="token string">&quot;albumInterface&quot;</span><span class="token punctuation">)</span>

<span class="token comment"># Get the current tab item</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>sw<span class="token punctuation">.</span>currentItem<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O={id:"segmentedtoggletoolwidget",tabindex:"-1"},R=n("a",{class:"header-anchor",href:"#segmentedtoggletoolwidget","aria-hidden":"true"},"#",-1),z={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolWidget",target:"_blank",rel:"noopener noreferrer"},G=n("p",null,[n("img",{src:c,alt:"SegmentedToggleToolWidget"})],-1),H=n("code",null,"SegmentedToggleToolWidget",-1),Y=n("a",{href:"#segmentedtoolwidget"},"SegmentedToolWidget",-1),D=n("code",null,"addItem()",-1),M={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/navigation/segmented_widget/index.html#qfluentwidgets.components.navigation.segmented_widget.SegmentedToggleToolItem",target:"_blank",rel:"noopener noreferrer"},U={id:"topnavigationbar",tabindex:"-1"},X=n("a",{class:"header-anchor",href:"#topnavigationbar","aria-hidden":"true"},"#",-1),J={href:"https://qfluentwidgets.com/price",target:"_blank",rel:"noopener noreferrer"},Z=n("p",null,[n("img",{src:l,alt:"TopNavigationBar"})],-1),$=n("p",null,[n("code",null,"TopNavigationBar"),s(" provides top navigation functionality.")],-1);function nn(sn,an){const a=d("ExternalLinkIcon");return r(),k("div",null,[n("h3",g,[v,s(),n("a",b,[s("Pivot"),t(a)])]),h,f,n("p",null,[s("You can add tab items through "),_,s(", each tab item needs to be bound to a globally unique "),w,s(". The return value is a "),n("a",q,[s("PivotItem"),t(a)]),s(" instance.")]),I,n("h3",y,[x,s(),n("a",S,[s("SegmentedWidget"),t(a)])]),T,n("p",null,[s("The "),W,s(" segmented navigation widget supports switching between a set of tab items. Its usage is exactly the same as "),C,s(", and the return value of "),A,s(" is a "),n("a",N,[s("SegmentedItem"),t(a)]),s(" instance.")]),n("h3",B,[L,s(),n("a",K,[s("SegmentedToolWidget"),t(a)])]),P,Q,n("p",null,[s("You can add tab items through "),j,s(", each tab item needs to be bound to a globally unique "),E,s(". The return value is a "),n("a",V,[s("SegmentedToolItem"),t(a)]),s(" instance.")]),F,n("h3",O,[R,s(),n("a",z,[s("SegmentedToggleToolWidget"),t(a)])]),G,n("p",null,[s("The usage of "),H,s(" is exactly the same as "),Y,s(", and the return value of "),D,s(" is a "),n("a",M,[s("SegmentedToolItem"),t(a)]),s(" instance.")]),n("h3",U,[X,s(),n("a",J,[s("TopNavigationBar"),t(a)])]),Z,$])}const on=u(m,[["render",nn],["__file","index.html.vue"]]);export{on as default};