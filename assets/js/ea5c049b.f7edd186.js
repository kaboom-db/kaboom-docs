"use strict";(self.webpackChunkkaboom_docs=self.webpackChunkkaboom_docs||[]).push([[9662],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),m=s(n),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(k,l(l({ref:e},c),{},{components:n})):a.createElement(k,l({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},268:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:7},p="Locations",s={unversionedId:"cartoons/locations",id:"cartoons/locations",title:"Locations",description:"Although locations are part of the cartoons endpoint, they apply to comics too.",source:"@site/docs/cartoons/locations.md",sourceDirName:"cartoons",slug:"/cartoons/locations",permalink:"/kaboom-docs/docs/cartoons/locations",editUrl:"https://github.com/kaboom-db/kaboom-docs/tree/main/docs/cartoons/locations.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Teams",permalink:"/kaboom-docs/docs/cartoons/teams"},next:{title:"Genres",permalink:"/kaboom-docs/docs/cartoons/genres"}},c={},u=[],m={toc:u};function d(t){var e=t.components,n=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"locations"},"Locations"),(0,o.kt)("p",null,"Although locations are part of the cartoons endpoint, they apply to comics too."),(0,o.kt)("details",{id:"get-locations"},(0,o.kt)("summary",null,"Get locations"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/locations/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query params:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"city"),(0,o.kt)("td",{parentName:"tr",align:null},"berlin"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nation"),(0,o.kt)("td",{parentName:"tr",align:null},"germany"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"no")))),(0,o.kt)("p",null,"*"," pagination purposes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 1,\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "id": 23,\n      "city": "Berlin",\n      "nation": "Germany",\n      "date_created": "2022-02-19T12:00:09.179652Z"\n    }\n  ]\n}\n'))),(0,o.kt)("details",{id:"add-location"},(0,o.kt)("summary",null,"Add location \ud83d\udd12"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/locations/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Headers:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,o.kt)("td",{parentName:"tr",align:null},"Token user_access_token"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON Body:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"city"),(0,o.kt)("td",{parentName:"tr",align:null},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nation"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 29,\n  "city": "London",\n  "nation": "United Kingdom",\n  "date_created": "2022-03-09T12:50:52.078095Z"\n}\n'))),(0,o.kt)("details",{id:"get-spec-location"},(0,o.kt)("summary",null,"Get specific location"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/locations/{location_id}/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 26,\n    "city": "Imaya",\n    "nation": "Africa",\n    "date_created": "2022-02-19T12:00:12.285023Z"\n}\n'))),(0,o.kt)("details",{id:"update-spec-location"},(0,o.kt)("summary",null,"Update specific location \ud83d\udd12"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PATCH")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/locations/{location_id}/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Headers:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,o.kt)("td",{parentName:"tr",align:null},"Token user_access_token"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON Body:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"city"),(0,o.kt)("td",{parentName:"tr",align:null},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"nation"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 29,\n  "city": "London",\n  "nation": "United Kingdom",\n  "date_created": "2022-03-09T12:50:52.078095Z"\n}\n'))))}d.isMDXComponent=!0}}]);