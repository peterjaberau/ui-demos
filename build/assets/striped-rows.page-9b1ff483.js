import{r as u,R as x,j as t}from"./index-2c36b58a.js";import{u as S}from"./use-collection-7f8350da.js";import{B as o}from"./index-84731336.js";import{C as b}from"./index-8de097ba.js";import{H as h}from"./index-7d405f0c.js";import{P}from"./index-c4abeb4e.js";import{T as C}from"./index-6770e832.js";import{T as j}from"./index-37a711e2.js";import{c as L}from"./i18n-strings-21c6af81.js";import{S as w}from"./screenshot-area-b77c8583.js";import{g as y}from"./generate-data-5b70cd57.js";import{d as I,E as p,c as T,a as R,g as D,p as z,b as E}from"./shared-configs-2276a3bf.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-1d1af924.js";import"./attributes-9cbf7bc1.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./logging-3d6eeea4.js";import"./internal-fb301464.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-5a5bdbe3.js";import"./use-container-query-60e26c9e.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./breakpoints-dd8065be.js";import"./global-vars-d161e56c.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./index-b7e4292a.js";import"./reset-contexts-for-modal-28d84991.js";import"./form-field-context-fcff921e.js";import"./link-default-variant-context-309e3cd5.js";import"./browser-scrollbar-size-b8d76340.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./utilities.esm-7f0f786e.js";import"./internal-b78d0799.js";import"./internal-1dcf455f.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./utils-e7109a95.js";import"./table-component-context-ebc0966f.js";import"./use-debounce-search-result-callback-08476abb.js";import"./join-strings-170e7968.js";import"./internal-292a587d.js";import"./index-388f3fd9.js";import"./internal-76dde1ac.js";import"./index-91203ee9.js";import"./internal-565898aa.js";import"./internal-35e701d8.js";import"./internal-4ec290ce.js";import"./index-84af6bb2.js";import"./internal-dabc270c.js";import"./radio-group-b5da1ad8.js";import"./radio-button-85a94eb4.js";import"./internal-a855998e.js";import"./analytics-funnel-6bd8970e.js";import"./internal-bd602d7a.js";import"./internal-9b98a633.js";import"./index-d426916f.js";import"./tools-header-d64e9275.js";import"./index-8f886a48.js";import"./index-67c045b5.js";import"./index-c87ff28c.js";import"./internal-616d830c.js";import"./handle-key-f035cd81.js";import"./index-d8010092.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";import"./toInteger-74765614.js";import"./_baseToString-3b9773c0.js";import"./isObjectLike-2b7e5469.js";import"./isArray-5ac9c87d.js";import"./isSymbol-5e4b6858.js";import"./toFinite-7587e969.js";import"./range-c9407b89.js";import"./pseudo-random-034211df.js";import"./index-9085be47.js";import"./index-04a17b45.js";import"./internal-d962d170.js";import"./index-3af9db76.js";const m=y(),$={selectionGroupLabel:"group label",allItemsSelectionLabel:({selectedItems:r})=>`${r.length} item selected`,itemSelectionLabel:({selectedItems:r},e)=>`${e.id} is ${r.indexOf(e)<0?"not ":""}selected`};function zr(){const[r,e]=u.useState({...I,stripedRows:!0}),[s,n]=x.useState([]),{items:a,actions:l,filteredItemsCount:c,collectionProps:f,filterProps:d,paginationProps:g}=S(m,{filtering:{empty:t.jsx(p,{title:"No resources",subtitle:"No resources to display.",action:t.jsx(o,{children:"Create resource"})}),noMatch:t.jsx(p,{title:"No matches",subtitle:"We can’t find a match.",action:t.jsx(o,{onClick:()=>l.setFiltering(""),children:"Clear filter"})})},pagination:{pageSize:r.pageSize},sorting:{}});return t.jsx(w,{children:t.jsx(C,{...f,header:t.jsx(h,{headingTagOverride:"h1",counter:`(${m.length})`,children:"Instances"}),ariaLabels:$,selectionType:"multi",onSelectionChange:({detail:i})=>n(i.selectedItems),selectedItems:s,stripedRows:r.stripedRows,wrapLines:r.wrapLines,columnDefinitions:T,items:a,pagination:t.jsx(P,{...g,ariaLabels:R}),filter:t.jsx(j,{...d,countText:D(c),filteringAriaLabel:"Filter instances"}),columnDisplay:r.contentDisplay,preferences:t.jsx(b,{title:"Preferences",confirmLabel:"Confirm",cancelLabel:"Cancel",onConfirm:({detail:i})=>e(i),preferences:r,pageSizePreference:{title:"Select page size",options:z},contentDisplayPreference:{...E,...L},wrapLinesPreference:{label:"Wrap lines",description:"Wrap lines description"},stripedRowsPreference:{label:"Striped rows",description:"Striped rows description"}})})})}export{zr as default};