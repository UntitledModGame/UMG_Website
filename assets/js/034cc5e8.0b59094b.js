"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6163:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={slug:"parasitic_problems",title:"Parasitic problems",tags:["opinion"]},i="Parasitic problems",s={permalink:"/blog/parasitic_problems",source:"@site/blog/2023-10-28_parasitic_problems.md",title:"Parasitic problems",description:"I feel like the best solutions are for problems that aren't known to exist.",date:"2023-10-28T00:00:00.000Z",formattedDate:"October 28, 2023",tags:[{label:"opinion",permalink:"/blog/tags/opinion"}],readingTime:4.925,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"parasitic_problems",title:"Parasitic problems",tags:["opinion"]},nextItem:{title:"Results orientated gamedev, and why it's bad",permalink:"/blog/results_orientated_gamedev"}},l={authorsImageUrls:[]},p=[{value:"Hold up!",id:"hold-up",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I feel like the best solutions are for problems that aren't known to exist."),(0,r.kt)("p",null,"This was certainly the case for ",(0,r.kt)("a",{parentName:"p",href:"../buses"},"question buses"),".",(0,r.kt)("br",null),'\nBefore the creation of question buses, there was no real "problem" with having to receive data;\nhowever, as soon as question-buses were created, the "problem" that question-buses were solving was blatantly obvious.'),(0,r.kt)("p",null,"Today, if you asked me to create a UMG-like ecosystem ",(0,r.kt)("em",{parentName:"p"},"without")," question-buses, I would notice their absence ALL the time."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Problem-solving is generally hard!"),(0,r.kt)("p",null,"But I think what's harder, is actually problem-",(0,r.kt)("em",{parentName:"p"},"discovery.")),(0,r.kt)("p",null,"In my opinion, the hardest part is not solving problems:",(0,r.kt)("br",null),"\nIt's ",(0,r.kt)("em",{parentName:"p"},"recognizing")," the problems.",(0,r.kt)("br",null),"\nSome kinds of problems are insanely hard to recognize, because we just accept them for what they are. "),(0,r.kt)("p",null,"As programmers, we are highly accustomed to working within the limits and constraints of our systems.",(0,r.kt)("br",null),"\nAnd with this, I feel like it is very easy to mistake problems for unmoving constraints."),(0,r.kt)("p",null,'These kind of problems, problems that are mistaken for systemic constraints, I like to call "Parasitic problems".',(0,r.kt)("br",null),"\nParasitic problems aren't really apparent at first glance, because our brain mistakes them for unchangable constraints of the system.",(0,r.kt)("br",null),"\nThese kind of problems can affect end products ",(0,r.kt)("em",{parentName:"p"},"dramatically"),".",(0,r.kt)("br",null),"If we don't recognize parasitic-problems, they will sit there ",(0,r.kt)("em",{parentName:"p"},"FOREVER"),", just beneath our code. Like a dark, invisible parasite, putting a dull tax on efficiency.",(0,r.kt)("br",null),"\nAnd what's frustrating, is that most of the time, we won't notice that these problems even exist, because we mistake them for systemic constraints!"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"an-example-horses-in-the-middle-ages"},"An example: Horses in the Middle ages"),(0,r.kt)("p",null,"If you are a King in the middle ages, and you want to move your army from point-A to point-B as fast as possible, you will send them on horses."),(0,r.kt)("p",null,"But the issue is that horses can only move so fast!",(0,r.kt)("br",null),"\nYour horses can travel about 40 kilometers a day with equipment, but that's not fast enough to respond to an invasion force.",(0,r.kt)("br",null),"\nAnd we know FOR SURE that ",(0,r.kt)("em",{parentName:"p"},"Terry the Terrible")," is plotting an invasion right as we speak. "),(0,r.kt)("p",null,"OK! What should we do?",(0,r.kt)("br",null),"\nWe could do a few things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set up a barracks closer to the settlements, and keep some armies there"),(0,r.kt)("li",{parentName:"ul"},"Train (and equip) the villagers so they can defend themselves"),(0,r.kt)("li",{parentName:"ul"},"Spread propaganda within enemy territory to prevent an invasion in the first place")),(0,r.kt)("p",null,"Nice! Ok, these are all valid options.",(0,r.kt)("br",null),"\nBut you, (Your majesty,) are missing one crucial detail: You are looking at the ",(0,r.kt)("em",{parentName:"p"},"solutions"),", not the ",(0,r.kt)("em",{parentName:"p"},"problem."),(0,r.kt)("br",null),'\nRememember our original problem: "Our armies can\'t respond to invasions in time"'),(0,r.kt)("p",null,"And our primary constraint is that our horses can only travel 40 kilometers per day.",(0,r.kt)("br",null),"\nCan we change this?"),(0,r.kt)("p",null,"Well of course we can!",(0,r.kt)("br",null),"\nIn modern-day, armies travel by air, by train, and by truck.",(0,r.kt)("br",null),"\nWould it be too unrealistic to assume that a medieval empire could have invented trains for military purposes? (No, it's not unrealistic, ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/History_of_rail_transport"},"because it ",(0,r.kt)("em",{parentName:"a"},"actually occured.")),")"),(0,r.kt)("p",null,"With this, we have re-defined our problem:",(0,r.kt)("br",null)),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'"Our armies can\'t respond to invasions in time"',(0,r.kt)("br",null),"\nGets changed to:",(0,r.kt)("br",null),'\n"Our armies are moving too slow"')),(0,r.kt)("p",null,'I\'d like to clarify here. We are not "solving" a problem. We are RE-DEFINING the problem. With the initial problem, we ',(0,r.kt)("em",{parentName:"p"},"assumed")," that horse-speeds were a constant constraint.",(0,r.kt)("br",null),"\nWith our previous problem-statement, we didn't even LOOK for solutions to move our armies faster, since we regarded it as a constraint. This is a great example of a parasitic problem."),(0,r.kt)("p",null,"For years, the problem of army-movement was locked to the speed of horses. But you, benevolent King, you can change that!",(0,r.kt)("br",null),"\nAll you need to do, is invent the amazing ",(0,r.kt)("em",{parentName:"p"},"steam engine"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"train_poster",src:n(5863).Z,width:"883",height:"1140"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"hold-up"},"Hold up!"),(0,r.kt)("p",null,'Simply "inventing trains" is no easy feat.',(0,r.kt)("br",null),'\nFirst off, how do we know that locomotives are even possible? It\'s easy to say "invent X, invent Y" in ',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Egg_of_Columbus"},"hindsight"),", since the brilliant discovery has already been done."),(0,r.kt)("p",null,"That's the awkward thing about parasitic problems, is that often, you'll be stumbling around blindly.",(0,r.kt)("br",null),'\nIf the problem-statement had instead been changed to: "How do we find horses that are 100x stronger?" then I\'m sure that nothing would have been accomplished; since (biologically) there is so such thing.',(0,r.kt)("br",null),"\nBut back then, medieval empires wouldn't have known this. It's likely that a lot of time was wasted trying to solve this \"problem\"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"big_moose",src:n(1323).Z,width:"487",height:"327"})),(0,r.kt)("hr",null),(0,r.kt)("p",null,'Quite frankly, this is the trouble with "solving" parasitic-problems.',(0,r.kt)("br",null),"\nRemember that a parasitic-problem is just a constraint ",(0,r.kt)("em",{parentName:"p"},"redefined")," as a problem. We haven't actually solved anything; and we don't know if a solution is possible.",(0,r.kt)("br",null),"\nIt's entirely possible that the problem is actually a hard constraint."),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"how-do-we-recognize-parasitic-problems"},"How do we recognize parasitic-problems?"),(0,r.kt)("p",null,"Speaking from a purely software-centric perspective here:"),(0,r.kt)("p",null,"If you ever discover a systemic constraint that annoys you quite frequently, stop to question it. Is this really a constraint? Or is it a parasitic problem in disguise?"),(0,r.kt)("p",null,"A mock example:",(0,r.kt)("br",null),"\nIt's a bit annoying having to load all these images every time I use them! Can image-loading be changed from a constraint, to a problem?",(0,r.kt)("br",null),"\nSure, here's a simple solution:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Walk the asset folder automatically, load the images\nCreate a ",(0,r.kt)("inlineCode",{parentName:"p"},"getImage(filename)")," function that lazily allows image access")),(0,r.kt)("h1",{id:"solving-parasitic-problems-accidentally"},"Solving parasitic-problems accidentally:"),(0,r.kt)("p",null,'I think that toying around with random ideas is underrated. When I came up with the idea for question-buses, I wasn\'t attempting to "solve" any problem, I was just curious as to what event-buses would look like if the data flow was reversed.',(0,r.kt)("br",null),"\nAnd as it turned out, question-buses have completely transformed the project."),(0,r.kt)("p",null,"This was the same with the load-time entityType mutation API. (Ie. UMG's ",(0,r.kt)("inlineCode",{parentName:"p"},"@defineEntityType")," callback; naming may be different.)\nWith this, I wasn't actually looking to solve anything, I was just toying around with ideas. As soon as the API existed, the problems that it solved materialized into existance- from unseen-constraints, to a set of parasitic-problems that could be solved easily with this new setup."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Thanks for reading this opinion piece!"))}c.isMDXComponent=!0},1323:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/giant_moose_army-f16a53b92431ec79babdc4dfe9fa5f53.png"},5863:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/train_poster-eea95e46c8d1b836656347baa52d4c31.jpg"}}]);