import{r as f,j as i}from"./index-2c36b58a.js";import{B as c}from"./index-9085be47.js";import{B as e}from"./index-84731336.js";import{B as d}from"./index-15a0d4f4.js";import{H as n}from"./index-7d405f0c.js";import{L as u}from"./index-04a17b45.js";import{S as m}from"./index-75e01ea4.js";import{T as r}from"./index-6770e832.js";import{A as b}from"./app-context-b611d09f.js";import{S as g}from"./screenshot-area-b77c8583.js";import{g as k}from"./generate-data-5b70cd57.js";import{s as a,c as l}from"./shared-configs-2276a3bf.js";import{C as j}from"./index-a74c1f67.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-fb301464.js";import"./internal-1d1af924.js";import"./attributes-9cbf7bc1.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./internal-605c76be.js";import"./index-aa0176b5.js";import"./index-c328e31d.js";import"./index-1b07c59a.js";import"./breakpoints-dd8065be.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./index-84af6bb2.js";import"./index-039e8e61.js";import"./use-open-state-f9537631.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./global-vars-d161e56c.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./internal-d962d170.js";import"./link-default-variant-context-309e3cd5.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./analytics-funnel-6bd8970e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./index-b7e4292a.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-bd602d7a.js";import"./use-container-query-60e26c9e.js";import"./internal-9b98a633.js";import"./table-component-context-ebc0966f.js";import"./tools-header-d64e9275.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./radio-button-85a94eb4.js";import"./join-strings-170e7968.js";import"./use-container-breakpoints-ef827eb4.js";import"./index-8f886a48.js";import"./index-c87ff28c.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./internal-616d830c.js";import"./handle-key-f035cd81.js";import"./index-d8010092.js";import"./browser-scrollbar-size-b8d76340.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./isArguments-ec666b3a.js";import"./_baseToString-3b9773c0.js";import"./isArray-5ac9c87d.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";import"./toInteger-74765614.js";import"./toFinite-7587e969.js";import"./range-c9407b89.js";import"./pseudo-random-034211df.js";import"./index-3af9db76.js";import"./i18n-strings-21c6af81.js";const s=k(10),p=[l[0],l[1],l[3],l[4]],w=[...p,{id:"action",header:"Actions",cell:t=>i.jsx(e,{variant:"inline-link",ariaLabel:`Download ${t.id}`,children:"Download"})}],y=[...p,{id:"action",header:"Actions",cell:t=>i.jsx(m,{size:"m",direction:"horizontal",children:t.state==="TERMINATING"||t.state==="TERMINATED"?i.jsxs(i.Fragment,{children:[i.jsx(e,{variant:"inline-link",ariaLabel:`Accept ${t.id}`,children:"Accept"}),i.jsx(e,{variant:"inline-link",ariaLabel:`Reject ${t.id}`,children:"Reject"})]}):t.state==="RUNNING"?i.jsx(e,{variant:"inline-link",ariaLabel:`Cancel ${t.id}`,children:"Cancel"}):t.state==="STOPPED"?i.jsx(e,{variant:"inline-link",iconName:"external",iconAlign:"right",ariaLabel:`Verify payment ${t.id}`,children:"Verify payment"}):t.state==="STOPPING"?i.jsx(e,{variant:"inline-link",iconName:"external",iconAlign:"right",ariaLabel:`Verify email ${t.id}`,children:"Verify email"}):"-"})}],L=[...p,{id:"action",header:"Actions",cell:t=>i.jsx(c,{children:i.jsx(d,{variant:"inline-icon",expandToViewport:!0,ariaLabel:`${t.id} actions`,items:[{id:"connect",text:"Connect"},{id:"view",text:"View details"},{id:"manage",text:"Manage instances"}]})})}],D=[{id:"id",header:"Task name",cell:t=>i.jsx(u,{href:`#${t.id}`,children:t.id}),sortingField:"id"},l[1],{id:"dnsName",header:"value",cell:t=>t.dnsName||"-",sortingField:"dnsName"},{id:"action",header:"Actions",cell:t=>i.jsxs(m,{size:"xs",direction:"horizontal",children:[i.jsx(e,{variant:"inline-link",ariaLabel:`Edit ${t.id}`,children:"Edit"}),i.jsx(d,{variant:"inline-icon",expandToViewport:!0,ariaLabel:`${t.id} actions`,items:[{id:"lock",text:"Lock"},{id:"delete",text:"Delete"},{id:"done",text:"Mark as done"}]})]})}],T=[...p,{id:"action",header:"Actions",cell:t=>i.jsx(c,{children:i.jsxs(m,{size:"xs",direction:"horizontal",children:[i.jsx(e,{variant:"inline-icon",iconName:"download",ariaLabel:`Download ${t.id}`}),i.jsx(d,{variant:"inline-icon",expandToViewport:!0,ariaLabel:`${t.id} actions`,items:[{id:"share",text:"Share"},{id:"edit",text:"Edit"},{id:"delete",text:"Delete"},{id:"connect",text:"Connect"},{id:"manage",text:"Manage state"}]})]})})}];function ft(){const{urlParams:{enableKeyboardNavigation:t=!1,stickyActions:o=!1},setUrlParams:h}=f.useContext(b);return i.jsxs(c,{children:[i.jsxs(c,{margin:{top:"m",horizontal:"m"},children:[i.jsx(j,{checked:t,onChange:x=>{h({enableKeyboardNavigation:x.detail.checked}),window.location.reload()},children:"Keyboard navigation"}),i.jsx(j,{checked:o,onChange:x=>h({stickyActions:x.detail.checked}),children:"Sticky actions"})]}),i.jsxs(g,{children:[i.jsx("h1",{children:"Tables with inline actions"}),i.jsxs(m,{size:"l",children:[i.jsx(r,{ariaLabels:a,header:i.jsx(n,{children:"Table with single actions"}),columnDefinitions:w,items:s,enableKeyboardNavigation:t,stickyColumns:{last:o?1:0}}),i.jsx(r,{ariaLabels:a,header:i.jsx(n,{children:"Table with multiple actions"}),columnDefinitions:y,items:s,enableKeyboardNavigation:t,stickyColumns:{last:o?1:0}}),i.jsx(r,{"data-testid":"table-with-dropdown-actions",ariaLabels:a,header:i.jsx(n,{actions:i.jsxs(m,{size:"xs",direction:"horizontal",children:[i.jsx(d,{items:[{id:"connect",text:"Connect"},{id:"view",text:"View details"},{id:"manage",text:"Manage instances"}],children:"Actions"}),i.jsx(e,{variant:"primary",children:"Launch instance"})]}),children:"Table with action dropdowns"}),selectionType:"multi",columnDefinitions:L,items:s,enableKeyboardNavigation:t,stickyColumns:{last:o?1:0}}),i.jsx(r,{ariaLabels:a,header:i.jsx(n,{children:"Table with mixed actions"}),columnDefinitions:D,items:s,enableKeyboardNavigation:t,stickyColumns:{last:o?1:0}}),i.jsx(r,{ariaLabels:a,header:i.jsx(n,{children:"Table with only icon actions"}),columnDefinitions:T,items:s,enableKeyboardNavigation:t,stickyColumns:{last:o?1:0}})]})]})]})}export{ft as default};