(this["webpackJsonpresty-react"]=this["webpackJsonpresty-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r),c=(a(12),a(13),a(3)),s=a(4),m=a(6),u=a(5),i=(a(14),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleUrl=function(e){var t=e.target.value;n.setState({url:t})},n.handleMethod=function(e){var t=e.target.value;n.setState({method:t})},n.handleSubmit=function(e){if(e.preventDefault(),n.state.url&&n.state.method){var t={url:n.state.url,method:n.state.method};n.setState({request:t,url:"",method:""}),e.target.reset()}else alert("missing information")},n.state={method:"",url:"",request:{}},n}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("main",{className:"main"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"div"},l.a.createElement("input",{className:"input",type:"text",placeholder:"Enter URL",onChange:this.handleUrl}),l.a.createElement("button",{type:"submit"},"GO!")),l.a.createElement("div",{className:"div"},l.a.createElement("span",{className:"method"},l.a.createElement("input",{className:"methodGet",type:"radio",name:"method",value:"get",onClick:this.handleMethod}),"GET"),l.a.createElement("span",{className:"method"},l.a.createElement("input",{type:"radio",name:"method",value:"post",onClick:this.handleMethod}),"POST"),l.a.createElement("span",{className:"method"},l.a.createElement("input",{type:"radio",name:"method",value:"put",onClick:this.handleMethod}),"PUT"),l.a.createElement("span",{className:"method"},l.a.createElement("input",{type:"radio",name:"method",value:"delete",onClick:this.handleMethod}),"DELETE"))),l.a.createElement("div",{className:"results"},l.a.createElement("h3",{className:"methodOutput"},this.state.request.method),l.a.createElement("h3",{className:"urlOutput"},this.state.request.url," ")))}}]),a}(l.a.Component)),h=(a(15),function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"RESTy App"))}),d=(a(16),function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"\xa9 2020"))});var E=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,null),l.a.createElement(i,null),l.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5dc8065e.chunk.js.map