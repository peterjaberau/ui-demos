import{_ as z,e as G,c as s}from"./index-eb73e870.js";import{r as S,R as t}from"./index-2c36b58a.js";import{a as J}from"./attributes-9cbf7bc1.js";import{d as K}from"./use-funnel-f65631cb.js";import{u as Q,C as T,S as W}from"./use-sticky-header-3ae5a14e.js";import{u as X}from"./modal-context-069faf31.js";import{u as k}from"./index-33af1cce.js";import{u as Y}from"./index-1b07c59a.js";import{u as Z}from"./index-5c04613c.js";import{u as ee}from"./index-84af6bb2.js";const _={header:"awsui_header_164jl_1ns0c_5"};const e={root:"awsui_root_14iqq_irvl0_189","fit-height":"awsui_fit-height_14iqq_irvl0_222","with-side-media":"awsui_with-side-media_14iqq_irvl0_227","variant-default":"awsui_variant-default_14iqq_irvl0_230","variant-stacked":"awsui_variant-stacked_14iqq_irvl0_230",refresh:"awsui_refresh_14iqq_irvl0_238","sticky-enabled":"awsui_sticky-enabled_14iqq_irvl0_288","with-top-media":"awsui_with-top-media_14iqq_irvl0_300","content-wrapper":"awsui_content-wrapper_14iqq_irvl0_305","content-wrapper-fit-height":"awsui_content-wrapper-fit-height_14iqq_irvl0_310",media:"awsui_media_14iqq_irvl0_317","media-top":"awsui_media-top_14iqq_irvl0_335","media-side":"awsui_media-side_14iqq_irvl0_340",header:"awsui_header_14iqq_irvl0_346","header-full-page":"awsui_header-full-page_14iqq_irvl0_351","header-with-media":"awsui_header-with-media_14iqq_irvl0_354","header-sticky-disabled":"awsui_header-sticky-disabled_14iqq_irvl0_360","header-sticky-enabled":"awsui_header-sticky-enabled_14iqq_irvl0_364","header-stuck":"awsui_header-stuck_14iqq_irvl0_370","header-variant-cards":"awsui_header-variant-cards_14iqq_irvl0_380","header-dynamic-height":"awsui_header-dynamic-height_14iqq_irvl0_383","with-paddings":"awsui_with-paddings_14iqq_irvl0_389","with-hidden-content":"awsui_with-hidden-content_14iqq_irvl0_398","header-variant-full-page":"awsui_header-variant-full-page_14iqq_irvl0_456","header-cover":"awsui_header-cover_14iqq_irvl0_459",content:"awsui_content_14iqq_irvl0_305","content-fit-height":"awsui_content-fit-height_14iqq_irvl0_487","content-inner":"awsui_content-inner_14iqq_irvl0_493","with-header":"awsui_with-header_14iqq_irvl0_500",footer:"awsui_footer_14iqq_irvl0_504","with-divider":"awsui_with-divider_14iqq_irvl0_508"};const ie={"content-inner":"awsui_content-inner_1mwlm_oyjaq_5"};function ue(d){const{subStepRef:r,funnelSubStepProps:n}=K(),a=X();return t.createElement(te,Object.assign({},d,{__subStepRef:a!=null&&a.isInModal?{current:null}:r,__funnelSubStepProps:a!=null&&a.isInModal?{}:n}))}function te(d){var r,{header:n,footer:a,children:p,variant:o="default",disableHeaderPaddings:R=!1,disableContentPaddings:P=!1,fitHeight:l,media:i,__stickyOffset:C,__mobileStickyOffset:E,__stickyHeader:q=!1,__internalRootRef:H=null,__disableFooterDivider:M=!1,__disableFooterPaddings:N=!1,__hiddenContent:$=!1,__headerRef:x,__fullPage:c=!1,__disableStickyMobile:I=!0,__funnelSubStepProps:O,__subStepRef:j}=d,F=z(d,["header","footer","children","variant","disableHeaderPaddings","disableContentPaddings","fitHeight","media","__stickyOffset","__mobileStickyOffset","__stickyHeader","__internalRootRef","__disableFooterDivider","__disableFooterPaddings","__hiddenContent","__headerRef","__fullPage","__disableStickyMobile","__funnelSubStepProps","__subStepRef"]);const h=Y(),u=ee(),g=G(F),b=S.useRef(null),y=S.useRef(null),{isSticky:f,isStuck:v,stickyStyles:A}=Q(b,y,q,C,E,I,c&&u&&!h),D=Z(),B=o==="full-page",L=k(b,H),U=k(y,x),V=f&&!h,m=!!(i!=null&&i.content),w=(r=i==null?void 0:i.position)!==null&&r!==void 0?r:"top";return t.createElement("div",Object.assign({},g,O,{className:s(g.className,e.root,e[`variant-${o}`],l&&e["fit-height"],m&&(w==="side"?e["with-side-media"]:e["with-top-media"]),V&&[e["sticky-enabled"]],e.refresh),ref:L},J(`.${_.header} h1, .${_.header} h2, .${_.header} h3`)),m&&t.createElement("div",{className:s(e[`media-${w==="side"?"side":"top"}`],e.media),style:w==="top"?{height:(i==null?void 0:i.height)||""}:{width:(i==null?void 0:i.width)||""}},i.content),t.createElement("div",{id:D,ref:j,className:s(e["content-wrapper"],l&&e["content-wrapper-fit-height"])},n&&t.createElement(T,null,t.createElement(W.Provider,{value:{isStuck:v}},t.createElement("div",Object.assign({className:s(e.refresh,e.header,_.header,e[`header-variant-${o}`],{[e["header-sticky-disabled"]]:q&&!f,[e["header-sticky-enabled"]]:f,[e["header-dynamic-height"]]:B,[e["header-stuck"]]:v,[e["with-paddings"]]:!R,[e["with-hidden-content"]]:!p||$,[e["header-with-media"]]:m,[e["header-full-page"]]:c&&u})},A,{ref:U}),v&&!h&&u&&c&&t.createElement("div",{className:e["header-cover"]}),n))),t.createElement("div",{className:s(e.content,l&&e["content-fit-height"])},t.createElement("div",{className:s(e["content-inner"],ie["content-inner"],{[e["with-paddings"]]:!P,[e["with-header"]]:!!n})},p)),a&&t.createElement("div",{className:s(e.footer,{[e["with-divider"]]:!M,[e["with-paddings"]]:!N})},a)))}export{ue as I,te as a};