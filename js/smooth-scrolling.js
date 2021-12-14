"use strict";function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==_typeof3(Symbol.iterator)?function(e){return _typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof3(e)})(e)}function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}!function(){var u,a,i,l,o={frameRate:150,animationTime:400,stepSize:100,pulseAlgorithm:!0,pulseScale:4,pulseNormalize:1,accelerationDelta:50,accelerationMax:3,keyboardSupport:!0,arrowScroll:50,fixedBackground:!0,excluded:""},y=o,c=!1,s=!1,n={x:0,y:0},d=!1,f=document.documentElement,m=[],p=/^Mac/.test(navigator.platform),h={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},w={37:1,38:1,39:1,40:1};function b(){var e,t,o,n,r,l;!d&&document.body&&(d=!0,e=document.body,t=document.documentElement,l=window.innerHeight,o=e.scrollHeight,f=0<=document.compatMode.indexOf("CSS")?t:e,u=e,y.keyboardSupport&&X("keydown",x),top!=self?s=!0:G&&l<o&&(e.offsetHeight<=l||t.offsetHeight<=l)&&((n=document.createElement("div")).style.cssText="position:absolute; z-index:-10000; top:0; left:0; right:0; height:"+f.scrollHeight+"px",document.body.appendChild(n),i=function(){r=r||setTimeout(function(){c||(n.style.height="0",n.style.height=f.scrollHeight+"px",r=null)},500)},setTimeout(i,10),X("resize",i),(a=new j(i)).observe(e,{attributes:!0,childList:!0,characterData:!1}),f.offsetHeight<=l&&((l=document.createElement("div")).style.clear="both",e.appendChild(l))),y.fixedBackground||c||(e.style.backgroundAttachment="scroll",t.style.backgroundAttachment="scroll"))}var v=[],g=!1,r=Date.now();function S(d,f,m){var p,e,t=0<f?1:-1,o=0<m?1:-1;n.x===t&&n.y===o||(n.x=t,n.y=o,v=[],r=0),1!=y.accelerationMax&&((o=Date.now()-r)<y.accelerationDelta&&1<(e=(1+50/o)/2)&&(e=Math.min(e,y.accelerationMax),f*=e,m*=e),r=Date.now()),v.push({x:f,y:m,lastX:f<0?.99:-.99,lastY:m<0?.99:-.99,start:Date.now()}),g||(e=R(),p=d===e||d===document.body,null==d.$scrollBehavior&&(o=M(t=d),null==B[o]&&(t=getComputedStyle(t,"")["scroll-behavior"],B[o]="smooth"==t),B[o])&&(d.$scrollBehavior=d.style.scrollBehavior,d.style.scrollBehavior="auto"),e=function e(t){for(var o,n=Date.now(),r=0,l=0,a=0;a<v.length;a++){var i=v[a],c=n-i.start,u=c>=y.animationTime,s=u?1:c/y.animationTime;y.pulseAlgorithm&&(s=1<=(o=s)?1:o<=0?0:(1==y.pulseNormalize&&(y.pulseNormalize/=q(1)),q(o))),r+=c=i.x*s-i.lastX>>0,l+=s=i.y*s-i.lastY>>0,i.lastX+=c,i.lastY+=s,u&&(v.splice(a,1),a--)}p?window.scrollBy(r,l):(r&&(d.scrollLeft+=r),l&&(d.scrollTop+=l)),(v=f||m?v:[]).length?$(e,d,1e3/y.frameRate+1):(g=!1,null!=d.$scrollBehavior&&(d.style.scrollBehavior=d.$scrollBehavior,d.$scrollBehavior=null))},$(e,d,0),g=!0)}function e(e){d||b();var t=e.target;if(e.defaultPrevented||e.ctrlKey)return!0;if(A(u,"embed")||A(t,"embed")&&/\.pdf/i.test(t.src)||A(u,"object")||t.shadowRoot)return!0;var o,n=-e.wheelDeltaX||e.deltaX||0,r=-e.wheelDeltaY||e.deltaY||0;return p&&(e.wheelDeltaX&&N(e.wheelDeltaX,120)&&(n=e.wheelDeltaX/Math.abs(e.wheelDeltaX)*-120),e.wheelDeltaY&&N(e.wheelDeltaY,120)&&(r=e.wheelDeltaY/Math.abs(e.wheelDeltaY)*-120)),n||r||(r=-e.wheelDelta||0),1===e.deltaMode&&(n*=40,r*=40),(t=H(t))?!(!(o=r)||(m.length||(m=[o,o,o]),o=Math.abs(o),m.push(o),m.shift(),clearTimeout(l),l=setTimeout(function(){try{localStorage.SS_deltaBuffer=m.join(",")}catch(e){}},1e3),o=120<o&&K(o),K(120)||K(100)||o))||(1.2<Math.abs(n)&&(n*=y.stepSize/120),1.2<Math.abs(r)&&(r*=y.stepSize/120),S(t,n,r),e.preventDefault(),void _()):!s||!I||(Object.defineProperty(e,"target",{value:window.frameElement}),parent.wheel(e))}function x(o){var e=o.target,t=o.ctrlKey||o.altKey||o.metaKey||o.shiftKey&&o.keyCode!==h.spacebar;document.body.contains(u)||(u=document.activeElement);var n=/^(button|submit|radio|checkbox|file|color|image)$/i;if(o.defaultPrevented||/^(textarea|select|embed|object)$/i.test(e.nodeName)||A(e,"input")&&!n.test(e.type)||A(u,"video")||function(){var e=o.target,t=!1;if(-1!=document.URL.indexOf("www.youtube.com/watch"))do{if(t=e.classList&&e.classList.contains("html5-video-controls"))break}while(e=e.parentNode);return t}()||e.isContentEditable||t)return!0;if((A(e,"button")||A(e,"input")&&n.test(e.type))&&o.keyCode===h.spacebar)return!0;if(A(e,"input")&&"radio"==e.type&&w[o.keyCode])return!0;var r=0,l=0,a=H(u);if(!a)return!s||!I||parent.keydown(o);var i=a.clientHeight;switch(a==document.body&&(i=window.innerHeight),o.keyCode){case h.up:l=-y.arrowScroll;break;case h.down:l=y.arrowScroll;break;case h.spacebar:l=-(o.shiftKey?1:-1)*i*.9;break;case h.pageup:l=.9*-i;break;case h.pagedown:l=.9*i;break;case h.home:l=-(a=a==document.body&&document.scrollingElement?document.scrollingElement:a).scrollTop;break;case h.end:var c=a.scrollHeight-a.scrollTop-i,l=0<c?10+c:0;break;case h.left:r=-y.arrowScroll;break;case h.right:r=y.arrowScroll;break;default:return!0}S(a,r,l),o.preventDefault(),_()}function t(e){u=e.target}var k,D,M=(k=0,function(e){return e.uniqueID||(e.uniqueID=k++)}),E={},T={},B={};function _(){clearTimeout(D),D=setInterval(function(){E=T=B={}},1e3)}function C(e,t,o){for(var n=o?E:T,r=e.length;r--;)n[M(e[r])]=t;return t}function H(e){var t=[],o=document.body,n=f.scrollHeight;do{var r=T[M(e)];if(r)return C(t,r);if(t.push(e),n===e.scrollHeight){if(r=L(f)&&L(o)||O(f),s&&z(f)||!s&&r)return C(t,R())}else if(z(e)&&O(e))return C(t,e)}while(e=e.parentElement)}function z(e){return e.clientHeight+10<e.scrollHeight}function L(e){return"hidden"!==getComputedStyle(e,"").getPropertyValue("overflow-y")}function O(e){return"scroll"===(e=getComputedStyle(e,"").getPropertyValue("overflow-y"))||"auto"===e}function X(e,t,o){window.addEventListener(e,t,o||!1)}function Y(e,t,o){window.removeEventListener(e,t,o||!1)}function A(e,t){return e&&(e.nodeName||"").toLowerCase()===t.toLowerCase()}if(window.localStorage&&localStorage.SS_deltaBuffer)try{m=localStorage.SS_deltaBuffer.split(",")}catch(e){}function N(e,t){return Math.floor(e/t)==e/t}function K(e){return N(m[0],e)&&N(m[1],e)&&N(m[2],e)}var P,$=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},j=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,R=(P=document.scrollingElement,function(){var e,t;return P||((e=document.createElement("div")).style.cssText="height:10000px;width:1px;",document.body.appendChild(e),t=document.body.scrollTop,document.documentElement.scrollTop,window.scrollBy(0,3),P=document.body.scrollTop!=t?document.body:document.documentElement,window.scrollBy(0,-3),document.body.removeChild(e)),P});function q(e){var t;return((e*=y.pulseScale)<1?e-(1-Math.exp(-e)):(--e,(t=Math.exp(-1))+(1-Math.exp(-e))*(1-t)))*y.pulseNormalize}var V=window.navigator.userAgent,F=/Edge/.test(V),I=/chrome/i.test(V)&&!F,W=/safari/i.test(V)&&!F,U=/mobile/i.test(V),F=/Windows NT 6.1/i.test(V)&&/rv:11/i.test(V),G=W&&(/Version\/8/i.test(V)||/Version\/9/i.test(V)),F=(I||W||F)&&!U,J=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){J=!0}}))}catch(e){}var U=!!J&&{passive:!1},Q="onwheel"in document.createElement("div")?"wheel":"mousewheel";function Z(e){for(var t in e)o.hasOwnProperty(t)&&(y[t]=e[t])}Q&&F&&(X(Q,e,U),X("mousedown",t),X("load",b)),Z.destroy=function(){a&&a.disconnect(),Y(Q,e),Y("mousedown",t),Y("keydown",x),Y("resize",i),Y("load",b)},window.SmoothScrollOptions&&Z(window.SmoothScrollOptions),"function"==typeof define&&define.amd?define(function(){return Z}):"object"==("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=Z:window.SmoothScroll=Z}();