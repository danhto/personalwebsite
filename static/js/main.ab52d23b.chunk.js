(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/spaceship.7ff85897.png"},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),s=a.n(l),c=(a(54),a(47)),o=a(40),i=a.n(o),m=(a(55),a(2)),u=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=(t[0],t[1],function(){var e=document.querySelector(".app-main-hidden-content");e&&!e.classList.contains("slider")?e.classList.add("slider"):e&&e.classList.remove("slider")});return r.a.createElement("div",{className:"app-main-content"},r.a.createElement("div",{className:"app-main-header"},r.a.createElement("h2",null," Welcome! ")),r.a.createElement("div",{className:"app-main-text"},r.a.createElement("p",null," You've arrived at the one stop shop for everything Dan To. ")),r.a.createElement("div",{className:"app-main-hidden-content"},r.a.createElement(m.m,{to:"/personalwebsite/about"},"TELL ME MORE!")),r.a.createElement("div",{className:"app-main-logo"},r.a.createElement(m.b,{outline:!0,onClick:function(){a()}},r.a.createElement("img",{src:i.a,className:"App-logo",alt:"logo"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(63),a(64),a(65);var d=a(48),p=a(10),h=a(11),E=a(13),g=a(12),f=a(14),b=a(4),v=a(66),y=a(67),w=a(68),k=a(69),N=a(70),C=a(71),S=a(72),x=a(73),j=a(74),O=["My dog, Cat!","Hockey: The Toronto Maple Leafs!","Snowboarding!","Traveling: Japan!","Traveling: Prague!","Traveling: Iceland!","Traveling: Grand Canyon!"],T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).getLeadContent=function(){var e=a.props.display;if(1===e);else{if(2===e)return r.a.createElement("div",{className:"skill-title-content"},r.a.createElement("p",null,"My proficiencies are many, but here are a few of my more notable ones!",r.a.createElement("br",null),"Each skill is conveniently paired with an indicator of my comfort with it."),r.a.createElement("img",{src:y}));if(3===e)return r.a.createElement("p",null,"These are some of the things that fuel my soul!")}},a.handleCat=function(){a.setState({text:"My dog, Cat!",counter:0})},a.handleLeafs=function(){a.setState({text:"Hockey: The Toronto Maple Leafs!",counter:1})},a.handleSnowboarding=function(){a.setState({text:"Snowboarding!",counter:2})},a.handleJapan=function(){a.setState({text:"Traveling: Japan!",counter:3})},a.handleIceland=function(){a.setState({text:"Traveling: Iceland!",counter:5})},a.handlePrague=function(){a.setState({text:"Traveling: Prague!",counter:4})},a.handleCanyon=function(){a.setState({text:"Traveling: Grand Canyon!",counter:6})},a.updateHeader=function(){console.log("Updating header...");var e=6===a.state.counter?0:a.state.counter+1;a.setState({counter:e,text:O[e]})},a.getBodyContent=function(){var e=a.props.display,t=a.state,n=t.text,l=t.autoPlay;return 1===e?r.a.createElement("div",null,r.a.createElement("p",null,"I was born and raised in Toronto, Canada. I graduated from York University with a Bachelor of Engineering in Computer Engineering and a Bachelor of Arts in Psychology. With these experiences I have obtained a certain set of skills, that many often describe as giving me special, nearly unfair, mastery over all things",r.a.createElement("b",null," human")," and ",r.a.createElement("b",null,"machine"),"!"),r.a.createElement("img",{src:v})):2===e?r.a.createElement("div",{className:"skill-summary"},r.a.createElement("div",{className:"skill-languages"},r.a.createElement("h4",null,"HTML/CSS"),r.a.createElement(m.r,{value:90,className:"my-2"},"Experienced"),r.a.createElement("h4",null,"Javascript"),r.a.createElement(m.r,{value:80,color:"red",className:"my-2"},"Experienced"),r.a.createElement("h4",null,"Java"),r.a.createElement(m.r,{value:70,color:"red",className:"my-2"},"Comfortable"),r.a.createElement("h4",null,"Go Lang"),r.a.createElement(m.r,{value:70,className:"my-2"},"Comfortable"),r.a.createElement("h4",null,"React"),r.a.createElement(m.r,{value:70,className:"my-2"},"Comfortable"),r.a.createElement("h4",null,"Typescript"),r.a.createElement(m.r,{value:50,className:"my-2"},"Comfortable but Rusty"),r.a.createElement("h4",null,"Python"),r.a.createElement(m.r,{value:30,className:"my-2"},"Familiar")),r.a.createElement("div",{className:"skill-others"},r.a.createElement("h4",null,"Agile"),r.a.createElement(m.r,{value:90,className:"my-2"},"Experienced"),r.a.createElement("h4",null,"Jenkins"),r.a.createElement(m.r,{value:80,className:"my-2"},"Experienced"),r.a.createElement("h4",null,"Kubernetes"),r.a.createElement(m.r,{value:75,className:"my-2"},"Comfortable"),r.a.createElement("h4",null,"Docker"),r.a.createElement(m.r,{value:70,className:"my-2"},"Comfortable"),r.a.createElement("h4",null,"GCP"),r.a.createElement(m.r,{value:60,className:"my-2"},"Familiar, but there's so much!"))):3===e?r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(m.a,{className:"mdb-badge-header",color:"primary"},n)),r.a.createElement(b.a,{naturalSlideWidth:750,naturalSlideHeight:475,totalSlides:7,isPlaying:l,interval:7500},r.a.createElement(b.b,{slide:0,onClick:a.handleCat}),r.a.createElement(b.b,{slide:1,onClick:a.handleLeafs}),r.a.createElement(b.b,{slide:2,onClick:a.handleSnowboarding}),r.a.createElement(b.b,{slide:3,onClick:a.handleJapan}),r.a.createElement(b.b,{slide:4,onClick:a.handlePrague}),r.a.createElement(b.b,{slide:5,onClick:a.handleIceland}),r.a.createElement(b.b,{slide:6,onClick:a.handleCanyon}),r.a.createElement(b.e,null,r.a.createElement(b.d,{className:"slide-image-holder",index:0},r.a.createElement(b.c,{src:w})),r.a.createElement(b.d,{className:"slide-image-holder",index:1},r.a.createElement(b.c,{src:S})),r.a.createElement(b.d,{className:"slide-image-holder",index:2},r.a.createElement(b.c,{src:j})),r.a.createElement(b.d,{className:"slide-image-holder",index:3},r.a.createElement(b.c,{src:C})),r.a.createElement(b.d,{className:"slide-image-holder",index:4},r.a.createElement(b.c,{src:x})),r.a.createElement(b.d,{className:"slide-image-holder",index:5},r.a.createElement(b.c,{src:N})),r.a.createElement(b.d,{className:"slide-image-holder",index:6},r.a.createElement(b.c,{src:k}))))):void 0},a.state={text:O[0],autoPlay:!0,counter:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.updateHeader,7500)}},{key:"render",value:function(){var e=this.getLeadContent(),t=this.getBodyContent(),a=this.props.title;return r.a.createElement(m.h,{className:"mt-5 text-center"},r.a.createElement(m.s,null,r.a.createElement(m.f,null,r.a.createElement(m.j,null,r.a.createElement("h2",{className:"h1 display-3"},a),e,r.a.createElement("hr",{className:"my-2"}),t))))}}]),t}(r.a.Component),_=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={items:{default:"1"}},a.togglePills=function(e,t){return function(n){if(console.log("Toggling pill to state "+t),console.log(a.state),console.log("3"===a.state.items.default),a.state.items[e]!==t){var r=Object(d.a)({},a.state.items);r[e]=t,a.setState({items:r})}}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(m.h,{className:"mt-4"},r.a.createElement(m.s,null,r.a.createElement(m.f,{md:"12"},r.a.createElement("h2",null,"All things Dan To"),r.a.createElement(m.k,{className:"mt-5 nav-pills"},r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"#",active:"1"===this.state.items.default,onClick:this.togglePills("default","1")},"Quick Bio")),r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"#",active:"2"===this.state.items.default,onClick:this.togglePills("default","2")},"Skills")),r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"#",active:"3"===this.state.items.default,onClick:this.togglePills("default","3")},"Interests"))),r.a.createElement(m.t,{activeItem:this.state.items.default,className:"mdb-tab-content"},r.a.createElement(m.u,{tabId:"1"},r.a.createElement(T,{title:"Hello Me!",display:1})),r.a.createElement(m.u,{tabId:"2"},r.a.createElement(T,{title:"Hello Skills!",display:2})),r.a.createElement(m.u,{tabId:"3"},r.a.createElement(T,{title:"Hello Interests!",display:3}))))))}}]),t}(n.Component),R=function(){return r.a.createElement("div",null,r.a.createElement(_,null))},P=function(){return r.a.createElement(m.h,{className:"links-content"},r.a.createElement("h2",{className:"links-header"},"Want to know even more? ",r.a.createElement("br",null),"Try the links below if you couldn't find your answer here! ",r.a.createElement("br",null),"Thanks for visiting!"),r.a.createElement(m.b,{className:"links-linkedin",color:"primary",href:"https://www.linkedin.com/in/danhto"},"LinkedIn"),r.a.createElement("br",null),r.a.createElement(m.b,{className:"links-github",color:"secondary",href:"https://github.com/danhto"},"Github"))},I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state.isOpen;return r.a.createElement(m.h,{fluid:!0},r.a.createElement(m.n,{color:"indigo",dark:!0,expand:"md"},r.a.createElement(m.o,null,r.a.createElement("strong",{className:"white-text"},"DAN TO")),r.a.createElement(m.q,{onClick:this.toggleCollapse}),r.a.createElement(m.g,{id:"navbarCollapse3",isOpen:e,navbar:!0},r.a.createElement(m.p,{left:!0},r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"/personalwebsite"},"Home")),r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"/personalwebsite/about"},"About Me")),r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"/personalwebsite/links"},"Links")),r.a.createElement(m.l,null,r.a.createElement(m.m,{to:"/personalwebsite/apps"},"Apps"))),r.a.createElement(m.p,{right:!0},r.a.createElement(m.l,null,r.a.createElement(m.i,{waves:!0},r.a.createElement("div",{className:"md-form my-0"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search"}))))))))}}]),t}(r.a.Component),z=a(46),A=a(24),L=a.n(A),M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={weather:{locale:"unknown",country:"unknown",description:"unknown",icon:"unknown",temperature:"unknown"},dataReady:!1,errors:""},a.formatTemperature=function(e){var t={color:e>=30?"red":e>=25&&e<30?"orange":e>=15&&e<25?"green":e>5&&e<15?"cyan":"blue"};return r.a.createElement("p",{className:"temp-content-temperature",style:t},e," \xb0C")},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.dataReady,n=t.errors,l=t.weather,s=this.props,c=s.coords,o=s.isGeolocationEnabled;return r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"card-body",style:{width:"22rem",marginTop:"1rem"}},r.a.createElement(m.e,{className:"panel-title"},"Current Weather"),r.a.createElement(m.d,null,o&&c&&function(){if(console.log("Getting weather data with state..."),console.log(e.state),c&&!a&&""===n){console.log("Making api call...");var t="lat="+c.latitude+"&lon="+c.longitude,r="&units=metric&appid="+Object({NODE_ENV:"production",PUBLIC_URL:"/personalwebsite"}).REACT_APP_WEATHER_API_KEY;L.a.get("https://api.openweathermap.org/data/2.5/weather?"+t+r).then(function(t){console.log(t.data),e.setState({weather:{locale:t.data.name,country:t.data.sys.country,description:t.data.weather[0].description,icon:"http://openweathermap.org/img/wn/"+t.data.weather[0].icon+"@2x.png",temperature:t.data.main.temp},dataReady:!0})}).catch(function(t){console.log(t),429===t.response.status&&e.setState({errors:"Weather api request limits reached, cannot query local weather, but I hope it's pleasant!"})})}return!0}()&&a?r.a.createElement("div",{className:"temp-content"},r.a.createElement("p",{className:"temp-content-location"},"The current temperature for ",l.locale," is:"),this.formatTemperature(l.temperature),r.a.createElement("p",{className:"temp-content-description"},"The overall forecast is ",l.description,":"),r.a.createElement("img",{className:"temp-content-icon",src:l.icon})):r.a.createElement(r.a.Fragment,null,"No location data! ",n))))}}]),t}(r.a.Component),B=Object(z.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(M),D=a(22),F=a(20),H=(a(95),a(96),a(97),a(98),a(99)),W=a(100),J=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).getStarwarsData=function(){L.a.get("https://swapi.py4e.com/api/"+a.props.api+"/"+a.state.index+"/").then(function(e){switch(a.props.api){case"people":return void a.setState({person:{birth_year:e.data.birth_year,gender:e.data.gender,hair_color:e.data.hair_color,height:e.data.height,mass:e.data.mass,name:e.data.name,skin_color:e.data.skin_color,homeworld:e.data.homeworld,species:e.data.species},dataRetrieved:!0});case"planet":return void a.setState({planet:{climate:e.data.climate,diameter:e.data.diameter,name:e.data.name,population:e.data.population,terrain:e.data.terrain},dataRetrieved:!0});case"starships":return void a.setState({starship:{cargo_capacity:e.data.cargo_capacity,cost_in_credits:e.data.cost_in_credits,crew:e.data.crew,length:e.data.length,model:e.data.model,name:e.data.name,passengers:e.data.passengers,starship_class:e.data.starship_class},dataRetrieved:!0})}}).catch(function(e){a.setState({errors:"Something happened can't get Star Wars goodies :("})})},a.state={index:Math.floor(40*Math.random()),dataRetrieved:!1,planet:{},person:{},starship:{},errors:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getStarwarsData()}},{key:"render",value:function(){var e=this.state,t=e.person,a=e.starship,n=e.dataRetrieved,l=e.errors,s=this.props.api;return r.a.createElement(m.h,null,r.a.createElement(m.c,{className:"card-body",style:{width:"22rem",marginTop:"1rem"}},r.a.createElement(m.e,{className:"panel-title"},"Star Wars: Random Daily Education!"),r.a.createElement(m.d,null,n?r.a.createElement("div",{className:"starwars-content"},function(){switch(s){case"people":var e=t;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"starwars-person-title"},r.a.createElement("h3",{className:"starwars-name"},e.name),r.a.createElement("a",{href:"https://www.flaticon.com/free-icons/monster",title:"Monster icons created by juicy_fish - Flaticon"},r.a.createElement("img",{src:H,className:"starwars-content-person-icon",alt:"alien-icon"}))),r.a.createElement("p",{className:"starwars-content-data"},e.name," was born in the year ",e.birth_year,".","male"===e.gender?" He ":" She "," weighs ",e.mass," kg and is ",e.height," cm tall."));case"starships":var n=a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"starwars-person-title"},r.a.createElement("h3",{className:"starwars-name"},n.name),r.a.createElement("a",{href:"https://www.flaticon.com/free-icons/spaceship_1702089",title:"Spaceship icons created by FreePik - Flaticon"},r.a.createElement("img",{src:W,className:"starwars-content-starship-icon",alt:"spaceship-icon"}))),r.a.createElement("p",{className:"starwars-content-data"},"Cost in galatic credits ",n.cost_in_credits," ",r.a.createElement("br",null),"Crew size needed to run starship ",n.crew," ",r.a.createElement("br",null),"Length in meters ",n.length," m ",r.a.createElement("br",null),"Offical name ",n.model," ",r.a.createElement("br",null),"Starship class: ",n.starship_class," ",r.a.createElement("br",null)))}}()):r.a.createElement(r.a.Fragment,null,l))))}}]),t}(r.a.Component),G=(a(101),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).handleChange=function(e){a.setState({textValue:e.target.value})},a.setSelectRooms=function(e){a.setState({rooms:e.target.value},function(){a.state.roomSize>0&&a.state.rooms>0&&a.initializeCases()})},a.setRoomSize=function(e){a.setState({roomSize:e.target.value},function(){a.state.roomSize>0&&a.state.rooms>0&&a.initializeCases()})},a.initializeCases=function(){var e=[];console.log("Initializing %s rooms with size %s",a.state.rooms,a.state.roomSize);for(var t=0;t<a.state.rooms;t++){var n=new Array(a.state.roomSize),r={number:t,size:a.state.roomSize,diversity:0,background:0,people:n};e.push(r)}a.setState({caseRooms:e}),console.log("Cases initialized"),console.log(e)},a.submitForm=function(){var e=a.state.textValue.split("\n");console.log("Parse result..."),console.log(e),e.forEach(a.parseTextData),console.log("Further parse results..."),console.log(a.state.persons),a.placePeopleInRoomsForCaseA(),console.log("Creating persons"),console.log(a.state.caseRooms)},a.parseTextData=function(e,t){var n=a.state.persons,r=e.split(","),l={name:r[0].trim(),background:r[1].trim(),gender:r[2].trim()};n.push(l),a.setState({persons:n})},a.placePeopleInRoomsForCaseA=function(){console.log("Placing persons... %v",a.state.persons);var e=!0,t=!1,n=void 0;try{for(var r,l=a.state.persons[Symbol.iterator]();!(e=(r=l.next()).done);e=!0){var s=r.value,c=!0,o=!1,i=void 0;try{for(var m,u=a.state.caseRooms[Symbol.iterator]();!(c=(m=u.next()).done);c=!0){var d=m.value;if(d.size-d.people.length!==0)if(a.checkRoomComposition(s,d))break}}catch(p){o=!0,i=p}finally{try{c||null==u.return||u.return()}finally{if(o)throw i}}}}catch(p){t=!0,n=p}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}},a.checkRoomComposition=function(e,t){return 2===a.inBetween(t.diversity)&&"f"===e.gender?(t.diversity+=1,t.people.push(e),!0):-2===a.inBetween(t.diversity)&&"m"===e.gender?(t.diversity-=1,t.people.push(e),!0):2===a.inBetween(t.background)&&"tech"===e.background?(t.background+=1,t.people.push(e),!0):-2===a.inBetween(t.background)&&"bus"===e.background?(t.background-=1,t.people.push(e),!0):1===a.inBetween(t.background)&&1===a.inBetween(t.diversity)&&(t.background+="tech"===e.background?1:-1,t.diversity+="f"===e.gender?1:-1,t.people.push(e),!0)},a.inBetween=function(e){var t=a.state.roomSize;return e>=0?e<t-2?1:2:e<0?Math.abs(e)<t-2?-1:-2:0},a.state={textValue:"jim,tech,m\njohn,tech,m\ntish,bus,f\ncash,bus,m\nblip,bus,f\nchance,tech,f",result:"",persons:[],rooms:0,roomSize:0,caseRooms:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"placeholder"},"Not quite ready yet ...")}}]),t}(r.a.Component));a(102);s.a.render(r.a.createElement(D.a,null,r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement("div",{className:"main-content"},r.a.createElement("div",{className:"main-panel-content"},r.a.createElement(F.c,null,r.a.createElement(F.a,{exact:!0,path:"/personalwebsite",component:u}),r.a.createElement(F.a,{path:"/personalwebsite/about",component:R}),r.a.createElement(F.a,{path:"/personalwebsite/links",component:P}),r.a.createElement(F.a,{path:"/personalwebsite/apps",component:G}))),r.a.createElement("div",{className:"side-panel-content"},r.a.createElement(B,null),r.a.createElement(J,{api:"people"}),r.a.createElement(J,{api:"starships"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},40:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},49:function(e,t,a){e.exports=a(103)},54:function(e,t,a){},55:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/irobot.b3e1e89a.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/knowledge.6e575bdb.png"},68:function(e,t,a){e.exports=a.p+"static/media/cat.4d284ef0.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/grandcanyon.06c39b60.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/iceland.6fb9952f.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/japan.24e968b6.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/leafs.df616bb5.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/prague.df34e8fa.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/snowboarding.446e9b3d.jpg"},95:function(e,t,a){},96:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){e.exports=a.p+"static/media/monster.0ad851a1.png"}},[[49,1,2]]]);
//# sourceMappingURL=main.ab52d23b.chunk.js.map