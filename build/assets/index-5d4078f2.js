import{_ as m,b as y,e as d,c as g,d as f}from"./index-eb73e870.js";import{R as u}from"./index-2c36b58a.js";import{I as x}from"./internal-8b26d024.js";const S={root:"awsui_root_g9v3m_im8v7_5"};function T(s){var{series:o=[],height:p=500,xScaleType:a="linear",yScaleType:i="linear",detailPopoverSize:t="medium",statusType:l="finished",emphasizeBaselineAxis:r=!0}=s,e=m(s,["series","height","xScaleType","yScaleType","detailPopoverSize","statusType","emphasizeBaselineAxis"]);const n=y("LineChart",{props:{detailPopoverSize:t,emphasizeBaselineAxis:r,fitHeight:e.fitHeight,hideFilter:e.hideFilter,hideLegend:e.hideLegend,xScaleType:a,yScaleType:i}}),c=d(e),h=g(c.className,S.root);return u.createElement(x,Object.assign({},e,n,{className:h,height:p,xScaleType:a,yScaleType:i,stackedBars:!1,horizontalBars:!1,series:o,detailPopoverSize:t,statusType:l,emphasizeBaselineAxis:r}))}f(T,"LineChart");export{T as L};