import{j as r}from"./index-2c36b58a.js";import{I as a}from"./index-1c466a81.js";import{i}from"./generatedIcons-7d7f61be.js";import{S as t}from"./screenshot-area-b77c8583.js";const m="_wrapper_1rx1h_5",p="_invertedIconsScenario_1rx1h_13",d="_header_1rx1h_16",s={wrapper:m,invertedIconsScenario:p,header:d},h=["small","normal","medium","big","large"];function j({variant:e}){const c=e==="inverted"?s.invertedIconsScenario:void 0;return r.jsxs(t,{className:c,children:[r.jsx("h1",{className:s.header,children:e}),h.map(o=>r.jsx("div",{className:s.wrapper,children:Object.keys(i).map(n=>r.jsx(a,{name:n,variant:e,size:o},n))},o))]},e)}export{j as I};