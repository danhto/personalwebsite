(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{39:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},48:function(e,t,a){e.exports=a(97)},53:function(e,t,a){},54:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/irobot.b3e1e89a.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/knowledge.6e575bdb.png"},67:function(e,t,a){e.exports=a.p+"static/media/cat.4d284ef0.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/grandcanyon.06c39b60.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/iceland.6fb9952f.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/japan.24e968b6.jpg"},71:function(e,t,a){e.exports=a.p+"static/media/leafs.df616bb5.jpg"},72:function(e,t,a){e.exports=a.p+"static/media/prague.df34e8fa.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/snowboarding.446e9b3d.jpg"},92:function(e,t,a){},93:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),s=a.n(r),c=(a(53),a(46)),i=a(39),o=a.n(i),m=(a(54),a(2)),d=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"app-main-content"},l.a.createElement("div",{className:"app-main-header"},l.a.createElement("h2",null," Welcome! ")),l.a.createElement("div",{className:"app-main-text"},l.a.createElement("p",null," You've arrived at the one stop shop for everything Dan To. ")),a?l.a.createElement("div",{className:"app-main-hidden-content"},l.a.createElement(m.b,{gradient:"blue",href:"/personalwebsite/about",target:"/personalwebsite/about"},l.a.createElement("h1",null,l.a.createElement("i",null,"TELL ME MORE!")))):null,l.a.createElement("div",{className:"app-main-logo"},l.a.createElement(m.b,{outline:!0,onClick:function(){r(!a)}},l.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(62),a(63),a(64);var u=a(47),p=a(10),h=a(11),E=a(13),g=a(12),f=a(14),b=a(4),v=a(65),y=a(66),w=a(67),N=a(68),k=a(69),j=a(70),O=a(71),C=a(72),x=a(73),S=["My dog, Cat!","Hockey: The Toronto Maple Leafs!","Snowboarding!","Traveling: Japan!","Traveling: Prague!","Traveling: Iceland!","Traveling: Grand Canyon!"],T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).getLeadContent=function(){if(1===a.props.display);else{if(2===a.props.display)return l.a.createElement("div",{className:"skill-title-content"},l.a.createElement("p",null,"My proficiencies are many, but here are a few of my more notable ones!",l.a.createElement("br",null),"Each skill is conveniently paired with an indicator of my comfort with it."),l.a.createElement("img",{src:y}));if(3===a.props.display)return l.a.createElement("p",null,"These are some of the things that fuel my soul!")}},a.handleCat=function(){a.setState({text:"My dog, Cat!",counter:0})},a.handleLeafs=function(){a.setState({text:"Hockey: The Toronto Maple Leafs!",counter:1})},a.handleSnowboarding=function(){a.setState({text:"Snowboarding!",counter:2})},a.handleJapan=function(){a.setState({text:"Traveling: Japan!",counter:3})},a.handleIceland=function(){a.setState({text:"Traveling: Iceland!",counter:5})},a.handlePrague=function(){a.setState({text:"Traveling: Prague!",counter:4})},a.handleCanyon=function(){a.setState({text:"Traveling: Grand Canyon!",counter:6})},a.updateHeader=function(){console.log("Updating header...");var e=6==a.state.counter?0:a.state.counter+1;a.setState({counter:e,text:S[e]})},a.getBodyContent=function(){return 1===a.props.display?l.a.createElement("div",null,l.a.createElement("p",null,"I was born and raised in Toronto, Canada. I graduated from York University with a Bachelor of Engineering in Computer Engineering and a Bachelor of Arts in Psychology. With these experiences I have obtained a certain set of skills, that many often describe as giving me special, nearly unfair, mastery over all things",l.a.createElement("b",null," human")," and ",l.a.createElement("b",null,"machine"),"!"),l.a.createElement("img",{src:v})):2===a.props.display?l.a.createElement("div",{className:"skill-summary"},l.a.createElement("div",{className:"skill-languages"},l.a.createElement("h4",null,"Java"),l.a.createElement(m.r,{value:80,color:"red",className:"my-2"}),l.a.createElement("h4",null,"HTML/CSS"),l.a.createElement(m.r,{value:60,className:"my-2"}),l.a.createElement("h4",null,"Go Lang"),l.a.createElement(m.r,{value:50,className:"my-2"}),l.a.createElement("h4",null,"React"),l.a.createElement(m.r,{value:40,className:"my-2"}),l.a.createElement("h4",null,"Typescript/JS"),l.a.createElement(m.r,{value:30,className:"my-2"}),l.a.createElement("h4",null,"Python"),l.a.createElement(m.r,{value:30,className:"my-2"})),l.a.createElement("div",{className:"skill-others"},l.a.createElement("h4",null,"Agile"),l.a.createElement(m.r,{value:90,className:"my-2"}),l.a.createElement("h4",null,"REST"),l.a.createElement(m.r,{value:65,className:"my-2"}),l.a.createElement("h4",null,"Docker"),l.a.createElement(m.r,{value:60,className:"my-2"}),l.a.createElement("h4",null,"Design"),l.a.createElement(m.r,{value:60,className:"my-2"}),l.a.createElement("h4",null,"Travis"),l.a.createElement(m.r,{value:30,className:"my-2"}))):3===a.props.display?l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(m.a,{className:"mdb-badge-header",color:"primary"},a.state.text)),l.a.createElement(b.a,{naturalSlideWidth:750,naturalSlideHeight:475,totalSlides:7,isPlaying:a.state.autoPlay,interval:7500},l.a.createElement(b.b,{slide:0,onClick:a.handleCat}),l.a.createElement(b.b,{slide:1,onClick:a.handleLeafs}),l.a.createElement(b.b,{slide:2,onClick:a.handleSnowboarding}),l.a.createElement(b.b,{slide:3,onClick:a.handleJapan}),l.a.createElement(b.b,{slide:4,onClick:a.handlePrague}),l.a.createElement(b.b,{slide:5,onClick:a.handleIceland}),l.a.createElement(b.b,{slide:6,onClick:a.handleCanyon}),l.a.createElement(b.e,null,l.a.createElement(b.d,{className:"slide-image-holder",index:0},l.a.createElement(b.c,{src:w})),l.a.createElement(b.d,{className:"slide-image-holder",index:1},l.a.createElement(b.c,{src:O})),l.a.createElement(b.d,{className:"slide-image-holder",index:2},l.a.createElement(b.c,{src:x})),l.a.createElement(b.d,{className:"slide-image-holder",index:3},l.a.createElement(b.c,{src:j})),l.a.createElement(b.d,{className:"slide-image-holder",index:4},l.a.createElement(b.c,{src:C})),l.a.createElement(b.d,{className:"slide-image-holder",index:5},l.a.createElement(b.c,{src:k})),l.a.createElement(b.d,{className:"slide-image-holder",index:6},l.a.createElement(b.c,{src:N}))))):void 0},a.state={text:S[0],autoPlay:!0,counter:0},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.updateHeader,7500)}},{key:"render",value:function(){var e=this.getLeadContent(),t=this.getBodyContent();return l.a.createElement(m.h,{className:"mt-5 text-center"},l.a.createElement(m.s,null,l.a.createElement(m.f,null,l.a.createElement(m.j,null,l.a.createElement("h2",{className:"h1 display-3"},this.props.title),e,l.a.createElement("hr",{className:"my-2"}),t))))}}]),t}(l.a.Component),I=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={items:{default:"1"}},a.togglePills=function(e,t){return function(n){if(console.log("Toggling pill to state "+t),console.log(a.state),console.log("3"===a.state.items.default),a.state.items[e]!==t){var l=Object(u.a)({},a.state.items);l[e]=t,a.setState({items:l})}}},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(m.h,{className:"mt-4"},l.a.createElement(m.s,null,l.a.createElement(m.f,{md:"12"},l.a.createElement("h2",null,"All things Dan To"),l.a.createElement(m.k,{className:"mt-5 nav-pills"},l.a.createElement(m.l,null,l.a.createElement(m.m,{to:"#",active:"1"===this.state.items.default,onClick:this.togglePills("default","1")},"Quick Bio")),l.a.createElement(m.l,null,l.a.createElement(m.m,{to:"#",active:"2"===this.state.items.default,onClick:this.togglePills("default","2")},"Skills")),l.a.createElement(m.l,null,l.a.createElement(m.m,{to:"#",active:"3"===this.state.items.default,onClick:this.togglePills("default","3")},"Interests"))),l.a.createElement(m.t,{activeItem:this.state.items.default,className:"mdb-tab-content"},l.a.createElement(m.u,{tabId:"1"},l.a.createElement(T,{title:"Hello Me!",display:1})),l.a.createElement(m.u,{tabId:"2"},l.a.createElement(T,{title:"Hello Skills!",display:2})),l.a.createElement(m.u,{tabId:"3"},l.a.createElement(T,{title:"Hello Interests!",display:3}))))))}}]),t}(n.Component),_=function(){return l.a.createElement("div",null,l.a.createElement(I,null))},M=function(e){function t(){return Object(p.a)(this,t),Object(E.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(m.h,{className:"links-content"},l.a.createElement("h2",{className:"links-header"},"Want to know even more? ",l.a.createElement("br",null),"Try the links below if you couldn't find your answer here! ",l.a.createElement("br",null),"Thanks for visiting!"),l.a.createElement(m.b,{className:"links-linkedin",color:"primary",href:"https://www.linkedin.com/in/danhto"},"LinkedIn"),l.a.createElement("br",null),l.a.createElement(m.b,{className:"links-github",color:"secondary",href:"https://github.com/danhto"},"Github"))}}]),t}(l.a.Component),P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={isOpen:!1},a.toggleCollapse=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return l.a.createElement(m.h,{fluid:!0},l.a.createElement(m.n,{color:"indigo",dark:!0,expand:"md"},l.a.createElement(m.o,null,l.a.createElement("strong",{className:"white-text"},"DAN TO")),l.a.createElement(m.q,{onClick:this.toggleCollapse}),l.a.createElement(m.g,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},l.a.createElement(m.p,{left:!0},l.a.createElement(m.l,null,l.a.createElement(m.m,{to:"/personalwebsite"},"Home")),l.a.createElement(m.l,null,l.a.createElement(m.m,{to:"/personalwebsite/about"},"About Me")),l.a.createElement(m.l,null,l.a.createElement(m.m,{to:"/personalwebsite/links"},"Links"))),l.a.createElement(m.p,{right:!0},l.a.createElement(m.l,null,l.a.createElement(m.i,{waves:!0},l.a.createElement("div",{className:"md-form my-0"},l.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search"}))))))))}}]),t}(l.a.Component),R=a(45),L=a(24),D=a.n(L),H=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={weather:{locale:"unknown",country:"unknown",description:"unknown",icon:"unknown",temperature:"unknown"},dataReady:!1,errors:""},a.formatTemperature=function(e){var t={color:e>=30?"red":e>=25&&e<30?"orange":e>=15&&e<25?"green":e>5&&e<15?"cyan":"blue"};return l.a.createElement("p",{className:"temp-content-temperature",style:t},e," \xb0C")},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(m.h,null,l.a.createElement(m.c,{className:"card-body",style:{width:"22rem",marginTop:"1rem"}},l.a.createElement(m.e,{className:"panel-title"},"Current Weather"),l.a.createElement(m.d,null,this.props.isGeolocationEnabled&&this.props.coords&&function(){if(console.log("Getting weather data with state..."),console.log(e.state),e.props.coords&&!e.state.dataReady&&""===e.state.errors){console.log("Making api call...");var t="lat="+e.props.coords.latitude+"&lon="+e.props.coords.longitude;D.a.get("https://api.openweathermap.org/data/2.5/weather?"+t+"&units=metric&APPID=72b5ce924b6c3fa65fb003a4ca773013").then(function(t){console.log(t.data),e.setState({weather:{locale:t.data.name,country:t.data.sys.country,description:t.data.weather[0].description,icon:"http://openweathermap.org/img/wn/"+t.data.weather[0].icon+"@2x.png",temperature:t.data.main.temp},dataReady:!0})}).catch(function(t){console.log(t),429===t.response.status&&e.setState({errors:"Weather api request limits reached, cannot query local weather, but I hope it's pleasant!"})})}return!0}()&&this.state.dataReady?l.a.createElement("div",{className:"temp-content"},l.a.createElement("p",{className:"temp-content-location"},"The current temperature for ",this.state.weather.locale," is:"),this.formatTemperature(this.state.weather.temperature),l.a.createElement("p",{className:"temp-content-description"},"The overall forecast is ",this.state.weather.description,":"),l.a.createElement("img",{className:"temp-content-icon",src:this.state.weather.icon})):l.a.createElement(l.a.Fragment,null,"No location data! ",this.state.errors))))}}]),t}(l.a.Component),A=Object(R.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(H),W=a(22),J=a(16),B=(a(92),a(93),a(94),a(95),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(E.a)(this,Object(g.a)(t).call(this,e))).getStarwarsData=function(){D.a.get("https://swapi.co/api/"+a.props.api+"/"+a.state.index+"/").then(function(e){switch(console.log("Response received from call to api for "+a.props.api+" using id "+a.state.index),console.log(e),a.props.api){case"people":return void a.setState({person:{birth_year:e.data.birth_year,gender:e.data.gender,hair_color:e.data.hair_color,height:e.data.height,mass:e.data.mass,name:e.data.name,skin_color:e.data.skin_color,homeworld:e.data.homeworld,species:e.data.species},dataRetrieved:!0});case"planet":return void a.setState({planet:{climate:e.data.climate,diameter:e.data.diameter,name:e.data.name,population:e.data.population,terrain:e.data.terrain},dataRetrieved:!0});case"starships":return void a.setState({starship:{cargo_capacity:e.data.cargo_capacity,cost_in_credits:e.data.cost_in_credits,crew:e.data.crew,length:e.data.length,model:e.data.model,name:e.data.name,passengers:e.data.passengers,starship_class:e.data.starship_class},dataRetrieved:!0})}}).catch(function(e){console.log(e),a.setState({errors:"Something happened can't get Star Wars goodies :("})})},a.state={index:Math.floor(40*Math.random()),dataRetrieved:!1,planet:{},person:{},starship:{},errors:""},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.getStarwarsData()}},{key:"render",value:function(){var e=this;return l.a.createElement(m.h,null,l.a.createElement(m.c,{className:"card-body",style:{width:"22rem",marginTop:"1rem"}},l.a.createElement(m.e,{className:"panel-title"},"Star Wars: Random Daily Education!"),l.a.createElement(m.d,null,this.state.dataRetrieved?l.a.createElement("div",{className:"starwars-content"},function(){switch(e.props.api){case"people":var t=e.state.person;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"starwars-person-title"},l.a.createElement("h3",{className:"starwars-name"},t.name),l.a.createElement("img",{src:"https://1001freedownloads.s3.amazonaws.com/vector/thumb/74889/1367934593.png",className:"starwars-content-person-icon"})),l.a.createElement("p",{className:"starwars-content-data"},t.name," was born in the year ",t.birth_year,".","male"==t.gender?" He ":" She "," weighs ",t.mass," kg and is ",t.height," cm tall."));case"starships":var a=e.state.starship;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"starwars-person-title"},l.a.createElement("h3",{className:"starwars-name"},a.name),l.a.createElement("img",{src:"http://clipart-library.com/images/rijKoRLjT.png",className:"starwars-content-starship-icon"})),l.a.createElement("p",{className:"starwars-content-data"},"Cost in galatic credits ",a.cost_in_credits," ",l.a.createElement("br",null),"Crew size needed to run starship ",a.crew," ",l.a.createElement("br",null),"Length in meters ",a.length," m ",l.a.createElement("br",null),"Offical name ",a.model," ",l.a.createElement("br",null),"Starship class: ",a.starship_class," ",l.a.createElement("br",null)))}}()):l.a.createElement(l.a.Fragment,null,this.state.errors))))}}]),t}(l.a.Component));a(96);s.a.render(l.a.createElement(W.a,null,l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"main-panel-content"},l.a.createElement(J.d,null,l.a.createElement(J.b,{exact:!0,path:"/personalwebsite",component:d}),l.a.createElement(J.b,{path:"/personalwebsite/about",component:_}),l.a.createElement(J.b,{path:"/personalwebsite/links",component:M}),l.a.createElement(J.a,{from:"/",to:"/personalwebsite"}))),l.a.createElement("div",{className:"side-panel-content"},l.a.createElement(A,null),l.a.createElement(B,{api:"people"}),l.a.createElement(B,{api:"starships"}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.b286d016.chunk.js.map