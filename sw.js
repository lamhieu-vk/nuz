!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"cf90b83c05e7e4a26aac4f11dcdf2487","url":"01a85c17.a366cc54.js"},{"revision":"a14aebd48e9f5320b429d96ea5eda657","url":"0627f16b.bb1cb03f.js"},{"revision":"9fa3b02150a49f8bcf9bee3cb3de4a00","url":"1.b63c474f.js"},{"revision":"1be30afefe1ba4750d7fc335b7b830aa","url":"10137f53.0a6f0a79.js"},{"revision":"80e5e9f4eb21cc751ef36d1cc7eb9a26","url":"1638ea00.7dd1a3d2.js"},{"revision":"370ceda5c6e673dcbff7039cc533c72a","url":"17896441.026e60b7.js"},{"revision":"aa91e96f79f11602a0a9267c51884449","url":"1be78505.4b15e3a6.js"},{"revision":"4ef8f194c31ec6100a81b14cf1c11626","url":"1df93b7f.19fe6303.js"},{"revision":"6a06ac090f66284cd5ccb6087283dade","url":"1ebc56d3.58c5fdfe.js"},{"revision":"674cd2d015478ca7949251ee8e756f2c","url":"2.6e9a7313.js"},{"revision":"aae612f4e4632d8d9d9f7e0f91000c47","url":"207eed83.ddc910c4.js"},{"revision":"ea5ebd694561f864c308b2daa0fd890a","url":"253723d0.e181808d.js"},{"revision":"ad537b98916b18d4ed7a9fab90fb5d2b","url":"3.7b42b3bb.js"},{"revision":"4e0610d1fe78aeb787a38c0293e2e334","url":"30a24c52.3c59c588.js"},{"revision":"f87fd3386afa365e3ebe4b9383a5f92b","url":"36.e5b2bf2c.js"},{"revision":"0197668a2b4a39e93c12a716e345766c","url":"37.62a21440.js"},{"revision":"7545057b692ab3aa6f6c3e40b00c75b3","url":"38.19479112.js"},{"revision":"1e9a7ed4db87e26122780aa00d0d251c","url":"39.175f4627.js"},{"revision":"80c6862c01c312bf14d110b4c816243b","url":"40.f2bc2450.js"},{"revision":"c3a0ee062ab1775fa0bab7da7ccc6189","url":"404.html"},{"revision":"c9b05ad5de21001a78046ebed981b6c1","url":"41.d2b7d16f.js"},{"revision":"032abf1a85e6338b35e382d863e5f1ab","url":"42.aeebdf21.js"},{"revision":"869de303c341d18639d74b7b836bde6b","url":"60c66209.0f95d21f.js"},{"revision":"f07bdfea2e884ebac2ef0c3564e476a9","url":"6875c492.a52b53dc.js"},{"revision":"059812b018a1e83f9cc668d2bfddb9ae","url":"6fbfa3c4.7ce27b17.js"},{"revision":"cee3aecd0f6243e2d638417efc63a91a","url":"935f2afb.e47d996b.js"},{"revision":"8c93f58d0da91db1d021a58807991b60","url":"9895ff1a.18e28b34.js"},{"revision":"be5cdc4f525cb3bb2aed17a198d91c3a","url":"a6aa9e1f.c70bd972.js"},{"revision":"6521233a6ab04dd3da212ae92be65bdb","url":"a7023ddc.92e81be5.js"},{"revision":"fce499012e9c677a827264bc7bad38d5","url":"ad895e75.7fe3dfef.js"},{"revision":"d25415e047c200049a38abb098412215","url":"adf0676f.60f8683c.js"},{"revision":"3df8658047f75559a2804e99d100bfed","url":"b2b675dd.79420313.js"},{"revision":"d75a0c2bc1d3dcf3bc0d0e24a16f17e2","url":"b42c8ea4.7acaf7e0.js"},{"revision":"83e744db3fc149cdd50ae38b56d77053","url":"b6ed391b.28fee833.js"},{"revision":"f88138ae14f2e347bbaee97400781aac","url":"b9f6747f.ab3ac711.js"},{"revision":"880358ff57e08d5b5ca970dd5ea3e70c","url":"blog/index.html"},{"revision":"6acfb5ccddfd818fcc50fda4c78dd3bc","url":"blog/tags/hello/index.html"},{"revision":"0a2afa8749535bb032273bcf57dfb11e","url":"blog/tags/index.html"},{"revision":"ff162fbf3d9a6f9eb7eb029f1423609e","url":"blog/tags/nuz/index.html"},{"revision":"afa493f1d0ee7727a2b8b370c0fbc309","url":"blog/welcome/index.html"},{"revision":"975c0aedf394592ad0495f73f2ab4a6d","url":"ccc49370.4d3870d4.js"},{"revision":"7a1a298800507a4e8f92dcd8f0d4acf1","url":"dc4fd637.179fc6f4.js"},{"revision":"8f46466e55893e49c77bf4bb456ad3d8","url":"doc1/index.html"},{"revision":"cc1c4aaf248b594b9338fffb7d1caee0","url":"e9236d31.93744329.js"},{"revision":"dc18a62b2c16d362ca058c1c3f686e4c","url":"f7dc5c79.2c28c54a.js"},{"revision":"add9b85165407aba2615f37113d60f94","url":"f9fa61df.285b40d5.js"},{"revision":"a68030ae76afc073c846c01e0c460e06","url":"fab90142.1a57c9d8.js"},{"revision":"a7cf39e43a7efdb57df838b944ce2917","url":"faq/index.html"},{"revision":"aa354a00a48252a1b38c4e854159b97a","url":"guides/create-new-module/index.html"},{"revision":"b3b5dba968b640403be76c675d2a3c08","url":"guides/micro-frontends-architecture/index.html"},{"revision":"01c2620248c59dedb142abf452421e06","url":"guides/publish-a-module/index.html"},{"revision":"5d71552fd80e7aaab9bf637b3a00fb4d","url":"index.html"},{"revision":"1781c95f9c67b2139c728caee046ace4","url":"introduction/concepts/index.html"},{"revision":"f4c16f3902a011475b4cd66588f39faf","url":"introduction/getting-started/index.html"},{"revision":"5b1a37e508ee835fce4372ec7c32aec6","url":"introduction/motivation/index.html"},{"revision":"1f9e9ae588e9fddc641651269eaac484","url":"introduction/overview/index.html"},{"revision":"bf295b42bffdcdd2620eca2df5abaace","url":"main.7c420594.js"},{"revision":"c18eda68458f26a19fc85e79c9566e23","url":"manifest.json"},{"revision":"140626edde108300103cafe51066fd0e","url":"reference/cli/index.html"},{"revision":"d8656dc9baf740e37a3bfa43da1b2356","url":"reference/core/index.html"},{"revision":"0a2902e35bb093f03a263e70214f4dec","url":"reference/module/index.html"},{"revision":"89e2059c3c258ca1a67e9caeec34b3af","url":"reference/registry/index.html"},{"revision":"ec2ba7767481cd52028505cc2815a67a","url":"reference/workspaces/index.html"},{"revision":"e41a1bbaaf457e4ff8f8de5d3653aa46","url":"runtime~main.fad74f7d.js"},{"revision":"d69f5133957b72438bb22a1b3a1e4752","url":"search/index.html"},{"revision":"8e603dfaff2226cc2ef25cbb77510505","url":"services/nuz-registry/index.html"},{"revision":"b5a2f4f5f351f5b1361a0034d22382b1","url":"services/nuz-static/index.html"},{"revision":"c15c416ca1bac7fb962af21a0060971e","url":"styles.a5d02052.js"},{"revision":"3d51c9e5dfd9dfe95a761d32e8a77df4","url":"styles.ff5b680e.css"},{"revision":"beebbc6844f087b658e84633e41d9d79","url":"assets/images/micro-frontends-cover-d5774b685a2065f04614abe9d3b52202.jpg"},{"revision":"c1c7c0ca019cadf91b419160c8eb0fec","url":"images/android-icon-144x144.png"},{"revision":"3cf3cbbd6099be56e091116f917f5034","url":"images/android-icon-192x192.png"},{"revision":"1f15ec1799c9c8931ddc105a3d796364","url":"images/android-icon-36x36.png"},{"revision":"e55ce25f27640e24a6b92bcd0e46751b","url":"images/android-icon-48x48.png"},{"revision":"e731027dc58f057d6334dc3325f6e11a","url":"images/android-icon-72x72.png"},{"revision":"ea0e8db36dd75faa7b367ed33cc46f5a","url":"images/android-icon-96x96.png"},{"revision":"1ff48ec5ee51ff683566ac627141a70d","url":"images/apple-icon-114x114.png"},{"revision":"daec85db58863a18d23996aebdb25693","url":"images/apple-icon-120x120.png"},{"revision":"c1c7c0ca019cadf91b419160c8eb0fec","url":"images/apple-icon-144x144.png"},{"revision":"77ec7029238569a134fca2b84a3b3a76","url":"images/apple-icon-152x152.png"},{"revision":"b7a70abe721ca410cc6546273c5b30fd","url":"images/apple-icon-180x180.png"},{"revision":"d673692599feb0394409a2847661235f","url":"images/apple-icon-57x57.png"},{"revision":"bd1118fa87c08d43f8c3b5aa9d2c5f83","url":"images/apple-icon-60x60.png"},{"revision":"e731027dc58f057d6334dc3325f6e11a","url":"images/apple-icon-72x72.png"},{"revision":"3d25832a54ff57deb8144b9bc9ed0d56","url":"images/apple-icon-76x76.png"},{"revision":"96412e7815cf388b32e0d210397563b8","url":"images/apple-icon-precomposed.png"},{"revision":"96412e7815cf388b32e0d210397563b8","url":"images/apple-icon.png"},{"revision":"9755acf1eae9a1ed51a4f37d6e960348","url":"images/favicon-16x16.png"},{"revision":"ad0b485569fefaeef8dc679ba333c47f","url":"images/favicon-32x32.png"},{"revision":"ea0e8db36dd75faa7b367ed33cc46f5a","url":"images/favicon-96x96.png"},{"revision":"9b0c362be152aeaa14f7456782423a0a","url":"images/favicon.ico"},{"revision":"ef37ea0c7f5f99a05fb825f00692c296","url":"images/logo-320x320.png"},{"revision":"f16b6f91df66720a54932c5a25209f13","url":"images/logo.png"},{"revision":"d53c087dac047796d58516ae09d8082a","url":"images/logo.svg"},{"revision":"c1c7c0ca019cadf91b419160c8eb0fec","url":"images/ms-icon-144x144.png"},{"revision":"f16b6f91df66720a54932c5a25209f13","url":"images/ms-icon-150x150.png"},{"revision":"e423a237df67949945913a73eeb18436","url":"images/ms-icon-310x310.png"},{"revision":"fd21ed0c332702c7843adc1eb707d6cf","url":"images/ms-icon-70x70.png"},{"revision":"0c77fd43e52c8ed69cd91d36b3d33864","url":"images/thumbnail.png"},{"revision":"beebbc6844f087b658e84633e41d9d79","url":"posts/micro-frontends-cover.jpg"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);