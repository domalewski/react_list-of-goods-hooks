(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(){var t=Object(a.useState)(!1),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(s.NONE),u=Object(i.a)(o,2),j=u[0],d=u[1],N=j!==s.NONE||n,O=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(r.a)(t);return o.sort((function(t,e){switch(n){case s.LENGTH:return t.length-e.length;case s.ALPHABET:return t.localeCompare(e);default:return 0}})),c&&o.reverse(),o}(h,{sortType:j,isReversed:n}),p=function(t){d(t)};return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",onClick:function(){return p(s.ALPHABET)},className:l()("button is-info",{"is-light":j!==s.ALPHABET}),children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",onClick:function(){return p(s.LENGTH)},className:l()("button is-success",{"is-light":j!==s.LENGTH}),children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!n}),onClick:function(){c(!n)},children:"Reverse"}),N&&Object(b.jsx)("button",{type:"button",onClick:function(){d(s.NONE),c(!1)},className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:O.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.adb872e2.chunk.js.map