(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3682:function(e,t,n){Promise.resolve().then(n.t.bind(n,3385,23)),Promise.resolve().then(n.t.bind(n,9646,23)),Promise.resolve().then(n.bind(n,4122))},1774:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return m}});var r=n(2265);let a=["light","dark"],s="(prefers-color-scheme: dark)",l="undefined"==typeof window,o=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(o))&&void 0!==e?e:i},m=e=>(0,r.useContext)(o)?r.createElement(r.Fragment,null,e.children):r.createElement(u,e),d=["light","dark"],u=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:c=d,defaultTheme:m=n?"system":"light",attribute:u="data-theme",value:$,children:b,nonce:g})=>{let[S,p]=(0,r.useState)(()=>f(i,m)),[w,_]=(0,r.useState)(()=>f(i)),k=$?Object.values($):c,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let s=$?$[r]:r,o=t?v():null,i=document.documentElement;if("class"===u?(i.classList.remove(...k),s&&i.classList.add(s)):s?i.setAttribute(u,s):i.removeAttribute(u),l){let e=a.includes(m)?m:null,t=a.includes(r)?r:e;i.style.colorScheme=t}null==o||o()},[]),E=(0,r.useCallback)(e=>{p(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{_(y(t)),"system"===S&&n&&!e&&C("system")},[S,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&E(e.newValue||m)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{C(null!=e?e:S)},[e,S]);let x=(0,r.useMemo)(()=>({theme:S,setTheme:E,forcedTheme:e,resolvedTheme:"system"===S?w:S,themes:n?[...c,"system"]:c,systemTheme:n?w:void 0}),[S,E,e,w,n,c]);return r.createElement(o.Provider,{value:x},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:l,storageKey:i,themes:c,defaultTheme:m,attribute:u,value:$,children:b,attrs:k,nonce:g}),b)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:l,enableColorScheme:o,defaultTheme:i,value:c,attrs:m,nonce:d})=>{let u="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=o?a.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let s=c?c[e]:e,l=t?e+"|| ''":`'${s}'`,i="";return o&&r&&!t&&a.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||s?`c.add(${l})`:"null":s&&(i+=`d[s](n,${l})`),i},y=e?`!function(){${h}${v(e)}}()`:l?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${u?"":"else{"+v(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;if(!l){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},4122:function(e,t,n){"use strict";n.r(t),n.d(t,{Providers:function(){return s}});var r=n(7437);n(2265);var a=n(1774);function s(e){let{children:t}=e;return(0,r.jsx)(a.f,{attribute:"class",children:t})}},3385:function(){},9646:function(e){e.exports={style:{fontFamily:"'__Inter_f61746', '__Inter_Fallback_f61746'",fontStyle:"normal"},className:"__className_f61746"}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3682)}),_N_E=e.O()}]);