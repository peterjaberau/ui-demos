const l=Symbol.for("awsui-global-flags"),s=()=>window.top;function c(){return typeof window<"u"?window:globalThis}function e(t,a){var n;return(n=t==null?void 0:t[l])===null||n===void 0?void 0:n[a]}const u=t=>{try{const a=e(c(),t);return a!==void 0?a:e(s(),t)}catch{return}},i="data-awsui-analytics",d="data-awsui-analytics-label";let o=u("analyticsMetadata");const r=t=>o?{[i]:JSON.stringify(t)}:{},b=t=>o?{[i]:t[i]}:{},g=t=>o?{[d]:t}:{};export{g as a,u as b,b as c,r as g};