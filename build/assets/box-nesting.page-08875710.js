import{j as s}from"./index-2c36b58a.js";import{B as r}from"./index-9085be47.js";import{T as n}from"./index-9930bf10.js";import{c as t}from"./permutations-935a0919.js";import{S as h}from"./screenshot-area-b77c8583.js";import{s as o}from"./styles.module-45801c56.js";import"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import"./internal-fb301464.js";import"./isObjectLike-2b7e5469.js";import"./isArguments-ec666b3a.js";import"./isArray-5ac9c87d.js";import"./clsx-0839fdbe.js";import"./use-container-query-60e26c9e.js";import"./use-resize-observer-2cd5ced9.js";import"./index-8996ce48.js";const l=t([{variant:["div","h1","h2","h3","h4","h5","p","strong","small","code","samp"],color:[void 0,"inherit","text-label","text-body-secondary"]}]),d=t([{fontSize:["body-s","body-m","heading-xs","heading-m","heading-xl","display-l"],variant:["div","h1","h2","h3","h4","h5","p","strong","small","code","samp"]},{fontWeight:["light","normal","bold"],variant:["div","h1","h2","h3","h4","h5","p","strong","small","code","samp"]}]),e=t([{variant:["h1","h2","h3","h4","h5","p"],margin:["n","xxl"]},{variant:["h1","h2","h3","h4","h5","p"],padding:["n","xxl"]},{variant:["small"],display:["none"]}]);function B(){return s.jsxs(h,{disableAnimations:!0,children:[s.jsxs(n,{children:[s.jsx("hr",{}),s.jsx("h1",{children:" TextContent"}),l.map((i,a)=>s.jsx("div",{className:i.color?o[`box-${i.color}`]:o.default,children:s.jsxs(r,{...i,children:["variant: ",i.variant,", color: ",i.color]})},a))]}),s.jsx("hr",{}),s.jsx(n,{children:d.map((i,a)=>s.jsx("div",{children:s.jsxs(r,{...i,children:["variant: ",i.variant,i.fontSize&&`, fontSize: ${i.fontSize}`,i.fontWeight&&`, fontWeight: ${i.fontWeight}`]})},a))}),s.jsx("hr",{}),s.jsx(n,{children:e.map((i,a)=>s.jsx("div",{className:o["permutation-box"],children:s.jsxs(r,{...i,className:o["permutation-box"],children:["variant ",i.variant," -",i.margin?`margin: ${i.margin}`:"",i.padding?`padding: ${i.padding}`:"",i.display?`display: ${i.display}`:""]})},a))})]})}export{B as default};