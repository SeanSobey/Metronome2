(function(t){function e(e){for(var i,r,o=e[0],p=e[1],u=e[2],c=0,m=[];c<o.length;c++)r=o[c],n[r]&&m.push(n[r][0]),n[r]=0;for(i in p)Object.prototype.hasOwnProperty.call(p,i)&&(t[i]=p[i]);l&&l(e);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var p=a[o];0!==n[p]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={app:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/Metronome/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],p=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=p;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"429d":function(t,e,a){},"4dae":function(t,e,a){},"555a":function(t,e,a){t.exports=a.p+"img/icon.526931fa.png"},ac0d:function(t,e,a){"use strict";var i=a("429d"),n=a.n(i);n.a},ac12:function(t,e,a){"use strict";var i=a("4dae"),n=a.n(i);n.a},cd49:function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("b-navbar",{attrs:{type:"dark",variant:"primary"}},[i("b-navbar-brand",[i("img",{staticClass:"d-inline-block align-top",attrs:{src:a("555a"),width:"32",height:"32"}}),t._v("\n\t\t\t\tMetronome\n\t\t\t")]),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-dropdown-item",{attrs:{href:"https://github.com/SeanSobey/Metronome"}},[i("font-awesome-icon",{attrs:{icon:["fab","github"],size:"lg"}})],1)],1)],1),i("b-jumbotron",{staticClass:"my-2",attrs:{"text-variant":"center"}},[i("div",{staticClass:"border border-secondary rounded p-1 d-inline-flex flex-column"},[i("div",{staticClass:"h2 m-1"},[i("font-awesome-icon",{staticClass:"mr-3",attrs:{icon:"clock"}}),i("label",[t._v(t._s(t._f("time")(t.timeManager.time)))])],1),i("div",{staticClass:"h3 m-1"},[i("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"spinner"}}),t._v("\n\t\t\t\t\t"+t._s(t.currentBpm())+"\n\t\t\t\t")],1)]),i("div",[i("PlaybackInput",{on:{play:t.onPlay,stop:t.onStop,pause:t.onPause}}),i("VolumeInput",{on:{"volume-down":t.onVolumeDown,"volume-up":t.onVolumeUp,"volume-on":t.onVolumeOn,"volume-off":t.onVolumeOff}})],1),i("hr"),i("BpmIndicator",{attrs:{beatsPerBar:t.bpmIndicatorManager.beatsPerBar,currentBeat:t.bpmIndicatorManager.currentBeat}}),i("hr"),i("TimeSignatureInput",{attrs:{disabled:t.isPlaying()},model:{value:t.beatsPerBar,callback:function(e){t.beatsPerBar=e},expression:"beatsPerBar"}}),i("BpmInput",{staticClass:"my-4",attrs:{disabled:!t.isBpmInputEnabled()},model:{value:t.bpm,callback:function(e){t.bpm=e},expression:"bpm"}}),i("BpmRampInput",{staticClass:"my-4",attrs:{disabled:t.isPlaying()},model:{value:t.bpmRamp,callback:function(e){t.bpmRamp=e},expression:"bpmRamp"}})],1),i("h2",{staticClass:"text-center my-4"},[t._v("How to use the metronome")]),i("p",{staticClass:"text-center my-4"},[t._v("\n\t\t\tThe metronome has an ajustable tempo that stretches from "+t._s(t.bpmMin)+" to "+t._s(t.bpmMax)+" BPM. You can use the metronome by adjusting the\n\t\t\t"),i("b",[i("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"spinner"}}),t._v("BPM\n\t\t\t")],1),t._v(" slider.\n\t\t")]),i("p",{staticClass:"text-center my-4"},[t._v("\n\t\t\tYou can configure the BPM over time by adjusting the\n\t\t\t"),i("b",[i("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"signal"}}),t._v("BPM Ramp\n\t\t\t")],1),t._v(" sliders. Specifying the start BPM, target BPM and the time the increase/decrease takes. This can happen in either a smooth increase in\n\t\t\t"),i("b",[t._v("seconds")]),t._v(" or\n\t\t\t"),i("b",[t._v("beats")]),t._v(".\n\t\t")])],1)])},s=[],r=a("9ab4"),o=a("8cc4"),p=a.n(o),u=a("60a3"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{staticClass:"m-2",attrs:{size:"lg"}},[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Play"},on:{click:t.playOnClick}},[a("font-awesome-icon",{attrs:{icon:"play"}})],1),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Pause"},on:{click:t.pauseOnClick}},[a("font-awesome-icon",{attrs:{icon:"pause"}})],1),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Stop"},on:{click:t.stopOnClick}},[a("font-awesome-icon",{attrs:{icon:"stop"}})],1)],1)},c=[];let m=class extends u["c"]{playOnClick(){this.$emit("play")}stopOnClick(){this.$emit("stop")}pauseOnClick(){this.$emit("pause")}};m=r["a"]([Object(u["a"])({})],m);var b=m,d=b,h=a("2877"),f=Object(h["a"])(d,l,c,!1,null,"591b167e",null),v=f.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-button-group",{staticClass:"m-2",attrs:{size:"lg"}},[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Volume Down"},on:{click:t.volumeDownOnClick}},[a("font-awesome-icon",{attrs:{icon:"volume-down"}})],1),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"Volume Up"},on:{click:t.volumeUpOnClick}},[a("font-awesome-icon",{attrs:{icon:"volume-up"}})],1),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:t.mute?"Volume On":"Volume Off"},on:{click:t.volumeOffOnClick}},[a("font-awesome-icon",{attrs:{icon:"volume-off"}}),t._v(" "+t._s(t._f("volume")(t.volume,t.mute))+"\n\t")],1)],1)},M=[];u["c"].filter("volume",(t,e)=>{if(e)return"";const a=t>0?"+":"";return`${a}${t}db`});let x=class extends u["c"]{constructor(){super(...arguments),this.mute=!1,this.volume=0}volumeDownOnClick(){this.mute=!1,this.volume=Math.round(Math.max(this.volume-3,-24)),this.$emit("volume-down",this.volume)}volumeUpOnClick(){this.mute=!1,this.volume=Math.round(Math.min(this.volume+3,24)),this.$emit("volume-up",this.volume)}volumeOffOnClick(){this.mute=!this.mute,this.mute?this.$emit("volume-off"):this.$emit("volume-on")}};x=r["a"]([Object(u["a"])({})],x);var y=x,_=y,V=Object(h["a"])(_,g,M,!1,null,"e11c679c",null),w=V.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-input-group",{attrs:{size:"lg"}},[a("b-input-group-prepend",[a("b-input-group-text",[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"spinner"}}),t._v("BPM\n\t\t")],1)],1),a("b-form-input",{attrs:{type:"range",size:"lg",disabled:t.disabled,min:t.bpmMin,max:t.bpmMax},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}}),a("b-input-group-append",[a("b-button-group",[a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"BPM--",disabled:t.disabled},on:{click:function(e){return t.decBpm()}}},[a("font-awesome-icon",{attrs:{icon:"minus"}})],1),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"primary",title:"BPM++",disabled:t.disabled},on:{click:function(e){return t.incBpm()}}},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"outline-primary",title:"BPM Tap",disabled:t.disabled},on:{click:function(e){return t.tapBpm(e)}}},[t._v("Tap")]),a("b-input-group-text",[t._v(t._s(t.formatBpm(t.inputValue)))])],1)],1)},O=[];const P=10,k=300,C=5,j=1200;class T{static bpm(t,e){const a=t.toString(10);return a.length<3?"0"+a:a}}class S extends u["c"]{constructor(){super(...arguments),this.inputValue=this.value}inputValueWatcher(t){this.$emit("input",t)}}r["a"]([Object(u["b"])()],S.prototype,"value",void 0),r["a"]([Object(u["d"])("inputValue")],S.prototype,"inputValueWatcher",null);const $=4e3;let I=class extends S{constructor(){super(...arguments),this.bpmMin=P,this.bpmMax=k,this.bpmValue=this.value,this.taps=[],this.formatBpm=T.bpm}incBpm(){this.inputValue>=this.bpmMax||(this.inputValue++,this.$emit("input",this.inputValue))}decBpm(){this.inputValue<=this.bpmMin||(this.inputValue--,this.$emit("input",this.inputValue))}tapBpm(t){const e=t.target;e.blur();const a=(new Date).getTime();if(this.taps.length>0&&a-this.taps[this.taps.length-1]>$&&(this.taps=[],this.inputValue=100),this.taps.push(a),1===this.taps.length)return;const i=[];for(let s=1;s<this.taps.length;s++)i.push(this.taps[s]-this.taps[s-1]);const n=i.reduce((t,e)=>t+e)/i.length;this.inputValue=Math.round(6e4/n),this.$emit("input",this.inputValue)}};r["a"]([Object(u["b"])({required:!1,default:!1})],I.prototype,"disabled",void 0),I=r["a"]([Object(u["a"])({})],I);var R=I,E=R,N=Object(h["a"])(E,B,O,!1,null,"631eb1c9",null),W=N.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h4 border border-secondary rounded d-inline-flex m-0 p-2"},t._l(t.beatsPerBar,function(e){return a("b-badge",{key:e,staticClass:"mx-2 bpm-indicator",attrs:{pill:"",variant:t.getPillVariant(e)}},[t._v(t._s(e)+"\n\t")])}),1)},z=[];let D=class extends u["c"]{getPillVariant(t){return t===this.currentBeat?"dark":1===t?"light":"primary"}};r["a"]([Object(u["b"])({required:!0})],D.prototype,"beatsPerBar",void 0),r["a"]([Object(u["b"])({required:!0})],D.prototype,"currentBeat",void 0),D=r["a"]([Object(u["a"])({})],D);var U=D,F=U,L=(a("ac12"),Object(h["a"])(F,q,z,!1,null,"3cbb008e",null)),A=L.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-input-group",{attrs:{size:"lg"}},[a("b-input-group-prepend",[a("b-input-group-text",[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:"signal"}}),t._v("Ramp\n\t\t")],1)],1),a("b-input-group-text",{staticClass:"rounded-0 bg-white flex-fill"},[a("CompoundNumberInput",{attrs:{disabled:!t.isEnabled(),min:t.bpmMin,max:t.bpmMax},model:{value:t.inputValue.from,callback:function(e){t.$set(t.inputValue,"from",t._n(e))},expression:"inputValue.from"}})],1),a("b-input-group-prepend",{staticClass:"bpm-ramp-input-inline-prepend"},[a("b-input-group-text",[t._v("To")])],1),a("b-input-group-text",{staticClass:"rounded-0 bg-white flex-fill"},[a("CompoundNumberInput",{attrs:{disabled:!t.isEnabled(),min:t.bpmMin,max:t.bpmMax},model:{value:t.inputValue.to,callback:function(e){t.$set(t.inputValue,"to",t._n(e))},expression:"inputValue.to"}})],1),a("b-input-group-prepend",{staticClass:"bpm-ramp-input-inline-prepend"},[a("b-input-group-text",[t._v("Over")])],1),a("b-input-group-text",{staticClass:"rounded-0 bg-white flex-fill"},[a("CompoundNumberInput",{attrs:{disabled:!t.isEnabled(),min:t.bpmIntervalMin,max:t.bpmIntervalMax},model:{value:t.inputValue.interval,callback:function(e){t.$set(t.inputValue,"interval",t._n(e))},expression:"inputValue.interval"}})],1),a("b-input-group-append",[a("b-button-group",{attrs:{size:"sm"}},t._l(t.buttons,function(e,i){return a("b-button",{key:i,attrs:{pressed:e.pressed,disabled:t.disabled,variant:"primary"},on:{"update:pressed":function(a){return t.$set(e,"pressed",a)},click:function(e){return t.onButtonClick(i)}}},[t._v(t._s(e.caption))])}),1)],1)],1)},J=[],Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-col",[a("b-input-group",{attrs:{size:"sm"}},[a("b-button",{attrs:{slot:"prepend",variant:"primary",disabled:t.disabled},on:{click:function(e){return t.dec()}},slot:"prepend"},[a("font-awesome-icon",{attrs:{icon:"minus"}})],1),a("b-form-input",{attrs:{type:"number",disabled:t.disabled,min:t.min,max:t.max},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}}),a("b-button",{attrs:{slot:"append",variant:"primary",disabled:t.disabled},on:{click:function(e){return t.inc()}},slot:"append"},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1)],1)],1),a("b-row",[a("b-col",[a("b-form-input",{attrs:{type:"range",disabled:t.disabled,min:t.min,max:t.max},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}})],1)],1)],1)},G=[];let K=class extends S{inc(){this.inputValue+10>this.max||(this.inputValue+=10,this.$emit("input",this.inputValue))}dec(){this.inputValue-10<this.min||(this.inputValue-=10,this.$emit("input",this.inputValue))}};r["a"]([Object(u["b"])({required:!1,default:0})],K.prototype,"min",void 0),r["a"]([Object(u["b"])({required:!1,default:100})],K.prototype,"max",void 0),r["a"]([Object(u["b"])({required:!1,default:!1})],K.prototype,"disabled",void 0),K=r["a"]([Object(u["a"])({})],K);var Q=K,X=Q,Z=Object(h["a"])(X,Y,G,!1,null,"a60d3e00",null),tt=Z.exports;var et;(function(t){t[t["Off"]=0]="Off",t[t["Secs"]=1]="Secs",t[t["Bars"]=2]="Bars"})(et||(et={}));let at=class extends S{constructor(){super(...arguments),this.bpmMin=P,this.bpmMax=k,this.bpmIntervalMin=C,this.bpmIntervalMax=j,this.interval=100,this.buttons=[{caption:"Off",pressed:!0},{caption:"Secs",pressed:!1},{caption:"Bars",pressed:!1}],this.formatBpm=T.bpm}inputValueWatcher(t){this.$emit("input",this.inputValue)}incBpmFrom(){this.inputValue.from>=this.bpmMax||this.inputValue.from++}decBpmFrom(){this.inputValue.from<=this.bpmMin||this.inputValue.from--}incBpmTo(){this.inputValue.to>=this.bpmMax||this.inputValue.to++}decBpmTo(){this.inputValue.to<=this.bpmMin||this.inputValue.to--}onButtonClick(t){for(const[e,a]of this.buttons.entries())e!==t&&(a.pressed=!1),"Off"===a.caption&&a.pressed&&(this.inputValue.rampMode=et.Off),"Secs"===a.caption&&a.pressed&&(this.inputValue.rampMode=et.Secs),"Bars"===a.caption&&a.pressed&&(this.inputValue.rampMode=et.Bars)}isEnabled(){return!this.disabled&&this.inputValue.rampMode!==et.Off}};r["a"]([Object(u["b"])({required:!1,default:!1})],at.prototype,"disabled",void 0),r["a"]([Object(u["d"])("inputValue",{deep:!0})],at.prototype,"inputValueWatcher",null),at=r["a"]([Object(u["a"])({components:{CompoundNumberInput:tt}})],at);var it=at,nt=it,st=(a("ac0d"),Object(h["a"])(nt,H,J,!1,null,"4238783d",null)),rt=st.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-input-group",{attrs:{size:"lg"}},[a("b-input-group-prepend",[a("b-input-group-text",[a("font-awesome-icon",{staticClass:"mr-1",attrs:{icon:["fab","itunes-note"]}}),t._v("Time Signature\n\t\t")],1)],1),a("b-form-input",{attrs:{type:"number",disabled:t.disabled,min:t.beatsPerBarMin,max:t.beatsPerBarMax},model:{value:t.inputValue,callback:function(e){t.inputValue=t._n(e)},expression:"inputValue"}}),a("b-input-group-append",[a("b-input-group-text",[t._v("\n\t\t\t"+t._s(t._f("timeSignature")(t.inputValue))+" / 4\n\t\t")])],1)],1)},pt=[];u["c"].filter("timeSignature",t=>t>9?t.toString():" "+t.toString());let ut=class extends S{constructor(){super(...arguments),this.beatsPerBarMin=1,this.beatsPerBarMax=16}inputValueWatcher(t){this.$emit("input",this.inputValue)}};r["a"]([Object(u["b"])({required:!1,default:!1})],ut.prototype,"disabled",void 0),r["a"]([Object(u["d"])("inputValue")],ut.prototype,"inputValueWatcher",null),ut=r["a"]([Object(u["a"])({})],ut);var lt=ut,ct=lt,mt=Object(h["a"])(ct,ot,pt,!1,null,"27f939d6",null),bt=mt.exports;class dt{constructor(){this.time={h:0,m:0,s:0,ms:0},this._startTime=null,this._timer=null,this._interval=250}start(){null===this._startTime&&(this._startTime=(new Date).getTime()),this._timer=setInterval(()=>{const t=(new Date).getTime();if(null===this._startTime)throw new Error("startTime is null");const e=t-this._startTime,a=Math.floor(e%864e5/36e5),i=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3),s=Math.floor(e%1e3);this.time={h:a,m:i,s:n,ms:s}},this._interval)}pause(){this._timer&&clearInterval(this._timer)}stop(){this._timer&&clearInterval(this._timer),this._startTime=null,this.time={h:0,m:0,s:0,ms:0}}}class ht{constructor(t){this.currentBeat=0,this.beatsPerBar=t,this.loop=new p.a.Loop(()=>{this.currentBeat=this.currentBeat%t+1},"4n")}start(){this.loop.start()}stop(){this.loop.stop(),this.loop.start(0),this.loop.stop(),this.currentBeat=0}pause(){this.loop.stop()}}u["c"].filter("time",t=>`${t.h}:${("0"+t.m).slice(-2)}:${("0"+t.s).slice(-2)}`);let ft=class extends u["c"]{constructor(){super(),this.bpmMin=P,this.bpmMax=k,this.bpm=100,this.bpmRamp={from:100,to:100,rampMode:et.Off,interval:60},this.beatsPerBar=4,this.timeManager=new dt,this.isStopped=!0,this.isPaused=!1,this.accent=new p.a.Player("./sounds/Ping Hi.wav").toMaster(),this.beat=new p.a.Player("./sounds/Ping Low.wav").toMaster(),this.bpmIndicatorManager=new ht(this.beatsPerBar),p.a.Transport.bpm.value=this.bpm}bpmWatcher(){p.a.Transport.bpm.value=this.bpm}bpmRampWatcher(){}beatsPerBarWatcher(){this.bpmIndicatorManager=new ht(this.beatsPerBar),p.a.Transport.timeSignature=this.beatsPerBar}currentBpm(){return p.a.Transport.bpm.value.toFixed(0)}isBpmInputEnabled(){return this.bpmRamp.rampMode===et.Off}isPlaying(){return!this.isStopped&&!this.isPaused}onPlay(){if(!this.isPlaying()){if(p.a.Transport.bpm.value=this.bpm,this.isStopped){this.setupBpmMode();const t=this.createNoteSequence();t.start(0)}this.isPaused,this.isStopped=!1,this.isPaused=!1,p.a.Transport.start(),this.timeManager.start(),this.bpmIndicatorManager.start()}}onStop(){p.a.Transport.stop(),p.a.Transport.cancel(0),p.a.Transport.seconds=0,this.timeManager.stop(),this.bpmIndicatorManager.stop(),this.isStopped=!0}onPause(){p.a.Transport.pause(),this.timeManager.pause(),this.bpmIndicatorManager.pause(),this.isPaused=!0}onVolumeDown(t){p.a.Master.mute=!1,p.a.Master.volume.value=t}onVolumeUp(t){p.a.Master.mute=!1,p.a.Master.volume.value=t}onVolumeOn(){p.a.Master.mute=!1}onVolumeOff(){p.a.Master.mute=!0}createNoteSequence(){const t="G2",e="C2",a=[t,...new Array(this.beatsPerBar-1).fill(e)];return new p.a.Sequence((a,i)=>{switch(i){case t:this.accent.start(a);break;case e:this.beat.start(a);break;default:break}},a,"4n")}setupBpmMode(){switch(this.bpmRamp.rampMode){case et.Secs:p.a.Transport.bpm.rampTo(this.bpmRamp.to,this.bpmRamp.interval);break;case et.Bars:const t=new p.a.Loop(t=>{if(this.bpmIndicatorManager.currentBeat===this.beatsPerBar){const e=(this.bpmRamp.to-this.bpmRamp.from)/this.bpmRamp.interval,a=Math.round(Math.max(Math.min(p.a.Transport.bpm.value+e,this.bpmRamp.to),this.bpmRamp.from));p.a.Transport.bpm.setValueAtTime(a,t)}},"4n");t.start(0);break;case et.Off:break;default:throw new Error(`Un-handled ramp mode: ${this.bpmRamp.rampMode}`)}}};r["a"]([Object(u["d"])("bpm")],ft.prototype,"bpmWatcher",null),r["a"]([Object(u["d"])("bpmRamp",{deep:!0})],ft.prototype,"bpmRampWatcher",null),r["a"]([Object(u["d"])("beatsPerBar")],ft.prototype,"beatsPerBarWatcher",null),ft=r["a"]([Object(u["a"])({components:{PlaybackInput:v,VolumeInput:w,BpmInput:W,BpmRampInput:rt,BpmIndicator:A,TimeSignatureInput:bt}})],ft);var vt=ft,gt=vt,Mt=Object(h["a"])(gt,n,s,!1,null,"4d139613",null),xt=Mt.exports,yt=a("9f7b"),_t=a.n(yt),Vt=(a("f9e3"),a("2dd8"),a("ecee")),wt=a("c074"),Bt=a("f2d1"),Ot=a("ad3d");i["default"].config.productionTip=!1,i["default"].use(_t.a),Vt["c"].add(wt["c"],wt["f"],wt["j"],wt["e"],wt["l"],wt["k"],wt["m"],wt["i"],wt["g"],wt["d"],wt["h"],wt["b"],wt["a"]),Vt["c"].add(Bt["a"],Bt["b"]),i["default"].component("font-awesome-icon",Ot["a"]),i["default"].component("font-awesome-layers",Ot["b"]),i["default"].component("font-awesome-layers-text",Ot["c"]),new i["default"]({render:t=>t(xt)}).$mount("#app")}});
//# sourceMappingURL=app.4f4acc99.js.map