import{r as o,j as i}from"./index-2c36b58a.js";import{I as n}from"./index-2fb92fbd.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-1dcf455f.js";import"./attributes-9cbf7bc1.js";import"./internal-1d1af924.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./form-field-context-fcff921e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./utils-e7109a95.js";function M(){const[r,e]=o.useState(""),[m,s]=o.useState(!1),[p,u]=o.useState(!1);return i.jsxs("div",{id:"test",children:[i.jsx("h1",{children:"Input submit check"}),m?i.jsx("div",{id:"submit-success",children:"Submitted"}):null,i.jsxs("form",{onSubmit:t=>{console.log("submitted"),t.preventDefault(),s(!0)},children:[i.jsx(n,{ariaLabel:"test input",type:"number",step:.2,value:r,onChange:t=>e(t.detail.value),onKeyDown:t=>{p&&(console.log("prevent!"),t.preventDefault(),t.stopPropagation())}}),i.jsx("button",{id:"disable-form-submitting",onClick:()=>u(!0),type:"button",children:"Disable keyboard form submitting"})]})]})}export{M as default};