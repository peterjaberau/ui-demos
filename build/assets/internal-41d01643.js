import{_ as u,c as I}from"./index-eb73e870.js";import{R as o}from"./index-2c36b58a.js";import"./ResizeObserver-6fd345a6.js";import{c as N}from"./internal-1d1af924.js";import{b as w}from"./index-491afaa4.js";function r(a,n,e){return a?e??n:n}const t={"variant-normal":"awsui_variant-normal_1a743_1hqwp_9",pressed:"awsui_pressed_1a743_1hqwp_9","variant-icon":"awsui_variant-icon_1a743_1hqwp_15"},q=o.forwardRef((a,n)=>{var{pressed:e,iconName:c,pressedIconName:i,iconSvg:l,pressedIconSvg:m,iconUrl:p,pressedIconUrl:v,variant:s,onChange:d,className:_}=a,f=u(a,["pressed","iconName","pressedIconName","iconSvg","pressedIconSvg","iconUrl","pressedIconUrl","variant","onChange","className"]);return o.createElement(N,Object.assign({className:I(_,t[`variant-${s}`],{[t.pressed]:e}),variant:s,formAction:"none",iconName:r(e,c,i),iconUrl:r(e,p,v),iconSvg:r(e,l,m),"aria-pressed":e,onClick:g=>{g.preventDefault(),w(d,{pressed:!e})}},f,{ref:n}))});export{q as I};