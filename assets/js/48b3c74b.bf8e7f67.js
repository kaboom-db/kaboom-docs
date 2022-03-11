"use strict";(self.webpackChunkkaboom_docs=self.webpackChunkkaboom_docs||[]).push([[6554],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(n),k=r,c=u["".concat(s,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,o(o({ref:t},p),{},{components:n})):a.createElement(c,o({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5694:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={sidebar_position:2},s="Episodes",d={unversionedId:"cartoons/episodes",id:"cartoons/episodes",title:"Episodes",description:"Get episodes",source:"@site/docs/cartoons/episodes.md",sourceDirName:"cartoons",slug:"/cartoons/episodes",permalink:"/kaboom-docs/docs/cartoons/episodes",editUrl:"https://github.com/kaboom-db/kaboom-docs/tree/main/docs/cartoons/episodes.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Series",permalink:"/kaboom-docs/docs/cartoons/series"},next:{title:"Characters",permalink:"/kaboom-docs/docs/cartoons/characters"}},p={},m=[],u={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"episodes"},"Episodes"),(0,l.kt)("details",{id:"get-episodes"},(0,l.kt)("summary",null,"Get episodes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/episodes/")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Query params:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"query"),(0,l.kt)("td",{parentName:"tr",align:null},"the power"),(0,l.kt)("td",{parentName:"tr",align:null},"str"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"series"),(0,l.kt)("td",{parentName:"tr",align:null},"43"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_date_before"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_date_after"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"date"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"season_number"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"episode_number"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page *"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("p",null,"*"," pagination purposes"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "count": 1,\n  "next": null,\n  "previous": null,\n  "results": [\n    {\n      "id": 5,\n      "series": {\n        "id": 43,\n        "genres": [\n          {\n            "id": 1,\n            "genre": "Animation"\n          },\n          {\n            "id": 2,\n            "genre": "Comedy"\n          }\n        ],\n        "network": {\n          "id": 1,\n          "name": "Cartoon Network",\n          "website": "",\n          "logo": "",\n          "date_created": "2022-01-13T20:02:38.507854Z"\n        },\n        "characters": [\n          {\n            "id": 4,\n            "voice_actors": [\n              {\n                "id": 2,\n                "age": 19,\n                "name": "Test Actor",\n                "image": "",\n                "date_of_birth": "2002-07-15",\n                "date_of_death": null,\n                "biography": "",\n                "date_created": "2022-02-07T17:36:46.263489Z"\n              }\n            ],\n            "teams": [],\n            "location_of_operation": null,\n            "name": "Rigby",\n            "alias": null,\n            "image": "",\n            "biography": "RIGBONINGGGGGGGGGG",\n            "status": "ALIVE",\n            "alignment": "GOOD",\n            "intelligence": 0,\n            "strength": 0,\n            "speed": 0,\n            "durability": 0,\n            "power": 0,\n            "combat": 0,\n            "date_created": "2022-02-05T10:39:07.452127Z"\n          }\n        ],\n        "name": "Regular Show",\n        "summary": "The series revolves around the lives of two friends, a blue jay named Mordecai and a raccoon named Rigby\u2014both employed as groundskeepers at a local park. Their regular attempts to slack off usually lead to surreal, extreme, and often supernatural misadventures. During these misadventures, they interact with the show\'s other main characters: Benson, Pops, Muscle Man, Hi-Five Ghost, Skips, Thomas, Margaret and Eileen.",\n        "season_count": 8,\n        "cover_image": "",\n        "background_image": "",\n        "status": "COMPLETED",\n        "rating": null,\n        "website": "https://cartoonnetwork.com/",\n        "imdb_id": "tt1710308",\n        "tmdb_id": 31132,\n        "date_created": "2022-03-09T09:49:45.682459Z"\n      },\n      "episode_number": 1,\n      "season_number": 1,\n      "name": "The Power",\n      "summary": "Mordecai and Rigby must find a way to cover up a hole in the wall they created, and a magical keyboard they name \'The Power\' might be just the thing for it.",\n      "release_date": "2010-09-06",\n      "screenshot": "",\n      "date_created": "2022-03-09T11:35:22.568420Z",\n      "runtime": 11\n    }\n  ]\n}\n'))),(0,l.kt)("details",{id:"add-episode"},(0,l.kt)("summary",null,"Add episode \ud83d\udd12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/episode/")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Headers:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Token user_access_token"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JSON Body:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"episode_number"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"season_number"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"series"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"summary"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_date"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"runtime"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 6,\n  "episode_number": 2,\n  "season_number": 1,\n  "name": "Just Set Up the Chairs",\n  "summary": "A birthday party is scheduled in the park, and everyone has interesting jobs to do. That is, everybody but Mordecai and Rigby, who are only trusted with the lame job of setting up the chairs. In order to prove they are not slackers, the duo agree to set them up without being distracted.",\n  "release_date": "2010-09-13",\n  "screenshot": "",\n  "date_created": "2022-03-09T11:42:40.809862Z",\n  "runtime": 11,\n  "series": 43\n}\n'))),(0,l.kt)("details",{id:"get-spec-episode"},(0,l.kt)("summary",null,"Get specific episode"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"GET")," ",(0,l.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/episodes/{episode_id}/")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5,\n  "series": {\n    "id": 43,\n    "genres": [\n      {\n        "id": 1,\n        "genre": "Animation"\n      },\n      {\n        "id": 2,\n        "genre": "Comedy"\n      }\n    ],\n    "network": {\n      "id": 1,\n      "name": "Cartoon Network",\n      "website": "",\n      "logo": "",\n      "date_created": "2022-01-13T20:02:38.507854Z"\n    },\n    "characters": [\n      {\n        "id": 4,\n        "voice_actors": [\n          {\n            "id": 2,\n            "age": 19,\n            "name": "Test Actor",\n            "image": "",\n            "date_of_birth": "2002-07-15",\n            "date_of_death": null,\n            "biography": "",\n            "date_created": "2022-02-07T17:36:46.263489Z"\n          }\n        ],\n        "teams": [],\n        "location_of_operation": null,\n        "name": "Rigby",\n        "alias": null,\n        "image": "",\n        "biography": "RIGBONINGGGGGGGGGG",\n        "status": "ALIVE",\n        "alignment": "GOOD",\n        "intelligence": 0,\n        "strength": 0,\n        "speed": 0,\n        "durability": 0,\n        "power": 0,\n        "combat": 0,\n        "date_created": "2022-02-05T10:39:07.452127Z"\n      }\n    ],\n    "name": "Regular Show",\n    "summary": "The series revolves around the lives of two friends, a blue jay named Mordecai and a raccoon named Rigby\u2014both employed as groundskeepers at a local park. Their regular attempts to slack off usually lead to surreal, extreme, and often supernatural misadventures. During these misadventures, they interact with the show\'s other main characters: Benson, Pops, Muscle Man, Hi-Five Ghost, Skips, Thomas, Margaret and Eileen.",\n    "season_count": 8,\n    "cover_image": "",\n    "background_image": "",\n    "status": "COMPLETED",\n    "rating": null,\n    "website": "https://cartoonnetwork.com/",\n    "imdb_id": "tt1710308",\n    "tmdb_id": 31132,\n    "date_created": "2022-03-09T09:49:45.682459Z"\n  },\n  "episode_number": 1,\n  "season_number": 1,\n  "name": "The Power",\n  "summary": "Mordecai and Rigby must find a way to cover up a hole in the wall they created, and a magical keyboard they name \'The Power\' might be just the thing for it.",\n  "release_date": "2010-09-06",\n  "screenshot": "",\n  "date_created": "2022-03-09T11:35:22.568420Z",\n  "runtime": 11\n}\n'))),(0,l.kt)("details",{id:"update-spec-character"},(0,l.kt)("summary",null,"Update specific episode \ud83d\udd12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PATCH")," ",(0,l.kt)("inlineCode",{parentName:"p"},"https://staging-kaboom.herokuapp.com/v1/cartoons/episodes/{episode_id}/")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Headers:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Authorization"),(0,l.kt)("td",{parentName:"tr",align:null},"Token user_access_token"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JSON Body:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"episode_number"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"season_number"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"series"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"summary"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_date"),(0,l.kt)("td",{parentName:"tr",align:null},"no")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"runtime"),(0,l.kt)("td",{parentName:"tr",align:null},"no")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Response:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 5,\n  "episode_number": 1,\n  "season_number": 1,\n  "name": "The Power",\n  "summary": "FIRST EPISODE OF REGULAR SHOW",\n  "release_date": "2010-09-06",\n  "screenshot": "",\n  "date_created": "2022-03-09T11:35:22.568420Z",\n  "runtime": 11,\n  "series": 43\n}\n'))))}k.isMDXComponent=!0}}]);