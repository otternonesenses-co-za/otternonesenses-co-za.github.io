import{o as A,q as v,v as R,E as g,H as w,w as L,x as P,y as _,z as m,A as S,B as k,C as q,U as B,D as C,F as I,b as N,G as U,S as x}from"./DGfGD4sz.js";function $(t,n,c=!1){v&&R();var f=t,r=null,e=null,a=B,s=c?g:0,d=!1;const i=(E,u=!0)=>{d=!0,o(u,E)},o=(E,u)=>{if(a===(a=E))return;let l=!1;if(v){const h=f.data===w;!!a===h&&(f=L(),P(f),_(!1),l=!0)}a?(r?m(r):u&&(r=S(()=>u(f))),e&&k(e,()=>{e=null})):(e?m(e):u&&(e=S(()=>u(f))),r&&k(r,()=>{r=null})),l&&_(!0)};A(()=>{d=!1,n(i),d||o(null,null)},s),v&&(f=q)}function T(t,n){return t===n||(t==null?void 0:t[x])===n}function p(t={},n,c,f){return C(()=>{var r,e;return I(()=>{r=e,e=[],N(()=>{t!==c(...e)&&(n(t,...e),r&&T(c(...r),t)&&n(null,...r))})}),()=>{U(()=>{e&&T(c(...e),t)&&n(null,...e)})}}),t}const D="modulepreload",F=function(t,n){return new URL(t,n).href},b={},H=function(n,c,f){let r=Promise.resolve();if(c&&c.length>0){const a=document.getElementsByTagName("link"),s=document.querySelector("meta[property=csp-nonce]"),d=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.allSettled(c.map(i=>{if(i=F(i,f),i in b)return;b[i]=!0;const o=i.endsWith(".css"),E=o?'[rel="stylesheet"]':"";if(!!f)for(let h=a.length-1;h>=0;h--){const y=a[h];if(y.href===i&&(!o||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${E}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":D,o||(l.as="script"),l.crossOrigin="",l.href=i,d&&l.setAttribute("nonce",d),document.head.appendChild(l),o)return new Promise((h,y)=>{l.addEventListener("load",h),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${i}`)))})}))}function e(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return r.then(a=>{for(const s of a||[])s.status==="rejected"&&e(s.reason);return n().catch(e)})};export{H as _,p as b,$ as i};
