import{r,j as t}from"./index-2c36b58a.js";import{A as c}from"./index-7fc4adad.js";import{B as u}from"./index-9085be47.js";import{C as f}from"./index-8de097ba.js";import{H as b}from"./index-7d405f0c.js";import{L as d}from"./index-04a17b45.js";import{S as v}from"./index-b2bcd081.js";import{T as C}from"./index-6770e832.js";import{g as h}from"./generate-data-5b70cd57.js";import{c as g}from"./shared-configs-2276a3bf.js";import{l as S}from"./labels-e7348a44.js";import{s as x}from"./strings-4204ad25.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./context-d1fbdd85.js";import"./index-cef6af85.js";import"./index-33af1cce.js";import"./index-1b07c59a.js";import"./scrollable-containers-435d5d18.js";import"./find-up-until-61244faf.js";import"./breakpoints-dd8065be.js";import"./index-84af6bb2.js";import"./feature-flags-b64d770b.js";import"./attributes-9cbf7bc1.js";import"./dynamic-overlap-context-2694bf06.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./index-491afaa4.js";import"./index-5c04613c.js";import"./browser-scrollbar-size-b8d76340.js";import"./api-335682e8.js";import"./debounce-acf18bef.js";import"./internal-1d1af924.js";import"./internal-67a4bdad.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-e97f25e5.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./Transition-32ef578e.js";import"./handle-key-f035cd81.js";import"./index-c328e31d.js";import"./use-container-query-60e26c9e.js";import"./internal-605c76be.js";import"./internal-fb301464.js";import"./index-aa0176b5.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./index-039e8e61.js";import"./use-open-state-f9537631.js";import"./tokens-4068cfaf.js";import"./global-vars-d161e56c.js";import"./index-d8010092.js";import"./use-global-breadcrumbs-225db74e.js";import"./index-9e4101f5.js";import"./implementation-5b9deea0.js";import"./logging-3d6eeea4.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-5a5bdbe3.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./index-b7e4292a.js";import"./reset-contexts-for-modal-28d84991.js";import"./form-field-context-fcff921e.js";import"./link-default-variant-context-309e3cd5.js";import"./use-container-breakpoints-ef827eb4.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./utilities.esm-7f0f786e.js";import"./internal-b78d0799.js";import"./internal-1dcf455f.js";import"./index-842d48b3.js";import"./utils-e7109a95.js";import"./table-component-context-ebc0966f.js";import"./use-debounce-search-result-callback-08476abb.js";import"./join-strings-170e7968.js";import"./internal-292a587d.js";import"./index-388f3fd9.js";import"./internal-76dde1ac.js";import"./index-91203ee9.js";import"./internal-565898aa.js";import"./internal-35e701d8.js";import"./internal-4ec290ce.js";import"./internal-dabc270c.js";import"./radio-group-b5da1ad8.js";import"./radio-button-85a94eb4.js";import"./internal-d962d170.js";import"./internal-9fa09e3f.js";import"./analytics-funnel-6bd8970e.js";import"./internal-bd602d7a.js";import"./internal-9b98a633.js";import"./tools-header-d64e9275.js";import"./index-8f886a48.js";import"./index-c87ff28c.js";import"./internal-616d830c.js";import"./toInteger-74765614.js";import"./_baseToString-3b9773c0.js";import"./isObjectLike-2b7e5469.js";import"./isArray-5ac9c87d.js";import"./isSymbol-5e4b6858.js";import"./toFinite-7587e969.js";import"./range-c9407b89.js";import"./pseudo-random-034211df.js";import"./index-3af9db76.js";import"./i18n-strings-21c6af81.js";function Li(){const e=[{label:"Instance properties",options:[{id:"id",label:"ID",editable:!1},{id:"type",label:"Type"},{id:"dnsName",label:"DNS name"},{id:"imageId",label:"Image ID"},{id:"state",label:"State"}]}],[m,p]=r.useState(!1),[l,n]=r.useState(!1),[o,s]=r.useState({stickyColumns:{first:1,last:1},visibleContent:e[0].options.map(i=>i.id)}),a=h(20);return t.jsx(c,{ariaLabels:S,contentType:"table",navigationOpen:m,toolsOpen:l,onNavigationChange:({detail:i})=>p(i.open),onToolsChange:({detail:i})=>n(i.open),splitPanelOpen:!0,splitPanel:t.jsx(v,{header:"Split panel header",i18nStrings:x,children:"I need to be on top! Even on mobile!"}),content:t.jsx(C,{resizableColumns:!0,variant:"full-page",stickyHeader:!0,footer:t.jsx(u,{textAlign:"center",children:t.jsx(d,{href:"#",children:"View all"})}),stickyColumns:o.stickyColumns,visibleColumns:o.visibleContent,preferences:t.jsx(f,{title:"Preferences",confirmLabel:"Confirm",cancelLabel:"Cancel",onConfirm:({detail:i})=>s(i),preferences:o,visibleContentPreference:{title:"Select visible columns",options:e},stickyColumnsPreference:{firstColumns:{title:"First column(s)",description:"Keep the first column(s) visible while horizontally scrolling table content.",options:[{label:"None",value:0},{label:"First column",value:1},{label:"First two columns",value:2}]},lastColumns:{title:"Stick last visible column",description:"Keep the last column visible when tables are wider than the viewport.",options:[{label:"None",value:0},{label:"Last column",value:1}]}}}),header:t.jsx(b,{variant:"awsui-h1-sticky",actions:t.jsx("div",{style:{blockSize:"10vh"}}),children:"Sticky Full-Page Header"}),columnDefinitions:g,items:a})})}export{Li as default};