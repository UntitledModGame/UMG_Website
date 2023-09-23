"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9972],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>y});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},m="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=p(n),c=a,y=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?r.createElement(y,i(i({ref:e},u),{},{components:n})):r.createElement(y,i({ref:e},u))}));function y(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[m]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3025:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},i="Entities",o={unversionedId:"Getting-started/entities",id:"Getting-started/entities",title:"Entities",description:"An entity is just a glorified lua table, pretty much.",source:"@site/docs/Getting-started/entities.md",sourceDirName:"Getting-started",slug:"/Getting-started/entities",permalink:"/docs/Getting-started/entities",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buses",permalink:"/docs/Getting-started/buses"},next:{title:"Groups",permalink:"/docs/Getting-started/groups"}},s={},p=[],u={toc:p},m="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"entities"},"Entities"),(0,a.kt)("p",null,"An entity is just a glorified lua table, pretty much.",(0,a.kt)("br",null),'\nThey contain "components", which are just key-values in the table.'),(0,a.kt)("p",null,"First, lets understand the types of components.",(0,a.kt)("br",null),'\nThere are 2 component types, "shared" and "regular":'),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Component:")),(0,a.kt)("th",{parentName:"tr",align:null},"Shared component"),(0,a.kt)("th",{parentName:"tr",align:null},"Regular component"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Ownership:")),(0,a.kt)("td",{parentName:"tr",align:null},"Shared between entities of the same type"),(0,a.kt)("td",{parentName:"tr",align:null},"Each entity has unique copy")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Takes space?")),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Modifiable?")),(0,a.kt)("td",{parentName:"tr",align:null},"No(t really)"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Removable?")),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Saved per entity?")),(0,a.kt)("td",{parentName:"tr",align:null},"No"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Overridable?")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes; turns into Regular component"),(0,a.kt)("td",{parentName:"tr",align:null},"No")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Can hold functions?")),(0,a.kt)("td",{parentName:"tr",align:null},"Yes"),(0,a.kt)("td",{parentName:"tr",align:null},"No")))),(0,a.kt)("p",null,"Other than this, Regular components and Shared components affect entities in the same way.",(0,a.kt)("br",null),"\nLets see an example!"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Before we create an entity though, we must define an entity-type!",(0,a.kt)("br",null),'\n(Think of this like a "class" in OOP)',(0,a.kt)("br",null),"\nTo define an entity type, return a table from a file inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"entities/"),".",(0,a.kt)("br",null),"\nUMG will automatically load the entity-type, and put a constructor inside of the ",(0,a.kt)("inlineCode",{parentName:"p"},"server.entities")," table."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Lets see an example of an entity-type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"-- entities/bullet.lua\nreturn {\n    projectile = {\n        damage = 30 -- does 30 dmg\n    },\n    light = {size = 40} -- size of light = 40px\n}\n")),(0,a.kt)("p",null,'The stuff you see inside the table are "Shared components".',(0,a.kt)("br",null),'\nIf we want to add "Regular components", we need to make an actual entity.',(0,a.kt)("br",null),"\nExample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'\nlocal entity = server.entities.bullet()\n-- Ok! Lets add some Regular components to our bullet entity:\n\nentity:addComponent("x", 10) -- adds regular component, x=10\n\nentity.y = 5 -- same as entity:addComponent("y", 5)\nentity.randomComponent4834 = "foo!!!!" -- etc etc\n\n-- now, our entity has some Regular components:\nprint(entity.x) -- 10\nprint(entity.y) -- 5\nprint(entity.randomComponent4834) -- "foo!!!!"\n\n-- We can access shared components in the same way:\nprint(entity.light) -- {size = 40}    \nprint(entity.projectile) -- {damage = 30}\n\n')),(0,a.kt)("p",null,"There are some methods we can call, too:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'\nent:delete() -- deletes an entity.\n-- (This can only be used serverside!)\n-- Deleting an entity will automatically delete it for all clients next tick.\n\nent:type() -- example_mod:my_entity\n-- returns the type of the entity.\n\nent:hasComponent("x")\n-- returns true if entity has component `x`, false otherwise\n\nent:isRegular("compName")\n-- returns true if "compName" is a regular component in ent, false otherwise\n\nent:isShared("compName2") \n-- returns true if compName2 is a shared component in ent, false otherwise\n')))}d.isMDXComponent=!0}}]);