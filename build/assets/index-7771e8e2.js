import{c as g,_ as z,e as w}from"./index-eb73e870.js";import{R as a}from"./index-2c36b58a.js";import"./ResizeObserver-6fd345a6.js";import{I as v}from"./internal-67a4bdad.js";const l={option:"awsui_option_1p2cx_4qlzt_153",disabled:"awsui_disabled_1p2cx_4qlzt_190",parent:"awsui_parent_1p2cx_4qlzt_193",highlighted:"awsui_highlighted_1p2cx_4qlzt_196",content:"awsui_content_1p2cx_4qlzt_200","label-content":"awsui_label-content_1p2cx_4qlzt_207",label:"awsui_label_1p2cx_4qlzt_207",tag:"awsui_tag_1p2cx_4qlzt_214","label-tag":"awsui_label-tag_1p2cx_4qlzt_215","label-prefix":"awsui_label-prefix_1p2cx_4qlzt_225",tags:"awsui_tags_1p2cx_4qlzt_238",description:"awsui_description_1p2cx_4qlzt_239",selected:"awsui_selected_1p2cx_4qlzt_250",icon:"awsui_icon_1p2cx_4qlzt_264","icon-size-big":"awsui_icon-size-big_1p2cx_4qlzt_271","filtering-match-highlight":"awsui_filtering-match-highlight_1p2cx_4qlzt_275","trigger-variant":"awsui_trigger-variant_1p2cx_4qlzt_290"},O=(t,n)=>{if(n.length>1e5)return{noMatches:[t],matches:null};const i=n.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&"),e=new RegExp(i,"gi"),s=t.split(e),c=t.match(e);return{noMatches:s,matches:c}},u=({str:t})=>t?a.createElement("span",{className:l["filtering-match-highlight"]},t):null;function h({str:t,highlightText:n}){if(!t||!n)return a.createElement("span",null,t);if(t===n)return a.createElement(u,{str:t});const{noMatches:i,matches:e}=O(t,n),s=[];return i.forEach((c,r)=>{s.push(a.createElement("span",{key:`noMatch-${r}`},c)),e&&r<e.length&&s.push(a.createElement(u,{key:`match-${r}`,str:e[r]}))}),a.createElement("span",null,s)}const q={label:"awsui_label_1q5vz_ocied_5"},N=({label:t,prefix:n,highlightText:i,triggerVariant:e})=>a.createElement("span",{className:g(l.label,q.label,e&&l["trigger-variant"])},n&&a.createElement("span",{className:g(l["label-prefix"],e&&l["trigger-variant"])},n," "),a.createElement(h,{str:t,highlightText:i})),T=({labelTag:t,highlightText:n,triggerVariant:i})=>t?a.createElement("span",{className:g(l["label-tag"],i&&l["trigger-variant"])},a.createElement(h,{str:t,highlightText:n})):null,y=({description:t,highlightedOption:n,highlightText:i,selectedOption:e,triggerVariant:s})=>t?a.createElement("span",{className:g(l.description,{[l["trigger-variant"]]:s,[l.highlighted]:n,[l.selected]:e})},a.createElement(h,{str:t,highlightText:i})):null,G=({tags:t,highlightedOption:n,highlightText:i,selectedOption:e,triggerVariant:s})=>t?a.createElement("span",{className:g(l.tags,{[l.highlighted]:n,[l.selected]:e})},t.map((c,r)=>a.createElement("span",{key:r,className:g(l.tag,s&&l["trigger-variant"])},a.createElement(h,{str:c,highlightText:i})))):null,P=({filteringTags:t,highlightedOption:n,highlightText:i,selectedOption:e,triggerVariant:s})=>{if(!i||!t)return null;const c=i.toLowerCase();return a.createElement("span",{className:g(l.tags,{[l.highlighted]:n,[l.selected]:e})},t.map((r,p)=>r.toLowerCase().indexOf(c)!==-1?a.createElement("span",{className:g(l.tag,s&&l["trigger-variant"]),key:p,"aria-disabled":!0},a.createElement(h,{str:r,highlightText:i})):null))},V=t=>!t.name&&!t.url&&!t.svg?null:a.createElement("span",{className:g(l.icon,t.size==="big"&&[l["icon-size-big"]])},a.createElement(v,Object.assign({},t))),I=t=>{var n,i,{option:e,highlightText:s,triggerVariant:c=!1,isGroupOption:r=!1,isGenericGroup:p=!0,highlightedOption:o=!1,selectedOption:_=!1}=t,d=z(t,["option","highlightText","triggerVariant","isGroupOption","isGenericGroup","highlightedOption","selectedOption"]);if(!e)return null;const{disabled:m}=e,b=w(d),E=g(l.option,m&&l.disabled,r&&l.parent,o&&l.highlighted),x=e.__customIcon||a.createElement(V,{name:e.iconName,url:e.iconUrl,svg:e.iconSvg,alt:e.iconAlt,size:e.description||e.tags?"big":"normal"}),f=p?{title:(n=e.label)!==null&&n!==void 0?n:e.value,"aria-disabled":m}:void 0;return a.createElement("span",Object.assign({"data-value":e.value,className:E,lang:e.lang},f,b),x,a.createElement("span",{className:l.content},a.createElement("span",{className:l["label-content"]},a.createElement(N,{label:(i=e.label)!==null&&i!==void 0?i:e.value,prefix:e.__labelPrefix,highlightText:s,triggerVariant:c}),a.createElement(T,{labelTag:e.labelTag,highlightText:s,triggerVariant:c})),a.createElement(y,{description:e.description,highlightedOption:o,selectedOption:_,highlightText:s,triggerVariant:c}),a.createElement(G,{tags:e.tags,highlightedOption:o,selectedOption:_,highlightText:s,triggerVariant:c}),a.createElement(P,{filteringTags:e.filteringTags,highlightedOption:o,selectedOption:_,highlightText:s,triggerVariant:c})))},C=I;export{C as O,q as o};