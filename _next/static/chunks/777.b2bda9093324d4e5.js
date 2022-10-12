"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[777],{5449:function(e,r,t){var o=t(4836);r.Z=void 0,function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=a(r);if(t&&t.has(e))return t.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(o,i,l):o[i]=e[i]}o.default=e,t&&t.set(e,o)}(t(7294));var n=o(t(4938)),i=t(5893);function a(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(a=function(e){return e?t:r})(e)}var l=(0,n.default)((0,i.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");r.Z=l},4721:function(e,r,t){var o=t(4836);r.Z=void 0;var n=o(t(4938)),i=t(5893),a=(0,n.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"}),"Info");r.Z=a},8777:function(e,r,t){t.r(r),t.d(r,{default:function(){return eR}});var o=t(5893),n=t(7294),i=t(9008),a=t.n(i),l=t(3366),s=t(7462),c=t(6010),p=t(4780),d=t(1719),u=t(8884),f=t(6622),h=t(918),x=t(4867),v=t(1588);function g(e){return(0,x.Z)("MuiAppBar",e)}(0,v.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);let m=["className","color","enableColorOnDark","position"],b=e=>{let{color:r,position:t,classes:o}=e,n={root:["root",`color${(0,f.Z)(r)}`,`position${(0,f.Z)(t)}`]};return(0,p.Z)(n,g,o)},Z=(e,r)=>`${null==e?void 0:e.replace(")","")}, ${r})`,y=(0,d.ZP)(h.Z,{name:"MuiAppBar",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,r[`position${(0,f.Z)(t.position)}`],r[`color${(0,f.Z)(t.color)}`]]}})(({theme:e,ownerState:r})=>{let t="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,s.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===r.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===r.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===r.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===r.position&&{position:"static"},"relative"===r.position&&{position:"relative"},!e.vars&&(0,s.Z)({},"default"===r.color&&{backgroundColor:t,color:e.palette.getContrastText(t)},r.color&&"default"!==r.color&&"inherit"!==r.color&&"transparent"!==r.color&&{backgroundColor:e.palette[r.color].main,color:e.palette[r.color].contrastText},"inherit"===r.color&&{color:"inherit"},"dark"===e.palette.mode&&!r.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===r.color&&(0,s.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,s.Z)({},"default"===r.color&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette.AppBar.defaultBg:Z(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":r.enableColorOnDark?e.vars.palette.text.primary:Z(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},r.color&&!r.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":r.enableColorOnDark?e.vars.palette[r.color].main:Z(e.vars.palette.AppBar.darkBg,e.vars.palette[r.color].main),"--AppBar-color":r.enableColorOnDark?e.vars.palette[r.color].contrastText:Z(e.vars.palette.AppBar.darkColor,e.vars.palette[r.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===r.color?"inherit":"var(--AppBar-color)"},"transparent"===r.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),j=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiAppBar"}),{className:n,color:i="primary",enableColorOnDark:a=!1,position:p="fixed"}=t,d=(0,l.Z)(t,m),f=(0,s.Z)({},t,{color:i,position:p,enableColorOnDark:a}),h=b(f);return(0,o.jsx)(y,(0,s.Z)({square:!0,component:"header",ownerState:f,elevation:4,className:(0,c.Z)(h.root,n,"fixed"===p&&"mui-fixed"),ref:r},d))});function k(e){return(0,x.Z)("MuiToolbar",e)}(0,v.Z)("MuiToolbar",["root","gutters","regular","dense"]);let w=["className","component","disableGutters","variant"],S=e=>{let{classes:r,disableGutters:t,variant:o}=e;return(0,p.Z)({root:["root",!t&&"gutters",o]},k,r)},M=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,!t.disableGutters&&r.gutters,r[t.variant]]}})(({theme:e,ownerState:r})=>(0,s.Z)({position:"relative",display:"flex",alignItems:"center"},!r.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===r.variant&&{minHeight:48}),({theme:e,ownerState:r})=>"regular"===r.variant&&e.mixins.toolbar),C=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiToolbar"}),{className:n,component:i="div",disableGutters:a=!1,variant:p="regular"}=t,d=(0,l.Z)(t,w),f=(0,s.Z)({},t,{component:i,disableGutters:a,variant:p}),h=S(f);return(0,o.jsx)(M,(0,s.Z)({as:i,className:(0,c.Z)(h.root,n),ref:r,ownerState:f},d))});var D=t(9630),B=t(828);function R(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}var P=t(2097),W=t(1893),O=t(562),A=t(1281),T=t(5449),I=t(4721),N=t(6993),$=t(7579),z=t(3535),_=t(9942);function F(e){return(0,x.Z)("MuiDialog",e)}let E=(0,v.Z)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),L=(0,n.createContext)({});var H=t(8735);let U=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],G=(0,d.ZP)(H.Z,{name:"MuiDialog",slot:"Backdrop",overrides:(e,r)=>r.backdrop})({zIndex:-1}),Y=e=>{let{classes:r,scroll:t,maxWidth:o,fullWidth:n,fullScreen:i}=e,a={root:["root"],container:["container",`scroll${(0,f.Z)(t)}`],paper:["paper",`paperScroll${(0,f.Z)(t)}`,`paperWidth${(0,f.Z)(String(o))}`,n&&"paperFullWidth",i&&"paperFullScreen"]};return(0,p.Z)(a,F,r)},X=(0,d.ZP)(z.Z,{name:"MuiDialog",slot:"Root",overridesResolver:(e,r)=>r.root})({"@media print":{position:"absolute !important"}}),K=(0,d.ZP)("div",{name:"MuiDialog",slot:"Container",overridesResolver(e,r){let{ownerState:t}=e;return[r.container,r[`scroll${(0,f.Z)(t.scroll)}`]]}})(({ownerState:e})=>(0,s.Z)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===e.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===e.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&:after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),q=(0,d.ZP)(h.Z,{name:"MuiDialog",slot:"Paper",overridesResolver(e,r){let{ownerState:t}=e;return[r.paper,r[`scrollPaper${(0,f.Z)(t.scroll)}`],r[`paperWidth${(0,f.Z)(String(t.maxWidth))}`],t.fullWidth&&r.paperFullWidth,t.fullScreen&&r.paperFullScreen]}})(({theme:e,ownerState:r})=>(0,s.Z)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===e.breakpoints.unit?Math.max(e.breakpoints.values.xs,444):`${e.breakpoints.values.xs}${e.breakpoints.unit}`,[`&.${E.paperScrollBody}`]:{[e.breakpoints.down(Math.max(e.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:`${e.breakpoints.values[r.maxWidth]}${e.breakpoints.unit}`,[`&.${E.paperScrollBody}`]:{[e.breakpoints.down(e.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${E.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),J=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiDialog"}),i=(0,P.Z)(),a={enter:i.transitions.duration.enteringScreen,exit:i.transitions.duration.leavingScreen},{"aria-describedby":p,"aria-labelledby":d,BackdropComponent:f,BackdropProps:x,children:v,className:g,disableEscapeKeyDown:m=!1,fullScreen:b=!1,fullWidth:Z=!1,maxWidth:y="sm",onBackdropClick:j,onClose:k,open:w,PaperComponent:S=h.Z,PaperProps:M={},scroll:C="paper",TransitionComponent:D=_.Z,transitionDuration:B=a,TransitionProps:R}=t,W=(0,l.Z)(t,U),O=(0,s.Z)({},t,{disableEscapeKeyDown:m,fullScreen:b,fullWidth:Z,maxWidth:y,scroll:C}),A=Y(O),T=n.useRef(),I=e=>{T.current=e.target===e.currentTarget},N=e=>{T.current&&(T.current=null,j&&j(e),k&&k(e,"backdropClick"))},z=(0,$.Z)(d),F=n.useMemo(()=>({titleId:z}),[z]);return(0,o.jsx)(X,(0,s.Z)({className:(0,c.Z)(A.root,g),closeAfterTransition:!0,components:{Backdrop:G},componentsProps:{backdrop:(0,s.Z)({transitionDuration:B,as:f},x)},disableEscapeKeyDown:m,onClose:k,open:w,ref:r,onClick:N,ownerState:O},W,{children:(0,o.jsx)(D,(0,s.Z)({appear:!0,in:w,timeout:B,role:"presentation"},R,{children:(0,o.jsx)(K,{className:(0,c.Z)(A.container),onMouseDown:I,ownerState:O,children:(0,o.jsx)(q,(0,s.Z)({as:S,elevation:24,role:"dialog","aria-describedby":p,"aria-labelledby":z},M,{className:(0,c.Z)(A.paper,M.className),ownerState:O,children:(0,o.jsx)(L.Provider,{value:F,children:v})}))})}))}))});var V=t(5084);function Q(e){return(0,x.Z)("MuiDialogActions",e)}(0,v.Z)("MuiDialogActions",["root","spacing"]);let ee=["className","disableSpacing"],er=e=>{let{classes:r,disableSpacing:t}=e;return(0,p.Z)({root:["root",!t&&"spacing"]},Q,r)},et=(0,d.ZP)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,!t.disableSpacing&&r.spacing]}})(({ownerState:e})=>(0,s.Z)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),eo=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:i=!1}=t,a=(0,l.Z)(t,ee),p=(0,s.Z)({},t,{disableSpacing:i}),d=er(p);return(0,o.jsx)(et,(0,s.Z)({className:(0,c.Z)(d.root,n),ownerState:p,ref:r},a))});function en(e){return(0,x.Z)("MuiDialogContent",e)}function ei(e){return(0,x.Z)("MuiDialogTitle",e)}(0,v.Z)("MuiDialogContent",["root","dividers"]);let ea=(0,v.Z)("MuiDialogTitle",["root"]),el=["className","dividers"],es=e=>{let{classes:r,dividers:t}=e;return(0,p.Z)({root:["root",t&&"dividers"]},en,r)},ec=(0,d.ZP)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver(e,r){let{ownerState:t}=e;return[r.root,t.dividers&&r.dividers]}})(({theme:e,ownerState:r})=>(0,s.Z)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:`1px solid ${(e.vars||e).palette.divider}`,borderBottom:`1px solid ${(e.vars||e).palette.divider}`}:{[`.${ea.root} + &`]:{paddingTop:0}})),ep=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiDialogContent"}),{className:n,dividers:i=!1}=t,a=(0,l.Z)(t,el),p=(0,s.Z)({},t,{dividers:i}),d=es(p);return(0,o.jsx)(ec,(0,s.Z)({className:(0,c.Z)(d.root,n),ownerState:p,ref:r},a))});function ed(e){return(0,x.Z)("MuiDialogContentText",e)}(0,v.Z)("MuiDialogContentText",["root"]);let eu=["children"],ef=e=>{let{classes:r}=e,t=(0,p.Z)({root:["root"]},ed,r);return(0,s.Z)({},r,t)},eh=(0,d.ZP)(D.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiDialogContentText",slot:"Root",overridesResolver:(e,r)=>r.root})({}),ex=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiDialogContentText"}),n=(0,l.Z)(t,eu),i=ef(n);return(0,o.jsx)(eh,(0,s.Z)({component:"p",variant:"body1",color:"text.secondary",ref:r,ownerState:n},t,{classes:i}))}),ev=["className","id"],eg=e=>{let{classes:r}=e;return(0,p.Z)({root:["root"]},ei,r)},em=(0,d.ZP)(D.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,r)=>r.root})({padding:"16px 24px",flex:"0 0 auto"}),eb=n.forwardRef(function(e,r){let t=(0,u.Z)({props:e,name:"MuiDialogTitle"}),{className:i,id:a}=t,p=(0,l.Z)(t,ev),d=eg(t),{titleId:f=a}=n.useContext(L);return(0,o.jsx)(em,(0,s.Z)({component:"h2",className:(0,c.Z)(d.root,i),ownerState:t,ref:r,variant:"h6",id:f},p))});function eZ(){var e=R([""]);return eZ=function(){return e},e}var ey=W.default.div.withConfig({componentId:"sc-1ef59488-0"})(eZ()),ej=function(e){var r=function(e){switch(!0){case e<310:return"small";case e<400:return"medium";default:return"large"}},t=(0,n.useState)(!1),i=t[0],a=t[1],l=function(){a(!0)},s=function(){a(!1)},c=(0,B.Z)((0,N.Z)(),2),p=c[0];c[1];var d=(0,P.Z)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(ey,{style:e.style,children:[(0,o.jsx)(O.Z,{size:r(p),onClick:l,children:(0,o.jsx)(I.Z,{fontSize:"inherit"})}),(0,o.jsx)(O.Z,{size:r(p),href:A.W.b,target:"_blank",children:(0,o.jsx)(T.Z,{fontSize:"inherit"})})]}),(0,o.jsxs)(J,{open:i,onClose:s,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,o.jsx)(eb,{id:"alert-dialog-title",style:{fontSize:"2.4rem",marginInline:"auto"},children:"Info"}),(0,o.jsx)(ep,{children:(0,o.jsx)(ex,{id:"alert-dialog-description",children:(0,o.jsxs)("div",{style:{lineHeight:0},className:"infoDialogInnerDiv",children:[(0,o.jsx)("h3",{children:"Basic info"}),(0,o.jsx)("p",{children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:["Made by ",(0,o.jsx)("a",{href:"//mp3martin.xyz",target:"_blank",style:{color:d.palette.primary.dark},children:"MP3Martin"}),". ",(0,o.jsx)("br",{})]}),(0,o.jsx)("li",{children:"Using at school: At your own risk."})]})}),(0,o.jsx)("h3",{children:"Tips"}),(0,o.jsx)("p",{children:(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Use arrow keys to switch between number inputs (pc only)."}),(0,o.jsx)("li",{children:"Use enter key to calculate without needing to use your mouse (pc only)."})]})}),(0,o.jsx)("h3",{children:"Info for advanced users"}),(0,o.jsx)("p",{children:(0,o.jsxs)("ul",{children:[(0,o.jsxs)("li",{children:[(0,o.jsx)("b",{children:"Framework:"})," Next.js - React"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("b",{children:"UI Library:"})," MUI"]}),(0,o.jsxs)("li",{children:[(0,o.jsx)("b",{children:"Styling:"})," scss"]})]})})]})})}),(0,o.jsx)(eo,{children:(0,o.jsx)(V.Z,{onClick:s,autoFocus:!0,children:"Close"})})]})]})};function ek(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function ew(e,r){return(ew=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function eS(e){return(eS=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eM(){var e=R(["\n\n"]);return eM=function(){return e},e}var eC=W.default.div.withConfig({componentId:"sc-2f44aa63-0"})(eM()),eD=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw TypeError("Super expression must either be null or a function");if(e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r){var t,o;ew(e,r)}}(s,e);var r,t,n,i,a,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r,o,n,i,a=eS(s);if(t){var l,c=eS(this).constructor;i=Reflect.construct(a,arguments,c)}else i=a.apply(this,arguments);return(r=i)&&("object"==(r&&r.constructor===Symbol?"symbol":typeof r)||"function"==typeof r)?r:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function s(){return!function(e,r){if(!(e instanceof r))throw TypeError("Cannot call a class as a function")}(this,s),l.apply(this,arguments)}return i=[{key:"render",value:function(){return(0,o.jsx)(eC,{children:(0,o.jsx)("span",{style:{"font-family":"'Audiowide', cursive"},className:"titleTextSpan",children:"Real Division"})})}}],ek(s.prototype,i),a&&ek(s,a),s}(n.Component);function eB(){return(0,o.jsx)(j,{position:"static",style:{"max-height":"64px"},children:(0,o.jsxs)(C,{style:{display:"grid"},children:[(0,o.jsx)(D.Z,{variant:"h4",component:"div",style:{"justify-self":"center"},className:"titleTextTypography",children:(0,o.jsx)(eD,{})}),(0,o.jsx)("div",{className:"navBarRightIcons",style:{"justify-self":"end",position:"absolute","margin-right":"1rem"},children:(0,o.jsx)(ej,{})})]})})}var eR=function(e){var r=e.prp,t=(e.prp2,e.setRootLoading),i=(0,n.useState)(!0),l=(i[0],i[1]),s=(0,n.useState)("none"),c=s[0],p=s[1],d=(0,n.useState)(!0),u=(d[0],d[1]);return(0,n.useEffect)(function(){l(!1),t(!1),p("revert"),u(!1)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("meta",{name:"color-scheme",content:"only dark"})," "]}),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("style",{children:"\n            body {\n              overflow: revert !important;\n            }\n          "})}),(0,o.jsx)("div",{style:{height:"100vh"},children:(0,o.jsx)("main",{style:{display:c,height:"100%"},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(eB,{}),r]})})})]})}},6993:function(e,r,t){var o=t(7294),n=function(){var e=(0,o.useState)(999),r=e[0],t=e[1],n=(0,o.useState)(999),i=n[0],a=n[1],l=function(){t(window.innerWidth),a(window.innerHeight)};return(0,o.useEffect)(function(){return l(),window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}},[]),[r,i]};r.Z=n},1281:function(e){e.exports=JSON.parse('{"W":{"b":"https://github.com/MP3Martin/real_division"}}')}}]);