// { "framework": "Vue"} 

!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=weex.requireModule("modal");t.default={data:function(){return{showLoading:"hide",lists:[1,2,3,4,5]}},methods:{onloading:function(e){var t=this;o.toast({message:"loading",duration:1}),this.showLoading="show",setTimeout(function(){for(var e=t.lists.length,n=e;n<e+4;++n)t.lists.push(n+1);t.showLoading="hide"},1500)}}}},function(e,t){e.exports={panel:{width:600,height:250,marginLeft:75,marginTop:35,marginBottom:35,flexDirection:"column",justifyContent:"center",borderWidth:2,borderStyle:"solid",borderColor:"#DDDDDD",backgroundColor:"#F5F5F5"},text:{fontSize:50,textAlign:"center",color:"#41B883"},loading:{justifyContent:"center"},indicator:{color:"#888888",fontSize:42,paddingTop:20,paddingBottom:20,textAlign:"center"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroller",{staticClass:["scroller"]},[e._l(e.lists,function(t){return n("div",{staticClass:["cell"]},[n("div",{staticClass:["panel"]},[n("text",{staticClass:["text"]},[e._v(e._s(t))])])])}),n("loading",{staticClass:["loading"],attrs:{display:e.showLoading},on:{loading:e.onloading}},[n("text",{staticClass:["indicator"]},[e._v("Loading ...")])])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){var o,r,i=[];i.push(n(1)),o=n(0);var s=n(2);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhike/Documents/Demo/Week/weexdemo/src/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-8aeb9498",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)}]);