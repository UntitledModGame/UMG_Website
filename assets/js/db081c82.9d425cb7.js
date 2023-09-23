"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[373],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7282:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={slug:"properties",title:"How should we represent entity properties?",tags:["coding","design"]},o="How should we represent entity properties?",i={permalink:"/blog/properties",source:"@site/blog/2023-09-23_properties.md",title:"How should we represent entity properties?",description:"How should properties be represented in video games?",date:"2023-09-23T00:00:00.000Z",formattedDate:"September 23, 2023",tags:[{label:"coding",permalink:"/blog/tags/coding"},{label:"design",permalink:"/blog/tags/design"}],readingTime:3.525,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"properties",title:"How should we represent entity properties?",tags:["coding","design"]},nextItem:{title:"Common lua idioms",permalink:"/blog/idioms"}},s={authorsImageUrls:[]},u=[{value:"Recalculate per tick",id:"recalculate-per-tick",level:2},{value:"Recalculate whenever",id:"recalculate-whenever",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How should properties be represented in video games?",(0,r.kt)("br",null),"\nI.e, maxHealth, damage, speed?"),(0,r.kt)("p",null,"The naive approach is just to store the value directly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"ent.damage = 5\n\n-- If we want to increase/decrease damage, just add/subtract:\nent.damage += 5 -- increase \nent.damage -= 5 -- decrease :) \n")),(0,r.kt)("p",null,"But this approach falls apart as soon as we add damage modifiers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If ent inside circle\n    gain 2 dmg\n")),(0,r.kt)("p",null,"Suddenly, we have to increase/decrease ",(0,r.kt)("inlineCode",{parentName:"p"},"ent"),"s damage every time we enter/exit the circle.",(0,r.kt)("br",null),"\nAnd it gets a bit mucky... What happens if we have these two rules:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If ent inside circle\n    gain 2 dmg\n\nIf ent inside square\n    multiple dmg by 2\n")),(0,r.kt)("p",null,"Now imagine the following events:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ent dmg = 5\n\nent enters circle (dmg = 5+2 = 7)\nent enters square (dmg = 7*2 = 14)\nent leaves circle (dmg = 14-2 = 12)\nent leaves square (dmg = 12/2 = 6)\n\nent dmg = 6\n")),(0,r.kt)("p",null,"Uh oh!",(0,r.kt)("br",null),"\nYeah this is clearly a terrible way to represent properties."),(0,r.kt)("h1",{id:"ok-how-should-we-do-it-then"},"Ok. How should we do it then?"),(0,r.kt)("p",null,"I don't think there is a better way to do entity properties other than simply recalculating the properties on the fly.",(0,r.kt)("br",null),"\nWe can do it in a few different ways, though."),(0,r.kt)("h2",{id:"recalculate-per-tick"},"Recalculate per tick"),(0,r.kt)("p",null,"If we have our damage system recalculate the entity's damage each tick,\nthen we don't need to worry about state, and our issues are solved."),(0,r.kt)("p",null,"That would look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"eachTick(function() {\n    for ent in damageEntities {\n        ent.damage = calculateDamage(ent)\n    }\n})\n")),(0,r.kt)("p",null,'But the main glaring "downside" with this approach is that damage values could be incorrect. Take the following example:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every time I shoot a bullet, gain +2 damage for 5 seconds",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"shoots 10 bullets in one tick"),(0,r.kt)("li",{parentName:"ul"},"--\x3e uh oh! All 10 bullets have the same damage!")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PROS:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No statefulness")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CONS:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Not the best for performance"),(0,r.kt)("li",{parentName:"ul"},"Damage values may be incorrect, since it only refreshes per tick")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"recalculate-whenever"},"Recalculate whenever"),(0,r.kt)("p",null,"To avoid the above problem, we can recalculate more often.",(0,r.kt)("br",null),"\nHow about we recalculate damage every time we need it? i.e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"function shootBullet(ent) {\n    dmg = calculateDamage(ent)\n    bullet = newBullet(dmg)\n}\n")),(0,r.kt)("p",null,"This way, if we shoot 10 bullets, then our bullets are guaranteed to have the correct damage values.",(0,r.kt)("br",null),"\nThe ",(0,r.kt)("em",{parentName:"p"},"downside")," is that we are now having to recalculate every time we shoot. Not ideal!"),(0,r.kt)("p",null,"Likewise, whenever we want to even ",(0,r.kt)("em",{parentName:"p"},"access")," the damage property, we must recalculate. That could be pretty bad; but again, it depends on how complex our damage recalculation setup is."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"PROS:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"No statefulness"),(0,r.kt)("li",{parentName:"ul"},"Guaranteed accuracy")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"CONS:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Performance can be GARBO, depending on our setup")),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"calculation-tree--cache"},"Calculation tree + cache:"),(0,r.kt)("p",null,"One thing I haven't really touched on is how the calculation method actually works."),(0,r.kt)("p",null,"Lets imagine that we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"Recalculate whenever")," approach.",(0,r.kt)("br",null),"\nLets say we have benchmarked our program, and we are running into performance issues due to our Shield system. Our shield system is really complicated, and it requires querying over a bunch of other entities when recalculating."),(0,r.kt)("p",null,"What we could do here is split our setup into a tree:",(0,r.kt)("br",null),"\nIn this example, the ",(0,r.kt)("inlineCode",{parentName:"p"},"damage")," system is querying a bunch of calculator systems to obtain ",(0,r.kt)("inlineCode",{parentName:"p"},"damage"),"."),(0,r.kt)("mermaid",{value:"stateDiagram-v2\n    damage  --\x3e  shieldCalculator\n    damage  --\x3e  itemCalculator\n    damage  --\x3e  potionCalculator"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"With this setup, we can convert the ",(0,r.kt)("inlineCode",{parentName:"p"},"shieldCalculator")," system into a per-tick system, and add internal caching for efficiency.",(0,r.kt)("br",null),"\nThis way, the other 2 systems (potions and items) can remain accurate, and it's only the shields that are slightly out of date."),(0,r.kt)("p",null,"If we STILL run into performance issues, we can recalculate shields every 5 ticks instead, for example."),(0,r.kt)("p",null,'Likewise, if the potion system has a particular potion class that is problematic for performance, then the potion system could split itself up, and do some internal caching on "complex potions" to account:'),(0,r.kt)("hr",null),(0,r.kt)("mermaid",{value:"stateDiagram-v2\n    damage  --\x3e  shieldCalculator\n    damage  --\x3e  itemCalculator\n    damage  --\x3e  potionCalculator\n    potionCalculator --\x3e normalPotions\n    potionCalculator --\x3e complexPotions"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"You get the idea. :)"),(0,r.kt)("p",null,"To see a clean way as to how this damage system has been implemented in ",(0,r.kt)("a",{parentName:"p",href:"../umgtech"},"UMG"),", take a look at ",(0,r.kt)("a",{parentName:"p",href:"../buses"},"my article on question buses.")),(0,r.kt)("p",null,"Thanks for reading!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oli")))}m.isMDXComponent=!0}}]);