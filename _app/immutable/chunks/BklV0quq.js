import{b as S,h as v,a as k,E as T,H as p,r as w,c as A,d as E,e as y,f as b,p as g,g as P,U as L}from"./9kG4W4Rk.js";function U(m,u,d=!1){v&&k();var s=m,a=null,o=null,t=L,e=d?T:0,f=!1;const n=(h,l=!0)=>{f=!0,i(l,h)},i=(h,l)=>{if(t===(t=h))return;let r=!1;if(v){const c=s.data===p;!!t===c&&(s=w(),A(s),E(!1),r=!0)}t?(a?y(a):l&&(a=b(()=>l(s))),o&&g(o,()=>{o=null})):(o?y(o):l&&(o=b(()=>l(s))),a&&g(a,()=>{a=null})),r&&E(!0)};S(()=>{f=!1,u(n),f||i(null,null)},e),v&&(s=P)}const I="modulepreload",C=function(m,u){return new URL(m,u).href},R={},q=function(u,d,s){let a=Promise.resolve();if(d&&d.length>0){const t=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),f=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));a=Promise.allSettled(d.map(n=>{if(n=C(n,s),n in R)return;R[n]=!0;const i=n.endsWith(".css"),h=i?'[rel="stylesheet"]':"";if(!!s)for(let c=t.length-1;c>=0;c--){const _=t[c];if(_.href===n&&(!i||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${h}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":I,i||(r.as="script"),r.crossOrigin="",r.href=n,f&&r.setAttribute("nonce",f),document.head.appendChild(r),i)return new Promise((c,_)=>{r.addEventListener("load",c),r.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(t){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=t,window.dispatchEvent(e),!e.defaultPrevented)throw t}return a.then(t=>{for(const e of t||[])e.status==="rejected"&&o(e.reason);return u().catch(o)})};export{q as _,U as i};
