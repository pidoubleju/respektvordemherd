(this["webpackJsonpreactjs-starter"]=this["webpackJsonpreactjs-starter"]||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),l=a(25),s=a(8),o=a(1),m=a(14),u=a.n(m),d="https://respektvordemherd.cdn.prismic.io/api/v2",p=e=>"page"===e.type?"/page/".concat(e.uid):"/",h=u.a.client(d,{accessToken:""}),f=a(26),v=a.n(f),E=({history:e,location:t})=>(Object(n.useEffect)(()=>{var a=v.a.parse(t.search.slice(1));if(!a.token)return console.warn("Unable to retrieve session token from provided url. \n\n      Check https://prismic.io/docs/rest-api/beyond-the-api/the-preview-feature for more info");h.previewSession(a.token,p,"/").then(t=>e.push(t))}),null),g={display:"flex",flexDirection:"column",justifyContent:"center",height:"50vw",alignItems:"center"},x=()=>r.a.createElement("div",{className:"not-found",style:g},r.a.createElement("h1",null,"404"),r.a.createElement("h2",null,"Document not found"),r.a.createElement("p",null,r.a.createElement(s.b,{to:"/"},"Return to homepage"))),b=a(6),y=a.n(b),k=a(10),w=a(3);a(45);var _=function({posts:e,dispatch:t}){return r.a.createElement("div",{className:"post-sidebar flex"},e.map(e=>{var a=e.post.data.blog_header;return r.a.createElement("div",{className:"post",key:e.post.id,onClick:()=>t({type:j.SET_ACTIVE,payload:{activePost:e}})},r.a.createElement("h4",null,a[0].text))}))},N=(a(46),a(13)),j={SET_POSTS:"set-posts",SET_ACTIVE:"set-active"};function O(e,t){switch(t.type){case j.SET_ACTIVE:return{activePost:t.payload.activePost};default:return e}}var S=function({posts:e}){var t=Object(o.g)(),a=Object(n.useReducer)(O,{activePost:{}}),c=Object(w.a)(a,2),i=c[0],l=c[1];return Object(n.useEffect)(()=>{l({type:j.SET_ACTIVE,payload:{activePost:e[0]}})},[e]),r.a.createElement("div",{className:"highlight-posts container flex justify-center"},r.a.createElement("div",{className:"wrapper relative w-100"},r.a.createElement("div",{className:"highlight-post"},function(e){if(e&&!(Object.keys(e).length<1)){var a=e.post.data,n=a.galerie,c=a.blog_header,i=a.abschnitt_1_text,l=n[0].galerie_bild,s=l.alt,o=l.url;return r.a.createElement("div",{className:"post flex",key:e.post.id,onClick:()=>{!function({post:e}){t.push("/category/".concat(e.tags[0],"/").concat(e.uid))}(e)}},r.a.createElement(N.b.div,{initial:{scale:.9,y:200},animate:{scale:1,y:0},transition:{duration:.3},className:"wrapper"},r.a.createElement("h1",{className:"post-header"},c[0].text),r.a.createElement("p",{className:"teaser-text"},i[0].text)),r.a.createElement(N.b.img,{initial:{x:70},animate:{x:0},transition:{duration:.3},src:o,alt:s}))}}(i.activePost)),r.a.createElement(_,{posts:e.filter(t=>e.indexOf(t)!==e.indexOf(i.activePost)),dispatch:l})))};a(47);var C=function({categoryInfo:e}){return r.a.createElement("div",{className:"showcase-category flex w-100 ".concat(e.index%2!==0?"order-switch":"")},r.a.createElement("div",{className:"wrapper flex w-100 justify-between"},r.a.createElement("div",{className:"cat-img flex"},r.a.createElement("img",{width:e.kategorie_bild.dimensions.width,src:e.kategorie_bild.url,alt:"category-img"})),r.a.createElement("div",{className:"wrapper cat-info flex"},r.a.createElement("p",null,r.a.createElement("span",{className:"h3"},e.kategorie_titel[0].text),e.kategorie_text[0].text))))};var T=function({data:e}){return r.a.createElement("div",{className:"category-showcase container flex justify-center"},r.a.createElement("h2",{className:"m-b-xlarge"},e.header[0].text),e.kategorien.map((e,t)=>(e.index=t,r.a.createElement(C,{categoryInfo:e,key:t}))))},D=()=>{var e=Object(n.useState)(null),t=Object(w.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(()=>{(function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSingle("landingpage",{fetchLinks:["post.galerie","post.blog_header","post.abschnitt_1_text"]});case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",c(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[]),r.a.createElement("div",{className:"landingpage background-dark flex fill-height"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{posts:a.data["highlight-posts"]}),r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,a.data.intro_text[0].text),r.a.createElement("p",{className:"basic-columns"},a.data.intro_text1[0].text)),r.a.createElement(T,{data:{header:a.data.kategorie_header,kategorien:a.data.post_kategorien}})))},R=a(9);var I=function({headingData:e,type:t}){var a=t||e[0].type.split("heading")[1],n=Array.isArray(e)?e[0].text:e.text;return r.a.createElement("h".concat(a),null,n)};var P=function({data:e,fullWidth:t}){var a=e.alt?e.alt:"missing alt text",n=e.dimensions,c=n.width,i=n.height;return r.a.createElement("img",{src:e.url,alt:a,width:c,height:i,className:t?"w-100":""})};var A=function({data:e}){var t=Object(o.g)();return r.a.createElement("div",{className:"post-preview",onClick:function(){t.push("/category/".concat(e.tags[0],"/").concat(e.uid))}},r.a.createElement("div",{className:"post-img"},r.a.createElement(P,{fullWidth:!0,data:e.data.post_hintergrund})),r.a.createElement(I,{type:"3",headingData:e.data.blog_header}),R.RichText.render(e.data.abschnitt_1_text))};a(48);var z=function({items:e}){return r.a.createElement("div",{className:"grid flex"},e.map((e,t)=>r.a.createElement("div",{className:"grid-item",key:t},e)))};var M=function({posts:e}){var t=e.map(e=>r.a.createElement(A,{key:e.id,data:e}));return r.a.createElement(z,{items:t})},F=e=>"".concat(e[0].toUpperCase()).concat(e.slice(1));var H=function({match:{params:{name:e}}}){var t=Object(n.useState)([]),a=Object(w.a)(t,2),c=a[0],i=a[1],l=F(e);return Object(n.useEffect)(()=>{(function(){var t=Object(k.a)(y.a.mark((function t(){var a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.query(u.a.Predicates.at("document.tags",[e]));case 2:(a=t.sent).results.length>0&&i(a.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()},[e]),r.a.createElement("div",{className:"category background-dark fill-height"},r.a.createElement("div",{className:"container"},r.a.createElement(I,{type:"1",headingData:{text:l}}),r.a.createElement(M,{posts:c})))};a(49),a(50);var B=function({item:e}){return r.a.createElement("div",{className:"nav-item"},r.a.createElement(s.b,{to:e.destination[0].text},e.label[0].text))};a(51);var V=function(){var e=Object(n.useState)([]),t=Object(w.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(!1),l=Object(w.a)(i,2),s=l[0],o=l[1],m=Object(n.useState)(!1),u=Object(w.a)(m,2),d=u[0],p=u[1];Object(n.useEffect)(()=>{(function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getSingle("navigation");case 2:if(!((t=e.sent)&&t.data&&t.data["nav-link"])){e.next=7;break}return e.abrupt("return",c(t.data["nav-link"]));case 7:o(!0);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[]);var f=r.a.createElement("div",{className:"navigation flex container widescreen"},r.a.createElement("div",{className:"nav-items flex"},a.map((e,t)=>r.a.createElement(B,{item:e,key:t}))),r.a.createElement("svg",{onClick:()=>p(!0),width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"}))),v=r.a.createElement(N.b.div,{key:"mobile-nav",initial:{x:"100%"},exit:{x:"100%"},animate:{x:"0%"},transition:{duration:.2},className:"navigation flex container mobile"},r.a.createElement("svg",{onClick:()=>p(!1),width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},r.a.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z",clipRule:"evenodd"})),r.a.createElement("div",{className:"nav-items"},a.map((e,t)=>r.a.createElement(B,{item:e,key:t}))));return a?r.a.createElement(N.a,null,d?v:f):s?r.a.createElement(x,null):null};a(52);var W=function({item:e,index:t}){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(I,{headingData:e.primary.text_heading}),R.RichText.render(e.primary.text),e.items.map((e,t)=>r.a.createElement("div",{className:"rich-text",key:t},R.RichText.render(e.body_text))))};a(53);var U=function({onClick:e,children:t,label:a}){return r.a.createElement("button",{className:"btn btn-default",onClick:e||(()=>{})},t||a)};var J=function({item:e,index:t}){console.log(e.primary);var a=e.primary,n=a.button_label,c=a.button_link,i=a.description,l=a.image_banner,s=a.title_of_banner;return r.a.createElement(r.a.Fragment,null,r.a.createElement(P,{data:l,fullWidth:"true"}),r.a.createElement(I,{headingData:s}),R.RichText.render(i),r.a.createElement(U,null,r.a.createElement("a",{href:c.url},n[0].text)))};var q=function({items:e}){return r.a.createElement("div",{className:"slice"},e.map((e,t)=>function(e,t){switch(e.slice_type){case"text":return r.a.createElement(W,{item:e,index:t,key:t});case"banner_with_caption":return r.a.createElement(J,{item:e,key:t});default:return null}}(e,t)))};var L=function(){var e=Object(n.useState)(null),t=Object(w.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(null),l=Object(w.a)(i,2),s=l[0],m=l[1],u=Object(o.h)().uid;return Object(n.useEffect)(()=>{(function(){var e=Object(k.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.getByUID("post",u);case 2:(t=e.sent)&&t.data?c(t.data):m(!0);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()},[u]),r.a.createElement("div",{className:"post-detail fill-height background-dark"},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"relative"},r.a.createElement(P,{data:a.post_hintergrund,fullWidth:"true"}),r.a.createElement("div",{className:"head-section"},r.a.createElement(I,{headingData:a.blog_header}))),r.a.createElement("div",{className:"container"},r.a.createElement(I,{headingData:a.abschnitt_1_header}),R.RichText.render(a.abschnitt_1_text),r.a.createElement(q,{items:a.body}))),s&&r.a.createElement(I,{type:"1",headingData:{text:"Dieser Artikel existiert nicht"}}))},G=()=>{var e=/([^/]+)\.cdn.prismic\.io\/api/.exec(d)[1];return r.a.createElement(n.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("script",{async:!0,defer:!0,src:"//static.cdn.prismic.io/prismic.js?repo=".concat(e,"&new=true")})),r.a.createElement(s.a,null,r.a.createElement(V,null),r.a.createElement(o.d,null,r.a.createElement(o.a,{exact:!0,from:"/",to:"/home"}),r.a.createElement(o.b,{exact:!0,path:"/preview",component:E}),r.a.createElement(o.b,{exact:!0,path:"/home",component:D}),r.a.createElement(o.b,{exact:!0,path:"/category/:name",component:H}),r.a.createElement(o.b,{exact:!0,path:"/category/:name/:uid",component:L}),r.a.createElement(o.b,{component:x}))))};a(54);i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.ca7fac55.chunk.js.map