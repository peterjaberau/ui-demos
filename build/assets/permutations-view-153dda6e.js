import{j as e}from"./index-2c36b58a.js";import{S as f}from"./index-75e01ea4.js";function s(r,t){return typeof t=="function"?t.toString():t&&t.$$typeof?JSON.stringify(t):t}function c({permutations:r,render:t}){return e.jsx(f,{size:"m",children:r.map((i,o)=>{const n=JSON.stringify(i,s);return e.jsx("div",{"data-permutation":n,children:t(i,o)},n)})})}export{c as P};