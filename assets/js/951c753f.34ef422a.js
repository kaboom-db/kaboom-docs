"use strict";(self.webpackChunkkaboom_docs=self.webpackChunkkaboom_docs||[]).push([[1142],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(n),k=a,d=m["".concat(u,".").concat(k)]||m[k]||p[k]||l;return n?r.createElement(d,o(o({ref:e},c),{},{components:n})):r.createElement(d,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5836:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return k}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:7},u="Extra Information",s={unversionedId:"extra-info",id:"extra-info",title:"Extra Information",description:"String Options",source:"@site/docs/extra-info.md",sourceDirName:".",slug:"/extra-info",permalink:"/kaboom-docs/docs/extra-info",editUrl:"https://github.com/kaboom-db/kaboom-docs/tree/main/docs/extra-info.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Feed",permalink:"/kaboom-docs/docs/social/feed"}},c={},p=[{value:"String Options",id:"string-options",level:2}],m={toc:p};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"extra-information"},"Extra Information"),(0,l.kt)("h2",{id:"string-options"},"String Options"),(0,l.kt)("p",null,"Some query parameters/record fields have a list of options that can be used. Some of these option lists are string sensitive, if so they will be marked with ","[SEN]","."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Status Options")," [SEN]"),(0,l.kt)("p",null,"The status fields on cartoons and comics are limited to these values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"COMPLETED"),(0,l.kt)("li",{parentName:"ul"},"RELEASING"),(0,l.kt)("li",{parentName:"ul"},"PLANNED"),(0,l.kt)("li",{parentName:"ul"},"CANCELLED"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Image Request Field Options")," [SEN]"),(0,l.kt)("p",null,"This refers to the type of image is uploaded to ",(0,l.kt)("inlineCode",{parentName:"p"},"accounts/upload/"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"COVER"),(0,l.kt)("li",{parentName:"ul"},"BACKGROUND"),(0,l.kt)("li",{parentName:"ul"},"GENERIC"),(0,l.kt)("li",{parentName:"ul"},"LOGO"),(0,l.kt)("li",{parentName:"ul"},"SCREENSHOT"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Image Request Options")," [SEN]"),(0,l.kt)("p",null,"Image uploads are limited to only publishers, staff, comics, issues, actors, networks, characters, cartoons, episodes and teams. However, they must be passed using these values:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"comics_Publisher"),(0,l.kt)("li",{parentName:"ul"},"comics_Staff"),(0,l.kt)("li",{parentName:"ul"},"comics_Comic"),(0,l.kt)("li",{parentName:"ul"},"comics_Issue"),(0,l.kt)("li",{parentName:"ul"},"cartoons_VoiceActor"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Network"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Character"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Cartoon"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Episode"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Team"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Report Options")," [SEN]"),(0,l.kt)("p",null,"Reports can be made on these models:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"comics_Publisher"),(0,l.kt)("li",{parentName:"ul"},"comics_Staff"),(0,l.kt)("li",{parentName:"ul"},"comics_Comic"),(0,l.kt)("li",{parentName:"ul"},"comics_Issue"),(0,l.kt)("li",{parentName:"ul"},"cartoons_VoiceActor"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Network"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Character"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Cartoon"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Episode"),(0,l.kt)("li",{parentName:"ul"},"cartoons_Team"),(0,l.kt)("li",{parentName:"ul"},"users_Thought"),(0,l.kt)("li",{parentName:"ul"},"users_Comment"),(0,l.kt)("li",{parentName:"ul"},"auth_User"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Character Status Options")," [SEN]"),(0,l.kt)("p",null,"Character statuses are limited to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UNKNOWN"),(0,l.kt)("li",{parentName:"ul"},"ALIVE"),(0,l.kt)("li",{parentName:"ul"},"DECEASED"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Character Alignment Options")," [SEN]"),(0,l.kt)("p",null,"A characters alignment is limited to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ANTI-HERO"),(0,l.kt)("li",{parentName:"ul"},"GOOD"),(0,l.kt)("li",{parentName:"ul"},"EVIL"))),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Feed Types")),(0,l.kt)("p",null,"You can generate a feed with these given types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"comic"),(0,l.kt)("li",{parentName:"ul"},"issue"),(0,l.kt)("li",{parentName:"ul"},"cartoon"),(0,l.kt)("li",{parentName:"ul"},"episode"),(0,l.kt)("li",{parentName:"ul"},"thought"))))}k.isMDXComponent=!0}}]);