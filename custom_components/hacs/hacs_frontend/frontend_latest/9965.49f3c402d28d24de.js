export const ids=["9965"];export const modules={90842:function(e,t,i){i.d(t,{t:function(){return o}});i(92745),i(39527),i(41360),i(88972);class s{constructor(e=window.localStorage){this.storage=void 0,this._storage={},this._listeners={},this.storage=e,e===window.localStorage&&window.addEventListener("storage",(e=>{e.key&&this.hasKey(e.key)&&(this._storage[e.key]=e.newValue?JSON.parse(e.newValue):e.newValue,this._listeners[e.key]&&this._listeners[e.key].forEach((t=>t(e.oldValue?JSON.parse(e.oldValue):e.oldValue,this._storage[e.key]))))}))}addFromStorage(e){if(!this._storage[e]){const t=this.storage.getItem(e);t&&(this._storage[e]=JSON.parse(t))}}subscribeChanges(e,t){return this._listeners[e]?this._listeners[e].push(t):this._listeners[e]=[t],()=>{this.unsubscribeChanges(e,t)}}unsubscribeChanges(e,t){if(!(e in this._listeners))return;const i=this._listeners[e].indexOf(t);-1!==i&&this._listeners[e].splice(i,1)}hasKey(e){return e in this._storage}getValue(e){return this._storage[e]}setValue(e,t){const i=this._storage[e];this._storage[e]=t;try{void 0===t?this.storage.removeItem(e):this.storage.setItem(e,JSON.stringify(t))}catch(e){}finally{this._listeners[e]&&this._listeners[e].forEach((e=>e(i,t)))}}}const n={},o=e=>t=>{const i=e.storage||"localStorage";let o;i&&i in n?o=n[i]:(o=new s(window[i]),n[i]=o);const a=String(t.key),r=e.key||String(t.key),d=t.initializer?t.initializer():void 0;o.addFromStorage(r);const l=!1!==e.subscribe?e=>o.subscribeChanges(r,((i,s)=>{e.requestUpdate(t.key,i)})):void 0,c=()=>o.hasKey(r)?e.deserializer?e.deserializer(o.getValue(r)):o.getValue(r):d;return{kind:"method",placement:"prototype",key:t.key,descriptor:{set(i){((i,s)=>{let n;e.state&&(n=c()),o.setValue(r,e.serializer?e.serializer(s):s),e.state&&i.requestUpdate(t.key,n)})(this,i)},get:()=>c(),enumerable:!0,configurable:!0},finisher(i){if(e.state&&e.subscribe){const e=i.prototype.connectedCallback,t=i.prototype.disconnectedCallback;i.prototype.connectedCallback=function(){e.call(this),this[`__unbsubLocalStorage${a}`]=l?.(this)},i.prototype.disconnectedCallback=function(){t.call(this),this[`__unbsubLocalStorage${a}`]?.(),this[`__unbsubLocalStorage${a}`]=void 0}}e.state&&i.createProperty(t.key,{noAccessor:!0,...e.stateOptions})}}}},43527:function(e,t,i){var s=i(44249),n=i(72621),o=(i(39527),i(41360),i(22997),i(57243)),a=i(50778),r=i(13089),d=i(24067);(0,s.Z)([(0,a.Mo)("ha-button-menu")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",key:d.gA,value:void 0},{kind:"field",decorators:[(0,a.Cb)()],key:"corner",value:()=>"BOTTOM_START"},{kind:"field",decorators:[(0,a.Cb)({attribute:"menu-corner"})],key:"menuCorner",value:()=>"START"},{kind:"field",decorators:[(0,a.Cb)({type:Number})],key:"x",value:()=>null},{kind:"field",decorators:[(0,a.Cb)({type:Number})],key:"y",value:()=>null},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"multi",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"activatable",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"disabled",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean})],key:"fixed",value:()=>!1},{kind:"field",decorators:[(0,a.Cb)({type:Boolean,attribute:"no-anchor"})],key:"noAnchor",value:()=>!1},{kind:"field",decorators:[(0,a.IO)("mwc-menu",!0)],key:"_menu",value:void 0},{kind:"get",key:"items",value:function(){return this._menu?.items}},{kind:"get",key:"selected",value:function(){return this._menu?.selected}},{kind:"method",key:"focus",value:function(){this._menu?.open?this._menu.focusItemAtIndex(0):this._triggerButton?.focus()}},{kind:"method",key:"render",value:function(){return o.dy` <div @click="${this._handleClick}"> <slot name="trigger" @slotchange="${this._setTriggerAria}"></slot> </div> <mwc-menu .corner="${this.corner}" .menuCorner="${this.menuCorner}" .fixed="${this.fixed}" .multi="${this.multi}" .activatable="${this.activatable}" .y="${this.y}" .x="${this.x}"> <slot></slot> </mwc-menu> `}},{kind:"method",key:"firstUpdated",value:function(e){(0,n.Z)(i,"firstUpdated",this,3)([e]),"rtl"===r.E.document.dir&&this.updateComplete.then((()=>{this.querySelectorAll("mwc-list-item").forEach((e=>{const t=document.createElement("style");t.innerHTML="span.material-icons:first-of-type { margin-left: var(--mdc-list-item-graphic-margin, 32px) !important; margin-right: 0px !important;}",e.shadowRoot.appendChild(t)}))}))}},{kind:"method",key:"_handleClick",value:function(){this.disabled||(this._menu.anchor=this.noAnchor?null:this,this._menu.show())}},{kind:"get",key:"_triggerButton",value:function(){return this.querySelector('ha-icon-button[slot="trigger"], mwc-button[slot="trigger"]')}},{kind:"method",key:"_setTriggerAria",value:function(){this._triggerButton&&(this._triggerButton.ariaHasPopup="menu")}},{kind:"get",static:!0,key:"styles",value:function(){return o.iv`:host{display:inline-block;position:relative}::slotted([disabled]){color:var(--disabled-text-color)}`}}]}}),o.oi)},31762:function(e,t,i){i.d(t,{rM:function(){return n},zt:function(){return s}});let s=function(e){return e[e.CONTROL=1]="CONTROL",e}({});const n=(e,t,i)=>e.callWS({type:"conversation/agent/list",language:t,country:i})},78579:function(e,t,i){i.r(t),i.d(t,{HaVoiceCommandDialog:()=>y});var s=i("44249"),n=(i("31622"),i("57243")),o=i("50778"),a=i("90842"),r=i("11297"),d=i("81036"),l=(i("20095"),i("43527"),i("44118"),i("28906"),i("59897"),i("74064"),i("17949"),i("72621")),c=(i("92745"),i("26200"),i("25754"),i("22246"),i("71375"),i("15524"),i("20267"),i("13334"),i("35359")),h=i("4855"),u=i("4468"),p=i("31762");i("75656"),i("50100"),i("18084");class _{constructor(e){this._active=!1,this._callback=void 0,this._context=void 0,this._stream=void 0,this._source=void 0,this._recorder=void 0,this._callback=e}get active(){return this._active}get sampleRate(){return this._context?.sampleRate}static get isSupported(){return window.isSecureContext&&(window.AudioContext||window.webkitAudioContext)}async start(){if(this._context&&this._stream&&this._source&&this._recorder)this._stream.getTracks()[0].enabled=!0,await this._context.resume(),this._active=!0;else try{await this._createContext()}catch(e){console.error(e),this._active=!1}}async stop(){this._active=!1,this._stream&&(this._stream.getTracks()[0].enabled=!1),await(this._context?.suspend())}close(){this._active=!1,this._stream?.getTracks()[0].stop(),this._recorder&&(this._recorder.port.onmessage=null),this._source?.disconnect(),this._context?.close(),this._stream=void 0,this._source=void 0,this._recorder=void 0,this._context=void 0}async _createContext(){const e=new(AudioContext||webkitAudioContext);this._stream=await navigator.mediaDevices.getUserMedia({audio:!0}),await e.audioWorklet.addModule(new URL(i.p+i.u("6961"),i.b)),this._context=e,this._source=this._context.createMediaStreamSource(this._stream),this._recorder=new AudioWorkletNode(this._context,"recorder-worklet"),this._recorder.port.onmessage=e=>{this._active&&this._callback(e.data)},this._active=!0,this._source.connect(this._recorder)}}i("70596");var g=i("26205"),m=i("4557");(0,s.Z)([(0,o.Mo)("ha-assist-chat")],(function(e,t){class i extends t{constructor(...t){super(...t),e(this)}}return{F:i,d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"pipeline",value:void 0},{kind:"field",decorators:[(0,o.Cb)({type:Boolean,attribute:!1})],key:"startListening",value:void 0},{kind:"field",decorators:[(0,o.IO)("#message-input")],key:"_messageInput",value:void 0},{kind:"field",decorators:[(0,o.IO)("#scroll-container")],key:"_scrollContainer",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_conversation",value:()=>[]},{kind:"field",decorators:[(0,o.SB)()],key:"_showSendButton",value:()=>!1},{kind:"field",decorators:[(0,o.SB)()],key:"_processing",value:()=>!1},{kind:"field",key:"_conversationId",value:()=>null},{kind:"field",key:"_audioRecorder",value:void 0},{kind:"field",key:"_audioBuffer",value:void 0},{kind:"field",key:"_audio",value:void 0},{kind:"field",key:"_stt_binary_handler_id",value:void 0},{kind:"method",key:"willUpdate",value:function(e){this.hasUpdated&&!e.has("pipeline")||(this._conversation=[{who:"hass",text:this.hass.localize("ui.dialogs.voice_command.how_can_i_help")}])}},{kind:"method",key:"firstUpdated",value:function(e){(0,l.Z)(i,"firstUpdated",this,3)([e]),this.startListening&&this.pipeline&&this.pipeline.stt_engine&&_.isSupported&&this._toggleListening(),setTimeout((()=>this._messageInput.focus()),0)}},{kind:"method",key:"updated",value:function(e){(0,l.Z)(i,"updated",this,3)([e]),e.has("_conversation")&&this._scrollMessagesBottom()}},{kind:"method",key:"disconnectedCallback",value:function(){(0,l.Z)(i,"disconnectedCallback",this,3)([]),this._audioRecorder?.close(),this._audioRecorder=void 0,this._audio?.pause(),this._conversation=[],this._conversationId=null}},{kind:"method",key:"render",value:function(){const e=!!this.pipeline&&(this.pipeline.prefer_local_intents||!this.hass.states[this.pipeline.conversation_engine]||(0,u.e)(this.hass.states[this.pipeline.conversation_engine],p.zt.CONTROL)),t=_.isSupported,i=this.pipeline?.stt_engine;return n.dy` ${e?n.Ld:n.dy` <ha-alert> ${this.hass.localize("ui.dialogs.voice_command.conversation_no_control")} </ha-alert> `} <div class="messages"> <div class="messages-container" id="scroll-container"> ${this._conversation.map((e=>n.dy` <div class="message ${(0,c.$)({error:!!e.error,[e.who]:!0})}">${e.text}</div> `))} </div> </div> <div class="input" slot="primaryAction"> <ha-textfield id="message-input" @keyup="${this._handleKeyUp}" @input="${this._handleInput}" .label="${this.hass.localize("ui.dialogs.voice_command.input_label")}" .iconTrailing="${!0}"> <div slot="trailingIcon"> ${this._showSendButton||!i?n.dy` <ha-icon-button class="listening-icon" .path="${"M2,21L23,12L2,3V10L17,12L2,14V21Z"}" @click="${this._handleSendMessage}" .disabled="${this._processing}" .label="${this.hass.localize("ui.dialogs.voice_command.send_text")}"> </ha-icon-button> `:n.dy` ${this._audioRecorder?.active?n.dy` <div class="bouncer"> <div class="double-bounce1"></div> <div class="double-bounce2"></div> </div> `:n.Ld} <div class="listening-icon"> <ha-icon-button .path="${"M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"}" @click="${this._handleListeningButton}" .disabled="${this._processing}" .label="${this.hass.localize("ui.dialogs.voice_command.start_listening")}"> </ha-icon-button> ${t?null:n.dy` <ha-svg-icon .path="${"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}" class="unsupported"></ha-svg-icon> `} </div> `} </div> </ha-textfield> </div> `}},{kind:"method",key:"_scrollMessagesBottom",value:function(){const e=this._scrollContainer;e&&e.scrollTo(0,e.scrollHeight)}},{kind:"method",key:"_handleKeyUp",value:function(e){const t=e.target;!this._processing&&"Enter"===e.key&&t.value&&(this._processText(t.value),t.value="",this._showSendButton=!1)}},{kind:"method",key:"_handleInput",value:function(e){const t=e.target.value;t&&!this._showSendButton?this._showSendButton=!0:!t&&this._showSendButton&&(this._showSendButton=!1)}},{kind:"method",key:"_handleSendMessage",value:function(){this._messageInput.value&&(this._processText(this._messageInput.value.trim()),this._messageInput.value="",this._showSendButton=!1)}},{kind:"method",key:"_handleListeningButton",value:function(e){e.stopPropagation(),e.preventDefault(),this._toggleListening()}},{kind:"method",key:"_toggleListening",value:async function(){_.isSupported?this._audioRecorder?.active?this._stopListening():this._startListening():this._showNotSupportedMessage()}},{kind:"method",key:"_addMessage",value:function(e){this._conversation=[...this._conversation,e]}},{kind:"method",key:"_showNotSupportedMessage",value:async function(){this._addMessage({who:"hass",text:n.dy`${this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_browser")} ${this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation",{documentation_link:n.dy`<a target="_blank" rel="noopener noreferrer" href="${(0,g.R)(this.hass,"/docs/configuration/securing/#remote-access")}">${this.hass.localize("ui.dialogs.voice_command.not_supported_microphone_documentation_link")}</a>`})}`})}},{kind:"method",key:"_startListening",value:async function(){this._processing=!0,this._audio?.pause(),this._audioRecorder||(this._audioRecorder=new _((e=>{this._audioBuffer?this._audioBuffer.push(e):this._sendAudioChunk(e)}))),this._stt_binary_handler_id=void 0,this._audioBuffer=[];const e={who:"user",text:"…"};await this._audioRecorder.start(),this._addMessage(e),this.requestUpdate("_audioRecorder");const t={who:"hass",text:"…"};try{const i=await(0,h.Xp)(this.hass,(s=>{if("run-start"===s.type&&(this._stt_binary_handler_id=s.data.runner_data.stt_binary_handler_id),"stt-start"===s.type&&this._audioBuffer){for(const e of this._audioBuffer)this._sendAudioChunk(e);this._audioBuffer=void 0}if("stt-end"===s.type&&(this._stt_binary_handler_id=void 0,this._stopListening(),e.text=s.data.stt_output.text,this.requestUpdate("_conversation"),this._addMessage(t)),"intent-end"===s.type){this._conversationId=s.data.intent_output.conversation_id;const e=s.data.intent_output.response.speech?.plain;e&&(t.text=e.speech),this.requestUpdate("_conversation")}if("tts-end"===s.type){const e=s.data.tts_output.url;this._audio=new Audio(e),this._audio.play(),this._audio.addEventListener("ended",this._unloadAudio),this._audio.addEventListener("pause",this._unloadAudio),this._audio.addEventListener("canplaythrough",this._playAudio),this._audio.addEventListener("error",this._audioError)}"run-end"===s.type&&(this._stt_binary_handler_id=void 0,i()),"error"===s.type&&(this._stt_binary_handler_id=void 0,"…"===e.text?(e.text=s.data.message,e.error=!0):(t.text=s.data.message,t.error=!0),this._stopListening(),this.requestUpdate("_conversation"),i())}),{start_stage:"stt",end_stage:this.pipeline?.tts_engine?"tts":"intent",input:{sample_rate:this._audioRecorder.sampleRate},pipeline:this.pipeline?.id,conversation_id:this._conversationId})}catch(e){await(0,m.Ys)(this,{title:"Error starting pipeline",text:e.message||e}),this._stopListening()}finally{this._processing=!1}}},{kind:"method",key:"_stopListening",value:function(){if(this._audioRecorder?.stop(),this.requestUpdate("_audioRecorder"),this._stt_binary_handler_id){if(this._audioBuffer)for(const e of this._audioBuffer)this._sendAudioChunk(e);this._sendAudioChunk(new Int16Array),this._stt_binary_handler_id=void 0}this._audioBuffer=void 0}},{kind:"method",key:"_sendAudioChunk",value:function(e){if(this.hass.connection.socket.binaryType="arraybuffer",null==this._stt_binary_handler_id)return;const t=new Uint8Array(1+2*e.length);t[0]=this._stt_binary_handler_id,t.set(new Uint8Array(e.buffer),1),this.hass.connection.socket.send(t)}},{kind:"field",key:"_playAudio",value(){return()=>{this._audio?.play()}}},{kind:"field",key:"_audioError",value(){return()=>{(0,m.Ys)(this,{title:"Error playing audio."}),this._audio?.removeAttribute("src")}}},{kind:"field",key:"_unloadAudio",value(){return()=>{this._audio?.removeAttribute("src"),this._audio=void 0}}},{kind:"method",key:"_processText",value:async function(e){this._processing=!0,this._audio?.pause(),this._addMessage({who:"user",text:e});const t={who:"hass",text:"…"};this._addMessage(t);try{const i=await(0,h.Xp)(this.hass,(e=>{if("intent-end"===e.type){this._conversationId=e.data.intent_output.conversation_id;const s=e.data.intent_output.response.speech?.plain;s&&(t.text=s.speech),this.requestUpdate("_conversation"),i()}"error"===e.type&&(t.text=e.data.message,t.error=!0,this.requestUpdate("_conversation"),i())}),{start_stage:"intent",input:{text:e},end_stage:"intent",pipeline:this.pipeline?.id,conversation_id:this._conversationId})}catch{t.text=this.hass.localize("ui.dialogs.voice_command.error"),t.error=!0,this.requestUpdate("_conversation")}finally{this._processing=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return n.iv`:host{flex:1;display:flex;flex-direction:column;min-height:var(--ha-assist-chat-min-height,415px)}ha-textfield{display:block;margin:0 24px 16px}.messages{flex:1;display:block;box-sizing:border-box;position:relative}.messages-container{position:absolute;bottom:0px;right:0px;left:0px;padding:24px;box-sizing:border-box;overflow-y:auto;max-height:100%}.message{white-space:pre-line;font-size:18px;clear:both;margin:8px 0;padding:8px;border-radius:15px}@media all and (max-width:450px),all and (max-height:500px){.message{font-size:16px}}.message p{margin:0}.message p:not(:last-child){margin-bottom:8px}.message.user{margin-left:24px;margin-inline-start:24px;margin-inline-end:initial;float:var(--float-end);text-align:right;border-bottom-right-radius:0px;background-color:var(--primary-color);color:var(--text-primary-color);direction:var(--direction)}.message.hass{margin-right:24px;margin-inline-end:24px;margin-inline-start:initial;float:var(--float-start);border-bottom-left-radius:0px;background-color:var(--secondary-background-color);color:var(--primary-text-color);direction:var(--direction)}.message.user a{color:var(--text-primary-color)}.message.hass a{color:var(--primary-text-color)}.message.error{background-color:var(--error-color);color:var(--text-primary-color)}.bouncer{width:48px;height:48px;position:absolute}.double-bounce1,.double-bounce2{width:48px;height:48px;border-radius:50%;background-color:var(--primary-color);opacity:.2;position:absolute;top:0;left:0;-webkit-animation:sk-bounce 2s infinite ease-in-out;animation:sk-bounce 2s infinite ease-in-out}.double-bounce2{-webkit-animation-delay:-1s;animation-delay:-1s}@-webkit-keyframes sk-bounce{0%,100%{-webkit-transform:scale(0)}50%{-webkit-transform:scale(1)}}@keyframes sk-bounce{0%,100%{transform:scale(0);-webkit-transform:scale(0)}50%{transform:scale(1);-webkit-transform:scale(1)}}.listening-icon{position:relative;color:var(--secondary-text-color);margin-right:-24px;margin-inline-end:-24px;margin-inline-start:initial;direction:var(--direction);transform:scaleX(var(--scale-direction))}.listening-icon[active]{color:var(--primary-color)}.unsupported{color:var(--error-color);position:absolute;--mdc-icon-size:16px;right:5px;inset-inline-end:5px;inset-inline-start:initial;top:0px}`}}]}}),n.oi);i("90977");var v=i("66193");let y=(0,s.Z)([(0,o.Mo)("ha-voice-command-dialog")],(function(e,t){return{F:class extends t{constructor(...t){super(...t),e(this)}},d:[{kind:"field",decorators:[(0,o.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_opened",value:()=>!1},{kind:"field",decorators:[(0,a.t)({key:"AssistPipelineId",state:!0,subscribe:!1})],key:"_pipelineId",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_pipeline",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_pipelines",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_preferredPipeline",value:void 0},{kind:"field",decorators:[(0,o.SB)()],key:"_errorLoadAssist",value:void 0},{kind:"field",key:"_startListening",value:()=>!1},{kind:"method",key:"showDialog",value:async function(e){"preferred"===e.pipeline_id||"last_used"===e.pipeline_id&&!this._pipelineId?(await this._loadPipelines(),this._pipelineId=this._preferredPipeline):["last_used","preferred"].includes(e.pipeline_id)||(this._pipelineId=e.pipeline_id),this._startListening=e.start_listening,this._opened=!0}},{kind:"method",key:"closeDialog",value:async function(){this._opened=!1,this._pipelines=void 0,(0,r.B)(this,"dialog-closed",{dialog:this.localName})}},{kind:"method",key:"render",value:function(){return this._opened?n.dy` <ha-dialog open @closed="${this.closeDialog}" .heading="${this.hass.localize("ui.dialogs.voice_command.title")}" flexContent hideactions> <ha-dialog-header slot="heading"> <ha-icon-button slot="navigationIcon" dialogAction="cancel" .label="${this.hass.localize("ui.common.close")}" .path="${"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"}"></ha-icon-button> <div slot="title"> ${this.hass.localize("ui.dialogs.voice_command.title")} <ha-button-menu @opened="${this._loadPipelines}" @closed="${d.U}" activatable fixed> <ha-button slot="trigger"> ${this._pipeline?.name} <ha-svg-icon slot="trailingIcon" .path="${"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}"></ha-svg-icon> </ha-button> ${this._pipelines?this._pipelines?.map((e=>n.dy`<ha-list-item ?selected="${e.id===this._pipelineId||!this._pipelineId&&e.id===this._preferredPipeline}" .pipeline="${e.id}" @click="${this._selectPipeline}" .hasMeta="${e.id===this._preferredPipeline}"> ${e.name}${e.id===this._preferredPipeline?n.dy` <ha-svg-icon slot="meta" .path="${"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"}"></ha-svg-icon> `:n.Ld} </ha-list-item>`)):n.dy`<div class="pipelines-loading"> <ha-circular-progress indeterminate size="small"></ha-circular-progress> </div>`} ${this.hass.user?.is_admin?n.dy`<li divider role="separator"></li> <a href="/config/voice-assistants/assistants"><ha-list-item>${this.hass.localize("ui.dialogs.voice_command.manage_assistants")}</ha-list-item></a>`:n.Ld} </ha-button-menu> </div> <a href="${(0,g.R)(this.hass,"/docs/assist/")}" slot="actionItems" target="_blank" rel="noopener noreferer"> <ha-icon-button .label="${this.hass.localize("ui.common.help")}" .path="${"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"}"></ha-icon-button> </a> </ha-dialog-header> ${this._pipeline?n.dy` <ha-assist-chat .hass="${this.hass}" .pipeline="${this._pipeline}" .startListening="${this._startListening}"> </ha-assist-chat> `:n.dy`<div class="pipelines-loading"> <ha-circular-progress indeterminate size="large"></ha-circular-progress> </div>`} ${this._errorLoadAssist?n.dy`<ha-alert alert-type="error"> ${this.hass.localize(`ui.dialogs.voice_command.${this._errorLoadAssist}_error_load_assist`)} </ha-alert>`:n.Ld} </ha-dialog> `:n.Ld}},{kind:"method",key:"willUpdate",value:function(e){(e.has("_pipelineId")||e.has("_opened")&&!0===this._opened&&this._pipelineId)&&this._getPipeline()}},{kind:"method",key:"_loadPipelines",value:async function(){if(this._pipelines)return;const{pipelines:e,preferred_pipeline:t}=await(0,h.SC)(this.hass);this._pipelines=e,this._preferredPipeline=t||void 0}},{kind:"method",key:"_selectPipeline",value:async function(e){this._pipelineId=e.currentTarget.pipeline,await this.updateComplete}},{kind:"method",key:"_getPipeline",value:async function(){try{this._pipeline=await(0,h.PA)(this.hass,this._pipelineId)}catch(e){"not_found"===e.code?this._errorLoadAssist="not_found":(this._errorLoadAssist="unknown",console.error(e))}}},{kind:"get",static:!0,key:"styles",value:function(){return[v.yu,n.iv`ha-dialog{--mdc-dialog-max-width:500px;--mdc-dialog-max-height:500px;--dialog-content-padding:0}ha-dialog-header a{color:var(--primary-text-color)}div[slot=title]{display:flex;flex-direction:column;margin:-4px 0}ha-button-menu{--mdc-theme-on-primary:var(--text-primary-color);--mdc-theme-primary:var(--primary-color);margin-top:-8px;margin-bottom:0;margin-right:0;margin-inline-end:0;margin-left:-8px;margin-inline-start:-8px}ha-button-menu ha-button{--mdc-theme-primary:var(--secondary-text-color);--mdc-typography-button-text-transform:none;--mdc-typography-button-font-size:unset;--mdc-typography-button-font-weight:400;--mdc-typography-button-letter-spacing:var(
            --mdc-typography-headline6-letter-spacing,
            0.0125em
          );--mdc-typography-button-line-height:var(
            --mdc-typography-headline6-line-height,
            2rem
          );--button-height:auto}ha-button-menu ha-button ha-svg-icon{height:28px;margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;direction:var(--direction)}ha-list-item{--mdc-list-item-meta-size:16px}ha-list-item ha-svg-icon{margin-left:4px;margin-inline-start:4px;margin-inline-end:initial;direction:var(--direction);display:block}ha-button-menu a{text-decoration:none}.pipelines-loading{display:flex;justify-content:center}`]}}]}}),n.oi)}};
//# sourceMappingURL=9965.49f3c402d28d24de.js.map