import{j as r}from"./index-2c36b58a.js";import{r as a}from"./range-c9407b89.js";import{B as m}from"./index-9085be47.js";import{B as s}from"./index-84731336.js";import{H as c}from"./index-7d405f0c.js";import{c as d}from"./permutations-935a0919.js";import{P as l}from"./permutations-view-153dda6e.js";import{S as h}from"./screenshot-area-b77c8583.js";import{C as u}from"./index-bc14c609.js";import{L as x}from"./index-04a17b45.js";import"./toFinite-7587e969.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-fb301464.js";import"./internal-1d1af924.js";import"./attributes-9cbf7bc1.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./breakpoints-dd8065be.js";import"./global-vars-d161e56c.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./isArguments-ec666b3a.js";import"./isArray-5ac9c87d.js";import"./index-75e01ea4.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./clsx-0839fdbe.js";import"./use-container-query-60e26c9e.js";import"./index-8996ce48.js";import"./internal-9b98a633.js";import"./index-84af6bb2.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./index-b7e4292a.js";import"./link-default-variant-context-309e3cd5.js";import"./tools-header-d64e9275.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./radio-button-85a94eb4.js";import"./join-strings-170e7968.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-616d830c.js";import"./internal-d962d170.js";const f={selectionGroupLabel:"group label",itemSelectionLabel:({selectedItems:t},i)=>`${i.text} is ${t.indexOf(i)<0?"not ":""}selected`};function e(t){const i=["One","Two","Three","Four"];return a(t).map(n=>({number:n,text:i[n%i.length]}))}const o={header:t=>t.number===2?r.jsx(x,{href:"#",fontSize:"inherit",children:t.text}):t.text,sections:[{id:"description",header:"Number",content:t=>t.number},{id:"type",header:"Text",content:t=>t.text}]},p=r.jsx(c,{children:"Cards header"}),g=r.jsxs(m,{textAlign:"center",color:"inherit",children:[r.jsx(m,{variant:"strong",textAlign:"center",color:"inherit",children:"No resources"}),r.jsx(m,{variant:"p",padding:{bottom:"s"},color:"inherit",children:"No resources to display."}),r.jsx(s,{children:"Create resource"})]}),b=d([{cardDefinition:[o],variant:["container","full-page"],header:[p,void 0],items:[e(4)]},{cardDefinition:[o],header:[p],items:[[]],empty:[g,"empty"]},{cardDefinition:[o],header:[p],items:[[]],loading:[!0],loadingText:["loading"]},{cardDefinition:[o],selectedItems:[[{number:2}]],selectionType:["multi","single"],isItemDisabled:[t=>t.number===1],trackBy:["number"],items:[e(4)],ariaLabels:[f]},{cardDefinition:[{header:t=>t.text,sections:[]}],items:[e(4)]},{cardDefinition:[o],items:[e(3)],variant:[void 0,"full-page"],pagination:[void 0,"pagination"]}]),zt=()=>r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Cards permutations"}),r.jsx(h,{disableAnimations:!0,children:r.jsx(l,{permutations:b,render:t=>r.jsx(u,{...t})})})]});export{zt as default};