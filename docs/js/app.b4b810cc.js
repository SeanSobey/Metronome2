(function(t){function e(e){for(var i,r,s=e[0],u=e[1],p=e[2],m=0,c=[];m<s.length;m++)r=s[m],a[r]&&c.push(a[r][0]),a[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(c.length)c.shift()();return o.push.apply(o,p||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(i=!1)}i&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},o=[];function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Metronome/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0063":function(t,e,n){},"1e79":function(t,e,n){"use strict";var i=n("7dbe"),a=n.n(i);a.a},"3b52":function(t,e,n){"use strict";var i=n("0063"),a=n.n(i);a.a},"555a":function(t,e,n){t.exports=n.p+"img/icon.526931fa.png"},"7dbe":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("b-navbar",{attrs:{type:"dark",variant:"primary"}},[i("b-navbar-brand",[i("img",{staticClass:"d-inline-block align-top",attrs:{src:n("555a"),width:"32",height:"32"}}),t._v("\n\t\t\t\tMetronome\n\t\t\t")]),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-dropdown-item",{attrs:{href:"https://github.com/SeanSobey/Metronome"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)],1)],1),i("b-jumbotron",{staticClass:"my-2",attrs:{"text-variant":"center"}},[i("h2",[i("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"clock"}}),i("label",[t._v(t._s(t._f("time")(t.time)))])],1),i("PlaybackInput",{on:{play:t.onPlay,stop:t.onStop,pause:t.onPause}}),i("VolumeInput",{on:{"volume-down":t.onVolumeDown,"volume-up":t.onVolumeUp,"volume-on":t.onVolumeOn,"volume-off":t.onVolumeOff}}),i("hr"),i("BpmIndicator",{attrs:{currentNote:t.currentNote}}),i("hr"),i("BpmInput",{staticClass:"my-4",model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}}),i("BpmRampInput",{staticClass:"my-4",model:{value:t.bpmRamp,callback:function(e){t.bpmRamp=e},expression:"bpmRamp"}})],1)],1)])},o=[],r=n("9ab4"),s=n("60a3"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button-group",{staticClass:"m-2",attrs:{size:"lg"}},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Play"},on:{click:t.playOnClick}},[n("font-awesome-icon",{attrs:{icon:"play"}})],1),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Pause"},on:{click:t.pauseOnClick}},[n("font-awesome-icon",{attrs:{icon:"pause"}})],1),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Stop"},on:{click:t.stopOnClick}},[n("font-awesome-icon",{attrs:{icon:"stop"}})],1)],1)},p=[];let l=class extends s["c"]{playOnClick(){this.$emit("play")}stopOnClick(){this.$emit("stop")}pauseOnClick(){this.$emit("pause")}};l=r["a"]([Object(s["a"])({})],l);var m=l,c=m,b=n("2877"),h=Object(b["a"])(c,u,p,!1,null,"591b167e",null),d=h.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button-group",{staticClass:"m-2",attrs:{size:"lg"}},[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Volume Down"},on:{click:t.volumeDownOnClick}},[n("font-awesome-icon",{attrs:{icon:"volume-down"}})],1),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Volume Up"},on:{click:t.volumeUpOnClick}},[n("font-awesome-icon",{attrs:{icon:"volume-up"}})],1),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:t.mute?"Volume On":"Volume Off"},on:{click:t.volumeOffOnClick}},[n("font-awesome-icon",{attrs:{icon:"volume-off"}}),t._v(" "+t._s(t._f("volume")(t.volume,t.mute))+"\n\t")],1)],1)},v=[];s["c"].filter("volume",(t,e)=>{if(e)return"";const n=t>0?"+":"";return`${n}${t}db`});let g=class extends s["c"]{constructor(){super(...arguments),this.mute=!1,this.volume=0}volumeDownOnClick(){this.mute=!1,this.volume=Math.round(Math.max(this.volume-3,-24)),this.$emit("volume-down",this.volume)}volumeUpOnClick(){this.mute=!1,this.volume=Math.round(Math.min(this.volume+3,24)),this.$emit("volume-up",this.volume)}volumeOffOnClick(){this.mute=!this.mute,this.mute?this.$emit("volume-off"):this.$emit("volume-on")}};g=r["a"]([Object(s["a"])({})],g);var V=g,x=V,y=Object(b["a"])(x,f,v,!1,null,"e11c679c",null),w=y.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-input-group",{attrs:{size:"lg"}},[n("b-input-group-prepend",[n("b-input-group-text",[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"spinner"}}),t._v("BPM\n\t\t")],1)],1),n("b-form-input",{attrs:{type:"range",size:"lg",min:t.bpmMin,max:t.bpmMax},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}}),n("b-input-group-append",[n("b-button-group",[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"BPM--"},on:{click:function(e){return t.decBpm()}}},[n("font-awesome-icon",{attrs:{icon:"minus"}})],1),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"BPM++"},on:{click:function(e){return t.incBpm()}}},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1),n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"outline-primary",title:"BPM Tap"},on:{click:function(e){return t.tapBpm(e)}}},[t._v("Tap")]),n("b-input-group-text",[t._v(t._s(t.formatBpm(t.inputValue)))])],1)],1)},O=[];const M=10,k=300,T=5,C=1200;class j{static bpm(t,e){const n=t.toString(10);return n.length<3?"0"+n:n}}class B extends s["c"]{constructor(){super(...arguments),this.inputValue=this.value}inputValueWatcher(t){this.$emit("input",t)}}r["a"]([Object(s["b"])()],B.prototype,"value",void 0),r["a"]([Object(s["d"])("inputValue")],B.prototype,"inputValueWatcher",null);const $=4e3;let R=class extends B{constructor(){super(...arguments),this.bpmMin=M,this.bpmMax=k,this.bpmValue=this.value,this.taps=[],this.formatBpm=j.bpm}incBpm(){this.inputValue>=this.bpmMax||(this.inputValue++,this.$emit("input",this.inputValue))}decBpm(){this.inputValue<=this.bpmMin||(this.inputValue--,this.$emit("input",this.inputValue))}tapBpm(t){const e=t.target;e.blur();const n=(new Date).getTime();if(this.taps.length>0&&n-this.taps[this.taps.length-1]>$&&(this.taps=[],this.inputValue=100),this.taps.push(n),1===this.taps.length)return;const i=[];for(let o=1;o<this.taps.length;o++)i.push(this.taps[o]-this.taps[o-1]);const a=i.reduce((t,e)=>t+e)/i.length;this.inputValue=Math.round(6e4/a),this.$emit("input",this.inputValue)}};R=r["a"]([Object(s["a"])({})],R);var P=R,N=P,I=Object(b["a"])(N,_,O,!1,null,"06997cc8",null),S=I.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"Pills"}},t._l(4,function(e){return n("b-badge",{key:e,staticClass:"mx-2 bpm-indicator",attrs:{pill:"",variant:t.getVariant(e)}},[t._v(t._s(e))])}),1)},z=[];let D=class extends s["c"]{getVariant(t){return this.currentNote===t?"dark":"primary"}};r["a"]([Object(s["b"])({required:!1,default:0})],D.prototype,"currentNote",void 0),D=r["a"]([Object(s["a"])({})],D);var W=D,A=W,U=(n("3b52"),Object(b["a"])(A,E,z,!1,null,"800e5fe2",null)),q=U.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-input-group",{attrs:{size:"lg"}},[n("b-input-group-prepend",[n("b-input-group-text",[n("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"signal"}}),t._v("Ramp\n\t\t")],1)],1),n("b-input-group-text",{staticClass:"rounded-0 bg-white flex-fill"},[n("CompoundNumberInput",{attrs:{disabled:!t.isEnabled(),min:t.bpmMin,max:t.bpmMax},model:{value:t.inputValue.from,callback:function(e){t.$set(t.inputValue,"from",t._n(e))},expression:"inputValue.from"}})],1),n("b-input-group-prepend",{staticClass:"bpm-ramp-input-inline-prepend"},[n("b-input-group-text",[t._v("To")])],1),n("b-input-group-text",{staticClass:"rounded-0 bg-white flex-fill"},[n("CompoundNumberInput",{attrs:{disabled:!t.isEnabled(),min:t.bpmMin,max:t.bpmMax},model:{value:t.inputValue.to,callback:function(e){t.$set(t.inputValue,"to",t._n(e))},expression:"inputValue.to"}})],1),n("b-input-group-prepend",{staticClass:"bpm-ramp-input-inline-prepend"},[n("b-input-group-text",[t._v("Over")])],1),n("b-input-group-text",{staticClass:"rounded-0 bg-white flex-fill"},[n("CompoundNumberInput",{attrs:{min:t.bpmIntervalMin,max:t.bpmIntervalMax},model:{value:t.inputValue.interval,callback:function(e){t.$set(t.inputValue,"interval",t._n(e))},expression:"inputValue.interval"}})],1),n("b-input-group-append",[n("b-button-group",{attrs:{size:"sm"}},t._l(t.buttons,function(e,i){return n("b-button",{key:i,attrs:{pressed:e.pressed,variant:"primary"},on:{"update:pressed":function(n){return t.$set(e,"pressed",n)},click:function(e){return t.onButtonClick(i)}}},[t._v(t._s(e.caption))])}),1)],1)],1)},J=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("b-col",[n("b-input-group",{attrs:{size:"sm"}},[n("b-button",{attrs:{slot:"prepend",variant:"primary",disabled:t.disabled},on:{click:function(e){return t.dec()}},slot:"prepend"},[n("font-awesome-icon",{attrs:{icon:"minus"}})],1),n("b-form-input",{attrs:{type:"number",disabled:t.disabled,min:t.min,max:t.max},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}}),n("b-button",{attrs:{slot:"append",variant:"primary",disabled:t.disabled},on:{click:function(e){return t.inc()}},slot:"append"},[n("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1)],1)],1),n("b-row",[n("b-col",[n("b-form-input",{attrs:{type:"range",disabled:t.disabled,min:t.min,max:t.max},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}})],1)],1)],1)},L=[];let G=class extends B{inc(){this.inputValue+10>this.max||(this.inputValue+=10,this.$emit("input",this.inputValue))}dec(){this.inputValue-10<this.min||(this.inputValue-=10,this.$emit("input",this.inputValue))}};r["a"]([Object(s["b"])({required:!1,default:0})],G.prototype,"min",void 0),r["a"]([Object(s["b"])({required:!1,default:100})],G.prototype,"max",void 0),r["a"]([Object(s["b"])({required:!1,default:!1})],G.prototype,"disabled",void 0),G=r["a"]([Object(s["a"])({})],G);var K=G,Q=K,X=Object(b["a"])(Q,H,L,!1,null,"a60d3e00",null),Y=X.exports;var Z;(function(t){t[t["Off"]=0]="Off",t[t["Secs"]=1]="Secs",t[t["Beats"]=2]="Beats"})(Z||(Z={}));let tt=class extends B{constructor(){super(...arguments),this.bpmMin=M,this.bpmMax=k,this.bpmIntervalMin=T,this.bpmIntervalMax=C,this.interval=100,this.buttons=[{caption:"Off",pressed:!0},{caption:"Secs",pressed:!1},{caption:"Beats",pressed:!1}],this.formatBpm=j.bpm}inputValueWatcher(t){this.$emit("input",this.inputValue)}incBpmFrom(){this.inputValue.from>=this.bpmMax||this.inputValue.from++}decBpmFrom(){this.inputValue.from<=this.bpmMin||this.inputValue.from--}incBpmTo(){this.inputValue.to>=this.bpmMax||this.inputValue.to++}decBpmTo(){this.inputValue.to<=this.bpmMin||this.inputValue.to--}onButtonClick(t){for(const[e,n]of this.buttons.entries())e!==t&&(n.pressed=!1),"Off"===n.caption&&n.pressed&&(this.inputValue.rampMode=Z.Off),"Secs"===n.caption&&n.pressed&&(this.inputValue.rampMode=Z.Secs),"Beats"===n.caption&&n.pressed&&(this.inputValue.rampMode=Z.Beats)}isEnabled(){return this.inputValue.rampMode!==Z.Off}};r["a"]([Object(s["d"])("inputValue",{deep:!0})],tt.prototype,"inputValueWatcher",null),tt=r["a"]([Object(s["a"])({components:{CompoundNumberInput:Y}})],tt);var et=tt,nt=et,it=(n("1e79"),Object(b["a"])(nt,F,J,!1,null,"ffca3fd6",null)),at=it.exports,ot=n("8cc4"),rt=n.n(ot);class st{constructor(){this._startTime=null,this._timer=null,this._interval=250}start(t){null===this._startTime&&(this._startTime=(new Date).getTime()),this._timer=setInterval(()=>{const e=(new Date).getTime();if(null===this._startTime)throw new Error("startTime is null");const n=e-this._startTime,i=Math.floor(n%864e5/36e5),a=Math.floor(n%36e5/6e4),o=Math.floor(n%6e4/1e3),r=Math.floor(n%1e3);t(i,a,o,r)},this._interval)}pause(){this._timer&&clearInterval(this._timer)}stop(){this._timer&&clearInterval(this._timer),this._startTime=null}}s["c"].filter("time",t=>`${t.h}:${("0"+t.m).slice(-2)}:${("0"+t.s).slice(-2)}`);let ut=class extends s["c"]{constructor(){super(...arguments),this.time={h:0,m:0,s:0,ms:0},this.bpm=100,this.bpmRamp={from:100,to:100,rampMode:Z.Off,interval:60},this.timer=new st,this.isPlaying=!1,this.currentNote=0,this.accent=new rt.a.Player("./sounds/Ping Hi.wav").toMaster(),this.beat=new rt.a.Player("./sounds/Ping Low.wav").toMaster()}onPlay(){this.stopAndReset(),this.bpmRamp.rampMode!==Z.Off&&(this.bpm=this.bpmRamp.from),rt.a.Transport.bpm.value=this.bpm,rt.a.Transport.bpm.setValueAtTime(this.bpm,"+0"),this.bpmRamp.rampMode===Z.Secs&&rt.a.Transport.bpm.rampTo(this.bpmRamp.to,this.bpmRamp.interval),rt.a.Transport.scheduleRepeat(this._loop.bind(this),"4n"),rt.a.Transport.start(),this.timer.start((t,e,n,i)=>this.time={h:t,m:e,s:n,ms:i})}onStop(){this.stopAndReset()}onPause(){rt.a.Transport.pause(),this.timer.pause()}onVolumeDown(t){rt.a.Master.mute=!1,rt.a.Master.volume.value=t}onVolumeUp(t){rt.a.Master.mute=!1,rt.a.Master.volume.value=t}onVolumeOn(){rt.a.Master.mute=!1}onVolumeOff(){rt.a.Master.mute=!0}bpmWatcher(){rt.a.Transport.bpm.value=this.bpm}bpmRampWatcher(){}stopAndReset(){this.currentNote=0,rt.a.Transport.stop(),rt.a.Transport.cancel(),this.timer.stop(),this.time={h:0,m:0,s:0,ms:0}}_loop(t){const e=Array.isArray(rt.a.Transport.timeSignature)?rt.a.Transport.timeSignature[0]:rt.a.Transport.timeSignature;if(this.currentNote=this.currentNote%e+1,1===this.currentNote?this.accent.start(t):this.beat.start(t),this.bpmRamp.rampMode===Z.Beats&&this.currentNote===e){const e=(this.bpmRamp.to-this.bpmRamp.from)/this.bpmRamp.interval,n=Math.round(Math.max(Math.min(rt.a.Transport.bpm.value+e,this.bpmRamp.to),this.bpmRamp.from));rt.a.Transport.bpm.setValueAtTime(n,t)}this.bpm=Math.round(rt.a.Transport.bpm.value)}};r["a"]([Object(s["d"])("bpm")],ut.prototype,"bpmWatcher",null),r["a"]([Object(s["d"])("bpmRamp",{deep:!0})],ut.prototype,"bpmRampWatcher",null),ut=r["a"]([Object(s["a"])({components:{PlaybackInput:d,VolumeInput:w,BpmInput:S,BpmRampInput:at,BpmIndicator:q}})],ut);var pt=ut,lt=pt,mt=Object(b["a"])(lt,a,o,!1,null,"5e0b12eb",null),ct=mt.exports,bt=n("9f7b"),ht=n.n(bt),dt=(n("f9e3"),n("2dd8"),n("ecee")),ft=n("c074"),vt=n("f2d1"),gt=n("ad3d");i["default"].config.productionTip=!1,i["default"].use(ht.a),dt["c"].add(ft["c"],ft["f"],ft["j"],ft["e"],ft["l"],ft["k"],ft["m"],ft["i"],vt["a"],ft["g"],ft["d"],ft["h"],ft["b"],ft["a"]),i["default"].component("font-awesome-icon",gt["a"]),i["default"].component("font-awesome-layers",gt["b"]),i["default"].component("font-awesome-layers-text",gt["c"]),new i["default"]({render:t=>t(ct)}).$mount("#app")}});
//# sourceMappingURL=app.b4b810cc.js.map