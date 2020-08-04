(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&d.push(n[o][0]),n[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s=[];function o(e){return c.p+"js/"+({canvg:"canvg",pdfmake:"pdfmake",xlsx:"xlsx"}[e]||e)+"."+{canvg:"266b3603",pdfmake:"676bfb02",xlsx:"4fd5d706"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var s,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e);var u=new Error;s=function(t){i.onerror=i.onload=null,clearTimeout(l);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",u.name="ChunkLoadError",u.type=r,u.request=s,a[1](u)}n[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:i})}),12e4);i.onerror=i.onload=s,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},1098:function(e,t,a){},"1cb6":function(e,t,a){},2388:function(e,t,a){"use strict";var r=a("1cb6"),n=a.n(r);n.a},"2b50":function(e,t,a){"use strict";var r=a("816f"),n=a.n(r);n.a},"38d2":function(e,t,a){},"3aea":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t),a.d(t,"eventBus",(function(){return Ye}));a("e260"),a("e6cfa"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("header",[a("h1",[e._v("Worldly")]),a("span",[a("nav",[a("button",{on:{click:function(t){return e.select("mapQuiz")}}},[e._v("Map Quiz")]),a("button",{on:{click:function(t){return e.select("capitalQuiz")}}},[e._v("Capitals Quiz")]),a("button",{on:{click:function(t){return e.select("flagQuiz")}}},[e._v("Flag Quiz")]),a("button",{on:{click:function(t){return e.select("performanceCharts")}}},[e._v("Performance Charts")])])])]),a("div",{staticClass:"content"},["capitalQuiz"===e.selectedElement||"flagQuiz"===e.selectedElement?a("quiz",{attrs:{countries:e.countries,selectedElement:e.selectedElement}}):e._e(),"mapQuiz"===e.selectedElement?a("outline-quiz",{attrs:{mapPerformance:e.mapPerformance}}):e._e(),"adminBackend"===e.selectedElement?a("admin-backend",{attrs:{countries:e.countries,mapPerformance:e.mapPerformance}}):e._e(),"performanceCharts"===e.selectedElement?a("performance-charts",{attrs:{countries:e.countries,mapPerformance:e.mapPerformance}}):e._e()],1)])},s=[],o=(a("c740"),a("a434"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("Developer Quote:")]),a("p",[e._v('"'+e._s(e.developerQuote)+'"')]),a("p",{attrs:{id:"author-quote"}},[e._v(e._s(e.author))])])}),c=[],i=(a("d3b7"),{name:"developer-quote",data:function(){return{developerQuote:"",author:""}},mounted:function(){var e=this;fetch("https://programming-quotes-api.herokuapp.com/quotes/random").then((function(e){return e.json()})).then((function(t){e.developerQuote=t.en,e.author=t.author}))}}),u=i,l=(a("633c"),a("2877")),p=Object(l["a"])(u,o,c,!1,null,"87cd185c",null),d=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"quiz"},["capitalQuiz"===e.selectedElement?a("capitals-quiz",{attrs:{answerCountry:this.answerCountry,possibleAnswers:this.possibleAnswers}}):e._e(),"flagQuiz"===e.selectedElement?a("flag-quiz",{attrs:{answerCountry:this.answerCountry,possibleAnswers:this.possibleAnswers}}):e._e()],1)},m=[],f=(a("caad"),a("2532"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Flag Quiz")]),e.answerCountry?a("img",{attrs:{src:this.answerCountry.flag,alt:"Flag"}}):e._e(),e.answerCountry&&!e.userGuessResult?a("div",{staticClass:"question"},[a("p",[e._v("What country is this the flag of?")]),e.possibleAnswers?a("div",[a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[0])}}},[e._v(e._s(e.possibleAnswers[0].name))]),a("br"),a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[1])}}},[e._v(e._s(e.possibleAnswers[1].name))]),a("br"),a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[2])}}},[e._v(e._s(e.possibleAnswers[2].name))]),a("br"),a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[3])}}},[e._v(e._s(e.possibleAnswers[3].name))]),a("br")]):e._e()]):e._e(),a("div",{staticClass:"wrongAnswer"},[!1===e.userGuessResult?a("p",[e._v("Bad luck, try again! "),a("br"),a("button",{staticClass:"wrongAnswerButton",attrs:{type:"button"},on:{click:e.generateQuestion}},[e._v("I want a new country please!")])]):e._e()]),e.userGuessResult?a("div",{staticClass:"rightAnswer"},[a("p",[e._v("Well done!")]),a("p",[e._v("The capital of "+e._s(this.answerCountry.name)+" is "+e._s(this.answerCountry.capital)+"!")]),a("p",[e._v("People from "+e._s(this.answerCountry.name)+" are called "+e._s(this.answerCountry.demonym)+".")]),a("p",[e._v(e._s(this.answerCountry.name)+" is part of "+e._s(this.answerCountry.region)+".")]),a("p",[a("button",{attrs:{type:"button"},on:{click:e.generateQuestion}},[e._v("Next!")])])]):e._e()])}),v=[],_="api/countriesPlus/",y={getCountries:function(){return fetch(_).then((function(e){return e.json()}))},createCountry:function(e){return fetch(_,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},updateCountry:function(e,t){return fetch(_+e,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}},g={data:function(){return{userGuessResult:null}},props:["answerCountry","possibleAnswers"],mounted:function(){this.generateQuestion()},methods:{generateQuestion:function(){this.userGuessResult=null,Ye.$emit("play-quiz")},checkGuess:function(e){if(e===this.answerCountry){this.answerCountry.flag_correct_ans+=1;var t=this.answerCountry._id,a={flag_correct_ans:this.answerCountry.flag_correct_ans};return this.updateCountry(t,a),this.userGuessResult=!0}this.answerCountry.flag_wrong_ans+=1;var r=this.answerCountry._id,n={flag_wrong_ans:this.answerCountry.flag_wrong_ans};return this.updateCountry(r,n),this.userGuessResult=!1},updateCountry:function(e,t){y.updateCountry(e,t).then((function(e){return Ye.$emit("updated-country-track-item",e)}))}}},b=g,w=(a("2388"),Object(l["a"])(b,f,v,!1,null,"444ccd80",null)),C=w.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Capitals Quiz")]),e.answerCountry&&!e.userGuessResult?a("div",{staticClass:"question"},[a("p",[e._v("What is the capital of "+e._s(this.answerCountry.name)+"?")]),a("br"),e.possibleAnswers?a("div",[a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[0])}}},[e._v(e._s(e.possibleAnswers[0].capital))]),a("br"),a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[1])}}},[e._v(e._s(e.possibleAnswers[1].capital))]),a("br"),a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[2])}}},[e._v(e._s(e.possibleAnswers[2].capital))]),a("br"),a("button",{on:{click:function(t){return e.checkGuess(e.possibleAnswers[3])}}},[e._v(e._s(e.possibleAnswers[3].capital))])]):e._e()]):e._e(),!1===e.userGuessResult?a("p",{staticClass:"wrongAnswer"},[e._v("Bad luck, try again! "),a("br"),a("button",{staticClass:"wrongAnswerButton",attrs:{type:"button"},on:{click:e.generateQuestion}},[e._v("I want a new country please!")])]):e._e(),!0===this.userGuessResult?a("div",{staticClass:"rightAnswer"},[a("p",[e._v("Well done!")]),a("p",[a("img",{attrs:{src:this.answerCountry.flag,width:"150"}})]),a("p",[e._v("The capital of "+e._s(this.answerCountry.name)+" is "+e._s(this.answerCountry.capital)+"!")]),a("p",[e._v("People from "+e._s(this.answerCountry.name)+" are called "+e._s(this.answerCountry.demonym)+".")]),a("p",[e._v(e._s(this.answerCountry.name)+" is part of "+e._s(this.answerCountry.region)+".")]),a("p",[a("button",{attrs:{type:"button"},on:{click:e.generateQuestion}},[e._v("Next!")])])]):e._e()])},M=[],k=(a("b0c0"),{data:function(){return{userGuessResult:null}},props:["answerCountry","possibleAnswers"],mounted:function(){this.generateQuestion()},methods:{generateQuestion:function(){this.userGuessResult=null,Ye.$emit("play-quiz")},checkGuess:function(e){if(e===this.answerCountry){this.answerCountry.capital_correct_ans+=1,console.log(this.answerCountry.name,"correct: ",this.answerCountry.capital_correct_ans);var t=this.answerCountry._id,a={capital_correct_ans:this.answerCountry.capital_correct_ans};return this.updateCountry(t,a),this.userGuessResult=!0}this.answerCountry.capital_wrong_ans+=1;var r=this.answerCountry._id,n={capital_wrong_ans:this.answerCountry.capital_wrong_ans};return this.updateCountry(r,n),this.userGuessResult=!1},updateCountry:function(e,t){y.updateCountry(e,t).then((function(e){return Ye.$emit("updated-country-track-item",e)}))}}}),x=k,P=(a("685e"),Object(l["a"])(x,A,M,!1,null,"77506e59",null)),O=P.exports,D={data:function(){return{answerCountry:null,userGuessResult:null,possibleAnswers:[]}},props:["countries","selectedElement"],mounted:function(){var e=this;Ye.$on("guess-selected",(function(t){e.checkGuess(t)})),Ye.$on("play-quiz",(function(){e.generateQuestion()})),this.generateQuestion()},components:{"capitals-quiz":O,"flag-quiz":C},methods:{getRandomCountry:function(){this.userGuessResult=null;var e=this.countries.length,t=Math.floor(Math.random()*Math.floor(e));while(!this.countries[t].capital)t=Math.floor(Math.random()*Math.floor(e));return this.countries[t]},generateQuestion:function(){this.possibleAnswers=[],this.answerCountry=this.getRandomCountry(),this.possibleAnswers.push(this.answerCountry);for(var e=this.possibleAnswers.length;e<4;e++){var t=this.getRandomCountry();this.possibleAnswers.includes(t)||this.possibleAnswers.push(t)}this.shuffleArray()},shuffleArray:function(){for(var e=this.possibleAnswers.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),a=this.possibleAnswers[e];this.possibleAnswers[e]=this.possibleAnswers[t],this.possibleAnswers[t]=a}return this.possibleAnswers}}},T=D,F=(a("c09d"),Object(l["a"])(T,h,m,!1,null,"1eb86d5f",null)),z=F.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"map"},[a("h1",[e._v("Outline Quiz Map "),e.amMapData?e._e():a("span",{attrs:{id:"region-prompt"}},[e._v(" - Please select a region.")])]),a("button",{on:{click:function(t){return e.setWorld()}}},[e._v("World")]),a("button",{on:{click:function(t){return e.setEurope()}}},[e._v("Europe")]),a("button",{on:{click:function(t){return e.setAfrica()}}},[e._v("Africa")]),a("button",{on:{click:function(t){return e.setAsia()}}},[e._v("Asia")]),a("button",{on:{click:function(t){return e.setCaribbean()}}},[e._v("Caribbean")]),a("button",{on:{click:function(t){return e.setCentralAmerica()}}},[e._v("Central America")]),a("button",{on:{click:function(t){return e.setMiddleEast()}}},[e._v("Middle East")]),a("button",{on:{click:function(t){return e.setNorthAmerica()}}},[e._v("North America")]),a("button",{on:{click:function(t){return e.setOceania()}}},[e._v("Oceania")]),a("button",{on:{click:function(t){return e.setSouthAmerica()}}},[e._v("South America")]),e.amMapData?a("outline-map",{key:e.componentKey,attrs:{performanceData:e.mapPerformance,amMapData:e.amMapData,giveUp:e.giveUp}}):e._e()],1)},E=[],Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{attrs:{id:"chartdiv"}}),e.answerCountry&&!e.answerCorrect?a("h3",[e._v("Where is "+e._s(this.answerCountry.name)+"?")]):e._e(),e.answerCorrect?a("h3",[e._v("Well done you found "+e._s(this.answerCountry.name)+".")]):e._e(),e.selectedCountry?a("h5",[e._v("You have selected "+e._s(this.selectedCountry.dataItem.dataContext.name))]):e._e(),e.answerCountry?e._e():a("button",{on:{click:function(t){return e.randomArrayItem(e.polygonData)}}},[e._v("Give me a country!")]),!e.answerCorrect&&e.answerCountry?a("button",{on:{click:function(t){return e.randomArrayItem(e.polygonData)}}},[e._v("Give me a different country!")]):e._e(),e.answerCorrect?a("button",{on:{click:e.resetAnswer}},[e._v("Another round?")]):e._e(),e.answerCorrect||e.giveUpZoom||!e.answerCountry?e._e():a("button",{on:{click:e.giveUpMethod}},[e._v("Give Up? Show me")])])},R=[],G=(a("cb29"),a("7db0"),a("d81d"),a("71c9")),I=a("c497"),S=a("d08f"),X=a("5a54"),$="api/amMapPerformance/",N={getCountries:function(){return fetch($).then((function(e){return e.json()}))},createCountry:function(e){return fetch($,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))},updateCountry:function(e,t){return fetch($+e,{method:"PUT",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}};G["g"](X["a"]);var V={name:"outline-map",props:["performanceData","amMapData","giveUp"],data:function(){return{map:null,polygonData:[],selectedCountry:null,answerCountry:null,worldCountryPolygonData:null,answerCorrect:!1,giveUpZoom:null}},mounted:function(){var e=this;this.map=G["e"]("chartdiv",S["b"]),this.map.geodata=this.amMapData,this.map.projection=new S["e"].Miller,this.map.panBehavior="rotateLong";var t=this.map.series.push(new S["c"]);this.worldCountryPolygonData=this.amMapData.features,t._data=this.polygonData,t.exclude=["AQ"],t.useGeodata=!0;var a=t.mapPolygons.template;a.fill=G["d"]("#d2e6c1"),a.stroke=G["d"]("#395C6B");var r=a.states.create("hover");r.properties.fill=G["d"]("#367B25");var n=a.states.create("active");n.properties.fill=this.map.colors.getIndex(2),this.giveUpZoom=this.giveUp,a.events.on("hit",(function(a){if(e.giveUpZoom){console.log("disable hit");var r=t.getPolygonById(e.giveUpZoom);r&&(r.isActive=!1),e.giveUpZoom=null}e.selectedCountry!==a.target&&(e.selectedCountry&&(e.selectedCountry.isActive=!1),a.target.isActive=!a.target.isActive,e.selectedCountry=a.target,e.correct())})),this.giveUpZoom&&this.map.events.on("ready",(function(a){var r=[e.giveUpZoom],n=t.getPolygonById(r);n&&(n.isActive=!0,e.map.zoomToMapObject(n))}))},beforeDestroy:function(){this.map&&this.map.dispose()},computed:{},methods:{randomArrayItem:function(e){var t=e.length,a=Math.floor(Math.random()*Math.floor(t));this.answerCountry=e[a]},resetAnswer:function(){this.answerCorrect=!1,this.randomArrayItem(this.polygonData)},giveUpMethod:function(){Ye.$emit("give-up",this.answerCountry.id)},correct:function(){var e=this;if(!this.answerCorrect){if(!this.answerCountry||!this.selectedCountry)return this.answerCorrect=!1;if(this.answerCountry.name===this.selectedCountry.dataItem.dataContext.name){var t=this.performanceData.find((function(t){return t.name===e.answerCountry.name}));t.correct_answers+=1;var a=t._id,r={correct_answers:t.correct_answers};return N.updateCountry(a,r).then((function(e){return Ye.$emit("updated-amMap-track-item",e)})),this.answerCorrect=!0}var n=this.performanceData.find((function(t){return t.name===e.answerCountry.name}));n.wrong_answers+=1;var s=n._id,o={wrong_answers:n.wrong_answers};return N.updateCountry(s,o).then((function(e){return Ye.$emit("updated-amMap-track-item",e)})),this.answerCorrect=!1}}}},q=V,W=(a("fc12"),Object(l["a"])(q,Q,R,!1,null,"683e7ce6",null)),U=W.exports,J=a("777a"),Y=a("2ecd"),B=a("bcf4"),L=a("992d"),Z=a("750a"),K=a("ef56"),H=a("8149"),ee=a("a49a"),te=a("4797"),ae=a("23ca"),re={name:"outline-quiz",props:["mapPerformance"],data:function(){return{amMapData:null,componentKey:0,giveUp:!1}},mounted:function(){var e=this;Ye.$on("give-up",(function(t){t&&(e.giveUp=t,e.forceRerender())}))},components:{"outline-map":U},methods:{forceRerender:function(){this.componentKey+=1},setWorld:function(){this.amMapData=J["a"],this.forceRerender()},setEurope:function(){this.amMapData=Y["a"],this.forceRerender()},setAfrica:function(){this.amMapData=B["a"],this.forceRerender()},setAsia:function(){this.amMapData=L["a"],this.forceRerender()},setCaribbean:function(){this.amMapData=Z["a"],this.forceRerender()},setCentralAmerica:function(){this.amMapData=K["a"],this.forceRerender()},setMiddleEast:function(){this.amMapData=H["a"],this.forceRerender()},setNorthAmerica:function(){this.amMapData=ee["a"],this.forceRerender()},setOceania:function(){this.amMapData=te["a"],this.forceRerender()},setSouthAmerica:function(){this.amMapData=ae["a"],this.forceRerender()}}},ne=re,se=(a("d7df"),Object(l["a"])(ne,j,E,!1,null,"18415490",null)),oe=se.exports,ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-component"},[a("h1",[e._v("Performance Charts "),a("span",{attrs:{id:"region-prompt"}},[a("button",{class:{"active-button":"mapQuiz"===e.selectedElement},on:{click:function(t){return e.select("mapQuiz")}}},[e._v("Map Quiz")]),a("button",{class:{"active-button":"capitalQuiz"===e.selectedElement},on:{click:function(t){return e.select("capitalQuiz")}}},[e._v("Capital Quiz")]),a("button",{class:{"active-button":"flagQuiz"===e.selectedElement},on:{click:function(t){return e.select("flagQuiz")}}},[e._v("Flag Quiz")]),e.selectedElement?e._e():a("span",[e._v(" - Please select")])])]),"mapQuiz"===e.selectedElement?a("div",{staticClass:"map-quiz"},[a("button",{class:{"active-button":"heatmap"===e.chartSelect},on:{click:function(t){return e.selectChart("heatmap")}}},[e._v("Heatmap")]),a("button",{class:{"active-button":"table"===e.chartSelect},on:{click:function(t){return e.selectChart("table")}}},[e._v("Top 10 Table")]),"table"===e.chartSelect?a("div",[e.mapMostInaccurate?a("map-chart",{attrs:{mapMostAccurate:e.mapMostAccurate,mapMostInaccurate:e.mapMostInaccurate}}):e._e()],1):e._e(),"heatmap"===e.chartSelect?a("div",[e.mapPerformanceAccuracy?a("heat-map",{attrs:{mapPerformanceAccuracy:e.mapPerformanceAccuracyOnly}}):e._e()],1):e._e()]):e._e(),"capitalQuiz"===e.selectedElement?a("div",[e.capitalMostInaccurate?a("capital-chart",{attrs:{mostAccurate:e.capitalMostAccurate,mostInaccurate:e.capitalMostInaccurate}}):e._e()],1):e._e(),"flagQuiz"===e.selectedElement?a("div",[e.flagMostInaccurate?a("flag-chart",{attrs:{mostAccurate:e.flagMostAccurate,mostInaccurate:e.flagMostInaccurate}}):e._e()],1):e._e()])},ie=[],ue=a("b85c"),le=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},pe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"chart",attrs:{id:"chartdiv"}})])}],de={name:"map-top-ten",props:["mapMostAccurate","mapMostInaccurate"],data:function(){return{chart:null}},mounted:function(){G["g"](X["a"]),this.chart=G["e"]("chartdiv",G["a"]),this.chart.width=G["f"](100),this.chart.height=G["f"](100),this.chart.layout="horizontal";var e=this.chart.createChild(I["d"]);e.paddingRight=0,e.data=JSON.parse(JSON.stringify(this.mapMostInaccurate));var t=e.yAxes.push(new I["a"]);t.dataFields.category="name",t.renderer.grid.template.location=0,t.renderer.inversed=!0,t.renderer.minGridDistance=10;var a=e.xAxes.push(new I["c"]);a.renderer.inversed=!0,a.min=0,a.max=100,a.strictMinMax=!0,a.numberFormatter=new G["c"],a.numberFormatter.numberFormat="#.#'%'";var r=e.series.push(new I["b"]);r.dataFields.valueX="map_accuracy",r.dataFields.subValueX="correct_answers",r.dataFields.subTwoValueX="wrong_answers",r.dataFields.categoryY="name",r.interpolationDuration=1e3,r.columns.template.tooltipText="{categoryY}: {valueX.formatNumber('#.0')}% Correct: {subValueX} Wrong:{subTwoValueX}";var n=this.chart.createChild(I["d"]);n.paddingLeft=0,n.data=JSON.parse(JSON.stringify(this.mapMostAccurate));var s=n.yAxes.push(new I["a"]);s.renderer.inversed=!0,s.renderer.opposite=!0,s.dataFields.category="name",s.renderer.grid.template.location=0,s.renderer.minGridDistance=10;var o=n.xAxes.push(new I["c"]);o.min=0,o.max=100,o.strictMinMax=!0,o.numberFormatter=new G["c"],o.numberFormatter.numberFormat="#.#'%'",o.renderer.minLabelPosition=.01;var c=n.series.push(new I["b"]);c.dataFields.valueX="map_accuracy",c.dataFields.subValueX="correct_answers",c.dataFields.subTwoValueX="wrong_answers",c.fill=G["d"]("#6bbd8f"),c.stroke=c.fill,c.columns.template.tooltipText="{categoryY}: {valueX.formatNumber('#.0')}% Correct: {subValueX} Wrong:{subTwoValueX}",c.dataFields.categoryY="name",c.interpolationDuration=1e3;var i=s.renderer.labels.template;i.truncate=!0,i.maxWidth=200;var u=t.renderer.labels.template;u.truncate=!0,u.maxWidth=200},beforeDestroy:function(){this.chart&&this.chart.dispose()},methods:{}},he=de,me=(a("6506"),Object(l["a"])(he,le,pe,!1,null,"68a91c65",null)),fe=me.exports,ve=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_e=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"chart",attrs:{id:"chartdiv"}})])}],ye={name:"flag-top-ten",props:["mostAccurate","mostInaccurate"],data:function(){return{chart:null}},mounted:function(){G["g"](X["a"]),this.chart=G["e"]("chartdiv",G["a"]),this.chart.width=G["f"](100),this.chart.height=G["f"](100),this.chart.layout="horizontal";var e=this.chart.createChild(I["d"]);e.paddingRight=0,e.data=JSON.parse(JSON.stringify(this.mostInaccurate));var t=e.yAxes.push(new I["a"]);t.dataFields.category="name",t.renderer.grid.template.location=0,t.renderer.inversed=!0,t.renderer.minGridDistance=10;var a=e.xAxes.push(new I["c"]);a.renderer.inversed=!0,a.min=0,a.max=100,a.strictMinMax=!0,a.numberFormatter=new G["c"],a.numberFormatter.numberFormat="#.#'%'";var r=e.series.push(new I["b"]);r.dataFields.valueX="flag_accuracy",r.dataFields.subValueX="flag_correct_ans",r.dataFields.subTwoValueX="flag_wrong_ans",r.dataFields.categoryY="name",r.interpolationDuration=1e3,r.columns.template.tooltipText="{categoryY}: {valueX.formatNumber('#.0')}% Correct: {subValueX} Wrong:{subTwoValueX}";var n=this.chart.createChild(I["d"]);n.paddingLeft=0,n.data=JSON.parse(JSON.stringify(this.mostAccurate));var s=n.yAxes.push(new I["a"]);s.renderer.inversed=!0,s.renderer.opposite=!0,s.dataFields.category="name",s.renderer.grid.template.location=0,s.renderer.minGridDistance=10;var o=n.xAxes.push(new I["c"]);o.min=0,o.max=100,o.strictMinMax=!0,o.numberFormatter=new G["c"],o.numberFormatter.numberFormat="#.#'%'",o.renderer.minLabelPosition=.01;var c=n.series.push(new I["b"]);c.dataFields.valueX="flag_accuracy",c.dataFields.subValueX="flag_correct_ans",c.dataFields.subTwoValueX="flag_wrong_ans",c.fill=G["d"]("#6bbd8f"),c.stroke=c.fill,c.columns.template.tooltipText="{categoryY}: {valueX.formatNumber('#.0')}% Correct: {subValueX} Wrong:{subTwoValueX}",c.dataFields.categoryY="name",c.interpolationDuration=1e3;var i=s.renderer.labels.template;i.truncate=!0,i.maxWidth=200;var u=t.renderer.labels.template;u.truncate=!0,u.maxWidth=200},beforeDestroy:function(){this.chart&&this.chart.dispose()},methods:{}},ge=ye,be=(a("dff4"),Object(l["a"])(ge,ve,_e,!1,null,"12a447b3",null)),we=be.exports,Ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{staticClass:"chart",attrs:{id:"chartdiv"}})])}],Me={name:"capital-top-ten",props:["mostAccurate","mostInaccurate"],data:function(){return{chart:null}},mounted:function(){G["g"](X["a"]),this.chart=G["e"]("chartdiv",G["a"]),this.chart.width=G["f"](100),this.chart.height=G["f"](100),this.chart.layout="horizontal";var e=this.chart.createChild(I["d"]);e.paddingRight=0,e.data=JSON.parse(JSON.stringify(this.mostInaccurate));var t=e.yAxes.push(new I["a"]);t.dataFields.category="name",t.renderer.grid.template.location=0,t.renderer.inversed=!0,t.renderer.minGridDistance=10;var a=e.xAxes.push(new I["c"]);a.renderer.inversed=!0,a.min=0,a.max=100,a.strictMinMax=!0,a.numberFormatter=new G["c"],a.numberFormatter.numberFormat="#.#'%'";var r=e.series.push(new I["b"]);r.dataFields.valueX="capital_accuracy",r.dataFields.subValueX="capital_correct_ans",r.dataFields.subTwoValueX="capital_wrong_ans",r.dataFields.categoryY="name",r.interpolationDuration=1e3,r.columns.template.tooltipText="{categoryY}: {valueX.formatNumber('#.0')}% Correct: {subValueX} Wrong:{subTwoValueX}";var n=this.chart.createChild(I["d"]);n.paddingLeft=0,n.data=JSON.parse(JSON.stringify(this.mostAccurate));var s=n.yAxes.push(new I["a"]);s.renderer.inversed=!0,s.renderer.opposite=!0,s.dataFields.category="name",s.renderer.grid.template.location=0,s.renderer.minGridDistance=10;var o=n.xAxes.push(new I["c"]);o.min=0,o.max=100,o.strictMinMax=!0,o.numberFormatter=new G["c"],o.numberFormatter.numberFormat="#.#'%'",o.renderer.minLabelPosition=.01;var c=n.series.push(new I["b"]);c.dataFields.valueX="capital_accuracy",c.dataFields.subValueX="capital_correct_ans",c.dataFields.subTwoValueX="capital_wrong_ans",c.fill=G["d"]("#6bbd8f"),c.stroke=c.fill,c.columns.template.tooltipText="{categoryY}: {valueX.formatNumber('#.0')}% Correct: {subValueX} Wrong:{subTwoValueX}",c.dataFields.categoryY="name",c.interpolationDuration=1e3;var i=s.renderer.labels.template;i.truncate=!0,i.maxWidth=200;var u=t.renderer.labels.template;u.truncate=!0,u.maxWidth=200},beforeDestroy:function(){this.chart&&this.chart.dispose()},methods:{}},ke=Me,xe=(a("72c8"),Object(l["a"])(ke,Ce,Ae,!1,null,"5f9b1281",null)),Pe=xe.exports,Oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},De=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{},[a("div",{attrs:{id:"chartdiv"}})])}];G["g"](X["a"]);var Te={name:"heat-map",props:["mapPerformanceAccuracy"],data:function(){return{map:null,polygonData:[],selectedCountry:null,answerCountry:null,worldCountryPolygonData:null,answerCorrect:!1}},mounted:function(){this.map=G["e"]("chartdiv",S["b"]),this.map.hiddenState.properties.opacity=0,this.map.geodata=J["a"],this.map.projection=new S["e"].Miller;var e=this.map.chartContainer.createChild(G["b"]);e.text="Accuracy",e.fontSize=20,e.paddingTop=30,e.align="start",e.zIndex=100;var t=this.map.series.push(new S["c"]),a=t.mapPolygons.template;a.tooltipText="{name}: {value.value.formatNumber('#.0')}%",t.heatRules.push({property:"fill",target:t.mapPolygons.template,min:G["d"]("#ffffff"),max:G["d"]("#2ca25f")}),t.useGeodata=!0;var r=this.map.chartContainer.createChild(S["a"]);function n(e){isNaN(e.dataItem.value)?r.valueAxis.hideTooltip():r.valueAxis.showTooltipAt(e.dataItem.value)}r.valign="bottom",r.align="left",r.width=G["f"](100),r.series=t,r.orientation="horizontal",r.padding(20,20,20,20),r.valueAxis.renderer.labels.template.fontSize=10,r.valueAxis.renderer.minGridDistance=40,t.mapPolygons.template.events.on("over",(function(e){n(e.target)})),t.mapPolygons.template.events.on("hit",(function(e){n(e.target)})),t.mapPolygons.template.strokeOpacity=.4,t.mapPolygons.template.events.on("out",(function(e){r.valueAxis.hideTooltip()})),this.map.zoomControl=new S["d"],this.map.zoomControl.valign="top",t.data=this.mapPerformanceAccuracy,t.exclude=["AQ"]},beforeDestroy:function(){this.map&&this.map.dispose()},computed:{},methods:{}},Fe=Te,ze=(a("a2aa"),Object(l["a"])(Fe,Oe,De,!1,null,"53841a1c",null)),je=ze.exports,Ee={name:"performance-charts",props:["countries","mapPerformance"],data:function(){return{selectedElement:null,chartSelect:null,mapPerformanceAccuracy:null,mapPerformanceAccuracyOnly:null,mapMostAccurate:null,mapMostInaccurate:null,capitalPerformanceAccuracy:null,capitalMostAccurate:null,capitalMostInaccurate:null,flagPerformanceAccuracy:null,flagMostAccurate:null,flagMostInaccurate:null}},mounted:function(){this.mapPerformanceAccuracy=this.getAccuracy(this.mapPerformance,"correct_answers","wrong_answers","map_accuracy"),this.mapPerformanceAccuracyOnly=this.getAccuracyOnly(this.mapPerformance,"correct_answers","wrong_answers","map_accuracy"),this.mapMostAccurate=this.getTopTenAccurate(this.mapPerformanceAccuracy,"correct_answers","wrong_answers","map_accuracy",!0),this.mapMostInaccurate=this.getTopTenAccurate(this.mapPerformanceAccuracy,"correct_answers","wrong_answers","map_accuracy",!1),this.capitalPerformanceAccuracy=this.getAccuracy(this.countries,"capital_correct_ans","capital_wrong_ans","capital_accuracy"),this.capitalMostAccurate=this.getTopTenAccurate(this.capitalPerformanceAccuracy,"capital_correct_ans","capital_wrong_ans","capital_accuracy",!0),this.capitalMostInaccurate=this.getTopTenAccurate(this.capitalPerformanceAccuracy,"capital_correct_ans","capital_wrong_ans","capital_accuracy",!1),this.flagPerformanceAccuracy=this.getAccuracy(this.countries,"flag_correct_ans","flag_wrong_ans","flag_accuracy"),this.flagMostAccurate=this.getTopTenAccurate(this.capitalPerformanceAccuracy,"flag_correct_ans","flag_wrong_ans","flag_accuracy",!0),this.flagMostInaccurate=this.getTopTenAccurate(this.capitalPerformanceAccuracy,"flag_correct_ans","flag_wrong_ans","flag_accuracy",!1)},methods:{select:function(e){this.selectedElement=e},selectChart:function(e){this.chartSelect=e},getAccuracy:function(e,t,a,r){var n,s=Object(ue["a"])(e);try{for(s.s();!(n=s.n()).done;){var o=n.value;o[r]=o[t]/(o[a]+o[t])*100}}catch(c){s.e(c)}finally{s.f()}return e},getAccuracyOnly:function(e,t,a,r){var n,s=[],o=Object(ue["a"])(e);try{for(o.s();!(n=o.n()).done;){var c=n.value,i={id:c.id,value:c[t]/(c[a]+c[t])*100};s.push(i)}}catch(u){o.e(u)}finally{o.f()}return s},getTopTenAccurate:function(e,t,a,r,n){var s=[],o=[];o=n?e.sort((function(e,t){return t[r]-e[r]})):e.sort((function(e,t){return e[r]-t[r]}));var c,i=Object(ue["a"])(o);try{for(i.s();!(c=i.n()).done;){var u=c.value,l=u[t]+u[a];if(l>10&&s.push(u),s.length>=10)return s}}catch(p){i.e(p)}finally{i.f()}return s}},components:{"map-chart":fe,"flag-chart":we,"capital-chart":Pe,"heat-map":je}},Qe=Ee,Re=(a("2b50"),Object(l["a"])(Qe,ce,ie,!1,null,"e5585c3c",null)),Ge=Re.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chart-component"},[a("h3",[e._v("Admin for Backend")]),a("br"),a("hr"),a("p",[e._v("Countries from RestAPI: "+e._s(e.countries.length))]),a("button",{on:{click:function(t){return e.populateRestCountriesDb(!1)}}},[e._v("Populate database with RestAPI + tracking(blank)")]),a("button",{on:{click:function(t){return e.populateRestCountriesDb(!0)}}},[e._v("Populate database with RestAPI + tracking(random)")]),a("br"),a("hr"),a("p",[e._v("Countries in Outline map tracking: "+e._s(e.mapPerformance.length))]),a("button",{on:{click:function(t){return e.populateMapCountriesDb(!1)}}},[e._v("Populate database with Outline Map tracking(blank)")]),a("button",{on:{click:function(t){return e.populateMapCountriesDb(!0)}}},[e._v("Populate database with Outline Map tracking(random)")]),a("br"),a("hr"),a("p",[e._v("To clear all data, run npm run seeds in server folder")])])},Se=[],Xe={name:"admin-backend",props:["countries","mapPerformance"],methods:{populateRestCountriesDb:function(e){var t=this;fetch("http://localhost:3000/restCountries").then((function(e){return e.json()})).then((function(a){t.createPerformanceData(a,e)}))},createPerformanceData:function(e,t){var a=[];if(t){var r,n=Object(ue["a"])(e);try{for(n.s();!(r=n.n()).done;){var s=r.value;s.flag_correct_ans=Math.floor(49*Math.random())+1,s.flag_wrong_ans=Math.floor(49*Math.random())+1,s.capital_correct_ans=Math.floor(49*Math.random())+1,s.capital_wrong_ans=Math.floor(49*Math.random())+1,a.push(s)}}catch(u){n.e(u)}finally{n.f()}}if(!t){var o,c=Object(ue["a"])(e);try{for(c.s();!(o=c.n()).done;){var i=o.value;i.flag_correct_ans=0,i.flag_wrong_ans=0,i.capital_correct_ans=0,i.capital_wrong_ans=0,a.push(i)}}catch(u){c.e(u)}finally{c.f()}}this.postArray(a)},postArray:function(e){var t,a=[],r=Object(ue["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;y.createCountry(n).then((function(e){return a.push(e)}))}}catch(s){r.e(s)}finally{r.f()}Ye.$emit("rest-api-data",a)},populateMapCountriesDb:function(e){var t,a=[],r=Object(ue["a"])(J["a"].features);try{for(r.s();!(t=r.n()).done;){var n=t.value,s={id:n.properties.id,name:n.properties.name};e&&(s.correct_answers=Math.floor(49*Math.random())+1,s.wrong_answers=Math.floor(49*Math.random())+1),e||(s.correct_answers=0,s.wrong_answers=0),a.push(s)}}catch(o){r.e(o)}finally{r.f()}this.postMapArray(a)},postMapArray:function(e){var t,a=[],r=Object(ue["a"])(e);try{for(r.s();!(t=r.n()).done;){var n=t.value;N.createCountry(n).then((function(e){return a.push(e)}))}}catch(s){r.e(s)}finally{r.f()}Ye.$emit("amMap-api-data",a)}}},$e=Xe,Ne=(a("5ed8"),Object(l["a"])($e,Ie,Se,!1,null,"30d3eec0",null)),Ve=Ne.exports,qe={name:"App",data:function(){return{countries:[],mapPerformance:[],selectedElement:""}},mounted:function(){var e=this;y.getCountries().then((function(t){return e.countries=t})),Ye.$on("rest-api-data",(function(t){e.countries=t})),N.getCountries().then((function(t){return e.mapPerformance=t})),Ye.$on("amMap-api-data",(function(t){e.mapPerformance=t})),Ye.$on("updated-amMap-track-item",(function(t){var a=e.mapPerformance.findIndex((function(e){return e._id===t._id}));e.mapPerformance.splice(a,1,t)})),Ye.$on("updated-country-track-item",(function(t){var a=e.mapPerformance.findIndex((function(e){return e._id===t._id}));e.countries.splice(a,1,t)}))},methods:{select:function(e){this.selectedElement=e},reGetCountries:function(){var e=this;y.getCountries().then((function(t){return e.countries=t})),N.getCountries().then((function(t){return e.mapPerformance=t}))}},components:{"developer-quote":d,quiz:z,"outline-quiz":oe,"admin-backend":Ve,"performance-charts":Ge}},We=qe,Ue=(a("034f"),Object(l["a"])(We,n,s,!1,null,null,null)),Je=Ue.exports;r["a"].config.productionTip=!1;var Ye=new r["a"];new r["a"]({render:function(e){return e(Je)}}).$mount("#app")},"56dd":function(e,t,a){},"5ed8":function(e,t,a){"use strict";var r=a("56dd"),n=a.n(r);n.a},"5edd":function(e,t,a){},"633c":function(e,t,a){"use strict";var r=a("38d2"),n=a.n(r);n.a},6506:function(e,t,a){"use strict";var r=a("de25"),n=a.n(r);n.a},"685e":function(e,t,a){"use strict";var r=a("fa64"),n=a.n(r);n.a},"72c8":function(e,t,a){"use strict";var r=a("cf23"),n=a.n(r);n.a},"75a7":function(e,t,a){},"816f":function(e,t,a){},"85ec":function(e,t,a){},"9bdc":function(e,t,a){},a2aa:function(e,t,a){"use strict";var r=a("75a7"),n=a.n(r);n.a},c09d:function(e,t,a){"use strict";var r=a("5edd"),n=a.n(r);n.a},cf23:function(e,t,a){},d7df:function(e,t,a){"use strict";var r=a("1098"),n=a.n(r);n.a},de25:function(e,t,a){},dff4:function(e,t,a){"use strict";var r=a("3aea"),n=a.n(r);n.a},fa64:function(e,t,a){},fc12:function(e,t,a){"use strict";var r=a("9bdc"),n=a.n(r);n.a}});
//# sourceMappingURL=app.72e143f8.js.map