(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{163:function(t,n,e){"use strict";function o(t,n,e,o,s,i,r,c){var u,a="function"==typeof t?t.options:t;if(n&&(a.render=n,a.staticRenderFns=e,a._compiled=!0),o&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),r?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},a._ssrRegister=u):s&&(u=c?function(){s.call(this,this.$root.$options.shadowRoot)}:s),u)if(a.functional){a._injectStyles=u;var d=a.render;a.render=function(t,n){return u.call(n),d(t,n)}}else{var f=a.beforeCreate;a.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:a}}e.d(n,"a",(function(){return o}))},165:function(t,n,e){},167:function(t,n,e){"use strict";var o=e(165);e.n(o).a},171:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home-container"},[this._v(this._s(this.newMsg))])};o._withStripped=!0;var s={data:function(){return{msg:"欢迎使用药快销!",downCount:3}},computed:{newMsg:function(){return this.msg+this.downCount+"秒后进入登录页"}},mounted:function(){var t=this;!function n(){t.downCount>0?(t.downCount--,setTimeout(n,1e3)):t.$router.replace({path:"/login"})}()},methods:{}},i=(e(167),e(163)),r=Object(i.a)(s,o,[],!1,null,"3916dcdb",null);r.options.__file="src/views/Home/Home_1.0.0.vue";n.default=r.exports}}]);