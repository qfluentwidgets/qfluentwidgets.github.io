import{_ as N,i as x,f as m,r as p,o as c,c as l,h as o,b as t,t as n,u as s,j as v,F as f,m as y,l as C,v as P,p as h,a as B}from"./app-6fbe8862.js";import{u as F}from"./useCustomPage-fd1a7b41.js";import{l as b}from"./locale-f8209251.js";const V={class:"price-page"},w={class:"price-header"},D={class:"price-title-container"},I={class:"price-title"},j={class:"price-big-title"},z={class:"price-desc"},E={class:"segmented-nav"},L={class:"segmented-container"},T={class:"price-card-container"},q={class:"price-card-list"},A={__name:"Price",setup(G){F();let r=x(!0),i=b("prices"),g=m(()=>r.value?"nav-item-selected":"nav-item"),k=m(()=>r.value?"nav-item":"nav-item-selected"),d=()=>{r.value=!0},u=()=>{r.value=!1};return(H,a)=>{const _=p("PriceCard"),S=p("Footer");return c(),l("div",V,[o(" 标题 "),t("div",w,[t("div",D,[t("h1",I,n(s(i).title),1),t("p",j,n(s(i).subTitle),1),t("p",z,n(s(i).description),1)])]),o(" 分段导航栏 "),t("div",E,[t("div",L,[t("div",{onClick:a[0]||(a[0]=(...e)=>s(d)&&s(d)(...e)),class:v(s(g))},"PySide6",2),t("div",{onClick:a[1]||(a[1]=(...e)=>s(u)&&s(u)(...e)),class:v(s(k))},"PySide2",2)])]),o(" 价格卡 "),t("div",T,[t("div",q,[(c(!0),l(f,null,y(s(i).pyside6,e=>C((c(),h(_,{title:e.title,desc:e.desc,price:e.price,year:e.year,url:e.url,recommend:e.recommend,features:e.features},null,8,["title","desc","price","year","url","recommend","features"])),[[P,s(r)]])),256)),(c(!0),l(f,null,y(s(i).pyside2,e=>C((c(),h(_,{title:e.title,desc:e.desc,price:e.price,year:e.year,url:e.url,recommend:e.recommend,features:e.features},null,8,["title","desc","price","year","url","recommend","features"])),[[P,!s(r)]])),256))])]),o(" 页脚 "),B(S)])}}},O=N(A,[["__file","Price.vue"]]);export{O as default};