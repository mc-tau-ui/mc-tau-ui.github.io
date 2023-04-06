"use strict";(self.webpackChunktau_docs=self.webpackChunktau_docs||[]).push([[810],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>E});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=s(i),d=r,E=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return i?n.createElement(E,l(l({ref:t},p),{},{components:i})):n.createElement(E,l({ref:t},p))}));function E(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,l=new Array(o);l[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<o;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},1179:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=i(7462),r=(i(7294),i(3905));const o={},l="Tooltip",a={unversionedId:"builtin-comps/tooltip",id:"builtin-comps/tooltip",title:"Tooltip",description:"What it does",source:"@site/docs/builtin-comps/tooltip.md",sourceDirName:"builtin-comps",slug:"/builtin-comps/tooltip",permalink:"/docs/builtin-comps/tooltip",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Texture",permalink:"/docs/builtin-comps/texture"},next:{title:"Transform",permalink:"/docs/builtin-comps/transform"}},c={},s=[{value:"What it does",id:"what-it-does",level:2},{value:"Builder Parameters",id:"builder-parameters",level:2},{value:"Size Behaviour",id:"size-behaviour",level:2},{value:"Example",id:"example",level:2},{value:"What it looks like",id:"what-it-looks-like",level:2}],p={toc:s},u="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tooltip"},"Tooltip"),(0,r.kt)("h2",{id:"what-it-does"},"What it does"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When its child is hovered, renders a tooltip on the screen")),(0,r.kt)("h2",{id:"builder-parameters"},"Builder Parameters"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"text"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The text to be drawn, can be added by a list to create multiple lines."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"child"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"UIComponent")," that will display the tooltip when hovered.")))),(0,r.kt)("h2",{id:"size-behaviour"},"Size Behaviour"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Minimum")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TestTooltip implements UIComponent {\n    @Override\n    public UIComponent build(Layout layout) {\n        return new Center(new Tooltip.Builder()\n                .withText(new StringTextComponent("Helloooooo"))\n                .build(new Text.Builder("Hello!")));\n    }\n}\n')),(0,r.kt)("h2",{id:"what-it-looks-like"},"What it looks like"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An image of tooltip in effect",src:i(9841).Z,width:"438",height:"176"})))}m.isMDXComponent=!0},9841:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);