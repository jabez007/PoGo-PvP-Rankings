(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e2ef206"],{"261e":function(t,e,n){"use strict";var i=n("80d2");function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}e["a"]={name:"stackable",data:function(){return{stackBase:null,stackClass:"unpecified",stackElement:null,stackExclude:null,stackMinZIndex:0}},computed:{activeZIndex:function(){if("undefined"===typeof window)return 0;var t=this.stackElement||this.$refs.content,e=this.isActive?this.getMaxZIndex(this.stackExclude||[t])+2:Object(i["k"])(t);return null==e?e:parseInt(e)}},methods:{getMaxZIndex:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=this.stackBase||this.$el,n=[this.stackMinZIndex,Object(i["k"])(e)],s=[].concat(a(document.getElementsByClassName(this.stackClass))),o=0;o<s.length;o++)t.includes(s[o])||n.push(Object(i["k"])(s[o]));return Math.max.apply(Math,n)}}}},"30d4":function(t,e,n){"use strict";var i=n("3e79"),a=n("d9bd"),s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t){var e="undefined"===typeof t?"undefined":s(t);return"boolean"===e||"string"===e||t.nodeType===Node.ELEMENT_NODE}e["a"]={name:"detachable",mixins:[i["a"]],props:{attach:{type:null,default:!1,validator:r},contentClass:{default:""}},data:function(){return{hasDetached:!1}},watch:{attach:function(){this.hasDetached=!1,this.initDetach()},hasContent:"initDetach"},mounted:function(){!this.lazy&&this.initDetach()},deactivated:function(){this.isActive=!1},beforeDestroy:function(){if(this.$refs.content)try{this.$refs.content.parentNode.removeChild(this.$refs.content)}catch(t){console.log(t)}},methods:{getScopeIdAttrs:function(){var t=this.$vnode&&this.$vnode.context.$options._scopeId;return t&&o({},t,"")},initDetach:function(){if(!this._isDestroyed&&this.$refs.content&&!this.hasDetached&&""!==this.attach&&!0!==this.attach&&"attach"!==this.attach){var t=void 0;t=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,t?(t.insertBefore(this.$refs.content,t.firstChild),this.hasDetached=!0):Object(a["b"])("Unable to locate target "+(this.attach||"[data-app]"),this)}}}}},"51d0":function(t,e,n){"use strict";var i=n("65d6"),a=n.n(i);a.a},"65d6":function(t,e,n){},"6ec0":function(t,e,n){},"7f29":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"500",scrollable:"",lazy:""},on:{input:t.onInput},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("TypesCard",{attrs:{slot:"activator",types:t.types,hover:!1},slot:"activator"},[t._t("default")],2),n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[t._t("default"),n("v-spacer"),t._l(t.types,(function(t,e){return n("TypeChip",{key:e,attrs:{type:t}})})),n("v-spacer"),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.dialog=!t.dialog}}},[n("v-icon",[t._v("close")])],1)],2),n("v-card-text",{staticStyle:{"max-height":"600px"}},[n("v-expansion-panel",{attrs:{inset:""}},t._l(t.pokemon,(function(e,i){return n("v-expansion-panel-content",{key:i,attrs:{lazy:""}},[n("div",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e))]),n("PokemonStatsCard",{attrs:{pokemon:e}})],1)})),1)],1)],1)],1)},a=[],s=(n("5df3"),n("7f7f"),n("ac6a"),{name:"PokemonOfTypeDialog",props:{types:{type:Array,required:!0}},components:{TypesCard:function(){return n.e("chunk-4e8c5b42").then(n.bind(null,"1ece"))},TypeChip:function(){return n.e("chunk-2208f1dc").then(n.bind(null,"8fad"))},PokemonStatsCard:function(){return n.e("chunk-09fd5799").then(n.bind(null,"91c6"))}},data:function(){return{dialog:!1,pokemon:[]}},methods:{onInput:function(t){var e=this;t&&(e.pokemon.splice(0,e.pokemon.length),1===this.types.length?this.$pokedex.getTypeByName(this.types[0]).then((function(t){t.pokemon.forEach((function(t){e.$pokedex.getPokemonByName(t.pokemon.name).then((function(n){1===n.types.length&&e.pokemon.push(t.pokemon.name)}))}))})):Promise.all(this.types.map((function(t){return e.$pokedex.getTypeByName(t)}))).then((function(t){t.reduce((function(t,e){return t.concat(e.pokemon)}),[]).map((function(t){return t.pokemon.name})).forEach((function(t,n,i){i.indexOf(t)===n&&i.indexOf(t)!==i.lastIndexOf(t)&&e.pokemon.push(t)}))})))}}}),o=s,r=(n("51d0"),n("2877")),l=n("6544"),c=n.n(l),h=n("8336"),u=n("b0af"),d=n("99d9"),p=n("12b2"),f=(n("6ec0"),n("c69d")),v=n("30d4"),m=n("14ec"),y=n("e949"),g=n("261e"),b=n("98a1"),x=n("c584"),k=n("80d2"),C=n("bfc5"),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var $={name:"v-dialog",directives:{ClickOutside:x["a"]},mixins:[f["a"],v["a"],m["a"],y["a"],g["a"],b["a"]],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return t={},_(t,("v-dialog "+this.contentClass).trim(),!0),_(t,"v-dialog--active",this.isActive),_(t,"v-dialog--persistent",this.persistent),_(t,"v-dialog--fullscreen",this.fullscreen),_(t,"v-dialog--scrollable",this.scrollable),_(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},mounted:function(){this.isBooted=this.isActive,this.isActive&&this.show()},beforeDestroy:function(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick((function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout((function(){return t.animate=!1}),150)}))},closeConditional:function(t){return!(this.$refs.content.contains(t.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):Object(k["k"])(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m["a"].methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(t){this.$emit("keydown",t)}},render:function(t){var e=this,n=[],i={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(i.style={maxWidth:"none"===this.maxWidth?void 0:Object(k["b"])(this.maxWidth),width:"auto"===this.width?void 0:Object(k["b"])(this.width)}),this.$slots.activator&&n.push(t("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:{click:function(t){t.stopPropagation(),e.disabled||(e.isActive=!e.isActive)}}},[this.$slots.activator]));var a=t("div",i,this.showLazyContent(this.$slots.default));return this.transition&&(a=t("transition",{props:{name:this.transition,origin:this.origin}},[a])),n.push(t("div",{class:this.contentClasses,attrs:w({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(C["a"],{props:{root:!0,light:this.light,dark:this.dark}},[a])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.$slots.activator||this.fullWidth?"block":"inline-block"}},n)}},A=(n("c321"),n("6a18")),O=n("94ab"),B=n("58df"),E=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},P=Object(B["a"])(A["a"],Object(O["b"])("expansionPanel")).extend({name:"v-expansion-panel",provide:function(){return{expansionPanel:this}},props:{disabled:Boolean,readonly:Boolean,expand:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,value:{type:[Number,Array],default:function(){return null}}},data:function(){return{items:[],open:[]}},computed:{classes:function(){return E({"v-expansion-panel--focusable":this.focusable,"v-expansion-panel--popout":this.popout,"v-expansion-panel--inset":this.inset},this.themeClasses)}},watch:{expand:function(t){var e=-1;if(!t){var n=this.open.reduce((function(t,e){return e?t+1:t}),0),i=Array(this.items.length).fill(!1);1===n&&(e=this.open.indexOf(!0)),e>-1&&(i[e]=!0),this.open=i}this.$emit("input",t?this.open:e>-1?e:null)},value:function(t){this.updateFromValue(t)}},mounted:function(){null!==this.value&&this.updateFromValue(this.value)},methods:{updateFromValue:function(t){if(!Array.isArray(t)||this.expand){var e=Array(this.items.length).fill(!1);"number"===typeof t?e[t]=!0:null!==t&&(e=t),this.updatePanels(e)}},updatePanels:function(t){this.open=t;for(var e=0;e<this.items.length;e++)this.items[e].toggle(t&&t[e])},panelClick:function(t){for(var e=this.expand?this.open.slice():Array(this.items.length).fill(!1),n=0;n<this.items.length;n++)this.items[n]._uid===t&&(e[n]=!this.open[n],!this.expand&&this.$emit("input",e[n]?n:null));this.updatePanels(e),this.expand&&this.$emit("input",e)},register:function(t){var e=this.items.push(t)-1;null!==this.value&&this.updateFromValue(this.value),t.toggle(!!this.open[e])},unregister:function(t){var e=this.items.findIndex((function(e){return e._uid===t._uid}));this.items.splice(e,1),this.open.splice(e,1)}},render:function(t){return t("ul",{staticClass:"v-expansion-panel",class:this.classes},this.$slots.default)}}),I=n("0789"),S=n("3e79"),j=n("ad54"),D=n("9d26"),V=n("d9bd");function T(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var N=Object(B["a"])(S["a"],b["a"],j["a"],Object(O["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")).extend({name:"v-expansion-panel-content",props:{disabled:Boolean,readonly:Boolean,expandIcon:{type:String,default:"$vuetify.icons.expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{height:"auto"}},computed:{containerClasses:function(){return{"v-expansion-panel__container--active":this.isActive,"v-expansion-panel__container--disabled":this.isDisabled}},isDisabled:function(){return this.expansionPanel.disabled||this.disabled},isReadonly:function(){return this.expansionPanel.readonly||this.readonly}},beforeMount:function(){this.expansionPanel.register(this),"undefined"!==typeof this.value&&Object(V["b"])("v-model has been deprecated",this)},beforeDestroy:function(){this.expansionPanel.unregister(this)},methods:{onKeydown:function(t){13===t.keyCode&&this.$el===document.activeElement&&this.expansionPanel.panelClick(this._uid)},onHeaderClick:function(){this.isReadonly||this.expansionPanel.panelClick(this._uid)},genBody:function(){return this.$createElement("div",{ref:"body",class:"v-expansion-panel__body",directives:[{name:"show",value:this.isActive}]},this.showLazyContent(this.$slots.default))},genHeader:function(){var t=[].concat(T(this.$slots.header));return this.hideActions||t.push(this.genIcon()),this.$createElement("div",{staticClass:"v-expansion-panel__header",directives:[{name:"ripple",value:this.ripple}],on:{click:this.onHeaderClick}},t)},genIcon:function(){var t=this.$slots.actions||[this.$createElement(D["a"],this.expandIcon)];return this.$createElement("transition",{attrs:{name:"fade-transition"}},[this.$createElement("div",{staticClass:"v-expansion-panel__header__icon",directives:[{name:"show",value:!this.isDisabled}]},t)])},toggle:function(t){t&&(this.isBooted=!0),this.isActive=t}},render:function(t){return t("li",{staticClass:"v-expansion-panel__container",class:this.containerClasses,attrs:{tabindex:this.isReadonly||this.isDisabled?null:0},on:{keydown:this.onKeydown}},[this.$slots.header&&this.genHeader(),t(I["a"],[this.genBody()])])}}),M=n("132d"),Z=n("9910"),z=Object(r["a"])(o,i,a,!1,null,"ccf1097e",null);z.options.__file="PokemonOfTypeDialog.vue";e["default"]=z.exports;c()(z,{VBtn:h["a"],VCard:u["a"],VCardText:d["b"],VCardTitle:p["a"],VDialog:$,VExpansionPanel:P,VExpansionPanelContent:N,VIcon:M["a"],VSpacer:Z["a"]})},ad54:function(t,e,n){"use strict";var i=n("3ccf"),a=n("2b0e");e["a"]=a["a"].extend({name:"rippleable",directives:{Ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),t.on=Object.assign({click:this.onChange},this.$listeners),this.$createElement("div",t)):null},onChange:function(){}}})},c321:function(t,e,n){},e949:function(t,e,n){"use strict";var i=n("2b0e");e["a"]=i["a"].extend({name:"returnable",props:{returnValue:null},data:function(){return{isActive:!1,originalValue:null}},watch:{isActive:function(t){t?this.originalValue=this.returnValue:this.$emit("update:returnValue",this.originalValue)}},methods:{save:function(t){this.originalValue=t,this.isActive=!1}}})}}]);
//# sourceMappingURL=chunk-9e2ef206.02c52932.js.map