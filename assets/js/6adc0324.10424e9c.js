"use strict";(self.webpackChunktau_docs=self.webpackChunktau_docs||[]).push([[141],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>k});var a=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,i=function(e,t){if(null==e)return{};var l,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var u=a.createContext({}),p=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var l=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(l),d=i,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||n;return l?a.createElement(k,r(r({ref:t},s),{},{components:l})):a.createElement(k,r({ref:t},s))}));function k(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=l.length,r=new Array(n);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<n;p++)r[p]=l[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,l)}d.displayName="MDXCreateElement"},1267:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=l(7462),i=(l(7294),l(3905));const n={},r="Slider",o={unversionedId:"builtin-comps/slider",id:"builtin-comps/slider",title:"Slider",description:"What it is",source:"@site/docs/builtin-comps/slider.md",sourceDirName:"builtin-comps",slug:"/builtin-comps/slider",permalink:"/docs/builtin-comps/slider",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sized",permalink:"/docs/builtin-comps/sized"},next:{title:"Stack",permalink:"/docs/builtin-comps/stack"}},u={},p=[{value:"What it is",id:"what-it-is",level:2},{value:"Builder Parameters",id:"builder-parameters",level:2},{value:"Size Behaviour",id:"size-behaviour",level:2},{value:"Example",id:"example",level:2},{value:"What it looks like",id:"what-it-looks-like",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"slider"},"Slider"),(0,i.kt)("h2",{id:"what-it-is"},"What it is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This is just a regular slider you see in any UI.")),(0,i.kt)("h2",{id:"builder-parameters"},"Builder Parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The prefix that will be displayed before the value of the slider"),(0,i.kt)("li",{parentName:"ul"},"Default: null"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"suffix")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The suffix that will be displayed after the value of the slider"),(0,i.kt)("li",{parentName:"ul"},"Default: null"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"showDecimals")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Whether or not to show the decimal part of the slider value"),(0,i.kt)("li",{parentName:"ul"},"Default: true"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The initial value of the slider"),(0,i.kt)("li",{parentName:"ul"},"Default: 0"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"minimum")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The minimum value of the slider"),(0,i.kt)("li",{parentName:"ul"},"Default: 0"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"maximum")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The maxmimum value of the slider"),(0,i.kt)("li",{parentName:"ul"},"Default: 1"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"onPress")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Callback that will be triggered when the slider area is clicked"),(0,i.kt)("li",{parentName:"ul"},"Default: null"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"onValueChanged")," (Optional)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Callback that will be triggered when the slider changes"),(0,i.kt)("li",{parentName:"ul"},"Default: null")))),(0,i.kt)("h2",{id:"size-behaviour"},"Size Behaviour"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maximum")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class TestSlider implements UIComponent {\n    \n    private double value;\n    \n    @Override\n    public UIComponent build(Layout layout) {\n        return new Center(\n            new Sized(\n                Size.staticSize(200, 20),\n                new Slider.Builder()\n                    .withValue(value)\n                    .withOnValueChanged((value) -> this.value = value)\n            )\n        );\n    }\n}\n")),(0,i.kt)("h2",{id:"what-it-looks-like"},"What it looks like"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"An image of slider in effect",src:l(6318).Z,width:"850",height:"476"})))}c.isMDXComponent=!0},6318:(e,t,l)=>{l.d(t,{Z:()=>a});const a=l.p+"assets/images/slider-f5da82f6baf287ae3110f4b76368be82.png"}}]);