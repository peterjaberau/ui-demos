import{r as a,j as r}from"./index-2c36b58a.js";import{l as n}from"./lodash-9877ffd7.js";import{B as c}from"./index-9085be47.js";import{H as d}from"./index-7d405f0c.js";import{L as h}from"./index-04a17b45.js";import{T as x}from"./index-6770e832.js";import{g as f}from"./generate-data-5b70cd57.js";import{c as g}from"./shared-configs-2276a3bf.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-fb301464.js";import"./internal-971f8eb5.js";import"./attributes-9cbf7bc1.js";import"./use-sticky-header-3ae5a14e.js";import"./find-up-until-61244faf.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./scrollable-containers-435d5d18.js";import"./breakpoints-dd8065be.js";import"./global-vars-d161e56c.js";import"./selectors-2871d9bb.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./index-5c04613c.js";import"./styles.css-db2cfaaa.js";import"./internal-d962d170.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./link-default-variant-context-309e3cd5.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-84af6bb2.js";import"./keycode-5e563e63.js";import"./check-safe-url-87d46dc3.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./index-b7e4292a.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-bd602d7a.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./internal-9b98a633.js";import"./modal-context-069faf31.js";import"./index-d426916f.js";import"./table-component-context-ebc0966f.js";import"./tools-header-d64e9275.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./radio-button-85a94eb4.js";import"./join-strings-170e7968.js";import"./index-47bb06f7.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-1d1af924.js";import"./internal-971a5a29.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./Transition-32ef578e.js";import"./index-8f886a48.js";import"./index-67c045b5.js";import"./index-c87ff28c.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./index-298438fd.js";import"./internal-90218b53.js";import"./internal-616d830c.js";import"./handle-key-f035cd81.js";import"./index-d8010092.js";import"./browser-scrollbar-size-b8d76340.js";import"./toInteger-74765614.js";import"./_baseToString-3b9773c0.js";import"./isObjectLike-2b7e5469.js";import"./isArray-5ac9c87d.js";import"./isSymbol-5e4b6858.js";import"./toFinite-7587e969.js";import"./range-c9407b89.js";import"./pseudo-random-034211df.js";import"./index-3af9db76.js";import"./i18n-strings-21c6af81.js";const u=f(20);function Wr(){const[m,p]=a.useState(0),e=g.map((t,s)=>({...t,cell:(i,...l)=>s===0?r.jsx(h,{onFollow:()=>p(o=>o+1),children:i.id}):r.jsx("ul",{children:n.range(0,20).map(o=>r.jsx("li",{children:t.cell(i,...l)},o))})}));return r.jsxs(c,{padding:"s",children:[r.jsx(x,{header:r.jsxs(d,{headingTagOverride:"h1",children:["Table with tall rows, clicks: ",m]}),columnDefinitions:e,items:u,stickyHeader:!0,variant:"container"}),r.jsx("div",{style:{blockSize:"90vh",padding:10},children:"Placeholder to allow page scroll beyond table"})]})}export{Wr as default};