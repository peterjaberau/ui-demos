import{c as M,_ as je,b as $e,e as Ge,d as Ve}from"./index-eb73e870.js";import{r as i,R as n}from"./index-2c36b58a.js";import{u as Ke}from"./use-container-query-60e26c9e.js";import"./ResizeObserver-6fd345a6.js";import{f as le}from"./index-47bb06f7.js";import{u as ae}from"./context-d1fbdd85.js";import{u as qe}from"./form-field-context-fcff921e.js";import{b as z}from"./index-491afaa4.js";import{u as Je}from"./index-e97f25e5.js";import{u as We}from"./index-cef6af85.js";import{u as Qe}from"./index-33af1cce.js";import{u as Xe}from"./index-5c04613c.js";import{u as Ue}from"./index-84af6bb2.js";import{K as P}from"./keycode-5e563e63.js";import{I as te}from"./internal-4584f44c.js";import{I as ne}from"./internal-67a4bdad.js";import{I as Ye}from"./internal-d962d170.js";import{u as oe}from"./use-resize-observer-2cd5ced9.js";import{u as Ze}from"./index-842d48b3.js";import{I as el}from"./internal-971a5a29.js";import{F as ll,I as D}from"./internal-1d1af924.js";import{I as al}from"./internal-fb301464.js";import{I as tl}from"./internal-76dde1ac.js";import{C as nl}from"./internal-565898aa.js";import{I as ol}from"./internal-4ec290ce.js";import{I as rl}from"./internal-5a5bdbe3.js";import{I as il}from"./internal-9b1189e6.js";import{I as sl}from"./internal-90218b53.js";const u={"code-editor-refresh":"awsui_code-editor-refresh_1gl9c_1z0fx_158","code-editor":"awsui_code-editor_1gl9c_1z0fx_158",pane:"awsui_pane_1gl9c_1z0fx_492","pane__close-container":"awsui_pane__close-container_1gl9c_1z0fx_503",pane__list:"awsui_pane__list_1gl9c_1z0fx_508",pane__table:"awsui_pane__table_1gl9c_1z0fx_515",pane__item:"awsui_pane__item_1gl9c_1z0fx_521",pane__cell:"awsui_pane__cell_1gl9c_1z0fx_521","pane__item--highlighted":"awsui_pane__item--highlighted_1gl9c_1z0fx_535",pane__location:"awsui_pane__location_1gl9c_1z0fx_556",pane__description:"awsui_pane__description_1gl9c_1z0fx_556","focus-lock":"awsui_focus-lock_1gl9c_1z0fx_571",editor:"awsui_editor_1gl9c_1z0fx_615","editor-refresh":"awsui_editor-refresh_1gl9c_1z0fx_643","status-bar":"awsui_status-bar_1gl9c_1z0fx_648","status-bar-with-hidden-pane":"awsui_status-bar-with-hidden-pane_1gl9c_1z0fx_657","status-bar__left":"awsui_status-bar__left_1gl9c_1z0fx_661","status-bar__right":"awsui_status-bar__right_1gl9c_1z0fx_668","status-bar__language-mode":"awsui_status-bar__language-mode_1gl9c_1z0fx_672","status-bar__cursor-position":"awsui_status-bar__cursor-position_1gl9c_1z0fx_672","status-bar__cog-button":"awsui_status-bar__cog-button_1gl9c_1z0fx_678","tab-list":"awsui_tab-list_1gl9c_1z0fx_683","tab-button":"awsui_tab-button_1gl9c_1z0fx_688","tab-button--refresh":"awsui_tab-button--refresh_1gl9c_1z0fx_721","tab-button--warnings":"awsui_tab-button--warnings_1gl9c_1z0fx_724","tab-button--active":"awsui_tab-button--active_1gl9c_1z0fx_733","tab-button--disabled":"awsui_tab-button--disabled_1gl9c_1z0fx_749","tab-button--divider":"awsui_tab-button--divider_1gl9c_1z0fx_782","tab-button--errors":"awsui_tab-button--errors_1gl9c_1z0fx_789",count:"awsui_count_1gl9c_1z0fx_798",text:"awsui_text_1gl9c_1z0fx_801","loading-screen":"awsui_loading-screen_1gl9c_1z0fx_823","error-screen":"awsui_error-screen_1gl9c_1z0fx_824"},ul=({children:e,recoveryText:l,onRecoveryClick:t})=>{const o=i.useCallback(()=>z(t),[t]);return n.createElement("div",{className:u["error-screen"]},n.createElement(ne,{name:"status-negative",variant:"error"})," ",e," ",n.createElement(Ye,{variant:"recovery",onFollow:o},l))};function cl(e,l,t){const o=Ze(c=>{z(t,c)},0),r=oe(()=>{const c={value:(e==null?void 0:e.getValue())||""};z(l,c),o(c)});i.useEffect(()=>{if(e)return e.on("change",r),()=>e.off("change",r)},[e,r])}const dl=e=>n.createElement("div",{className:u["loading-screen"]},n.createElement(el,{size:"normal",variant:"normal"})," ",e.children);const N={"resizable-box":"awsui_resizable-box_cufu9_1yze9_149","resizable-box-handle":"awsui_resizable-box-handle_cufu9_1yze9_154","resize-active":"awsui_resize-active_cufu9_1yze9_184"};function re({children:e,height:l,minHeight:t,onResize:o}){const[r,c]=i.useState(null),b=oe(o),a=i.useRef(null),s=d=>{if(d.button!==0||!a.current)return;const f=a.current.getBoundingClientRect().bottom;c(f-d.clientY)};return i.useEffect(()=>{if(r===null||!a.current)return;const d=a.current,f=v=>{const{top:_}=d.getBoundingClientRect(),E=v.clientY;b(Math.max(E+r-_,t))},p=()=>{c(null)};return document.body.classList.add(N["resize-active"]),document.addEventListener("mousemove",f),document.addEventListener("mouseup",p),()=>{document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",p),document.body.classList.remove(N["resize-active"])}},[r,t,b]),n.createElement("div",{ref:a,className:N["resizable-box"],style:{height:l}},e,n.createElement("span",{className:N["resizable-box-handle"],onMouseDown:s}))}const bl=[{value:"abap",label:"ABAP"},{value:"abc",label:"ABC"},{value:"actionscript",label:"ActionScript"},{value:"ada",label:"ADA"},{value:"alda",label:"Alda"},{value:"apache_conf",label:"Apache Conf"},{value:"apex",label:"Apex"},{value:"aql",label:"AQL"},{value:"asciidoc",label:"AsciiDoc"},{value:"asl",label:"ASL"},{value:"assembly_x86",label:"Assembly x86"},{value:"autohotkey",label:"AutoHotkey/AutoIt"},{value:"batchfile",label:"BatchFile"},{value:"c_cpp",label:"C/C++"},{value:"c9search",label:"C9Search"},{value:"cirru",label:"Cirru"},{value:"clojure",label:"Clojure"},{value:"cobol",label:"Cobol"},{value:"coffee",label:"CoffeeScript"},{value:"coldfusion",label:"ColdFusion"},{value:"crystal",label:"Crystal"},{value:"csharp",label:"C#"},{value:"csound_document",label:"Csound Document"},{value:"csound_orchestra",label:"Csound"},{value:"csound_score",label:"Csound Score"},{value:"css",label:"CSS"},{value:"curly",label:"Curly"},{value:"d",label:"D"},{value:"dart",label:"Dart"},{value:"diff",label:"Diff"},{value:"django",label:"Django"},{value:"dockerfile",label:"Dockerfile"},{value:"dot",label:"Dot"},{value:"drools",label:"Drools"},{value:"edifact",label:"Edifact"},{value:"eiffel",label:"Eiffel"},{value:"ejs",label:"EJS"},{value:"elixir",label:"Elixir"},{value:"elm",label:"Elm"},{value:"erlang",label:"Erlang"},{value:"forth",label:"Forth"},{value:"fortran",label:"Fortran"},{value:"fsharp",label:"FSharp"},{value:"fsl",label:"FSL"},{value:"ftl",label:"FreeMarker"},{value:"gcode",label:"Gcode"},{value:"gherkin",label:"Gherkin"},{value:"gitignore",label:"Gitignore"},{value:"glsl",label:"Glsl"},{value:"gobstones",label:"Gobstones"},{value:"golang",label:"Go"},{value:"graphqlschema",label:"GraphQLSchema"},{value:"groovy",label:"Groovy"},{value:"haml",label:"HAML"},{value:"handlebars",label:"Handlebars"},{value:"haskell",label:"Haskell"},{value:"haskell_cabal",label:"Haskell Cabal"},{value:"haxe",label:"haXe"},{value:"hjson",label:"Hjson"},{value:"html",label:"HTML"},{value:"html_elixir",label:"HTML (Elixir)"},{value:"html_ruby",label:"HTML (Ruby)"},{value:"ini",label:"INI"},{value:"io",label:"Io"},{value:"jack",label:"Jack"},{value:"jade",label:"Jade"},{value:"java",label:"Java"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"json5",label:"JSON5"},{value:"jsoniq",label:"JSONiq"},{value:"jsp",label:"JSP"},{value:"jssm",label:"JSSM"},{value:"jsx",label:"JSX"},{value:"julia",label:"Julia"},{value:"kotlin",label:"Kotlin"},{value:"latex",label:"LaTeX"},{value:"less",label:"LESS"},{value:"liquid",label:"Liquid"},{value:"lisp",label:"Lisp"},{value:"livescript",label:"LiveScript"},{value:"logiql",label:"LogiQL"},{value:"lsl",label:"LSL"},{value:"lua",label:"Lua"},{value:"luapage",label:"LuaPage"},{value:"lucene",label:"Lucene"},{value:"makefile",label:"Makefile"},{value:"markdown",label:"Markdown"},{value:"mask",label:"Mask"},{value:"matlab",label:"MATLAB"},{value:"maze",label:"Maze"},{value:"mediawiki",label:"MediaWiki"},{value:"mel",label:"MEL"},{value:"mixal",label:"MIXAL"},{value:"mushcode",label:"MUSHCode"},{value:"mysql",label:"MySQL"},{value:"nginx",label:"Nginx"},{value:"nim",label:"Nim"},{value:"nix",label:"Nix"},{value:"nsis",label:"NSIS"},{value:"nunjucks",label:"Nunjucks"},{value:"objectivec",label:"Objective-C"},{value:"ocaml",label:"OCaml"},{value:"pascal",label:"Pascal"},{value:"perl",label:"Perl"},{value:"perl6",label:"Perl 6"},{value:"pgsql",label:"pgSQL"},{value:"php",label:"PHP"},{value:"php_laravel_blade",label:"PHP (Blade Template)"},{value:"pig",label:"Pig"},{value:"powershell",label:"Powershell"},{value:"praat",label:"Praat"},{value:"prisma",label:"Prisma"},{value:"prolog",label:"Prolog"},{value:"properties",label:"Properties"},{value:"protobuf",label:"Protobuf"},{value:"puppet",label:"Puppet"},{value:"python",label:"Python"},{value:"qml",label:"QML"},{value:"r",label:"R"},{value:"razor",label:"Razor"},{value:"rdoc",label:"RDoc"},{value:"red",label:"Red"},{value:"rhtml",label:"RHTML"},{value:"rst",label:"RST"},{value:"ruby",label:"Ruby"},{value:"rust",label:"Rust"},{value:"sass",label:"SASS"},{value:"scad",label:"SCAD"},{value:"scala",label:"Scala"},{value:"scheme",label:"Scheme"},{value:"scss",label:"SCSS"},{value:"sh",label:"SH"},{value:"sjs",label:"SJS"},{value:"slim",label:"Slim"},{value:"smarty",label:"Smarty"},{value:"snippets",label:"snippets"},{value:"soy_template",label:"Soy Template"},{value:"space",label:"Space"},{value:"sql",label:"SQL"},{value:"sqlserver",label:"SQLServer"},{value:"stylus",label:"Stylus"},{value:"svg",label:"SVG"},{value:"swift",label:"Swift"},{value:"tcl",label:"Tcl"},{value:"terraform",label:"Terraform"},{value:"tex",label:"Tex"},{value:"text",label:"Text"},{value:"textile",label:"Textile"},{value:"toml",label:"Toml"},{value:"tsx",label:"TSX"},{value:"twig",label:"Twig"},{value:"typescript",label:"TypeScript"},{value:"vala",label:"Vala"},{value:"vbscript",label:"VBScript"},{value:"velocity",label:"Velocity"},{value:"verilog",label:"Verilog"},{value:"vhdl",label:"VHDL"},{value:"visualforce",label:"Visualforce"},{value:"wollok",label:"Wollok"},{value:"xml",label:"XML"},{value:"xquery",label:"XQuery"},{value:"yaml",label:"YAML"},{value:"zeek",label:"Zeek"}],O=[{value:"chrome",label:"Chrome"},{value:"clouds",label:"Clouds"},{value:"crimson_editor",label:"Crimson Editor"},{value:"dawn",label:"Dawn"},{value:"dreamweaver",label:"Dreamweaver"},{value:"eclipse",label:"Eclipse"},{value:"github",label:"GitHub"},{value:"iplastic",label:"IPlastic"},{value:"solarized_light",label:"Solarized Light"},{value:"textmate",label:"TextMate"},{value:"tomorrow",label:"Tomorrow"},{value:"xcode",label:"Xcode"},{value:"kuroir",label:"Kuroir"},{value:"katzenmilch",label:"KatzenMilch"},{value:"sqlserver",label:"SQL Server"},{value:"cloud_editor",label:"CloudEditor"}],j=[{value:"ambiance",label:"Ambiance"},{value:"chaos",label:"Chaos"},{value:"clouds_midnight",label:"Clouds Midnight"},{value:"dracula",label:"Dracula"},{value:"cobalt",label:"Cobalt"},{value:"gruvbox",label:"Gruvbox"},{value:"gob",label:"Green on Black"},{value:"idle_fingers",label:"idle Fingers"},{value:"kr_theme",label:"krTheme"},{value:"merbivore",label:"Merbivore"},{value:"merbivore_soft",label:"Merbivore Soft"},{value:"mono_industrial",label:"Mono Industrial"},{value:"monokai",label:"Monokai"},{value:"nord_dark",label:"Nord Dark"},{value:"pastel_on_dark",label:"Pastel on dark"},{value:"solarized_dark",label:"Solarized Dark"},{value:"terminal",label:"Terminal"},{value:"tomorrow_night",label:"Tomorrow Night"},{value:"tomorrow_night_blue",label:"Tomorrow Night Blue"},{value:"tomorrow_night_bright",label:"Tomorrow Night Bright"},{value:"tomorrow_night_eighties",label:"Tomorrow Night 80s"},{value:"twilight",label:"Twilight"},{value:"vibrant_ink",label:"Vibrant Ink"},{value:"cloud_editor_dark",label:"CloudEditor Dark"}],$="cloud_editor",G="cloud_editor_dark",vl="dawn",ml="tomorrow_night_bright",fl={light:O.map(e=>e.value).filter(e=>e!==$),dark:j.map(e=>e.value).filter(e=>e!==G)};function gl(e,l){var t;const o=(t=e==null?void 0:e.version)===null||t===void 0?void 0:t.split(".").map(r=>{const c=parseInt(r);return Number.isNaN(c)?r:c});return!!o&&typeof o[0]=="number"&&o[0]>=l[0]&&typeof o[1]=="number"&&o[1]>=l[1]&&typeof o[2]=="number"&&o[2]>=l[2]}function ie(e){return gl(e,[1,23,0])}function _l(e){return Object.assign({behavioursEnabled:!0},ie(e)?{enableKeyboardAccessibility:!0}:{})}function se(e,l){return e==="light"?l!=null&&l.light.some(t=>t===$)?$:vl:l!=null&&l.dark.some(t=>t===G)?G:ml}function ue(e){return`ace/theme/${e}`}function hl(e){var l;return((l=bl.filter(t=>t.value===e)[0])===null||l===void 0?void 0:l.label)||e}function V({paneId:e,paneStatus:l}){return e?`${e}-button-${l}`:void 0}const pl=31,El=12,Y=3*pl+2*El,Sl=({id:e,paneStatus:l,visible:t,annotations:o,highlighted:r,onClose:c,onAnnotationClick:b,onAnnotationClear:a,cursorPositionLabel:s,closeButtonAriaLabel:d})=>{const[f,p]=i.useState(Y),v=i.useRef(null);i.useEffect(()=>{var m;if(!r)return;const{row:w,column:L}=r,T=o.indexOf(o.filter(A=>A.row===w&&A.column===L)[0]);if(T>-1){const A=(m=v.current)===null||m===void 0?void 0:m.children[T];A==null||A.focus()}},[r,o]);const _=m=>{b(m)},E=(m,w)=>{(w.keyCode===P.enter||w.keyCode===P.space)&&(w.preventDefault(),b(m))},x=m=>{m.keyCode===P.escape&&(m.preventDefault(),c())},k=V({paneId:e,paneStatus:l});return t?n.createElement("div",{id:e,className:u.pane,onKeyDown:x,role:"tabpanel","aria-labelledby":k},n.createElement(re,{height:f,minHeight:Y,onResize:m=>p(m)},n.createElement(ll,{className:u["focus-lock"],autoFocus:!0,restoreFocus:!0},n.createElement("div",{className:u.pane__list,tabIndex:-1},n.createElement("table",{className:u.pane__table,role:"presentation"},n.createElement("colgroup",null,n.createElement("col",{style:{width:1}}),n.createElement("col",{style:{width:"auto"}})),n.createElement("tbody",{ref:v},o.map((m,w)=>{var L;return n.createElement("tr",{key:w,role:"link",className:u.pane__item,onMouseOver:a,onClick:_.bind(null,m),onKeyDown:E.bind(null,m),tabIndex:0},n.createElement("td",{className:M(u.pane__location,u.pane__cell),tabIndex:-1},(L=s==null?void 0:s((m.row||0)+1,(m.column||0)+1))!==null&&L!==void 0?L:""),n.createElement("td",{className:M(u.pane__description,u.pane__cell),tabIndex:-1},m.text))})))),n.createElement("div",{className:u["pane__close-container"]},n.createElement(D,{formAction:"none",variant:"icon",iconName:"close",onClick:c,ariaLabel:d}))))):null};function Z(e,l){return e.filter(t=>l.indexOf(t.value)>-1)}const wl=e=>{var l,t,o,r;const[c,b]=i.useState((t=(l=e.preferences)===null||l===void 0?void 0:l.wrapLines)!==null&&t!==void 0?t:!0),[a,s]=i.useState((r=(o=e.preferences)===null||o===void 0?void 0:o.theme)!==null&&r!==void 0?r:e.defaultTheme),d=[{label:e.i18nStrings.lightThemes,options:Z(O,e.themes.light)},{label:e.i18nStrings.darkThemes,options:Z(j,e.themes.dark)}],[f,p]=i.useState(()=>[...O,...j].filter(_=>_.value===a)[0]),v=_=>{s(_.detail.selectedOption.value),p(_.detail.selectedOption)};return n.createElement(rl,{size:"medium",visible:!0,getModalRoot:e.getModalRoot,removeModalRoot:e.removeModalRoot,onDismiss:e.onDismiss,header:e.i18nStrings.header,closeAriaLabel:e.i18nStrings.cancel,footer:n.createElement(al,{float:"right"},n.createElement(sl,{direction:"horizontal",size:"xs"},n.createElement(D,{onClick:e.onDismiss},e.i18nStrings.cancel),n.createElement(D,{onClick:()=>e.onConfirm({wrapLines:c,theme:a}),variant:"primary"},e.i18nStrings.confirm)))},n.createElement(nl,{columns:2,variant:"text-grid"},n.createElement("div",null,n.createElement(tl,{checked:c,onChange:_=>b(_.detail.checked)},e.i18nStrings.wrapLines)),n.createElement("div",null,n.createElement(ol,{label:e.i18nStrings.theme},n.createElement(il,{selectedOption:f,onChange:v,options:d,filteringType:"auto",filteringAriaLabel:e.i18nStrings.themeFilteringAriaLabel,filteringClearAriaLabel:e.i18nStrings.themeFilteringClearAriaLabel,filteringPlaceholder:e.i18nStrings.themeFilteringPlaceholder})))))};function Ll(e,l,t,o,r,c){Cl(e,l),l.session.selection.on("changeCursor",()=>{o(l.getCursorPosition())}),l.session.on("changeAnnotation",()=>{const s=l.session.getAnnotations(),d=s.filter(f=>f.type!=="info");s.length!==d.length&&l.session.setAnnotations(d),t(d)});const b=s=>{typeof s.row=="number"&&l.gotoLine(s.row+1,s.column||0,!1)},a=s=>{const d=l.session.getAnnotations().filter(p=>p.row===s&&p.type!=="info"),f=d.filter(p=>p.type==="error");f.length>0?(r(f[0]),c("error"),b(f[0])):d.length>0?(r(d[0]),c("warning"),b(d[0])):(r(void 0),c("hidden"),l.gotoLine(s+1,0,!1))};l.on("gutterclick",s=>{const{row:d}=s.getDocumentPosition();a(d)}),l.on("gutterkeydown",s=>{if(s.isInAnnotationLane()&&(s.getKey()==="space"||s.getKey()==="return")){const d=s.getRow();a(d)}}),l.on("change",()=>{l.getValue().length===0&&l.session.clearAnnotations()})}function Cl(e,l){e.config.loadModule("ace/ext/language_tools",function(){l.setOptions({displayIndentGuides:!1,enableSnippets:!0,enableBasicAutocompletion:!0})}),l.setAutoScrollEditorIntoView(!0),ie(e)||l.commands.addCommand({name:"exitCodeEditor",bindKey:"Esc",exec:()=>{l.container.focus()}}),l.on("focus",()=>{l.textInput.getElement().setAttribute("tabindex",0)}),l.on("blur",()=>{l.textInput.getElement().setAttribute("tabindex",-1)}),l.textInput.getElement().setAttribute("tabindex",-1),l.commands.removeCommand("showSettingsMenu",!1),l.on("guttermousedown",t=>{t.stop()}),l.setHighlightActiveLine(!1),l.$updateHighlightActiveLine=function(){const t=this.getSession();let o;if(this.$highlightActiveLine&&((this.$selectionStyle!=="line"||!this.selection.isMultiLine())&&(o=this.getCursorPosition()),this.renderer.$maxLines&&this.session.getLength()===1&&!(this.renderer.$minLines>1)&&(o=!1)),t.$highlightLineMarker&&!o)t.removeMarker(t.$highlightLineMarker.id),t.$highlightLineMarker=null;else if(!t.$highlightLineMarker&&o){const r=new e.Range(o.row,0,o.row,1/0);r.id=t.addMarker(r,"ace_active-line","fullLine"),t.$highlightLineMarker=r}else o&&(t.$highlightLineMarker.start.row=o.row,t.$highlightLineMarker.end.row=o.row,t.$highlightLineMarker.start.column=0,t._signal("changeBackMarker"))},l.setHighlightActiveLine(!0),l.on("showGutterTooltip",t=>{t.hide()})}const ee=n.forwardRef(({active:e,disabled:l,iconName:t,onClick:o,onFocus:r,onBlur:c,tabIndex:b,ariaHidden:a,ariaLabel:s,paneId:d,isRefresh:f,count:p,text:v,className:_,id:E},x)=>n.createElement("button",{className:M([u["tab-button"],_],{[u["tab-button--active"]]:e,[u["tab-button--disabled"]]:l,[u["tab-button--refresh"]]:f}),id:E,type:"button",onClick:o,onFocus:r,onBlur:c,disabled:l,ref:x,tabIndex:b,role:"tab","aria-selected":e,"aria-controls":d,"aria-hidden":a,"aria-label":s},n.createElement(ne,{name:t}),n.createElement("span",{className:u.count},p),n.createElement("span",{className:u.text},v)));function xl({languageLabel:e,cursorPosition:l,paneStatus:t,onErrorPaneToggle:o,onWarningPaneToggle:r,onTabFocus:c,onTabBlur:b,errorsTabRef:a,warningsTabRef:s,isTabFocused:d,paneId:f,onPreferencesOpen:p,i18nStrings:v,errorCount:_,warningCount:E,isRefresh:x}){const k=ae("code-editor"),m=`${k("i18nStrings.errorsTab",v==null?void 0:v.errorsTab)}: ${_}`,w=`${k("i18nStrings.warningsTab",v==null?void 0:v.warningsTab)}: ${E}`,L=V({paneId:f,paneStatus:"error"}),T=V({paneId:f,paneStatus:"warning"});return n.createElement("div",{className:M(u["status-bar"],{[u["status-bar-with-hidden-pane"]]:t==="hidden"})},n.createElement("div",{className:M(u["status-bar__left"])},n.createElement("span",{className:u["status-bar__language-mode"]},e),n.createElement("span",{className:u["status-bar__cursor-position"]},l),n.createElement("div",{className:u["tab-list"],role:"tablist"},n.createElement(ee,{id:L,count:_,text:m,className:u["tab-button--errors"],iconName:"status-negative",disabled:_===0,active:t==="error",onClick:o,onFocus:c,onBlur:b,ref:a,ariaLabel:m,paneId:f,isRefresh:x}),n.createElement("span",{className:u["tab-button--divider"]}),n.createElement(ee,{id:T,count:E,text:w,className:u["tab-button--warnings"],iconName:"status-warning",disabled:E===0,active:t==="warning",onClick:r,onFocus:c,onBlur:b,ref:s,tabIndex:t==="error"&&d?-1:void 0,ariaHidden:t==="error"&&d?!0:void 0,ariaLabel:w,paneId:f,isRefresh:x})),n.createElement(te,{assertive:!0,hidden:!0,tagName:"span"},n.createElement("span",null,m," "),n.createElement("span",null,w))),n.createElement("div",{className:u["status-bar__right"]},n.createElement("div",{className:u["status-bar__cog-button"]},n.createElement(D,{formAction:"none",variant:"icon",iconName:"settings",iconAlt:"Settings",ariaLabel:k("i18nStrings.preferencesButtonAriaLabel",v==null?void 0:v.preferencesButtonAriaLabel),onClick:p,__nativeAttributes:{tabIndex:t!=="hidden"&&d?-1:void 0,"aria-hidden":t!=="hidden"&&d?!0:void 0}}))))}function Al(e,l,t){const o=i.useRef(null),[r,c]=i.useState(null),[b]=i.useState(ue(se(le(o),l)));return i.useEffect(()=>{const a=o.current;if(!e||!a)return;const s=_l(e);c(e.edit(a,Object.assign(Object.assign({},s),{theme:b})))},[e,t,b]),{editorRef:o,editor:r}}function kl(e,{controlId:l,ariaLabel:t,ariaLabelledby:o,ariaDescribedby:r}){i.useEffect(()=>{if(!e)return;const{textarea:c}=e.renderer;if(!c)return;const b=(a,s)=>{s?c.setAttribute(a,s):c.removeAttribute(a)};b("id",l),b("aria-labelledby",o),b("aria-describedby",r),typeof e.getOption("textInputAriaLabel")=="string"?e.setOption("textInputAriaLabel",t??""):b("aria-label",t)},[t,r,o,l,e])}function yl(e,{width:l,height:t}){return i.useEffect(()=>{e==null||e.resize()},[e,l,t]),{onResize:i.useCallback(()=>{e==null||e.resize()},[e])}}function Ml(e,l){i.useEffect(()=>{if(!e||l===e.getValue())return;const t=e.session.selection.toJSON();e.setValue(l,-1),e.session.selection.fromJSON(t)},[e,l])}function Tl(e,l){i.useEffect(()=>{e==null||e.session.setMode(`ace/mode/${l}`)},[e,l])}function zl(e,l){i.useEffect(()=>{e==null||e.session.setUseWrapMode(l??!0)},[e,l])}function Il(e,l){i.useEffect(()=>{e==null||e.setTheme(ue(l))},[e,l])}const ce=i.forwardRef((e,l)=>{var t,o;const{ace:r,value:c,language:b,i18nStrings:a,editorContentHeight:s,onEditorContentResize:d,ariaLabel:f,languageLabel:p,preferences:v,loading:_,themes:E,getModalRoot:x,removeModalRoot:k}=e,m=je(e,["ace","value","language","i18nStrings","editorContentHeight","onEditorContentResize","ariaLabel","languageLabel","preferences","loading","themes","getModalRoot","removeModalRoot"]),{__internalRootRef:w}=$e("CodeEditor",{props:{language:b}}),{controlId:L,ariaLabelledby:T,ariaDescribedby:A}=qe(e),[de=480,be]=We(s,d,480,{componentName:"code-editor",changeHandler:"onEditorContentResize",controlledProp:"editorContentHeight"}),ve=le(w),K=Ue(),q=Ge(m),S=ae("code-editor"),me=i.useRef(null),fe=i.useRef(null),[ge,_e]=Ke(g=>g.contentBoxWidth),he=Qe(_e,w),J=Xe("code-editor-pane"),[C,I]=i.useState("hidden"),[y,pe]=i.useState([]),[Ee,B]=i.useState(),[R,Se]=i.useState({row:0,column:0}),[we,W]=i.useState(!1),{editorRef:Q,editor:h}=Al(r,E,_);Je(l,Q),i.useEffect(()=>{if(!(!r||!h))return Ll(r,h,pe,Se,B,I),()=>{h==null||h.destroy()}},[r,h]),kl(h,{controlId:L,ariaLabel:f,ariaLabelledby:T,ariaDescribedby:A});const{onResize:Le}=yl(h,{width:ge,height:s});Ml(h,c),Tl(h,b),zl(h,v==null?void 0:v.wrapLines);const X=se(ve,E);Il(h,(t=v==null?void 0:v.theme)!==null&&t!==void 0?t:X),cl(h,e.onChange,e.onDelayedChange),i.useEffect(()=>{y.length===0&&I("hidden"),e.onValidate&&z(e.onValidate,{annotations:y})},[y,e.onValidate]);const Ce=p??hl(b),xe=y.filter(g=>g.type==="error").length,Ae=y.filter(g=>g.type==="warning").length,ke=i.useMemo(()=>y.filter(g=>g.type===C),[y,C]),ye=i.useCallback(g=>{h&&g.target===h.container&&g.keyCode===P.enter&&(g.stopPropagation(),g.preventDefault(),h.focus())},[h]),Me=i.useCallback(()=>W(!0),[]),Te=i.useCallback(()=>W(!1),[]),ze=i.useCallback(()=>{I(C!=="error"?"error":"hidden")},[C]),Ie=i.useCallback(()=>{I(C!=="warning"?"warning":"hidden")},[C]),Re=()=>{I("hidden")},Ne=({row:g=0,column:F=0})=>{h&&(h.focus(),h.gotoLine(g+1,F,!1),B(void 0))},Pe=i.useCallback(()=>{B(void 0)},[]),[De,H]=i.useState(!1),Be=()=>H(!0),He=g=>{z(e.onPreferencesChange,g),H(!1)},Fe=()=>H(!1),U=C!=="hidden";return n.createElement("div",Object.assign({},q,{className:M(u["code-editor"],q.className,{[u["code-editor-refresh"]]:K}),ref:he}),_&&n.createElement(dl,null,n.createElement(te,{tagName:"span"},S("i18nStrings.loadingState",a==null?void 0:a.loadingState))),!r&&!_&&n.createElement(ul,{recoveryText:S("i18nStrings.errorStateRecovery",a==null?void 0:a.errorStateRecovery),onRecoveryClick:e.onRecoveryClick},S("i18nStrings.errorState",a==null?void 0:a.errorState)),r&&!_&&n.createElement(n.Fragment,null,n.createElement(re,{height:Math.max(de,20),minHeight:20,onResize:g=>{be(g),Le(),z(d,{height:g})}},n.createElement("div",{ref:Q,className:M(u.editor,u.ace,u["editor-refresh"]),onKeyDown:ye,tabIndex:0,role:"group","aria-label":S("i18nStrings.editorGroupAriaLabel",a==null?void 0:a.editorGroupAriaLabel)})),n.createElement("div",{role:"group","aria-label":S("i18nStrings.statusBarGroupAriaLabel",a==null?void 0:a.statusBarGroupAriaLabel)},n.createElement(xl,{languageLabel:Ce,cursorPosition:S("i18nStrings.cursorPosition",(o=a==null?void 0:a.cursorPosition)===null||o===void 0?void 0:o.call(a,R.row+1,R.column+1),g=>g({row:R.row+1,column:R.column+1})),errorCount:xe,warningCount:Ae,paneStatus:C,onErrorPaneToggle:ze,onWarningPaneToggle:Ie,onTabFocus:Me,onTabBlur:Te,errorsTabRef:me,warningsTabRef:fe,i18nStrings:a,isTabFocused:we,paneId:U?J:void 0,onPreferencesOpen:Be,isRefresh:K}),n.createElement(Sl,{id:J,paneStatus:C,visible:U,annotations:ke,highlighted:Ee,onAnnotationClick:Ne,onAnnotationClear:Pe,onClose:Re,cursorPositionLabel:S("i18nStrings.cursorPosition",a==null?void 0:a.cursorPosition,g=>(F,Oe)=>g({row:F,column:Oe})),closeButtonAriaLabel:S("i18nStrings.paneCloseButtonAriaLabel",a==null?void 0:a.paneCloseButtonAriaLabel)})),De&&n.createElement(wl,{getModalRoot:x,removeModalRoot:k,onConfirm:He,onDismiss:Fe,themes:E??fl,preferences:v,defaultTheme:X,i18nStrings:{header:S("i18nStrings.preferencesModalHeader",a==null?void 0:a.preferencesModalHeader),cancel:S("i18nStrings.preferencesModalCancel",a==null?void 0:a.preferencesModalCancel),confirm:S("i18nStrings.preferencesModalConfirm",a==null?void 0:a.preferencesModalConfirm),wrapLines:S("i18nStrings.preferencesModalWrapLines",a==null?void 0:a.preferencesModalWrapLines),theme:S("i18nStrings.preferencesModalTheme",a==null?void 0:a.preferencesModalTheme),lightThemes:S("i18nStrings.preferencesModalLightThemes",a==null?void 0:a.preferencesModalLightThemes),darkThemes:S("i18nStrings.preferencesModalDarkThemes",a==null?void 0:a.preferencesModalDarkThemes),themeFilteringAriaLabel:a==null?void 0:a.preferencesModalThemeFilteringAriaLabel,themeFilteringClearAriaLabel:a==null?void 0:a.preferencesModalThemeFilteringClearAriaLabel,themeFilteringPlaceholder:a==null?void 0:a.preferencesModalThemeFilteringPlaceholder}})))});Ve(ce,"CodeEditor");const ia=ce;const sa={loadingState:"Loading code editor",errorState:"There was an error loading the code editor.",errorStateRecovery:"Retry",editorGroupAriaLabel:"Code editor",statusBarGroupAriaLabel:"Status bar",cursorPosition:(e,l)=>`Ln ${e}, Col ${l}`,errorsTab:"Errors",warningsTab:"Warnings",preferencesButtonAriaLabel:"Preferences",paneCloseButtonAriaLabel:"Close",preferencesModalHeader:"Preferences",preferencesModalCancel:"Cancel",preferencesModalConfirm:"Confirm",preferencesModalWrapLines:"Wrap lines",preferencesModalTheme:"Theme",preferencesModalLightThemes:"Light themes",preferencesModalDarkThemes:"Dark themes",preferencesModalThemeFilteringAriaLabel:"Filter themes",preferencesModalThemeFilteringClearAriaLabel:"Clear",preferencesModalThemeFilteringPlaceholder:"Filter themes"};export{ia as C,sa as i};