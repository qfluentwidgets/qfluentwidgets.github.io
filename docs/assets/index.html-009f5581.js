import{_ as e}from"./SplashScreen-0f4bbf87.js";import{_ as t,r as p,o,c,b as n,d as s,a as i,e as l}from"./app-cad4e71c.js";const u={},d={id:"splashscreen",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#splashscreen","aria-hidden":"true"},"#",-1),k={href:"https://pyqt-fluent-widgets.readthedocs.io/zh-cn/latest/autoapi/qfluentwidgets/window/splash_screen/index.html",target:"_blank",rel:"noopener noreferrer"},v=l('<p><img src="'+e+`" alt="SplashScreen"></p><p><code>SplashScreen</code> 可用作启动页面，显示 Logo 和标题栏。</p><p>使用方式如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># coding:utf-8</span>
<span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> SplashScreen
<span class="token keyword">from</span> qframelesswindow <span class="token keyword">import</span> FramelessWindow<span class="token punctuation">,</span> StandardTitleBar


<span class="token keyword">class</span> <span class="token class-name">Demo</span><span class="token punctuation">(</span>FramelessWindow<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">600</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&#39;PyQt-Fluent-Widgets&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setWindowIcon<span class="token punctuation">(</span>QIcon<span class="token punctuation">(</span><span class="token string">&#39;:/qfluentwidgets/images/logo.png&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 1. 创建启动页面</span>
        self<span class="token punctuation">.</span>splashScreen <span class="token operator">=</span> SplashScreen<span class="token punctuation">(</span>self<span class="token punctuation">.</span>windowIcon<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>splashScreen<span class="token punctuation">.</span>setIconSize<span class="token punctuation">(</span>QSize<span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span> <span class="token number">102</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token comment"># 2. 在创建其他子页面前先显示主界面</span>
        self<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 3. 创建子界面</span>
        self<span class="token punctuation">.</span>createSubInterface<span class="token punctuation">(</span><span class="token punctuation">)</span>

        <span class="token comment"># 4. 隐藏启动页面</span>
        self<span class="token punctuation">.</span>splashScreen<span class="token punctuation">.</span>finish<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">createSubInterface</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        loop <span class="token operator">=</span> QEventLoop<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        QTimer<span class="token punctuation">.</span>singleShot<span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> loop<span class="token punctuation">.</span>quit<span class="token punctuation">)</span>
        loop<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    w <span class="token operator">=</span> Demo<span class="token punctuation">(</span><span class="token punctuation">)</span>
    w<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下 <code>SplashScreen</code> 的标题栏不显示图标和标题，可通过更换标题栏来设置图标和标题：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> qframelesswindow <span class="token keyword">import</span> StandardTitleBar

titleBar <span class="token operator">=</span> StandardTitleBar<span class="token punctuation">(</span>self<span class="token punctuation">.</span>splashScreen<span class="token punctuation">)</span>
titleBar<span class="token punctuation">.</span>setIcon<span class="token punctuation">(</span>self<span class="token punctuation">.</span>windowIcon<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
titleBar<span class="token punctuation">.</span>setTitle<span class="token punctuation">(</span>self<span class="token punctuation">.</span>windowTitle<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
splashScreen<span class="token punctuation">.</span>setTitleBar<span class="token punctuation">(</span>titleBar<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function m(b,f){const a=p("ExternalLinkIcon");return o(),c("div",null,[n("h3",d,[r,s(),n("a",k,[s("SplashScreen"),i(a)])]),v])}const w=t(u,[["render",m],["__file","index.html.vue"]]);export{w as default};
