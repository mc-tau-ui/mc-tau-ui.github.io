"use strict";(self.webpackChunktau_docs=self.webpackChunktau_docs||[]).push([[885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1848:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o="Sized",l={unversionedId:"builtin-comps/sized",id:"builtin-comps/sized",title:"Sized",description:"What it does",source:"@site/docs/builtin-comps/sized.md",sourceDirName:"builtin-comps",slug:"/builtin-comps/sized",permalink:"/docs/builtin-comps/sized",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Row",permalink:"/docs/builtin-comps/row"},next:{title:"Stack",permalink:"/docs/builtin-comps/stack"}},p={},c=[{value:"What it does",id:"what-it-does",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Size Behaviour",id:"size-behaviour",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sized"},"Sized"),(0,i.kt)("h2",{id:"what-it-does"},"What it does"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sized UIComponent is a UI component that resizes its child component to a specified size.")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"size"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The size of the ",(0,i.kt)("inlineCode",{parentName:"li"},"UIComponent")),(0,i.kt)("li",{parentName:"ul"},"Takes in a type of Size, which is a ",(0,i.kt)("inlineCode",{parentName:"li"},"FunctionalInterface")," that takes in a maximum size and returns the size of that the component will use. You can use the pre-built ",(0,i.kt)("inlineCode",{parentName:"li"},"Size.staticSize(int, int)")," for a fixed size or use ",(0,i.kt)("inlineCode",{parentName:"li"},"Size.percentage")," to fill a percentage of the given space."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"child"),": "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"UIComponent")," to be resized.")))),(0,i.kt)("h2",{id:"size-behaviour"},"Size Behaviour"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fixed")))}m.isMDXComponent=!0}}]);