(()=>{"use strict";var e,t,r,n,o,s,i,a={989:(e,t,r)=>{r.r(t),r.d(t,{Soda:()=>n});const n=new class{constructor(){this.components={},this.id=0,this.work=[]}state(e,t){const r=this.currentComponent;r.__hooks[r.__hookId]=r.__hooks[r.__hookId]||e;const n=r.__hookId;return[r.__hooks[r.__hookId++],(e,o)=>{const s=r.__hooks[n];return r.__hooks[n]=e,o||t&&t(s,e)||r.update(),e}]}effect(e,t){var r;const n=this.currentComponent;if(!n.__dom)return void this.work.push({cb:()=>{this.effect(e,t)},hookId:n.__hookId++});const o=n.__hooks[n.__hookId],s=!(null==o?void 0:o.deps)||!t.every(((e,t)=>e===o.deps[t]));t&&!s||("function"==typeof(null===(r=n.__hooks[n.__hookId])||void 0===r?void 0:r.cleanup)&&n.__hooks[n.__hookId].cleanup(),n.__hooks[n.__hookId]={},n.__hooks[n.__hookId].deps=t,n.__hooks[n.__hookId].cleanup=e()),++n.__hookId}ref(){return this.state({dom:void 0})[0]}createElement(e,t,...r){return{tag:e,attrs:t,children:r}}render(e,t){if("function"==typeof e.tag){const r={attrs:e.attrs,update:()=>{if("function"==typeof e.tag){const t=this.currentComponent;this.currentComponent=r,r.__hookId=0;const n=e.tag(r.attrs);this._update(r.__dom,n,r.__element,r),r.__element=n,this.currentComponent=t}},__dom:void 0,__element:void 0,__children:[],__hooks:[],__hookId:0},n=this.currentComponent;this.currentComponent=r;const o=this.id++;return this.components[o]=r,this._render(t,r.__element=e.tag(r.attrs),r,{svg:!1,parent:!0}),this.processWork(),this.currentComponent=n,o}}_render(e,t,r,n){if(Array.isArray(t)){for(let o=0;o<t.length;++o)"function"==typeof t[o].tag?r.__children.push(this.render(t[o],e)):this._render(e,t[o],r,n);return}let o;"svg"===t.tag||n.svg?(o=document.createElementNS("http://www.w3.org/2000/svg",t.tag),n.svg=!0):o=document.createElement(t.tag),n.parent&&(r.__dom=o,n.parent=!1);for(let e in t.attrs)e.startsWith("on")?o.addEventListener(e.substring(2).toLowerCase(),t.attrs[e],{capture:!0}):this.setDomAttribute(o,e,t.attrs[e],void 0);for(let e=0;e<t.children.length;++e)"function"==typeof t.children[e].tag?r.__children.push(this.render(t.children[e],o)):"object"==typeof t.children[e]?this._render(o,t.children[e],r,n):o.appendChild(document.createTextNode(t.children[e]));e.appendChild(o)}_update(e,t,r,n){var o,s;if(e.tagName.toLowerCase()!==t.tag){const r=e.parentNode;null==r||r.removeChild(e),e=document.createElement(t.tag),null==r||r.appendChild(e)}const i={};for(let n in null==r?void 0:r.attrs)n.startsWith("on")?(r.attrs&&r.attrs[n]&&e.removeEventListener(n.substring(2).toLowerCase(),r.attrs[n],{capture:!0}),t.attrs&&t.attrs[n]&&(i[n]=!0,e.addEventListener(n.substring(2).toLowerCase(),t.attrs[n],{capture:!0}))):(null==t?void 0:t.attrs[n])?(i[n]=!0,this.setDomAttribute(e,n,t.attrs[n],r.attrs[n])):this.removeDomAttribute(e,n);for(let r in null==t?void 0:t.attrs)i[r]||(r.startsWith("on")?t.attrs&&t.attrs[r]&&e.addEventListener(r.substring(2).toLowerCase(),t.attrs[r],{capture:!0}):this.setDomAttribute(e,r,t.attrs[r],void 0));for(let i=0;i<t.children.length||i<e.childNodes.length;++i)if(void 0!==t.children[i])if("function"==typeof t.children[i].tag){const r=document.createElement("div");n.__children.push(this.render(t.children[i],r)),void 0===e.childNodes[i]?e.appendChild(r.firstChild):e.replaceChild(r.firstChild,e.childNodes[i])}else{if(Array.isArray(t.children[i])){const a=r.children[i],c=t.children[i];let d={};for(let t=0;t<a.length;++t)d[a[t].attrs.key]=e.childNodes[t];for(let t=0,r=0;t<a.length||r<c.length;)if((null===(o=a[t])||void 0===o?void 0:o.attrs.key)===(null===(s=c[r])||void 0===s?void 0:s.attrs.key)){if("function"==typeof c[r].tag)this.components[n.__children[t]].attrs=c[r].attrs,this.components[n.__children[t]].update();else{let e=d[a[t].attrs.key];this._update(e,c[r],a[t],n)}++t,++r}else if(a[t]&&c[r]){let o=d[a[t].attrs.key];const s=document.createElement("div");"function"==typeof c[r].tag?n.__children.push(this.render(c[r],s)):this._render(s,c[r],n,{svg:!1,parent:!1}),e.insertBefore(s.firstChild,o),++r}else if(!a[t]&&c[r]){const t=document.createElement("div");"function"==typeof c[r].tag?n.__children.push(this.render(c[r],t)):this._render(t,c[r],n,{svg:!1,parent:!1}),e.appendChild(t.firstChild),++r}else a[t]&&!c[r]?(e.removeChild(d[a[t].attrs.key]),++t,++r):(++t,++r);break}"object"==typeof t.children[i]?(void 0===e.childNodes[i]?e.appendChild(document.createElement(t.children[i].tag)):e.childNodes[i].nodeType!==document.ELEMENT_NODE&&e.insertBefore(document.createElement(t.children[i].tag),e.childNodes[i]),this._update(e.childNodes[i],t.children[i],r.children[i],n)):void 0===e.childNodes[i]?e.appendChild(document.createTextNode(t.children[i])):e.childNodes[i].nodeType!==document.TEXT_NODE?e.insertBefore(document.createTextNode(t.children[i]),e.childNodes[i]):e.childNodes[i].nodeValue!==t.children[i]&&(e.childNodes[i].nodeValue=t.children[i])}else e.removeChild(e.childNodes[i--]);this.removeChildren(n,!1)}removeChildren(e,t){for(let r=0;r<e.__children.length;++r)!t&&this.components[e.__children[r]].__dom.parentNode||(this.removeChildren(this.components[e.__children[r]],!0),delete this.components[e.__children[r]],e.__children.splice(r--,1))}setDomAttribute(e,t,r,n){switch(t){case"key":case"":break;case"ref":r.dom=e;break;case"style":for(const t in r)e.style.setProperty(t,r[t]);break;default:r!==n&&e.setAttribute(t,r)}}removeDomAttribute(e,t){switch(t){case"key":case"ref":case"":case"style":break;default:e.removeAttribute(t)}}processWork(){for(let e=0;e<this.work.length;++e)this.currentComponent.__hookId=this.work[e].hookId,this.work[e].cb();this.work=[]}}},800:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});var n=r(81),o=r.n(n),s=r(645),i=r.n(s)()(o());i.push([e.id,".ui-menu{position:absolute;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#ffffff;z-index:1}.ui-menu>:first-child{margin-bottom:20px}.ui-menu .section{display:flex;justify-content:center;flex-direction:column}.ui-menu .id{text-align:center}body{margin:0;padding:0;outline:0;font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Ubuntu,roboto,noto,arial,sans-serif;-webkit-tap-highlight-color:rgba(0,0,0,0)}canvas{display:block;background-color:#000000;image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);n&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},790:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n=r.p+"images/c9da92828d44947901915f28fd1ca1c4.png"},620:(e,t,r)=>{r.r(t),r.d(t,{default:()=>w});var n=r(379),o=r.n(n),s=r(795),i=r.n(s),a=r(569),c=r.n(a),d=r(565),l=r.n(d),u=r(216),h=r.n(u),p=r(589),f=r.n(p),m=r(800),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=h();var y=o()(m.default,v);if(!m.default.locals||e.hot.invalidate){var g=!m.default.locals,_=g?m:m.default.locals;e.hot.accept(800,(t=>{m=r(800),function(e,t,r){if(!e&&t||e&&!t)return!1;var n;for(n in e)if((!r||"default"!==n)&&e[n]!==t[n])return!1;for(n in t)if(!(r&&"default"===n||e[n]))return!1;return!0}(_,g?m:m.default.locals,g)?(_=g?m:m.default.locals,y(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){y()}));const w=m.default&&m.default.locals?m.default.locals:void 0},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],d=n.base?c[0]+n.base:c[0],l=s[d]||0,u="".concat(d," ").concat(l);s[d]=l+1;var h=r(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=o(p,n);n.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var s=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=r(s[i]);t[a].references--}for(var c=n(e,o),d=0;d<s.length;d++){var l=r(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var s=r.sourceMap;s&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},764:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Camera=void 0;const n=r(607);t.Camera=class{constructor(e,t,r,o){this.x=e,this.y=t,this.w=r,this.h=o,this.scaledW=0,this.scaledH=0,n.game.signals.onResize.add(((e,t)=>{this.onResize(e,t)}))}convertX(e){return e/this.scaledW*this.w}convertY(e){return e/this.scaledH*this.h}onResize(e,t){e/t>this.w/this.h?e=t*(16/9):t=e*(9/16),this.scaledW=e,this.scaledH=t,n.game.canvas.width=this.w,n.game.canvas.height=this.h,n.game.canvas.style.width=this.scaledW+"px",n.game.canvas.style.height=this.scaledH+"px"}}},724:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=t.INPUT_KEY=void 0;const n=r(607);var o;!function(e){e[e.W=0]="W",e[e.S=1]="S"}(o=t.INPUT_KEY||(t.INPUT_KEY={})),t.Input=class{constructor(){this.mouse={x:0,y:0,pressed:!1},this.keyToId={KeyW:o.W,KeyS:o.S},this.keys=[],window.addEventListener("keydown",(e=>{this.onKeyDown(e)})),window.addEventListener("keyup",(e=>{this.onKeyUp(e)})),n.game.canvas.addEventListener("mousemove",(e=>{this.onMouseMove(e)})),n.game.canvas.addEventListener("mousedown",(e=>{this.onMouseDown(e)})),n.game.canvas.addEventListener("mouseup",(e=>{this.onMouseUp(e)})),n.game.canvas.addEventListener("mouseleave",(e=>{this.onMouseLeave(e)})),n.game.canvas.addEventListener("touchmove",(e=>{this.onTouchMove(e)})),n.game.canvas.addEventListener("touchstart",(e=>{this.onTouchStart(e)})),n.game.canvas.addEventListener("touchend",(e=>{this.onTouchEnd(e)})),n.game.canvas.addEventListener("touchcancel",(e=>{this.onTouchCancel(e)}))}tick(){}getKey(e){return!!this.keys[e]}onKeyDown(e){const t=this.keyToId[e.code];void 0!==t&&(this.keys[t]=!0)}onKeyUp(e){const t=this.keyToId[e.code];void 0!==t&&(this.keys[t]=!1)}onMouseMove(e){this.mouse.x=n.game.camera.convertX(e.x),this.mouse.y=n.game.camera.convertY(e.y)}onMouseDown(e){this.mouse.pressed=!0,this.mouse.x=n.game.camera.convertX(e.x),this.mouse.y=n.game.camera.convertY(e.y)}onMouseUp(e){this.mouse.pressed=!1}onMouseLeave(e){this.mouse.pressed=!1}onTouchMove(e){e.preventDefault(),this.mouse.x=n.game.camera.convertX(e.touches[0].clientX),this.mouse.y=n.game.camera.convertY(e.touches[0].clientY)}onTouchStart(e){e.preventDefault();const t=n.game.canvas.getBoundingClientRect();this.mouse.x=n.game.camera.convertX(e.touches[0].clientX-t.left),this.mouse.y=n.game.camera.convertY(e.touches[0].clientY-t.top),this.mouse.pressed=!0}onTouchEnd(e){e.preventDefault(),this.mouse.pressed=!1}onTouchCancel(e){e.preventDefault(),this.mouse.pressed=!1}}},533:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Network=void 0;const n=r(876),o=r(39);t.Network=class{constructor(){this.ws=new WebSocket("wss://"+window.location.hostname+":8888"),this.id="",this.ws.binaryType="arraybuffer",this.ws.onopen=e=>{console.log("open"),this.send(n.PacketInit.packClient())},this.ws.onmessage=e=>{o.PacketHandler.handle(new Int8Array(e.data))},this.ws.onclose=e=>{console.log("close")},this.ws.onerror=e=>{console.log("error")}}send(e){this.isOnline()&&this.ws.send(e)}stop(){this.ws.close(1e3)}isOnline(){return this.ws.readyState!==this.ws.CLOSED}isStarted(){return this.ws&&this.ws.readyState===this.ws.OPEN}}},39:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketHandler=void 0;const n=r(607),o=r(290),s=r(451),i=r(681),a=r(876),c=r(273),d=r(103),l=r(184),u=r(849);t.PacketHandler=class{static handle(e){switch(s.Packet.from(e).id){case s.PACKET_ID.INIT:!function(e){const t=a.PacketInit.unpackClient(e);n.game.network.id=t.id,n.game.ui.menuHandler()}(e);break;case s.PACKET_ID.CONNECT:!function(e){const t=i.PacketConnect.unpackClient(e);if(t.success)switch(n.game.ui.menuState=u.MENU_STATE.NONE,n.game.ui.appHandler(),t.paddleType){case l.PADDLE_TYPE.LEFT:n.game.sandbox.paddleLeft.isControlled=!0;break;case l.PADDLE_TYPE.RIGHT:n.game.sandbox.paddleRight.isControlled=!0}}(e);break;case s.PACKET_ID.START_MATCH:!function(e){c.PacketStartMatch.unpackClient(e),n.game.sandbox.running=!0}(e);break;case s.PACKET_ID.WORLD_UPDATE:!function(e){const t=d.PacketWorldUpdate.unpackClient(e);n.game.sandbox.paddleLeft.pos=new o.Vec2(n.game.sandbox.paddleLeft.pos.x,t.paddleLeftY),n.game.sandbox.paddleRight.pos=new o.Vec2(n.game.sandbox.paddleRight.pos.x,t.paddleRightY),n.game.sandbox.ball.pos=t.ballPos,n.game.sandbox.ball.vel=t.ballVel}(e)}}}},330:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Resources=void 0;const n={DEV_TEXTURE:r(790).default};t.Resources=class{constructor(){this.SPRITES={},this.URL_SPRITES={}}loadSprites(){return new Promise(((e,t)=>{const r=Object.keys(n).length;let o=0;for(const t in n){const s=new Image;s.onload=()=>{++o===r&&e(0)},s.src=n[t],this.SPRITES[t]=s,this.URL_SPRITES[t]=n[t]}}))}}},82:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Ball=void 0;const n=r(607),o=r(996),s=r(290),i=r(27);class a extends i.Entity{constructor(e,t){super(e,t),this.vel=s.Vec2.zero()}tick(){super.tick(),this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.pos.x<0?(this.vel.x=-this.vel.x,this.pos.x=0):this.pos.x>n.game.sandbox.WIDTH-this.size.x&&(this.vel.x=-this.vel.x,this.pos.x=n.game.sandbox.WIDTH-this.size.x),this.pos.y<0?(this.vel.y=-this.vel.y,this.pos.y=0):this.pos.y>n.game.sandbox.HEIGHT-this.size.y&&(this.vel.y=-this.vel.y,this.pos.y=n.game.sandbox.HEIGHT-this.size.y),(o.Physics.box_box(n.game.sandbox.paddleLeft.pos,n.game.sandbox.paddleLeft.size,this.pos,this.size)||o.Physics.box_box(n.game.sandbox.paddleRight.pos,n.game.sandbox.paddleRight.size,this.pos,this.size))&&(this.vel.x=-this.vel.x)}render(e){n.game.ctx.fillRect(this.getX(e),this.getY(e),this.size.x,this.size.y)}}t.Ball=a},27:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Entity=void 0;const n=r(541);t.Entity=class{constructor(e,t){this.pos=e,this.size=t,this.oldPos=e}tick(){this.oldPos=this.pos.clone()}getX(e){return n.Maths.interp(this.oldPos.x,this.pos.x,e)}getY(e){return n.Maths.interp(this.oldPos.y,this.pos.y,e)}}},608:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Paddle=void 0;const n=r(607),o=r(541),s=r(290),i=r(8),a=r(724),c=r(27);class d extends c.Entity{constructor(e,t){super(e,t),this.isControlled=!1}tick(){super.tick(),this.isControlled&&(n.game.input.mouse.pressed?n.game.input.mouse.y<n.game.sandbox.HEIGHT/2?this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,-10))):n.game.input.mouse.y>n.game.sandbox.HEIGHT/2&&this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,10))):n.game.input.getKey(a.INPUT_KEY.W)?this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,-10))):n.game.input.getKey(a.INPUT_KEY.S)&&this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,10))),this.pos.y=o.Maths.clamp(this.pos.y,0,n.game.sandbox.HEIGHT-this.size.y))}moveTo(e){this.pos=o.Maths.towards(this.pos,e,10),n.game.network.send(i.PacketPaddleInput.packClient(this.pos.y))}render(e){n.game.ctx.fillRect(this.getX(e),this.getY(e),this.size.x,this.size.y)}}t.Paddle=d},452:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Sandbox=void 0;const n=r(607),o=r(290),s=r(82),i=r(608);t.Sandbox=class{constructor(){this.WIDTH=1280,this.HEIGHT=720,this.running=!1,this.paddleLeft=new i.Paddle(new o.Vec2(20,this.HEIGHT/2-25),new o.Vec2(10,50)),this.paddleRight=new i.Paddle(new o.Vec2(this.WIDTH-20-10,this.HEIGHT/2-25),new o.Vec2(10,50)),this.ball=new s.Ball(new o.Vec2(this.WIDTH/2-5,this.HEIGHT/2-5),new o.Vec2(10,10)),this.ball.vel=new o.Vec2(-10,-10)}tick(){n.game.sandbox.running&&(this.paddleLeft.tick(),this.paddleRight.tick(),this.ball.tick())}render(e){n.game.ctx.fillStyle="#ffffff",this.paddleLeft.render(e),this.paddleRight.render(e),this.ball.render(e)}}},188:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const n=r(133),o=r(764),s=r(724),i=r(330),a=r(533),c=r(849),d=r(452);t.Game=class{constructor(){this.tps=1e3/30,this.currentTime=0,this.accumulator=0,this.signals={onResize:new n.Signal},this.canvas=document.createElement("canvas");const e=this.canvas.getContext("2d");if(!e)throw Error("HTML Canvas is not supported in the browser.");this.ctx=e,this.addEventListeners()}run(){this.input=new s.Input,this.camera=new o.Camera(0,0,1280,720),this.resources=new i.Resources,this.network=new a.Network,this.ui=new c.UI,this.sandbox=new d.Sandbox,this.signals.onResize.dispatch(window.innerWidth,window.innerHeight),Promise.resolve().then((()=>this.resources.loadSprites())).then((()=>{this.ui.init()})).then((()=>{document.body.appendChild(this.canvas)})).then((()=>{this.loop(0)}))}loop(e){window.requestAnimationFrame((e=>{this.loop(e)}));let t=e-this.currentTime;for(t>this.tps&&(t=this.tps),this.currentTime=e,this.accumulator+=t;this.accumulator>=this.tps;)this.tick(),this.accumulator-=this.tps;this.render(this.accumulator/this.tps)}tick(){this.sandbox.tick(),this.input.tick()}render(e){this.ctx.clearRect(0,0,this.camera.w,this.camera.h),this.sandbox.render(e)}addEventListeners(){window.addEventListener("resize",(()=>{this.signals.onResize.dispatch(window.innerWidth,window.innerHeight)}))}}},825:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const n=r(989),o=r(607),s=r(849),i=r(655),a=r(361),c=r(21);t.App=function(){const[e,t]=n.Soda.state(0);return o.game.ui.appHandler=t,n.Soda.createElement("div",null,o.game.ui.menuState===s.MENU_STATE.NONE?"":n.Soda.createElement(c.Menu,null),o.game.ui.ingameState===s.INGAME_STATE.NONE?"":n.Soda.createElement(a.Ingame,null),o.game.ui.hudState===s.HUD_STATE.NONE?"":n.Soda.createElement(i.HUD,null))}},655:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HUD=void 0;const n=r(989),o=r(607);t.HUD=function(){const[e,t]=n.Soda.state(0);return o.game.ui.hudHandler=t,n.Soda.createElement("div",null,"Hello world")}},361:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Ingame=void 0;const n=r(989),o=r(607);t.Ingame=function(){const[e,t]=n.Soda.state(0);return o.game.ui.ingameHandler=t,n.Soda.createElement("div",null,"Hello world")}},21:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;const n=r(989),o=r(607),s=r(681);t.Menu=function(){const[e,t]=n.Soda.state(0);o.game.ui.menuHandler=t;const r=n.Soda.ref();return n.Soda.createElement("div",{class:"ui-menu"},n.Soda.createElement("div",{class:"title"},"Pong Online"),n.Soda.createElement("div",{class:"section"},n.Soda.createElement("input",{ref:r,type:"text",placeholder:"Enter id..."}),n.Soda.createElement("button",{onclick:()=>{const e=r.dom.value;5===e.length&&o.game.network.send(s.PacketConnect.packClient(e))}},"Join"),n.Soda.createElement("div",{class:"id"},"Your id: ",o.game.network.id)))}},849:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UI=t.HUD_STATE=t.INGAME_STATE=t.MENU_STATE=void 0;const n=r(989),o=r(825);var s,i,a;!function(e){e[e.NONE=-1]="NONE",e[e.MAIN=0]="MAIN"}(s=t.MENU_STATE||(t.MENU_STATE={})),function(e){e[e.NONE=-1]="NONE",e[e.MAIN=0]="MAIN"}(i=t.INGAME_STATE||(t.INGAME_STATE={})),function(e){e[e.NONE=-1]="NONE",e[e.MAIN=0]="MAIN"}(a=t.HUD_STATE||(t.HUD_STATE={})),t.UI=class{constructor(){this.menuState=s.MAIN,this.ingameState=i.NONE,this.hudState=a.NONE}init(){n.Soda.render(n.Soda.createElement(o.App,null),document.body)}}},607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.game=void 0;const n=r(188);r(620),t.game=new n.Game,window.onload=()=>{t.game.run()}},541:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Maths=void 0;const n=r(290);t.Maths=class{static clamp(e,t,r){return e<t?t:e>r?r:e}static interp(e,t,r){return(t-e)*r+e}static towards(e,t,r){const o=t.x-e.x,s=t.y-e.y,i=Math.sqrt(o*o+s*s);return i<=r||0===i?t:new n.Vec2(e.x+o/i*r,e.y+s/i*r)}}},996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Physics=void 0,t.Physics=class{static box_box(e,t,r,n){return e.x<r.x+n.x&&e.x+t.x>r.x&&e.y<r.y+n.y&&e.y+t.y>r.y}}},133:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Signal=void 0,t.Signal=class{constructor(){this.listeners=[]}add(e){this.listeners.push(e)}remove(e){for(let t=0;t<this.listeners.length;++t)if(this.listeners[t]===e)return void this.listeners.splice(t,1)}dispatch(...e){for(let t=0;t<this.listeners.length;++t)this.listeners[t](...e)}clear(){this.listeners=[]}}},290:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Vec2=void 0;class r{constructor(e,t){this.x=e,this.y=t}clone(){return new r(this.x,this.y)}static add(e,t){return new r(e.x+t.x,e.y+t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static zero(){return new r(0,0)}static one(){return new r(1,1)}}t.Vec2=r},451:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Packet=t.PACKET_ID=void 0;const n=r(290);var o;!function(e){e[e.NONE=-1]="NONE",e[e.INIT=0]="INIT",e[e.CONNECT=1]="CONNECT",e[e.DISCONNECT=2]="DISCONNECT",e[e.PADDLE_INPUT=3]="PADDLE_INPUT",e[e.WORLD_UPDATE=4]="WORLD_UPDATE",e[e.SCORE_UPDATE=5]="SCORE_UPDATE",e[e.START_MATCH=6]="START_MATCH"}(o=t.PACKET_ID||(t.PACKET_ID={}));class s{constructor(){this.writeData=new Int8Array(0),this.readData=new Int8Array(0),this.pos=0,this.id=o.NONE}static from(e){const t=new s;return t.readData=new Int8Array(e),t.id=t.readInt8(),t}static create(e){const t=new s;return t.writeInt8(e),t.id=e,t}writeInt8(e){this.writeData=new Int8Array([...this.writeData,e])}writeInt16(e){const t=new Int8Array(new Int16Array([e]).buffer);this.writeData=new Int8Array([...this.writeData,...t])}writeInt32(e){const t=new Int8Array(new Int32Array([e]).buffer);this.writeData=new Int8Array([...this.writeData,...t])}writeFloat32(e){const t=new Int8Array(new Float32Array([e]).buffer);this.writeData=new Int8Array([...this.writeData,...t])}writeBool(e){this.writeData=new Int8Array([...this.writeData,e?1:0])}writeString(e){const t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r));this.writeData=new Int8Array([...this.writeData,...new Int8Array(new Int32Array(t).buffer)])}writeVec2(e){this.writeFloat32(e.x),this.writeFloat32(e.y)}readInt8(){const e=this.readData[this.pos];return this.pos+=1,e}readInt16(){const e=new Int16Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+2)]).buffer)[0];return this.pos+=2,e}readInt32(){const e=new Int32Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+4)]).buffer)[0];return this.pos+=4,e}readFloat32(){const e=new Float32Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+4)]).buffer)[0];return this.pos+=4,e}readBool(){const e=this.readData[this.pos];return this.pos+=1,!!e}readString(e){const t=new Int32Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+4*e)]).buffer);return this.pos+=4*e,String.fromCharCode(...t)}readVec2(){return new n.Vec2(this.readFloat32(),this.readFloat32())}}t.Packet=s},681:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketConnect=void 0;const n=r(451);t.PacketConnect=class{static packClient(e){const t=n.Packet.create(n.PACKET_ID.CONNECT);return t.writeString(e),t.writeData}static unpackServer(e){return{id:n.Packet.from(e).readString(5)}}static packServer(e,t){const r=n.Packet.create(n.PACKET_ID.CONNECT);return r.writeBool(e),r.writeInt8(t),r.writeData}static unpackClient(e){const t=n.Packet.from(e);return{success:t.readBool(),paddleType:t.readInt8()}}}},876:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketInit=void 0;const n=r(451);t.PacketInit=class{static packClient(){return n.Packet.create(n.PACKET_ID.INIT).writeData}static unpackServer(e){return n.Packet.from(e),{}}static packServer(e){const t=n.Packet.create(n.PACKET_ID.INIT);return t.writeString(e),t.writeData}static unpackClient(e){return{id:n.Packet.from(e).readString(5)}}}},8:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketPaddleInput=void 0;const n=r(451);t.PacketPaddleInput=class{static packClient(e){const t=n.Packet.create(n.PACKET_ID.PADDLE_INPUT);return t.writeFloat32(e),t.writeData}static unpackServer(e){return{posY:n.Packet.from(e).readFloat32()}}}},273:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketStartMatch=void 0;const n=r(451);t.PacketStartMatch=class{static packServer(){return n.Packet.create(n.PACKET_ID.START_MATCH).writeData}static unpackClient(e){return n.Packet.from(e),{}}}},103:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketWorldUpdate=void 0;const n=r(451);t.PacketWorldUpdate=class{static packServer(e,t,r,o){const s=n.Packet.create(n.PACKET_ID.WORLD_UPDATE);return s.writeFloat32(e),s.writeFloat32(t),s.writeVec2(r),s.writeVec2(o),s.writeData}static unpackClient(e){const t=n.Packet.from(e);return{paddleLeftY:t.readFloat32(),paddleRightY:t.readFloat32(),ballPos:t.readVec2(),ballVel:t.readVec2()}}}},184:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.PADDLE_TYPE=void 0,(r=t.PADDLE_TYPE||(t.PADDLE_TYPE={}))[r.NONE=0]="NONE",r[r.LEFT=1]="LEFT",r[r.RIGHT=2]="RIGHT"}},c={};function d(e){var t=c[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var r=c[e]={id:e,exports:{}};try{var n={id:e,module:r,factory:a[e],require:d};d.i.forEach((function(e){e(n)})),r=n.module,n.factory.call(r.exports,r,r.exports,n.require)}catch(e){throw r.error=e,e}return r.exports}d.m=a,d.c=c,d.i=[],d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var r in t)d.o(t,r)&&!d.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>{},d.hmrF=()=>"main."+d.h()+".hot-update.json",d.h=()=>"3a4278485d1821a0c630",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="frontend:",d.l=(r,n,o,s)=>{if(e[r])e[r].push(n);else{var i,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+o),i.src=r),e[r]=[n];var h=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),a&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,r,n,o={},s=d.c,i=[],a=[],c="idle";function l(e){c=e;for(var t=[],r=0;r<a.length;r++)t[r]=a[r].call(null,e);return Promise.all(t)}function u(e){if(0===t.length)return e();var r=t;return t=[],Promise.all(r).then((function(){return u(e)}))}function h(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check").then(d.hmrM).then((function(n){return n?l("prepare").then((function(){var o=[];return t=[],r=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,t){return d.hmrC[t](n.c,n.r,n.m,e,r,o),e}),[])).then((function(){return u((function(){return e?f(e):l("ready").then((function(){return o}))}))}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):f(e)}function f(e){e=e||{},m();var t=r.map((function(t){return t(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var s=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,a=l("apply"),c=function(e){i||(i=e)},d=[];return t.forEach((function(e){if(e.apply){var t=e.apply(c);if(t)for(var r=0;r<t.length;r++)d.push(t[r])}})),Promise.all([s,a]).then((function(){return i?l("fail").then((function(){throw i})):n?f(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):l("idle").then((function(){return d}))}))}function m(){if(n)return r||(r=[]),Object.keys(d.hmrI).forEach((function(e){n.forEach((function(t){d.hmrI[e](t,r)}))})),n=void 0,!0}d.hmrD=o,d.i.push((function(f){var m,v,y,g,_=f.module,w=function(r,n){var o=s[n];if(!o)return r;var a=function(t){if(o.hot.active){if(s[t]){var a=s[t].parents;-1===a.indexOf(n)&&a.push(n)}else i=[n],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+n),i=[];return r(t)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(t){r[e]=t}}};for(var h in r)Object.prototype.hasOwnProperty.call(r,h)&&"e"!==h&&Object.defineProperty(a,h,d(h));return a.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),t.push(e),u((function(){return l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(r.e(e))},a}(f.require,f.id);_.hot=(m=f.id,v=_,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){i=v.parents.slice(),e=y?void 0:m,d(m)},active:!0,accept:function(e,t,r){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)g._acceptedDependencies[e[n]]=t||function(){},g._acceptedErrorHandlers[e[n]]=r;else g._acceptedDependencies[e]=t||function(){},g._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._declinedDependencies[e[t]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=g._disposeHandlers.indexOf(e);t>=0&&g._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,r)})),l("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:h,apply:p,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:o[m]},e=void 0,g),_.parents=i,_.children=[],i=[],f.require=w})),d.hmrC={},d.hmrI={}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),r=(e,t,r,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=s=>{if(o.onerror=o.onload=null,"load"===s.type)r();else{var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),n(c)}},o.href=t,document.head.appendChild(o),o},n=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=(i=r[n]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){var i;if((o=(i=s[n]).getAttribute("data-href"))===e||o===t)return i}},o=[],s=[],i=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<s.length;e++)s[e].rel="stylesheet";s.length=0}}),d.hmrC.miniCss=(e,t,a,c,l,u)=>{l.push(i),e.forEach((e=>{var t=d.miniCssF(e),i=d.p+t,a=n(t,i);a&&c.push(new Promise(((t,n)=>{var c=r(e,i,(()=>{c.as="style",c.rel="preload",t()}),n);o.push(a),s.push(c)})))}))},(()=>{var e,t,r,n,o=d.hmrS_jsonp=d.hmrS_jsonp||{179:0},s={};function i(e){return new Promise(((t,r)=>{s[e]=t;var n=d.p+d.hu(e),o=new Error;d.l(n,(t=>{if(s[e]){s[e]=void 0;var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r(o)}}))}))}function a(s){function i(e){for(var t=[e],r={},n=t.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),s=o.id,i=o.chain,c=d.c[s];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],h=d.c[u];if(h){if(h.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([u]),moduleId:s,parentId:u};-1===t.indexOf(u)&&(h.hot._acceptedDependencies[s]?(r[u]||(r[u]=[]),a(r[u],[s])):(delete r[u],t.push(u),n.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];-1===e.indexOf(n)&&e.push(n)}}d.f&&delete d.f.jsonpHmr,e=void 0;var c={},l=[],u={},h=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(d.o(t,p)){var f,m=t[p],v=!1,y=!1,g=!1,_="";switch((f=m?i(p):{type:"disposed",moduleId:p}).chain&&(_="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":s.onDeclined&&s.onDeclined(f),s.ignoreDeclined||(v=new Error("Aborted because of self decline: "+f.moduleId+_));break;case"declined":s.onDeclined&&s.onDeclined(f),s.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+_));break;case"unaccepted":s.onUnaccepted&&s.onUnaccepted(f),s.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+_));break;case"accepted":s.onAccepted&&s.onAccepted(f),y=!0;break;case"disposed":s.onDisposed&&s.onDisposed(f),g=!0;break;default:throw new Error("Unexception type "+f.type)}if(v)return{error:v};if(y)for(p in u[p]=m,a(l,f.outdatedModules),f.outdatedDependencies)d.o(f.outdatedDependencies,p)&&(c[p]||(c[p]=[]),a(c[p],f.outdatedDependencies[p]));g&&(a(l,[f.moduleId]),u[p]=h)}t=void 0;for(var w,E=[],b=0;b<l.length;b++){var k=l[b],I=d.c[k];I&&(I.hot._selfAccepted||I.hot._main)&&u[k]!==h&&!I.hot._selfInvalidated&&E.push({module:k,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;r.forEach((function(e){delete o[e]})),r=void 0;for(var t,n=l.slice();n.length>0;){var s=n.pop(),i=d.c[s];if(i){var a={},u=i.hot._disposeHandlers;for(b=0;b<u.length;b++)u[b].call(null,a);for(d.hmrD[s]=a,i.hot.active=!1,delete d.c[s],delete c[s],b=0;b<i.children.length;b++){var h=d.c[i.children[b]];h&&(e=h.parents.indexOf(s))>=0&&h.parents.splice(e,1)}}}for(var p in c)if(d.o(c,p)&&(i=d.c[p]))for(w=c[p],b=0;b<w.length;b++)t=w[b],(e=i.children.indexOf(t))>=0&&i.children.splice(e,1)},apply:function(e){for(var t in u)d.o(u,t)&&(d.m[t]=u[t]);for(var r=0;r<n.length;r++)n[r](d);for(var o in c)if(d.o(c,o)){var i=d.c[o];if(i){w=c[o];for(var a=[],h=[],p=[],f=0;f<w.length;f++){var m=w[f],v=i.hot._acceptedDependencies[m],y=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==a.indexOf(v))continue;a.push(v),h.push(y),p.push(m)}}for(var g=0;g<a.length;g++)try{a[g].call(null,w)}catch(t){if("function"==typeof h[g])try{h[g](t,{moduleId:o,dependencyId:p[g]})}catch(r){s.onErrored&&s.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[g],error:r,originalError:t}),s.ignoreErrored||(e(r),e(t))}else s.onErrored&&s.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[g],error:t}),s.ignoreErrored||e(t)}}}for(var _=0;_<E.length;_++){var b=E[_],k=b.module;try{b.require(k)}catch(t){if("function"==typeof b.errorHandler)try{b.errorHandler(t,{moduleId:k,module:d.c[k]})}catch(r){s.onErrored&&s.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:r,originalError:t}),s.ignoreErrored||(e(r),e(t))}else s.onErrored&&s.onErrored({type:"self-accept-errored",moduleId:k,error:t}),s.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdatefrontend=(e,r,o)=>{for(var i in r)d.o(r,i)&&(t[i]=r[i]);o&&n.push(o),s[e]&&(s[e](),s[e]=void 0)},d.hmrI.jsonp=function(e,o){t||(t={},n=[],r=[],o.push(a)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(s,c,l,u,h,p){h.push(a),e={},r=c,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),n=[],s.forEach((function(t){d.o(o,t)&&void 0!==o[t]&&(u.push(i(t)),e[t]=!0)})),d.f&&(d.f.jsonpHmr=function(t,r){e&&!d.o(e,t)&&d.o(o,t)&&void 0!==o[t]&&(r.push(i(t)),e[t]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),d(607)})();