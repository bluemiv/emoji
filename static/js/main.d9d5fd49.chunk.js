(this.webpackJsonpemoji=this.webpackJsonpemoji||[]).push([[0],{111:function(e,t,n){},112:function(e,t,n){},135:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(20),o=n.n(i),r=(n(111),n(138)),j=n(46),s=n(18),l=(n(112),n(85)),m=n(4),u=r.a.Header,b=function(){return Object(m.jsx)(u,{className:"header",children:Object(m.jsx)(l.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["1"],children:[{key:1,url:"/",title:"\uc804\uccb4"},{key:2,url:"/smileys-emotion",title:"\uc2a4\ub9c8\uc77c & \uac10\uc815"},{key:3,url:"/people-body",title:"\uc0ac\ub78c & \ubab8"},{key:4,url:"/food-drink",title:"\uc74c\uc2dd & \uc74c\ub8cc"},{key:5,url:"/component",title:"\uad6c\uc131\uc694\uc18c"},{key:6,url:"/animals-nature",title:"\ub3d9\ubb3c & \uc790\uc5f0"}].map((function(e){return Object(m.jsx)(l.a.Item,{children:Object(m.jsx)(j.b,{to:e.url,children:e.title})},e.key)}))})})},d=r.a.Footer,x=function(){return Object(m.jsxs)(d,{className:"footer",children:[(new Date).getFullYear()," \xa9 EmojiSet, All rights reserved. Created by Taehong Kim"]})},O=n(141),h=r.a.Content,f=function(e){var t=e.Page;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(b,{}),Object(m.jsxs)(h,{className:"main",children:[Object(m.jsxs)(O.a,{className:"main__breadcrumb",children:[Object(m.jsx)(O.a.Item,{children:Object(m.jsx)(j.b,{to:"/home",children:"Home"})}),Object(m.jsx)(O.a.Item,{children:"List"}),Object(m.jsx)(O.a.Item,{children:"app"})]}),Object(m.jsx)(t,{})]}),Object(m.jsx)(x,{})]})},p=n(84),g=n(139),k=n(100),y=n.n(k),v=n(105),_=n(75),F=n(103),L=n(142),N=function(e){var t=e.emojiInfo,n=t.emoji,c=t.unicode,a=t.name;return Object(m.jsx)(v.a,{type:"primary",title:"".concat(a," (").concat(c,")"),children:Object(m.jsx)(_.a,{className:"emojibox__item",onClick:function(){var e,t;navigator.clipboard.writeText(n),e="\ubcf5\uc0ac \uc644\ub8cc",t="\uc774\ubaa8\uc9c0 ".concat(n,"\ub97c \uc6d0\ud558\uc2dc\ub294\uacf3\uc5d0 \ubd99\uc5ec \uc0ac\uc6a9\ud558\uc138\uc694!\n").concat(a," (").concat(c,")"),F.a.open({message:e,description:t,icon:Object(m.jsx)(L.a,{style:{color:"#108ee9"}})})},children:Object(m.jsx)("div",{className:"emojibox__item-emoji",children:n})})})},P=n(140),I=function(e){var t=e.line;return Array(t).fill(0).map((function(e,t){return Object(m.jsx)(P.a,{active:!0},t)}))},C=function(e){var t=e.url,n=e.skeletonLine,a=Object(c.useState)({}),i=Object(p.a)(a,2),o=i[0],r=i[1],j=Object(c.useState)(!0),s=Object(p.a)(j,2),l=s[0],u=s[1];Object(c.useEffect)((function(){y.a.get(t).then((function(e){r(e.data),u(!1)}))}),[t]);return Object(m.jsx)("div",{className:"main__contents-item emojibox__big",children:l?Object(m.jsx)(I,{line:n}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{className:"emojibox__tit",children:o.title}),Object.keys(o.data).map((function(e){var t=o.data[e];return Object(m.jsxs)("div",{className:"emojibox__medium",children:[Object(m.jsx)(g.a,{children:e}),Object(m.jsx)("div",{className:"emojibox__item-container",children:t.map((function(e){return Object(m.jsx)(N,{emojiInfo:e},e.id)}))})]},e)}))]})})};var S=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(C,{url:"/emoji/data/smileys-emotion",skeletonLine:3}),Object(m.jsx)(C,{url:"/emoji/data/people-body",skeletonLine:5}),Object(m.jsx)(C,{url:"/emoji/data/food-drink",skeletonLine:3}),Object(m.jsx)(C,{url:"/emoji/data/component",skeletonLine:1}),Object(m.jsx)(C,{url:"/emoji/data/animals-nature",skeletonLine:3})]})};var w=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{url:"/emoji/data/smileys-emotion",skeletonLine:3})})};var T=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{url:"/emoji/data/people-body",skeletonLine:5})})};var E=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{url:"/emoji/data/food-drink",skeletonLine:3})})};var A=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{url:"/emoji/data/component",skeletonLine:1})})};var B=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(C,{url:"/emoji/data/animals-nature",skeletonLine:3})})},D=function(){return Object(m.jsx)(j.a,{basename:"/emoji",children:Object(m.jsx)(r.a,{className:"container",children:Object(m.jsxs)(s.c,{children:[Object(m.jsx)(s.a,{exact:!0,path:"/",component:function(){return Object(m.jsx)(f,{Page:S})}}),Object(m.jsx)(s.a,{exact:!0,path:"/smileys-emotion",component:function(){return Object(m.jsx)(f,{Page:w})}}),Object(m.jsx)(s.a,{exact:!0,path:"/people-body",component:function(){return Object(m.jsx)(f,{Page:T})}}),Object(m.jsx)(s.a,{exact:!0,path:"/food-drink",component:function(){return Object(m.jsx)(f,{Page:E})}}),Object(m.jsx)(s.a,{exact:!0,path:"/component",component:function(){return Object(m.jsx)(f,{Page:A})}}),Object(m.jsx)(s.a,{exact:!0,path:"/animals-nature",component:function(){return Object(m.jsx)(f,{Page:B})}})]})})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),H()}},[[135,1,2]]]);
//# sourceMappingURL=main.d9d5fd49.chunk.js.map