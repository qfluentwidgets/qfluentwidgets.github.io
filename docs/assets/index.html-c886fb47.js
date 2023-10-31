import{_ as c,r as l,o as i,c as u,a as s,w as t,b as n,d as a,e as p}from"./app-cd3ea19e.js";const r={},d=n("p",null,[a("QFluentWidgets provides the "),n("code",null,"FluentTranslator"),a(" class, which is used to translate the text of built-in components. By default, the translation follows the system language.")],-1),k=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),a(" qfluentwidgets "),n("span",{class:"token keyword"},"import"),a(" CalendarPicker"),n("span",{class:"token punctuation"},","),a(` FluentTranslator

app `),n("span",{class:"token operator"},"="),a(" QApplication"),n("span",{class:"token punctuation"},"("),a("sys"),n("span",{class:"token punctuation"},"."),a("argv"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"# create an translator instance that has the same lifecycle as the app"),a(`
translator `),n("span",{class:"token operator"},"="),a(" FluentTranslator"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
app`),n("span",{class:"token punctuation"},"."),a("installTranslator"),n("span",{class:"token punctuation"},"("),a("translator"),n("span",{class:"token punctuation"},")"),a(`

w `),n("span",{class:"token operator"},"="),a(" CalendarPicker"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
w`),n("span",{class:"token punctuation"},"."),a("show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
app`),n("span",{class:"token punctuation"},"."),n("span",{class:"token keyword"},"exec"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),a(),n("span",{class:"token string"},"<FTranslator>")]),a(`
`),n("span",{class:"token macro property"},[n("span",{class:"token directive-hash"},"#"),n("span",{class:"token directive keyword"},"include"),a(),n("span",{class:"token string"},"<FCalendarPicker>")]),a(`

`),n("span",{class:"token keyword"},"int"),a(),n("span",{class:"token function"},"main"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"int"),a(" argc"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token keyword"},"char"),n("span",{class:"token operator"},"*"),a(" argv"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),a(`
`),n("span",{class:"token punctuation"},"{"),a(`
   QApplication `),n("span",{class:"token function"},"app"),n("span",{class:"token punctuation"},"("),a("argc"),n("span",{class:"token punctuation"},","),a(" argv"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

   `),n("span",{class:"token comment"},"// load translator"),a(`
   ftranslator`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"QLocale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

   CalendarPicker w`),n("span",{class:"token punctuation"},";"),a(`
   w`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"show"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

   `),n("span",{class:"token keyword"},"return"),a(" app"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"exec"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("p",null,[a("You can specify the target language by providing "),n("code",null,"QLocale"),a(" instance:")],-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token comment"},"# Simplified Chinese"),a(`
FluentTranslator`),n("span",{class:"token punctuation"},"("),a("QLocale"),n("span",{class:"token punctuation"},"("),a("QLocale"),n("span",{class:"token punctuation"},"."),a("Chinese"),n("span",{class:"token punctuation"},","),a(" QLocale"),n("span",{class:"token punctuation"},"."),a("China"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`

`),n("span",{class:"token comment"},"# Traditional Chinese"),a(`
FluentTranslator`),n("span",{class:"token punctuation"},"("),a("QLocale"),n("span",{class:"token punctuation"},"("),a("QLocale"),n("span",{class:"token punctuation"},"."),a("Chinese"),n("span",{class:"token punctuation"},","),a(" QLocale"),n("span",{class:"token punctuation"},"."),a("HongKong"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token comment"},"// Simplified Chinese"),a(`
ftranslator`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"QLocale"),n("span",{class:"token punctuation"},"("),a("QLocale"),n("span",{class:"token double-colon punctuation"},"::"),a("Chinese"),n("span",{class:"token punctuation"},","),a(" QLocale"),n("span",{class:"token double-colon punctuation"},"::"),a("China"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token comment"},"// Traditional Chinese"),a(`
ftranslator`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"load"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"QLocale"),n("span",{class:"token punctuation"},"("),a("QLocale"),n("span",{class:"token double-colon punctuation"},"::"),a("Chinese"),n("span",{class:"token punctuation"},","),a(" QLocale"),n("span",{class:"token double-colon punctuation"},"::"),a("HongKong"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=p(`<h2 id="contribute-translation" tabindex="-1"><a class="header-anchor" href="#contribute-translation" aria-hidden="true">#</a> Contribute translation</h2><p>The translation files are stored in the <code>qfluentwidgets/_rc/i18n</code> folder. You can follow the steps below to translate to a new language:</p><ol><li><p>Copy the <code>qfluentwidgets.zh_CN.ts</code> file and rename it based on the target language abbreviation, i.e. <code>qfluentwidgets.ja_JP.ts</code>. Then modify the language attribute of the <code>&lt;TS&gt;</code> tag on the third line：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TS</span> <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>2.1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">language</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ja_JP<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Open <code>qfluentwidgets.ja_JP.ts</code> using Qt Linguist and complete the translation work.</p></li><li><p>Export the <code>qfluentwidgets.ja_JP.qm</code> file.</p></li><li><p>Create a Pull Request.</p></li></ol>`,3);function f(_,w){const e=l("CodeGroupItem"),o=l("CodeGroup");return i(),u("div",null,[d,s(o,null,{default:t(()=>[s(e,{title:"Python"},{default:t(()=>[k]),_:1}),s(e,{title:"C++"},{default:t(()=>[m]),_:1})]),_:1}),h,s(o,null,{default:t(()=>[s(e,{title:"Python"},{default:t(()=>[v]),_:1}),s(e,{title:"C++"},{default:t(()=>[b]),_:1})]),_:1}),g])}const C=c(r,[["render",f],["__file","index.html.vue"]]);export{C as default};