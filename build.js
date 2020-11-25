(()=>{"use strict";var e,t,r,n,o,i,a,c={154:function(e,t){var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.initCalendar=void 0;t.initCalendar=function(e,t){var n=e.datepicker(r({language:"ru",inline:!0,range:!0,navTitles:{days:"MM yyyy",months:"yyyy",years:"yyyy1 - yyyy2"},prevHtml:"arrow_back",nextHtml:"arrow_forward",classes:"calendar__element"},t)).data("datepicker"),o=$(".calendar-container .form-action-buttons__cancel-button");o.css("visibility","visible"),o.on("click",(function(){n.clear(),t.onClear&&t.onClear()}))}},232:function(e,t,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0}),t.store=t.actions=void 0;var a,c=r(951),l=Array.apply(void 0,i(document.getElementsByClassName("counter"))),d=l.reduce((function(e,t){var r,o;return n(n({},e),((r={})[t.id]=parseInt((null===(o=t.querySelector(".counter__count"))||void 0===o?void 0:o.textContent)||"0"),r))}),{});!function(e){e[e.INC=0]="INC",e[e.DEC=1]="DEC",e[e.RESET=2]="RESET"}(a=t.actions||(t.actions={})),t.store=c.createStore(d,(function(e,t){var r,o,i,c;switch(e.name){case a.INC:return c=(i=t[e.value]+1)>10?10:i,n(n({},t),((r={})[e.value]=c,r));case a.DEC:return c=(i=t[e.value]-1)<0?0:i,n(n({},t),((o={})[e.value]=c,o));case a.RESET:return n(n({},t),e.value.reduce((function(e,t){var r;return n(n({},e),((r={})[t]=0,r))}),{}));default:return t}})),l.forEach((function(e){var r=e.querySelector(".counter__minus");null==r||r.addEventListener("click",(function(){t.store.dispatch({name:a.DEC,value:e.id})}));var n=e.querySelector(".counter__plus");null==n||n.addEventListener("click",(function(){t.store.dispatch({name:a.INC,value:e.id})})),t.store.subscribe((function(t){var o=e.querySelector(".counter__count"),i=t[e.id];Number(o.textContent)!==i&&(o.textContent=String(i)),0===i?null==r||r.setAttribute("disabled","true"):null==r||r.removeAttribute("disabled"),10===i?null==n||n.setAttribute("disabled","true"):null==n||n.removeAttribute("disabled")})),t.store.dispatch({name:"COLD_START"})}))},476:function(e,t,r){var n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0});var o=r(154);$(".date-dropdown").each((function(){var e=$(".date-dropdown__from-date",this),t=$(".date-dropdown__to-date",this),r=e.text(),i=$(".calendar",this);o.initCalendar(i,{dateFormat:"dd.mm.yyyy",multipleDatesSeparator:",",onSelect:function(r){var o=n(r.split(","),2),i=o[0],a=o[1];e.text(i),t.text(a)},onClear:function(){e.text(r),t.text(r)}})}))},317:function(e,t,r){var n=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},o=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(n(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var i=r(232);Array.apply(void 0,o(document.getElementsByClassName("dropdown-counter"))).forEach((function(e){var t=e.querySelector(".dropdown");i.store.subscribe((function(r){var n,o,i=Object.keys(r).filter((function(t){return t.startsWith(e.id)})).map((function(e){return r[e]})),a=i.reduce((function(e,t){return e+t}),0),c=null==t?void 0:t.getAttribute("data-placeholder"),l=null==t?void 0:t.getAttribute("data-counting-way"),d=JSON.parse(null==t?void 0:t.getAttribute("data-declensions")),s=function(e){return String(e).endsWith("1")?"singular":["2","3","4"].includes(String(e).slice(-1))?"genitive":"plural"},u="";"sum"===l?u=0===a?c:a+" "+d[s(String(a))]:"apart"===l&&(u=0===a?c:i.map((function(e,t){return 0===e?"":e+" "+d[t][s(String(e))]})).filter((function(e){return e})).join(", "));null===(n=null==t?void 0:t.firstChild)||void 0===n||n.replaceChild(document.createTextNode(u),t.firstChild.firstChild),null===(o=e.querySelector(".form-action-buttons"))||void 0===o||o.classList.toggle("form-action-buttons--dirty",0!==a)})),i.store.dispatch({name:"@COLD_START"});var r=null==e?void 0:e.querySelector(".form-action-buttons__cancel-button"),n=null==e?void 0:e.querySelector(".form-action-buttons__apply-button"),o=null==e?void 0:e.querySelectorAll(".counter");null==n||n.addEventListener("click",(function(){e.click()})),null==r||r.addEventListener("click",(function(){i.store.dispatch({name:i.actions.RESET,value:Array.from(o).map((function(e){return e.id}))}),e.click()}))}))},313:()=>{Array.from(document.getElementsByClassName("dropdown-container")).forEach((function(e){var t="dropdown-container--opened";e.addEventListener("click",(function(r){var n,o=r.target;(o.classList.contains("dropdown")||(null===(n=o.parentElement)||void 0===n?void 0:n.classList.contains("dropdown")))&&e.classList.toggle(t),o.classList.contains("form-action-buttons__apply-button")&&e.classList.toggle(t)}))}))},879:()=>{Array.from(document.getElementsByClassName("expandable-checkbox-list")).forEach((function(e){var t=e.querySelector(".expandable-checkbox-list__button");null==t||t.addEventListener("click",(function(){e.classList.toggle("expandable-checkbox-list--closed")}))}))},832:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(154);$(".filter-date-dropdown").each((function(){var e=$(".filter-date-dropdown__text",this),t=e.text(),r=$(".calendar",this);n.initCalendar(r,{dateFormat:"dd M",multipleDatesSeparator:" - ",onSelect:function(t){e.text(t.toLowerCase())},onClear:function(){e.text(t)}})}))},33:()=>{var e=document.getElementById("header-id"),t="header--hidden",r="header--attached",n=window.scrollY;window.addEventListener("scroll",(function(){0!==window.scrollY?(null==e?void 0:e.classList.contains(r))||null==e||e.classList.add(r):null==e||e.classList.remove(r),n<window.scrollY?(null==e?void 0:e.classList.contains(t))||null==e||e.classList.add(t):null==e||e.classList.remove(t),n=window.scrollY}))},143:function(e,t,r){var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a},i=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(o(arguments[t]));return e};Object.defineProperty(t,"__esModule",{value:!0});var a,c=r(951),l=Array.apply(void 0,i(document.getElementsByClassName("range-slider"))),d=l.reduce((function(e,t){var r,o=t.getElementsByClassName("range-slider__element-left")[0],i=t.getElementsByClassName("range-slider__element-right")[0];return n(n({},e),((r={})[t.id]={left:o.getAttribute("value"),right:i.getAttribute("value"),min:o.getAttribute("min"),max:o.getAttribute("max")},r))}),{});!function(e){e[e.CHANGE_LEFT_THUMB=0]="CHANGE_LEFT_THUMB",e[e.CHANGE_RIGHT_THUMB=1]="CHANGE_RIGHT_THUMB",e[e.SET_MIN_VALUE=2]="SET_MIN_VALUE",e[e.SET_MAX_VALUE=3]="SET_MAX_VALUE"}(a||(a={}));var s=c.createStore(d,(function(e,t){var r,o,i,c;switch(e.name){case a.CHANGE_LEFT_THUMB:return n(n({},t),((r={})[e.value.id]=n(n({},t[e.value.id]),{left:e.value.cost}),r));case a.CHANGE_RIGHT_THUMB:return n(n({},t),((o={})[e.value.id]=n(n({},t[e.value.id]),{right:e.value.cost}),o));case a.SET_MIN_VALUE:return n(n({},t),((i={})[e.value.id]=n(n({},t[e.value.id]),{min:e.value.min}),i));case a.SET_MAX_VALUE:return n(n({},t),((c={})[e.value.id]=n(n({},t[e.value.id]),{max:e.value.max}),c));default:return t}}));l.forEach((function(e){s.subscribe((function(t){var r=document.getElementById("display-for-"+e.id),n=t[e.id],o=n.min,i=n.max,a=n.left,c=n.right;r.innerHTML="\n      "+(Math.floor(a/1e3)||"")+" \n      "+String(a).slice(-3)+"&#8381; - \n      "+(Math.floor(c/1e3)||"")+" \n      "+String(c).slice(-3)+"&#8381;\n    ";var l=e.querySelector(".slider__thumb_left"),d=e.querySelector(".slider__thumb_right"),s=e.querySelector(".slider__range"),u=(a-o)/(i-o)*100,f=(c-o)/(i-o)*100;l.style.left=u-.05*u-1+"%",d.style.left=f-.05*f+"%",s.style.left=u+"%",s.style.right=100-f+"%"}));var t=e.querySelector(".range-slider__element");s.dispatch({name:"COLD_START"}),s.dispatch({name:a.SET_MIN_VALUE,value:{id:e.id,min:parseInt(t.min)}}),s.dispatch({name:a.SET_MAX_VALUE,value:{id:e.id,max:parseInt(t.max)}});var r=s.getState()[e.id],n=r.left,o=r.right,i=e.querySelector(".range-slider__element-left");i.value=n,i.addEventListener("input",(function(t){var r=Math.min(parseInt(t.target.value),s.getState()[e.id].right);t.target.value=String(r),s.dispatch({name:a.CHANGE_LEFT_THUMB,value:{id:t.target.parentElement.id,cost:r}})}));var c=e.querySelector(".range-slider__element-right");c.value=o,c.addEventListener("input",(function(t){var r=Math.max(parseInt(t.target.value),s.getState()[e.id].left);t.target.value=String(r),s.dispatch({name:a.CHANGE_RIGHT_THUMB,value:{id:t.target.parentElement.id,cost:r}})}))}))},393:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(609)),i=n(r(676));o.default(".text-field--masked").toArray().forEach((function(e){new i.default(e,{date:!0,delimiter:".",datePattern:["d","m","Y"]})}))},22:(e,t,r)=>{r(33),r(393),r(832),r(476),r(154),r(143),r(313),r(232),r(317),r(879),r(90),r(850),r(645),r(554),r(547),r(468),r(187),r(187),r(520),r(597),r(147),r(611),r(191),r(653),r(508),r(968),r(81),r(478),r(999),r(208)},90:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),r(154).initCalendar($(".cards__calendar .calendar"),{})},951:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createStore=void 0,t.createStore=function(e,t){var r=[],n=e,o=function(){return n};return{subscribe:function(e){var t=r.push(e)-1;return function(){return r.splice(t,1)}},dispatch:function(e){var i;i=t(e,o()),n=i,r.forEach((function(e){return e(o())}))},getState:o}}},968:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/comment_avatar_1.webp"},81:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/comment_avatar_2.webp"},611:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_350.webp"},508:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_352.webp"},653:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_444.webp"},147:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_450.webp"},191:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_666.webp"},597:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_678.webp"},187:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_740.webp"},554:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_840.webp"},468:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_856.webp"},645:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_888.webp"},478:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_888_big.webp"},999:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_888_details_1.webp"},208:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_888_details_2.webp"},547:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_980.webp"},520:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n="/toxin-hotel-booking-website/static/room_982.webp"},783:(e,t,r)=>{var n=r(618),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function l(e,t){if(!t){if(!e.href)return;t=e.href.split("?")[0]}if(u(t)&&!1!==e.isLoaded&&t&&t.indexOf(".css")>-1){e.visited=!0;var r=e.cloneNode();r.isLoaded=!1,r.addEventListener("load",(function(){r.isLoaded=!0,e.parentNode.removeChild(e)})),r.addEventListener("error",(function(){r.isLoaded=!0,e.parentNode.removeChild(e)})),r.href="".concat(t,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(r,e.nextSibling):e.parentNode.appendChild(r)}}function d(e){if(!e)return!1;var t=document.querySelectorAll("link"),r=!1;return a.call(t,(function(t){if(t.href){var o=function(e,t){var r;return e=n(e,{stripWWW:!1}),t.some((function(n){e.indexOf(t)>-1&&(r=n)})),r}(t.href,e);u(o)&&!0!==t.visited&&o&&(l(t,o),r=!0)}})),r}function s(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&l(e)}))}function u(e){return!!/^https?:/i.test(e)}e.exports=function(e,t){if(i)return console.log("no window.document found, will not HMR CSS"),c;var r,a,l,u=function(e){var t=o[e];if(!t){if(document.currentScript)t=document.currentScript.src;else{var r=document.getElementsByTagName("script"),i=r[r.length-1];i&&(t=i.src)}o[e]=t}return function(e){if(!t)return null;var r=t.split(/([^\\/]+)\.js$/),o=r&&r[1];return o&&e?e.split(",").map((function(e){var r=new RegExp("".concat(o,"\\.js$"),"g");return n(t.replace(r,"".concat(e.replace(/{fileName}/g,o),".css")))})):[t.replace(".js",".css")]}}(e);return r=function(){var e=u(t.filename),r=d(e);if(t.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void s();r?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),s())},a=50,l=0,function(){var e=this,t=arguments,n=function(){return r.apply(e,t)};clearTimeout(l),l=setTimeout(n,a)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var t=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",r=e.replace(new RegExp(t,"i"),"").split("/"),n=r[0].toLowerCase().replace(/\.$/,"");return r[0]="",t+n+r.reduce((function(e,t){switch(t){case"..":e.pop();break;case".":break;default:e.push(t)}return e}),[]).join("/")}},850:(e,t,r)=>{r.r(t);var n=r(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)},676:e=>{e.exports=cleave.js},609:e=>{e.exports=jQuery}},l={};function d(e){if(l[e])return l[e].exports;var t=l[e]={id:e,exports:{}},r={id:e,module:t,factory:c[e],require:d};return d.i.forEach((function(e){e(r)})),t=r.module,r.factory.call(t.exports,t,t.exports,r.require),t.exports}d.m=c,d.c=l,d.i=[],d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>"main."+d.h()+".css",d.hmrF=()=>d.h()+".hot-update.json",d.h=()=>"f8079cdadc2c4dd71c78",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="website-for-booking-hotels:",d.l=(r,n,o)=>{if(e[r])e[r].push(n);else{var i,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var s=c[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==t+o){i=s;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var u=(t,n)=>{i.onerror=i.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),a&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,r,n,o={},i=d.c,a=[],c=[],l="idle";function s(e){l=e;for(var t=0;t<c.length;t++)c[t].call(null,e)}function u(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return u(e)}))}function f(e){if("idle"!==l)throw new Error("check() is only allowed in idle status");return s("check"),d.hmrM().then((function(n){if(!n)return s(v()?"ready":"idle"),null;s("prepare");var o=[];return t=[],r=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,t){return d.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return u((function(){return e?h(e):(s("ready"),o)}))}))}))}function p(e){return"ready"!==l?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var t=r.map((function(t){return t(e)}));r=void 0;var o,i=t.map((function(e){return e.error})).filter(Boolean);if(i.length>0)return s("abort"),Promise.resolve().then((function(){throw i[0]}));s("dispose"),t.forEach((function(e){e.dispose&&e.dispose()})),s("apply");var a=function(e){o||(o=e)},c=[];return t.forEach((function(e){if(e.apply){var t=e.apply(a);if(t)for(var r=0;r<t.length;r++)c.push(t[r])}})),o?(s("fail"),Promise.resolve().then((function(){throw o}))):n?h(e).then((function(e){return c.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):(s("idle"),Promise.resolve(c))}function v(){if(n)return r||(r=[]),Object.keys(d.hmrI).forEach((function(e){n.forEach((function(t){d.hmrI[e](t,r)}))})),n=void 0,!0}d.hmrD=o,d.i.push((function(h){var v,m,y,_=h.module,b=function(r,n){var o=i[n];if(!o)return r;var c=function(t){if(o.hot.active){if(i[t]){var c=i[t].parents;-1===c.indexOf(n)&&c.push(n)}else a=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),a=[];return r(t)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var f in r)Object.prototype.hasOwnProperty.call(r,f)&&"e"!==f&&Object.defineProperty(c,f,d(f));return c.e=function(e){return function(e){switch(l){case"ready":return s("prepare"),t.push(e),u((function(){s("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},c}(h.require,h.id);_.hot=(v=h.id,m=_,y={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:e!==v,_requireSelf:function(){a=m.parents.slice(),e=v,d(v)},active:!0,accept:function(e,t){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._acceptedDependencies[e[r]]=t||function(){};else y._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,l){case"idle":r=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](v,r)})),s("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](v,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return l;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var t=c.indexOf(e);t>=0&&c.splice(t,1)},data:o[v]},e=void 0,y),_.parents=a,_.children=[],a=[],h.require=b})),d.hmrC={},d.hmrI={}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=a,l.request=c,o.parentNode.removeChild(o),n(l)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(a=r[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===t)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),d.hmrC.miniCss=(e,t,c,l,s,u)=>{s.push(a),e.forEach((e=>{var t=d.miniCssF(e),a=d.p+t;const c=n(t,a);c&&l.push(new Promise(((t,n)=>{var l=r(e,a,(()=>{l.as="style",l.rel="preload",t()}),n);o.push(c),i.push(l)})))}))},(()=>{var e,t,r,n,o={179:0},i={};function a(e){return new Promise(((t,r)=>{i[e]=t;var n=d.p+d.hu(e),o=new Error;d.l(n,(t=>{if(i[e]){i[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,r(o)}}))}))}function c(i){function a(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,a=o.chain,l=d.c[i];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var s=0;s<l.parents.length;s++){var u=l.parents[s],f=d.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===t.indexOf(u)&&(f.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),c(r[u],[i])):(delete r[u],t.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}d.f&&delete d.f.jsonpHmr,e=void 0;var l={},s=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(d.o(t,p)){var h,v=t[p],m=!1,y=!1,_=!1,b="";switch((h=v?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":i.onAccepted&&i.onAccepted(h),y=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),_=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in u[p]=v,c(s,h.outdatedModules),h.outdatedDependencies)d.o(h.outdatedDependencies,p)&&(l[p]||(l[p]=[]),c(l[p],h.outdatedDependencies[p]));_&&(c(s,[h.moduleId]),u[p]=f)}t=void 0;for(var g,w=[],E=0;E<s.length;E++){var S=s[E];d.c[S]&&d.c[S].hot._selfAccepted&&u[S]!==f&&!d.c[S].hot._selfInvalidated&&w.push({module:S,require:d.c[S].hot._requireSelf,errorHandler:d.c[S].hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=s.slice();n.length>0;){var i=n.pop(),a=d.c[i];if(a){var c={},u=a.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,c);for(d.hmrD[i]=c,a.hot.active=!1,delete d.c[i],delete l[i],E=0;E<a.children.length;E++){var f=d.c[a.children[E]];f&&((e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1))}}}for(var p in l)if(d.o(l,p)&&(a=d.c[p]))for(g=l[p],E=0;E<g.length;E++)t=g[E],(e=a.children.indexOf(t))>=0&&a.children.splice(e,1)},apply:function(e){for(var t in u)d.o(u,t)&&(d.m[t]=u[t]);for(var r=0;r<n.length;r++)n[r](d);for(var o in l)if(d.o(l,o)){var a=d.c[o];if(a){g=l[o];for(var c=[],f=[],p=0;p<g.length;p++){var h=g[p],v=a.hot._acceptedDependencies[h];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(h)}}for(var m=0;m<c.length;m++)try{c[m].call(null,g)}catch(t){i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:f[m],error:t}),i.ignoreErrored||e(t)}}}for(var y=0;y<w.length;y++){var _=w[y],b=_.module;try{_.require(b)}catch(t){if("function"==typeof _.errorHandler)try{_.errorHandler(t)}catch(r){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:b,error:r,originalError:t}),i.ignoreErrored||e(r),e(t)}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:b,error:t}),i.ignoreErrored||e(t)}}return s}}}self.webpackHotUpdatewebsite_for_booking_hotels=(e,r,o)=>{for(var a in r)d.o(r,a)&&(t[a]=r[a]);o&&n.push(o),i[e]&&(i[e](),i[e]=void 0)},d.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(c)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(i,l,s,u,f,p){f.push(c),e={},r=l,t=s.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],i.forEach((function(t){d.o(o,t)&&void 0!==o[t]&&(u.push(a(t)),e[t]=!0)})),d.f&&(d.f.jsonpHmr=function(t,r){e&&!d.o(e,t)&&d.o(o,t)&&void 0!==o[t]&&(r.push(a(t)),e[t]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),d(22)})();
//# sourceMappingURL=build.js.map