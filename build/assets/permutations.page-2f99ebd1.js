import{j as e}from"./index-2c36b58a.js";import{r as p}from"./range-c9407b89.js";import{F as d}from"./index-6090633a.js";import{H as I}from"./index-7d405f0c.js";import{I as l}from"./index-2fb92fbd.js";import{L as h}from"./index-04a17b45.js";import{P as m}from"./index-958543dd.js";import{T as a}from"./index-6770e832.js";import{l as C,i as W}from"./common-props-8d903cf5.js";import{c as S}from"./permutations-935a0919.js";import{P as s}from"./permutations-view-153dda6e.js";import{S as u}from"./screenshot-area-b77c8583.js";import{A as H}from"./shared-configs-2276a3bf.js";import"./toFinite-7587e969.js";import"./isSymbol-5e4b6858.js";import"./isObjectLike-2b7e5469.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./attributes-9cbf7bc1.js";import"./internal-4ec290ce.js";import"./internal-35e701d8.js";import"./index-298438fd.js";import"./breakpoints-dd8065be.js";import"./index-33af1cce.js";import"./use-container-breakpoints-ef827eb4.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./context-d1fbdd85.js";import"./internal-67a4bdad.js";import"./index-b7e4292a.js";import"./use-funnel-f65631cb.js";import"./node-belongs-c9e88748.js";import"./find-up-until-61244faf.js";import"./selectors-2871d9bb.js";import"./form-field-context-fcff921e.js";import"./info-link-label-context-b5baf2e5.js";import"./index-5c04613c.js";import"./index-84af6bb2.js";import"./internal-4584f44c.js";import"./join-strings-170e7968.js";import"./internal-971f8eb5.js";import"./use-sticky-header-3ae5a14e.js";import"./tokens-4068cfaf.js";import"./index-1b07c59a.js";import"./scrollable-containers-435d5d18.js";import"./global-vars-d161e56c.js";import"./collection-label-context-b15b8042.js";import"./styles.css-db2cfaaa.js";import"./internal-1dcf455f.js";import"./internal-1d1af924.js";import"./single-tab-stop-navigation-context-cd355dd7.js";import"./index-491afaa4.js";import"./index-e97f25e5.js";import"./internal-971a5a29.js";import"./modal-context-069faf31.js";import"./check-safe-url-87d46dc3.js";import"./utils-06561385.js";import"./keycode-5e563e63.js";import"./index-47bb06f7.js";import"./Transition-32ef578e.js";import"./index-842d48b3.js";import"./debounce-acf18bef.js";import"./utils-e7109a95.js";import"./internal-d962d170.js";import"./link-default-variant-context-309e3cd5.js";import"./dismiss-button-daa4f835.js";import"./internal-90218b53.js";import"./use-debounce-search-result-callback-08476abb.js";import"./internal-76dde1ac.js";import"./index-388f3fd9.js";import"./index-91203ee9.js";import"./use-highlight-option-7a4dfde2.js";import"./internal-616d830c.js";import"./index-8f886a48.js";import"./index-7771e8e2.js";import"./index-d8010092.js";import"./use-select-0ff13a42.js";import"./index-039e8e61.js";import"./use-open-state-f9537631.js";import"./internal-8df4efef.js";import"./index-aa0176b5.js";import"./index-c328e31d.js";import"./index-67c045b5.js";import"./index-d426916f.js";import"./internal-ab75ed5f.js";import"./internal-6057655b.js";import"./internal-337363c2.js";import"./reset-contexts-for-modal-28d84991.js";import"./internal-9b1189e6.js";import"./internal-605c76be.js";import"./internal-fb301464.js";import"./analytics-funnel-6bd8970e.js";import"./collection-preferences-metadata-context-6a7caf55.js";import"./internal-bd602d7a.js";import"./internal-9b98a633.js";import"./table-component-context-ebc0966f.js";import"./tools-header-d64e9275.js";import"./radio-button-85a94eb4.js";import"./index-c87ff28c.js";import"./handle-key-f035cd81.js";import"./browser-scrollbar-size-b8d76340.js";import"./index-67fb91d3.js";import"./internal-c7b8c8f7.js";import"./index-97bd0353.js";import"./index-059dd688.js";import"./index-00c12b3f.js";import"./index-ca9f820b.js";import"./parse-date-da8dcbcf.js";import"./format-date-5535d902.js";import"./pad-left-zeros-7128f39a.js";import"./index-4aabf093.js";import"./internal-e0b4c3d3.js";import"./index-4347ca2e.js";import"./index-e3a97ec2.js";import"./use-focus-tracker-83b33065.js";import"./index-4b1bfae3.js";import"./internal-7cee5dec.js";import"./index-885e018e.js";import"./internal-dabc270c.js";import"./radio-group-b5da1ad8.js";import"./index-75e01ea4.js";import"./index-06bc6f36.js";import"./isArguments-ec666b3a.js";import"./isArray-5ac9c87d.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";import"./index-9085be47.js";import"./index-3af9db76.js";import"./i18n-strings-21c6af81.js";function i(t){const o=["One","Two","Three","Four"];return p(t).map(g=>({number:g,text:o[g%o.length]}))}const r=[{id:"sortable1",header:"Sortable prop 1",cell:t=>t.number,sortingField:"number"},{id:"sortable2",header:"Sortable prop 2",cell:t=>t.text,sortingField:"text"},{id:"nonsortable",header:"Value",cell:t=>t.text}],n=[{id:"variable",header:"Property",cell:t=>e.jsx(h,{href:"#",children:t.name}),isRowHeader:!0},{id:"type",header:"Type",cell:t=>t.type},{id:"value",header:"Value",cell:t=>t.value}],c=[{id:"variable",header:"Property",cell:t=>e.jsx(l,{ariaLabel:"vertical align input",readOnly:!0,value:t.number}),verticalAlign:"top"},{id:"type",header:"Type",cell:t=>e.jsx(d,{errorText:`${t.text} error text`,i18nStrings:{errorIconAriaLabel:"Error"},children:e.jsx(l,{ariaLabel:"vertical align error input",readOnly:!0,value:t.text})}),verticalAlign:"top"},{id:"type-2",header:"Value",cell:t=>t.text,verticalAlign:"top"}],y=S([{wrapLines:[!0,!1],columnDefinitions:[n.map(t=>({...t}))],items:[[{name:"Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color",value:"#000000",type:"String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String"},{name:"Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width",value:"100",type:"Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer"},{name:"Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height",value:"200",type:"Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer"}]]},{wrapLines:[!0],columnDefinitions:[n.map((t,o)=>({...t,header:Array(20).fill(0).map(()=>t.header).join(o<n.length-1?" ":"")}))],items:[[{name:"Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color Color",value:"#000000",type:"String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String String"},{name:"Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width Width",value:"100",type:"Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer"},{name:"Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height Height",value:"200",type:"Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer Integer"}]]},{columnDefinitions:[n],items:[[{name:"Color",value:"#000000",type:"String"},{name:"Width",value:"100",type:"Integer"},{name:"Height",value:"200",type:"Integer"}]]},{columnDefinitions:[[{id:"variable",header:"Property",cell:t=>t.name,width:100,minWidth:"300px"},{id:"type",header:"Type",cell:t=>t.type,width:300,minWidth:"100px"},{id:"value",header:"Value",cell:t=>t.value,width:300,minWidth:"300px"},{id:"updatedDate",header:"Updated date",cell:t=>t.updatedDate,width:150},{id:"description",header:"Description",cell:t=>t.description,minWidth:"100px",width:150}]],items:[[{name:"Color",value:"#000000",type:"String",updatedDate:"03.12.2018",description:"First"},{name:"Width",value:"100",type:"Integer",updatedDate:"05.02.2019",description:"Second"},{name:"Height",value:"200",type:"Integer",updatedDate:"01.10.2019",description:"Third"}]]},{columnDefinitions:[r],items:[i(3)],sortingColumn:[r[0],void 0],sortingDisabled:[!0,!1]},{columnDefinitions:[r],items:[i(3)],sortingColumn:[r[0]],sortingDescending:[!0]},{columnDefinitions:[r],items:[i(3)],variant:[void 0,"full-page"],pagination:[void 0,"pagination"],footer:[void 0,"footer"]},{columnDefinitions:[r],header:[e.jsx(I,{variant:"h2",children:"Table Header"})],pagination:["pagination"],filter:[e.jsx(m,{filteringProperties:[{key:"text",operators:["=","!=",":","!:"],propertyLabel:"Text",groupValuesLabel:"Text values"},{key:"number",operators:["=","!=",":","!:"],propertyLabel:"Number",groupValuesLabel:"Number values"}],...C,i18nStrings:W,query:{operation:"or",tokens:[{value:"One",propertyKey:"text",operator:"="},{value:"Two",propertyKey:"text",operator:"="},{value:"Three",propertyKey:"text",operator:"="},{value:1,propertyKey:"number",operator:"="},{value:2,propertyKey:"number",operator:"="},{value:3,propertyKey:"number",operator:"="}]},onChange:()=>{}})],preferences:["preferences"],items:[i(3)]},{columnDefinitions:[c],items:[i(3)],variant:[void 0,"full-page"]},{columnDefinitions:[[{id:"variable",header:"Property",cell:t=>e.jsx(h,{href:"#",children:t.name}),isRowHeader:!0,width:150},{id:"type",header:"Type",cell:t=>t.type,width:150},{id:"value",header:"Value",cell:t=>t.value}]],items:[[{name:"Color",value:"#000000",type:"String"}]],stickyHeader:[!0]}]);function Me(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Table permutations"}),e.jsx(u,{disableAnimations:!0,children:e.jsx(s,{permutations:y,render:t=>e.jsx(a,{...t,ariaLabels:H})})})]})}export{Me as default};