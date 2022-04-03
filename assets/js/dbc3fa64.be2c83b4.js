"use strict";(self.webpackChunkkaboom_docs=self.webpackChunkkaboom_docs||[]).push([[8814],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7860:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:1},u="Creating an account",s={unversionedId:"authentication/creating-an-account",id:"authentication/creating-an-account",title:"Creating an account",description:"In order to allow users to create an account, you need to send a POST request to the signup endpoint:",source:"@site/docs/authentication/creating-an-account.md",sourceDirName:"authentication",slug:"/authentication/creating-an-account",permalink:"/kaboom-docs/docs/authentication/creating-an-account",editUrl:"https://github.com/kaboom-db/kaboom-docs/tree/main/docs/authentication/creating-an-account.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/kaboom-docs/docs/authentication/"},next:{title:"Logging in",permalink:"/kaboom-docs/docs/authentication/logging-in"}},p={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-an-account"},"Creating an account"),(0,a.kt)("p",null,"In order to allow users to create an account, you need to send a ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request to the signup endpoint:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"POST")," ",(0,a.kt)("a",{parentName:"p",href:"https://staging-kaboom.herokuapp.com/v1/accounts/signup/"},"https://staging-kaboom.herokuapp.com/v1/accounts/signup/")),(0,a.kt)("p",null,"You also need to send the users credentials as part of the JSON body, like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "username": "testUser",\n  "password": "super_strong_password",\n  "email": "email@kaboom.com"\n}\n')),(0,a.kt)("p",null,"All fields in the above JSON snippet are required."),(0,a.kt)("p",null,"If the request is valid, the server will respond with a 201 status code and a JSON string:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "user_id": 4,\n  "username": "testUser",\n  "token": "aabbccggeeffgghhiijjkkllmmnnooppqqrrsstt"\n}\n')),(0,a.kt)("p",null,"The user has now signed up to Kaboom and can login."))}m.isMDXComponent=!0}}]);