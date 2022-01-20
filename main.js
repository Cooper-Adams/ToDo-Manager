(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(81),r=n.n(o),l=n(645),i=n.n(l)()(r());i.push([e.id,'html, body {\n    margin: 0;\n    height: 100%;\n    overflow: hidden;\n}\n\n.content {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    overflow: hidden;\n}\n\n.header {\n    flex: 0 0 auto;\n    padding: 10px 0px 10px 50px;\n    font-size: xx-large;\n    text-align: left;\n    background: #305A72;\n    border-bottom: 2px solid black;\n    overflow: hidden;\n}\n\n.mainContent {\n    flex: 1 1 auto;\n    display: flex;\n    background-color: black;\n    overflow: hidden;\n}\n\n.menu {\n    flex: 0 0 25%;\n    background-color: rgb(202, 200, 200);\n    border-right: 2px solid black;\n    font-size: x-large;\n    overflow: hidden;\n}\n\n.menu ul {\n    display: flex;\n    justify-content: center;\n    align-items: left;\n    flex-direction: column;\n    gap: 25px;\n    width: 130px;\n}\n\n.menu button {\n    margin-top: 60px;\n    background: #305A72;\n    border: 2px solid black;\n    border-radius: 50%;\n    padding: 0%;\n    font-size: 60px;\n    line-height: 0px;\n    width: 60px;\n    height: 60px;\n}\n\n.menu ul > *:hover {\n    cursor: pointer;\n}\n\n.menu ul > *:active {\n    transform: scale(.8);\n}\n\n.todoContent {\n    width: 75%;\n    height: 100%;\n    background-color: white;\n    padding: 10px;\n    text-align: center;\n    overflow: scroll;\n}\n\n/*Styles the header text and its background on the forms*/\n.formHeader \n{\n    padding-left: 10px;\n    background: #305A72;\n    text-align: left;\n    display: flex;\n    justify-content: space-between;\n}\n\n.formHeader button {\n    padding-right: 10px;\n    background: none;\n    border: none;\n    font-size: larger;\n    font-weight: bolder;\n}\n\n.formHeader button:hover {\n    cursor: pointer;\n}\n\n.formHeader button:active {\n    transform: scale(.8);\n}\n\n/*Helps position the form on the screen*/\n.loginPopup {\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n\n/*Makes the form invisible and places it in the center of the screen*/\n.formPopup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, 5%);\n    z-index: 9;\n}\n\n/*Spaces the left side form buttons*/\n.formTypes {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    border-right: 2px solid #305A72;\n}\n\n/*Organizes the form content*/\n.formContent {\n    display: flex;\n    flex-flow: row;\n}\n\n/*Styles the display shown when a user clicks the Details button on an item*/\n.displayContent {\n    background-color: white;\n    display: flex;\n    flex-flow: column;\n    min-width: 400px;\n    min-height: 275px;\n    max-height: 300px;\n    text-align: left;\n\tpadding: 10px;\n    gap: 10px;\n\tmargin:0;\n  \toverflow: scroll;\n}\n\n.displayForm {\n    display: flex;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72; \n}\n\n.toDo-Form {\n    display: flex;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72;\n}\n\n.projectForm {\n    display: none;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72;\n}\n\n.noteForm {\n    display: none;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72;\n}\n\n.toDo-Form ul, .projectForm ul, .noteForm ul {\n    min-width: 400px;\n    min-height: 275px;\n\tpadding: 10px;\n\tmargin:0;\n\tlist-style:none;\n}\n\n.toDo-Form ul li, .projectForm ul li, .noteForm ul li {\n\tdisplay: block;\n\tmargin-bottom: 10px;\n\tmin-height: 35px;\n}\n\n.toDo-Form ul li  .field-style, \n.projectForm ul li .field-style,  \n.noteForm ul li .field-style {\n\tbox-sizing: border-box; \n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n    min-height: 37px;\n\tpadding: 8px;\n\toutline: none;\n\tborder: 1px solid #B0CFE0;\n\n}\n\n.toDo-Form ul li  .field-style:focus, \n.projectForm ul li  .field-style:focus, \n.noteForm ul li  .field-style:focus{\n\tbox-shadow: 0 0 5px #B0CFE0;\n\tborder:1px solid #B0CFE0;\n}\n\n.toDo-Form ul li .field-split {\n\twidth: 49%;\n}\n\n.projectForm ul li .field-split,\n.noteForm ul li .field-split {\n    width: 100%;\n}\n\n.toDo-Form ul li input.align-left, \n.projectForm ul li input.align-left, \n.noteForm ul li input.align-left {\n\tfloat:left;\n}\n\n.toDo-Form ul li input.align-right, \n.projectForm ul li input.align-right, \n.noteForm ul li input.align-right{\n\tfloat:right;\n}\n\n.toDo-Form ul li select.align-left, \n.projectForm ul li select.align-left, \n.noteForm ul li select.align-left {\n\tfloat:left;\n}\n\n.toDo-Form ul li select.align-right, \n.projectForm ul li select.align-right, \n.noteForm ul li select.align-right{\n\tfloat:right;\n}\n\n.toDo-Form ul li textarea, \n.projectForm ul li textarea,\n.noteForm ul li textarea {\n\twidth: 100%;\n\theight: 100px;\n}\n\n.toDo-Form ul li input[type="button"], \n.toDo-Form ul li input[type="submit"], \n.projectForm ul li input[type="button"], \n.projectForm ul li input[type="submit"], \n.noteForm ul li input[type="button"], \n.noteForm ul li input[type="submit"] {\n\t-moz-box-shadow: inset 0px 1px 0px 0px #3985B1;\n\t-webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;\n\tbox-shadow: inset 0px 1px 0px 0px #3985B1;\n\tbackground-color: #216288;\n\tborder: 1px solid #17445E;\n\tcursor: pointer;\n\tcolor: #FFFFFF;\n\tpadding: 8px 18px;\n\ttext-decoration: none;\n\tfont: 12px Arial, Helvetica, sans-serif;\n}\n\n.toDo-Form ul li input[type="button"]:hover, \n.toDo-Form ul li input[type="submit"]:hover, \n.projectForm ul li input[type="button"]:hover, \n.projectForm ul li input[type="submit"]:hover, \n.noteForm ul li input[type="button"]:hover, \n.noteForm ul li input[type="submit"]:hover {\n\tbackground: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);\n\tbackground-color: #28739E;\n}\n\n#priorities {\n    display: flex;\n    justify-content: space-evenly;\n    cursor: pointer;\n}\n\n.itemType:hover {\n    cursor: pointer;\n}\n\n.itemType:active {\n    transform: scale(.9);\n}\n\n.active {\n    border-bottom: 2px solid #305A72;\n}\n\n.checkActive {\n    opacity: 50%;\n}\n\n.projectSubMenu\n{\n    display: none;\n    list-style: none;\n}\n\n.projectOption {\n    display: none;\n    cursor: pointer;\n    font-size: medium;\n}\n\n.toDoDiv {\n    background-color: rgb(202, 200, 200);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: x-large;\n    margin-top: 10px;\n}\n\n.toDoDiv button {\n    border: none;\n    background-color: rgb(202, 200, 200);\n    font-weight: bold;\n    font-size: x-large;\n}\n\n.toDoDiv button:hover {\n    cursor: pointer;\n}\n\n.toDoDiv button:active {\n    transform: scale(.9);\n}\n\n.toDoDiv .leftBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    padding-left: 10px;\n}\n\n.toDoDiv .rightBox\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    padding-right: 10px;\n}\n\n.noteDiv {\n    display: flex;\n}\n\n.column {\n    width: 33.33%;\n    padding: 0 10px;\n}\n\n.column1 {\n    padding-left: 0;\n}\n\n.column1 .noteBox:first-child {\n    margin-top: 0;\n}\n\n.column2 .noteBox:first-child {\n    margin-top: 0;\n}\n\n.column3 {\n    padding-right: 0;\n}\n\n.column3 .noteBox:first-child {\n    margin-top: 0;\n}\n\n.noteBox {\n    position: relative;\n    display: inline-block;\n    width: 200px;\n    height: fit-content;\n    padding: 0rem 2rem 2rem 2rem;\n    margin-top: 20px;\n    background-color: rgb(202, 200, 200);\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    border: 2px solid #17445E;\n}\n\n.noteBox:hover {\n    transform: scale(1.005);\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n    transition: all .2s ease-out;\n}\n\n.noteBox button {\n    background: none;\n    border: none;\n    position: absolute;\n    top: 7px;\n    right: 8px;\n}\n\n.noteBox button:hover {\n    cursor: pointer;\n}\n\n.noteBox button:active {\n    transform: scale(.8);\n}',""]);const d=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&i[s[0]]||(void 0!==l&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=l),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var l={},i=[],d=0;d<e.length;d++){var c=e[d],a=o.base?c[0]+o.base:c[0],s=l[a]||0,u="".concat(a," ").concat(s);l[a]=s+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var y=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:y,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<l.length;i++){var d=n(l[i]);t[d].references--}for(var c=o(e,r),a=0;a<l.length;a++){var s=n(l[a]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}l=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},34:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});const o=function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("header"),t.textContent="To-Do Manager";const n=document.createElement("div");n.classList.add("mainContent");const o=document.createElement("div");o.classList.add("menu");const r=document.createElement("ul"),l=document.createElement("span");l.classList.add("today"),l.textContent="Today",r.appendChild(l);const i=document.createElement("span");i.classList.add("upcoming"),i.textContent="Upcoming",r.appendChild(i);const d=document.createElement("span");d.classList.add("projects"),d.textContent="Projects";const c=document.createElement("ul");c.classList.add("projectSubMenu"),d.appendChild(c),r.appendChild(d);const a=document.createElement("span");a.classList.add("notes"),a.textContent="Notes",r.appendChild(a);const s=document.createElement("button");s.classList.add("addButton"),s.textContent="+",r.appendChild(s);const u=document.createElement("div");u.classList.add("todoContent"),o.appendChild(r),n.appendChild(o),n.appendChild(u),e.appendChild(t),e.appendChild(n)}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={id:o,exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.d(o,{Z:()=>k});const e=function e(t){const n=document.querySelector(".todoContent");if(0==t.length){for(;n.children.length>=1;)n.children[0].remove();const e=document.createElement("div");e.textContent="There's nothing here! Click the plus symbol in the menu to add a new note.",n.appendChild(e)}else{for(;n.children.length>=1;)n.children[0].remove();let o=document.createElement("div");o.classList.add("noteDiv");let r=document.createElement("div");r.classList.add("column"),r.classList.add("column1");let l=document.createElement("div");l.classList.add("column"),l.classList.add("column2");let i=document.createElement("div");i.classList.add("column"),i.classList.add("column3");let d=1;for(let o=0;o<t.length;++o){let c=document.createElement("div");c.classList.add("noteBox");let a=document.createElement("button");a.classList.add("button"),a.textContent="X",a.setAttribute("id",o),a.addEventListener("click",(function(o){if(t.splice(o.target.id,1),0==t.length)for(;n.children.length>=1;)n.children[0].remove();e(t)}));let s=document.createElement("h3");s.classList.add("noteHeader"),s.textContent=t[o].header;let u=document.createElement("span");u.classList.add("noteText"),u.textContent=t[o].description,c.appendChild(a),c.appendChild(s),c.appendChild(u),1==d?(r.appendChild(c),d++):2==d?(l.appendChild(c),d++):(i.appendChild(c),d=1)}o.appendChild(r),o.appendChild(l),o.appendChild(i),n.appendChild(o)}},t=function e(t){const n=document.querySelector(".todoContent");if(0==t.length){for(;n.children.length>=1;)n.children[0].remove();const e=document.createElement("div");e.textContent="There's nothing here! Click the plus symbol in the menu to add a new item.",n.appendChild(e)}else{for(;n.children.length>=1;)n.children[0].remove();for(let o=0;o<t.length;++o){const r=document.createElement("div");r.classList.add("toDoDiv"),1==t[o].priority?r.style.borderLeft="5px solid green":2==t[o].priority?r.style.borderLeft="5px solid yellow":r.style.borderLeft="5px solid red";const l=document.createElement("input");l.type="checkBox",l.addEventListener("click",(function(){r.classList.toggle("checkActive")}));const i=document.createElement("span");i.textContent=t[o].title;const d=document.createElement("span");d.textContent=t[o].dueDate[1]+"/"+t[o].dueDate[2]+"/"+t[o].dueDate[0];const c=document.querySelector(".loginPopup"),a=document.createElement("div");a.classList.add("formPopup");const s=document.createElement("div");s.classList.add("displayForm");const u=document.createElement("div");u.classList.add("formHeader");const p=document.createElement("h2");p.textContent="Details";const m=document.createElement("button");m.textContent="X",m.addEventListener("click",(function(){a.style.display="none"})),u.appendChild(p),u.appendChild(m);const y=document.createElement("div");y.classList.add("displayContent");const h=document.createElement("h1");h.textContent="Title: "+t[o].title;const f=document.createElement("span");f.textContent="Date: "+t[o].dueDate[1]+"/"+t[o].dueDate[2]+"/"+t[o].dueDate[0];const x=document.createElement("span");1==t[o].priority?x.textContent="Priority: Low":2==t[o].priority?x.textContent="Priority: Medium":x.textContent="Priority: High";const g=document.createElement("span");g.textContent="Description: "+t[o].description,y.appendChild(h),y.appendChild(f),y.appendChild(x),y.appendChild(g),s.appendChild(u),s.appendChild(y),a.appendChild(s),c.appendChild(a);const v=document.createElement("button");v.textContent="Details",v.addEventListener("click",(function(){a.style.display="block"}));const b=document.createElement("button");b.textContent="✎",b.setAttribute("id",o),b.addEventListener("click",(function(e){document.getElementById("popupForm").style.display="block",document.getElementById("formTypes").style.display="none",document.querySelector(".closeButton").style.display="none",document.getElementById("titleField").value=t[e.target.id].title,document.getElementById("datePicker").valueAsDate=new Date(t[o].dueDate[0],t[o].dueDate[1]-1,t[o].dueDate[2]),document.getElementById("descripField").value=t[e.target.id].description,document.getElementById("priorityField").value=t[e.target.id].priority,document.getElementById("projectField").value="today",t.splice(e.target.id,1)}));const E=document.createElement("button");E.textContent="X",E.setAttribute("id",o),E.addEventListener("click",(function(o){if(t.splice(o.target.id,1),0==t.length)for(;n.children.length>=1;)n.children[0].remove();e(t)}));const C=document.createElement("div");C.classList.add("leftBox"),C.appendChild(l),C.appendChild(i);const F=document.createElement("div");F.classList.add("rightBox"),F.appendChild(d),F.appendChild(v),F.appendChild(b),F.appendChild(E),r.appendChild(C),r.appendChild(F),n.appendChild(r)}}},r=function(e){const t=document.querySelector(".todoContent");if(0==e.length){for(;t.children.length>=1;)t.children[0].remove();const e=document.createElement("div");e.textContent="There's nothing here! Click the plus symbol in the menu to add a new item.",t.appendChild(e)}else{for(;t.children.length>=1;)t.children[0].remove();for(let n=0;n<e.length;++n){const o=document.createElement("div");o.classList.add("toDoDiv"),1==e[n].priority?o.style.borderLeft="5px solid green":2==e[n].priority?o.style.borderLeft="5px solid yellow":o.style.borderLeft="5px solid red";const r=document.createElement("input");r.type="checkBox",r.addEventListener("click",(function(){o.classList.toggle("checkActive")}));const l=document.createElement("span");l.textContent=e[n].title;const i=document.createElement("span");i.textContent=e[n].dueDate[1]+"/"+e[n].dueDate[2]+"/"+e[n].dueDate[0];const d=document.querySelector(".loginPopup"),c=document.createElement("div");c.classList.add("formPopup");const a=document.createElement("div");a.classList.add("displayForm");const s=document.createElement("div");s.classList.add("formHeader");const u=document.createElement("h2");u.textContent="Details";const p=document.createElement("button");p.textContent="X",p.addEventListener("click",(function(){c.style.display="none"})),s.appendChild(u),s.appendChild(p);const m=document.createElement("div");m.classList.add("displayContent");const y=document.createElement("h1");y.textContent="Title: "+e[n].title;const h=document.createElement("span");h.textContent="Date: "+e[n].dueDate[1]+"/"+e[n].dueDate[2]+"/"+e[n].dueDate[0];const f=document.createElement("span");1==e[n].priority?f.textContent="Priority: Low":2==e[n].priority?f.textContent="Priority: Medium":f.textContent="Priority: High";const x=document.createElement("span");x.textContent="Description: "+e[n].description,m.appendChild(y),m.appendChild(h),m.appendChild(f),m.appendChild(x),a.appendChild(s),a.appendChild(m),c.appendChild(a),d.appendChild(c);const g=document.createElement("button");g.textContent="Details",g.addEventListener("click",(function(){c.style.display="block"}));const v=document.createElement("button");v.textContent="✎",v.setAttribute("id",n),v.addEventListener("click",(function(t){document.getElementById("popupForm").style.display="block",document.getElementById("formTypes").style.display="none",document.querySelector(".closeButton").style.display="none",document.getElementById("titleField").value=e[t.target.id].title,document.getElementById("datePicker").valueAsDate=new Date(e[n].dueDate[0],e[n].dueDate[1]-1,e[n].dueDate[2]),document.getElementById("descripField").value=e[t.target.id].description,document.getElementById("priorityField").value=e[t.target.id].priority,document.getElementById("projectField").value="today",e.splice(t.target.id,1)}));const b=document.createElement("button");b.textContent="X",b.setAttribute("id",n),b.addEventListener("click",(function(n){if(e.splice(n.target.id,1),0==e.length)for(;t.children.length>=1;)t.children[0].remove();loadToday(e)}));const E=document.createElement("div");E.classList.add("leftBox"),E.appendChild(r),E.appendChild(l);const C=document.createElement("div");C.classList.add("rightBox"),C.appendChild(i),C.appendChild(g),C.appendChild(v),C.appendChild(b),o.appendChild(E),o.appendChild(C),t.appendChild(o)}}};var l=n(379),i=n.n(l),d=n(795),c=n.n(d),a=n(569),s=n.n(a),u=n(565),p=n.n(u),m=n(216),y=n.n(m),h=n(589),f=n.n(h),x=n(426),g={};g.styleTagTransform=f(),g.setAttributes=p(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=y(),i()(x.Z,g),x.Z&&x.Z.locals&&x.Z.locals;const{default:v}=n(34);let b=[],E=[],C=[];function F(){document.querySelector(".closeButton").addEventListener("click",(function(){document.querySelector(".toDo-Form").reset(),document.getElementById("popupForm").style.display="none"}));const e=document.querySelector(".project"),t=document.querySelector(".note");e.addEventListener("click",D),t.addEventListener("click",S),document.querySelector(".toDo-Form").reset(),document.querySelector(".projectForm").reset(),document.querySelector(".noteForm").reset(),document.querySelector(".toDo-Form").style.display="flex",document.querySelector(".projectForm").style.display="none",document.querySelector(".noteForm").style.display="none",document.getElementById("datePicker").valueAsDate=new Date}function D(){document.querySelector(".closeButton2").addEventListener("click",(function(){document.querySelector(".projectForm").reset(),document.getElementById("popupForm").style.display="none"}));const e=document.querySelector(".toDo2"),t=document.querySelector(".note2");e.addEventListener("click",F),t.addEventListener("click",S),document.querySelector(".toDo-Form").reset(),document.querySelector(".projectForm").reset(),document.querySelector(".noteForm").reset(),document.querySelector(".toDo-Form").style.display="none",document.querySelector(".projectForm").style.display="flex",document.querySelector(".noteForm").style.display="none"}function S(){document.querySelector(".closeButton3").addEventListener("click",(function(){document.querySelector(".noteForm").reset(),document.getElementById("popupForm").style.display="none"}));const e=document.querySelector(".toDo3"),t=document.querySelector(".project3");e.addEventListener("click",F),t.addEventListener("click",D),document.querySelector(".toDo-Form").reset(),document.querySelector(".projectForm").reset(),document.querySelector(".noteForm").reset(),document.querySelector(".toDo-Form").style.display="none",document.querySelector(".projectForm").style.display="none",document.querySelector(".noteForm").style.display="flex"}v(),t(b),document.querySelector(".today").addEventListener("click",(function(){t(b)})),document.querySelector(".upcoming").addEventListener("click",(function(){r(E)})),document.querySelector(".projects").addEventListener("click",(function(){document.querySelector(".todoContent"),document.querySelectorAll(".projectOption").forEach((e=>e.style.display="block"))})),document.querySelector(".notes").addEventListener("click",(function(){e(C)})),document.querySelector(".addButton").addEventListener("click",(function(){const e=document.querySelector(".closeButton");e.style.display="block",e.addEventListener("click",(function(){document.querySelector(".toDo-Form").reset(),document.getElementById("popupForm").style.display="none"})),document.getElementById("datePicker").valueAsDate=new Date,document.getElementById("popupForm").style.display="block",document.getElementById("formTypes").style.display="flex"})),document.querySelector(".toDo").addEventListener("click",F),document.querySelector(".project").addEventListener("click",D),document.querySelector(".note").addEventListener("click",S),document.querySelector(".toDo-Form").addEventListener("submit",(function(e){e.preventDefault();var t=new Date;t.setHours(0,0,0,0);let n=document.querySelector(".toDo-Form").elements[1].value,o=document.querySelector(".toDo-Form").elements[2].value.split("-"),r=new Date(o[0],o[1]-1,o[2]);if(r.getTime()<t.getTime())return void alert("Please enter a current or upcoming date.");let l=document.querySelector(".toDo-Form").elements[3].value,i=document.querySelector(".toDo-Form").elements[4].value,d=document.querySelector(".toDo-Form").elements[5].value;if("today"==d&&r.getTime()!==t.getTime())return void alert("For a To-Do to be in the today tab, it must have today's date.");document.querySelector(".toDo-Form").reset(),document.getElementById("popupForm").style.display="none";let c=function(e,t,n,o){return{title:e,description:t,dueDate:n,priority:o}}(n,l,o,i);k(c,d)})),document.querySelector(".projectForm").addEventListener("submit",(function(e){e.preventDefault();let t=document.querySelector(".projectForm").elements[1].value,n=document.getElementById("projectField"),o=document.createElement("option");o.textContent=t,o.value=t,n.appendChild(o);const r=document.querySelector(".projectSubMenu"),l=document.createElement("li");l.classList.add("projectOption"),l.textContent=t,r.appendChild(l),document.querySelector(".projectForm").reset(),document.getElementById("popupForm").style.display="none"})),document.querySelector(".noteForm").addEventListener("submit",(function(e){e.preventDefault();let t={header:document.querySelector(".noteForm").elements[1].value,description:document.querySelector(".noteForm").elements[2].value};k(t,"notes"),document.querySelector(".noteForm").reset(),document.getElementById("popupForm").style.display="none"}));const k=function(n,o){"today"==o?0==b.length?(b.push(n),t(b)):(b.push(n),b.sort((function(e,t){return t.priority-e.priority})),t(b)):"upcoming"==o?0==E.length?(E.push(n),r(E)):(E.push(n),E.sort((function(e,t){return t.priority-e.priority})),r(E)):"notes"==o?(C.unshift(n),e(C)):0==something.length&&(something.push(n),loadSomething(something))}})()})();