import{j as i}from"./index-2c36b58a.js";import{c as y}from"./i18n-strings-21c6af81.js";import{f as l}from"./shared-configs-2276a3bf.js";import{C as S}from"./index-8de097ba.js";import{L as N}from"./index-04a17b45.js";import{S as u}from"./index-3af9db76.js";import{P as L}from"./index-7f13c34e.js";import{S as P}from"./index-75e01ea4.js";import{I as E}from"./index-2fb92fbd.js";import{l as g}from"./lodash-9877ffd7.js";import{p as a}from"./pseudo-random-034211df.js";import{i as p,a as I}from"./generate-data-5b70cd57.js";function X(t){return[{id:"name",header:"DB Name",cell:e=>i.jsx(N,{href:`#${e.name}`,children:e.name}),ariaLabel:l("DB Name"),sortingField:"name",minWidth:220,isRowHeader:!0},{id:"role",header:"Role",cell:e=>(e.type==="instance",e.role),ariaLabel:l("Role"),sortingField:"role"},{id:"activity",header:"Activity",cell:e=>e.selectsPerSecond!==null?`${e.selectsPerSecond} Selects/Sec`:"-",ariaLabel:l("Activity"),sortingField:"selectsPerSecond"},{id:"state",header:"State",cell:e=>{const n=(()=>{switch(e.state){case"RUNNING":return i.jsx(u,{type:"success",children:"Running"});case"STOPPED":return i.jsx(u,{type:"stopped",children:"Stopped"});case"TERMINATED":return i.jsx(u,{type:"error",children:"Terminated"})}})();return e.type==="instance"?n:i.jsx(L,{dismissButton:!1,position:"top",size:"small",content:i.jsxs(P,{size:"s",direction:"horizontal",children:[i.jsx(u,{type:"success",children:e.stateGrouped.RUNNING}),i.jsx(u,{type:"stopped",children:e.stateGrouped.STOPPED}),i.jsx(u,{type:"error",children:e.stateGrouped.TERMINATED})]}),children:n})},ariaLabel:l("State"),sortingField:"state"},{id:"engine",header:"Engine",cell:e=>e.engine,ariaLabel:l("Engine"),sortingField:"engine"},{id:"size",header:"Size",cell:e=>e.sizeGrouped||"-",ariaLabel:l("Size"),sortingField:"sizeGrouped"},{id:"region",header:"Region & AZ",cell:e=>e.regionGrouped,ariaLabel:l("Region & AZ"),sortingField:"regionGrouped"},{id:"termination-reason",header:"Termination reason",cell:e=>t.terminationReasons.get(e.name)??(e.terminationReason||"-"),editConfig:{ariaLabel:"Edit termination reason",editIconAriaLabel:"editable",errorIconAriaLabel:"Edit cell error",editingCell:(e,{currentValue:n,setValue:r})=>i.jsx(E,{autoFocus:!0,value:n??t.terminationReasons.get(e.name)??e.terminationReason,onChange:s=>r(s.detail.value)}),disabledReason:e=>{var n;return!t.terminationReasons.has(e.name)&&((n=e.terminationReason)!=null&&n.includes("automatically"))?"Cannot edit automatically added description":""}},minWidth:250}]}function Y({preferences:t,setPreferences:e}){return i.jsx(S,{title:"Preferences",confirmLabel:"Confirm",cancelLabel:"Cancel",onConfirm:({detail:n})=>e(n),preferences:t,contentDisplayPreference:{title:"Column preferences",description:"Customize the columns visibility and order.",options:[{id:"name",label:"DB Name",alwaysVisible:!0},{id:"role",label:"Role"},{id:"activity",label:"Activity"},{id:"state",label:"State"},{id:"engine",label:"Engine"},{id:"size",label:"Size"},{id:"region",label:"Region & AZ"},{id:"termination-reason",label:"Termination reason"},{id:"actions",label:"Actions"}],...y},wrapLinesPreference:{label:"Wrap lines",description:"Wrap lines description"},stickyColumnsPreference:{firstColumns:{title:"First column(s)",description:"Keep the first column(s) visible while horizontally scrolling table content.",options:[{label:"None",value:0},{label:"First column",value:1},{label:"First two columns",value:2}]},lastColumns:{title:"Stick last visible column",description:"Keep the last column visible when tables are wider than the viewport.",options:[{label:"Last column",value:1},{label:"Last two columns",value:2}]}}})}const _=[{key:"path",propertyLabel:"DB Name",groupValuesLabel:"DB Name values",operators:[{operator:"=",match:(t,e)=>Array.isArray(t)&&t.includes(e)},{operator:":",match:(t,e)=>Array.isArray(t)&&t.some(n=>n.includes(e))}]},{key:"role",propertyLabel:"Role",groupValuesLabel:"Role values",operators:["="]},{key:"state",propertyLabel:"State",groupValuesLabel:"State values",operators:["=","!="]},{key:"engine",propertyLabel:"Engine",groupValuesLabel:"Engine values",operators:["=","!=",":"]},{key:"size",propertyLabel:"Size",groupValuesLabel:"Size values",operators:["=","!=",":"]},{key:"region",propertyLabel:"Region",groupValuesLabel:"Region values",operators:["=","!=",":"]},{key:"terminationReason",propertyLabel:"Termination reason",groupValuesLabel:"Termination reason values",operators:[":","!;"]}],T=[];for(let t=0;t<35;t++)T.push(...m(1,[]));function m(t,e,n=null){const r=D(t),s=v(n),o={type:r,name:`${r}-${p()}`,role:A(r,t),engine:(n==null?void 0:n.engine)??w(r),state:s,size:x(r),region:j(r),terminationReason:k(s)},d=[o.name,...e],c=G(r,t,d,o),f=z(r,c),b=M(o.state,c),h=C(r,o.size,c),R=F(r,o.region,c);return[{...o,selectsPerSecond:f,stateGrouped:b,sizeGrouped:h,regionGrouped:R,parentName:(n==null?void 0:n.name)??null,path:d,children:c.length,level:t},...c]}function D(t){const e=a();return t===1?e<.2?"global":e<.8?"cluster":"instance":t===2?e<.6?"cluster":"instance":t===3&&e<.3?"cluster":"instance"}function G(t,e,n,r){if(t==="instance")return[];const s=e===1?1+Math.floor(a()*5):Math.floor(a()*5),o=[];for(let d=0;d<s;d++)o.push(...m(e+1,n,r));return o}function A(t,e){if(t==="global")return"Global";if(t==="cluster")return"Cluster";if(t==="instance"&&e===1)return"Instance";const n=["Reader","Writer","Replica","Replica","Replica","Replica"];return n[Math.floor(a()*n.length)]}function v(t){if((t==null?void 0:t.state)==="STOPPED"||(t==null?void 0:t.state)==="TERMINATED")return a()<.9?"STOPPED":"TERMINATED";const e=["RUNNING","RUNNING","RUNNING","RUNNING","RUNNING","RUNNING","STOPPED","STOPPED","TERMINATED"];return e[Math.floor(a()*e.length)]}function z(t,e){return t==="global"?null:t==="instance"?Math.floor(a()*500):g.sumBy(e,n=>n.selectsPerSecond??0)}function M(t,e){const n={RUNNING:0,STOPPED:0,TERMINATED:0,[t]:1};for(const r of e)n[r.state]++;return n}function C(t,e,n){return t==="global"?"":t==="instance"?e??"":`${n.filter(r=>r.type==="instance").length} instances`}function w(t){if(t==="global")return"Aurora MySQL";const e=["MariaDB","MySQL","Aurora MySQL","Microsoft SQL Server","PostgreSQL","Oracle"];return e[Math.floor(a()*e.length)]}function x(t){return t==="instance"?I():null}function j(t){if(t==="global")return null;const e=["us-east-1","us-east-1a","us-east-1b","us-east-2","us-east-2a","us-east-2b","us-west-1","us-west-1a","us-west-1b","us-west-2","us-west-2a","us-west-2b"];return e[Math.floor(a()*e.length)]}function F(t,e,n){return t==="global"?`${g.uniq(n.map(s=>s.region).filter(Boolean)).length} regions`:e??""}function k(t){return t==="TERMINATED"?`Terminated automatically (CM-${p().slice(0,5).toUpperCase()})`:null}export{T as a,Y as b,X as c,_ as f};