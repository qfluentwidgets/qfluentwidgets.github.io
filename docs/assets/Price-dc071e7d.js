import{_ as I,i as m,f as p,r as N,o as r,c as o,h as d,b as s,t as v,u as t,j as _,F as f,m as y,l as C,v as P,p as h,a as V}from"./app-cd3ea19e.js";import{u as w}from"./useCustomPage-b259a3f4.js";import{l as D}from"./locale-51311be4.js";const j={class:"price-page"},z={class:"price-header"},E={class:"price-title-container"},L={class:"price-title"},T={class:"price-big-title"},q={class:"price-desc"},A={class:"segmented-nav"},G={class:"segmented-container"},H={class:"price-card-container"},J={class:"price-card-list"},K={__name:"Price",setup(M){w();let i=m(!0),n=m(!1),c=m(!1),a=D("prices"),x=p(()=>i.value?"nav-item-selected":"nav-item"),B=p(()=>n.value?"nav-item-selected":"nav-item"),F=p(()=>c.value?"nav-item-selected":"nav-item"),g=()=>{i.value=!0,n.value=!1,c.value=!1},k=()=>{i.value=!1,n.value=!0,c.value=!1},S=()=>{i.value=!1,n.value=!1,c.value=!0};return(O,l)=>{const u=N("PriceCard"),b=N("Footer");return r(),o("div",j,[d(" 标题 "),s("div",z,[s("div",E,[s("h1",L,v(t(a).title),1),s("p",T,v(t(a).subTitle),1),s("p",q,v(t(a).description),1)])]),d(" 分段导航栏 "),s("div",A,[s("div",G,[s("div",{onClick:l[0]||(l[0]=(...e)=>t(g)&&t(g)(...e)),class:_(t(x))},"PySide6",2),s("div",{onClick:l[1]||(l[1]=(...e)=>t(k)&&t(k)(...e)),class:_(t(B))},"PySide2",2),s("div",{onClick:l[2]||(l[2]=(...e)=>t(S)&&t(S)(...e)),class:_(t(F))},"C++",2)])]),d(" 价格卡 "),s("div",H,[s("div",J,[(r(!0),o(f,null,y(t(a).pyside6,e=>C((r(),h(u,{title:e.title,desc:e.desc,price:e.price,year:e.year,permanent:e.permanent,url:e.url,recommend:e.recommend,features:e.features},null,8,["title","desc","price","year","permanent","url","recommend","features"])),[[P,t(i)]])),256)),(r(!0),o(f,null,y(t(a).pyside2,e=>C((r(),h(u,{title:e.title,desc:e.desc,price:e.price,year:e.year,permanent:e.permanent,url:e.url,recommend:e.recommend,features:e.features},null,8,["title","desc","price","year","permanent","url","recommend","features"])),[[P,t(n)]])),256)),(r(!0),o(f,null,y(t(a).cpp,e=>C((r(),h(u,{title:e.title,desc:e.desc,price:e.price,year:e.year,permanent:e.permanent,url:e.url,recommend:e.recommend,features:e.features},null,8,["title","desc","price","year","permanent","url","recommend","features"])),[[P,t(c)]])),256))])]),d(" 页脚 "),V(b)])}}},W=I(K,[["__file","Price.vue"]]);export{W as default};
