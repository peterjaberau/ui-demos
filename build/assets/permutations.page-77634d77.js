import{j as r}from"./index-2c36b58a.js";import{C as s}from"./index-2f6684c7.js";import{c as a}from"./permutations-935a0919.js";import{P as e}from"./permutations-view-153dda6e.js";import{S as p}from"./screenshot-area-b77c8583.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./external-props-f3440ca2.js";import"./internal-565898aa.js";import"./index-298438fd.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./internal-35e701d8.js";import"./breakpoints-dd8065be.js";import"./index-33af1cce.js";import"./use-container-breakpoints-ef827eb4.js";import"./isObjectLike-2b7e5469.js";import"./isArguments-ec666b3a.js";import"./isArray-5ac9c87d.js";import"./index-75e01ea4.js";import"./internal-90218b53.js";import"./clsx-0839fdbe.js";import"./index-8996ce48.js";function n(o,i){const t=[];for(let m=o;m<i;m++)t.push(m);return t}const l=a([{variant:["default"],borders:["horizontal","vertical","all"],columns:[1,2,3,4]},{variant:["text-grid"],columns:[1,2,3,4]}]);function B(){return r.jsxs(r.Fragment,{children:[r.jsx("h1",{children:"Column layout permutations"}),r.jsx(p,{children:r.jsx(e,{permutations:l,render:o=>r.jsx("div",{children:n(0,(o.columns??0)*2).map(i=>r.jsx("div",{style:{margin:"1rem",border:"1px solid #000000"},children:r.jsx(s,{...o,children:n(0,i+1).map(t=>r.jsxs("span",{children:[o.columns,"-col ",o.variant,", col #",t+1,"."]},t))})},i))})})})]})}export{B as default};