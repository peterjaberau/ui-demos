import{r as p,j as t}from"./index-2c36b58a.js";import{r as a}from"./range-c9407b89.js";import{A as n}from"./index-7fc4adad.js";import{B as c}from"./index-84731336.js";import{C as l}from"./index-bc14c609.js";import{H as d}from"./index-7d405f0c.js";import{L as f}from"./index-04a17b45.js";import{S as x}from"./screenshot-area-b77c8583.js";import{B as h,N as u,T as g,a as j,F as T}from"./content-blocks-a0b95a16.js";import{l as v}from"./labels-e7348a44.js";import{t as y}from"./tools-content-9bbaa365.js";import"./toFinite-7587e969.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./context-d1fbdd85.js";import"./index-cef6af85.js";import"./index-33af1cce.js";import"./index-1b07c59a.js";import"./scrollable-containers-435d5d18.js";import"./find-up-until-61244faf.js";import"./breakpoints-dd8065be.js";import"./index-84af6bb2.js";import"./feature-flags-b64d770b.js";import"./attributes-9cbf7bc1.js";import"./dynamic-overlap-context-2694bf06.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./index-491afaa4.js";import"./index-5c04613c.js";import"./browser-scrollbar-size-b8d76340.js";import"./api-335682e8.js";import"./debounce-acf18bef.js";import"./internal-1d1af924.js";import"./internal-67a4bdad.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-e97f25e5.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./Transition-32ef578e.js";import"./handle-key-f035cd81.js";import"./index-c328e31d.js";import"./use-container-query-60e26c9e.js";import"./internal-605c76be.js";import"./internal-fb301464.js";import"./index-aa0176b5.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./index-039e8e61.js";import"./use-open-state-f9537631.js";import"./tokens-4068cfaf.js";import"./global-vars-d161e56c.js";import"./index-d8010092.js";import"./use-global-breadcrumbs-225db74e.js";import"./index-9e4101f5.js";import"./implementation-5b9deea0.js";import"./internal-9b98a633.js";import"./use-sticky-header-3ae5a14e.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./index-b7e4292a.js";import"./collection-label-context-b15b8042.js";import"./link-default-variant-context-309e3cd5.js";import"./tools-header-d64e9275.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./radio-button-85a94eb4.js";import"./join-strings-170e7968.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-616d830c.js";import"./internal-971f8eb5.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./internal-d962d170.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";import"./index-4a109b88.js";import"./index-fd526985.js";import"./external-props-f3440ca2.js";import"./index-ad6ed501.js";import"./throttle-c4fb4198.js";import"./index-b4980ced.js";import"./index-d010b300.js";import"./index-9d00c5df.js";import"./internal-3a10d728.js";import"./index-75e01ea4.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./index-9930bf10.js";import"./styles.module-f547da8d.js";import"./index-9085be47.js";import"./index-1c466a81.js";function S(o){const r=["One","Two","Three","Four","Five"];return a(o).map(i=>({number:i,text:r[i%r.length]}))}const b={header:o=>o.text,sections:[{id:"description",header:"Number",content:o=>o.number},{id:"type",header:"Text",content:o=>o.text}]},C=[{cards:1},{minWidth:400,cards:2},{cards:3,minWidth:700},{cards:4,minWidth:1e3}],w=S(16);function yo(){const[o,r]=p.useState(!1),[i,e]=p.useState("long");function s(m){r(!0),e(m)}return t.jsxs(x,{gutters:!1,children:[t.jsx(n,{ariaLabels:v,breadcrumbs:t.jsx(h,{}),navigation:t.jsx(u,{}),contentType:"cards",tools:t.jsx(g,{children:y[i]}),toolsOpen:o,onToolsChange:({detail:m})=>r(m.open),notifications:t.jsx(j,{}),content:t.jsx(l,{items:w,cardDefinition:b,stickyHeader:!0,variant:"full-page",header:t.jsx(d,{variant:"awsui-h1-sticky",description:"Demo page with footer",info:t.jsx(f,{variant:"info",onFollow:()=>s("long"),children:"Long help text"}),actions:t.jsx(c,{variant:"primary",children:"Create"}),children:"Sticky Scrollbar Example"}),cardsPerRow:C})}),t.jsx(T,{legacyConsoleNav:!1})]})}export{yo as default};