(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c6baf3c","chunk-2d21b86c","chunk-2d21b86c"],{"08328":function(t,e,i){},"12b2":function(t,e,i){"use strict";var s=i("2b0e");e["a"]=s["a"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,s=e.props,n=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),s.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,n)}})},"253d":function(t,e,i){},"2fdb":function(t,e,i){"use strict";var s=i("5ca1"),n=i("d2c8"),r="includes";s(s.P+s.F*i("5147")(r),"String",{includes:function(t){return!!~n(this,t,r).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"4c34":function(t,e,i){},5147:function(t,e,i){var s=i("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[s]=!1,!"/./"[t](e)}catch(n){}}return!0}},"58db":function(t,e,i){},6762:function(t,e,i){"use strict";var s=i("5ca1"),n=i("c366")(!0);s(s.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"8b9b":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",[i("v-tabs",{attrs:{centered:""},model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[i("v-tab",{attrs:{href:"#immune"}},[i("v-card",{staticClass:"header",attrs:{color:"green accent-4",flat:""}},[i("v-chip",{attrs:{color:"success darken-4","text-color":"white"}},[t._v("\n            "+t._s(Math.round(100*t.$typesEffective.def.immune))+"%\n          ")])],1)],1),i("v-tab",{attrs:{href:"#endures"}},[i("v-card",{staticClass:"header",attrs:{color:"green accent-3",flat:""}},[i("v-chip",{attrs:{color:"green darken-3","text-color":"white"}},[t._v("\n            "+t._s(Math.round(100*t.$typesEffective.def.endures))+"%\n          ")])],1)],1),i("v-tab",{attrs:{href:"#resists"}},[i("v-card",{staticClass:"header",attrs:{color:"green accent-2",flat:""}},[i("v-chip",{attrs:{color:"green darken-2","text-color":"white"}},[t._v("\n            "+t._s(Math.round(100*t.$typesEffective.def.resists))+"%\n          ")])],1)],1),i("v-tab",{attrs:{href:"#weak"}},[i("v-card",{staticClass:"header",attrs:{color:"red accent-2",flat:""}},[i("v-chip",{attrs:{color:"red darken-2","text-color":"white"}},[t._v("\n            "+t._s(Math.round(100*t.$typesEffective.def.weak))+"%\n          ")])],1)],1),i("v-tab",{attrs:{href:"#vulnerable"}},[i("v-card",{staticClass:"header",attrs:{color:"red accent-3",flat:""}},[i("v-chip",{attrs:{color:"red darken-3","text-color":"white"}},[t._v("\n            "+t._s(Math.round(100*t.$typesEffective.def.vulnerable))+"%\n          ")])],1)],1)],1)],1),i("v-card-text",{staticClass:"scroll",style:"max-height: "+t.height+"em;"},[i("v-layout",{attrs:{row:""}},[i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"immune"===t.activeTab,expression:"activeTab === 'immune'"}],attrs:{xs6:""}},[i("TypeSelect",{staticClass:"title grey--text text--lighten-5",attrs:{label:"Filter by immunities",types:t.baseTypes},model:{value:t.immuneFilter,callback:function(e){t.immuneFilter=e},expression:"immuneFilter"}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"endures"===t.activeTab,expression:"activeTab === 'endures'"}],attrs:{xs6:""}},[i("TypeSelect",{staticClass:"title grey--text text--lighten-4",attrs:{label:"Filter by endurances",types:t.baseTypes},model:{value:t.enduresFilter,callback:function(e){t.enduresFilter=e},expression:"enduresFilter"}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"resists"===t.activeTab,expression:"activeTab === 'resists'"}],attrs:{xs6:""}},[i("TypeSelect",{staticClass:"title grey--text text--lighten-3",attrs:{label:"Filter by resistances",types:t.baseTypes},model:{value:t.resistsFilter,callback:function(e){t.resistsFilter=e},expression:"resistsFilter"}})],1),i("v-flex",{attrs:{xs6:""}},[i("TypeSelect",{attrs:{label:"Filter by type",types:t.baseTypes},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"weak"===t.activeTab,expression:"activeTab === 'weak'"}],attrs:{xs6:""}},[i("TypeSelect",{staticClass:"title grey--text text--lighten-3",attrs:{label:"Filter by weaknesses",types:t.baseTypes},model:{value:t.weakFilter,callback:function(e){t.weakFilter=e},expression:"weakFilter"}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"vulnerable"===t.activeTab,expression:"activeTab === 'vulnerable'"}],attrs:{xs6:""}},[i("TypeSelect",{staticClass:"title grey--text text--lighten-4",attrs:{label:"Filter by Vulnerabilities",types:t.baseTypes},model:{value:t.vulnerableFilter,callback:function(e){t.vulnerableFilter=e},expression:"vulnerableFilter"}})],1)],1),t._l(t.displayedTypes,(function(e,s){return i("v-layout",{key:e.name,attrs:{row:""}},[i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"immune"===t.activeTab,expression:"activeTab === 'immune'"}],attrs:{xs6:""}},[i("TypesCard",{attrs:{types:e.def.immune,color:"blue-grey "+(s%2===0?"lighten-1":"darken-1")}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"endures"===t.activeTab,expression:"activeTab === 'endures'"}],attrs:{xs6:""}},[i("TypesCard",{attrs:{types:e.def.endures,color:"blue-grey "+(s%2===0?"lighten-1":"darken-1")}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"resists"===t.activeTab,expression:"activeTab === 'resists'"}],attrs:{xs6:""}},[i("TypesCard",{attrs:{types:e.def.resists,color:"blue-grey "+(s%2===0?"lighten-1":"darken-1")}})],1),i("v-flex",{attrs:{xs6:""}},[i("PokemonOfTypeDialog",{attrs:{types:e.name.split("/")}},[i("v-chip",[t._v("\n            "+t._s(Math.round(100*e.score)/100)+"\n          ")])],1)],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"weak"===t.activeTab,expression:"activeTab === 'weak'"}],attrs:{xs6:""}},[i("TypesCard",{attrs:{types:e.def.weak,color:"blue-grey "+(s%2===0?"lighten-1":"darken-1")}})],1),i("v-flex",{directives:[{name:"show",rawName:"v-show",value:"vulnerable"===t.activeTab,expression:"activeTab === 'vulnerable'"}],attrs:{xs6:""}},[i("TypesCard",{attrs:{types:e.def.vulnerable,color:"blue-grey "+(s%2===0?"lighten-1":"darken-1")}})],1)],1)}))],2)],1)},n=[],r=(i("7f7f"),i("6762"),i("2fdb"),i("c5f6"),i("cadf"),i("551c"),i("097d"),{name:"TypesRankingTabs",props:{baseTypes:{type:Array,required:!0},types:{type:Array,required:!0},height:{type:Number,default:53}},components:{TypesCard:function(){return i.e("chunk-4e8c5b42").then(i.bind(null,"1ece"))},PokemonOfTypeDialog:function(){return i.e("chunk-9e2ef206").then(i.bind(null,"7f29"))},TypeSelect:function(){return i.e("chunk-cdbc1268").then(i.bind(null,"5c0a"))}},data:function(){return{activeTab:"resists",filter:[],immuneFilter:[],enduresFilter:[],resistsFilter:[],weakFilter:[],vulnerableFilter:[]}},computed:{displayedTypes:function(){var t=this;return this.types.filter((function(e){return 0===t.filter.length?e.score<18:t.filter.every((function(t){return e.name.includes(t)}))})).filter((function(e){return 0===t.immuneFilter.length||t.immuneFilter.some((function(t){return e.def.immune.includes(t)}))})).filter((function(e){return 0===t.enduresFilter.length||t.enduresFilter.some((function(t){return e.def.endures.includes(t)}))})).filter((function(e){return 0===t.resistsFilter.length||t.resistsFilter.some((function(t){return e.def.resists.includes(t)}))})).filter((function(e){return 0===t.weakFilter.length||t.weakFilter.some((function(t){return e.def.weak.includes(t)}))})).filter((function(e){return 0===t.vulnerableFilter.length||t.vulnerableFilter.some((function(t){return e.def.vulnerable.includes(t)}))}))}},watch:{activeTab:function(){this.immuneFilter.splice(0,this.immuneFilter.length),this.enduresFilter.splice(0,this.enduresFilter.length),this.resistsFilter.splice(0,this.resistsFilter.length),this.weakFilter.splice(0,this.weakFilter.length),this.vulnerableFilter.splice(0,this.vulnerableFilter.length)}}}),a=r,l=(i("ad00"),i("2877")),o=i("6544"),c=i.n(o),h=i("b0af"),u=i("99d9"),d=i("12b2"),f=i("cc20"),v=i("0e8f"),p=i("a722"),m=i("2464"),b=i("0d01"),g=i("6a18"),y=i("80d2"),w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},x={name:"v-tab",mixins:[b["a"],Object(m["a"])("tabGroup"),g["a"]],props:{ripple:{type:[Boolean,Object],default:!0}},computed:{classes:function(){return w({"v-tabs__item":!0,"v-tabs__item--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},watch:{$route:"onRouteChange"},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),this.$emit("click",t),this.to||this.toggle()},onRouteChange:function(){var t=this;if(this.to&&this.$refs.link){var e="_vnode.data.class."+this.activeClass;this.$nextTick((function(){Object(y["i"])(t.$refs.link,e)&&t.toggle()}))}}},render:function(t){var e=this.generateRouteLink(this.classes),i=e.data,s=this.disabled?"div":e.tag;return i.ref="link",t("div",{staticClass:"v-tabs__div"},[t(s,i,this.$slots.default)])}},T=(i("f413"),i("58db"),i("2b0e"));function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"change";return T["a"].extend({name:"proxyable",model:{prop:t,event:e},props:_({},t,{required:!1}),data:function(){return{internalLazyValue:this[t]}},computed:{internalValue:{get:function(){return this.internalLazyValue},set:function(t){t!==this.internalLazyValue&&(this.internalLazyValue=t,this.$emit(e,t))}}},watch:_({},t,(function(t){this.internalLazyValue=t}))})}var S=k(),C=S,$=i("58df"),I=i("d9bd"),O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t},V=Object($["a"])(C,g["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return O({},this.themeClasses)},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:function(){this.$nextTick(this.updateItemsState)}},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(I["b"])("Model must be bound to an array if the multiple property is true.",this)},methods:{getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t,e){this.updateInternalValue(this.getValue(t,e))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t,i)})),this.mandatory&&null==this.internalLazyValue&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=t?this.items.length-1:0;this.updateInternalValue(this.getValue(this.items[e],e))}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",{staticClass:"v-item-group",class:this.classes},this.$slots.default)}}),F=(V.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),{computed:{activeTab:function(){if(this.selectedItems.length)return this.selectedItems[0]},containerStyles:function(){return this.height?{height:parseInt(this.height,10)+"px"}:null},hasArrows:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint},sliderStyles:function(){return{left:this.sliderLeft+"px",transition:null!=this.sliderLeft?null:"none",width:this.sliderWidth+"px"}}}}),z=(i("08328"),i("c341")),B=V.extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:z["a"]},props:{mandatory:{type:Boolean,default:!0},reverse:{type:Boolean,default:void 0},touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{internalHeight:void 0,isActive:!1,isBooted:!1,isReverse:!1}},computed:{computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse===!this.$vuetify.rtl?"-reverse":"";return"v-window-"+t+e+"-transition"},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return void 0!==this.reverse?this.reverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;this.$nextTick((function(){return t.isBooted=!0}))},methods:{genContainer:function(){return this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight}},this.$slots.default)},next:function(){this.isReverse=!1;var t=(this.internalIndex+1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},prev:function(){this.isReverse=!0;var t=(this.internalIndex+this.items.length-1)%this.items.length,e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse:function(t,e){this.isReverse=t<e}},render:function(t){var e={staticClass:"v-window",directives:[]};if(!this.touchless){var i=this.touch||{left:this.next,right:this.prev};e.directives.push({name:"touch",value:i})}return t("div",e,[this.genContainer()])}}),R=B.extend({name:"v-tabs-items",inject:{registerItems:{default:null},tabProxy:{default:null},unregisterItems:{default:null}},props:{cycle:Boolean},watch:{internalValue:function(t){this.tabProxy&&this.tabProxy(t)}},created:function(){this.registerItems&&this.registerItems(this.changeModel)},beforeDestroy:function(){this.unregisterItems&&this.unregisterItems()},methods:{changeModel:function(t){this.internalValue=t},getValue:function(t,e){return t.id?t.id:B.options.methods.getValue.call(this,t,e)},next:function(){(this.cycle||this.internalIndex!==this.items.length-1)&&B.options.methods.next.call(this)},prev:function(){(this.cycle||0!==this.internalIndex)&&B.options.methods.prev.call(this)}}}),A=i("b64a"),j={name:"v-tabs-slider",mixins:[A["a"]],render:function(t){return t("div",this.setBackgroundColor(this.color||"accent",{staticClass:"v-tabs__slider"}))}},N=i("9d26"),E={methods:{genBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs__bar",class:this.themeClasses,ref:"bar"}),[this.genTransition("prev"),this.genWrapper(this.genContainer(t)),this.genTransition("next")])},genContainer:function(t){return this.$createElement("div",{staticClass:"v-tabs__container",class:{"v-tabs__container--align-with-title":this.alignWithTitle,"v-tabs__container--centered":this.centered,"v-tabs__container--fixed-tabs":this.fixedTabs,"v-tabs__container--grow":this.grow,"v-tabs__container--icons-and-text":this.iconsAndText,"v-tabs__container--overflow":this.isOverflowing,"v-tabs__container--right":this.right},style:this.containerStyles,ref:"container"},t)},genIcon:function(t){var e=this;return this.hasArrows&&this[t+"IconVisible"]?this.$createElement(N["a"],{staticClass:"v-tabs__icon v-tabs__icon--"+t,props:{disabled:!this[t+"IconVisible"]},on:{click:function(){return e.scrollTo(t)}}},this[t+"Icon"]):null},genItems:function(t,e){return t.length>0?t:e.length?this.$createElement(R,e):null},genTransition:function(t){return this.$createElement("transition",{props:{name:"fade-transition"}},[this.genIcon(t)])},genWrapper:function(t){var e=this;return this.$createElement("div",{staticClass:"v-tabs__wrapper",class:{"v-tabs__wrapper--show-arrows":this.hasArrows},ref:"wrapper",directives:[{name:"touch",value:{start:function(t){return e.overflowCheck(t,e.onTouchStart)},move:function(t){return e.overflowCheck(t,e.onTouchMove)},end:function(t){return e.overflowCheck(t,e.onTouchEnd)}}}]},[t])},genSlider:function(t){return t.length||(t=[this.$createElement(j,{props:{color:this.sliderColor}})]),this.$createElement("div",{staticClass:"v-tabs__slider-wrapper",style:this.sliderStyles},t)}}},L={props:{activeClass:{type:String,default:"v-tabs__item--active"},alignWithTitle:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0,validator:function(t){return!isNaN(parseInt(t))}},hideSlider:Boolean,iconsAndText:Boolean,mandatory:{type:Boolean,default:!0},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},nextIcon:{type:String,default:"$vuetify.icons.next"},prevIcon:{type:String,default:"$vuetify.icons.prev"},right:Boolean,showArrows:Boolean,sliderColor:{type:String,default:"accent"},value:[Number,String]}},M={methods:{newOffset:function(t){var e=this.$refs.wrapper.clientWidth;return"prev"===t?Math.max(this.scrollOffset-e,0):Math.min(this.scrollOffset+e,this.$refs.container.clientWidth-e)},onTouchStart:function(t){this.startX=this.scrollOffset+t.touchstartX,this.$refs.container.style.transition="none",this.$refs.container.style.willChange="transform"},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs.container,e=this.$refs.wrapper,i=t.clientWidth-e.clientWidth;t.style.transition=null,t.style.willChange=null,this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=i&&(this.scrollOffset=i)}}},P={watch:{activeTab:function(t,e){this.setOverflow(),t&&(this.tabItems&&this.tabItems(this.getValue(t,this.items.indexOf(t))),null!=e&&this.updateTabsView())},alignWithTitle:"callSlider",centered:"callSlider",fixedTabs:"callSlider",hasArrows:function(t){t||(this.scrollOffset=0)},internalValue:function(t){this.$listeners["input"]&&this.$emit("input",t)},lazyValue:"updateTabs",right:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize",scrollOffset:function(t){this.$refs.container.style.transform="translateX("+-t+"px)",this.hasArrows&&(this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon())}}},W=i("b57a"),D=i("0d3d"),X=i("bfc5"),q=V.extend({name:"v-tabs",directives:{Resize:D["a"],Touch:z["a"]},mixins:[A["a"],W["a"],F,L,E,M,P,g["a"]],provide:function(){return{tabGroup:this,tabProxy:this.tabProxy,registerItems:this.registerItems,unregisterItems:this.unregisterItems}},data:function(){return{bar:[],content:[],isOverflowing:!1,nextIconVisible:!1,prevIconVisible:!1,resizeTimeout:null,scrollOffset:0,sliderWidth:null,sliderLeft:null,startX:0,tabItems:null,transitionTime:300,widths:{bar:0,container:0,wrapper:0}}},watch:{items:"onResize",tabs:"onResize"},mounted:function(){this.init()},methods:{checkIcons:function(){this.prevIconVisible=this.checkPrevIcon(),this.nextIconVisible=this.checkNextIcon()},checkPrevIcon:function(){return this.scrollOffset>0},checkNextIcon:function(){return this.widths.container>this.scrollOffset+this.widths.wrapper},callSlider:function(){var t=this;if(this.hideSlider||!this.activeTab)return!1;var e=this.activeTab;this.$nextTick((function(){e&&e.$el&&(t.sliderWidth=e.$el.scrollWidth,t.sliderLeft=e.$el.offsetLeft)}))},init:function(){this.$listeners["input"]&&Object(I["c"])("@input","@change",this)},onResize:function(){if(!this._isDestroyed){this.setWidths();var t=this.isBooted?this.transitionTime:0;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(this.updateTabsView,t)}},overflowCheck:function(t,e){this.isOverflowing&&e(t)},scrollTo:function(t){this.scrollOffset=this.newOffset(t)},setOverflow:function(){this.isOverflowing=this.widths.bar<this.widths.container},setWidths:function(){var t=this.$refs.bar?this.$refs.bar.clientWidth:0,e=this.$refs.container?this.$refs.container.clientWidth:0,i=this.$refs.wrapper?this.$refs.wrapper.clientWidth:0;this.widths={bar:t,container:e,wrapper:i},this.setOverflow()},parseNodes:function(){for(var t=[],e=[],i=[],s=[],n=(this.$slots.default||[]).length,r=0;r<n;r++){var a=this.$slots.default[r];if(a.componentOptions)switch(a.componentOptions.Ctor.options.name){case"v-tabs-slider":i.push(a);break;case"v-tabs-items":e.push(a);break;case"v-tab-item":t.push(a);break;default:s.push(a)}else s.push(a)}return{tab:s,slider:i,items:e,item:t}},registerItems:function(t){this.tabItems=t,t(this.internalValue)},unregisterItems:function(){this.tabItems=null},updateTabsView:function(){this.callSlider(),this.scrollIntoView(),this.checkIcons()},scrollIntoView:function(){if(this.activeTab){if(!this.isOverflowing)return this.scrollOffset=0;var t=this.widths.wrapper+this.scrollOffset,e=this.activeTab.$el,i=e.clientWidth,s=e.offsetLeft,n=i+s,r=.3*i;this.activeTab===this.items[this.items.length-1]&&(r=0),s<this.scrollOffset?this.scrollOffset=Math.max(s-r,0):t<n&&(this.scrollOffset-=t-n-r)}},tabProxy:function(t){this.internalValue=t}},render:function(t){var e=this.parseNodes(),i=e.tab,s=e.slider,n=e.items,r=e.item;return t("div",{staticClass:"v-tabs",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar([this.hideSlider?null:this.genSlider(s),i]),t(X["a"],{props:{dark:this.theme.isDark,light:!this.theme.isDark}},[this.genItems(n,r)])])}}),H=Object(l["a"])(a,s,n,!1,null,"20e30ae6",null);H.options.__file="TypesRankingTabs.vue";e["default"]=H.exports;c()(H,{VCard:h["a"],VCardText:u["b"],VCardTitle:d["a"],VChip:f["a"],VFlex:v["a"],VLayout:p["a"],VTab:x,VTabs:q})},"8e2a":function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return f})),i.d(e,"b",(function(){return v}));var s=i("80d2"),n=i("b0af"),r=(i("253d"),i("4c34"),i("23bf")),a=i("58df"),l=Object(a["a"])(r["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:{height:Object(s["b"])(this.height),maxHeight:Object(s["b"])(this.maxHeight),maxWidth:Object(s["b"])(this.maxWidth),width:Object(s["b"])(this.width)},on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=l,c=i("d9bd"),h=o.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(c["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?e.calculatedAspectRatio=r/n:null!=i&&setTimeout(s,i)};s()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),u=h.extend({name:"v-card-media",mounted:function(){Object(c["c"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),d=i("12b2"),f=Object(s["d"])("v-card__actions"),v=Object(s["d"])("v-card__text");n["a"],d["a"]},ad00:function(t,e,i){"use strict";var s=i("8e2a"),n=i.n(s);n.a},bf5a:function(t,e,i){},bfc5:function(t,e,i){"use strict";var s=i("6a18"),n=i("58df");e["a"]=Object(n["a"])(s["a"]).extend({name:"theme-provider",props:{root:Boolean},computed:{isDark:function(){return this.root?this.rootIsDark:s["a"].options.computed.isDark.call(this)}},render:function(){return this.$slots.default&&this.$slots.default.find((function(t){return!t.isComment&&" "!==t.text}))}})},cc20:function(t,e,i){"use strict";i("bf5a");var s=i("58df"),n=i("9d26"),r=i("b64a"),a=i("6a18"),l=i("98a1"),o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e["a"]=Object(s["a"])(r["a"],a["a"],l["a"]).extend({name:"v-chip",props:{close:Boolean,disabled:Boolean,label:Boolean,outline:Boolean,selected:Boolean,small:Boolean,textColor:String,value:{type:Boolean,default:!0}},computed:{classes:function(){return o({"v-chip--disabled":this.disabled,"v-chip--selected":this.selected&&!this.disabled,"v-chip--label":this.label,"v-chip--outline":this.outline,"v-chip--small":this.small,"v-chip--removable":this.close},this.themeClasses)}},methods:{genClose:function(t){var e=this,i={staticClass:"v-chip__close",on:{click:function(t){t.stopPropagation(),e.$emit("input",!1)}}};return t("div",i,[t(n["a"],"$vuetify.icons.delete")])},genContent:function(t){return t("span",{staticClass:"v-chip__content"},[this.$slots.default,this.close&&this.genClose(t)])}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-chip",class:this.classes,attrs:{tabindex:this.disabled?-1:0},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),i=this.textColor||this.outline&&this.color;return t("span",this.setTextColor(i,e),[this.genContent(t)])}})},d2c8:function(t,e,i){var s=i("aae3"),n=i("be13");t.exports=function(t,e,i){if(s(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(t))}},f413:function(t,e,i){}}]);
//# sourceMappingURL=chunk-0c6baf3c.e2923ec4.js.map