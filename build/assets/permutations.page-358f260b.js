import{j as t}from"./index-2c36b58a.js";import{B as o}from"./index-15a0d4f4.js";import{T as i}from"./index-932f743a.js";import{c as a}from"./permutations-935a0919.js";import{P as r}from"./permutations-view-153dda6e.js";import{S as n}from"./screenshot-area-b77c8583.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./attributes-9cbf7bc1.js";import"./internal-605c76be.js";import"./internal-fb301464.js";import"./internal-1d1af924.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-33af1cce.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./index-5c04613c.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./internal-4584f44c.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./use-resize-observer-2cd5ced9.js";import"./index-47bb06f7.js";import"./scrollable-containers-435d5d18.js";import"./Transition-32ef578e.js";import"./index-aa0176b5.js";import"./index-c328e31d.js";import"./index-1b07c59a.js";import"./breakpoints-dd8065be.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./index-84af6bb2.js";import"./index-039e8e61.js";import"./use-open-state-f9537631.js";import"./internal-9b98a633.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./global-vars-d161e56c.js";import"./index-cef6af85.js";import"./use-container-query-60e26c9e.js";import"./circle-index-ff7c6070.js";import"./handle-key-f035cd81.js";import"./isObjectLike-2b7e5469.js";import"./isArguments-ec666b3a.js";import"./isArray-5ac9c87d.js";import"./index-75e01ea4.js";import"./internal-90218b53.js";import"./index-298438fd.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";const l=a([{activeTabId:["first","second"],variant:["default","container"],tabs:[[{label:"First tab",id:"first",content:"First content",href:"#first"},{label:"Second tab",id:"second",href:"#second"}],[{label:"First tab",id:"first",content:t.jsx("p",{children:"Long text, long enough to wrap. Shoulder tail brisket sausage, shank biltong pork fatback chicken hamburger doner andouille ham hock. Picanha meatball leberkas, turkey andouille boudin tongue frankfurter. Fatback tenderloin brisket cow leberkas. Ball tip short loin brisket andouille. Flank turkey drumstick cow, prosciutto hamburger bresaola pork."})},{label:"Second tab",id:"second",disabled:!0},{label:"Third tab",id:"third",content:"Third tab's content"}]]},{variant:["default","container","stacked"],tabs:[["first","second","third","fourth","fifth","sixth","seventh","eight"].map(e=>({label:`${e} tab`,id:e,content:`${e} content`,href:`#${e}`}))],disableContentPaddings:[!1,!0]},{variant:["default"],tabs:[[{label:t.jsxs(t.Fragment,{children:["First tab ",t.jsx("i",{children:"new"})]}),id:"first",content:"First content",href:"#first"},{label:t.jsxs(t.Fragment,{children:["Second tab ",t.jsx("i",{children:"new"})]}),id:"second",href:"#second"}]]}]),d=a([{activeTabId:["first","second"],variant:["default","container"],fitHeight:[!0],tabs:[[{label:"First tab",id:"first",content:new Array(10).fill("").map((e,s)=>t.jsx("p",{children:"First content"},s))},{label:"Second tab",id:"second",content:t.jsx("div",{style:{blockSize:"100%",display:"flex",alignItems:"flex-end"},children:"Second content"})}]]}]),c=a([{activeTabId:["first","second"],variant:["default","container"],tabs:[[{label:"First tab",id:"first",content:"First content",href:"#first",dismissible:!0,dismissLabel:"Dismiss first tab"},{label:"Second tab",id:"second",href:"#second"}],[{label:"First tab",id:"first",content:t.jsx("p",{children:"Long text, long enough to wrap. Shoulder tail brisket sausage, shank biltong pork fatback chicken hamburger doner andouille ham hock. Picanha meatball leberkas, turkey andouille boudin tongue frankfurter. Fatback tenderloin brisket cow leberkas. Ball tip short loin brisket andouille. Flank turkey drumstick cow, prosciutto hamburger bresaola pork."}),action:t.jsx(o,{variant:"icon",ariaLabel:"Query actions for first tab",items:[{id:"save",text:"Save",disabled:!0},{id:"saveAs",text:"Save as"},{id:"rename",text:"Rename",disabled:!0},{id:"delete",text:"Delete",disabled:!0}],expandToViewport:!0})},{label:"Second tab",id:"second",disabled:!0},{label:"Third tab",id:"third",content:"Third tab's content",action:t.jsx(o,{variant:"icon",ariaLabel:"Query actions for third tab",items:[{id:"save",text:"Save",disabled:!0},{id:"saveAs",text:"Save as"},{id:"rename",text:"Rename",disabled:!0},{id:"delete",text:"Delete",disabled:!0}],expandToViewport:!0}),dismissible:!0,dismissLabel:"Dismiss third tab"},{label:"fourth tab",id:"fourth",dismissible:!0,dismissLabel:"Dismiss fourth tab"}]]},{variant:["default","container","stacked"],tabs:[["first","second","third","fourth","fifth","sixth","seventh","eight"].map(e=>({label:`${e} tab`,id:e,content:`${e} content`,href:`#${e}`}))],disableContentPaddings:[!1,!0]}]),b=a([{activeTabId:["first","second"],variant:["default","container"],fitHeight:[!0],tabs:[[{label:"First tab",id:"first",dismissible:!0,dismissLabel:"Dismiss first tab",content:new Array(10).fill("").map((e,s)=>t.jsx("p",{children:"First content"},s))},{label:"Second tab",id:"second",action:t.jsx(o,{variant:"icon",ariaLabel:"Query actions for second tab",items:[{id:"save",text:"Save",disabled:!0},{id:"saveAs",text:"Save as"},{id:"rename",text:"Rename",disabled:!0},{id:"delete",text:"Delete",disabled:!0}],expandToViewport:!0}),content:t.jsx("div",{style:{blockSize:"100%",display:"flex",alignItems:"flex-end"},children:"Second content"})}]]}]);function ft(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Tabs permutations"}),t.jsxs(n,{disableAnimations:!0,children:[t.jsx(r,{permutations:l,render:e=>t.jsx(i,{...e,activeTabId:e.activeTabId,i18nStrings:{scrollLeftAriaLabel:"Scroll left",scrollRightAriaLabel:"Scroll right"}})}),t.jsx(r,{permutations:d,render:e=>t.jsx("div",{style:{blockSize:"200px"},children:t.jsx(i,{...e,activeTabId:e.activeTabId,i18nStrings:{scrollLeftAriaLabel:"Scroll left",scrollRightAriaLabel:"Scroll right"}})})})]}),t.jsx("h1",{children:"Actionable Tabs permutations"}),t.jsxs(n,{disableAnimations:!0,children:[t.jsx(r,{permutations:c,render:e=>t.jsx(i,{...e,activeTabId:e.activeTabId,i18nStrings:{scrollLeftAriaLabel:"Scroll left",scrollRightAriaLabel:"Scroll right"}})}),t.jsx(r,{permutations:b,render:e=>t.jsx("div",{style:{blockSize:"200px"},children:t.jsx(i,{...e,activeTabId:e.activeTabId,i18nStrings:{scrollLeftAriaLabel:"Scroll left",scrollRightAriaLabel:"Scroll right"}})})})]})]})}export{ft as default};