(this.webpackJsonpemoji=this.webpackJsonpemoji||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),j=n(20),i=n.n(j),r=(n(111),n(138)),s=n(40),o=n(18),l=(n(112),n(85)),b=n(3),m=r.a.Header,d=function(){var e=Object(o.f)();return Object(b.jsx)(m,{className:"header",children:Object(b.jsxs)(l.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[Object(b.jsx)(l.a.Item,{children:Object(b.jsx)(s.b,{to:e.url,children:"\uc804\uccb4"})}),Object(b.jsx)(l.a.Item,{children:Object(b.jsx)(s.b,{to:"".concat(e.url,"smileys-emotion"),children:"\uc2a4\ub9c8\uc77c & \uac10\uc815"})})]})})},x=r.a.Footer,O=function(e){return Object(b.jsxs)(x,{className:"footer",children:[(new Date).getFullYear()," \xa9 EmojiSet, All rights reserved. Created by Taehong Kim"]})},u=n(141),h=r.a.Content,f=function(e){var t=e.Page;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d,{}),Object(b.jsxs)(h,{className:"main",children:[Object(b.jsxs)(u.a,{className:"main__breadcrumb",children:[Object(b.jsx)(u.a.Item,{children:Object(b.jsx)(s.b,{to:"/home",children:"Home"})}),Object(b.jsx)(u.a.Item,{children:"List"}),Object(b.jsx)(u.a.Item,{children:"app"})]}),Object(b.jsx)(t,{})]}),Object(b.jsx)(O,{})]})},p=n(84),g=n(139),v=n(100),k=n.n(v),_=n(105),y=n(75),F=n(103),L=n(142),N=function(e){var t=e.emojiInfo,n=(t.id,t.emoji),c=t.unicode,a=t.name;return Object(b.jsx)(_.a,{type:"primary",title:"".concat(a," (").concat(c,")"),children:Object(b.jsx)(y.a,{className:"emojibox__item",onClick:function(){var e,t;navigator.clipboard.writeText(n),e="\ubcf5\uc0ac \uc644\ub8cc",t="\uc774\ubaa8\uc9c0 ".concat(n,"\ub97c \uc6d0\ud558\uc2dc\ub294\uacf3\uc5d0 \ubd99\uc5ec \uc0ac\uc6a9\ud558\uc138\uc694!\n").concat(a," (").concat(c,")"),F.a.open({message:e,description:t,icon:Object(b.jsx)(L.a,{style:{color:"#108ee9"}})})},children:Object(b.jsx)("div",{className:"emojibox__item-emoji",children:n})})})},I=n(140),P=function(e){var t=e.line;return Array(t).fill(0).map((function(e){return Object(b.jsx)(I.a,{active:!0})}))},C=function(e){var t=e.url,n=e.skeletonLine,a=Object(c.useState)({}),j=Object(p.a)(a,2),i=j[0],r=j[1],s=Object(c.useState)(!0),o=Object(p.a)(s,2),l=o[0],m=o[1];Object(c.useEffect)((function(){k.a.get(t).then((function(e){r(e.data),m(!1)}))}),[t]);return Object(b.jsx)("div",{className:"main__contents-item emojibox__big",children:l?Object(b.jsx)(P,{line:n}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h2",{className:"emojibox__tit",children:i.title}),Object.keys(i.data).map((function(e){var t=i.data[e];return Object(b.jsxs)("div",{className:"emojibox__medium",children:[Object(b.jsx)(g.a,{children:e}),Object(b.jsx)("div",{className:"emojibox__item-container",children:t.map((function(e){return Object(b.jsx)(N,{emojiInfo:e},e.id)}))})]},e)}))]})})};var S=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(C,{url:"/emoji/data/smileys-emotion",skeletonLine:3}),Object(b.jsx)(C,{url:"/emoji/data/people-body",skeletonLine:5}),Object(b.jsx)(C,{url:"/emoji/data/food-drink",skeletonLine:3}),Object(b.jsx)(C,{url:"/emoji/data/component",skeletonLine:1}),Object(b.jsx)(C,{url:"/emoji/data/animals-nature",skeletonLine:3})]})};var w=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{url:"/emoji/data/smileys-emotion",skeletonLine:3})})};var T=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{url:"/emoji/data/people-body",skeletonLine:5})})};var E=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{url:"/emoji/data/food-drink",skeletonLine:3})})};var A=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{url:"/emoji/data/component",skeletonLine:1})})};var B=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C,{url:"/emoji/data/animals-nature",skeletonLine:3})})},D=function(){return Object(b.jsx)(s.a,{basename:"/emoji",children:Object(b.jsx)(r.a,{className:"container",children:Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{path:"/",children:Object(b.jsx)(f,{Page:S})}),Object(b.jsx)(o.a,{path:"/smileys-emotion",children:Object(b.jsx)(f,{Page:w})}),Object(b.jsx)(o.a,{path:"/people-body",children:Object(b.jsx)(f,{Page:T})}),Object(b.jsx)(o.a,{path:"/food-drink",children:Object(b.jsx)(f,{Page:E})}),Object(b.jsx)(o.a,{path:"/component",children:Object(b.jsx)(f,{Page:A})}),Object(b.jsx)(o.a,{path:"/animals-nature",children:Object(b.jsx)(f,{Page:B})})]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,j=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),j(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(D,{})}),document.getElementById("root")),H()}},[[135,1,2]]]);
//# sourceMappingURL=main.fe6d2168.chunk.js.map