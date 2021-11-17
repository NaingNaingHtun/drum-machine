(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(1),s=a.n(r),c=a(4),i=a.n(c),d=(a(14),a(5)),o=a(6),n=a(2),l=a(9),m=a(8),u=a(7),p=(a(15),a(0)),h=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],k=[{keyCode:81,keyTrigger:"Q",id:"Chord-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"},{keyCode:87,keyTrigger:"W",id:"Chord-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"},{keyCode:69,keyTrigger:"E",id:"Chord-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"},{keyCode:65,keyTrigger:"A",id:"Shaker",url:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"},{keyCode:83,keyTrigger:"S",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"},{keyCode:68,keyTrigger:"D",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"},{keyCode:90,keyTrigger:"Z",id:"Punchy-Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"},{keyCode:88,keyTrigger:"X",id:"Side-Stick",url:"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Snare",url:"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}],y=Object(r.createContext)();function j(e){var t=e.drumPad,a=t.keyCode,s=t.keyTrigger,c=t.id,i=t.url,d=Object(r.useState)({backgroundColor:"darkgray"}),o=Object(u.a)(d,2),n=o[0],l=o[1],m=Object(r.useContext)(y);function h(){l({backgroundColor:"yellow"}),setTimeout((function(){return l({backgroundColor:"darkgray"})}),150)}function k(t){m&&t.keyCode===a&&(j(),h(),e.displayClipName(c.replaceAll("-"," ")))}function j(){var e=document.getElementById(s);e.currentTime=0,e.play()}return Object(r.useEffect)((function(){return document.addEventListener("keydown",k),function(){document.removeEventListener("keydown",k)}}),[]),Object(p.jsxs)("div",{className:"drum-pad",id:c,onClick:function(){m&&(j(),e.displayClipName(c.replaceAll("-"," ")),h())},style:n,children:[Object(p.jsx)("audio",{src:i,id:s,className:"clip"}),s]})}function C(e){var t=e.padBank.map((function(t){return Object(p.jsx)(j,{drumPad:t,displayClipName:e.displayClipName},t.id)}));return Object(p.jsx)("div",{className:"pad-bank",children:t})}var g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={power:!0,display:String.fromCharCode(160),currentPadBank:h,currentPadBankId:"Heater Kit",sliderVal:.3},r.powerControl=r.powerControl.bind(Object(n.a)(r)),r.selectBank=r.selectBank.bind(Object(n.a)(r)),r.displayClipName=r.displayClipName.bind(Object(n.a)(r)),r.adjustVolume=r.adjustVolume.bind(Object(n.a)(r)),r.clearDisplay=r.clearDisplay.bind(Object(n.a)(r)),r}return Object(o.a)(a,[{key:"powerControl",value:function(){this.setState({power:!this.state.power,display:String.fromCharCode(160)})}},{key:"selectBank",value:function(){this.state.power&&("Heater Kit"===this.state.currentPadBankId?this.setState({currentPadBank:k,currentPadBankId:"Smooth Piano Kit",display:"Smooth Piano Kit"}):this.setState({currentPadBank:h,currentPadBankId:"Heater Kit",display:"Heater Kit"}))}},{key:"clearDisplay",value:function(){this.setState({display:String.fromCharCode(160)})}},{key:"displayClipName",value:function(e){this.state.power&&this.setState({display:e})}},{key:"adjustVolume",value:function(e){var t=this;this.state.power&&this.setState({sliderVal:e.target.value,display:"Volume: ".concat(Math.round(100*e.target.value))}),setTimeout((function(){return t.clearDisplay()}),1e3)}},{key:"render",value:function(){var e=this;return document.getElementsByClassName("clip").forEach((function(t){t.volume=e.state.sliderVal})),Object(p.jsxs)("div",{id:"drum-machine",children:[Object(p.jsxs)("div",{className:"logo-container",children:[Object(p.jsx)("span",{id:"logo-name",children:"FCC"}),Object(p.jsx)("i",{className:"fab fa-free-code-camp",id:"logo"})]}),Object(p.jsxs)("div",{className:"drum-controls-container",children:[Object(p.jsx)("div",{className:"drum-pad-container",children:Object(p.jsx)(y.Provider,{value:this.state.power,children:Object(p.jsx)(C,{padBank:this.state.currentPadBank,displayClipName:this.displayClipName})})}),Object(p.jsxs)("div",{className:"controls-container",children:[Object(p.jsxs)("div",{className:"control",children:[Object(p.jsx)("p",{children:"Power"}),Object(p.jsx)("div",{className:"select",onClick:this.powerControl,children:Object(p.jsx)("div",{className:"button",style:{float:this.state.power?"right":"left"}})})]}),Object(p.jsx)("p",{id:"display",children:this.state.display}),Object(p.jsx)("div",{className:"volume-slider",children:Object(p.jsx)("input",{id:"volumeSlider",type:"range",max:"1",min:"0",step:"0.01",value:this.state.sliderVal,onChange:this.adjustVolume})}),Object(p.jsxs)("div",{className:"control",children:[Object(p.jsx)("p",{children:"Bank"}),Object(p.jsx)("div",{className:"select",onClick:this.selectBank,children:Object(p.jsx)("div",{className:"button",style:{float:"Heater Kit"===this.state.currentPadBankId?"left":"right"}})})]})]})]})]})}}]),a}(r.Component);i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bcf232e2.chunk.js.map