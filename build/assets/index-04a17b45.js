import{_ as c,b as f,d as m}from"./index-eb73e870.js";import{R as i}from"./index-2c36b58a.js";import{g as d}from"./attributes-9cbf7bc1.js";import{I as b}from"./internal-d962d170.js";const s=i.forwardRef((t,l)=>{var{fontSize:r="body-m",color:o="normal",external:a=!1}=t,e=c(t,["fontSize","color","external"]);const p=f("Link",{props:{color:o,external:a,fontSize:r,rel:e.rel,target:e.target,variant:e.variant}}),n={action:"click",detail:{label:{root:"self"},external:`${a}`},component:{name:"awsui.Link",label:{root:"self"},properties:{variant:e.variant||"secondary"}}};return e.href&&(n.detail.href=e.href),i.createElement(b,Object.assign({fontSize:r,color:o,external:a},e,p,{ref:l},d(n)))});m(s,"Link");const v=s;export{v as L};