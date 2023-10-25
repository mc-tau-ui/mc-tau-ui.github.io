"use strict";(self.webpackChunktau_docs=self.webpackChunktau_docs||[]).push([[152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,y=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,description:"Getting started with Tau is easy. Here is how you install it to your project."},i="Installation",s={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"Getting started with Tau is easy. Here is how you install it to your project.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/docs/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Getting started with Tau is easy. Here is how you install it to your project."},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/category/getting-started"},next:{title:"Basics of Tau",permalink:"/docs/getting-started/basics-of-tau"}},l={},u=[],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Add the Saps maven repository to your repositories list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'maven { url = "https://maven.saps.dev/minecraft" }\n')),(0,a.kt)("p",null,"Add Tau to your dependencies list:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'implementation fg.deobf("com.github.wintersteve25:Tau:{version}")\n')),(0,a.kt)("p",null,"Replace {version} with the version of Tau you want, you can find a list of all the versions by navigating to ",(0,a.kt)("a",{parentName:"p",href:"https://maven.saps.dev/#/releases/com/github/wintersteve25/Tau"},"https://maven.saps.dev/#/releases/com/github/wintersteve25/Tau")),(0,a.kt)("p",null,"Refresh your Gradle project:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If you are using IntelliJ, there should be a floating button that you can click to refresh your Gradle project. Or you can use the fresh button in the Gradle tab on the right."),(0,a.kt)("li",{parentName:"ul"},"Or you can run ",(0,a.kt)("inlineCode",{parentName:"li"},"gradle build"))),(0,a.kt)("p",null,"Voil\xe0! You have Tau in your project!"))}d.isMDXComponent=!0}}]);