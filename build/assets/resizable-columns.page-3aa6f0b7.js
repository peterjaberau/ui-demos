import{r as m,j as i}from"./index-2c36b58a.js";import{r as D}from"./range-c9407b89.js";import{z as R}from"./zipObject-a4f93e53.js";import{B as z}from"./index-84731336.js";import{C as r}from"./index-a74c1f67.js";import{C as P}from"./index-2f6684c7.js";import{C as W}from"./index-fd526985.js";import{H as h}from"./index-7d405f0c.js";import{L as E}from"./index-04a17b45.js";import{S as A}from"./index-75e01ea4.js";import{T as K}from"./index-6770e832.js";import{A as L}from"./app-context-b611d09f.js";import{S as T}from"./screenshot-area-b77c8583.js";import"./toFinite-7587e969.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-1d1af924.js";import"./attributes-9cbf7bc1.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./external-props-f3440ca2.js";import"./internal-565898aa.js";import"./index-298438fd.js";import"./use-container-query-60e26c9e.js";import"./internal-35e701d8.js";import"./breakpoints-dd8065be.js";import"./use-container-breakpoints-ef827eb4.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./index-b7e4292a.js";import"./internal-9b98a633.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./global-vars-d161e56c.js";import"./index-84af6bb2.js";import"./internal-971f8eb5.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./internal-d962d170.js";import"./link-default-variant-context-309e3cd5.js";import"./internal-90218b53.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-bd602d7a.js";import"./index-d426916f.js";import"./table-component-context-ebc0966f.js";import"./tools-header-d64e9275.js";import"./radio-button-85a94eb4.js";import"./join-strings-170e7968.js";import"./index-8f886a48.js";import"./index-67c045b5.js";import"./index-c87ff28c.js";import"./internal-4ec290ce.js";import"./internal-616d830c.js";import"./handle-key-f035cd81.js";import"./index-d8010092.js";import"./browser-scrollbar-size-b8d76340.js";import"./isArguments-ec666b3a.js";import"./_baseToString-3b9773c0.js";import"./isArray-5ac9c87d.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";const v=[{id:"name",header:"Name",cell:t=>i.jsx(E,{href:`#${t.id}`,children:t.text}),width:200},{id:"region",header:"Region",cell:t=>t.region,minWidth:130,width:130,sortingField:"region"},{id:"description",header:"Description",minWidth:100,cell:t=>t.description},{id:"state",header:"State",maxWidth:150,cell:t=>t.state},{id:"extra",header:"Extra column",cell:()=>"-"}],U=[{id:0,text:"Predefined width",description:"Min width 100px",region:"Min and max width",state:"Max width 150px"},{id:1,text:"Instance 1",description:"Small description",region:"us-east-1",state:"RUNNING"},{id:2,text:"Instance 2",description:"Some a little longer description",region:"us-west-2",state:"RUNNING"},{id:3,text:"Instance 3",description:"Very very very very very long description",region:"us-west-2",state:"RUNNING"},{id:4,text:"Instance 4",description:"-",region:"us-east-2",state:"STOPPED"},{id:5,text:"Instance 5",description:"Normal length description",region:"us-east-1",state:"RUNNING"},...D(6,45).map(t=>({id:t,text:`Instance ${t}`,description:"-",region:"undisclosed location",state:"REDACTED"}))];function vi(){const{urlParams:t,setUrlParams:o}=m.useContext(L),{wrapLines:g=!1,stickyHeader:u=!1,resizableColumns:x=!0,fullPage:f=!1,withColumnIds:p=!0,withSelection:C=!1,enableKeyboardNavigation:j=!1}=t,[w,b]=m.useState(0),[k,y]=m.useState(v),[l,S]=m.useState([{id:"name",visible:!0},{id:"region",visible:!0},{id:"description",visible:!0},{id:"state",visible:!0},{id:"extra",visible:!1}]),[s,N]=m.useState();function I(e){window.__columnWidths=e.detail.widths;const d=R(l.map(n=>n.id),e.detail.widths);y(n=>n.map(a=>d[a.id]?{...a,width:d[a.id]}:a))}return i.jsxs(A,{size:"l",children:[i.jsx(h,{variant:"h1",children:"Resizable columns"}),i.jsx(W,{header:i.jsx(h,{children:"Preferences"}),children:i.jsxs(P,{columns:3,borders:"vertical",children:[i.jsxs("div",{children:[i.jsx(r,{checked:g,onChange:e=>o({wrapLines:e.detail.checked}),children:"Wrap lines"}),i.jsx(r,{id:"sticky-header-toggle",checked:u,onChange:e=>o({stickyHeader:e.detail.checked}),children:"Sticky header"}),i.jsx(r,{id:"resizable-columns-toggle",checked:x,onChange:e=>o({resizableColumns:e.detail.checked}),children:"Resizable columns"}),i.jsx(r,{checked:f,onChange:e=>o({fullPage:e.detail.checked}),children:"Full page table"}),i.jsx(r,{checked:p,onChange:e=>o({withColumnIds:e.detail.checked}),children:"Columns have IDs"}),i.jsx(r,{checked:C,onChange:e=>o({withSelection:e.detail.checked}),children:"With row selection"}),i.jsx(r,{checked:j,onChange:e=>{o({enableKeyboardNavigation:e.detail.checked}),window.location.reload()},children:"Keyboard navigation"})]}),i.jsx("div",{children:v.map(e=>{var d;return i.jsx(r,{id:`toggle-${e.id}`,checked:!!((d=l.find(({id:n})=>n===e.id))!=null&&d.visible),onChange:n=>S(a=>a.map(c=>c.id===e.id?{...c,visible:n.detail.checked}:c)),children:e.header},e.id)})}),i.jsx("div",{children:i.jsx(z,{id:"reset-state",onClick:()=>b(e=>e+1),children:"Reset inner table state"})})]})}),i.jsx(T,{children:i.jsx(K,{header:i.jsx(h,{children:"Simple table"}),stickyHeader:u,columnDefinitions:k.map(e=>p?e:{...e,id:void 0}),resizableColumns:x,columnDisplay:p?l:void 0,selectionType:C?"single":void 0,items:U,wrapLines:g,sortingColumn:s==null?void 0:s.sortingColumn,sortingDescending:s==null?void 0:s.isDescending,onSortingChange:e=>N(e.detail),onColumnWidthsChange:I,variant:f?"full-page":void 0,enableKeyboardNavigation:j},w)})]})}export{vi as default};