(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(195),o=a(182),l=a(175),i=a(180),s="",u="dark",d=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.disableDarkMode,a=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):s),r=a[0],c=a[1],o=Object(n.useCallback)((function(e){try{localStorage.setItem("theme",e)}catch(t){console.error(t)}}),[c]),i=Object(n.useCallback)((function(){c(s),o(s)}),[]),d=Object(n.useCallback)((function(){c(u),o(u)}),[]);return Object(n.useEffect)((function(){document.documentElement.setAttribute("data-theme",r)}),[r]),Object(n.useEffect)((function(){if(!t)try{var e=localStorage.getItem("theme");null!==e&&c(e)}catch(a){console.error(a)}}),[c]),Object(n.useEffect)((function(){t||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;c(t?u:s)}))}),[]),{isDarkTheme:r===u,setLightTheme:i,setDarkTheme:d}},f=a(210);var h=function(e){var t=d(),a=t.isDarkTheme,n=t.setLightTheme,c=t.setDarkTheme;return r.a.createElement(f.a.Provider,{value:{isDarkTheme:a,setLightTheme:n,setDarkTheme:c}},e.children)},m=(a(187),a(186),function(){var e=Object(n.useState)({}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e,t){try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}}),[]);return Object(n.useEffect)((function(){try{for(var e={},t=0;t<localStorage.length;t+=1){var n=localStorage.key(t);if(n.startsWith("docusaurus.tab."))e[n.substring("docusaurus.tab.".length)]=localStorage.getItem(n)}a(e)}catch(r){console.error(r)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){a((function(a){var n;return Object.assign({},a,((n={})[e]=t,n))})),r(e,t)}}}),v=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});var b=function(e){var t=m(),a=t.tabGroupChoices,n=t.setTabGroupChoices;return r.a.createElement(v.Provider,{value:{tabGroupChoices:a,setTabGroupChoices:n}},e.children)},p=a(211),g=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=(t=void 0===t?{}:t).id,r=Object(n.useState)(!0),c=r[0],o=r[1];return Object(n.useEffect)((function(){if(a){var e=localStorage.getItem("docusaurus.announcement.id"),t=a!==e;localStorage.setItem("docusaurus.announcement.id",a),t&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(t||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&o(!1)}}),[]),{isAnnouncementBarClosed:c,closeAnnouncementBar:function(){localStorage.setItem("docusaurus.announcement.dismiss",!0),o(!0)}}};var k=function(e){var t=g(),a=t.isAnnouncementBarClosed,n=t.closeAnnouncementBar;return r.a.createElement(p.a.Provider,{value:{isAnnouncementBarClosed:a,closeAnnouncementBar:n}},e.children)},E=a(212),_=a(131),O=a.n(_);var y=function(){var e=Object(l.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.announcementBar,a=void 0===t?{}:t,n=a.content,c=a.backgroundColor,o=a.textColor,i=Object(E.a)(),s=i.isAnnouncementBarClosed,u=i.closeAnnouncementBar;return!n||s?null:r.a.createElement("div",{className:O.a.announcementBar,style:{backgroundColor:c,color:o},role:"banner"},r.a.createElement("div",{className:O.a.announcementBarContent,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("button",{type:"button",className:O.a.announcementBarClose,onClick:u,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))},j=a(2),C=(a(213),a(9)),w=a(176),N=a.n(w),S=a(177),x=(a(57),a(25),a(21),a(20),a(86),a(188)),T=a(217),B=a(132),I=a.n(B),M=function(e){var t,c,o=e.handleSearchBarToggle,i=e.isSearchBarExpanded,s=Object(n.useState)(!1),u=s[0],d=s[1],f=Object(n.useRef)(null),h=Object(l.a)().siteConfig,m=(void 0===h?{}:h).themeConfig.algolia,v=Object(x.b)(),b=Object(T.a)().navigateToSearchPage;var p=function(e){void 0===e&&(e=!0),u||Promise.all([Promise.all([a.e(4),a.e(39),a.e(41)]).then(a.t.bind(null,328,7)),a.e(24).then(a.t.bind(null,329,7))]).then((function(t){var a=t[0].default;d(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1,tabAutocomplete:!1},handleSelected:function(e,t,a){t.stopPropagation();var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;v.push(r)}}),e&&f.current.focus()}(e)}))},g=Object(n.useCallback)((function(){p(),u&&f.current.focus(),o(!i)}),[i]),k=Object(n.useCallback)((function(){o(!i)}),[i]),E=Object(n.useCallback)((function(e){var t="mouseover"!==e.type;p(t)})),_=Object(n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||b(e.target.value)}));return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("div",{className:I.a.searchWrapper},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:N()(I.a.searchIconButton,(t={},t[I.a.searchIconButtonHidden]=i,t)),onClick:g,onKeyDown:g,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:N()("navbar__search-input",I.a.searchInput,(c={},c[I.a.searchInputExpanded]=i,c)),onMouseOver:E,onFocus:E,onBlur:k,onKeyDown:_,ref:f})))},P=a(257),L=a.n(P),D=a(133),A=a.n(D),R=function(){return r.a.createElement("span",{className:N()(A.a.toggle,A.a.moon)})},F=function(){return r.a.createElement("span",{className:N()(A.a.toggle,A.a.sun)})},X=function(e){var t=Object(l.a)().isClient;return r.a.createElement(L.a,Object(j.a)({disabled:!t,icons:{checked:r.a.createElement(R,null),unchecked:r.a.createElement(F,null)}},e))},H=a(199);var U=function(e){var t=Object(n.useState)(e),a=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){return r(window.location.hash)};return window.addEventListener("hashchange",e),function(){return window.removeEventListener("hashchange",e)}}),[]),[a,r]},G=a(219),K=function(e){var t=Object(n.useState)(!0),a=t[0],r=t[1],c=Object(n.useState)(!1),o=c[0],l=c[1],i=Object(n.useState)(0),s=i[0],u=i[1],d=Object(n.useState)(0),f=d[0],h=d[1],m=Object(n.useCallback)((function(e){null!==e&&h(e.getBoundingClientRect().height)}),[]),v=Object(x.c)(),b=U(v.hash),p=b[0],g=b[1];return Object(G.a)((function(t){var a=t.scrollY;if(e&&(0===a&&r(!0),!(a<f))){if(o)return l(!1),r(!1),void u(a);var n=document.documentElement.scrollHeight-f,c=window.innerHeight;s&&a>=s?r(!1):a+c<n&&r(!0),u(a)}}),[s,f]),Object(n.useEffect)((function(){e&&(r(!0),g(v.hash))}),[v]),Object(n.useEffect)((function(){e&&p&&l(!0)}),[p]),{navbarRef:m,isNavbarVisible:a}},$=a(220),Y=a(221),q=a(134),V=a.n(q);function W(e){var t=e.activeBasePath,a=e.activeBaseRegex,n=e.to,c=e.href,o=e.label,l=e.activeClassName,s=void 0===l?"navbar__link--active":l,u=e.prependBaseUrlToHref,d=Object(C.a)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"]),f=Object(i.a)(n),h=Object(i.a)(t),m=Object(i.a)(c,!0);return r.a.createElement(S.a,Object(j.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:u?m:c}:Object.assign({isNavLink:!0,activeClassName:s,to:f},t||a?{isActive:function(e,t){return a?new RegExp(a).test(t.pathname):t.pathname.startsWith(h)}}:null),d),o)}function J(e){var t=e.items,a=e.position,n=e.className,c=Object(C.a)(e,["items","position","className"]),o=function(e,t){return void 0===t&&(t=!1),N()({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.a.createElement("div",{className:N()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a})},r.a.createElement(W,Object(j.a)({className:o(n)},c,{onClick:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),c.label),r.a.createElement("ul",{className:"dropdown__menu"},t.map((function(e,t){var a=e.className,n=Object(C.a)(e,["className"]);return r.a.createElement("li",{key:t},r.a.createElement(W,Object(j.a)({activeClassName:"dropdown__link--active",className:o(a,!0)},n)))})))):r.a.createElement(W,Object(j.a)({className:o(n)},c))}function z(e){var t=e.items,a=(e.position,e.className),n=Object(C.a)(e,["items","position","className"]),c=function(e,t){return void 0===t&&(t=!1),N()("menu__link",{"menu__link--sublist":t},e)};return t?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(W,Object(j.a)({className:c(a,!0)},n),n.label),r.a.createElement("ul",{className:"menu__list"},t.map((function(e,t){var a=e.className,o=Object(C.a)(e,["className"]);return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(W,Object(j.a)({activeClassName:"menu__link--active",className:c(a)},o,{onClick:n.onClick})))})))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(W,Object(j.a)({className:c(a)},n)))}var Q=function(){var e,t,a=Object(l.a)(),c=a.siteConfig.themeConfig,o=c.navbar,i=(o=void 0===o?{}:o).title,s=o.links,u=void 0===s?[]:s,d=o.hideOnScroll,f=void 0!==d&&d,h=c.disableDarkMode,m=void 0!==h&&h,v=a.isClient,b=Object(n.useState)(!1),p=b[0],g=b[1],k=Object(n.useState)(!1),E=k[0],_=k[1],O=Object(H.a)(),y=O.isDarkTheme,C=O.setLightTheme,w=O.setDarkTheme,x=K(f),T=x.navbarRef,B=x.isNavbarVisible,I=Object(Y.a)(),P=I.logoLink,L=I.logoLinkProps,D=I.logoImageUrl,A=I.logoAlt;Object($.a)(p);var R=Object(n.useCallback)((function(){g(!0)}),[g]),F=Object(n.useCallback)((function(){g(!1)}),[g]),U=Object(n.useCallback)((function(e){return e.target.checked?w():C()}),[C,w]);return r.a.createElement("nav",{ref:T,className:N()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":p},e[V.a.navbarHideable]=f,e[V.a.navbarHidden]=!B,e))},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=u&&0!==u.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:R,onKeyDown:R},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(S.a,Object(j.a)({className:"navbar__brand",to:P},L),null!=D&&r.a.createElement("img",{key:v,className:"navbar__logo",src:D,alt:A}),null!=i&&r.a.createElement("strong",{className:N()("navbar__title",(t={},t[V.a.hideLogoText]=E,t))},i)),u.filter((function(e){return"left"===e.position})).map((function(e,t){return r.a.createElement(J,Object(j.a)({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},u.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(J,Object(j.a)({},e,{key:t}))})),!m&&r.a.createElement(X,{className:V.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:U}),r.a.createElement(M,{handleSearchBarToggle:_,isSearchBarExpanded:E}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:F}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(S.a,Object(j.a)({className:"navbar__brand",onClick:F,to:P},L),null!=D&&r.a.createElement("img",{key:v,className:"navbar__logo",src:D,alt:A}),null!=i&&r.a.createElement("strong",{className:"navbar__title"},i)),!m&&p&&r.a.createElement(X,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:U})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},u.map((function(e,t){return r.a.createElement(z,Object(j.a)({},e,{onClick:F,key:t}))})))))))},Z=a(135),ee=a.n(Z);function te(e){var t=e.to,a=e.href,n=e.label,c=e.prependBaseUrlToHref,o=Object(C.a)(e,["to","href","label","prependBaseUrlToHref"]),l=Object(i.a)(t),s=Object(i.a)(a,!0);return r.a.createElement(S.a,Object(j.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:c?s:a}:{to:l},o),n)}var ae=function(e){var t=e.url,a=e.alt;return r.a.createElement("img",{className:"footer__logo",alt:a,src:t})};var ne=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},c=n.copyright,o=n.links,s=void 0===o?[]:o,u=n.logo,d=void 0===u?{}:u,f=Object(i.a)(d.src);return a?r.a.createElement("footer",{className:N()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},s&&s.length>0&&r.a.createElement("div",{className:"row footer__links"},s.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(te,e))}))):null)}))),(d||c)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},d.href?r.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:ee.a.footerLogoLink},r.a.createElement(ae,{alt:d.alt,url:f})):r.a.createElement(ae,{alt:d.alt,url:f})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(136);t.a=function(e){var t=Object(l.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,s=a.title,u=a.themeConfig.image,d=a.url,f=e.children,m=e.title,v=e.noFooter,p=e.description,g=e.image,E=e.keywords,_=e.permalink,O=e.version,j=m?m+" | "+s:s,C=g||u,w=d+Object(i.a)(C);Object(o.a)(C)||(w=C);var N=Object(i.a)(n);return r.a.createElement(h,null,r.a.createElement(b,null,r.a.createElement(k,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),p&&r.a.createElement("meta",{name:"description",content:p}),p&&r.a.createElement("meta",{property:"og:description",content:p}),O&&r.a.createElement("meta",{name:"docsearch:version",content:O}),E&&E.length&&r.a.createElement("meta",{name:"keywords",content:E.join(",")}),C&&r.a.createElement("meta",{property:"og:image",content:w}),C&&r.a.createElement("meta",{property:"twitter:image",content:w}),C&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),_&&r.a.createElement("meta",{property:"og:url",content:d+_}),_&&r.a.createElement("link",{rel:"canonical",href:d+_}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(y,null),r.a.createElement(Q,null),r.a.createElement("div",{className:"main-wrapper"},f),!v&&r.a.createElement(ne,null))))}},188:function(e,t,a){"use strict";var n=a(39);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e})),a.d(t,"c",(function(){return n.f}))},198:function(e,t,a){"use strict";var n=a(8),r=a(51),c=a(36),o=a(41),l=a(77),i=a(73),s=Math.max,u=Math.min,d=Math.floor,f=/\$([$&`']|\d\d?|<[^>]*>)/g,h=/\$([$&`']|\d\d?)/g;a(75)("replace",2,(function(e,t,a,m){return[function(n,r){var c=e(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,c,r):a.call(String(c),n,r)},function(e,t){var r=m(a,e,this,t);if(r.done)return r.value;var d=n(e),f=String(this),h="function"==typeof t;h||(t=String(t));var b=d.global;if(b){var p=d.unicode;d.lastIndex=0}for(var g=[];;){var k=i(d,f);if(null===k)break;if(g.push(k),!b)break;""===String(k[0])&&(d.lastIndex=l(f,c(d.lastIndex),p))}for(var E,_="",O=0,y=0;y<g.length;y++){k=g[y];for(var j=String(k[0]),C=s(u(o(k.index),f.length),0),w=[],N=1;N<k.length;N++)w.push(void 0===(E=k[N])?E:String(E));var S=k.groups;if(h){var x=[j].concat(w,C,f);void 0!==S&&x.push(S);var T=String(t.apply(void 0,x))}else T=v(j,f,C,w,S,t);C>=O&&(_+=f.slice(O,C)+T,O=C+j.length)}return _+f.slice(O)}];function v(e,t,n,c,o,l){var i=n+e.length,s=c.length,u=h;return void 0!==o&&(o=r(o),u=f),a.call(l,u,(function(a,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(i);case"<":l=o[r.slice(1,-1)];break;default:var u=+r;if(0===u)return a;if(u>s){var f=d(u/10);return 0===f?a:f<=s?void 0===c[f-1]?r.charAt(1):c[f-1]+r.charAt(1):a}l=c[u-1]}return void 0===l?"":l}))}}))},199:function(e,t,a){"use strict";var n=a(0),r=a(210);t.a=function(){return Object(n.useContext)(r.a)}},210:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:function(){},setDarkTheme:function(){}});t.a=r},211:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},212:function(e,t,a){"use strict";var n=a(0),r=a(211);t.a=function(){return Object(n.useContext)(r.a)}},213:function(e,t,a){var n=a(6),r=a(247),c=a(24).f,o=a(197).f,l=a(76),i=a(74),s=n.RegExp,u=s,d=s.prototype,f=/a/g,h=/a/g,m=new s(f)!==f;if(a(11)&&(!m||a(19)((function(){return h[a(3)("match")]=!1,s(f)!=f||s(h)==h||"/a/i"!=s(f,"i")})))){s=function(e,t){var a=this instanceof s,n=l(e),c=void 0===t;return!a&&n&&e.constructor===s&&c?e:r(m?new u(n&&!c?e.source:e,t):u((n=e instanceof s)?e.source:e,n&&c?i.call(e):t),a?this:d,s)};for(var v=function(e){e in s||c(s,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},b=o(u),p=0;b.length>p;)v(b[p++]);d.constructor=s,s.prototype=d,a(13)(n,"RegExp",s)}a(85)("RegExp")},217:function(e,t,a){"use strict";a(254),a(20),a(198),a(218);var n=a(188),r=a(30);t.a=function(){var e=Object(n.b)(),t=Object(n.c)();return{searchValue:r.a.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(a){var n=new URLSearchParams(t.search);a?n.set("q",a):n.delete("q"),e.replace({search:n.toString()})},navigateToSearchPage:function(t){e.push("/search?q="+t)}}}},218:function(e,t,a){"use strict";var n=a(8),r=a(256),c=a(73);a(75)("search",1,(function(e,t,a,o){return[function(a){var n=e(this),r=null==a?void 0:a[t];return void 0!==r?r.call(a,n):new RegExp(a)[t](String(n))},function(e){var t=o(a,e,this);if(t.done)return t.value;var l=n(e),i=String(this),s=l.lastIndex;r(s,0)||(l.lastIndex=0);var u=c(l,i);return r(l.lastIndex,s)||(l.lastIndex=s),null===u?-1:u.index}]}))},219:function(e,t,a){"use strict";var n=a(0),r=a(30),c=function(){return{scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0}};t.a=function(e,t){void 0===t&&(t=[]);var a=Object(n.useState)(c()),r=a[0],o=a[1],l=function(){var t=c();o(t),e&&e(t)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",l),function(){return window.removeEventListener("scroll",l,{passive:!0})}}),t),r}},220:function(e,t,a){"use strict";var n=a(0);t.a=function(e){void 0===e&&(e=!0),Object(n.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])}},221:function(e,t,a){"use strict";var n=a(175),r=a(199),c=a(180),o=a(182);t.a=function(){var e=Object(n.a)().siteConfig,t=(e=void 0===e?{}:e).themeConfig.navbar,a=(t=void 0===t?{}:t).logo,l=void 0===a?{}:a,i=Object(r.a)().isDarkTheme,s=Object(c.a)(l.href||"/"),u={};l.target?u={target:l.target}:Object(o.a)(s)||(u={rel:"noopener noreferrer",target:"_blank"});var d=l.srcDark&&i?l.srcDark:l.src;return{logoLink:s,logoLinkProps:u,logoImageUrl:Object(c.a)(d),logoAlt:l.alt}}},247:function(e,t,a){var n=a(12),r=a(248).set;e.exports=function(e,t,a){var c,o=t.constructor;return o!==a&&"function"==typeof o&&(c=o.prototype)!==a.prototype&&n(c)&&r&&r(e,c),e}},248:function(e,t,a){var n=a(12),r=a(8),c=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(29)(Function.call,a(214).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return c(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:c}},254:function(e,t,a){"use strict";a(255);var n=a(8),r=a(74),c=a(11),o=/./.toString,l=function(e){a(13)(RegExp.prototype,"toString",e,!0)};a(19)((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?l((function(){var e=n(this);return"/".concat(e.source,"/","flags"in e?e.flags:!c&&e instanceof RegExp?r.call(e):void 0)})):"toString"!=o.name&&l((function(){return o.call(this)}))},255:function(e,t,a){a(11)&&"g"!=/./g.flags&&a(24).f(RegExp.prototype,"flags",{configurable:!0,get:a(74)})},256:function(e,t){e.exports=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}},257:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),o=f(c),l=f(a(176)),i=f(a(15)),s=f(a(258)),u=f(a(259)),d=a(260);function f(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,l.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return o.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:o.default.createElement(s.default,null),unchecked:o.default.createElement(u.default,null)}},h.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},258:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},259:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},260:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);