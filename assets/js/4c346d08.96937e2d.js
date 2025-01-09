"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const l={slug:"a_new_umg",title:"A New UMG",tags:["design","umg","coding"]},r=void 0,o={permalink:"/blog/a_new_umg",source:"@site/blog/2025-01-08_a_new_umg.md",title:"A New UMG",description:"UMG is probably going to be re-written from the ground-up.",date:"2025-01-08T00:00:00.000Z",formattedDate:"January 8, 2025",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"umg",permalink:"/blog/tags/umg"},{label:"coding",permalink:"/blog/tags/coding"}],readingTime:8.68,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"a_new_umg",title:"A New UMG",tags:["design","umg","coding"]},prevItem:{title:"Lessons from 3 years of UMG",permalink:"/blog/lessons_from_umg"},nextItem:{title:"Premature event listeners",permalink:"/blog/premature_systems"}},s={authorsImageUrls:[]},p=[{value:"Explicit &gt; Implicit",id:"explicit--implicit",level:2},{value:"Broader, simpler systems and APIs:",id:"broader-simpler-systems-and-apis",level:2},{value:"Load-time validation is great",id:"load-time-validation-is-great",level:2},{value:"Hybrid OO-ECS works really well.",id:"hybrid-oo-ecs-works-really-well",level:2},{value:"Sometimes it&#39;s best <em>not</em> to implement something, and to instead have glue-code.",id:"sometimes-its-best-not-to-implement-something-and-to-instead-have-glue-code",level:2},{value:"Custom entity data structures",id:"custom-entity-data-structures",level:2},{value:"Things that worked well for UMG:",id:"things-that-worked-well-for-umg",level:2},{value:"Events:",id:"events",level:2},{value:"Lets talk about &quot;flexibility.&quot;",id:"lets-talk-about-flexibility",level:2},{value:"Hard limitations are good",id:"hard-limitations-are-good",level:2},{value:"Entity Archetypes",id:"entity-archetypes",level:2},{value:"Smart event/question buses:",id:"smart-eventquestion-buses",level:2},{value:"ISSUE WITH THIS OPTIMIZATION:",id:"issue-with-this-optimization",level:4}],u={toc:p},m="wrapper";function d(e){let{components:t,...l}=e;return(0,i.kt)(m,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"UMG is probably going to be re-written from the ground-up.",(0,i.kt)("br",{parentName:"p"}),"\n","What would it look like?"),(0,i.kt)("p",null,"It has come to my attention that the original version of UMG was written... pretty badly.",(0,i.kt)("br",{parentName:"p"}),"\n","I have learned a LOT as an engineer since the genesis of UMG, and I feel like the system honestly ",(0,i.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/SacrificialArchitecture.html"},"deserves a full rewrite.")),(0,i.kt)("p",null,"I didn't intend for this, it's mainly because I am a novice engineer, and am still learning."),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"umg_meme",src:n(1190).Z,width:"609",height:"349"})),(0,i.kt)("br",null),(0,i.kt)("p",null,"This blog-post will essentially go over a list of things that I think should be changed/made better with the new version of UMG."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"explicit--implicit"},"Explicit > Implicit"),(0,i.kt)("p",null,"The engine shouldn't do much stuff implicitly, under the hood.  "),(0,i.kt)("p",null,"In legacy-umg, we synced entities automatically.",(0,i.kt)("br",{parentName:"p"}),"\n","We buffered entities to the ECS automatically.",(0,i.kt)("br",{parentName:"p"}),"\n","We added entities to groups automatically after creation.",(0,i.kt)("br",{parentName:"p"}),"\n","We loaded images automatically/implicitly.",(0,i.kt)("br",{parentName:"p"}),"\n","We loaded sounds automatically/implicitly.  "),(0,i.kt)("p",null,"^^^ All of this is implicit behaviour!",(0,i.kt)("br",{parentName:"p"}),"\n",'Implicit code is bad, because it can restrict what the programmers can do,\nand it makes it so some code ends up being written as a "hack" around the implicit systems that exist.'),(0,i.kt)("p",null,"It's also makes the system harder to reason about as a whole."),(0,i.kt)("p",null,"Next time, make stuff explicit please."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"broader-simpler-systems-and-apis"},"Broader, simpler systems and APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Entities should maybe just be regular tables..? Let the modder choose the metatable."),(0,i.kt)("li",{parentName:"ul"},"Entity-id syncing should be a separate system.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"We should be able to register any table with an ID across the network."))),(0,i.kt)("li",{parentName:"ul"},"Entities should be added to the ECS ",(0,i.kt)("em",{parentName:"li"},"manually.")," Buffering should be explicit."),(0,i.kt)("li",{parentName:"ul"},"Make packet-definitions simple. Typed packets, no dynamic stuff.")),(0,i.kt)("p",null,'Try to avoid any kind of "deep" APIs or abstractions.',(0,i.kt)("br",{parentName:"p"}),"\n","Keep everything broad and flat."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"load-time-validation-is-great"},"Load-time validation is great"),(0,i.kt)("p",null,"We should attempt to verify as much stuff as possible at load time.\nWhether that be name-conflicts, data-integrity issues, or misuse of APIs."),(0,i.kt)("p",null,"Good example:",(0,i.kt)("br",{parentName:"p"}),"\n","We should have a new function: ",(0,i.kt)("inlineCode",{parentName:"p"},"umg.defineComponent(compName)"),(0,i.kt)("br",{parentName:"p"}),"\n","If two mods try to define the same component, we should throw an error."),(0,i.kt)("p",null,"Likewise, if a mod tries to define a non-existant shcomp on an entity,\nthen we also should throw an error"),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"hybrid-oo-ecs-works-really-well"},"Hybrid OO-ECS works really well."),(0,i.kt)("p",null,"Pure-ECS has no entity-specific behaviour. Entities cannot contain functions in pure-ECS, they can only contain data.\n(This is in contrast to OOP, where functions can exist on objects, and be completely custom)  "),(0,i.kt)("p",null,"In reality, sometimes we just ",(0,i.kt)("em",{parentName:"p"},"need")," entity-specific shit.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"onActivate")," function shcomp in lootplot was a complete GODSEND.",(0,i.kt)("br",{parentName:"p"}),"\n","We need more of that for future versions. It was just amazing, really."),(0,i.kt)("p",null,"In future, put more thought into how we can allow for better function-shcomps in the future."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"sometimes-its-best-not-to-implement-something-and-to-instead-have-glue-code"},"Sometimes it's best ",(0,i.kt)("em",{parentName:"h2"},"not")," to implement something, and to instead have glue-code."),(0,i.kt)("p",null,"Godot has a ",(0,i.kt)("inlineCode",{parentName:"p"},"move_and_collide()")," method that you can call inside of the update-method of nodes.",(0,i.kt)("br",{parentName:"p"}),"\n","This is really beautiful, because it allows the user to completely override the movement code!  "),(0,i.kt)("p",null,"Instead of creating some weird, bloaty abstraction (ie an overridable ",(0,i.kt)("inlineCode",{parentName:"p"},".move()")," method), godot just lets you call the method directly."),(0,i.kt)("p",null,"This is honestly amazing.",(0,i.kt)("br",{parentName:"p"}),"\n","And we should use it for syncing, and for entity-movement code too."),(0,i.kt)("p",null,"Having a bit of glue code is fine, especially if it avoids having an overreaching abstraction."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"custom-entity-data-structures"},"Custom entity data structures"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"group:onAdded(func)")," was great, since allowed for custom data-structures for entities.",(0,i.kt)("br",{parentName:"p"}),"\n","More of this please. I think we can do a bit better, too.   "),(0,i.kt)("p",null,"Encourage helper-wrappers?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'function newEntityGrid(components...)\n    local g = umg.group(...)\n    local grid = Grid()\n\n    g:onAdded(function(ent)\n        grid:add(ent)\n    end)\n    g:onRemoved(function(ent)\n        grid:remove(ent)\n    end)\n\n    return grid\nend\n\nlocal myGrid = newEntityGrid("fire", "burnable")\n')),(0,i.kt)("p",null,"More importantly, tho, we should aim to provide better features to enable this sort of flexible programming.",(0,i.kt)("br",{parentName:"p"}),"\n","Maybe something to do with archetypes in the future?"),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"things-that-worked-well-for-umg"},"Things that worked well for UMG:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync.proxyEventToClient")," this was amazing, simple, and super helpful"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync.autoSyncComponent")," for simple components, this was amazing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"typecheck")," mod was DAMN AWESOME."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"umg.exists")," was really great"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"onActivate")," component (and in general, function shcomps) were great"),(0,i.kt)("li",{parentName:"ul"},"wrapping ",(0,i.kt)("inlineCode",{parentName:"li"},"umg.defineEntityType")," was super cool. (eg ",(0,i.kt)("inlineCode",{parentName:"li"},"defineFood"),")"),(0,i.kt)("li",{parentName:"ul"},"Querying across entities in a global-ish fashion was very elegant. ")),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"events"},"Events:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"evbuses, qbuses were pretty good (kinda)")),(0,i.kt)("p",null,"I was a bit unhappy with how events/questions were defined.\nI would like strong-type-lints in the next version, maybe.",(0,i.kt)("br",{parentName:"p"}),"\n","Something like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local call, on = Event()\n\ncall(1,2,3)\n\non(function(x,y,z)\n    print("explosion!")\nend)\n')),(0,i.kt)("p",null,"^^^ this would allow LuaLS to work.",(0,i.kt)("br",{parentName:"p"}),"\n","Not only that, but we could also do stuff like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local call, on = Event()\nproxyEventToClient(call, on, "mod:event_id")\n')),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"lets-talk-about-flexibility"},'Lets talk about "flexibility."'),(0,i.kt)("p",null,'When I started, a core goal of UMG was "flexibility".',(0,i.kt)("br",{parentName:"p"}),"\n","I changed my mind on this, and now, I think that a more practical goal is to have high cohesion between mods instead.  "),(0,i.kt)("p",null,"When writing code, you can never write code that accounts for everyone's use case. That's just not realistic.",(0,i.kt)("br",{parentName:"p"}),"\n","I often found that, whilst trying to aim for great-flexibility, I would just end up making premature abstractions that ended up adding useless complexity to the system.",(0,i.kt)("br",{parentName:"p"}),"\n","\"Oh, but it's flexible! Oh wow, it's so generic!!!\"",(0,i.kt)("br",{parentName:"p"}),"\n","No. Shut up!",(0,i.kt)("br",{parentName:"p"}),"\n","We don't want complex abstractions. The more abstract something is, the harder it is to work with in a practical sense."),(0,i.kt)("p",null,"A much better goal, is to prioritize making good, simple assumptions about stuff instead.  "),(0,i.kt)("p",null,"In general, our goal should be to create hard, well-defined ",(0,i.kt)("em",{parentName:"p"},"assumptions")," about systems, rather than trying to shoehorn in a one-size-fits-all approach that just ends up getting nowhere, and doing nothing useful."),(0,i.kt)("p",null,"The new goal for UMG is to create maximum ",(0,i.kt)("em",{parentName:"p"},"cohesion")," between mods.",(0,i.kt)("br",{parentName:"p"}),"\n","If modder-A and modder-B write mods, then both mods should ideally work with each other just fine."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"hard-limitations-are-good"},"Hard limitations are good"),(0,i.kt)("p",null,"At face value, limitations sound objectively bad.",(0,i.kt)("br",{parentName:"p"}),"\n","But, like with many things, there is always nuance:"),(0,i.kt)("p",null,"If a system has more limitations, then we can reason about it more effectively.",(0,i.kt)("br",{parentName:"p"}),"\n","Simple example: ",(0,i.kt)("inlineCode",{parentName:"p"},"foo variable is a number"),(0,i.kt)("br",{parentName:"p"}),"\n",'^^^ This is a big limitation. But this "limitation" gives us great value.',(0,i.kt)("br",{parentName:"p"}),"\n","What value do we get? Lets see!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[foo is a number]\n- we can add,subtract,multiply,divide by foo\n- we can plug it into functions\n- we can set the value of it robustly\n- DOWNSIDE: we cant represent more exotic types in foo\n\n[foo is any type]\n- It's flexible\n- DOWNSIDE: We lose ALL of the above benefits\n")),(0,i.kt)("p",null,"This is a kinda weird/contrived example, but it demonstrates the idea.",(0,i.kt)("br",{parentName:"p"}),"\n","Limitations can be good, when chosen well!! It's all about ",(0,i.kt)("em",{parentName:"p"},"execution.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Good limitation, is ",(0,i.kt)("em",{parentName:"li"},"very good"),"."),(0,i.kt)("li",{parentName:"ul"},"Bad limitation, is VERY, VERY BAD.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"EXAMPLE: Revival vs NO Revival of entities:")),(0,i.kt)("mermaid",{value:"graph LR;\n    Entity_Unincorporated -- incorporate --\x3e Entity\n    Entity --destroy--\x3e Dead_Entity\n    Dead_Entity -- revive! --\x3e Entity"}),(0,i.kt)("mermaid",{value:"graph LR;\n    Entity_Unincorporated -- incorporate --\x3e Entity\n    Entity --destroy--\x3e Dead_Entity"}),(0,i.kt)("p",null,"At a glance, it may seem like these two setups are pretty much identical.  "),(0,i.kt)("p",null,"BUT ",(0,i.kt)("strong",{parentName:"p"},"NO!!!"),' The second one has a hard limitation: "Dead entities will NEVER be revived."',(0,i.kt)("br",{parentName:"p"}),"\n","This limitation gives us ",(0,i.kt)("em",{parentName:"p"},"so much more power."),"  "),(0,i.kt)("p",null,"Systems that receive a dead-entity can be 100% sure that it will never exist again. So, they can dispose of it happily.",(0,i.kt)("br",{parentName:"p"}),"\n","The server doesn't need to worry about syncing, and systems that have a hold on the entity-id can happily recycle the ent-id for other stuff."),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Another example:",(0,i.kt)("br",{parentName:"p"}),"\n","In minecraft, you can only have 1 block per (x,y,z) position.",(0,i.kt)("br",{parentName:"p"}),"\n","(IE, you cannot have blocks that are placed inbetween other blocks)",(0,i.kt)("br",{parentName:"p"}),"\n","This sounds bad, but it's not. It's actually very good!",(0,i.kt)("br",{parentName:"p"}),"\n","If there are more limitations, then our code can reason about stuff better:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There don't need to be as many safety checks"),(0,i.kt)("li",{parentName:"ul"},"Our systems can be more sure of things"),(0,i.kt)("li",{parentName:"ul"},"We can make more powerful/strong assumptions")),(0,i.kt)("p",null,"And best of all, the one-block per (x,y,z) position fits really well with the game; in fact, it even defines ",(0,i.kt)("em",{parentName:"p"},"what the game is.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"TO SUM IT UP:"),(0,i.kt)("br",{parentName:"p"}),"\n","Limitations can often provide good value.",(0,i.kt)("br",{parentName:"p"}),"\n","What's really important is choosing the ",(0,i.kt)("em",{parentName:"p"},"right")," limitations, and not putting limits on stuff if there is no clear gain."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"entity-archetypes"},"Entity Archetypes"),(0,i.kt)("p",null,"Entity ",(0,i.kt)("a",{parentName:"p",href:"https://ajmmertens.medium.com/building-an-ecs-2-archetypes-and-vectorization-fe21690805f9"},"Archetypes")," are a fantastic idea.",(0,i.kt)("br",{parentName:"p"}),"\n","Obviously, UMG won't get the cache-benefits of them; but we will definitely get the efficiency and design benefits.  "),(0,i.kt)("p",null,"In general, a UMG Archetype will just be a data structure that represents a Set of components, and stores entities.",(0,i.kt)("br",{parentName:"p"}),"\n","Instead of storing entities in groups; groups will store archetypes. Archetypes will store entities."),(0,i.kt)("p",null,"Likewise, instead of having logical-AND for group-ownership, what about having functions with signature: ",(0,i.kt)("inlineCode",{parentName:"p"},"fun(arc: Archetype) -> bool")," that determines whether the entity archetype should be accepted?"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'local group = Group(function(archetype)\n    return archetype:hasComponent("x") and archetype:hasComponent("y")\nend)\n\n-- same as:\nlocal group = Group(withComponents({"x", "y"}))\n\n-- (with the legacy systems:)\nlocal group = umg.group("x", "y")\n')),(0,i.kt)("p",null,"(Be wary, though! Archetypes ",(0,i.kt)("strong",{parentName:"p"},"NEED")," to be lazily created, or else, with 100 components, we would have 2^100 archetypes!",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("em",{parentName:"p"},"In general, there should NEVER be more archetypes than entity-types."),")"),(0,i.kt)("p",null,"We can also use archetypes for other exotic purposes."),(0,i.kt)("hr",null),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"smart-eventquestion-buses"},"Smart event/question buses:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},'on(function (ent)\n  if ent.comp and ent.c2 then\n    func(ent)\n  end\nend)\n\n-- equivalent to :\n\nsmartOn({"comp", "c2"}, func)\n')),(0,i.kt)("p",null,"When emitting an event with entity as first argument, instead of looping all listeners,  we can use the archetype of the entity to do an O(1) lookup to get  all of the listeners that will respond to this entity."),(0,i.kt)("h4",{id:"issue-with-this-optimization"},"ISSUE WITH THIS OPTIMIZATION:"),(0,i.kt)("p",null,"We need to store a list of functions inside each archetype, for each event. EG:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-lua"},"archetype.eventListeners = {  [eventName] = {f1, f2, f3 ... } }\n")),(0,i.kt)("p",null,"This\u2026 is quite cache inefficient. HOWEVER, we can fix this by sharing function lists:"),(0,i.kt)("p",null,"A lot of the time, function lists will be the same across archetypes. (eg. imagine a list of event-listeners that dont require ANY components.  Each archetype would contain the exact same functions for that event!!)"),(0,i.kt)("p",null,"We can optimize, then, by sharing identical lists across archetypes. This makes caching slightly better, and more efficient."),(0,i.kt)("p",null,"In order to discover what lists are identical, we should use bitset data-structure; (the same one we use to compare components in archetypes and groups)",(0,i.kt)("br",{parentName:"p"}),"\n","Each position in the bitset references an event method.",(0,i.kt)("br",{parentName:"p"}),"\n","Whereas with archetypes/entities, each position in the bitset refers to a component-string."))}d.isMDXComponent=!0},1190:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/old_umg_bad_code-14e1e89c68afcf9368db24578ad9e54b.png"}}]);