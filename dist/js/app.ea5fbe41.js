(function(e){function o(o){for(var n,u,l=o[0],d=o[1],a=o[2],b=0,p=[];b<l.length;b++)u=l[b],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&p.push(r[u][0]),r[u]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);i&&i(o);while(p.length)p.shift()();return c.push.apply(c,a||[]),t()}function t(){for(var e,o=0;o<c.length;o++){for(var t=c[o],n=!0,l=1;l<t.length;l++){var d=t[l];0!==r[d]&&(n=!1)}n&&(c.splice(o--,1),e=u(u.s=t[0]))}return e}var n={},r={app:0},c=[];function u(o){if(n[o])return n[o].exports;var t=n[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.m=e,u.c=n,u.d=function(e,o,t){u.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,o){if(1&o&&(e=u(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)u.d(t,n,function(o){return e[o]}.bind(null,n));return t},u.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(o,"a",o),o},u.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=o,l=l.slice();for(var a=0;a<l.length;a++)o(l[a]);var i=d;c.push([0,"chunk-vendors"]),t()})({0:function(e,o,t){e.exports=t("56d7")},"1bc1":function(e,o,t){"use strict";t("33de")},"33de":function(e,o,t){},"56d7":function(e,o,t){"use strict";t.r(o);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("7a23"),r=Object(n["d"])("h1",null,"The Lab",-1);function c(e,o,t,c,u,l){var d=Object(n["j"])("TodoList");return Object(n["e"])(),Object(n["c"])(n["a"],null,[r,Object(n["d"])(d)],64)}var u=Object(n["p"])("data-v-6575e81f");Object(n["g"])("data-v-6575e81f");var l=Object(n["d"])("label",{for:""},"Todolist with vue composition API",-1),d={class:"button-wrapper"},a=Object(n["d"])("button",null,"Add",-1),i={class:"list"};Object(n["f"])();var b=u((function(e,o,t,r,c,u){return Object(n["e"])(),Object(n["c"])(n["a"],null,[Object(n["d"])("form",{action:"GET",onSubmit:o[4]||(o[4]=Object(n["o"])((function(){return r.addNewTodo&&r.addNewTodo.apply(r,arguments)}),["prevent"]))},[l,Object(n["n"])(Object(n["d"])("input",{"onUpdate:modelValue":o[1]||(o[1]=function(e){return r.newTodo=e}),name:"newTodo",type:"text"},null,512),[[n["m"],r.newTodo]]),Object(n["d"])("div",d,[a,Object(n["d"])("button",{onClick:o[2]||(o[2]=Object(n["o"])((function(){return r.markAllTodos&&r.markAllTodos.apply(r,arguments)}),["prevent"]))},"Mark all"),Object(n["d"])("button",{onClick:o[3]||(o[3]=Object(n["o"])((function(){return r.removeAllTodos&&r.removeAllTodos.apply(r,arguments)}),["prevent"]))},"Remove all")])],32),Object(n["d"])("div",i,[Object(n["d"])("ul",null,[(Object(n["e"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(r.arrTodos,(function(e,o){return Object(n["e"])(),Object(n["c"])("li",{key:o},[Object(n["n"])(Object(n["d"])("input",{"onUpdate:modelValue":function(o){return e.done=o},class:"radio",type:"checkbox"},null,8,["onUpdate:modelValue"]),[[n["l"],e.done]]),Object(n["d"])("p",{class:{done:e.done},onClick:Object(n["o"])((function(o){return r.toggleDone(e)}),["prevent"])},Object(n["k"])(e.content),11,["onClick"]),Object(n["d"])("button",{class:"remove",onClick:Object(n["o"])((function(e){return r.removeTodo(o)}),["prevent"])},"x",8,["onClick"])])})),128))])])],64)}));t("a434"),t("d81d");function p(){var e=Object(n["h"])(""),o=Object(n["h"])([]);function t(){o.value.push({done:!1,content:e.value}),e.value=""}function r(e){o.value.splice(e,1)}function c(){o.value.map((function(e){return e.done=!0}))}function u(){o.value=[]}return{arrTodos:o,newTodo:e,addNewTodo:t,removeTodo:r,removeAllTodos:u,markAllTodos:c}}function s(){function e(e){e.done=!e.done}return{toggleDone:e}}var f={name:"TodoList",setup:function(){var e=p(),o=e.newTodo,t=e.arrTodos,n=e.addNewTodo,r=e.removeTodo,c=e.markAllTodos,u=e.removeAllTodos,l=s(),d=l.toggleDone;return{newTodo:o,arrTodos:t,addNewTodo:n,toggleDone:d,removeTodo:r,markAllTodos:c,removeAllTodos:u}}};t("9b34");f.render=b,f.__scopeId="data-v-6575e81f";var v=f,O={name:"App",components:{TodoList:v}};t("1bc1");O.render=c;var j=O;Object(n["b"])(j).mount("#app")},"9b34":function(e,o,t){"use strict";t("e4e6")},e4e6:function(e,o,t){}});
//# sourceMappingURL=app.ea5fbe41.js.map