import{_ as o,a as r,b as p,c as i}from"./TimeLineWidget-3913968d.js";import{_ as c,r as l,o as u,c as d,b as s,d as n,a,e as t}from"./app-cad4e71c.js";const m={},g={id:"progressbar",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#progressbar","aria-hidden":"true"},"#",-1),k={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html",target:"_blank",rel:"noopener noreferrer"},b=t('<p><img src="'+i+`" alt="ProgressBar"></p><p><code>ProgressBar</code> is used to display task progress. Its usage is almost identical to <code>QProgressBar</code>, but it cancels the text display function.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>progressBar <span class="token operator">=</span> ProgressBar<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Set the range of values</span>
progressBar<span class="token punctuation">.</span>setRange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>

<span class="token comment"># Set the current value</span>
progressBar<span class="token punctuation">.</span>setValue<span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ProgressBar</code> can be set to pause and error states, and the color of the progress bar is different in different states:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>progressBar<span class="token punctuation">.</span>pause<span class="token punctuation">(</span><span class="token punctuation">)</span>
progressBar<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Resume running state:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bar<span class="token punctuation">.</span>resume<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Customize the color of the progress bar:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>progressBar<span class="token punctuation">.</span>setCustomBarColor<span class="token punctuation">(</span>QColor<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QColor<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,9),_={id:"indeterminateprogressbar",tabindex:"-1"},v=s("a",{class:"header-anchor",href:"#indeterminateprogressbar","aria-hidden":"true"},"#",-1),f={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/widgets/progress_bar/index.html#qfluentwidgets.components.widgets.progress_bar.IndeterminateProgressBar",target:"_blank",rel:"noopener noreferrer"},y=t(`<p><code>IndeterminateProgressBar</code> represents a long-running task that is in progress but its completion time is unknown. This type of progress bar is very useful when there is no clear completion time or progress information, such as when loading or processing a large amount of data.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bar <span class="token operator">=</span> IndeterminateProgressBar<span class="token punctuation">(</span>start<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>IndeterminateProgressBar</code> can be set to pause and error states, and the color of the progress bar is different in different states:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bar<span class="token punctuation">.</span>pause<span class="token punctuation">(</span><span class="token punctuation">)</span>
bar<span class="token punctuation">.</span>error<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Resume running state:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>bar<span class="token punctuation">.</span>resume<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Customize the color of the progress bar:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>progressBar<span class="token punctuation">.</span>setCustomBarColor<span class="token punctuation">(</span>QColor<span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> QColor<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">110</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),B={id:"filledprogressbar",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#filledprogressbar","aria-hidden":"true"},"#",-1),P={href:"https://qfluentwidgets.com/price",target:"_blank",rel:"noopener noreferrer"},w=s("p",null,[s("img",{src:o,alt:"FilledProgressBar"})],-1),C=s("p",null,[s("code",null,"FilledProgressBar"),n(" is used to display task progress.")],-1),q={id:"stepprogressbar",tabindex:"-1"},I=s("a",{class:"header-anchor",href:"#stepprogressbar","aria-hidden":"true"},"#",-1),S={href:"https://qfluentwidgets.com/price",target:"_blank",rel:"noopener noreferrer"},T=s("p",null,[s("img",{src:r,alt:"StepProgressBar"})],-1),L=s("p",null,[s("code",null,"StepProgressBar"),n(" is used to display the progress of step-by-step tasks.")],-1),Q={id:"timelinewidget",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#timelinewidget","aria-hidden":"true"},"#",-1),N={href:"https://qfluentwidgets.com/price",target:"_blank",rel:"noopener noreferrer"},E=s("p",null,[s("img",{src:p,alt:"TimeLineWidget"})],-1),F=s("p",null,[s("code",null,"TimeLineWidget"),n(" is used to display time line")],-1);function R(W,z){const e=l("ExternalLinkIcon");return u(),d("div",null,[s("h3",g,[h,n(),s("a",k,[n("ProgressBar"),a(e)])]),b,s("h3",_,[v,n(),s("a",f,[n("IndeterminateProgressBar"),a(e)])]),y,s("h3",B,[x,n(),s("a",P,[n("FilledProgressBar"),a(e)])]),w,C,s("h3",q,[I,n(),s("a",S,[n("StepProgressBar"),a(e)])]),T,L,s("h3",Q,[V,n(),s("a",N,[n("TimeLineWidget"),a(e)])]),E,F])}const D=c(m,[["render",R],["__file","index.html.vue"]]);export{D as default};