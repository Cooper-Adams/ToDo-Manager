(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),r=n.n(o),l=n(645),i=n.n(l)()(r());i.push([e.id,'html, body {\n    margin: 0;\n    height: 100%;\n    overflow: hidden;\n}\n\n.content {\n    display: flex;\n    flex-flow: column;\n    height: 100%;\n    overflow: hidden;\n}\n\n.header {\n    flex: 0 0 auto;\n    padding: 10px 0px 10px 50px;\n    font-size: xx-large;\n    text-align: left;\n    background: #305A72;\n    border-bottom: 2px solid black;\n    overflow: hidden;\n}\n\n.mainContent {\n    flex: 1 1 auto;\n    display: flex;\n    background-color: black;\n    overflow: hidden;\n}\n\n.menu {\n    flex: 0 0 25%;\n    background-color: rgb(202, 200, 200);\n    border-right: 2px solid black;\n    font-size: x-large;\n    overflow: hidden;\n}\n\n.menu ul {\n    display: flex;\n    justify-content: center;\n    align-items: left;\n    flex-direction: column;\n    width: 160px;\n}\n\n.upcoming, .notes, .projects {\n    margin-top: 25px;\n}\n\n.menu button {\n    margin-top: 60px;\n    background: #305A72;\n    border: 2px solid black;\n    border-radius: 50%;\n    line-height: 0px;\n    font-size: 60px;\n    width: 60px;\n    height: 60px;\n    position: absolute;\n    bottom: 45px;\n    left: 45px;\n}\n\n.menu button:hover {\n    cursor: pointer;\n}\n\n.menu ul span:hover {\n\ttext-shadow: 2px 2px 10px #28739E;\n    cursor: pointer;\n}\n\n.todoContent {\n    width: 75%;\n    height: 100%;\n    background-color: white;\n    padding: 10px;\n    text-align: center;\n    overflow: auto;\n}\n\n/*Styles the header text and its background on the forms*/\n.formHeader \n{\n    padding-left: 10px;\n    background: #305A72;\n    text-align: left;\n    display: flex;\n    justify-content: space-between;\n}\n\n.formHeader button {\n    padding-right: 10px;\n    background: none;\n    border: none;\n    font-size: larger;\n    font-weight: bolder;\n}\n\n.formHeader button:hover {\n    cursor: pointer;\n}\n\n.formHeader button:active {\n    transform: scale(.8);\n}\n\n/*Helps position the form on the screen*/\n.loginPopup {\n    position: relative;\n    text-align: center;\n    width: 100%;\n}\n\n/*Makes the form invisible and places it in the center of the screen*/\n.formPopup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 0%;\n    transform: translate(-50%, 5%);\n    z-index: 9;\n}\n\n/*Spaces the left side form buttons*/\n.formTypes {\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n    gap: 50px;\n    border-right: 2px solid #305A72;\n}\n\n/*Organizes the form content*/\n.formContent {\n    display: flex;\n    flex-flow: row;\n}\n\n/*Styles the display shown when a user clicks the Details button on an item*/\n.displayContent {\n    background-color: white;\n    display: flex;\n    flex-flow: column;\n    min-width: 400px;\n    min-height: 275px;\n    max-height: 300px;\n    text-align: left;\n\tpadding: 10px;\n    gap: 10px;\n\tmargin: 0;\n    overflow-wrap: break-word;\n  \toverflow-y: auto;\n}\n\n.displayForm {\n    display: flex;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72; \n}\n\n.toDo-Form {\n    display: flex;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72;\n}\n\n.projectForm {\n    display: none;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72;\n}\n\n.noteForm {\n    display: none;\n    flex-flow: column;\n\tmax-width: 600px;\n\tbackground: #FAFAFA;\n\tmargin: 50px auto;\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n\tborder-radius: 10px;\n\tborder: 6px solid #305A72;\n}\n\n.toDo-Form ul, .projectForm ul, .noteForm ul {\n    min-width: 400px;\n    min-height: 275px;\n\tpadding: 10px;\n\tmargin:0;\n\tlist-style:none;\n}\n\n.toDo-Form ul li, .projectForm ul li, .noteForm ul li {\n\tdisplay: block;\n\tmargin-bottom: 10px;\n\tmin-height: 35px;\n}\n\n.toDo-Form ul li  .field-style, \n.projectForm ul li .field-style,  \n.noteForm ul li .field-style {\n\tbox-sizing: border-box; \n\t-webkit-box-sizing: border-box;\n\t-moz-box-sizing: border-box;\n    min-height: 37px;\n\tpadding: 8px;\n\toutline: none;\n\tborder: 1px solid #B0CFE0;\n\n}\n\n.toDo-Form ul li  .field-style:focus, \n.projectForm ul li  .field-style:focus, \n.noteForm ul li  .field-style:focus{\n\tbox-shadow: 0 0 5px #B0CFE0;\n\tborder:1px solid #B0CFE0;\n}\n\n.toDo-Form ul li .field-split {\n\twidth: 49%;\n}\n\n.projectForm ul li .field-split,\n.noteForm ul li .field-split {\n    width: 100%;\n}\n\n.toDo-Form ul li input.align-left, \n.projectForm ul li input.align-left, \n.noteForm ul li input.align-left {\n\tfloat:left;\n}\n\n.toDo-Form ul li input.align-right, \n.projectForm ul li input.align-right, \n.noteForm ul li input.align-right{\n\tfloat:right;\n}\n\n.toDo-Form ul li select.align-left, \n.projectForm ul li select.align-left, \n.noteForm ul li select.align-left {\n\tfloat:left;\n}\n\n.toDo-Form ul li select.align-right, \n.projectForm ul li select.align-right, \n.noteForm ul li select.align-right{\n\tfloat:right;\n}\n\n.toDo-Form ul li textarea, \n.projectForm ul li textarea,\n.noteForm ul li textarea {\n\twidth: 100%;\n\theight: 100px;\n}\n\n.toDo-Form ul li input[type="button"], \n.toDo-Form ul li input[type="submit"], \n.projectForm ul li input[type="button"], \n.projectForm ul li input[type="submit"], \n.noteForm ul li input[type="button"], \n.noteForm ul li input[type="submit"] {\n\t-moz-box-shadow: inset 0px 1px 0px 0px #3985B1;\n\t-webkit-box-shadow: inset 0px 1px 0px 0px #3985B1;\n\tbox-shadow: inset 0px 1px 0px 0px #3985B1;\n\tbackground-color: #216288;\n\tborder: 1px solid #17445E;\n\tcursor: pointer;\n\tcolor: #FFFFFF;\n\tpadding: 8px 18px;\n\ttext-decoration: none;\n\tfont: 12px Arial, Helvetica, sans-serif;\n}\n\n.toDo-Form ul li input[type="button"]:hover, \n.toDo-Form ul li input[type="submit"]:hover, \n.projectForm ul li input[type="button"]:hover, \n.projectForm ul li input[type="submit"]:hover, \n.noteForm ul li input[type="button"]:hover, \n.noteForm ul li input[type="submit"]:hover {\n\tbackground: linear-gradient(to bottom, #2D77A2 5%, #337DA8 100%);\n\tbackground-color: #28739E;\n}\n\n#priorities {\n    display: flex;\n    justify-content: space-evenly;\n    cursor: pointer;\n}\n\n.itemType:hover {\n    cursor: pointer;\n}\n\n.itemType:active {\n    transform: scale(.9);\n}\n\n.active {\n    border-bottom: 2px solid #305A72;\n}\n\n.checkActive {\n    opacity: 50%;\n}\n\n.projectSubMenu {\n    max-height: 100px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    text-align: right;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n}\n\n.projectSubMenu span {\n    font-size: 17px;\n    padding-right: 10px;\n    cursor: pointer;\n}\n\n.toDoDiv {\n    background-color: rgb(202, 200, 200);\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: x-large;\n    margin-top: 10px;\n}\n\n.toDoDiv button {\n    border: none;\n    background-color: rgb(202, 200, 200);\n    font-weight: bold;\n    font-size: x-large;\n}\n\n.toDoDiv button:hover {\n    cursor: pointer;\n}\n\n.toDoDiv button:active {\n    transform: scale(.9);\n}\n\n.toDoDiv .leftBox {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    padding-left: 10px;\n}\n\n.toDoDiv .rightBox\n{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 15px;\n    padding-right: 10px;\n}\n\n.noteDiv {\n    display: flex;\n}\n\n.column {\n    width: 33.33%;\n    padding: 0 10px;\n}\n\n.column1 {\n    padding-left: 0;\n}\n\n.column1 .noteBox:first-child {\n    margin-top: 0;\n}\n\n.column2 .noteBox:first-child {\n    margin-top: 0;\n}\n\n.column3 {\n    padding-right: 0;\n}\n\n.column3 .noteBox:first-child {\n    margin-top: 0;\n}\n\n.noteBox {\n    position: relative;\n    display: inline-block;\n    width: 200px;\n    height: fit-content;\n    padding: 0rem 2rem 2rem 2rem;\n    margin-top: 20px;\n    background-color: rgb(202, 200, 200);\n    word-wrap: break-word;\n    overflow-wrap: break-word;\n    border: 2px solid #17445E;\n}\n\n.noteBox:hover {\n    transform: scale(1.005);\n\tbox-shadow: 1px 1px 25px rgba(0, 0, 0, 0.35);\n    transition: all .2s ease-out;\n}\n\n.noteBox button {\n    background: none;\n    border: none;\n    position: absolute;\n    top: 7px;\n    right: 8px;\n}\n\n.noteBox button:hover {\n    cursor: pointer;\n}\n\n.noteBox button:active {\n    transform: scale(.8);\n}\n\n.projects:hover {\n    cursor: default;\n}\n\n.projectContainer {\n    padding: 0;\n    margin: 0;\n}\n\n.projectDeleteBtn {\n    font-weight: bold;\n    margin-right: 1rem;\n}\n\n.projectDeleteBtn:hover {\n    cursor: pointer;\n}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,l){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var a=0;a<e.length;a++){var s=[].concat(e[a]);o&&i[s[0]]||(void 0!==l&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=l),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var l={},i=[],c=0;c<e.length;c++){var d=e[c],a=o.base?d[0]+o.base:d[0],s=l[a]||0,u="".concat(a," ").concat(s);l[a]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var g=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var l=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<l.length;i++){var c=n(l[i]);t[c].references--}for(var d=o(e,r),a=0;a<l.length;a++){var s=n(l[a]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}l=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var l=n.sourceMap;l&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(l))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={id:o,exports:{}};return e[o](l,l.exports,n),l.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};(()=>{n.d(o,{Pz:()=>I,xt:()=>D,FA:()=>q});const e=function e(t){const n=document.querySelector(".todoContent");if(0==t.length){for(;n.children.length>=1;)n.children[0].remove();const e=document.createElement("div");e.textContent="There's nothing here! Click the plus symbol in the menu to add a new note.",n.appendChild(e)}else{for(;n.children.length>=1;)n.children[0].remove();let o=document.createElement("div");o.classList.add("noteDiv");let r=document.createElement("div");r.classList.add("column"),r.classList.add("column1");let l=document.createElement("div");l.classList.add("column"),l.classList.add("column2");let i=document.createElement("div");i.classList.add("column"),i.classList.add("column3");let c=1;for(let n=0;n<t.length;++n){let o=document.createElement("div");o.classList.add("noteBox");let d=document.createElement("button");d.classList.add("button"),d.textContent="X",d.setAttribute("id",n),d.addEventListener("click",(function(n){t.splice(n.target.id,1),q(t,"note"),e(t)}));let a=document.createElement("h3");a.classList.add("noteHeader"),a.textContent=t[n].header;let s=document.createElement("span");s.classList.add("noteText"),s.textContent=t[n].description,o.appendChild(d),o.appendChild(a),o.appendChild(s),1==c?(r.appendChild(o),c++):2==c?(l.appendChild(o),c++):(i.appendChild(o),c=1)}o.appendChild(r),o.appendChild(l),o.appendChild(i),n.appendChild(o)}},t=function e(t){const n=document.querySelector(".todoContent");for(;n.children.length>=1;)n.children[0].remove();if(0==t.length){const e=document.createElement("div");e.textContent="There's nothing here! Click the plus symbol in the menu to add a new item.",n.appendChild(e)}else for(let o=0;o<t.length;++o){const r=document.createElement("div");r.classList.add("toDoDiv"),1==t[o].priority?r.style.borderLeft="5px solid green":2==t[o].priority?r.style.borderLeft="5px solid yellow":r.style.borderLeft="5px solid red";const l=document.createElement("input");l.type="checkBox",l.addEventListener("click",(function(){r.classList.toggle("checkActive")}));const i=document.createElement("span");i.textContent=t[o].title;const c=document.createElement("span");c.textContent=t[o].dueDate[1]+"/"+t[o].dueDate[2]+"/"+t[o].dueDate[0];const d=document.querySelector(".loginPopup"),a=document.createElement("div");a.classList.add("formPopup");const s=document.createElement("div");s.classList.add("displayForm");const u=document.createElement("div");u.classList.add("formHeader");const p=document.createElement("h2");p.textContent="Details";const m=document.createElement("button");m.textContent="X",m.addEventListener("click",(function(){a.style.display="none"})),u.appendChild(p),u.appendChild(m);const g=document.createElement("div");g.classList.add("displayContent");const h=document.createElement("h1");h.textContent="Title: "+t[o].title;const f=document.createElement("span");f.textContent="Date: "+t[o].dueDate[1]+"/"+t[o].dueDate[2]+"/"+t[o].dueDate[0];const y=document.createElement("span");1==t[o].priority?y.textContent="Priority: Low":2==t[o].priority?y.textContent="Priority: Medium":y.textContent="Priority: High";const x=document.createElement("span");x.textContent="Description: "+t[o].description,g.appendChild(h),g.appendChild(f),g.appendChild(y),g.appendChild(x),s.appendChild(u),s.appendChild(g),a.appendChild(s),d.appendChild(a);const v=document.createElement("button");v.textContent="Details",v.addEventListener("click",(function(){a.style.display="block"}));const b=document.createElement("button");b.textContent="✎",b.setAttribute("id",o),b.addEventListener("click",(function(e){document.getElementById("popupForm").style.display="block",document.getElementById("formTypes").style.display="none",document.querySelector(".closeButton").style.display="none",document.getElementById("titleField").value=t[e.target.id].title,document.getElementById("datePicker").valueAsDate=new Date(t[o].dueDate[0],t[o].dueDate[1]-1,t[o].dueDate[2]),document.getElementById("descripField").value=t[e.target.id].description,document.getElementById("priorityField").value=t[e.target.id].priority,document.getElementById("projectField").value=t[e.target.id].project,t.splice(e.target.id,1)}));const S=document.createElement("button");S.textContent="X",S.setAttribute("id",o),S.addEventListener("click",(function(n){let r;r="today"==t[o].project?"today":"upcoming"==t[o].project?"upcoming":"user",t.splice(o,1),q(t,r),e(t)}));const F=document.createElement("div");F.classList.add("leftBox"),F.appendChild(l),F.appendChild(i);const E=document.createElement("div");E.classList.add("rightBox"),E.appendChild(c),E.appendChild(v),E.appendChild(b),E.appendChild(S),r.appendChild(F),r.appendChild(E),n.appendChild(r)}};function r(e,t,n,o,r){return{title:e,description:t,dueDate:n,priority:o,project:r}}function l(e,t){return{header:e,description:t}}var i=n(379),c=n.n(i),d=n(795),a=n.n(d),s=n(569),u=n.n(s),p=n(565),m=n.n(p),g=n(216),h=n.n(g),f=n(589),y=n.n(f),x=n(426),v={};v.styleTagTransform=y(),v.setAttributes=m(),v.insert=u().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=h(),c()(x.Z,v),x.Z&&x.Z.locals&&x.Z.locals;let b=[],S=[],F=[],E=[],C=[];function D(n,o){if("today"==o){let e;F[0].push(n),L(F[0]);for(let t=0;t<F[0].length;++t)if(F[0][t].title==n.title){e=t;break}q(F[0],"today"),t(F[0])}else if("upcoming"==o)F[1].push(n),L(F[1]),q(F[1],"upcoming"),t(F[1]);else if("notes"==o)E.unshift(n),localStorage.setItem("noteTitle"+(E.length-1),n.header),localStorage.setItem("noteDescription"+(E.length-1),n.description),e(E);else{for(let e=0;e<C.length;++e)if(o==C[e])return F[e+2].push(n),L(F[e+2]),q(F[e+2],o),t(F[e+2]),void document.getElementById(o).addEventListener("click",(function(){t(F[e+2])}));let e=[];C.push(o),F.push(e),localStorage.setItem("projects",C);let r=C.length-1;const l=document.querySelector(".projectSubMenu"),i=document.createElement("div");i.classList.add("projectContainer");const c=document.createElement("span");c.textContent="-",c.classList.add("projectDeleteBtn"),c.setAttribute("id",r),c.addEventListener("click",B);const d=document.createElement("span");d.setAttribute("id",o),d.textContent=o,i.appendChild(c),i.appendChild(d),l.appendChild(i)}}function j(){document.querySelector(".closeButton").addEventListener("click",(function(){document.querySelector(".toDo-Form").reset(),document.getElementById("popupForm").style.display="none"}));const e=document.querySelector(".project"),t=document.querySelector(".note");e.addEventListener("click",w),t.addEventListener("click",k),document.querySelector(".toDo-Form").reset(),document.querySelector(".projectForm").reset(),document.querySelector(".noteForm").reset(),document.querySelector(".toDo-Form").style.display="flex",document.querySelector(".projectForm").style.display="none",document.querySelector(".noteForm").style.display="none",document.getElementById("datePicker").valueAsDate=new Date}function w(){document.querySelector(".closeButton2").addEventListener("click",(function(){document.querySelector(".projectForm").reset(),document.getElementById("popupForm").style.display="none"}));const e=document.querySelector(".toDo2"),t=document.querySelector(".note2");e.addEventListener("click",j),t.addEventListener("click",k),document.querySelector(".toDo-Form").reset(),document.querySelector(".projectForm").reset(),document.querySelector(".noteForm").reset(),document.querySelector(".toDo-Form").style.display="none",document.querySelector(".projectForm").style.display="flex",document.querySelector(".noteForm").style.display="none"}function k(){document.querySelector(".closeButton3").addEventListener("click",(function(){document.querySelector(".noteForm").reset(),document.getElementById("popupForm").style.display="none"}));const e=document.querySelector(".toDo3"),t=document.querySelector(".project3");e.addEventListener("click",j),t.addEventListener("click",w),document.querySelector(".toDo-Form").reset(),document.querySelector(".projectForm").reset(),document.querySelector(".noteForm").reset(),document.querySelector(".toDo-Form").style.display="none",document.querySelector(".projectForm").style.display="none",document.querySelector(".noteForm").style.display="flex"}function I(e){for(let t=0;t<C.length;++t)if(e==C[t])return!1;return!0}function L(e){e.sort((function(e,t){return t.priority-e.priority}))}function q(e,t){if(e.length>0)for(let n=0;n<e.length;++n)"note"!=t?("today"!=t&&"upcoming"!=t&&localStorage.setItem(t+"Project"+n,e[n].project),localStorage.setItem(t+"Title"+n,e[n].title),localStorage.setItem(t+"Description"+n,e[n].description),localStorage.setItem(t+"Date"+n,e[n].dueDate),localStorage.setItem(t+"Priority"+n,e[n].priority)):(localStorage.setItem(t+"Title"+n,e[n].header),localStorage.setItem(t+"Description"+n,e[n].description));if(localStorage.getItem(t+"Title"+e.length)){if("note"==t)return localStorage.removeItem(t+"Title"+e.length),void localStorage.removeItem(t+"Description"+e.length);localStorage.removeItem(t+"Title"+e.length),localStorage.removeItem(t+"Description"+e.length),localStorage.removeItem(t+"Date"+e.length),localStorage.removeItem(t+"Priority"+e.length),"today"!=t&&"upcoming"!=t&&localStorage.removeItem(t+"Project"+e.length)}}function B(e){let n=C[e.target.id];C.splice(e.target.id,1),e.target.parentNode.parentNode.removeChild(e.target.parentNode);let o=2+parseInt(e.target.id);console.log(o);for(let e=0;e<F[o].length;++e)localStorage.getItem(n+"Title"+e)&&(localStorage.removeItem(n+"Title"+e),localStorage.removeItem(n+"Description"+e),localStorage.removeItem(n+"Date"+e),localStorage.removeItem(n+"Priority"+e),localStorage.removeItem(n+"Project"+e));F.splice(o,1),console.log(F);let r=document.getElementById("projectField");r.removeChild(r.childNodes[o-2+5]);const l=document.querySelectorAll(".projectDeleteBtn");if(null!==l)for(const e of l)e.setAttribute("id",o-2),o++;0==C.length?localStorage.removeItem("projects"):localStorage.setItem("projects",C),t(b)}F.push(b),F.push(S),function(){const e=document.querySelector(".content"),t=document.createElement("div");t.classList.add("header"),t.textContent="To-Do Manager";const n=document.createElement("div");n.classList.add("mainContent");const o=document.createElement("div");o.classList.add("menu");const r=document.createElement("ul"),l=document.createElement("span");l.classList.add("today"),l.textContent="Today",r.appendChild(l);const i=document.createElement("span");i.classList.add("upcoming"),i.textContent="Upcoming",r.appendChild(i);const c=document.createElement("span");c.classList.add("notes"),c.textContent="Notes",r.appendChild(c);const d=document.createElement("span");d.classList.add("projects"),d.textContent="Projects",r.appendChild(d);const a=document.createElement("div");a.classList.add("projectSubMenu"),r.appendChild(a);const s=document.createElement("button");s.classList.add("addButton"),s.textContent="+",r.appendChild(s);const u=document.createElement("div");u.classList.add("todoContent"),o.appendChild(r),n.appendChild(o),n.appendChild(u),e.appendChild(t),e.appendChild(n)}(),function(){if(localStorage.getItem("projects")){C=localStorage.getItem("projects").split(",");for(let e=0;e<C.length;++e){let n=[];F.push(n);let o=document.getElementById("projectField"),r=document.createElement("option");r.textContent=C[e],r.value=C[e],o.appendChild(r);const l=document.querySelector(".projectSubMenu"),i=document.createElement("div");i.classList.add("projectContainer");const c=document.createElement("span");c.textContent="-",c.classList.add("projectDeleteBtn"),c.setAttribute("id",e),c.addEventListener("click",B);const d=document.createElement("span");d.setAttribute("id",C[e]),d.textContent=C[e],i.appendChild(c),i.appendChild(d),l.appendChild(i),d.addEventListener("click",(function(){t(F[e+2])}))}}for(let e=0;e<localStorage.length;++e){if(localStorage.getItem("todayTitle"+e)){let t=r(localStorage.getItem("todayTitle"+e),localStorage.getItem("todayDescription"+e),localStorage.getItem("todayDate"+e).split(","),localStorage.getItem("todayPriority"+e),"today");b.push(t)}if(localStorage.getItem("upcomingTitle"+e)){let t=r(localStorage.getItem("upcomingTitle"+e),localStorage.getItem("upcomingDescription"+e),localStorage.getItem("upcomingDate"+e).split(","),localStorage.getItem("upcomingPriority"+e),"upcoming");S.push(t)}for(let t=0;t<C.length;++t)if(localStorage.getItem(C[t]+"Title"+e)){let n=r(localStorage.getItem(C[t]+"Title"+e),localStorage.getItem(C[t]+"Description"+e),localStorage.getItem(C[t]+"Date"+e).split(","),localStorage.getItem(C[t]+"Priority"+e),localStorage.getItem(C[t]+"Project"+e));F[t+2].push(n)}if(localStorage.getItem("noteTitle"+e)){let t=l(localStorage.getItem("noteTitle"+e),localStorage.getItem("noteDescription"+e));E.unshift(t)}for(let e=0;e<F.length;++e)L(F[e])}}(),t(F[0]),document.querySelector(".today").addEventListener("click",(function(){t(F[0])})),document.querySelector(".upcoming").addEventListener("click",(function(){t(F[1])})),document.querySelector(".notes").addEventListener("click",(function(){e(E)})),document.querySelector(".addButton").addEventListener("click",(function(){const e=document.querySelector(".closeButton");e.style.display="block",e.addEventListener("click",(function(){document.querySelector(".toDo-Form").reset(),document.getElementById("popupForm").style.display="none"})),document.getElementById("datePicker").valueAsDate=new Date,document.getElementById("popupForm").style.display="block",document.getElementById("formTypes").style.display="flex"})),document.querySelector(".projects").addEventListener("click",(()=>{!function(e){const t=document.querySelector(".todoContent");for(;t.children.length>=1;)t.children[0].remove();if(0==e.length){const e=document.createElement("div");e.textContent="There are no projects! Click the plus symbol in the menu to create a new project.",t.appendChild(e)}else{const e=document.createElement("div");e.textContent="Select a project in the menu to see its tasks!",t.appendChild(e)}}(C)})),document.querySelector(".toDo").addEventListener("click",j),document.querySelector(".project").addEventListener("click",w),document.querySelector(".note").addEventListener("click",k),document.querySelector(".toDo-Form").addEventListener("submit",(function(e){e.preventDefault();var t=new Date;t.setHours(0,0,0,0);let n=document.querySelector(".toDo-Form").elements[1].value,o=document.querySelector(".toDo-Form").elements[2].value.split("-"),l=new Date(o[0],o[1]-1,o[2]);if(l.getTime()<t.getTime())return void alert("Please enter a current or upcoming date.");let i=document.querySelector(".toDo-Form").elements[3].value,c=document.querySelector(".toDo-Form").elements[4].value,d=document.querySelector(".toDo-Form").elements[5].value;"today"!=d||l.getTime()===t.getTime()?(document.querySelector(".toDo-Form").reset(),document.getElementById("popupForm").style.display="none",D(r(n,i,o,c,d),d)):alert("For a To-Do to be in the today tab, it must have today's date.")})),document.querySelector(".projectForm").addEventListener("submit",(function(e){e.preventDefault();let t=document.querySelector(".projectForm").elements[1].value;if(!I(t))return void alert("Project names must be different.");let n=document.getElementById("projectField"),o=document.createElement("option");o.textContent=t,o.value=t,n.appendChild(o),document.querySelector(".projectForm").reset(),document.getElementById("popupForm").style.display="none",D(t,t)})),document.querySelector(".noteForm").addEventListener("submit",(function(e){e.preventDefault(),D(l(document.querySelector(".noteForm").elements[1].value,document.querySelector(".noteForm").elements[2].value),"notes"),document.querySelector(".noteForm").reset(),document.getElementById("popupForm").style.display="none"}))})()})();