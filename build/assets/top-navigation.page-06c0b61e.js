import{R as e,j as t}from"./index-2c36b58a.js";import{A as c}from"./index-847788d4.js";import{B as o}from"./index-9085be47.js";import{F as r}from"./index-6090633a.js";import{R as d}from"./index-885e018e.js";import{S as h}from"./index-94422936.js";import{S as f}from"./index-9d00c5df.js";import{S as x}from"./index-75e01ea4.js";import{S as u}from"./screenshot-area-b77c8583.js";import{s as v}from"./styles.module-26e080db.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./index-491afaa4.js";import"./check-safe-url-87d46dc3.js";import"./internal-fb301464.js";import"./attributes-9cbf7bc1.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./index-298438fd.js";import"./breakpoints-dd8065be.js";import"./index-33af1cce.js";import"./use-container-breakpoints-ef827eb4.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-b7e4292a.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./form-field-context-fcff921e.js";import"./info-link-label-context-b5baf2e5.js";import"./index-5c04613c.js";import"./index-84af6bb2.js";import"./internal-4584f44c.js";import"./join-strings-170e7968.js";import"./internal-dabc270c.js";import"./radio-group-b5da1ad8.js";import"./radio-button-85a94eb4.js";import"./index-388f3fd9.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./external-props-f3440ca2.js";import"./internal-9b1189e6.js";import"./index-aa0176b5.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./index-c328e31d.js";import"./index-1b07c59a.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./utils-06561385.js";import"./internal-1d1af924.js";import"./index-e97f25e5.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./keycode-5e563e63.js";import"./Transition-32ef578e.js";import"./use-highlight-option-7a4dfde2.js";import"./internal-d962d170.js";import"./link-default-variant-context-309e3cd5.js";import"./internal-616d830c.js";import"./index-8f886a48.js";import"./index-7771e8e2.js";import"./use-select-0ff13a42.js";import"./internal-1dcf455f.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./utils-e7109a95.js";import"./index-039e8e61.js";import"./index-91203ee9.js";import"./use-open-state-f9537631.js";import"./feature-flags-b64d770b.js";import"./index-9e4101f5.js";import"./internal-3a10d728.js";import"./index-cef6af85.js";import"./internal-9b98a633.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./global-vars-d161e56c.js";import"./analytics-funnel-6bd8970e.js";import"./internal-971f8eb5.js";import"./collection-label-context-b15b8042.js";import"./styles.css-db2cfaaa.js";import"./internal-90218b53.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";function Zt(){const[p,m]=e.useState("second"),[a,l]=e.useState("#/page1"),[n,s]=e.useState({label:"Option 1",value:"1"});return t.jsx(u,{disableAnimations:!0,gutters:!1,children:t.jsx("div",{className:v["top-nav-dropdown"],children:t.jsx(o,{padding:"l",children:t.jsxs(x,{size:"l",children:[t.jsx(o,{variant:"h1",children:"Top Navigation visual context"}),t.jsx(f,{activeHref:a,onFollow:i=>{i.detail.external||(i.preventDefault(),l(i.detail.href))},items:[{type:"link",text:"Page 1",href:"#/page1"},{type:"link",text:"Page 2",href:"#/page2"},{type:"link",text:"Page 3",href:"#/page3"},{type:"link",text:"Page 4",href:"#/page4"},{type:"divider"},{type:"link",text:"Notifications",href:"#/notifications"},{type:"link",text:"Documentation",href:"https://example.com",external:!0}]}),t.jsx(c,{activeHref:"#playground",anchors:[{text:"Section 1",href:"#playground",level:1},{text:"Section 2",href:"#section2",level:1},{text:"Section 3",href:"#section3",level:1},{text:"Section 4",href:"#section4",level:1}],onFollow:i=>{i.preventDefault()}}),t.jsxs("div",{children:[t.jsx(o,{variant:"awsui-key-label",children:"Label for key"}),t.jsx("div",{children:"Key"})]}),t.jsx(r,{label:"This is Label",children:t.jsx(h,{selectedOption:n,onChange:({detail:i})=>s(i.selectedOption),options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Option 4",value:"4"},{label:"Option 5",value:"5"}]})}),t.jsx(r,{label:"This is Label",children:t.jsx(d,{onChange:({detail:i})=>m(i.value),value:p,items:[{value:"first",label:"First choice"},{value:"second",label:"Second choice"},{value:"third",label:"Third choice"}]})})]})})})})}export{Zt as default};