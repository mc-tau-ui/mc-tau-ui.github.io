"use strict";(self.webpackChunktau_docs=self.webpackChunktau_docs||[]).push([[485],{3905:(A,e,t)=>{t.d(e,{Zo:()=>I,kt:()=>c});var n=t(7294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function a(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function r(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},a=Object.keys(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(n=0;n<a.length;n++)t=a[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var g=n.createContext({}),l=function(A){var e=n.useContext(g),t=e;return A&&(t="function"==typeof A?A(e):r(r({},e),A)),t},I=function(A){var e=l(A.components);return n.createElement(g.Provider,{value:e},A.children)},s="mdxType",C={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,a=A.originalType,g=A.parentName,I=o(A,["components","mdxType","originalType","parentName"]),s=l(t),k=i,c=s["".concat(g,".").concat(k)]||s[k]||C[k]||a;return t?n.createElement(c,r(r({ref:e},I),{},{components:t})):n.createElement(c,r({ref:e},I))}));function c(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var a=t.length,r=new Array(a);r[0]=k;var o={};for(var g in e)hasOwnProperty.call(e,g)&&(o[g]=e[g]);o.originalType=A,o[s]="string"==typeof A?A:i,r[1]=o;for(var l=2;l<a;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2469:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>g,contentTitle:()=>r,default:()=>C,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const a={sidebar_position:2,description:"Here you will learn the basics of making an UI with Tau"},r="Basics of Tau",o={unversionedId:"getting-started/basics-of-tau",id:"getting-started/basics-of-tau",title:"Basics of Tau",description:"Here you will learn the basics of making an UI with Tau",source:"@site/docs/getting-started/basics-of-tau.md",sourceDirName:"getting-started",slug:"/getting-started/basics-of-tau",permalink:"/docs/getting-started/basics-of-tau",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Here you will learn the basics of making an UI with Tau"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/getting-started/installation"},next:{title:"Render the UI",permalink:"/docs/getting-started/render"}},g={},l=[{value:"UI Component",id:"ui-component",level:2},{value:"Creating a UI",id:"creating-a-ui",level:2},{value:"Stack",id:"stack",level:3},{value:"Container",id:"container",level:3},{value:"Center",id:"center",level:3},{value:"Sized",id:"sized",level:3},{value:"Text Field",id:"text-field",level:3}],I={toc:l},s="wrapper";function C(A){let{components:e,...a}=A;return(0,i.kt)(s,(0,n.Z)({},I,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"basics-of-tau"},"Basics of Tau"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Most example code in this documentation have not yet been updated for version 1.2.0"),(0,i.kt)("p",{parentName:"admonition"},"The theming section has been updated, but that is it."),(0,i.kt)("p",{parentName:"admonition"},"Most of the example code should not differ too much. Only difference being the extra ",(0,i.kt)("inlineCode",{parentName:"p"},"Theme")," parameter in v1.2.0's build function.")),(0,i.kt)("h2",{id:"ui-component"},"UI Component"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"UIComponent"),"s are the very foundation of Tau UIs. All Tau UIs will be made up of ",(0,i.kt)("inlineCode",{parentName:"p"},"UIComponent"),"s. This is similar to Flutter's ",(0,i.kt)("inlineCode",{parentName:"p"},"StatelessWidget"),"."),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"UIComponent")," is anything that can be displayed onto the screen. The fact that everything is a ",(0,i.kt)("inlineCode",{parentName:"p"},"UIComponent")," means\nyou can nest them as much as you want. In fact, that's how you would make more complex UIs without creating a indentation hell."),(0,i.kt)("h2",{id:"creating-a-ui"},"Creating a UI"),(0,i.kt)("p",null,"You can get started with creating a Tau UI by simply creating a class implementing the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIComponent")," interface"),(0,i.kt)("p",null,"Here is an example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class ExampleUI implements UIComponent {\n    @Override\n    public UIComponent build(Layout layout) {\n        return new Stack(\n            new Container.Builder().withColor(Color.WHITE),\n            new Center(new Sized(\n                Size.staticSize(new Vector2i(100, 20)),\n                new TextField.Builder()\n                    .withMessage(new StringTextComponent("Hello"))\n                    .withHintText(new StringTextComponent("Hello!")))\n        ));\n    }\n}\n\n')),(0,i.kt)("p",null,"So here, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ExampleUI")," is made up of a list of various UI Components. Let's take a brief look at each of them."),(0,i.kt)("h3",{id:"stack"},"Stack"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/stack"},"Stack")," is a built-in component that takes in a list of UI Components\nand stack them on top of each other in the order they are declared in."),(0,i.kt)("h3",{id:"container"},"Container"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/container"},"Container")," is an empty space filling component. It can be filled with any color. Here, it's being filled with the built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"WHITE")," color"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Here you can see that instead of instantiating a Container directly,\nit is instantiating an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"Container.Builder"),". This pattern can be seen in many of the built-in components in order\nto clearly declare optional parameters. Note, that no ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," call was necessary. That's because the ",(0,i.kt)("inlineCode",{parentName:"p"},"Builder")," also implements\n",(0,i.kt)("inlineCode",{parentName:"p"},"UIComponent")," and calls ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," automatically to reduce code complexity. However, some ",(0,i.kt)("inlineCode",{parentName:"p"},"Builders")," which has mandatory parameter(s) will\nrequire a build call and require you to pass in the mandatory parameter(s) there.")),(0,i.kt)("h3",{id:"center"},"Center"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/center"},"Center")," component will center its child to the space it's given by the layout. In this case, the center of the screen."),(0,i.kt)("h3",{id:"sized"},"Sized"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/sized"},"Sized")," component will restrict its child to the given size. ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/sized"},"Size")," can be a percentage of the maximum space available, or a\nfixed size given in pixel space like it is here."),(0,i.kt)("h3",{id:"text-field"},"Text Field"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/textfield"},"Text Field")," component is, you guessed it, a text field that you can input text into. Here you can\nsee another Builder. Being supplied with a narration message and a hint text. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"TextField")," uses a built-in called ",(0,i.kt)("a",{parentName:"p",href:"/docs/builtin-comps/widget-wrapper"},"Widget Wrapper"),".\nIt can be very useful, and it is something worth looking into \ud83d\ude04")),(0,i.kt)("p",null,"Overall, this is what the UI looks like.\n",(0,i.kt)("img",{alt:"Example UI Image",src:t(3228).Z,width:"844",height:"474"})))}C.isMDXComponent=!0},3228:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"}}]);