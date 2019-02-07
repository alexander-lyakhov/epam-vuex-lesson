(function(t){function e(e){for(var r,u,o=e[0],c=e[1],i=e[2],f=0,p=[];f<o.length;f++)u=o[f],a[u]&&p.push(a[u][0]),a[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,i||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},s=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("4135")},"1d43":function(t,e,n){},3461:function(t,e,n){},4135:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),n("main",[n("user-list")],1)],1)},s=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"nav-header"},[n("div",{staticClass:"text-input"},[n("input",{ref:"userName",attrs:{type:"text"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.addUser(e):null}}}),n("button",{staticClass:"btn-add",on:{click:function(e){return e.preventDefault(),t.addUser(e)}}},[t._v("Add")])]),n("div",{staticClass:"account"},[n("span",{staticClass:"name"},[t._v(t._s(t.accountName))]),n("img",{staticClass:"avatar",attrs:{src:t.accountAvatar,width:"40",height:"40"}})])])])},o=[],c=n("cebc"),i=n("2f62"),l={name:"NavBar",computed:Object(c["a"])({},Object(i["c"])("account",["accountName","accountAvatar"])),methods:{addUser:function(t){var e=this.$refs.userName;""!==e.value.trim()&&(this.$store.commit("users/ADD_USER",e.value),e.value="",e.focus())}}},f=l,p=(n("fadb"),n("2877")),d=Object(p["a"])(f,u,o,!1,null,"215a218c",null);d.options.__file="nav-bar.vue";var v=d.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",[n("a",{staticClass:"load-users",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.loadUsers(e)}}},[t._v("Load users")]),n("h2",[t._v("Count: "+t._s(t.userCount))])]),n("ul",{staticClass:"user-list"},t._l(t.users,function(e){return n("li",{staticClass:"user-list--item",attrs:{index:e.id}},[t._m(0,!0),n("span",{staticClass:"username"},[t._v(t._s(e.name))]),n("a",{staticClass:"btn-remove",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.removeUser(e.id)}}},[t._v("+")])])}),0)])},h=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"avatar"},[r("img",{attrs:{src:n("4932"),width:"48"}})])}],b=(n("4932"),{name:"UserList",computed:Object(c["a"])({},Object(i["c"])("users",["users"]),Object(i["b"])("users",["userCount"])),methods:{loadUsers:function(){this.$store.dispatch("users/LOAD_USERS").catch(function(t){return console.log("--- ERROR ---\x3e",t.message)})},removeUser:function(t){this.$store.commit("users/REMOVE_USER",t)}}}),_=b,O=(n("54e3"),Object(p["a"])(_,m,h,!1,null,"fac55482",null));O.options.__file="user-list.vue";var g=O.exports,j={name:"App",components:{navBar:v,userList:g}},y=j,E=(n("9902"),Object(p["a"])(y,a,s,!1,null,"201ee1b4",null));E.options.__file="App.vue";var S=E.exports,U=n("4e02"),C=n.n(U),w={namespaced:!0,state:{accountName:"Alexander",accountAvatar:C.a}},x=n("75fc"),A=(n("6b54"),{namespaced:!0,state:{users:[]},getters:{userCount:function(t){return t.users.length}},mutations:{ADD_USER:function(t,e){var n=Math.floor(Math.random()*(new Date).getTime()).toString(16);t.users=[{id:n,name:e}].concat(Object(x["a"])(t.users))},POPULATE_USERS:function(t,e){t.users=[].concat(Object(x["a"])(e),Object(x["a"])(t.users))},REMOVE_USER:function(t,e){console.log(this.state),t.users=t.users.filter(function(t){return t.id!==e})}},actions:{LOAD_USERS:function(t){var e=t.commit;return fetch("https://jsonplaceholder.typicode.com/users").then(function(t){return t.json()}).then(function(t){return e("POPULATE_USERS",t)})}}});r["a"].use(i["a"]);var R=new i["a"].Store({modules:{account:w,users:A}});n("c82a"),n("1d43");r["a"].config.productionTip=!1,window.vm=new r["a"]({store:R,render:function(t){return t(S)}}).$mount("#app")},4932:function(t,e,n){t.exports=n.p+"img/user-avatar.9fda3819.png"},"4e02":function(t,e,n){t.exports=n.p+"img/avatar.9745b112.jpg"},"54e3":function(t,e,n){"use strict";var r=n("5c5f"),a=n.n(r);a.a},"5c5f":function(t,e,n){},9902:function(t,e,n){"use strict";var r=n("3461"),a=n.n(r);a.a},c48a:function(t,e,n){},c82a:function(t,e,n){},fadb:function(t,e,n){"use strict";var r=n("c48a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.9fedb0c8.js.map