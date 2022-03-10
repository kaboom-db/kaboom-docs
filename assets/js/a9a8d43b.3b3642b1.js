"use strict";(self.webpackChunkkaboom_docs=self.webpackChunkkaboom_docs||[]).push([[7715],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=r,k=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(k,s(s({ref:e},u),{},{components:n})):a.createElement(k,s({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l.mdxType="string"==typeof t?t:r,s[1]=l;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2717:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],l={sidebar_position:4},i="Cartoon Subscriptions",p={unversionedId:"accounts/cartoon-subscriptions",id:"accounts/cartoon-subscriptions",title:"Cartoon Subscriptions",description:"Get cartoon subscriptions \ud83d\udd12",source:"@site/docs/accounts/cartoon-subscriptions.md",sourceDirName:"accounts",slug:"/accounts/cartoon-subscriptions",permalink:"/kaboom-docs/docs/accounts/cartoon-subscriptions",editUrl:"https://github.com/kaboom-db/kaboom-docs/tree/main/docs/accounts/cartoon-subscriptions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Read Issues",permalink:"/kaboom-docs/docs/accounts/read-issues"},next:{title:"Watched Episodes",permalink:"/kaboom-docs/docs/accounts/watched-episodes"}},u={},c=[],m={toc:c};function d(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cartoon-subscriptions"},"Cartoon Subscriptions"),(0,o.kt)("details",{id:"get-cartoon-subs"},(0,o.kt)("summary",null,"Get cartoon subscriptions \ud83d\udd12"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Query params:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"user"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"query"),(0,o.kt)("td",{parentName:"tr",align:null},"regular show"),(0,o.kt)("td",{parentName:"tr",align:null},"str"),(0,o.kt)("td",{parentName:"tr",align:null},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"page *"),(0,o.kt)("td",{parentName:"tr",align:null},"1"),(0,o.kt)("td",{parentName:"tr",align:null},"int"),(0,o.kt)("td",{parentName:"tr",align:null},"no")))),(0,o.kt)("p",null,"*"," pagination purposes"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 1,\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "id": 1,\n      "user": {\n        "username": "crxssed",\n        "id": 1,\n        "image": "https://www.gravatar.com/avatar/194556ddbe4401bf1e48aa8620f5f854?default=retro",\n        "date_joined": "2022-01-08",\n        "time_joined": "14:21:50",\n        "is_staff": true,\n        "userdata": {\n          "bio": "![hello there](https://media4.giphy.com/media/Nx0rz3jtxtEre/giphy.gif)\\n\\n## Hi!",\n          "private": false\n        }\n      },\n      "series": {\n        "id": 43,\n        "genres": [\n          {\n            "id": 1,\n            "genre": "Animation"\n          },\n          {\n            "id": 2,\n            "genre": "Comedy"\n          }\n        ],\n        "network": {\n          "id": 1,\n          "name": "Cartoon Network",\n          "website": "https://www.cartoonnetwork.co.uk",\n          "logo": "",\n          "date_created": "2022-01-13T20:02:38.507854Z"\n        },\n        "characters": [\n          {\n            "id": 4,\n            "voice_actors": [\n              {\n                "id": 2,\n                "age": 46,\n                "name": "John Doe",\n                "image": "",\n                "date_of_birth": "1975-07-15",\n                "date_of_death": null,\n                "biography": "",\n                "date_created": "2022-02-07T17:36:46.263489Z"\n              }\n            ],\n            "teams": [],\n            "location_of_operation": null,\n            "name": "Rigby",\n            "alias": null,\n            "image": "",\n            "biography": "RIGBONINGGGGGGGGGG",\n            "status": "ALIVE",\n            "alignment": "GOOD",\n            "intelligence": 0,\n            "strength": 0,\n            "speed": 0,\n            "durability": 0,\n            "power": 0,\n            "combat": 0,\n            "date_created": "2022-02-05T10:39:07.452127Z"\n          }\n        ],\n        "name": "Regular Show",\n        "summary": "The series revolves around the lives of two friends, a blue jay named Mordecai and a raccoon named Rigby\u2014both employed as groundskeepers at a local park. Their regular attempts to slack off usually lead to surreal, extreme, and often supernatural misadventures. During these misadventures, they interact with the show\'s other main characters: Benson, Pops, Muscle Man, Hi-Five Ghost, Skips, Thomas, Margaret and Eileen.",\n        "season_count": 8,\n        "cover_image": "",\n        "background_image": "",\n        "status": "COMPLETED",\n        "rating": 7,\n        "website": "https://cartoonnetwork.com/",\n        "imdb_id": "tt1710308",\n        "tmdb_id": 31132,\n        "date_created": "2022-03-09T09:49:45.682459Z"\n      },\n      "rating": 7,\n      "date_created": "2022-02-26T13:28:31Z"\n    }\n  ]\n}\n'))),(0,o.kt)("details",{id:"add-cartoon-sub"},(0,o.kt)("summary",null,"Add cartoon subscription \ud83d\udd12"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON Body:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"series"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rating"),(0,o.kt)("td",{parentName:"tr",align:null},"no")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 3,\n  "rating": 9.0,\n  "date_created": "2022-03-10T10:51:05.425717Z",\n  "series": 44,\n  "user": 1\n}\n'))),(0,o.kt)("details",{id:"remove-cartoon-sub"},(0,o.kt)("summary",null,"Remove cartoon subscription \ud83d\udd12"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DELETE")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON Body:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"series"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "success": "Successfully unsubscribed"\n}\n'))),(0,o.kt)("details",{id:"rate-cartoon"},(0,o.kt)("summary",null,"Rate cartoon \ud83d\udd12"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/accounts/cartoons/subscriptions/rate/")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON Body:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"series"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"rating"),(0,o.kt)("td",{parentName:"tr",align:null},"yes")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Response:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "series": 43,\n  "user": 1,\n  "id": 1,\n  "rating": 9\n}\n'))))}d.isMDXComponent=!0}}]);