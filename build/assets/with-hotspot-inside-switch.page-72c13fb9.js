import{r,j as t}from"./index-2c36b58a.js";import{A as d,a as h,H as e,t as g}from"./tutorials-b76e60bc.js";import{C as u}from"./index-a74c1f67.js";import{R as x}from"./index-885e018e.js";import{S as k}from"./index-75e01ea4.js";import{T}from"./index-170bd103.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./index-491afaa4.js";import"./internal-ff778b15.js";import"./attributes-9cbf7bc1.js";import"./internal-1d1af924.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./index-d426916f.js";import"./link-default-variant-context-309e3cd5.js";import"./api-335682e8.js";import"./debounce-acf18bef.js";import"./index-b4980ced.js";import"./use-container-breakpoints-ef827eb4.js";import"./use-container-query-60e26c9e.js";import"./breakpoints-dd8065be.js";import"./internal-fb301464.js";import"./join-strings-170e7968.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./index-9085be47.js";import"./index-04a17b45.js";import"./internal-d962d170.js";import"./info-link-label-context-b5baf2e5.js";import"./index-84af6bb2.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./form-field-context-fcff921e.js";import"./internal-dabc270c.js";import"./radio-group-b5da1ad8.js";import"./radio-button-85a94eb4.js";import"./internal-292a587d.js";const i=g(()=>{})[0],s=()=>{};function ft(){const[p,n]=r.useState(!1),[m,a]=r.useState(!1),[c,l]=r.useState("first");return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Annotation Context: with Hotspots inside components using AbstractSwitch"}),t.jsx(d,{currentTutorial:i,i18nStrings:h,onStartTutorial:s,onExitTutorial:s,children:t.jsx("div",{style:{padding:20},children:t.jsxs(k,{size:"l",children:[t.jsxs(u,{checked:p,onChange:o=>{console.log("Checkbox toggled"),n(o.detail.checked)},description:"This is a description",children:["This is the checkbox label",t.jsx(e,{hotspotId:i.tasks[0].steps[0].hotspotId})]}),t.jsxs(T,{checked:m,onChange:o=>{console.log("Toggle toggled"),a(o.detail.checked)},description:"This is a description",children:["This is the toggle label",t.jsx(e,{hotspotId:i.tasks[0].steps[2].hotspotId})]}),t.jsx(x,{onChange:({detail:o})=>{console.log("Radio button selected"),l(o.value)},value:c,items:[{value:"first",label:"First choice",description:"This is a description"},{value:"second",label:t.jsxs(t.Fragment,{children:["Second choice ",t.jsx(e,{hotspotId:i.tasks[0].steps[3].hotspotId})]}),description:"This is a description"},{value:"third",label:"Third choice",description:"This is a description"}]})]})})})]})}export{ft as default};