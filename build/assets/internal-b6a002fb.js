import{c as m,_ as j,e as C}from"./index-eb73e870.js";import{r as _,R as o}from"./index-2c36b58a.js";import{u as G}from"./context-d1fbdd85.js";import{D as K,u as P,t as O,T as H}from"./dismiss-button-daa4f835.js";import{b as J}from"./index-491afaa4.js";import{u as Q}from"./index-33af1cce.js";import{I as F}from"./internal-fb301464.js";import{F as V,b as X}from"./internal-4ec290ce.js";import{i as Y}from"./internal-1d1af924.js";import{u as T}from"./index-5c04613c.js";import{I as Z}from"./internal-90218b53.js";import{I as ee}from"./internal-971a5a29.js";import{a as ie}from"./format-date-time-86457e63.js";const oe=1e3,$=Math.pow(1e3,2),D=Math.pow(1e3,3),q=Math.pow(1e3,4);function te(e){return e<$?`${(e/oe).toFixed(2)} KB`:e<D?`${(e/$).toFixed(2)} MB`:e<q?`${(e/D).toFixed(2)} GB`:`${(e/q).toFixed(2)} TB`}function ae(e){return ie(e)}const t={root:"awsui_root_39ths_t73m5_209","file-loading-overlay":"awsui_file-loading-overlay_39ths_t73m5_241","file-loading-overlay-single-row":"awsui_file-loading-overlay-single-row_39ths_t73m5_246","file-option-name":"awsui_file-option-name_39ths_t73m5_250","file-option-size":"awsui_file-option-size_39ths_t73m5_251","file-option-last-modified":"awsui_file-option-last-modified_39ths_t73m5_252","file-option":"awsui_file-option_39ths_t73m5_250","file-option-thumbnail":"awsui_file-option-thumbnail_39ths_t73m5_265","file-option-thumbnail-image":"awsui_file-option-thumbnail-image_39ths_t73m5_269","file-option-metadata":"awsui_file-option-metadata_39ths_t73m5_282","with-image":"awsui_with-image_39ths_t73m5_285","single-row-loading":"awsui_single-row-loading_39ths_t73m5_288",token:"awsui_token_39ths_t73m5_292","token-grid":"awsui_token-grid_39ths_t73m5_299","token-contains-image":"awsui_token-contains-image_39ths_t73m5_308","token-box":"awsui_token-box_39ths_t73m5_312",horizontal:"awsui_horizontal_39ths_t73m5_331",error:"awsui_error_39ths_t73m5_339","dismiss-button":"awsui_dismiss-button_39ths_t73m5_343",warning:"awsui_warning_39ths_t73m5_349","read-only":"awsui_read-only_39ths_t73m5_359",loading:"awsui_loading_39ths_t73m5_372"};function ne({file:e}){const[c,f]=_.useState("");return _.useEffect(()=>{if(URL.createObjectURL){const l=URL.createObjectURL(e);return f(l),()=>{URL.revokeObjectURL(l)}}},[e]),o.createElement("div",{className:t["file-option-thumbnail"],"aria-hidden":!0},o.createElement("img",{className:t["file-option-thumbnail-image"],alt:e.name,src:c}))}const L={root:"awsui_root_polq8_6ggi7_5","file-option-thumbnail":"awsui_file-option-thumbnail_polq8_6ggi7_6","file-option-name":"awsui_file-option-name_polq8_6ggi7_7","file-option-size":"awsui_file-option-size_polq8_6ggi7_8","file-option-last-modified":"awsui_file-option-last-modified_polq8_6ggi7_9","ellipsis-active":"awsui_ellipsis-active_polq8_6ggi7_10"};function le({file:e,showFileLastModified:c,showFileSize:f,showFileThumbnail:l,i18nStrings:a,onDismiss:i,errorText:d,warningText:g,readOnly:I,loading:s,alignment:E,groupContainsImage:h,isImage:v,index:y}){var u,b;const x=(u=a==null?void 0:a.formatFileSize)!==null&&u!==void 0?u:te,R=(b=a==null?void 0:a.formatFileLastModified)!==null&&b!==void 0?b:ae,M=T("error"),r=T("warning"),n=g&&!d,p=_.useRef(null),S=_.useRef(null),k=_.useRef(null),[U,N]=_.useState(!1),W=z=>{var w;return(w=a==null?void 0:a.removeFileAriaLabel)===null||w===void 0?void 0:w.call(a,z)};function A(){const z=S.current,w=k.current;return z&&w?z.offsetWidth>=w.offsetWidth:!1}const B=!c&&!f&&(!h||h&&!l);return o.createElement("div",{ref:p,className:m(t.token,{[t["token-grid"]]:E==="horizontal",[t["token-contains-image"]]:h&&l}),role:"group","aria-label":e.name,"aria-describedby":d?M:g?r:void 0,"aria-disabled":s,"data-index":y},o.createElement("div",{className:m(t["token-box"],{[t.loading]:s,[t.error]:d,[t.warning]:n,[t.horizontal]:E==="horizontal",[t["read-only"]]:I})},s&&o.createElement("div",{className:m(t["file-loading-overlay"],{[t["file-loading-overlay-single-row"]]:s&&B})},o.createElement(ee,{variant:"disabled",size:"normal"})),o.createElement(F,{className:t["file-option"]},l&&v&&o.createElement(ne,{file:e}),o.createElement("div",{className:m(t["file-option-metadata"],{[t["with-image"]]:l&&v,[t["single-row-loading"]]:s&&B})},o.createElement(Z,{direction:"vertical",size:"xxxs"},o.createElement("div",{onMouseOver:()=>N(!0),onMouseOut:()=>N(!1),ref:k},o.createElement(F,{fontWeight:"normal",className:m(t["file-option-name"],L["file-option-name"],{[L["ellipsis-active"]]:A()})},o.createElement("span",{ref:S},e.name))),f&&e.size?o.createElement(F,{fontSize:"body-s",color:"text-body-secondary",className:m(t["file-option-size"],L["file-option-size"])},x(e.size)):null,c&&e.lastModified?o.createElement(F,{fontSize:"body-s",color:"text-body-secondary",className:m(t["file-option-last-modified"],L["file-option-last-modified"])},R(new Date(e.lastModified))):null))),i&&!I&&o.createElement(K,{dismissLabel:W(y),onDismiss:i})),d&&o.createElement(V,{id:M,errorIconAriaLabel:a==null?void 0:a.errorIconAriaLabel},d),n&&o.createElement(X,{id:r,warningIconAriaLabel:a==null?void 0:a.warningIconAriaLabel},g),U&&A()&&o.createElement(Y,{trackRef:p,trackKey:e.name,value:o.createElement(F,{fontWeight:"normal"},e.name)}))}function be(e){var{items:c,showFileLastModified:f,showFileSize:l,showFileThumbnail:a,i18nStrings:i,onDismiss:d,limit:g,readOnly:I,alignment:s="vertical",__internalRootRef:E}=e,h=j(e,["items","showFileLastModified","showFileSize","showFileThumbnail","i18nStrings","onDismiss","limit","readOnly","alignment","__internalRootRef"]);const v=C(h),[y,u]=_.useState(null),b=P({nextFocusIndex:y,onFocusMoved:n=>{n.focus(),u(null)},listItemSelector:`.${O["list-item"]}`,showMoreSelector:`.${O.toggle}`}),x=Q(E,b),R=n=>n.type.startsWith("image/"),M=c.filter(n=>R(n.file)).length>0,r=G("file-token-group");return o.createElement("div",Object.assign({},v,{ref:x,className:m(v.className,t.root,L.root)}),o.createElement(H,{alignment:s==="horizontal"?"horizontal-grid":s,items:c,renderItem:(n,p)=>o.createElement(le,{file:n.file,showFileLastModified:f,showFileSize:l,showFileThumbnail:a,onDismiss:()=>{J(d,{fileIndex:p}),u(p)},errorText:n.errorText,warningText:n.warningText,i18nStrings:{removeFileAriaLabel:r("i18nStrings.removeFileAriaLabel",i==null?void 0:i.removeFileAriaLabel,S=>k=>S({fileIndex:k+1})),errorIconAriaLabel:r("i18nStrings.errorIconAriaLabel",i==null?void 0:i.errorIconAriaLabel),warningIconAriaLabel:r("i18nStrings.warningIconAriaLabel",i==null?void 0:i.warningIconAriaLabel),formatFileSize:i==null?void 0:i.formatFileSize,formatFileLastModified:i==null?void 0:i.formatFileLastModified},loading:n.loading,readOnly:I,alignment:s,groupContainsImage:M,isImage:R(n.file),index:p}),limit:g,i18nStrings:{limitShowFewer:r("i18nStrings.limitShowFewer",i==null?void 0:i.limitShowFewer),limitShowMore:r("i18nStrings.limitShowMore",i==null?void 0:i.limitShowMore)}}))}export{be as I};