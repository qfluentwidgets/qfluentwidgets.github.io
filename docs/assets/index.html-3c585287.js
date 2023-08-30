import{_ as s,a as n,b as e}from"./Edit_Light_Qss_Dialog-44576d9f.js";import{_ as a,o as t,c as o,e as p}from"./app-6d437e8a.js";const c={},i=p(`<h2 id="theme-mode" tabindex="-1"><a class="header-anchor" href="#theme-mode" aria-hidden="true">#</a> Theme mode</h2><p>You can use the <code>setTheme()</code> method to switch the light/dark theme of PyQt-Fluent-Widgets. The parameter of <code>setTheme()</code> accepts the following three values:</p><ul><li><code>Theme.LIGHT</code>: Light theme</li><li><code>Theme.DARK</code>: Dark theme</li><li><code>Theme.AUTO</code>: Follow system theme. If the system theme cannot be detected, the light theme will be used.</li></ul><p><code>toggleTheme()</code> is used to toggle the theme mode. When the theme changes, <code>qconfig</code> will emit the <code>themeChanged</code> signal.</p><p>If you want to automatically switch the interface style when the theme changes, you can inherit <code>StyleSheetBase</code> and override the <code>path()</code> method. Suppose you have a <code>Window</code> class and its qss file paths are <code>qss/light/window.qss</code> and <code>qss/dark/window.qss</code>, the code can be written like this:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> enum <span class="token keyword">import</span> Enum
<span class="token keyword">from</span> qfluentwidgets <span class="token keyword">import</span> StyleSheetBase<span class="token punctuation">,</span> Theme<span class="token punctuation">,</span> isDarkTheme<span class="token punctuation">,</span> qconfig


<span class="token keyword">class</span> <span class="token class-name">StyleSheet</span><span class="token punctuation">(</span>StyleSheetBase<span class="token punctuation">,</span> Enum<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Style sheet  &quot;&quot;&quot;</span>

    WINDOW <span class="token operator">=</span> <span class="token string">&quot;window&quot;</span>

    <span class="token keyword">def</span> <span class="token function">path</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> theme<span class="token operator">=</span>Theme<span class="token punctuation">.</span>AUTO<span class="token punctuation">)</span><span class="token punctuation">:</span>
        theme <span class="token operator">=</span> qconfig<span class="token punctuation">.</span>theme <span class="token keyword">if</span> theme <span class="token operator">==</span> Theme<span class="token punctuation">.</span>AUTO <span class="token keyword">else</span> theme
        <span class="token keyword">return</span> <span class="token string-interpolation"><span class="token string">f&quot;qss/</span><span class="token interpolation"><span class="token punctuation">{</span>theme<span class="token punctuation">.</span>value<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>value<span class="token punctuation">}</span></span><span class="token string">.qss&quot;</span></span>


<span class="token keyword">class</span> <span class="token class-name">Window</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>parent<span class="token operator">=</span>parent<span class="token punctuation">)</span>

        <span class="token comment"># apply style sheet to window</span>
        StyleSheet<span class="token punctuation">.</span>WINDOW<span class="token punctuation">.</span><span class="token builtin">apply</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="customize-style" tabindex="-1"><a class="header-anchor" href="#customize-style" aria-hidden="true">#</a> Customize style</h2><p>If you are dissatisfied with the style of the built-in components and want to make minor adjustments to them, you can use <code>setCustomStyleSheet()</code> to add new styles based on the existing style. The function signature is as follows:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">setCustomStyleSheet</span><span class="token punctuation">(</span>widget<span class="token punctuation">:</span> QWidget<span class="token punctuation">,</span> lightQss<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> darkQss<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>where <code>widget</code> is the component that needs its style adjusted, <code>lightQss</code> and <code>darkQss</code> are the custom styles added for light/dark themes.</p><p>For example, let&#39;s adjust the border-radius of a <code>PushButton</code> to 10px:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>button <span class="token operator">=</span> PushButton<span class="token punctuation">(</span><span class="token string">&#39;Button&#39;</span><span class="token punctuation">,</span> self<span class="token punctuation">)</span>

<span class="token comment"># add custom qss</span>
qss <span class="token operator">=</span> <span class="token string">&#39;PushButton{border-radius: 10px}&#39;</span>
setCustomStyleSheet<span class="token punctuation">(</span>button<span class="token punctuation">,</span> qss<span class="token punctuation">,</span> qss<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In Qt Designer, you can achieve custom styling by adding dynamic properties. Here are the steps:</p><ol><li><p>Add a dynamic property of type &quot;String&quot;.</p><p><img src="`+s+'" alt="Add String Dynamic Property"></p></li><li><p>In the &quot;Create Dynamic Property&quot; dialog, set the property name as <code>lightCustomQss</code> for the light mode and <code>darkCustomQss</code> for the dark mode.</p><p><img src="'+n+'" alt="Set name"></p></li><li><p>Click the <code>...</code> button next to the property and edit <code>lightCustomQss</code> in the &quot;Edit Text&quot; dialog.</p><p><img src="'+e+'" alt="Set qss"></p></li></ol><h2 id="theme-color" tabindex="-1"><a class="header-anchor" href="#theme-color" aria-hidden="true">#</a> Theme color</h2><p><code>themeColor()</code> returns current theme color, and you can use <code>setThemeColor()</code> method to change the theme color of QFluentWidgets. This method accepts the following three types of parameters:</p><ul><li><code>QColor</code></li><li><code>Qt.GlobalColor</code></li><li><code>str</code>: Hex color strings or color names, such as <code>#0065d5</code> or <code>red</code>.</li></ul><p>When the theme color changes, the config instance managed by <code>qconfig</code> will emit the <code>themeColorChanged</code> signal.</p>',18),l=[i];function d(u,r){return t(),o("div",null,l)}const k=a(c,[["render",d],["__file","index.html.vue"]]);export{k as default};