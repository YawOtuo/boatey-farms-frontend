if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),b={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>b[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"2d6c238ffca8089792c29e6ee95f8928"},{url:"/_next/static/JIPsKKXXer_jL307znb1i/_buildManifest.js",revision:"e7423757b55eb94c89ccbae327ff7e9e"},{url:"/_next/static/JIPsKKXXer_jL307znb1i/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-e56d96a2edbe1563.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/1034-3b72d104ef3060db.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/12038df7-240fbf4a1b924b37.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/13b76428-e036841de728ca8b.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/1974-a268c7d157651fd7.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/1982-4a180cbf2d18435e.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/2070-4687edfe11dac75a.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/2903-6688242df8869822.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/3627521c-c409a26b0768bc0c.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/3726-e820cef70e97e7c9.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/39209d7c-2116310cfc09f0ff.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/3926-bbdc4b0ddafa3fbd.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/41ade5dc-90fcd907a8106295.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/4874-80aa322a58dab163.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/4938-c847a4e635607bda.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/5204-7e90e87520c6d5a4.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/6088-43c80d5a0d4157a8.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/6313-a7d63fdc8693036b.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/6327-40f8e35045a0a1a8.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/6637-697d1eb4596d1bbd.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/737dfa3e-e84ae88d123925ea.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/7410-dded2f3b20216d3c.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/7771-c574e1236ac8f77b.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/7aa4777d-73cba5c645cb7679.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/8117-e2103d53023f76ed.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/827-79ce4dfadaa49195.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/8631-2313e772a4a39b26.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/8dc5345f-b798988ab1159bf0.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/8e68d877-1a188a9e54218416.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/9013-60785ba19c6da2d6.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/9050-c9a31393e6efbba7.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/9081a741-b1836a66d8988c4f.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/9651-2d2a607cab25ad10.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/9730-ee32711f1a0ffe01.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(app)/login/page-d3aa0a1a92ff7c8c.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(app)/sign-up/page-ca293f0f21f3ff25.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/account/page-7078775ed017e44f.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/notifications/page-33c8ab066a976865.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/page-109565af922eb280.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/records/%5Bslug%5D/%5Bid%5D/page-23549f04b67def4f.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/records/%5Bslug%5D/page-ed1db99e939be9f7.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/records/page-5eeb2f4f39daad53.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/dashboard/workers/page-f719e034cb972443.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/(dashboard)/layout-1061b3425919a474.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/_not-found-be162f35e403d9ea.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/layout-c4ecbd896fa19b87.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/app/page-933dbac3fcea13c5.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/b5c10047-2c17c5b2837ad79c.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/bc9c3264-4307ccb5f23c84b1.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/bc9e92e6-c4f550b2841aef91.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/d622d42c-3faf45ad3e051d5d.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/e685ae08-5d4c322cf07720d5.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/fd9d1056-174388a3a52db80a.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/framework-964c2d6016b0d731.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/main-app-c9e059737d1baa05.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/main-f431133a8c4b2bc4.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/pages/_app-11c09b1e93f7270c.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/pages/_error-7ae0e5d1f9ec0862.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a8bb9271f2c50825.js",revision:"JIPsKKXXer_jL307znb1i"},{url:"/_next/static/css/1300ab41b52d22ba.css",revision:"1300ab41b52d22ba"},{url:"/_next/static/css/8bdca12334b0b803.css",revision:"8bdca12334b0b803"},{url:"/_next/static/css/eed4a3dbbd5ecacb.css",revision:"eed4a3dbbd5ecacb"},{url:"/_next/static/css/fb9a9af3f6f81ba5.css",revision:"fb9a9af3f6f81ba5"},{url:"/_next/static/media/062522b8b7c3ad6a-s.woff2",revision:"0f347a32b2168180dbc514e104ab207c"},{url:"/_next/static/media/19e37deead9b3ec2-s.woff2",revision:"8f919c25620e7f246b5abcfa979922bf"},{url:"/_next/static/media/3d9ea938b6afa941-s.p.woff2",revision:"ee1b2a154fb9ea98a28413a839adedfb"},{url:"/_next/static/media/46392699924ae7e5-s.woff2",revision:"467f697ccbe92aebc38f6c1a433f6948"},{url:"/_next/static/media/634216363f5c73c1-s.woff2",revision:"4a1bf14c88bdef173c2a39c5c60e65ce"},{url:"/_next/static/media/6fed4e5749a3ea15-s.woff2",revision:"bd04001574d461203c7264ac27d8c504"},{url:"/_next/static/media/83651bee47cf14da-s.woff2",revision:"d2bb91b14d5895c91741b933a76be9c0"},{url:"/_next/static/media/88325a2c1fede2f4-s.woff2",revision:"93131c3ec4fe9782c2c40a708db9b0b6"},{url:"/_next/static/media/9beef36ab83de3f0-s.woff2",revision:"82c2dc97217d32c57a029754fda91e4e"},{url:"/_next/static/media/aec774cbe1963439-s.woff2",revision:"37f8885214448afc8f3b3678db525598"},{url:"/_next/static/media/d83fe381bb17eb77-s.woff2",revision:"215b11e73137fdb7d9a773e0211c29d6"},{url:"/_next/static/media/dd4ab5b525bd804a-s.woff2",revision:"b505d29c0021c60e4a004de0b5fea45f"},{url:"/_next/static/media/e1c529c04de64b40-s.p.woff2",revision:"e88b1871ed8eef59b7df05a91a6f2157"},{url:"/_next/static/media/e6f5886ae1242622-s.woff2",revision:"e64d3f79602912c46c2b4d7f26dcadb8"},{url:"/_next/static/media/faac4ac11aa3d97b-s.woff2",revision:"9cb88d5b1ed3ff5796eefc9e62af1b8e"},{url:"/greenFrame.svg",revision:"8732d6da796ed85b82c4303d15c664fd"},{url:"/icon512_maskable.png",revision:"7c036621e2c31146eaa4fc88aeb5682b"},{url:"/icon512_rounded.png",revision:"d5c40600b090ebabbe07cebef409bc88"},{url:"/icons/add.png",revision:"3fd30f47967b62584abe967763733375"},{url:"/icons/arrow-right.png",revision:"7a513c16ac196235bac381203010e972"},{url:"/icons/bullet.png",revision:"9f1803f26c998ecdd8dfb1bc943f42fd"},{url:"/icons/cattle.png",revision:"a0d41e48dc7c95f0f25a71ec1c5fb169"},{url:"/icons/delete.png",revision:"f2281638b4d389439fd0a68e72859c66"},{url:"/icons/edit.png",revision:"3b6604554f75e9d01bac94d084aafb3f"},{url:"/icons/face.png",revision:"27e2eba6b2844d0c1bea56bc4dc0dc92"},{url:"/icons/goat.png",revision:"74c9a34b9912ed60aaf9e7b2ed9a474c"},{url:"/icons/nest-tag.png",revision:"d4746019dd160766d3251da4461bd831"},{url:"/icons/sheep.png",revision:"3f7dd9b1ac03ebf16f1505331033740d"},{url:"/icons/tag-outline.png",revision:"c04bf981d5a04f67e6e713e8cc8c1c5b"},{url:"/images/livestockgrass.jpeg",revision:"64a178b232be47aabf530b305cc0f2e5"},{url:"/livestock1.jpeg",revision:"6ef6ded8a23b96c7fbc5e3781bb33591"},{url:"/livestock2.jpeg",revision:"fb016539c407471f230b30cbb815d0be"},{url:"/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"/logoboatey.png",revision:"f57f26838026c63983986207e7e2b53b"},{url:"/manifest.json",revision:"123dad99b7af9b23c3fa1665b903b11d"},{url:"/manifest_and_icons.zip",revision:"54a8e74f09dadc52bc0f36819ce46324"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
