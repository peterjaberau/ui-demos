import{_ as S,g as w,b as R,d as P}from"./index-eb73e870.js";import{R as n}from"./index-2c36b58a.js";import{g as E}from"./attributes-9cbf7bc1.js";import{A as H}from"./analytics-funnel-6bd8970e.js";import{C as y}from"./collection-preferences-metadata-context-6a7caf55.js";import{g as j,I as k,a as A}from"./internal-bd602d7a.js";const I=n.forwardRef((u,D)=>{var i,a,l,{items:r=[],selectedItems:p=[],variant:s="container",contentDensity:m="comfortable",firstIndex:T=1}=u,e=S(u,["items","selectedItems","variant","contentDensity","firstIndex"]);const o=w(e),b=e.visibleColumns&&e.visibleColumns.length<e.columnDefinitions.length||((i=e.columnDisplay)===null||i===void 0?void 0:i.some(t=>!t.visible)),g=!!(!((a=e.stickyColumns)===null||a===void 0)&&a.first)||!!(!((l=e.stickyColumns)===null||l===void 0)&&l.last),h=R("Table",{props:{contentDensity:m,resizableColumns:e.resizableColumns,selectionType:e.selectionType,stickyHeader:e.stickyHeader,stripedRows:e.stripedRows,variant:s,wrapLines:e.wrapLines,enableKeyboardNavigation:e.enableKeyboardNavigation,totalItemsCount:e.totalItemsCount},metadata:{expandableRows:!!e.expandableRows,progressiveLoading:!!e.getLoadingStatus,inlineEdit:e.columnDefinitions.some(t=>!!t.editConfig),disabledInlineEdit:e.columnDefinitions.some(t=>{var d;return!!(!((d=t.editConfig)===null||d===void 0)&&d.disabledReason)}),hasSortableColumns:e.columnDefinitions.some(t=>t.sortingField||t.sortingComparator),hasHiddenColumns:b,hasStickyColumns:g,hasFilterSlot:!!e.filter,hasPaginationSlot:!!e.pagination,itemsCount:r.length,hasInstanceIdentifier:!!(o!=null&&o.instanceIdentifier),usesVisibleColumns:!!e.visibleColumns,usesColumnDisplay:!!e.columnDisplay}},o),c={name:"awsui.Table",label:{root:"self"},properties:{selectionType:e.selectionType||"none",itemsCount:`${r.length}`,selectedItemsCount:`${p.length}`,variant:s}},C=j(e.columnDefinitions,e.sortingColumn);C&&(c.properties.sortingColumnId=C,c.properties.sortingDescending=`${e.sortingDescending||!1}`);const f=Object.assign(Object.assign(Object.assign(Object.assign({items:r,selectedItems:p,variant:s,contentDensity:m,firstIndex:T},e),h),{ref:D}),E({component:c})),v={tableContentDensity:m,tableHasStripedRows:!!e.stripedRows,tableHasHiddenColumns:b,tableHasStickyColumns:g};return s==="borderless"||s==="embedded"?n.createElement(y.Provider,{value:v},n.createElement(k,Object.assign({},f))):n.createElement(y.Provider,{value:v},n.createElement(H,null,n.createElement(A,Object.assign({},f))))});P(I,"Table");const F=I;export{F as T};