import{r as c,j as o}from"./index-2c36b58a.js";import{u as l}from"./use-collection-7f8350da.js";import{A as h}from"./app-context-b611d09f.js";import{S as f}from"./screenshot-area-b77c8583.js";import{g as d}from"./generate-data-5b70cd57.js";import{a as x,c as g}from"./shared-configs-2276a3bf.js";import{S as p}from"./index-75e01ea4.js";import{C as u}from"./index-fd526985.js";import{T as j}from"./index-6770e832.js";import{H as C}from"./index-7d405f0c.js";import{P as S}from"./index-c4abeb4e.js";import{C as e}from"./index-a74c1f67.js";import{B as b}from"./index-84731336.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./isArguments-ec666b3a.js";import"./_baseToString-3b9773c0.js";import"./isArray-5ac9c87d.js";import"./clsx-0839fdbe.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./ResizeObserver-6fd345a6.js";import"./index-8996ce48.js";import"./toInteger-74765614.js";import"./toFinite-7587e969.js";import"./range-c9407b89.js";import"./pseudo-random-034211df.js";import"./index-9085be47.js";import"./index-eb73e870.js";import"./internal-fb301464.js";import"./index-04a17b45.js";import"./attributes-9cbf7bc1.js";import"./internal-d962d170.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./info-link-label-context-b5baf2e5.js";import"./link-default-variant-context-309e3cd5.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./index-84af6bb2.js";import"./keycode-5e563e63.js";import"./check-safe-url-87d46dc3.js";import"./index-3af9db76.js";import"./internal-616d830c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./i18n-strings-21c6af81.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./index-b7e4292a.js";import"./external-props-f3440ca2.js";import"./internal-9b98a633.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./scrollable-containers-435d5d18.js";import"./breakpoints-dd8065be.js";import"./global-vars-d161e56c.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-bd602d7a.js";import"./index-d426916f.js";import"./collection-label-context-b15b8042.js";import"./table-component-context-ebc0966f.js";import"./tools-header-d64e9275.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./radio-button-85a94eb4.js";import"./join-strings-170e7968.js";import"./index-47bb06f7.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-1d1af924.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./Transition-32ef578e.js";import"./index-8f886a48.js";import"./index-67c045b5.js";import"./index-c87ff28c.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./handle-key-f035cd81.js";import"./index-d8010092.js";import"./styles.css-db2cfaaa.js";import"./browser-scrollbar-size-b8d76340.js";import"./internal-971f8eb5.js";import"./internal-a855998e.js";const a=d(),k=50,v=[...g,{id:"actions",header:"Fav",cell:()=>o.jsx(b,{variant:"icon",iconName:"star",ariaLabel:"make favorite"}),width:70}];function dr(){const{urlParams:{fitHeight:i=!0,hasFooter:t=!1},setUrlParams:m}=c.useContext(h),{items:s,paginationProps:n}=l(a,{pagination:{pageSize:k},sorting:{}});return o.jsx(f,{children:o.jsxs(p,{size:"m",direction:"horizontal",children:[o.jsx("div",{style:{blockSize:"500px",inlineSize:"500px",overflow:"scroll"},children:o.jsx(u,{fitHeight:i,children:o.jsx(j,{variant:"borderless",header:o.jsx(C,{headingTagOverride:"h1",counter:`(${a.length})`,children:"Sticky Scrollbar Example"}),footer:t?o.jsx(S,{...n,ariaLabels:x}):void 0,columnDefinitions:v,items:s,stickyColumns:{last:1},resizableColumns:!0})})}),o.jsxs(p,{size:"s",children:[o.jsx(e,{checked:i,onChange:({detail:r})=>m({fitHeight:r.checked}),children:"fitHeight"}),o.jsx(e,{checked:t,onChange:({detail:r})=>m({hasFooter:r.checked}),children:"hasFooter"})]})]})})}export{dr as default};