import{r,j as t}from"./index-2c36b58a.js";import{B as n}from"./index-84731336.js";import{M as C}from"./index-3535911f.js";import{B as o}from"./index-9085be47.js";import{S as l}from"./index-75e01ea4.js";import{A as v}from"./index-141988d6.js";import{L as w}from"./index-04a17b45.js";import{C as g}from"./index-fd526985.js";import{F as d}from"./index-6090633a.js";import{I as c}from"./index-2fb92fbd.js";import{C as T}from"./index-2f6684c7.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-1d1af924.js";import"./attributes-9cbf7bc1.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./index-b7e4292a.js";import"./internal-5a5bdbe3.js";import"./use-container-query-60e26c9e.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./breakpoints-dd8065be.js";import"./global-vars-d161e56c.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./reset-contexts-for-modal-28d84991.js";import"./form-field-context-fcff921e.js";import"./link-default-variant-context-309e3cd5.js";import"./browser-scrollbar-size-b8d76340.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-fb301464.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./internal-ff778b15.js";import"./index-d426916f.js";import"./api-335682e8.js";import"./index-b4980ced.js";import"./internal-d962d170.js";import"./index-84af6bb2.js";import"./external-props-f3440ca2.js";import"./internal-9b98a633.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./join-strings-170e7968.js";import"./internal-1dcf455f.js";import"./utils-e7109a95.js";import"./internal-565898aa.js";const a="confirm";function Yt(){const[u,i]=r.useState(!1),[m,h]=r.useState(""),[x,f]=r.useState(""),s=m.toLowerCase()===a,j=()=>{i(!1)},p=()=>{i(!1)},b=e=>{e.preventDefault(),s&&p()};return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Modal Funnel"}),t.jsx(n,{onClick:()=>i(!0),children:"Open Modal"}),u&&t.jsx(C,{analyticsMetadata:{flowType:"delete",instanceIdentifier:"delete-flow",resourceType:"instance"},onDismiss:()=>i(!1),visible:!0,footer:t.jsx(o,{float:"right",children:t.jsxs(l,{direction:"horizontal",size:"xs",children:[t.jsx(n,{variant:"link",onClick:j,children:"Cancel"}),t.jsx(n,{variant:"primary",onClick:p,disabled:!s,"data-testid":"submit",children:"Delete"})]})}),header:"Modal title",children:t.jsxs(l,{size:"m",children:[t.jsxs(o,{variant:"span",children:["Permanently delete instance"," ",t.jsx(o,{variant:"span",fontWeight:"bold",children:"1234567890"}),"? You can’t undo this action."]}),t.jsxs(v,{type:"warning",statusIconAriaLabel:"Warning",children:["Proceeding with this action will delete the instance with all its content and can affect related resources."," ",t.jsx(w,{external:!0,href:"#",ariaLabel:"Learn more about resource management, opens in new tab",children:"Learn more"})]}),t.jsx(o,{children:"To avoid accidental deletions, we ask you to provide additional written consent."}),t.jsx(g,{children:t.jsx(d,{label:"Nested input",children:t.jsx(c,{placeholder:"Additional nested input",onChange:e=>f(e.detail.value),value:x})})}),t.jsx("form",{onSubmit:b,children:t.jsx(d,{label:`To confirm this deletion, type "${a}".`,children:t.jsx(T,{columns:2,children:t.jsx(c,{placeholder:a,onChange:e=>h(e.detail.value),value:m,ariaRequired:!0})})})})]})})]})}export{Yt as default};