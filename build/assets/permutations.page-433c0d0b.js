import{j as s}from"./index-2c36b58a.js";import{c as h}from"./clsx-0839fdbe.js";import{T as l}from"./test-bed-fd8bd989.js";import{S as p}from"./screenshot-area-3d9fe848.js";import{G as o}from"./index-31013321.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-35e701d8.js";import"./index-298438fd.js";import"./breakpoints-dd8065be.js";import"./index-33af1cce.js";import"./use-container-breakpoints-ef827eb4.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";function d(i,a){return new Array(i).fill(0).map((r,x)=>a(x))}const c={width:1,height:1},m=[...d(4,i=>({...c,x:i,id:`a-${i}`,y:0})),...d(4,i=>({...c,x:i,id:`b-${i}`,y:1})),...d(4,i=>({...c,x:i,id:`c-${i}`,y:2})),...d(4,i=>({...c,x:i,id:`d-${i}`,y:3}))],n={width:1,height:1},y={width:2,height:1},j={width:4,height:1},g=[{...n,id:"small-1",x:3,y:0},{...n,id:"small-2",x:3,y:1},{...y,id:"medium-2",x:2,y:2},{...j,id:"large-1",x:0,y:3},{...n,id:"small-3",x:0,y:4},{...n,id:"small-4",x:3,y:4}],t={width:1,height:1},w=[{...t,id:"1-1",x:0,y:0},{...t,id:"1-4",x:3,y:0},{...t,id:"2-2",x:1,y:1},{...t,id:"2-3",x:2,y:1},{...t,id:"3-2",x:1,y:2},{...t,id:"3-3",x:2,y:2},{...t,id:"4-1",x:0,y:3},{...t,id:"4-4",x:3,y:3}],_=[{id:"extralarge-1",x:0,width:4,height:1,y:0},{id:"large-1",x:0,width:3,height:3,y:1},{id:"small-1",x:3,width:1,height:3,y:1},{id:"medium-1",x:0,width:2,height:3,y:4},{id:"medium-2",x:2,width:2,height:3,y:4},{id:"small-2",x:0,width:1,height:3,y:7},{id:"medium-3",x:1,width:2,height:3,y:7},{id:"medium-4",x:0,width:2,height:6,y:10}],k="_stone_lppkm_6",u="_black_lppkm_11",f="_white_lppkm_15",b="_block_lppkm_19",T="_pixel_lppkm_24",v="_dummy_lppkm_29",e={stone:k,black:u,white:f,block:b,pixel:T,dummy:v};function J(){return s.jsxs(p,{children:[s.jsx("header",{children:s.jsx("h1",{children:"Grid"})}),s.jsx("main",{children:s.jsxs("section",{children:[s.jsx(l,{children:s.jsx(o,{gridDefinition:[{colspan:4},{colspan:4},{colspan:4}],children:m.map(i=>s.jsx(D,{index:m.indexOf(i)},i.id))})}),s.jsx(l,{children:s.jsx(o,{gridDefinition:[{colspan:4},{colspan:4},{colspan:4}],children:g.map(i=>s.jsx(S,{},i.id))})}),s.jsx(l,{children:s.jsx(o,{gridDefinition:[{colspan:4},{colspan:4},{colspan:4}],children:w.map(i=>s.jsx($,{},i.id))})}),s.jsx(l,{children:s.jsx(o,{gridDefinition:[{colspan:4},{colspan:4},{colspan:4}],children:_.map(i=>s.jsx(B,{},i.id))})})]})})]})}const D=({index:i})=>{const a=Math.floor(i/4);return i%2!==a%2?s.jsx(N,{}):s.jsx(G,{})},N=()=>s.jsx("div",{className:h(e.stone,e.black)}),G=()=>s.jsx("div",{className:h(e.stone,e.white)}),S=()=>s.jsx("div",{className:e.block}),$=()=>s.jsx("div",{className:e.pixel}),B=()=>s.jsx("div",{className:e.dummy});export{J as default};