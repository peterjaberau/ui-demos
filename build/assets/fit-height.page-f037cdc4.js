import{r as l,j as i}from"./index-2c36b58a.js";import{A as a}from"./app-context-b611d09f.js";import{S as c}from"./screenshot-area-b77c8583.js";import{c as x,d as g}from"./common-52bd840e.js";import{B as m}from"./index-9085be47.js";import{C as o}from"./index-a74c1f67.js";import{S as n}from"./index-75e01ea4.js";import{S as f}from"./index-36c13c8d.js";import{P as j}from"./index-7f67b6db.js";import{B as u}from"./index-84731336.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./isArguments-ec666b3a.js";import"./_baseToString-3b9773c0.js";import"./isArray-5ac9c87d.js";import"./clsx-0839fdbe.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./ResizeObserver-6fd345a6.js";import"./index-8996ce48.js";import"./index-eb73e870.js";import"./internal-fb301464.js";import"./internal-76dde1ac.js";import"./attributes-9cbf7bc1.js";import"./index-388f3fd9.js";import"./index-5c04613c.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./index-33af1cce.js";import"./internal-b99f02c9.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./breakpoints-dd8065be.js";import"./use-container-breakpoints-ef827eb4.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-b7e4292a.js";import"./use-funnel-f65631cb.js";import"./selectors-2871d9bb.js";import"./info-link-label-context-b5baf2e5.js";import"./index-84af6bb2.js";import"./internal-4584f44c.js";import"./join-strings-170e7968.js";import"./internal-9b1189e6.js";import"./index-aa0176b5.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./index-c328e31d.js";import"./index-1b07c59a.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./utils-06561385.js";import"./internal-1d1af924.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./keycode-5e563e63.js";import"./Transition-32ef578e.js";import"./use-highlight-option-7a4dfde2.js";import"./internal-d962d170.js";import"./link-default-variant-context-309e3cd5.js";import"./internal-616d830c.js";import"./index-8f886a48.js";import"./index-7771e8e2.js";import"./use-select-0ff13a42.js";import"./internal-1dcf455f.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./utils-e7109a95.js";import"./index-039e8e61.js";import"./use-open-state-f9537631.js";import"./handle-key-f035cd81.js";import"./index-c9377798.js";import"./internal-8df4efef.js";import"./index-d8010092.js";import"./internal-ab75ed5f.js";import"./dismiss-button-daa4f835.js";import"./tokens-4068cfaf.js";import"./internal-3a10d728.js";import"./index-cef6af85.js";import"./internal-9b98a633.js";import"./use-sticky-header-3ae5a14e.js";import"./global-vars-d161e56c.js";import"./analytics-funnel-6bd8970e.js";import"./internal-971f8eb5.js";import"./collection-label-context-b15b8042.js";import"./styles.css-db2cfaaa.js";function mt(){const{urlParams:r,setUrlParams:e}=l.useContext(a),s=r.minSize??"small",h=[800,600,400,300,160,100],d=r.fitHeight??!0;return i.jsxs(m,{padding:"m",children:[i.jsx("h1",{children:"Pie chart fit height"}),i.jsxs(m,{children:[i.jsx(o,{checked:d,onChange:t=>e({fitHeight:t.detail.checked}),children:"fit height"}),i.jsx(o,{checked:r.hideFilter,onChange:t=>e({hideFilter:t.detail.checked}),children:"hide filter"}),i.jsx(o,{checked:r.hideLegend,onChange:t=>e({hideLegend:t.detail.checked}),children:"hide legend"}),i.jsx(o,{checked:r.hideTitles,onChange:t=>e({hideTitles:t.detail.checked}),children:"hide titles"}),i.jsx(o,{checked:r.hideDescriptions,onChange:t=>e({hideDescriptions:t.detail.checked}),children:"hide descriptions"}),i.jsxs(n,{size:"xs",direction:"horizontal",alignItems:"center",children:[i.jsx(f,{id:"min-size-input",label:"Position",options:[{id:"large",text:"Large"},{id:"medium",text:"Medium"},{id:"small",text:"Small"}],selectedId:s,onChange:t=>e({minSize:t.detail.selectedId})}),i.jsx("label",{htmlFor:"min-size-input",children:"min size"})]})]}),i.jsx(c,{children:i.jsx(n,{size:"l",children:h.map(t=>i.jsxs(m,{children:[i.jsxs(m,{children:[t,"px"]}),i.jsx("div",{style:{boxSizing:"border-box",width:"100%",padding:"8px",border:"2px solid black",height:t},children:i.jsx(j,{...x,fitHeight:d,hideFilter:r.hideFilter,hideLegend:r.hideLegend,hideTitles:r.hideTitles,hideDescriptions:r.hideDescriptions,segmentDescription:p=>`${p.calories} calories`,data:g,ariaLabel:"Food facts",size:s,detailPopoverFooter:p=>i.jsxs(u,{children:["Filter by ",p.title]}),variant:"donut",innerMetricValue:"180"})})]},t))})})]})}export{mt as default};