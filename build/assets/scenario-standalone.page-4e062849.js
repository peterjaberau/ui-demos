import{r as e,j as i}from"./index-2c36b58a.js";import u from"./all.en-dbc97777.js";import{S as f}from"./index-75e01ea4.js";import{u as h,v as s,P as x}from"./validations-b5374900.js";import{I as g}from"./provider-0e25538a.js";import{B as F}from"./index-9085be47.js";import{H as j}from"./index-7d405f0c.js";import{A as v}from"./index-141988d6.js";import{C as n}from"./index-a74c1f67.js";import{F as C}from"./index-6090633a.js";import{F as S}from"./index-b404a296.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./index-33af1cce.js";import"./index-ad6ed501.js";import"./find-up-until-61244faf.js";import"./attributes-9cbf7bc1.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./internal-1d1af924.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./index-d426916f.js";import"./index-c328e31d.js";import"./throttle-c4fb4198.js";import"./index-84af6bb2.js";import"./index-b4980ced.js";import"./api-335682e8.js";import"./debounce-acf18bef.js";import"./use-container-breakpoints-ef827eb4.js";import"./use-container-query-60e26c9e.js";import"./breakpoints-dd8065be.js";import"./internal-fb301464.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./global-vars-d161e56c.js";import"./collection-label-context-b15b8042.js";import"./info-link-label-context-b5baf2e5.js";import"./styles.css-db2cfaaa.js";import"./internal-ff778b15.js";import"./link-default-variant-context-309e3cd5.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./index-b7e4292a.js";import"./join-strings-170e7968.js";import"./external-props-f3440ca2.js";import"./use-files-dragging-996beeef.js";import"./internal-a8e67a02.js";import"./index-d8010092.js";import"./internal-b6a002fb.js";import"./dismiss-button-daa4f835.js";import"./format-date-time-86457e63.js";import"./format-date-5535d902.js";import"./pad-left-zeros-7128f39a.js";function Qt(){const m=e.useRef(null),[r,l]=e.useState(!0),[a,c]=e.useState(!0),o=h(),d=s(o.files)??o.fileErrors,p=o.status==="error";return e.useEffect(()=>{var t;p&&((t=m.current)==null||t.focus())},[p]),i.jsx(g,{messages:[u],locale:"en",children:i.jsx(F,{margin:"xl",children:i.jsxs(f,{size:"xl",children:[i.jsx(j,{variant:"h1",children:"File upload scenario: Standalone"}),i.jsx(v,{statusIconAriaLabel:"Info",header:"Scenario description",children:"File upload is used as a standalone component. It supports synchronous client-side validation as per constraints. Additionally, the component imitates server-side validation triggered for image files."}),i.jsx(x,{status:o.status}),i.jsx(n,{checked:r,onChange:t=>l(t.detail.checked),children:"Accept multiple files"}),i.jsx(n,{checked:a,onChange:t=>c(t.detail.checked),children:"Vertical alignment"}),i.jsx(C,{label:r?"Contracts":"Contract",description:r?"Upload your contract with all amendments":"Upload your contract",children:i.jsx(S,{fileTokenAlignment:a?"vertical":"horizontal",ref:m,multiple:r,tokenLimit:3,value:o.files,onChange:t=>{o.onFilesChange(t.detail.value),o.onUploadFiles(s(t.detail.value)?[]:t.detail.value)},accept:"application/pdf, image/png, image/jpeg",showFileSize:!0,showFileLastModified:!0,showFileThumbnail:!0,...d,constraintText:"File size must not exceed 250 KB. Combined file size must not exceed 750 KB"})})]})})})}export{Qt as default};