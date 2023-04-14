"use strict";(self.webpackChunktau_docs=self.webpackChunktau_docs||[]).push([[667],{3905:(A,e,t)=>{t.d(e,{Zo:()=>g,kt:()=>Q});var n=t(7294);function o(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function l(A,e){if(null==A)return{};var t,n,o=function(A,e){if(null==A)return{};var t,n,o={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(o[t]=A[t]);return o}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(o[t]=A[t])}return o}var i=n.createContext({}),p=function(A){var e=n.useContext(i),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},g=function(A){var e=p(A.components);return n.createElement(i.Provider,{value:e},A.children)},c="mdxType",C={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},B=n.forwardRef((function(A,e){var t=A.components,o=A.mdxType,r=A.originalType,i=A.parentName,g=l(A,["components","mdxType","originalType","parentName"]),c=p(t),B=o,Q=c["".concat(i,".").concat(B)]||c[B]||C[B]||r;return t?n.createElement(Q,a(a({ref:e},g),{},{components:t})):n.createElement(Q,a({ref:e},g))}));function Q(A,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof A||o){var r=t.length,a=new Array(r);a[0]=B;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=A,l[c]="string"==typeof A?A:o,a[1]=l;for(var p=2;p<r;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}B.displayName="MDXCreateElement"},1654:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>C,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={},a="Container",l={unversionedId:"builtin-comps/container",id:"builtin-comps/container",title:"Container",description:"What it does",source:"@site/docs/builtin-comps/container.md",sourceDirName:"builtin-comps",slug:"/builtin-comps/container",permalink:"/docs/builtin-comps/container",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Column",permalink:"/docs/builtin-comps/column"},next:{title:"Flat Button",permalink:"/docs/builtin-comps/flat-button"}},i={},p=[{value:"What it does",id:"what-it-does",level:2},{value:"Builder Parameters",id:"builder-parameters",level:2},{value:"Space Behaviour",id:"space-behaviour",level:2},{value:"Example",id:"example",level:2},{value:"What it looks like",id:"what-it-looks-like",level:2}],g={toc:p},c="wrapper";function C(A){let{components:e,...r}=A;return(0,o.kt)(c,(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"container"},"Container"),(0,o.kt)("h2",{id:"what-it-does"},"What it does"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A container that can hold a single child UIComponent, with an optional background color.")),(0,o.kt)("h2",{id:"builder-parameters"},"Builder Parameters"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"child")," (Optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The child ",(0,o.kt)("inlineCode",{parentName:"li"},"UIComponent")," to add to the container. Set to ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," or do not call ",(0,o.kt)("inlineCode",{parentName:"li"},"withChild")," to create an empty container."),(0,o.kt)("li",{parentName:"ul"},"Default: null (No Child)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"color")," (Optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The background color of the container. Set to ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," or do not call ",(0,o.kt)("inlineCode",{parentName:"li"},"withColor")," to have no background."),(0,o.kt)("li",{parentName:"ul"},"Default: null (Transparent)"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sizeBehaviour")," (Optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Defines the size behaviour, max to fill all available space, min to use child size. If child is not defined min will not have an effect.")))),(0,o.kt)("h2",{id:"space-behaviour"},"Space Behaviour"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Defined by ",(0,o.kt)("inlineCode",{parentName:"li"},"sizeBehaviour"))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class TestContainer implements UIComponent {\n    @Override\n    public UIComponent build(Layout layout) {\n        return new Container.Builder()\n            .withColor(Color.BLUE)\n            .withChild(new Center(new Text.Builder("Blue!!")));\n    }\n}\n')),(0,o.kt)("h2",{id:"what-it-looks-like"},"What it looks like"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"An image of container in effect",src:t(4552).Z,width:"847",height:"479"})))}C.isMDXComponent=!0},4552:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);