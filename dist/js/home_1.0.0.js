(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(n,e,t){"use strict";function o(n,e,t,o,r,i,s,c){var a,d="function"==typeof n?n.options:n;if(e&&(d.render=e,d.staticRenderFns=t,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId="data-v-"+i),s?(a=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),r&&r.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(s)},d._ssrRegister=a):r&&(a=c?function(){r.call(this,this.$root.$options.shadowRoot)}:r),a)if(d.functional){d._injectStyles=a;var u=d.render;d.render=function(n,e){return a.call(e),u(n,e)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,a):[a]}return{exports:n,options:d}}t.d(e,"a",(function(){return o}))},164:function(n,e){var t,o,r=Object.create(null);"undefined"!=typeof window&&(window.__VUE_HOT_MAP__=r);var i=!1,s="beforeCreate";function c(n,e){if(e.functional){var t=e.render;e.render=function(e,o){var i=r[n].instances;return o&&i.indexOf(o.parent)<0&&i.push(o.parent),t(e,o)}}else a(e,s,(function(){var e=r[n];e.Ctor||(e.Ctor=this.constructor),e.instances.push(this)})),a(e,"beforeDestroy",(function(){var e=r[n].instances;e.splice(e.indexOf(this),1)}))}function a(n,e,t){var o=n[e];n[e]=o?Array.isArray(o)?o.concat(t):[o,t]:[t]}function d(n){return function(e,t){try{n(e,t)}catch(n){console.error(n),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function u(n,e){for(var t in n)t in e||delete n[t];for(var o in e)n[o]=e[o]}e.install=function(n,r){i||(i=!0,t=n.__esModule?n.default:n,o=t.version.split(".").map(Number),r,t.config._lifecycleHooks.indexOf("init")>-1&&(s="init"),e.compatible=o[0]>=2,e.compatible||console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0."))},e.createRecord=function(n,e){if(!r[n]){var t=null;"function"==typeof e&&(e=(t=e).options),c(n,e),r[n]={Ctor:t,options:e,instances:[]}}},e.isRecorded=function(n){return void 0!==r[n]},e.rerender=d((function(n,e){var t=r[n];if(e){if("function"==typeof e&&(e=e.options),t.Ctor)t.Ctor.options.render=e.render,t.Ctor.options.staticRenderFns=e.staticRenderFns,t.instances.slice().forEach((function(n){n.$options.render=e.render,n.$options.staticRenderFns=e.staticRenderFns,n._staticTrees&&(n._staticTrees=[]),Array.isArray(t.Ctor.options.cached)&&(t.Ctor.options.cached=[]),Array.isArray(n.$options.cached)&&(n.$options.cached=[]);var o=function(n){if(!n._u)return;var e=n._u;return n._u=function(n){try{return e(n,!0)}catch(t){return e(n,null,!0)}},function(){n._u=e}}(n);n.$forceUpdate(),n.$nextTick(o)}));else if(t.options.render=e.render,t.options.staticRenderFns=e.staticRenderFns,t.options.functional){if(Object.keys(e).length>2)u(t.options,e);else{var o=t.options._injectStyles;if(o){var i=e.render;t.options.render=function(n,e){return o.call(e),i(n,e)}}}t.options._Ctor=null,Array.isArray(t.options.cached)&&(t.options.cached=[]),t.instances.slice().forEach((function(n){n.$forceUpdate()}))}}else t.instances.slice().forEach((function(n){n.$forceUpdate()}))})),e.reload=d((function(n,e){var t=r[n];if(e)if("function"==typeof e&&(e=e.options),c(n,e),t.Ctor){o[1]<2&&(t.Ctor.extendOptions=e);var i=t.Ctor.super.extend(e);i.options._Ctor=t.options._Ctor,t.Ctor.options=i.options,t.Ctor.cid=i.cid,t.Ctor.prototype=i.prototype,i.release&&i.release()}else u(t.options,e);t.instances.slice().forEach((function(n){n.$vnode&&n.$vnode.context?n.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")}))}))},167:function(n,e,t){},170:function(n,e,t){"use strict";t.r(e),t.d(e,"render",(function(){return o})),t.d(e,"staticRenderFns",(function(){return r}));var o=function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"home-container"},[this._v("\n  "+this._s(this.newMsg)+"\n")])},r=[];o._withStripped=!0},173:function(n,e,t){"use strict";var o={data:function(){return{msg:"欢迎使用药快销!",downCount:3}},mounted:function(){var n=this;!function e(){n.downCount>0?(n.downCount--,setTimeout(e,1e3)):n.$router.replace({path:"/login"})}()},methods:{},computed:{newMsg:function(){return this.msg+this.downCount+"秒后进入登录页"}}};e.a=o},178:function(n,e,t){"use strict";var o=t(167);t.n(o).a},181:function(n,e,t){"use strict";t.r(e);var o=t(170),r=t(173),i=(t(178),t(163)),s=Object(i.a)(r.a,o.render,o.staticRenderFns,!1,null,"3916dcdb",null),c=t(164);c.install(t(0)),c.compatible&&(n.hot.accept(),c.isRecorded("3916dcdb")?c.reload("3916dcdb",s.options):c.createRecord("3916dcdb",s.options),n.hot.accept(170,function(n){o=t(170),c.rerender("3916dcdb",{render:o.render,staticRenderFns:o.staticRenderFns})}.bind(this))),s.options.__file="src/views/Home/Home_1.0.0.vue",e.default=s.exports}}]);