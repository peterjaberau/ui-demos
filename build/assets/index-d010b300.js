import{R as e}from"./index-2c36b58a.js";import{_ as u,e as g,c,b as h,d as b}from"./index-eb73e870.js";import{u as P}from"./feature-flags-b64d770b.js";import{u as E}from"./context-d1fbdd85.js";import{L as v}from"./link-default-variant-context-309e3cd5.js";import{c as w}from"./index-9e4101f5.js";import{I as y}from"./internal-4584f44c.js";import{S as H}from"./internal-616d830c.js";const a={"help-panel":"awsui_help-panel_1d237_1s430_181",loading:"awsui_loading_1d237_1s430_348",header:"awsui_header_1d237_1s430_353","with-toolbar":"awsui_with-toolbar_1d237_1s430_370",content:"awsui_content_1d237_1s430_388",footer:"awsui_footer_1d237_1s430_439"};function I(t){var{header:n,footer:o,children:p,loading:s,loadingText:m,__internalRootRef:r}=t,d=u(t,["header","footer","children","loading","loadingText","__internalRootRef"]);const l=g(d),_=P(),f=E("help-panel"),i=Object.assign(Object.assign({},l),{className:c(l.className,a["help-panel"],_&&a["with-toolbar"],s&&a.loading)});return s?e.createElement("div",Object.assign({},i,{ref:r}),e.createElement(H,{type:"loading"},e.createElement(y,{tagName:"span"},f("loadingText",m)))):e.createElement("div",Object.assign({},i,{ref:r}),n&&e.createElement("div",{className:c(a.header)},n),e.createElement(v.Provider,{value:{defaultVariant:"primary"}},e.createElement("div",{className:a.content},p)),o&&e.createElement("div",{className:a.footer},e.createElement("hr",{role:"presentation"}),o))}const N=w(I),R=N();function x(t){const n=h("HelpPanel");return e.createElement(R,Object.assign({},t,n))}b(x,"HelpPanel");export{x as H};