_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"0VmD":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("17x9"),o=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,c=e.size,o=void 0===c?24:c,l=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"}),a.a.createElement("polygon",{points:"12 15 17 21 7 21 12 15"}))});l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Airplay",t.a=l},"4mG2":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/elections",function(){return n("clhn")}])},clhn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return b});var r=n("nKUr"),a=n("q1tI"),c=n("g4pe"),o=n.n(c),i=n("CafY"),s=n("jtf1"),l=n("0VmD"),u=n("mdnA"),p=n("/h/p");function d(e){return Object(r.jsxs)("div",{className:"card",children:[Object(r.jsx)("div",{className:"intro",children:Object(r.jsx)(p.a,{images:"/awards/".concat(e.RollNo,".png"),title:e.Name,description:e.Proposal,SOPLink:e.SOPLink})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("h3",{children:Object(r.jsxs)("span",{children:[e.Name," | ",e.Hall," ",e.Description]})}),Object(r.jsx)("hr",{}),Object(r.jsx)("a",{href:e.FacebookLink,target:"_blank",rel:"noreferrer noopener",children:Object(r.jsx)(s.a,{})}),Object(r.jsxs)("a",{href:e.ProposalLink,target:"_blank",rel:"noreferrer noopener",children:["  ",Object(r.jsx)(l.a,{})]}),Object(r.jsxs)("a",{href:"mailto:".concat(e.Email),target:"_blank",rel:"noreferrer noopener",children:["  ",Object(r.jsx)(u.a,{})]})]})]})}var h={VPData:[{RollNo:"person-placeholder",Description:"XX 'XX",Name:"Firstname Lastname",Contact:"XXX XXX XXX",Hall:"Hall",Email:"random@email.com",Proposal:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",ProposalLink:"https://google.com",FacebookLink:"https://facebook.com"}]},j=["Football","Cricket","Hockey","Tennis","Indoor Games","Volleyball","Basketball","Badminton","Gymnasium & Weightlifting","Athletics","Aquatics","Squash","Entertainment","Dramatics","Journal","Literary","Film & Photography","Fine Arts & Modelling","Knowledge Cup","Application Cup","Innovation Cup","Strategy Cup"];function b(){var e=Object(a.useState)("vp"),t=e[0],n=e[1],c=Object(a.useState)("2018-19"),s=c[0],l=c[1],u=function(e){n(e)};return Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o.a,{children:Object(r.jsx)("title",{children:"TSG Elections"})}),Object(r.jsxs)("section",{className:"points content",children:[Object(r.jsx)("h2",{children:"Technology Students' Gymkhana Elections 2021-2022"}),Object(r.jsxs)("div",{className:"tabs",children:[Object(r.jsx)("div",{className:"tab ".concat("vp"==t?"active":""),onClick:function(){return u("vp")},children:"Vice President"}),Object(r.jsx)("div",{className:"tab ".concat("gsecSports"==t?"active":""),onClick:function(){return u("gsecSports")},children:"G.Sec Sports & Games"}),Object(r.jsx)("div",{className:"tab ".concat("gsecSoCult"==t?"active":""),onClick:function(){return u("gsecSoCult")},children:"G.Sec Social & Cultural"})," ",Object(r.jsx)("div",{className:"tab ".concat("gsecTech"==t?"active":""),onClick:function(){return u("gsecTech")},children:"G.Sec Tech"}),Object(r.jsx)("div",{className:"tab ".concat("gsecSW"==t?"active":""),onClick:function(){return u("gsecSW")},children:"G.Sec Students' Welfare"}),Object(r.jsx)("div",{className:"tab ".concat("secy"==t?"active":""),onClick:function(){return u("secy")},children:"Secretaries"})]}),"secy"===t&&Object(r.jsx)("select",{value:s,onChange:function(e){return l(e.target.value)},children:j.map(function(e){return Object(r.jsx)("option",{value:e,children:e},e)})}),Object(r.jsx)("h2",{children:"Candidates"}),Object(r.jsx)("div",{className:"main-content",children:Object(r.jsx)("div",{className:"society-cards",children:Object(r.jsx)("div",{className:"cards",children:h.VPData.map(function(e){return Object(r.jsx)(d,{Name:e.Name,Hall:e.Hall,Description:e.Description,RollNo:e.RollNo,Email:e.Email,Proposal:e.Proposal,ProposalLink:e.ProposalLink,FacebookLink:e.FacebookLink,SOPLink:"https://youtu.be/dQw4w9WgXcQ"},e.RollNo)})})})})]})]})}},mdnA:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),c=n("17x9"),o=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)(function(e,t){var n=e.color,r=void 0===n?"currentColor":n,c=e.size,o=void 0===c?24:c,l=s(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),a.a.createElement("polyline",{points:"22,6 12,13 2,6"}))});l.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},l.displayName="Mail",t.a=l}},[["4mG2",0,2,1,3,4]]]);