(()=>{"use strict";var e,t,n,r,o,s,i,a={989:(e,t,n)=>{n.r(t),n.d(t,{Soda:()=>r});const r=new class{constructor(){this.components={},this.id=0,this.work=[]}state(e,t){const n=this.currentComponent;n.__hooks[n.__hookId]=n.__hooks[n.__hookId]||e;const r=n.__hookId;return[n.__hooks[n.__hookId++],(e,o)=>{const s=n.__hooks[r];return n.__hooks[r]=e,o||t&&t(s,e)||n.update(),e}]}effect(e,t){var n;const r=this.currentComponent;if(!r.__dom)return void this.work.push({cb:()=>{this.effect(e,t)},hookId:r.__hookId++});const o=r.__hooks[r.__hookId],s=!(null==o?void 0:o.deps)||!t.every(((e,t)=>e===o.deps[t]));t&&!s||("function"==typeof(null===(n=r.__hooks[r.__hookId])||void 0===n?void 0:n.cleanup)&&r.__hooks[r.__hookId].cleanup(),r.__hooks[r.__hookId]={},r.__hooks[r.__hookId].deps=t,r.__hooks[r.__hookId].cleanup=e()),++r.__hookId}ref(){return this.state({dom:void 0})[0]}createElement(e,t,...n){return{tag:e,attrs:t,children:n}}render(e,t){if("function"==typeof e.tag){const n={attrs:e.attrs,update:()=>{if("function"==typeof e.tag){const t=this.currentComponent;this.currentComponent=n,n.__hookId=0;const r=e.tag(n.attrs);this._update(n.__dom,r,n.__element,n),n.__element=r,this.currentComponent=t}},__dom:void 0,__element:void 0,__children:[],__hooks:[],__hookId:0},r=this.currentComponent;this.currentComponent=n;const o=this.id++;return this.components[o]=n,this._render(t,n.__element=e.tag(n.attrs),n,{svg:!1,parent:!0}),this.processWork(),this.currentComponent=r,o}}_render(e,t,n,r){if(Array.isArray(t)){for(let o=0;o<t.length;++o)"function"==typeof t[o].tag?n.__children.push(this.render(t[o],e)):this._render(e,t[o],n,r);return}let o;"svg"===t.tag||r.svg?(o=document.createElementNS("http://www.w3.org/2000/svg",t.tag),r.svg=!0):o=document.createElement(t.tag),r.parent&&(n.__dom=o,r.parent=!1);for(let e in t.attrs)e.startsWith("on")?o.addEventListener(e.substring(2).toLowerCase(),t.attrs[e],{capture:!0}):this.setDomAttribute(o,e,t.attrs[e],void 0);for(let e=0;e<t.children.length;++e)"function"==typeof t.children[e].tag?n.__children.push(this.render(t.children[e],o)):"object"==typeof t.children[e]?this._render(o,t.children[e],n,r):o.appendChild(document.createTextNode(t.children[e]));e.appendChild(o)}_update(e,t,n,r){var o,s;if(e.tagName.toLowerCase()!==t.tag){const n=e.parentNode;null==n||n.removeChild(e),e=document.createElement(t.tag),null==n||n.appendChild(e)}const i={};for(let r in null==n?void 0:n.attrs)r.startsWith("on")?(n.attrs&&n.attrs[r]&&e.removeEventListener(r.substring(2).toLowerCase(),n.attrs[r],{capture:!0}),t.attrs&&t.attrs[r]&&(i[r]=!0,e.addEventListener(r.substring(2).toLowerCase(),t.attrs[r],{capture:!0}))):(null==t?void 0:t.attrs[r])?(i[r]=!0,this.setDomAttribute(e,r,t.attrs[r],n.attrs[r])):this.removeDomAttribute(e,r);for(let n in null==t?void 0:t.attrs)i[n]||(n.startsWith("on")?t.attrs&&t.attrs[n]&&e.addEventListener(n.substring(2).toLowerCase(),t.attrs[n],{capture:!0}):this.setDomAttribute(e,n,t.attrs[n],void 0));for(let i=0;i<t.children.length||i<e.childNodes.length;++i)if(void 0!==t.children[i])if("function"==typeof t.children[i].tag){const n=document.createElement("div");r.__children.push(this.render(t.children[i],n)),void 0===e.childNodes[i]?e.appendChild(n.firstChild):e.replaceChild(n.firstChild,e.childNodes[i])}else{if(Array.isArray(t.children[i])){const a=n.children[i],c=t.children[i];let d={};for(let t=0;t<a.length;++t)d[a[t].attrs.key]=e.childNodes[t];for(let t=0,n=0;t<a.length||n<c.length;)if((null===(o=a[t])||void 0===o?void 0:o.attrs.key)===(null===(s=c[n])||void 0===s?void 0:s.attrs.key)){if("function"==typeof c[n].tag)this.components[r.__children[t]].attrs=c[n].attrs,this.components[r.__children[t]].update();else{let e=d[a[t].attrs.key];this._update(e,c[n],a[t],r)}++t,++n}else if(a[t]&&c[n]){let o=d[a[t].attrs.key];const s=document.createElement("div");"function"==typeof c[n].tag?r.__children.push(this.render(c[n],s)):this._render(s,c[n],r,{svg:!1,parent:!1}),e.insertBefore(s.firstChild,o),++n}else if(!a[t]&&c[n]){const t=document.createElement("div");"function"==typeof c[n].tag?r.__children.push(this.render(c[n],t)):this._render(t,c[n],r,{svg:!1,parent:!1}),e.appendChild(t.firstChild),++n}else a[t]&&!c[n]?(e.removeChild(d[a[t].attrs.key]),++t,++n):(++t,++n);break}"object"==typeof t.children[i]?(void 0===e.childNodes[i]?e.appendChild(document.createElement(t.children[i].tag)):e.childNodes[i].nodeType!==document.ELEMENT_NODE&&e.insertBefore(document.createElement(t.children[i].tag),e.childNodes[i]),this._update(e.childNodes[i],t.children[i],n.children[i],r)):void 0===e.childNodes[i]?e.appendChild(document.createTextNode(t.children[i])):e.childNodes[i].nodeType!==document.TEXT_NODE?e.insertBefore(document.createTextNode(t.children[i]),e.childNodes[i]):e.childNodes[i].nodeValue!==t.children[i]&&(e.childNodes[i].nodeValue=t.children[i])}else e.removeChild(e.childNodes[i--]);this.removeChildren(r,!1)}removeChildren(e,t){for(let n=0;n<e.__children.length;++n)!t&&this.components[e.__children[n]].__dom.parentNode||(this.removeChildren(this.components[e.__children[n]],!0),delete this.components[e.__children[n]],e.__children.splice(n--,1))}setDomAttribute(e,t,n,r){switch(t){case"key":case"":break;case"ref":n.dom=e;break;case"style":for(const t in n)e.style.setProperty(t,n[t]);break;default:n!==r&&e.setAttribute(t,n)}}removeDomAttribute(e,t){switch(t){case"key":case"ref":case"":case"style":break;default:e.removeAttribute(t)}}processWork(){for(let e=0;e<this.work.length;++e)this.currentComponent.__hookId=this.work[e].hookId,this.work[e].cb();this.work=[]}}},800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(81),o=n.n(r),s=n(645),i=n.n(s)()(o());i.push([e.id,".ui-menu{position:absolute;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;flex-direction:column;background-color:#ffffff;z-index:1}.ui-menu>:first-child{margin-bottom:20px}.ui-menu .section{display:flex;justify-content:center;flex-direction:column}.ui-menu .id{text-align:center}body{margin:0;padding:0;outline:0;font-family:-apple-system,BlinkMacSystemFont,avenir next,avenir,segoe ui,helvetica neue,helvetica,Ubuntu,roboto,noto,arial,sans-serif;-webkit-tap-highlight-color:rgba(0,0,0,0)}canvas{display:block;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background-color:#000000;image-rendering:-moz-crisp-edges;image-rendering:-webkit-crisp-edges;image-rendering:pixelated;image-rendering:crisp-edges}\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},790:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});const r=n.p+"images/c9da92828d44947901915f28fd1ca1c4.png"},620:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(379),o=n.n(r),s=n(795),i=n.n(s),a=n(569),c=n.n(a),d=n(565),l=n.n(d),u=n(216),h=n.n(u),p=n(589),f=n.n(p),m=n(800),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=h();var g=o()(m.default,v);if(!m.default.locals||e.hot.invalidate){var y=!m.default.locals,_=y?m:m.default.locals;e.hot.accept(800,(t=>{m=n(800),function(e,t,n){if(!e&&t||e&&!t)return!1;var r;for(r in e)if((!n||"default"!==r)&&e[r]!==t[r])return!1;for(r in t)if(!(n&&"default"===r||e[r]))return!1;return!0}(_,y?m:m.default.locals,y)?(_=y?m:m.default.locals,g(m.default)):e.hot.invalidate()}))}e.hot.dispose((function(){g()}));const w=m.default&&m.default.locals?m.default.locals:void 0},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],d=r.base?c[0]+r.base:c[0],l=s[d]||0,u="".concat(d," ").concat(l);s[d]=l+1;var h=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)t[h].references++,t[h].updater(p);else{var f=o(p,r);r.byIndex=a,t.splice(a,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=r(e,o),d=0;d<s.length;d++){var l=n(s[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},764:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Camera=void 0;const r=n(607);t.Camera=class{constructor(e,t,n,o){this.x=e,this.y=t,this.w=n,this.h=o,this.scaledW=0,this.scaledH=0,r.game.signals.onResize.add(((e,t)=>{this.onResize(e,t)}))}convertX(e){return e/this.scaledW*this.w}convertY(e){return e/this.scaledH*this.h}onResize(e,t){e/t>this.w/this.h?e=t*(16/9):t=e*(9/16),this.scaledW=e,this.scaledH=t,r.game.canvas.width=this.w,r.game.canvas.height=this.h,r.game.canvas.style.width=this.scaledW+"px",r.game.canvas.style.height=this.scaledH+"px"}}},724:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Input=t.INPUT_KEY=void 0;const r=n(607);var o;!function(e){e[e.W=0]="W",e[e.S=1]="S"}(o=t.INPUT_KEY||(t.INPUT_KEY={})),t.Input=class{constructor(){this.mouse={x:0,y:0,pressed:!1},this.keyToId={KeyW:o.W,KeyS:o.S},this.keys=[],window.addEventListener("keydown",(e=>{this.onKeyDown(e)})),window.addEventListener("keyup",(e=>{this.onKeyUp(e)})),r.game.canvas.addEventListener("mousemove",(e=>{this.onMouseMove(e)})),r.game.canvas.addEventListener("mousedown",(e=>{this.onMouseDown(e)})),r.game.canvas.addEventListener("mouseup",(e=>{this.onMouseUp(e)})),r.game.canvas.addEventListener("mouseleave",(e=>{this.onMouseLeave(e)})),r.game.canvas.addEventListener("touchmove",(e=>{this.onTouchMove(e)})),r.game.canvas.addEventListener("touchstart",(e=>{this.onTouchStart(e)})),r.game.canvas.addEventListener("touchend",(e=>{this.onTouchEnd(e)})),r.game.canvas.addEventListener("touchcancel",(e=>{this.onTouchCancel(e)}))}tick(){}getKey(e){return!!this.keys[e]}onKeyDown(e){const t=this.keyToId[e.code];void 0!==t&&(this.keys[t]=!0)}onKeyUp(e){const t=this.keyToId[e.code];void 0!==t&&(this.keys[t]=!1)}onMouseMove(e){const t=r.game.canvas.getBoundingClientRect();this.mouse.x=r.game.camera.convertX(e.pageX-t.left-scrollX),this.mouse.y=r.game.camera.convertY(e.pageY-t.top-scrollY)}onMouseDown(e){this.mouse.pressed=!0;const t=r.game.canvas.getBoundingClientRect();this.mouse.x=r.game.camera.convertX(e.pageX-t.left-scrollX),this.mouse.y=r.game.camera.convertY(e.pageY-t.top-scrollY)}onMouseUp(e){this.mouse.pressed=!1}onMouseLeave(e){this.mouse.pressed=!1}onTouchMove(e){e.preventDefault();const t=r.game.canvas.getBoundingClientRect();this.mouse.x=r.game.camera.convertX(e.touches[0].clientX-t.left-scrollX),this.mouse.y=r.game.camera.convertY(e.touches[0].clientY-t.top-scrollY)}onTouchStart(e){e.preventDefault();const t=r.game.canvas.getBoundingClientRect();this.mouse.x=r.game.camera.convertX(e.touches[0].clientX-t.left-scrollX),this.mouse.y=r.game.camera.convertY(e.touches[0].clientY-t.top-scrollY),this.mouse.pressed=!0}onTouchEnd(e){e.preventDefault(),this.mouse.pressed=!1}onTouchCancel(e){e.preventDefault(),this.mouse.pressed=!1}}},533:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Network=void 0;const r=n(876),o=n(39);t.Network=class{constructor(){this.id=""}init(){this.ws=new WebSocket(("http:"===window.location.protocol?"ws://":"wss://")+window.location.hostname),this.id="",this.ws.binaryType="arraybuffer",this.ws.onopen=e=>{console.log("open"),this.send(r.PacketInit.packClient())},this.ws.onmessage=e=>{o.PacketHandler.handle(new Int8Array(e.data))},this.ws.onclose=e=>{console.log("close")},this.ws.onerror=e=>{console.log("error")}}send(e){this.isOnline()&&this.ws.send(e)}stop(){this.ws.close(1e3)}isOnline(){return this.ws.readyState!==this.ws.CLOSED}isStarted(){return this.ws&&this.ws.readyState===this.ws.OPEN}}},39:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketHandler=void 0;const r=n(607),o=n(290),s=n(451),i=n(681),a=n(876),c=n(273),d=n(103),l=n(184),u=n(849);t.PacketHandler=class{static handle(e){switch(s.Packet.from(e).id){case s.PACKET_ID.INIT:!function(e){const t=a.PacketInit.unpackClient(e);r.game.network.id=t.id,r.game.ui.menuHandler()}(e);break;case s.PACKET_ID.CONNECT:!function(e){const t=i.PacketConnect.unpackClient(e);if(t.success)switch(r.game.ui.menuState=u.MENU_STATE.NONE,r.game.ui.appHandler(),t.paddleType){case l.PADDLE_TYPE.LEFT:r.game.sandbox.paddleLeft.isControlled=!0;break;case l.PADDLE_TYPE.RIGHT:r.game.sandbox.paddleRight.isControlled=!0}}(e);break;case s.PACKET_ID.START_MATCH:!function(e){c.PacketStartMatch.unpackClient(e),r.game.sandbox.running=!0}(e);break;case s.PACKET_ID.WORLD_UPDATE:!function(e){const t=d.PacketWorldUpdate.unpackClient(e);r.game.sandbox.paddleLeft.pos=new o.Vec2(r.game.sandbox.paddleLeft.pos.x,t.paddleLeftY),r.game.sandbox.paddleRight.pos=new o.Vec2(r.game.sandbox.paddleRight.pos.x,t.paddleRightY),r.game.sandbox.ball.pos=t.ballPos,r.game.sandbox.ball.vel=t.ballVel}(e)}}}},330:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Resources=void 0;const r={DEV_TEXTURE:n(790).default};t.Resources=class{constructor(){this.SPRITES={},this.URL_SPRITES={}}loadSprites(){return new Promise(((e,t)=>{const n=Object.keys(r).length;let o=0;for(const t in r){const s=new Image;s.onload=()=>{++o===n&&e(0)},s.src=r[t],this.SPRITES[t]=s,this.URL_SPRITES[t]=r[t]}}))}}},82:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Ball=void 0;const r=n(607),o=n(996),s=n(290),i=n(27);class a extends i.Entity{constructor(e,t){super(e,t),this.vel=s.Vec2.zero()}tick(){super.tick(),this.pos.x+=this.vel.x,this.pos.y+=this.vel.y,this.pos.x<0?(this.vel.x=-this.vel.x,this.pos.x=0):this.pos.x>r.game.sandbox.WIDTH-this.size.x&&(this.vel.x=-this.vel.x,this.pos.x=r.game.sandbox.WIDTH-this.size.x),this.pos.y<0?(this.vel.y=-this.vel.y,this.pos.y=0):this.pos.y>r.game.sandbox.HEIGHT-this.size.y&&(this.vel.y=-this.vel.y,this.pos.y=r.game.sandbox.HEIGHT-this.size.y),(o.Physics.box_box(r.game.sandbox.paddleLeft.pos,r.game.sandbox.paddleLeft.size,this.pos,this.size)||o.Physics.box_box(r.game.sandbox.paddleRight.pos,r.game.sandbox.paddleRight.size,this.pos,this.size))&&(this.vel.x=-this.vel.x)}render(e){r.game.ctx.fillRect(this.getX(e),this.getY(e),this.size.x,this.size.y)}}t.Ball=a},27:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Entity=void 0;const r=n(541);t.Entity=class{constructor(e,t){this.pos=e,this.size=t,this.oldPos=e}tick(){this.oldPos=this.pos.clone()}getX(e){return r.Maths.interp(this.oldPos.x,this.pos.x,e)}getY(e){return r.Maths.interp(this.oldPos.y,this.pos.y,e)}}},608:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Paddle=void 0;const r=n(607),o=n(541),s=n(290),i=n(8),a=n(724),c=n(27);class d extends c.Entity{constructor(e,t){super(e,t),this.isControlled=!1}tick(){super.tick(),this.isControlled&&(r.game.input.mouse.pressed?r.game.input.mouse.y<r.game.sandbox.HEIGHT/2?this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,-10))):r.game.input.mouse.y>r.game.sandbox.HEIGHT/2&&this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,10))):r.game.input.getKey(a.INPUT_KEY.W)?this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,-10))):r.game.input.getKey(a.INPUT_KEY.S)&&this.moveTo(s.Vec2.add(this.pos,new s.Vec2(0,10))),this.pos.y=o.Maths.clamp(this.pos.y,0,r.game.sandbox.HEIGHT-this.size.y))}moveTo(e){const t=this.pos.clone();this.pos=o.Maths.towards(this.pos,e,10);const n=e.y-t.y;r.game.network.send(i.PacketPaddleInput.packClient(n))}render(e){r.game.ctx.fillRect(this.getX(e),this.getY(e),this.size.x,this.size.y)}}t.Paddle=d},452:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Sandbox=void 0;const r=n(607),o=n(290),s=n(82),i=n(608);t.Sandbox=class{constructor(){this.WIDTH=1280,this.HEIGHT=720,this.running=!1,this.paddleLeft=new i.Paddle(new o.Vec2(20,this.HEIGHT/2-25),new o.Vec2(10,50)),this.paddleRight=new i.Paddle(new o.Vec2(this.WIDTH-20-10,this.HEIGHT/2-25),new o.Vec2(10,50)),this.ball=new s.Ball(new o.Vec2(this.WIDTH/2-5,this.HEIGHT/2-5),new o.Vec2(10,10)),this.ball.vel=new o.Vec2(-10,-10)}tick(){r.game.sandbox.running&&(this.paddleLeft.tick(),this.paddleRight.tick(),this.ball.tick())}render(e){r.game.ctx.fillStyle="#ffffff",this.paddleLeft.render(e),this.paddleRight.render(e),this.ball.render(e)}}},188:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0;const r=n(133),o=n(764),s=n(724),i=n(330),a=n(533),c=n(849),d=n(452);t.Game=class{constructor(){this.tps=1e3/30,this.currentTime=0,this.accumulator=0,this.signals={onResize:new r.Signal},this.canvas=document.createElement("canvas");const e=this.canvas.getContext("2d");if(!e)throw Error("HTML Canvas is not supported in the browser.");this.ctx=e,this.addEventListeners()}run(){this.input=new s.Input,this.camera=new o.Camera(0,0,1280,720),this.resources=new i.Resources,this.network=new a.Network,this.ui=new c.UI,this.sandbox=new d.Sandbox,this.signals.onResize.dispatch(window.innerWidth,window.innerHeight),Promise.resolve().then((()=>this.resources.loadSprites())).then((()=>{this.ui.init()})).then((()=>{document.body.appendChild(this.canvas)})).then((()=>{this.network.init()})).then((()=>{this.loop(0)}))}loop(e){window.requestAnimationFrame((e=>{this.loop(e)}));let t=e-this.currentTime;for(t>this.tps&&(t=this.tps),this.currentTime=e,this.accumulator+=t;this.accumulator>=this.tps;)this.tick(),this.accumulator-=this.tps;this.render(this.accumulator/this.tps)}tick(){this.sandbox.tick(),this.input.tick()}render(e){this.ctx.clearRect(0,0,this.camera.w,this.camera.h),this.sandbox.render(e)}addEventListeners(){window.addEventListener("resize",(()=>{this.signals.onResize.dispatch(window.innerWidth,window.innerHeight)}))}}},825:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const r=n(989),o=n(607),s=n(849),i=n(655),a=n(361),c=n(21);t.App=function(){const[e,t]=r.Soda.state(0);return o.game.ui.appHandler=t,r.Soda.createElement("div",null,o.game.ui.menuState===s.MENU_STATE.NONE?"":r.Soda.createElement(c.Menu,null),o.game.ui.ingameState===s.INGAME_STATE.NONE?"":r.Soda.createElement(a.Ingame,null),o.game.ui.hudState===s.HUD_STATE.NONE?"":r.Soda.createElement(i.HUD,null))}},655:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HUD=void 0;const r=n(989),o=n(607);t.HUD=function(){const[e,t]=r.Soda.state(0);return o.game.ui.hudHandler=t,r.Soda.createElement("div",null,"Hello world")}},361:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Ingame=void 0;const r=n(989),o=n(607);t.Ingame=function(){const[e,t]=r.Soda.state(0);return o.game.ui.ingameHandler=t,r.Soda.createElement("div",null,"Hello world")}},21:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Menu=void 0;const r=n(989),o=n(607),s=n(681);t.Menu=function(){const[e,t]=r.Soda.state(0);o.game.ui.menuHandler=t;const n=r.Soda.ref();return r.Soda.createElement("div",{class:"ui-menu"},r.Soda.createElement("div",{class:"title"},"Pong Online"),r.Soda.createElement("div",{class:"section"},r.Soda.createElement("input",{ref:n,type:"text",placeholder:"Enter id..."}),r.Soda.createElement("button",{onclick:()=>{const e=n.dom.value;5===e.length&&o.game.network.send(s.PacketConnect.packClient(e))}},"Join"),r.Soda.createElement("div",{class:"id"},"Your id: ",o.game.network.id)))}},849:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.UI=t.HUD_STATE=t.INGAME_STATE=t.MENU_STATE=void 0;const r=n(989),o=n(825);var s,i,a;!function(e){e[e.NONE=-1]="NONE",e[e.MAIN=0]="MAIN"}(s=t.MENU_STATE||(t.MENU_STATE={})),function(e){e[e.NONE=-1]="NONE",e[e.MAIN=0]="MAIN"}(i=t.INGAME_STATE||(t.INGAME_STATE={})),function(e){e[e.NONE=-1]="NONE",e[e.MAIN=0]="MAIN"}(a=t.HUD_STATE||(t.HUD_STATE={})),t.UI=class{constructor(){this.menuState=s.MAIN,this.ingameState=i.NONE,this.hudState=a.NONE}init(){r.Soda.render(r.Soda.createElement(o.App,null),document.body)}}},607:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.game=void 0;const r=n(188);n(620),t.game=new r.Game,window.onload=()=>{t.game.run()}},541:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Maths=void 0;const r=n(290);t.Maths=class{static clamp(e,t,n){return e<t?t:e>n?n:e}static interp(e,t,n){return(t-e)*n+e}static towards(e,t,n){const o=t.x-e.x,s=t.y-e.y,i=Math.sqrt(o*o+s*s);return i<=n||0===i?t:new r.Vec2(e.x+o/i*n,e.y+s/i*n)}}},996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Physics=void 0,t.Physics=class{static box_box(e,t,n,r){return e.x<n.x+r.x&&e.x+t.x>n.x&&e.y<n.y+r.y&&e.y+t.y>n.y}}},133:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Signal=void 0,t.Signal=class{constructor(){this.listeners=[]}add(e){this.listeners.push(e)}remove(e){for(let t=0;t<this.listeners.length;++t)if(this.listeners[t]===e)return void this.listeners.splice(t,1)}dispatch(...e){for(let t=0;t<this.listeners.length;++t)this.listeners[t](...e)}clear(){this.listeners=[]}}},290:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Vec2=void 0;class n{constructor(e,t){this.x=e,this.y=t}clone(){return new n(this.x,this.y)}static add(e,t){return new n(e.x+t.x,e.y+t.y)}static equals(e,t){return e.x===t.x&&e.y===t.y}static zero(){return new n(0,0)}static one(){return new n(1,1)}}t.Vec2=n},451:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Packet=t.PACKET_ID=void 0;const r=n(290);var o;!function(e){e[e.NONE=-1]="NONE",e[e.INIT=0]="INIT",e[e.CONNECT=1]="CONNECT",e[e.DISCONNECT=2]="DISCONNECT",e[e.PADDLE_INPUT=3]="PADDLE_INPUT",e[e.WORLD_UPDATE=4]="WORLD_UPDATE",e[e.SCORE_UPDATE=5]="SCORE_UPDATE",e[e.START_MATCH=6]="START_MATCH"}(o=t.PACKET_ID||(t.PACKET_ID={}));class s{constructor(){this.writeData=new Int8Array(0),this.readData=new Int8Array(0),this.pos=0,this.id=o.NONE}static from(e){const t=new s;return t.readData=new Int8Array(e),t.id=t.readInt8(),t}static create(e){const t=new s;return t.writeInt8(e),t.id=e,t}writeInt8(e){this.writeData=new Int8Array([...this.writeData,e])}writeInt16(e){const t=new Int8Array(new Int16Array([e]).buffer);this.writeData=new Int8Array([...this.writeData,...t])}writeInt32(e){const t=new Int8Array(new Int32Array([e]).buffer);this.writeData=new Int8Array([...this.writeData,...t])}writeFloat32(e){const t=new Int8Array(new Float32Array([e]).buffer);this.writeData=new Int8Array([...this.writeData,...t])}writeBool(e){this.writeData=new Int8Array([...this.writeData,e?1:0])}writeString(e){const t=[];for(let n=0;n<e.length;++n)t.push(e.charCodeAt(n));this.writeData=new Int8Array([...this.writeData,...new Int8Array(new Int32Array(t).buffer)])}writeVec2(e){this.writeFloat32(e.x),this.writeFloat32(e.y)}readInt8(){const e=this.readData[this.pos];return this.pos+=1,e}readInt16(){const e=new Int16Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+2)]).buffer)[0];return this.pos+=2,e}readInt32(){const e=new Int32Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+4)]).buffer)[0];return this.pos+=4,e}readFloat32(){const e=new Float32Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+4)]).buffer)[0];return this.pos+=4,e}readBool(){const e=this.readData[this.pos];return this.pos+=1,!!e}readString(e){const t=new Int32Array(new Int8Array([...this.readData.subarray(this.pos,this.pos+4*e)]).buffer);return this.pos+=4*e,String.fromCharCode(...t)}readVec2(){return new r.Vec2(this.readFloat32(),this.readFloat32())}}t.Packet=s},681:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketConnect=void 0;const r=n(451);t.PacketConnect=class{static packClient(e){const t=r.Packet.create(r.PACKET_ID.CONNECT);return t.writeString(e),t.writeData}static unpackServer(e){return{id:r.Packet.from(e).readString(5)}}static packServer(e,t){const n=r.Packet.create(r.PACKET_ID.CONNECT);return n.writeBool(e),n.writeInt8(t),n.writeData}static unpackClient(e){const t=r.Packet.from(e);return{success:t.readBool(),paddleType:t.readInt8()}}}},876:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketInit=void 0;const r=n(451);t.PacketInit=class{static packClient(){return r.Packet.create(r.PACKET_ID.INIT).writeData}static unpackServer(e){return r.Packet.from(e),{}}static packServer(e){const t=r.Packet.create(r.PACKET_ID.INIT);return t.writeString(e),t.writeData}static unpackClient(e){return{id:r.Packet.from(e).readString(5)}}}},8:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketPaddleInput=void 0;const r=n(451);t.PacketPaddleInput=class{static packClient(e){const t=r.Packet.create(r.PACKET_ID.PADDLE_INPUT);return t.writeFloat32(e),t.writeData}static unpackServer(e){return{movY:r.Packet.from(e).readFloat32()}}}},273:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketStartMatch=void 0;const r=n(451);t.PacketStartMatch=class{static packServer(){return r.Packet.create(r.PACKET_ID.START_MATCH).writeData}static unpackClient(e){return r.Packet.from(e),{}}}},103:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PacketWorldUpdate=void 0;const r=n(451);t.PacketWorldUpdate=class{static packServer(e,t,n,o){const s=r.Packet.create(r.PACKET_ID.WORLD_UPDATE);return s.writeFloat32(e),s.writeFloat32(t),s.writeVec2(n),s.writeVec2(o),s.writeData}static unpackClient(e){const t=r.Packet.from(e);return{paddleLeftY:t.readFloat32(),paddleRightY:t.readFloat32(),ballPos:t.readVec2(),ballVel:t.readVec2()}}}},184:(e,t)=>{var n;Object.defineProperty(t,"__esModule",{value:!0}),t.PADDLE_TYPE=void 0,(n=t.PADDLE_TYPE||(t.PADDLE_TYPE={}))[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT"}},c={};function d(e){var t=c[e];if(void 0!==t){if(void 0!==t.error)throw t.error;return t.exports}var n=c[e]={id:e,exports:{}};try{var r={id:e,module:n,factory:a[e],require:d};d.i.forEach((function(e){e(r)})),n=r.module,r.factory.call(n.exports,n,n.exports,r.require)}catch(e){throw n.error=e,e}return n.exports}d.m=a,d.c=c,d.i=[],d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},d.d=(e,t)=>{for(var n in t)d.o(t,n)&&!d.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},d.hu=e=>e+"."+d.h()+".hot-update.js",d.miniCssF=e=>{},d.hmrF=()=>"main."+d.h()+".hot-update.json",d.h=()=>"c37c37773f1588ebcb24",d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="frontend:",d.l=(n,r,o,s)=>{if(e[n])e[n].push(r);else{var i,a;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var u=c[l];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,d.nc&&i.setAttribute("nonce",d.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var h=(t,r)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(r))),t)return t(r)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=h.bind(null,i.onerror),i.onload=h.bind(null,i.onload),a&&document.head.appendChild(i)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,t,n,r,o={},s=d.c,i=[],a=[],c="idle";function l(e){c=e;for(var t=[],n=0;n<a.length;n++)t[n]=a[n].call(null,e);return Promise.all(t)}function u(e){if(0===t.length)return e();var n=t;return t=[],Promise.all(n).then((function(){return u(e)}))}function h(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return l("check").then(d.hmrM).then((function(r){return r?l("prepare").then((function(){var o=[];return t=[],n=[],Promise.all(Object.keys(d.hmrC).reduce((function(e,t){return d.hmrC[t](r.c,r.r,r.m,e,n,o),e}),[])).then((function(){return u((function(){return e?f(e):l("ready").then((function(){return o}))}))}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):f(e)}function f(e){e=e||{},m();var t=n.map((function(t){return t(e)}));n=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var s=l("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,a=l("apply"),c=function(e){i||(i=e)},d=[];return t.forEach((function(e){if(e.apply){var t=e.apply(c);if(t)for(var n=0;n<t.length;n++)d.push(t[n])}})),Promise.all([s,a]).then((function(){return i?l("fail").then((function(){throw i})):r?f(e).then((function(e){return d.forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e})):l("idle").then((function(){return d}))}))}function m(){if(r)return n||(n=[]),Object.keys(d.hmrI).forEach((function(e){r.forEach((function(t){d.hmrI[e](t,n)}))})),r=void 0,!0}d.hmrD=o,d.i.push((function(f){var m,v,g,y,_=f.module,w=function(n,r){var o=s[r];if(!o)return n;var a=function(t){if(o.hot.active){if(s[t]){var a=s[t].parents;-1===a.indexOf(r)&&a.push(r)}else i=[r],e=t;-1===o.children.indexOf(t)&&o.children.push(t)}else console.warn("[HMR] unexpected require("+t+") from disposed module "+r),i=[];return n(t)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(t){n[e]=t}}};for(var h in n)Object.prototype.hasOwnProperty.call(n,h)&&"e"!==h&&Object.defineProperty(a,h,d(h));return a.e=function(e){return function(e){switch(c){case"ready":return l("prepare"),t.push(e),u((function(){return l("ready")})),e;case"prepare":return t.push(e),e;default:return e}}(n.e(e))},a}(f.require,f.id);_.hot=(m=f.id,v=_,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){i=v.parents.slice(),e=g?void 0:m,d(m)},active:!0,accept:function(e,t,n){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._acceptedDependencies[e[r]]=t||function(){},y._acceptedErrorHandlers[e[r]]=n;else y._acceptedDependencies[e]=t||function(){},y._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._declinedDependencies[e[t]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=y._disposeHandlers.indexOf(e);t>=0&&y._disposeHandlers.splice(t,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":n=[],Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,n)})),l("ready");break;case"ready":Object.keys(d.hmrI).forEach((function(e){d.hmrI[e](m,n)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(m)}},check:h,apply:p,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var t=a.indexOf(e);t>=0&&a.splice(t,1)},data:o[m]},e=void 0,y),_.parents=i,_.children=[],i=[],f.require=w})),d.hmrC={},d.hmrI={}})(),(()=>{var e;d.g.importScripts&&(e=d.g.location+"");var t=d.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),d.p=e})(),n=(e,t,n,r)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=s=>{if(o.onerror=o.onload=null,"load"===s.type)n();else{var i=s&&("load"===s.type?"missing":s.type),a=s&&s.target&&s.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=a,o.parentNode.removeChild(o),r(c)}},o.href=t,document.head.appendChild(o),o},r=(e,t)=>{for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(i=n[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(o===e||o===t))return i}var s=document.getElementsByTagName("style");for(r=0;r<s.length;r++){var i;if((o=(i=s[r]).getAttribute("data-href"))===e||o===t)return i}},o=[],s=[],i=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var t=o[e];t.parentNode&&t.parentNode.removeChild(t)}o.length=0},apply:()=>{for(var e=0;e<s.length;e++)s[e].rel="stylesheet";s.length=0}}),d.hmrC.miniCss=(e,t,a,c,l,u)=>{l.push(i),e.forEach((e=>{var t=d.miniCssF(e),i=d.p+t,a=r(t,i);a&&c.push(new Promise(((t,r)=>{var c=n(e,i,(()=>{c.as="style",c.rel="preload",t()}),r);o.push(a),s.push(c)})))}))},(()=>{var e,t,n,r,o=d.hmrS_jsonp=d.hmrS_jsonp||{179:0},s={};function i(e){return new Promise(((t,n)=>{s[e]=t;var r=d.p+d.hu(e),o=new Error;d.l(r,(t=>{if(s[e]){s[e]=void 0;var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,n(o)}}))}))}function a(s){function i(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),s=o.id,i=o.chain,c=d.c[s];if(c&&(!c.hot._selfAccepted||c.hot._selfInvalidated)){if(c.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:s};if(c.hot._main)return{type:"unaccepted",chain:i,moduleId:s};for(var l=0;l<c.parents.length;l++){var u=c.parents[l],h=d.c[u];if(h){if(h.hot._declinedDependencies[s])return{type:"declined",chain:i.concat([u]),moduleId:s,parentId:u};-1===t.indexOf(u)&&(h.hot._acceptedDependencies[s]?(n[u]||(n[u]=[]),a(n[u],[s])):(delete n[u],t.push(u),r.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}d.f&&delete d.f.jsonpHmr,e=void 0;var c={},l=[],u={},h=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in t)if(d.o(t,p)){var f,m=t[p],v=!1,g=!1,y=!1,_="";switch((f=m?i(p):{type:"disposed",moduleId:p}).chain&&(_="\nUpdate propagation: "+f.chain.join(" -> ")),f.type){case"self-declined":s.onDeclined&&s.onDeclined(f),s.ignoreDeclined||(v=new Error("Aborted because of self decline: "+f.moduleId+_));break;case"declined":s.onDeclined&&s.onDeclined(f),s.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+f.moduleId+" in "+f.parentId+_));break;case"unaccepted":s.onUnaccepted&&s.onUnaccepted(f),s.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+_));break;case"accepted":s.onAccepted&&s.onAccepted(f),g=!0;break;case"disposed":s.onDisposed&&s.onDisposed(f),y=!0;break;default:throw new Error("Unexception type "+f.type)}if(v)return{error:v};if(g)for(p in u[p]=m,a(l,f.outdatedModules),f.outdatedDependencies)d.o(f.outdatedDependencies,p)&&(c[p]||(c[p]=[]),a(c[p],f.outdatedDependencies[p]));y&&(a(l,[f.moduleId]),u[p]=h)}t=void 0;for(var w,E=[],b=0;b<l.length;b++){var k=l[b],I=d.c[k];I&&(I.hot._selfAccepted||I.hot._main)&&u[k]!==h&&!I.hot._selfInvalidated&&E.push({module:k,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;n.forEach((function(e){delete o[e]})),n=void 0;for(var t,r=l.slice();r.length>0;){var s=r.pop(),i=d.c[s];if(i){var a={},u=i.hot._disposeHandlers;for(b=0;b<u.length;b++)u[b].call(null,a);for(d.hmrD[s]=a,i.hot.active=!1,delete d.c[s],delete c[s],b=0;b<i.children.length;b++){var h=d.c[i.children[b]];h&&(e=h.parents.indexOf(s))>=0&&h.parents.splice(e,1)}}}for(var p in c)if(d.o(c,p)&&(i=d.c[p]))for(w=c[p],b=0;b<w.length;b++)t=w[b],(e=i.children.indexOf(t))>=0&&i.children.splice(e,1)},apply:function(e){for(var t in u)d.o(u,t)&&(d.m[t]=u[t]);for(var n=0;n<r.length;n++)r[n](d);for(var o in c)if(d.o(c,o)){var i=d.c[o];if(i){w=c[o];for(var a=[],h=[],p=[],f=0;f<w.length;f++){var m=w[f],v=i.hot._acceptedDependencies[m],g=i.hot._acceptedErrorHandlers[m];if(v){if(-1!==a.indexOf(v))continue;a.push(v),h.push(g),p.push(m)}}for(var y=0;y<a.length;y++)try{a[y].call(null,w)}catch(t){if("function"==typeof h[y])try{h[y](t,{moduleId:o,dependencyId:p[y]})}catch(n){s.onErrored&&s.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[y],error:n,originalError:t}),s.ignoreErrored||(e(n),e(t))}else s.onErrored&&s.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[y],error:t}),s.ignoreErrored||e(t)}}}for(var _=0;_<E.length;_++){var b=E[_],k=b.module;try{b.require(k)}catch(t){if("function"==typeof b.errorHandler)try{b.errorHandler(t,{moduleId:k,module:d.c[k]})}catch(n){s.onErrored&&s.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:t}),s.ignoreErrored||(e(n),e(t))}else s.onErrored&&s.onErrored({type:"self-accept-errored",moduleId:k,error:t}),s.ignoreErrored||e(t)}}return l}}}self.webpackHotUpdatefrontend=(e,n,o)=>{for(var i in n)d.o(n,i)&&(t[i]=n[i]);o&&r.push(o),s[e]&&(s[e](),s[e]=void 0)},d.hmrI.jsonp=function(e,o){t||(t={},r=[],n=[],o.push(a)),d.o(t,e)||(t[e]=d.m[e])},d.hmrC.jsonp=function(s,c,l,u,h,p){h.push(a),e={},n=c,t=l.reduce((function(e,t){return e[t]=!1,e}),{}),r=[],s.forEach((function(t){d.o(o,t)&&void 0!==o[t]&&(u.push(i(t)),e[t]=!0)})),d.f&&(d.f.jsonpHmr=function(t,n){e&&!d.o(e,t)&&d.o(o,t)&&void 0!==o[t]&&(n.push(i(t)),e[t]=!0)})},d.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(d.p+d.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),d(607)})();