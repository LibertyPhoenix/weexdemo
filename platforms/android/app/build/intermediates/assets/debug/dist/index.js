// { "framework": "Vue"} 

!function(e){function t(i){if(r[i])return r[i].exports;var s=r[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,i){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{imageList:[{src:"https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg"},{src:"https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg"}]}}}},function(e,t){e.exports={image:{width:700,height:700},slider:{marginTop:25,marginLeft:25,width:700,height:700,borderWidth:2,borderStyle:"solid",borderColor:"#41b883"},frame:{width:700,height:700,position:"relative"}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("scroller",[r("slider",{staticClass:["slider"],attrs:{interval:"3000",autoPlay:"true"}},e._l(e.imageList,function(e){return r("div",{staticClass:["frame"]},[r("image",{staticClass:["image"],attrs:{resize:"cover",src:e.src}})])})),e._l(e.imageList,function(e){return r("div",{staticClass:["frame"]},[r("image",{staticClass:["image"],attrs:{resize:"cover",src:e.src}})])})],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,r){var i,s,n=[];n.push(r(1)),i=r(0);var o=r(2);s=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),s=i=i.default),"function"==typeof s&&(s=s.options),s.__file="/Users/zhike/Documents/Demo/Week/weexdemo/src/index.vue",s.render=o.render,s.staticRenderFns=o.staticRenderFns,s._scopeId="data-v-8aeb9498",s.style=s.style||{},n.forEach(function(e){for(var t in e)s.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(s._scopeId,n),e.exports=i,e.exports.el="true",new Vue(e.exports)}]);