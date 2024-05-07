import{_ as t,a as o}from"./AMTimePicker-fd356c58.js";import{_ as i,r as p,o as c,c as l,b as n,d as s,a as e,e as u}from"./app-cad4e71c.js";const r={},d={id:"timepicker",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#timepicker","aria-hidden":"true"},"#",-1),k={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.TimePicker",target:"_blank",rel:"noopener noreferrer"},v=u('<p><img src="'+o+`" alt="TimePicker"></p><p><code>TimePicker</code> is used to select time in 24-hour format. When the selected time changes, it will send a <code>timeChanged</code> signal.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>timePicker <span class="token operator">=</span> TimePicker<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># Set the current time</span>
timePicker<span class="token punctuation">.</span>setTime<span class="token punctuation">(</span>QTime<span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token number">53</span><span class="token punctuation">,</span> <span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># Get the current time</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>timePicker<span class="token punctuation">.</span>time<span class="token punctuation">)</span>

<span class="token comment"># Time changes</span>
timePicker<span class="token punctuation">.</span>timeChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token keyword">lambda</span> time<span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>toString<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can modify the format of each column of <code>TimePicker</code> by inheriting from <code>PickerColumnFormatter</code>:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">SecondsFormatter</span><span class="token punctuation">(</span>PickerColumnFormatter<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot; Seconds formatter &quot;&quot;&quot;</span>

    <span class="token keyword">def</span> <span class="token function">encode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; seconds&quot;</span>

    <span class="token keyword">def</span> <span class="token function">decode</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> value<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token builtin">int</span><span class="token punctuation">(</span>value<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token comment"># Use the custom seconds format (third column)</span>
timePicker<span class="token punctuation">.</span>setColumnFormatter<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> SecondsFormatter<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to show or hide a certain column:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>timePicker<span class="token punctuation">.</span>setColumnVisible<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>   <span class="token comment"># Hide hours</span>
timePicker<span class="token punctuation">.</span>setColumnVisible<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span>   <span class="token comment"># Hide minutes</span>
timePicker<span class="token punctuation">.</span>setColumnVisible<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>    <span class="token comment"># Show seconds</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),h={id:"amtimepicker",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#amtimepicker","aria-hidden":"true"},"#",-1),_={href:"https://pyqt-fluent-widgets.readthedocs.io/en/latest/autoapi/qfluentwidgets/components/date_time/time_picker/index.html#qfluentwidgets.components.date_time.time_picker.AMTimePicker",target:"_blank",rel:"noopener noreferrer"},f=n("p",null,[n("img",{src:t,alt:"AMTimePicker"})],-1),g=n("p",null,[n("code",null,"AMTimePicker"),s(" is used to select time in AM/PM format. The usage is the same as "),n("a",{href:"#timepicker"},"TimePicker"),s(".")],-1);function y(P,w){const a=p("ExternalLinkIcon");return c(),l("div",null,[n("h3",d,[m,s(),n("a",k,[s("TimePicker"),e(a)])]),v,n("h3",h,[b,s(),n("a",_,[s("AMTimePicker"),e(a)])]),f,g])}const x=i(r,[["render",y],["__file","index.html.vue"]]);export{x as default};