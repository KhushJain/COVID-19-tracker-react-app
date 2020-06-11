(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__15VWP",card:"Cards_card__3wUH8",infected:"Cards_infected__hoO0B",recovered:"Cards_recovered__2FLAA",deaths:"Cards_deaths__2wH6A"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=(a(92),a(6)),u=a.n(s),i=a(10),l=a(73),d=a(74),m=a(84),f=a(83),p=a(44),v=a.n(p),h=a(13),b=a.n(h),g=a(225),E=a(229),y=a(226),x=a(227),C=a(32),w=a.n(C),_=a(33),O=a.n(_),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:b.a.container},r.a.createElement(g.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(g.a,{item:!0,component:E.a,xs:12,md:3,className:O()(b.a.card,b.a.infected)},r.a.createElement(y.a,null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(x.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:a.value,duartion:2.5,separator:","})),r.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(x.a,{variant:"body2"},"Number of active cases of COVID-19"))),r.a.createElement(g.a,{item:!0,component:E.a,xs:12,md:3,className:O()(b.a.card,b.a.recovered)},r.a.createElement(y.a,null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(x.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:n.value,duartion:2.5,separator:","})),r.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(x.a,{variant:"body2"},"Number of recoveries from COVID-19"))),r.a.createElement(g.a,{item:!0,component:E.a,xs:12,md:3,className:O()(b.a.card,b.a.deaths)},r.a.createElement(y.a,null,r.a.createElement(x.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(x.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:c.value,duartion:2.5,separator:","})),r.a.createElement(x.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(x.a,{variant:"body2"},"Number of deaths caused by COVID-19"))))):"Loading..."},j=a(31),D=a(34),S=a.n(D),N="https://covid19.mathdro.id/api",I=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,S.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),V=a(46),R=a(80),U=a.n(R),W=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)([]),d=Object(j.a)(l,2),m=d[0],f=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var p=m.length?r.a.createElement(V.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, 0.5)",fill:!0}]}}):null,v=a?r.a.createElement(V.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:U.a.container},s?v:p)},P=a(230),F=a(228),H=a(81),J=a.n(H),L=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(j.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();console.log(o),e()}),[s]),r.a.createElement(P.a,{className:J.a.formControl},r.a.createElement(F.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(82),T=a.n(M),G=function(e){Object(m.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,I(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:v.a.container},r.a.createElement("img",{className:v.a.image,src:T.a,alt:"COVID-19"}),r.a.createElement(k,{data:t}),r.a.createElement(L,{handleCountryChange:this.handleCountryChange}),r.a.createElement(W,{data:t,country:a}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){e.exports={container:"App_container__264mT",image:"App_image__URWRr"}},80:function(e,t,a){e.exports={container:"Chart_container__2Rs-b"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__30oFT"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(208)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.454cfc0a.chunk.js.map