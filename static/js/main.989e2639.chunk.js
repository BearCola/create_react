(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},16:function(e,t,n){},17:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(9),r=n.n(i),l=(n(16),n(7)),c=n(1),h=n(2),s=n(4),u=n(3),d=n(5),m=(a.Component,n(17),n(18),a.Component,n(6)),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",phone:""},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault(),n.props.onCreate(n.state)},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{name:"name",placeholder:"\uc774\ub984",onChange:this.handleChange,value:this.state.name}),o.a.createElement("input",{name:"phone",placeholder:"\uc804\ud654\ubc88\ud638",onChange:this.handleChange,value:this.state.phone}),o.a.createElement("button",{type:"submit"},"\ub4f1\ub85d"),o.a.createElement("div",null,this.state.name," ",this.state.phone))}}]),t}(a.Component),f=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={editing:!1,name:"",phone:""},n.handleRemove=function(){var e=n.props,t=e.info;(0,e.onRemove)(t.id)},n.handleToggleEdit=function(){var e=n.props,t=e.info,a=e.onUpdate;n.state.editing?a(t.id,{name:n.state.name,phone:n.state.phone}):n.setState({name:t.name,phone:t.phone}),n.setState({editing:!n.state.editing})},n.handleChange=function(e){n.setState(Object(m.a)({},e.target.name,e.target.value))},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return this.state!==t||this.props.info!==e.info}},{key:"render",value:function(){var e=this.props.info,t=e.name,n=e.phone,i=this.state.editing;return console.log(t),o.a.createElement("div",{style:{border:"1px solid black",padding:"8px",margin:"8px"}},i?o.a.createElement(a.Fragment,null,o.a.createElement("div",null,o.a.createElement("input",{name:"name",onChange:this.handleChange,value:this.state.name})),o.a.createElement("div",null,o.a.createElement("input",{name:"phone",onChange:this.handleChange,value:this.state.phone}))):o.a.createElement(a.Fragment,null,o.a.createElement("div",null,o.a.createElement("b",null,t)),o.a.createElement("div",null,n)),o.a.createElement("button",{onClick:this.handleRemove},"\uc0ad\uc81c"),o.a.createElement("button",{onClick:this.handleToggleEdit},i?"\uc801\uc6a9":"\uc218\uc815"))}}]),t}(a.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.onRemove,a=e.onUpdate;console.log("rendering list");var i=t.map(function(e){return o.a.createElement(f,{onRemove:n,onUpdate:a,info:e,key:e.id})});return o.a.createElement("div",null,i)}}]),t}(a.Component);v.defaultProps={data:[]};var g=v,b=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).id=3,n.state={information:[{id:0,name:"\ud64d\uae38\ub3d9",phone:"010-0000-0001"},{id:1,name:"\uae40\ubbfc\uc900",phone:"010-0000-0002"},{id:2,name:"\uae40\ubca8\ub85c\ud37c\ud2b8",phone:"010-0000-0003"}],keyword:""},n.handleChange=function(e){n.setState({keyword:e.target.value})},n.handleCreate=function(e){var t=n.state.information;n.setState({information:t.concat(Object(l.a)({},e,{id:n.id++}))})},n.handleRemove=function(e){var t=n.state.information;n.setState({information:t.filter(function(t){return t.id!==e})})},n.handleUpdate=function(e,t){var a=n.state.information;n.setState({information:a.map(function(n){return n.id===e?Object(l.a)({id:e},t):n})})},n}return Object(d.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(p,{onCreate:this.handleCreate}),o.a.createElement("input",{value:this.state.keyword,onChange:this.handleChange,placeholder:"\uac80\uc0c9..."}),o.a.createElement(g,{data:this.state.information.filter(function(t){return t.name.indexOf(e.state.keyword)>-1}),onRemove:this.handleRemove,onUpdate:this.handleUpdate}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.989e2639.chunk.js.map