"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[174],{5449:function(e,t,r){var o=r(4836);t.Z=void 0,function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var o={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=n?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=e[a]}o.default=e,r&&r.set(e,o)}(r(7294));var n=o(r(4938)),a=r(5893);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}var l=(0,n.default)((0,a.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");t.Z=l},8174:function(e,t,r){r.r(t),r.d(t,{default:function(){return el}});var o=r(5893),n=r(7294),a=r(9008),i=r.n(a),l=r(3366),s=r(7462),c=r(6010),p=r(4780),u=r(1719),d=r(8884),f=r(6622),h=r(918),g=r(4867),v=r(1588);function m(e){return(0,g.Z)("MuiAppBar",e)}(0,v.Z)("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);let y=["className","color","enableColorOnDark","position"],b=e=>{let{color:t,position:r,classes:o}=e,n={root:["root",`color${(0,f.Z)(t)}`,`position${(0,f.Z)(r)}`]};return(0,p.Z)(n,m,o)},x=(e,t)=>`${null==e?void 0:e.replace(")","")}, ${t})`,Z=(0,u.ZP)(h.Z,{name:"MuiAppBar",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,t[`position${(0,f.Z)(r.position)}`],t[`color${(0,f.Z)(r.color)}`]]}})(({theme:e,ownerState:t})=>{let r="light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[900];return(0,s.Z)({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},"fixed"===t.position&&{position:"fixed",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},"absolute"===t.position&&{position:"absolute",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"sticky"===t.position&&{position:"sticky",zIndex:(e.vars||e).zIndex.appBar,top:0,left:"auto",right:0},"static"===t.position&&{position:"static"},"relative"===t.position&&{position:"relative"},!e.vars&&(0,s.Z)({},"default"===t.color&&{backgroundColor:r,color:e.palette.getContrastText(r)},t.color&&"default"!==t.color&&"inherit"!==t.color&&"transparent"!==t.color&&{backgroundColor:e.palette[t.color].main,color:e.palette[t.color].contrastText},"inherit"===t.color&&{color:"inherit"},"dark"===e.palette.mode&&!t.enableColorOnDark&&{backgroundColor:null,color:null},"transparent"===t.color&&(0,s.Z)({backgroundColor:"transparent",color:"inherit"},"dark"===e.palette.mode&&{backgroundImage:"none"})),e.vars&&(0,s.Z)({},"default"===t.color&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette.AppBar.defaultBg:x(e.vars.palette.AppBar.darkBg,e.vars.palette.AppBar.defaultBg),"--AppBar-color":t.enableColorOnDark?e.vars.palette.text.primary:x(e.vars.palette.AppBar.darkColor,e.vars.palette.text.primary)},t.color&&!t.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":t.enableColorOnDark?e.vars.palette[t.color].main:x(e.vars.palette.AppBar.darkBg,e.vars.palette[t.color].main),"--AppBar-color":t.enableColorOnDark?e.vars.palette[t.color].contrastText:x(e.vars.palette.AppBar.darkColor,e.vars.palette[t.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:"inherit"===t.color?"inherit":"var(--AppBar-color)"},"transparent"===t.color&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),k=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiAppBar"}),{className:n,color:a="primary",enableColorOnDark:i=!1,position:p="fixed"}=r,u=(0,l.Z)(r,y),f=(0,s.Z)({},r,{color:a,position:p,enableColorOnDark:i}),h=b(f);return(0,o.jsx)(Z,(0,s.Z)({square:!0,component:"header",ownerState:f,elevation:4,className:(0,c.Z)(h.root,n,"fixed"===p&&"mui-fixed"),ref:t},u))});function j(e){return(0,g.Z)("MuiToolbar",e)}(0,v.Z)("MuiToolbar",["root","gutters","regular","dense"]);let w=["className","component","disableGutters","variant"],B=e=>{let{classes:t,disableGutters:r,variant:o}=e;return(0,p.Z)({root:["root",!r&&"gutters",o]},j,t)},R=(0,u.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,!r.disableGutters&&t.gutters,t[r.variant]]}})(({theme:e,ownerState:t})=>(0,s.Z)({position:"relative",display:"flex",alignItems:"center"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}},"dense"===t.variant&&{minHeight:48}),({theme:e,ownerState:t})=>"regular"===t.variant&&e.mixins.toolbar),O=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiToolbar"}),{className:n,component:a="div",disableGutters:i=!1,variant:p="regular"}=r,u=(0,l.Z)(r,w),f=(0,s.Z)({},r,{component:a,disableGutters:i,variant:p}),h=B(f);return(0,o.jsx)(R,(0,s.Z)({as:a,className:(0,c.Z)(h.root,n),ref:t,ownerState:f},u))});var C=r(9707);function z(e){return(0,g.Z)("MuiTypography",e)}(0,v.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);let S=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],M=e=>{let{align:t,gutterBottom:r,noWrap:o,paragraph:n,variant:a,classes:i}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,f.Z)(t)}`,r&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return(0,p.Z)(l,z,i)},A=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,f.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,s.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),T={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},P={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},$=e=>P[e]||e,I=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiTypography"}),n=$(r.color),a=(0,C.Z)((0,s.Z)({},r,{color:n})),{align:i="inherit",className:p,component:u,gutterBottom:f=!1,noWrap:h=!1,paragraph:g=!1,variant:v="body1",variantMapping:m=T}=a,y=(0,l.Z)(a,S),b=(0,s.Z)({},a,{align:i,color:n,className:p,component:u,gutterBottom:f,noWrap:h,paragraph:g,variant:v,variantMapping:m}),x=u||(g?"p":m[v]||T[v])||"span",Z=M(b);return(0,o.jsx)(A,(0,s.Z)({as:x,ref:t,ownerState:b,className:(0,c.Z)(Z.root,p)},y))});var _=r(828);function N(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var W=r(1893),D=r(1796),E=r(652);function L(e){return(0,g.Z)("MuiIconButton",e)}let F=(0,v.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),G=["edge","children","className","color","disabled","disableFocusRipple","size"],q=e=>{let{classes:t,disabled:r,color:o,edge:n,size:a}=e,i={root:["root",r&&"disabled","default"!==o&&`color${(0,f.Z)(o)}`,n&&`edge${(0,f.Z)(n)}`,`size${(0,f.Z)(a)}`]};return(0,p.Z)(i,L,t)},H=(0,u.ZP)(E.Z,{name:"MuiIconButton",slot:"Root",overridesResolver(e,t){let{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,f.Z)(r.color)}`],r.edge&&t[`edge${(0,f.Z)(r.edge)}`],t[`size${(0,f.Z)(r.size)}`]]}})(({theme:e,ownerState:t})=>(0,s.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,D.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12}),({theme:e,ownerState:t})=>(0,s.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,s.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,D.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${F.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})),J=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiIconButton"}),{edge:n=!1,children:a,className:i,color:p="default",disabled:u=!1,disableFocusRipple:f=!1,size:h="medium"}=r,g=(0,l.Z)(r,G),v=(0,s.Z)({},r,{edge:n,color:p,disabled:u,disableFocusRipple:f,size:h}),m=q(v);return(0,o.jsx)(H,(0,s.Z)({className:(0,c.Z)(m.root,i),centerRipple:!0,focusRipple:!f,disabled:u,ref:t,ownerState:v},g,{children:a}))});var K=JSON.parse('{"W":{"b":"https://github.com/MP3Martin/real_division"}}'),Q=r(5449),U=r(6993);function V(){var e=N([""]);return V=function(){return e},e}var X=W.default.div.withConfig({componentId:"sc-1d2c9ea6-0"})(V()),Y=function(e){var t=(0,_.Z)((0,U.Z)(),2),r=t[0];return t[1],(0,o.jsx)(X,{style:e.style,children:(0,o.jsx)(J,{size:function(e){switch(!0){case e<310:return"small";case e<400:return"medium";default:return"large"}}(r),href:K.W.b,target:"_blank",children:(0,o.jsx)(Q.Z,{fontSize:"inherit"})})})};function ee(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function et(e,t){return(et=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function er(e){return(er=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function eo(){var e=N(["\n\n"]);return eo=function(){return e},e}var en=W.default.div.withConfig({componentId:"sc-2f44aa63-0"})(eo()),ea=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");if(e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t){var r,o;et(e,t)}}(s,e);var t,r,n,a,i,l=(r=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t,o,n,a,i=er(s);if(r){var l,c=er(this).constructor;a=Reflect.construct(i,arguments,c)}else a=i.apply(this,arguments);return(t=a)&&("object"==(t&&t.constructor===Symbol?"symbol":typeof t)||"function"==typeof t)?t:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function s(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,s),l.apply(this,arguments)}return a=[{key:"render",value:function(){return(0,o.jsx)(en,{children:(0,o.jsx)("span",{style:{"font-family":"'Audiowide', cursive"},className:"titleTextSpan",children:"Real Division"})})}}],ee(s.prototype,a),i&&ee(s,i),s}(n.Component);function ei(){return(0,o.jsx)(k,{position:"static",style:{"max-height":"64px"},children:(0,o.jsxs)(O,{style:{display:"grid"},children:[(0,o.jsx)(I,{variant:"h4",component:"div",style:{"justify-self":"center"},className:"titleTextTypography",children:(0,o.jsx)(ea,{})}),(0,o.jsx)("div",{className:"navBarRightIcons",style:{"justify-self":"end",position:"absolute","margin-right":"1rem"},children:(0,o.jsx)(Y,{})})]})})}r(2888),r(9608);var el=function(e){var t=e.prp,r=(e.prp2,e.setRootLoading),a=(0,n.useState)(!0),l=(a[0],a[1]),s=(0,n.useState)("none"),c=s[0],p=s[1],u=(0,n.useState)(!0),d=(u[0],u[1]);return(0,n.useEffect)(function(){l(!1),r(!1),p("revert"),d(!1)}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("meta",{name:"color-scheme",content:"only dark"})," "]}),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("style",{children:"\n            body {\n              overflow: revert !important;\n            }\n          "})}),(0,o.jsx)("div",{style:{height:"100vh"},children:(0,o.jsx)("main",{style:{display:c,height:"100%"},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ei,{}),t]})})})]})}},6993:function(e,t,r){var o=r(7294),n=function(){var e=(0,o.useState)(999),t=e[0],r=e[1],n=(0,o.useState)(999),a=n[0],i=n[1],l=function(){r(window.innerWidth),i(window.innerHeight)};return(0,o.useEffect)(function(){return l(),window.addEventListener("resize",l),function(){return window.removeEventListener("resize",l)}},[]),[t,a]};t.Z=n}}]);