import{R as u,r as x,j as H}from"./index-2c36b58a.js";import{c as ve,_ as Pe,e as Ae,b as Ie,d as Re}from"./index-eb73e870.js";import"./ResizeObserver-6fd345a6.js";import{b as we}from"./index-47bb06f7.js";import{c as X,p as He,b as Oe,C as de,d as _e,e as je,a as Xe,i as Be,k as Ve,f as Ne,u as $e,g as Ge,h as We,j as Ke}from"./index-c9377798.js";import{u as be}from"./index-33af1cce.js";import{a as pe,n as Ee}from"./node-belongs-c9e88748.js";import{x as Ye,y as ze,e as qe,l as Te,H as Ue,V as Ze,u as Je,C as Qe,A as fe,L as et,I as tt,B as it,E as nt,a as rt,c as st,N as ot,b as at,d as lt,g as ct}from"./vertical-marker-d6abf42b.js";import{u as O,A as ht,a as gt}from"./index-c87ff28c.js";import{u as ut}from"./index-5c04613c.js";import{u as dt}from"./context-d1fbdd85.js";import{u as pt}from"./use-resize-observer-2cd5ced9.js";import{K as U}from"./keycode-5e563e63.js";import{c as re}from"./circle-index-ff7c6070.js";import{h as ft}from"./handle-key-f035cd81.js";import{t as mt}from"./throttle-c4fb4198.js";import{b as Ce}from"./index-491afaa4.js";import{u as Le}from"./index-cef6af85.js";import{B as ee}from"./index-9085be47.js";import{B as xt}from"./index-84731336.js";import{C as yt}from"./index-fd526985.js";import{H as St}from"./index-7d405f0c.js";function vt(){var e=Ye,t=null,i=X(0),n=ze,a=X(!0),s=null,r=qe,o=null;function c(l){var p,d,y,T=l.length,m,P=!1,C,A=new Array(T),F=new Array(T);for(s==null&&(o=r(C=He())),p=0;p<=T;++p){if(!(p<T&&a(m=l[p],p,l))===P)if(P=!P)d=p,o.areaStart(),o.lineStart();else{for(o.lineEnd(),o.lineStart(),y=p-1;y>=d;--y)o.point(A[y],F[y]);o.lineEnd(),o.areaEnd()}P&&(A[p]=+e(m,p,l),F[p]=+i(m,p,l),o.point(t?+t(m,p,l):A[p],n?+n(m,p,l):F[p]))}if(C)return o=null,C+""||null}function S(){return Te().defined(a).curve(r).context(s)}return c.x=function(l){return arguments.length?(e=typeof l=="function"?l:X(+l),t=null,c):e},c.x0=function(l){return arguments.length?(e=typeof l=="function"?l:X(+l),c):e},c.x1=function(l){return arguments.length?(t=l==null?null:typeof l=="function"?l:X(+l),c):t},c.y=function(l){return arguments.length?(i=typeof l=="function"?l:X(+l),n=null,c):i},c.y0=function(l){return arguments.length?(i=typeof l=="function"?l:X(+l),c):i},c.y1=function(l){return arguments.length?(n=l==null?null:typeof l=="function"?l:X(+l),c):n},c.lineX0=c.lineY0=function(){return S().x(e).y(i)},c.lineY1=function(){return S().x(e).y(n)},c.lineX1=function(){return S().x(t).y(i)},c.defined=function(l){return arguments.length?(a=typeof l=="function"?l:X(!!l),c):a},c.curve=function(l){return arguments.length?(r=l,s!=null&&(o=r(s)),c):r},c.context=function(l){return arguments.length?(l==null?s=o=null:o=r(s=l),c):s},c}const Z={series:"awsui_series_y1yrh_ypeom_189",root:"awsui_root_y1yrh_ypeom_203","series--highlighted":"awsui_series--highlighted_y1yrh_ypeom_215","series--dimmed":"awsui_series--dimmed_y1yrh_ypeom_219","series--threshold":"awsui_series--threshold_y1yrh_ypeom_223","popover-divider":"awsui_popover-divider_y1yrh_ypeom_228"};function Pt({model:e,highlightDetails:t,dismissAriaLabel:i,footer:n,size:a,onBlur:s}){if(!t)return null;const r={title:t.formattedX,trackRef:e.refs.verticalMarker,trackKey:t.highlightIndex,dismissButton:t.isPopoverPinned,onDismiss:e.handlers.onPopoverDismiss,onMouseLeave:e.handlers.onPopoverLeave,ref:e.refs.popoverRef};return u.createElement(Oe,Object.assign({},r,{container:e.refs.container.current,dismissAriaLabel:i,size:a,onBlur:s}),u.createElement(de,{details:t.seriesDetails}),u.createElement("div",{className:Z["popover-divider"]}),u.createElement(de,{details:t.totalDetails}),n&&u.createElement(_e,null,n))}const bt=x.memo(Et);function Et({data:e,color:t,chartAreaClipPath:i}){const a=vt().x(o=>o.scaled.x).y0(o=>o.scaled.y0).y1(o=>o.scaled.y1)(e)||"",r=Te().x(o=>o.scaled.x).y(o=>o.scaled.y1)(e)||"";return u.createElement(u.Fragment,null,u.createElement("path",{"aria-hidden":!0,fill:t,stroke:t,style:{opacity:.4},clipPath:`url(#${i})`,d:a}),u.createElement("path",{"aria-hidden":!0,stroke:t,clipPath:`url(#${i})`,d:r}))}const Tt=x.memo(Ct);function Ct({data:e,xScale:t,color:i,chartAreaClipPath:n}){const a=t.d3Scale.range(),s=e[0].scaled.y0,r={x1:a[0],x2:a[1],y1:s,y2:s};return u.createElement("line",Object.assign({"aria-hidden":!0,stroke:i,clipPath:`url(#${n})`},r))}const Lt=x.memo(kt);function kt({model:e}){const t=ut("awsui-area-chart__chart-area-"),i=O(e.interactions,r=>r.highlightedX),n=O(e.interactions,r=>r.highlightedSeries),a=!i,s=[];for(let r=e.series.length-1;r>=0;r--)e.computed.plot.sx[r]&&s.push([e.series[r],e.computed.plot.sx[r]||[]]);return u.createElement(u.Fragment,null,u.createElement("defs",{"aria-hidden":"true"},u.createElement("clipPath",{id:t},u.createElement("rect",{x:0,y:0,width:e.width,height:e.height}))),u.createElement("g",{role:"group"},s.map(([r,o])=>{const c=r===n,S=!!n&&!c;return u.createElement("g",{key:r.title,role:"group","aria-label":r.title,className:ve(Z.series,Z[`series--${r.type}`],{[Z["series--highlighted"]]:c,[Z["series--dimmed"]]:a&&S})},r.type==="area"?u.createElement(bt,{data:o,color:e.getInternalSeries(r).color,chartAreaClipPath:t}):u.createElement(Tt,{data:o,xScale:e.computed.xScale,color:e.getInternalSeries(r).color,chartAreaClipPath:t}))})))}const Ft=x.memo(x.forwardRef(Mt));function Mt({model:e,ariaLabel:t},i){const n=O(e.interactions,r=>r.highlightedPoint),a=O(e.interactions,r=>r.isPopoverPinned),s=n?{key:`${n.index.x}:${n.index.s}`,x:n.scaled.x,y:n.scaled.y1,color:e.getInternalSeries(e.series[n.index.s]).color}:null;return u.createElement(Ue,{ref:i,point:s,role:"button",ariaLabel:t,ariaHasPopup:!0,ariaExpanded:a})}function Dt({model:e,xTickFormatter:t,yTickFormatter:i,detailTotalFormatter:n,detailTotalLabel:a}){const s=dt("area-chart"),r=O(e.interactions,v=>v.highlightedX),o=O(e.interactions,v=>v.highlightedPoint),c=O(e.interactions,v=>v.isPopoverPinned);if(!r)return null;const[S]=r,l=S.index.x,p=[...e.computed.plot.xs[l]],d=p.reduce((v,M)=>v+M.value,0),y=t?t(S.x):S.x.toString(),T=o?R(o).title:"",m=o?R(o).formatValue(o.value,o.x):"",P=p.map(v=>{const{title:M,formatValue:D,color:I,markerType:h}=R(v),w=!!o&&v!==o;return{key:M,value:D(v.value,v.x),color:I,markerType:h,isDimmed:w}}),C=[{key:s("i18nStrings.detailTotalLabel",a)||"",value:n?n(d):i?i(d):d}],A=o?P[o.index.s]:null,F=`${T} ${y} ${m}, ${C[0].key} ${C[0].value}`;return{isPopoverPinned:c,highlightIndex:l,formattedX:y,seriesTitle:T,formattedY:m,activeLabel:F,seriesDetails:P,totalDetails:C,pointDetails:A};function R(v){return e.getInternalSeries(e.series[v.index.s])}}const At=x.memo(It);function It({model:e}){const i=(O(e.interactions,n=>n.highlightedX)||[]).map(n=>({key:`${n.index.x}:${n.index.s}`,x:n.scaled.x,y:n.scaled.y1,color:e.getInternalSeries(e.series[n.index.s]).color}));return u.createElement(Ze,{height:e.height,points:i,ref:e.refs.verticalMarker})}const Rt=500,wt=16,me=12,Ht=x.memo(Ot);function Ot({model:e,autoWidth:t,xTitle:i,yTitle:n,detailPopoverSize:a,detailPopoverFooter:s,ariaLabel:r,ariaLabelledby:o,ariaDescription:c,i18nStrings:{xTickFormatter:S,yTickFormatter:l,detailTotalFormatter:p,detailTotalLabel:d,chartAriaRoleDescription:y,xAxisAriaRoleDescription:T,yAxisAriaRoleDescription:m,detailPopoverDismissAriaLabel:P}={},fitHeight:C,hasFilters:A,minHeight:F,xTickFormatter:R=S,yTickFormatter:v=l,detailTotalFormatter:M=p,isRTL:D}){const[I,h]=x.useState(0),[w,J]=je(Rt),$=Math.round(w/2),_=Je({ticks:e.computed.xTicks,scale:e.computed.xScale,tickFormatter:R}),W=Math.max(0,w-I-wt);x.useEffect(()=>{t(W)},[t,W]);const L=Dt({model:e,xTickFormatter:R,yTickFormatter:v,detailTotalFormatter:M,detailTotalLabel:d}),K=x.useRef(null),Y=be(J,e.refs.container),z=e.interactions.get().highlightedPoint!==null,B=O(e.interactions,j=>j.highlightedX),q=x.useMemo(()=>s&&B?s(B[0].x):null,[s,B]);return u.createElement(Qe,{ref:Y,minHeight:F+_.height,fitHeight:!!C,hasFilters:A,leftAxisLabel:u.createElement(fe,{axis:"y",position:"left",title:n}),leftAxisLabelMeasure:u.createElement(et,{scale:e.computed.yScale,ticks:e.computed.yTicks,tickFormatter:v,autoWidth:h,maxLabelsWidth:$}),bottomAxisLabel:u.createElement(fe,{axis:"x",position:"bottom",title:i}),chartPlot:u.createElement(Xe,{ref:e.refs.plot,width:"100%",height:C?`calc(100% - ${_.height}px)`:e.height,offsetBottom:_.height,ariaLabel:r,ariaLabelledby:o,ariaDescription:c,ariaRoleDescription:y,activeElementKey:!(L!=null&&L.isPopoverPinned)&&(L==null?void 0:L.activeLabel),activeElementRef:z?K:e.refs.verticalMarker,activeElementFocusOffset:z?3:{x:8,y:0},isClickable:!(L!=null&&L.isPopoverPinned),onMouseMove:e.handlers.onSVGMouseMove,onMouseOut:e.handlers.onSVGMouseOut,onClick:e.handlers.onSVGMouseDown,onKeyDown:e.handlers.onSVGKeyDown,onApplicationFocus:e.handlers.onApplicationFocus,onApplicationBlur:e.handlers.onApplicationBlur},u.createElement("line",{ref:e.refs.plotMeasure,x1:"0",x2:"0",y1:"0",y2:"100%",stroke:"transparent",strokeWidth:1,style:{pointerEvents:"none"}}),u.createElement(tt,{plotWidth:e.width,plotHeight:e.height,scale:e.computed.yScale,ticks:e.computed.yTicks,tickFormatter:v,title:n,ariaRoleDescription:m,maxLabelsWidth:$}),u.createElement(Lt,{model:e}),u.createElement(it,Object.assign({},_,{width:e.width,height:e.height,scale:e.computed.xScale,title:i,ariaRoleDescription:T,offsetLeft:I+me,offsetRight:me,isRTL:D})),u.createElement(nt,{width:e.width,height:e.height,scale:e.computed.yScale}),u.createElement(At,{model:e}),u.createElement(Ft,{ref:K,model:e,ariaLabel:L==null?void 0:L.activeLabel})),popover:u.createElement(Pt,{model:e,highlightDetails:L,dismissAriaLabel:P,size:a,footer:q,onBlur:e.handlers.onApplicationBlur})})}const _t=x.memo(jt);function jt({model:e,filterLabel:t,filterPlaceholder:i,filterSelectedAriaLabel:n}){const a=e.allSeries.map(s=>{const{title:r,color:o,markerType:c}=e.getInternalSeries(s);return{label:r,color:o,type:c,datum:s}});return u.createElement(Be,{series:a,onChange:e.handlers.onFilterSeries,selectedSeries:e.series,i18nStrings:{filterLabel:t,filterPlaceholder:i,filterSelectedAriaLabel:n}})}const Xt=x.memo(Bt);function Bt({model:e,legendTitle:t,ariaLabel:i,plotContainerRef:n}){const a=x.useMemo(()=>e.series.map(r=>{const{title:o,color:c,markerType:S}=e.getInternalSeries(r);return{label:o,color:c,type:S,datum:r}}),[e]),s=O(e.interactions,r=>r.legendSeries);return u.createElement(Ve,{series:a,highlightedSeries:s,onHighlightChange:e.handlers.onLegendHighlight,legendTitle:t,ariaLabel:i,plotContainerRef:n})}const ke=1e-13;function Vt(e){const t=oe(e);return t.length===0?[]:typeof t[0]=="string"?Wt(t):t.reduce(([i,n],a)=>[a<i?a:i,n<a?a:n],[t[0],t[0]])}function Nt(e,t){let i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;return e.forEach(a=>{a.type==="threshold"&&(i=Math.min(i,a.y),n=Math.max(n,a.y))}),oe(e).forEach((a,s)=>{var r;let o=t==="linear"?0:ke;for(const c of e)c.type==="area"&&(o=o+(((r=c.data[s])===null||r===void 0?void 0:r.y)||0),i=Math.min(i,o),n=Math.max(n,o))}),i===Number.POSITIVE_INFINITY?[]:t==="log"&&i===0&&n>1?[1,n]:[i,n]}function $t(e,t,i){const n=oe(e),a=[],s=[],r=[];return Gt(n,t).forEach(({x:o,scaledX:c},S)=>{let l=i.scaleType==="linear"?0:ke;const p=[];e.forEach((d,y)=>{var T;if(d.type==="threshold"){const m=i.d3Scale(d.y)||0;p.push({x:o,y0:d.y,y1:d.y,scaled:{x:c,y0:m,y1:m},index:{x:S,s:y,y:0},value:0})}else{const m=((T=d.data[S])===null||T===void 0?void 0:T.y)||0,P=l,C=l+m;p.push({x:o,y0:P,y1:C,scaled:{x:c,y0:i.d3Scale(P)||0,y1:i.d3Scale(C)||0},index:{x:S,s:y,y:0},value:m}),l=C}}),p.sort((d,y)=>d.y1-y.y1).forEach((d,y)=>{d.index.y=y,se(a,d.index.x,d.index.y,d),se(s,d.index.x,d.index.s,d),se(r,d.index.s,d.index.x,d)})}),{xy:a,xs:s,sx:r}}function xe(e,t,i){if(e.length===0)throw new Error("Invariant violation: array is empty.");const n=i(e[0])<i(e[e.length-1]),a=c=>n?i(c)<t:i(c)>t,s=c=>Math.abs(i(c)-t);let r=0,o=e.length-1;for(;o-r>1;){const c=Math.floor((r+o)/2);a(e[c])?r=c:o=c}return s(e[r])<s(e[o])?e[r]:e[o]}function oe(e){for(const t of e)if(t.type==="area")return t.data.map(({x:i})=>i);return[]}function Gt(e,t){const i=t.isCategorical()?Math.max(0,t.d3Scale.bandwidth()-1)/2:0,n=[];for(const a of e){const s=t.d3Scale(a);s!==void 0&&n.push({x:a,scaledX:s+i})}return n}function se(e,t,i,n){e[t]||(e[t]=[]),e[t][i]=n}function Wt(e){const t=new Set,i=[];for(const n of e)t.has(n)||(t.add(n),i.push(n));return i}function Kt({isRtl:e,series:t,xDomain:i,yDomain:n,xScaleType:a,yScaleType:s,height:r,width:o}){const c=i?[...i]:Vt(t),S=ct(o),l=new rt(a,c,e?[o,0]:[0,o]),p=l.domain.length>0?st(l,S):[],d=n||Nt(t,s),y=lt(r),T=new ot(s,d,[r,0],n?null:y),m=at(T,y),P=$t(t,l,T);return{xDomain:c,yDomain:d,xScale:l,yScale:T,xTicks:p,yTicks:m,plot:P}}function Yt(e){const t=Ne(e,s=>s.type==="threshold",s=>s.color||null),i=(s,r)=>{const o=s.title,c=t[r],S=s.type==="area"?"hollow-rectangle":"dashed",l=s.type==="threshold"?()=>s.valueFormatter?s.valueFormatter(s.y):s.y:(p,d)=>s.valueFormatter?s.valueFormatter(p,d):p;return{series:s,title:o,color:c,markerType:S,formatValue:l}},n=e.reduce((s,r,o)=>(s.set(r,i(r,o)),s),new Map);return s=>n.get(s)||i(s,e.length)}const ye=Object.freeze({highlightedX:null,highlightedPoint:null,highlightedSeries:null,legendSeries:null,isPopoverPinned:!1});class zt extends ht{constructor(t,i){super(ye),this.series=t,this.plot=i}highlightPoint(t){this.set(i=>Object.assign(Object.assign({},i),{highlightedX:this.plot.xy[t.index.x],highlightedPoint:t,highlightedSeries:this.series[t.index.s],legendSeries:this.series[t.index.s]}))}highlightX(t){this.set(i=>Object.assign(Object.assign({},i),{highlightedX:t,highlightedPoint:null,highlightedSeries:null,legendSeries:null}))}highlightFirstPoint(){this.set(t=>{const i=t.legendSeries||t.highlightedSeries,n=i&&this._getFirstSeriesPoint(i),a=t.highlightedPoint||n||this.plot.sx[0][0];return Object.assign(Object.assign({},t),{highlightedX:this.plot.xy[a.index.x],highlightedPoint:a,highlightedSeries:this.series[a.index.s],legendSeries:this.series[a.index.s]})})}highlightSeries(t){this.set(i=>Object.assign(Object.assign({},i),{highlightedSeries:t,legendSeries:t}))}clearHighlight(){this.set(t=>Object.assign(Object.assign({},t),{highlightedX:null,highlightedPoint:null,highlightedSeries:null}))}clearHighlightedLegend(){this.set(t=>Object.assign(Object.assign({},t),{legendSeries:null}))}clearState(){this.set(()=>ye)}pinPopover(){this.set(t=>Object.assign(Object.assign({},t),{isPopoverPinned:!0}))}unpinPopover(){this.set(t=>Object.assign(Object.assign({},t),{isPopoverPinned:!1}))}togglePopoverPin(){this.set(t=>Object.assign(Object.assign({},t),{isPopoverPinned:!t.isPopoverPinned}))}_getFirstSeriesPoint(t){const i=this.series.indexOf(t),[n]=this.plot.sx[i]||[];return n||null}}const Se=6,qt=25,te=12;function Ut({isRtl:e,fitHeight:t,externalSeries:i,visibleSeries:n,setVisibleSeries:a,highlightedSeries:s,setHighlightedSeries:r,xDomain:o,yDomain:c,xScaleType:S,yScaleType:l,height:p,width:d,popoverRef:y,statusType:T}){var m;const P=x.useRef(null),C=x.useRef(null),A=x.useRef(null),F=x.useRef(null),R=n.length>0,v=(m=$e(()=>F.current,!t,[R,T]))!==null&&m!==void 0?m:p,M=pt(a),D=x.useMemo(()=>{const I=Kt({isRtl:e,series:n,xDomain:o,yDomain:c,xScaleType:S,yScaleType:l,height:v,width:d}),h=new zt(n,I.plot),w=h.series.length>1,J=Yt(i),$=(g,f)=>{var E;if(!((E=y.current)===null||E===void 0)&&E.firstChild){const b=y.current.firstChild.getBoundingClientRect();if(g>b.x-te&&g<b.x+b.width+te&&f>b.y-te&&f<b.y+b.height+te)return!0}return!1},_=mt((g,f)=>{if(h.get().isPopoverPinned||!P.current||h.plot.xy.length===0||$(g,f))return;const E=P.current.svg.getBoundingClientRect(),b=g-E.left,k=f-E.top,V=xe(h.plot.xy,b,G=>G[0].scaled.x),N=xe(V,k,G=>G.scaled.y1);Math.abs(b-N.scaled.x)<Se&&Math.abs(k-N.scaled.y1)<Se?h.highlightPoint(N):h.highlightX(V)},qt),W=({clientX:g,clientY:f})=>_(g,f),L=g=>{_.cancel(),!(h.get().isPopoverPinned||$(g.clientX,g.clientY))&&(pe(P.current.svg,g.relatedTarget)||(h.clearHighlightedLegend(),h.clearHighlight()))},K=g=>{h.togglePopoverPin(),g.preventDefault()},Y=g=>{if(h.get().highlightedPoint)return z(g);if(w){const{highlightedX:f}=h.get();if(f){const E=f[0].index.x,b=re(E+g,[0,h.plot.xy.length-1]);h.highlightX(h.plot.xy[b])}}},z=g=>{const f=h.get().highlightedPoint;if(!f)return;const E=f.index.s,b=re(f.index.x+g,[0,h.plot.xs.length-1]);h.highlightPoint(h.plot.xs[b][E])},B=g=>{const f=h.get().highlightedPoint;if(!f){const{highlightedX:k}=h.get();if(k){const V=k[0].index.x,N=h.plot.xy[V],G=g===1?0:N.length-1;h.highlightPoint(N[G])}return}const E=f.index.x,b=f.index.y;if(w&&(b===0&&g===-1||b===h.plot.xy[E].length-1&&g===1))h.highlightX(h.plot.xy[E]);else{const k=re(b+g,[0,h.plot.xy[E].length-1]);h.highlightPoint(h.plot.xy[E][k])}},q=g=>{const f=g.keyCode;f!==U.up&&f!==U.right&&f!==U.down&&f!==U.left&&f!==U.space&&f!==U.enter||(g.preventDefault(),!h.get().isPopoverPinned&&ft(g,{onBlockEnd:()=>B(-1),onBlockStart:()=>B(1),onInlineStart:()=>Y(-1),onInlineEnd:()=>Y(1),onActivate:()=>h.pinPopover()}))},j=()=>{h.highlightX(h.plot.xy[0])};return{width:d,height:v,series:n,allSeries:i,getInternalSeries:J,computed:I,interactions:h,handlers:{onSVGMouseMove:W,onSVGMouseOut:L,onSVGMouseDown:K,onSVGKeyDown:q,onApplicationFocus:(g,f)=>{if(f==="keyboard"){const{highlightedX:E,highlightedPoint:b,highlightedSeries:k,legendSeries:V}=h.get();w&&!E&&!b&&!k&&!V?j():E||h.highlightFirstPoint()}},onApplicationBlur:g=>{!Ee(C.current,g.relatedTarget)&&!h.get().isPopoverPinned&&h.clearHighlight()},onFilterSeries:g=>{M(g)},onLegendHighlight:g=>{h.highlightSeries(g)},onPopoverDismiss:g=>{h.unpinPopover(),g||setTimeout(()=>{h.get().highlightedPoint||h.get().highlightedX?P.current.focusApplication():(h.clearHighlight(),P.current.focusPlot())},0)},onContainerBlur:()=>{h.clearState()},onDocumentKeyDown:g=>{g.key==="Escape"&&(h.clearHighlight(),h.clearHighlightedLegend())},onPopoverLeave:g=>{pe(P.current.svg,g.relatedTarget)||h.get().isPopoverPinned||(h.clearHighlight(),h.clearHighlightedLegend())}},refs:{plot:P,plotMeasure:F,container:C,verticalMarker:A,popoverRef:y}}},[i,n,o,c,S,l,v,d,M,y,e]);return gt(D.interactions,I=>I.highlightedSeries,r),x.useEffect(()=>{s!==D.interactions.get().highlightedSeries&&D.interactions.highlightSeries(s)},[D,s]),D}function Zt(e,t,i){const[n=[],a]=Le(t,i,e,{componentName:"AreaChart",controlledProp:"visibleSeries",changeHandler:"onFilterChange"}),s=x.useCallback(r=>{a(r),Ce(i,{visibleSeries:r})},[i,a]);return x.useEffect(()=>{const r=n.filter(o=>e.indexOf(o)!==-1);r.length!==n.length&&s(r)},[e,n,s]),[n,s]}function Jt(e,t,i){const[n=null,a]=Le(t,i,null,{componentName:"AreaChart",controlledProp:"highlightedSeries",changeHandler:"onHighlightChange"}),s=x.useCallback(r=>{Ce(i,{highlightedSeries:r})},[i]);return x.useEffect(()=>{t&&e.indexOf(t)===-1&&(a(null),s(null))},[e,t,a,s]),[n,s]}function Qt(e){var{fitHeight:t,height:i,xScaleType:n,yScaleType:a,xDomain:s,yDomain:r,xTickFormatter:o,yTickFormatter:c,detailTotalFormatter:S,highlightedSeries:l,visibleSeries:p,series:d,onFilterChange:y,onHighlightChange:T,i18nStrings:m,ariaLabel:P,ariaLabelledby:C,ariaDescription:A,xTitle:F,yTitle:R,hideFilter:v,additionalFilters:M,hideLegend:D,legendTitle:I,statusType:h,detailPopoverSize:w,detailPopoverFooter:J,empty:$,noMatch:_,errorText:W,loadingText:L,recoveryText:K,onRecoveryClick:Y,__internalRootRef:z=null}=e,B=Pe(e,["fitHeight","height","xScaleType","yScaleType","xDomain","yDomain","xTickFormatter","yTickFormatter","detailTotalFormatter","highlightedSeries","visibleSeries","series","onFilterChange","onHighlightChange","i18nStrings","ariaLabel","ariaLabelledby","ariaDescription","xTitle","yTitle","hideFilter","additionalFilters","hideLegend","legendTitle","statusType","detailPopoverSize","detailPopoverFooter","empty","noMatch","errorText","loadingText","recoveryText","onRecoveryClick","__internalRootRef"]);const q=Ae(B),j=x.useRef(null),ae=x.useRef(null),[le,ce]=x.useState(0),[ie,he]=Zt(d,p,y),[ge,ue]=Jt(d,l,T),ne=j.current?we(j.current):!1,g=Ut({isRtl:ne,fitHeight:t,externalSeries:d,visibleSeries:ie,setVisibleSeries:he,highlightedSeries:ge,setHighlightedSeries:ue,xDomain:s,yDomain:r,xScaleType:n,yScaleType:a,height:i,width:le,popoverRef:ae,statusType:h}),{isEmpty:f,isNoMatch:E,showChart:b}=Ge({externalData:d,visibleData:ie,statusType:h}),k=h==="finished"&&(!f||E)&&(M||!v),V=!D&&!f&&h==="finished",N=!b&&!D,G=!b&&!E&&(!v||M);x.useEffect(()=>{const Q=g.handlers.onDocumentKeyDown;return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[g.handlers.onDocumentKeyDown]);const Me=Q=>{Q.relatedTarget&&!Ee(j.current,Q.relatedTarget)&&g.handlers.onContainerBlur()},De=be(j,z);return u.createElement(We,Object.assign({ref:De},q,{className:ve(q.className,Z.root),fitHeight:!!t,contentMinHeight:i,defaultFilter:k&&!v?u.createElement(_t,{model:g,filterLabel:m.filterLabel,filterPlaceholder:m.filterPlaceholder,filterSelectedAriaLabel:m.filterSelectedAriaLabel}):null,additionalFilters:k?M:null,reserveFilterSpace:!!G,reserveLegendSpace:!!N,chartStatus:u.createElement(Ke,{isEmpty:f,isNoMatch:E,showChart:b,statusType:h,empty:$,noMatch:_,loadingText:L,errorText:W,recoveryText:K,onRecoveryClick:Y}),chart:b?u.createElement(Ht,{model:g,autoWidth:ce,detailPopoverSize:w,detailPopoverFooter:J,xTitle:F,yTitle:R,xTickFormatter:o,yTickFormatter:c,detailTotalFormatter:S,ariaLabel:P,ariaLabelledby:C,ariaDescription:A,i18nStrings:m,fitHeight:t,hasFilters:!!k,minHeight:i,isRTL:ne}):null,legend:V?u.createElement(Xt,{plotContainerRef:j,model:g,legendTitle:I,ariaLabel:m.legendAriaLabel}):null,onBlur:Me}))}function Fe(e){var{height:t=500,xScaleType:i="linear",yScaleType:n="linear",statusType:a="finished",detailPopoverSize:s="medium",i18nStrings:r={}}=e,o=Pe(e,["height","xScaleType","yScaleType","statusType","detailPopoverSize","i18nStrings"]);const c=Ie("AreaChart",{props:{detailPopoverSize:s,hideLegend:o.hideLegend,hideFilter:o.hideFilter,fitHeight:o.fitHeight,xScaleType:i,yScaleType:n}});return u.createElement(Qt,Object.assign({height:t,xScaleType:i,yScaleType:n,statusType:a,detailPopoverSize:s,i18nStrings:r},o,c))}Re(Fe,"AreaChart");function ei(e,t){if(!t)return e.toLowerCase().replace(/ /g,"-")}function Ti({name:e,xTickFormatter:t,yTickFormatter:i,isPermutation:n,...a}){return H.jsx(yt,{header:H.jsx(St,{variant:"h2",children:e}),children:H.jsx(Fe,{id:ei(e,n),height:250,loadingText:"Loading chart data...",errorText:"Error loading chart data.",recoveryText:"Retry",onRecoveryClick:()=>{},empty:H.jsxs(ee,{textAlign:"center",color:"inherit",children:[H.jsx("b",{children:"No data"}),H.jsx(ee,{variant:"p",color:"inherit",children:"There is no data to display"})]}),noMatch:H.jsxs(ee,{textAlign:"center",color:"inherit",children:[H.jsx("b",{children:"No matching data"}),H.jsx(ee,{padding:{bottom:"s"},variant:"p",color:"inherit",children:"There is no data to display"}),H.jsx(xt,{onClick:()=>alert("Not implemented in the example"),children:"Clear filter"})]}),ariaLabel:e,ariaDescription:"Use up/down arrow keys to navigate between series, and left/right arrow keys to navigate within a series.",i18nStrings:{filterLabel:"Filter displayed data",filterPlaceholder:"Filter data",filterSelectedAriaLabel:"(selected)",detailTotalLabel:"Total",detailPopoverDismissAriaLabel:"Dismiss",legendAriaLabel:"Legend",chartAriaRoleDescription:"area chart",xAxisAriaRoleDescription:"x axis",yAxisAriaRoleDescription:"y axis",yTickFormatter:i||ti,xTickFormatter:t},...a})})}function ti(e){return Math.abs(e)>=1e9?(e/1e9).toFixed(1).replace(/\.0$/,"")+"G":Math.abs(e)>=1e6?(e/1e6).toFixed(1).replace(/\.0$/,"")+"M":Math.abs(e)>=1e3?(e/1e3).toFixed(1).replace(/\.0$/,"")+"K":e.toFixed(2)}export{Fe as A,Ti as E,ti as n};