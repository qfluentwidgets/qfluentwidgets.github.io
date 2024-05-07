import{_ as p,a as i,b as o}from"./CustomFlipView-ececc3a8.js";import{_ as c,r as l,o as u,c as d,b as n,d as s,a as t,e}from"./app-cad4e71c.js";const r={},k={id:"flipview",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#flipview","aria-hidden":"true"},"#",-1),v={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/flip_view/index.html#qfluentwidgets.components.widgets.flip_view.FlipView",target:"_blank",rel:"noopener noreferrer"},g=e('<p><img src="'+p+`" alt="FlipView"></p><p>The <code>FlipView</code> component is very suitable for scenarios where a set of images need to be displayed. It can be used to implement a photo viewer where users can view each photo by flipping through the pages.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flipView <span class="token operator">=</span> HorizontalFlipView<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Adding images</span>
flipView<span class="token punctuation">.</span>addImages<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;image1.png&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;image2.png&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Listen to the signal of current page change</span>
flipView<span class="token punctuation">.</span>currentIndexChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span> index<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Current page:&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, <code>FlipView</code> forces all images to be the same size by stretching. You can set the scaling strategy to maintain the aspect ratio of the image:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flipView<span class="token punctuation">.</span>setAspectRatioMode<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>AspectRatioMode<span class="token punctuation">.</span>KeepAspectRatio<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default size of the <code>FlipView</code> viewport and images is 480×270. The method to adjust the size is as follows:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flipView<span class="token punctuation">.</span>setItemSize<span class="token punctuation">(</span>QSize<span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
flipView<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span>QSize<span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">,</span> <span class="token number">180</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>By adding image spacing and adjusting the viewport width, you can achieve the following effect of the flip view:</p><p><img src="`+i+`" alt="FlipViewRound"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flipView<span class="token punctuation">.</span>setFixedSize<span class="token punctuation">(</span>QSize<span class="token punctuation">(</span><span class="token number">710</span><span class="token punctuation">,</span> <span class="token number">270</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
flipView<span class="token punctuation">.</span>setSpacing<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>

<span class="token comment"># Enable rounded corners</span>
flipView<span class="token punctuation">.</span>setBorderRadius<span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),b={id:"flipimagedelegate",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#flipimagedelegate","aria-hidden":"true"},"#",-1),f={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/flip_view/index.html#qfluentwidgets.components.widgets.flip_view.FlipImageDelegate",target:"_blank",rel:"noopener noreferrer"},w=e('<p><img src="'+o+`" alt="CustomFlipView"></p><p><code>FlipImageDelegate</code> is used to control the rendering results of <code>FlipView</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">CustomFlipItemDelegate</span><span class="token punctuation">(</span>FlipImageDelegate<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Custom flip item delegate &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">paint</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> painter<span class="token punctuation">:</span> QPainter<span class="token punctuation">,</span> option<span class="token punctuation">:</span> QStyleOptionViewItem<span class="token punctuation">,</span> index<span class="token punctuation">:</span> QModelIndex<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>paint<span class="token punctuation">(</span>painter<span class="token punctuation">,</span> option<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># draw mask</span>
        painter<span class="token punctuation">.</span>setBrush<span class="token punctuation">(</span>QColor<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>setPen<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>NoPen<span class="token punctuation">)</span>
        rect <span class="token operator">=</span> option<span class="token punctuation">.</span>rect
        rect <span class="token operator">=</span> QRect<span class="token punctuation">(</span>rect<span class="token punctuation">.</span>x<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>y<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> rect<span class="token punctuation">.</span>height<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>drawRect<span class="token punctuation">(</span>rect<span class="token punctuation">)</span>

        <span class="token comment"># draw text</span>
        painter<span class="token punctuation">.</span>setPen<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>black<span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span>getFont<span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">,</span> QFont<span class="token punctuation">.</span>Bold<span class="token punctuation">)</span><span class="token punctuation">)</span>
        painter<span class="token punctuation">.</span>drawText<span class="token punctuation">(</span>rect<span class="token punctuation">,</span> Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">,</span> <span class="token string">&#39;🥰\\nGlass sauce is great and cute&#39;</span><span class="token punctuation">)</span>

        painter<span class="token punctuation">.</span>restore<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment"># Use custom delegate</span>
flipView<span class="token punctuation">.</span>setItemDelegate<span class="token punctuation">(</span>CustomFlipItemDelegate<span class="token punctuation">(</span>flipView<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(y,x){const a=l("ExternalLinkIcon");return u(),d("div",null,[n("h3",k,[m,s(),n("a",v,[s("FlipView"),t(a)])]),g,n("h3",b,[h,s(),n("a",f,[s("FlipImageDelegate"),t(a)])]),w])}const q=c(r,[["render",_],["__file","index.html.vue"]]);export{q as default};