import{_ as m,b as c,d as y}from"./index-eb73e870.js";import{R as B}from"./index-2c36b58a.js";import{I as x}from"./internal-8b26d024.js";function f(a){var{series:n=[],height:l=500,xScaleType:i="linear",yScaleType:s="linear",stackedBars:r=!1,horizontalBars:t=!1,statusType:h="finished",detailPopoverSize:p="medium",emphasizeBaselineAxis:o=!0}=a,e=m(a,["series","height","xScaleType","yScaleType","stackedBars","horizontalBars","statusType","detailPopoverSize","emphasizeBaselineAxis"]);const d=c("MixedLineBarChart",{props:{detailPopoverSize:p,emphasizeBaselineAxis:o,fitHeight:e.fitHeight,hideFilter:e.hideFilter,hideLegend:e.hideLegend,horizontalBars:t,stackedBars:r,xScaleType:i,yScaleType:s}});return B.createElement(x,Object.assign({series:n,height:l,xScaleType:i,yScaleType:s,stackedBars:r,horizontalBars:t,statusType:h,detailPopoverSize:p,emphasizeBaselineAxis:o},e,d))}y(f,"MixedLineBarChart");export{f as M};