"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4404],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),c=a,h=p["".concat(l,".").concat(c)]||p[c]||m[c]||r;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5854:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={slug:"versioning",title:"Arguments for and against versioning",tags:["design","umg"]},o="Arguments for and against versioning",s={permalink:"/blog/versioning",source:"@site/blog/2023-09-17_no_versioning.md",title:"Arguments for and against versioning",description:"(This article requires a basic understanding of my vision for Untitled Mod Game. If you are unfamiliar, have a quick skim.)",date:"2023-09-17T00:00:00.000Z",formattedDate:"September 17, 2023",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"umg",permalink:"/blog/tags/umg"}],readingTime:5.24,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"versioning",title:"Arguments for and against versioning",tags:["design","umg"]},prevItem:{title:"Common lua idioms",permalink:"/blog/idioms"},nextItem:{title:"Why should I use an Entity Component System?",permalink:"/blog/ECS"}},l={authorsImageUrls:[]},d=[],u={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(This article requires a basic understanding of my vision for Untitled Mod Game. If you are unfamiliar, ",(0,a.kt)("a",{parentName:"em",href:"umgtech"},"have a quick skim"),".)")),(0,a.kt)("p",null,"In Untitled Mod Game, there is going to be no versioning of mods.",(0,a.kt)("br",null),"\nThis is a very bold call, and it sounds stupid at face value.\nBut please, hear me out!\nThis lil article will explain my thought process."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"In pretty much all software packaging systems, software has\nversion information.",(0,a.kt)("br",null),"\nVersioning is great, because it allows introducing breaking changes to software without harming existing users."),(0,a.kt)("p",null,"And that's pretty much the main \"point\" of versioning, is dealing with breaking changes.\nIf users don't want to deal with breaking changes, they can just stay on an older version."),(0,a.kt)("p",null,"Pros of versioning:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allows developers to break compatibility in favour of better features or removal of tech debt"),(0,a.kt)("li",{parentName:"ul"},"Users can use older versions if they want, granting a lot more freedom")),(0,a.kt)("p",null,"Cons of versioning: (no major cons, really)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Userbase can become fragmented")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Now, before we start, I'd just like to note,\nI'm ",(0,a.kt)("strong",{parentName:"p"},"100% FOR")," the use of versioning, and I think you'd have to be an idiot not to see the value in it for 99% of situations."),(0,a.kt)("p",null,"But UMG is a bit special in what it's trying to achieve.",(0,a.kt)("br",null),"\nThere's a very concerning situation where versioning could yield to a bit of a mess, I'll explain it below."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Let's do a thought experiment, lets assume that mods ARE versioned in UMG."),(0,a.kt)("p",null,"As discussed in ",(0,a.kt)("a",{parentName:"p",href:"umgtech"},"my other article"),", a central goal of the UMG ecosystem is to ensure hyper-compatibility between mods."),(0,a.kt)("p",null,"I want to be able to load the ",(0,a.kt)("inlineCode",{parentName:"p"},"ridable")," mod, and have it work fully with the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," mod. That way, I can ride my horse off into the sunset, weilding my minigun, and rocking a cowboy hat."),(0,a.kt)("p",null,"Ideally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," mod should not need to care about the ",(0,a.kt)("inlineCode",{parentName:"p"},"ridable")," mod. In fact, both mods should not know about each other, since they are unrelated.",(0,a.kt)("br",null),"\nHowever, both mods will still need to tag onto other mods.\nBoth the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," mod, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"ridable")," mod will need the ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions")," mod to be loaded, so that they can fudge around with what dimensions steeds are in, and what dimensions projectiles are spawned in."),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    riding --\x3e dimensions_v0\n    projectiles --\x3e dimensions_v0"}),(0,a.kt)("p",null,"But lets assume that there was a breaking change in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions")," mod, from version 0.0 to version 1.0, which overhauled the way entities are stored inside of dimensions, and changed a few things about the API."),(0,a.kt)("p",null,"Lets say that the ",(0,a.kt)("inlineCode",{parentName:"p"},"riding")," mod updated to the latest version, but the author of the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," mod disagreed with the changes, so they stayed on the older version.",(0,a.kt)("br",null),"\nSuddenly, we would have a setup like so:"),(0,a.kt)("mermaid",{value:"stateDiagram-v2\n    riding --\x3e dimensions_v1\n    projectiles --\x3e dimensions_v0"}),(0,a.kt)("p",null,"Now, what fricken SUCKS, is that ",(0,a.kt)("inlineCode",{parentName:"p"},"riding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," are no longer compatible.",(0,a.kt)("br",null),"\nWhy? Because they use two different versions for the ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions")," mod.\nWhen entites are emplaced into a world, their ",(0,a.kt)("inlineCode",{parentName:"p"},".dimension")," component is going to be handled (and mangled) by two competing systems; one in ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions_v1"),", and one in ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions_v0"),".",(0,a.kt)("br",null),"\nThis is terrible."),(0,a.kt)("p",null,'Now, one could argue that this "issue" is the fault of whoever wrote the dimensions mod.',(0,a.kt)("br",null),"\nAnd I would 100% agree. But that's kinda ignoring the real issue here. The real issue, is that this setup, (where ",(0,a.kt)("inlineCode",{parentName:"p"},"riding")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," use different versions) is ALLOWED to exist."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"riding")," mod works fine on it's own.",(0,a.kt)("br",null),"\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," mod works fine on it's own too!",(0,a.kt)("br",null)),(0,a.kt)("p",null,"But what's bad, is that this setup will spread like a cancer. Any mods that build on top of ",(0,a.kt)("inlineCode",{parentName:"p"},"riding")," will no longer be able to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," mod. Same vice versa. We have created a situation where our beautiful degree of hyper-compatibility is killed."),(0,a.kt)("p",null,"It would have been much better if whoever wrote ",(0,a.kt)("inlineCode",{parentName:"p"},"projectiles")," was instead forced to use ",(0,a.kt)("inlineCode",{parentName:"p"},"dimensions_v1"),"; that way, compatibility between mods is guaranteed."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"To hammer it home, here's a (simplified) version of the dependency tree for the existing UMG mod, ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),":"),(0,a.kt)("mermaid",{value:"\nstateDiagram-v2\n    borders  --\x3e    dimensions\n    borders  --\x3e    rendering\n\n    base     --\x3e    typecheck\n\n    sync     --\x3e    reducers\n    base     --\x3e    objects\n    objects  --\x3e    typecheck\n    base     --\x3e    state_\n    state    --\x3e    objects\n    state    --\x3e    typecheck\n    state    --\x3e    reducers\n    base     --\x3e    input\n    input    --\x3e    objects\n    base     --\x3e    rendering\n    rendering        --\x3e    objects\n    rendering        --\x3e    typecheck\n\n    scheduling       --\x3e    typecheck\n    scheduling       --\x3e    objects\n    base     --\x3e    reducers\n    base     --\x3e    physics\n    physics  --\x3e    state_\n    physics  --\x3e    dimensions\n    physics  --\x3e    xy\n    xy       --\x3e    sync\n    xy       --\x3e    typecheck\n    xy       --\x3e    state_\n    xy       --\x3e    reducers\n    base     --\x3e    control\n    control  --\x3e    input\n    control  --\x3e    rendering\n    control  --\x3e    xy\n    control  --\x3e    sync\n    base     --\x3e    xy\n    base     --\x3e    follow\n    follow   --\x3e    control\n\n    juice    --\x3e    typecheck\n\n    base     --\x3e    initializers\n    initializers     --\x3e    dimensions\n    initializers     --\x3e    xy\n\n    ui       --\x3e    input\n    items    --\x3e    input\n\n    borders  --\x3e    objects\n    borders  --\x3e    typecheck\n    categories       --\x3e    base\n    categories       --\x3e    chunks\n    chunks   --\x3e    base\n    chat     --\x3e    base\n    commands         --\x3e    chat\n\n    crafting         --\x3e    base\n    crafting         --\x3e    items\n    grids    --\x3e    base\n    grids    --\x3e    categories\n    grids    --\x3e    typecheck\n\n    worldeditor      --\x3e    ui\n    worldeditor      --\x3e    chunks\n    modern   --\x3e    chunks\n    modern   --\x3e    chat\n    modern   --\x3e    ui\n    modern   --\x3e    grids\n    projectiles      --\x3e    mortality\n    projectiles      --\x3e    usables\n    test     --\x3e    base\n    test     --\x3e    juice\n\n    test     --\x3e    weather\n    weather  --\x3e    base\n    weather  --\x3e    light\n\n    test     --\x3e    borders\n\n    test --\x3e modern\n    test --\x3e projectiles\n"}),(0,a.kt)("p",null,"I simplified the diagram greatly, because the original was too cluttered and hard to read. (roughly half the edges have been omitted.)"),(0,a.kt)("p",null,"Can you ",(0,a.kt)("em",{parentName:"p"},"imagine")," what a nightmare this would be, if every mod was able to use it's own versions for stuff?",(0,a.kt)("br",null),"\nIt just wouldn't be possible. Versioning is not compatible with UMG's vision. "),(0,a.kt)("p",null,"But as stated previously... versioning IS useful, mainly for dealing with breaking changes. So how does UMG deal with breaking changes?"),(0,a.kt)("p",null,"Well... it doesn't.",(0,a.kt)("br",null),"\nBreaking changes will simply have to be avoided. To be fair, Java is a programming language ",(0,a.kt)("a",{parentName:"p",href:"https://blog.jooq.org/the-lame-side-of-javas-backwards-compatibility/"},"that has taken this exact approach"),", and hey, they haven't done too poorly."),(0,a.kt)("p",null,"The main painstaking downside of this setup is that we are ASSUMING that the base mods are going to be developed in a forward thinking, robust manner.",(0,a.kt)("br",null),"\nThat is, developed free of future tech debt, and developed with all future requirements predicted for, (an impossible task.)",(0,a.kt)("br",null),"\nUnfortunetely, I don't believe there is another solution. C'est la vie, brother!"))}m.isMDXComponent=!0}}]);