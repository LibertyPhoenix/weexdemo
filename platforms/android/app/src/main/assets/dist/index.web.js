// { "framework": "Vue"} 

!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=2)}([function(e,n,t){function o(e){r||t(7)}var r=!1,s=t(5)(t(1),t(6),o,"data-v-44e8a20a",null);s.options.__file="/Users/zhike/Documents/Demo/Week/weexdemo/src/index.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=weex.requireModule("modal");n.default={data:function(){return{showLoading:"hide",lists:[1,2,3,4,5]}},methods:{onloading:function(e){var n=this;o.toast({message:"loading",duration:1}),this.showLoading="show",setTimeout(function(){for(var e=n.lists.length,t=e;t<e+4;++t)n.lists.push(t+1);n.showLoading="hide"},1500)}}}},function(e,n,t){"use strict";var o=t(0);o.el="#root",new Vue(o)},function(e,n,t){n=e.exports=t(4)(),n.push([e.i,"\n.panel[data-v-44e8a20a] {\n  width: 600px;\n  height: 250px;\n  margin-left: 75px;\n  margin-top: 35px;\n  margin-bottom: 35px;\n  flex-direction: column;\n  justify-content: center;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #DDDDDD;\n  background-color: #F5F5F5;\n}\n.text[data-v-44e8a20a] {\n  font-size: 50px;\n  text-align: center;\n  color: #41B883;\n}\n.loading[data-v-44e8a20a] {\n  justify-content: center;\n}\n.indicator[data-v-44e8a20a] {\n  color: #888888;\n  font-size: 42px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n}\n","",{version:3,sources:["/Users/zhike/Documents/Demo/Week/weexdemo/src/index.vue?598b3c29"],names:[],mappings:";AAeA;EACA,aAAA;EACA,cAAA;EACA,kBAAA;EACA,iBAAA;EACA,oBAAA;EACA,uBAAA;EACA,wBAAA;EACA,kBAAA;EACA,oBAAA;EACA,sBAAA;EACA,0BAAA;CACA;AACA;EACA,gBAAA;EACA,mBAAA;EACA,eAAA;CACA;AACA;EACA,wBAAA;CACA;AACA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;EACA,qBAAA;EACA,mBAAA;CACA",file:"index.vue",sourcesContent:['<template>\n  <scroller class="scroller">\n    <div class="cell" v-for="num in lists">\n      <div class="panel">\n        <text class="text">{{num}}</text>\n      </div>\n    </div>\n    <loading class="loading" @loading="onloading" :display="showLoading">\n      <text class="indicator">Loading ...</text>\n    </loading>\n  </scroller>\n</template>\n\n\n<style scoped>\n  .panel {\n    width: 600px;\n    height: 250px;\n    margin-left: 75px;\n    margin-top: 35px;\n    margin-bottom: 35px;\n    flex-direction: column;\n    justify-content: center;\n    border-width: 2px;\n    border-style: solid;\n    border-color: #DDDDDD;\n    background-color: #F5F5F5;\n  }\n  .text {\n    font-size: 50px;\n    text-align: center;\n    color: #41B883;\n  }\n  .loading {\n    justify-content: center;\n  }\n  .indicator {\n    color: #888888;\n    font-size: 42px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    text-align: center;\n  }\n</style>\n\n<script>\n  const modal = weex.requireModule(\'modal\')\n  const LOADMORE_COUNT = 4\n\n  export default {\n    data () {\n      return {\n        showLoading: \'hide\',\n        lists: [1, 2, 3, 4, 5]\n      }\n    },\n    methods: {\n      onloading (event) {\n        modal.toast({ message: \'loading\', duration: 1 })\n        this.showLoading = \'show\'\n        setTimeout(() => {\n          const length = this.lists.length\n          for (let i = length; i < length + LOADMORE_COUNT; ++i) {\n            this.lists.push(i + 1)\n          }\n          this.showLoading = \'hide\'\n        }, 1500)\n      }\n    }\n  }\n<\/script>\n'],sourceRoot:""}])},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(o[s]=!0)}for(r=0;r<n.length;r++){var i=n[r];"number"==typeof i[0]&&o[i[0]]||(t&&!i[2]?i[2]=t:t&&(i[2]="("+i[2]+") and ("+t+")"),e.push(i))}},e}},function(e,n){e.exports=function(e,n,t,o,r){var s,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(s=e,i=e.default);var l="function"==typeof i?i.options:i;n&&(l.render=n.render,l.staticRenderFns=n.staticRenderFns),o&&(l._scopeId=o);var d;if(r?(d=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},l._ssrRegister=d):t&&(d=t),d){var c=l.functional,u=c?l.render:l.beforeCreate;c?l.render=function(e,n){return d.call(n),u(e,n)}:l.beforeCreate=u?[].concat(u,d):[d]}return{esModule:s,exports:i,options:l}}},function(e,n,t){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("scroller",{staticClass:"scroller",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._l(e.lists,function(n){return t("div",{staticClass:"cell",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[t("div",{staticClass:"panel",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[t("text",{staticClass:"text",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v(e._s(n))])])])}),e._v(" "),t("loading",{staticClass:"loading",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0),attrs:{display:e.showLoading},on:{loading:e.onloading}},[t("text",{staticClass:"indicator",staticStyle:e.$processStyle(void 0),style:e.$processStyle(void 0)},[e._v("Loading ...")])])],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,n,t){var o=t(3);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(8)("7df2cbc0",o,!1)},function(e,n,t){function o(e){for(var n=0;n<e.length;n++){var t=e[n],o=c[t.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](t.parts[r]);for(;r<t.parts.length;r++)o.parts.push(s(t.parts[r]));o.parts.length>t.parts.length&&(o.parts.length=t.parts.length)}else{for(var i=[],r=0;r<t.parts.length;r++)i.push(s(t.parts[r]));c[t.id]={id:t.id,refs:1,parts:i}}}}function r(){var e=document.createElement("style");return e.type="text/css",u.appendChild(e),e}function s(e){var n,t,o=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(o){if(A)return h;o.parentNode.removeChild(o)}if(v){var s=f++;o=p||(p=r()),n=i.bind(null,o,s,!1),t=i.bind(null,o,s,!0)}else o=r(),n=a.bind(null,o),t=function(){o.parentNode.removeChild(o)};return n(e),function(o){if(o){if(o.css===e.css&&o.media===e.media&&o.sourceMap===e.sourceMap)return;n(e=o)}else t()}}function i(e,n,t,o){var r=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=g(n,r);else{var s=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(s,i[n]):e.appendChild(s)}}function a(e,n){var t=n.css,o=n.media,r=n.sourceMap;if(o&&e.setAttribute("media",o),r&&(t+="\n/*# sourceURL="+r.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var l="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!l)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=t(9),c={},u=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,A=!1,h=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,n,t){A=t;var r=d(e,n);return o(r),function(n){for(var t=[],s=0;s<r.length;s++){var i=r[s],a=c[i.id];a.refs--,t.push(a)}n?(r=d(e,n),o(r)):r=[];for(var s=0;s<t.length;s++){var a=t[s];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},function(e,n){e.exports=function(e,n){for(var t=[],o={},r=0;r<n.length;r++){var s=n[r],i=s[0],a=s[1],l=s[2],d=s[3],c={id:e+":"+r,css:a,media:l,sourceMap:d};o[i]?o[i].parts.push(c):t.push(o[i]={id:i,parts:[c]})}return t}}]);
//# sourceMappingURL=index.web.js.map