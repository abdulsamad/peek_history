parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"msAI":[function(require,module,exports) {
window.addEventListener("load",function(){document.querySelector(".options").classList.remove("hide")},!1),document.querySelector("#theme").addEventListener("change",function(e){var t=this.value;chrome.storage.sync.set({theme:t}),"default"===t&&location.reload()},!1),chrome.fontSettings.getFontList(function(e){var t=document.querySelector("#font");e.forEach(function(e){if(t.value!==e.displayName){var n=document.createElement("option");n.appendChild(document.createTextNode(e.displayName)),n.value=e.displayName,t.appendChild(n)}}),document.querySelector("#font").addEventListener("change",function(e){if(document.body.style.fontFamily=this.value,"default"!==this.value){var t=this.value;chrome.storage.sync.set({font:t}),location.reload()}},!1),M.FormSelect.init(t,{})}),document.querySelectorAll(".accent-btn").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".active").classList.remove("active"),this.classList.add("active"),document.documentElement.style.setProperty("--accent",this.dataset.color),chrome.storage.sync.set({accent:this.dataset.color})},!1)}),document.querySelector("#sort").addEventListener("change",function(){chrome.storage.sync.set({sort:this.value})},!1),document.querySelector("#incognitoCheckbox").addEventListener("click",function(){var e=document.querySelector("#excludedEntriesContainer");!0===this.checked?(e.classList.remove("hide"),chrome.storage.sync.set({incognito:!0})):(e.classList.add("hide"),chrome.storage.sync.set({incognito:!1}))},!1),document.querySelector("#exclusionForm").addEventListener("submit",function(e){e.preventDefault();var t=document.querySelector("#excludeInput").value,n=document.querySelector("#excluded-entries-body");if(""!==t){var c=new URL(t);n.innerHTML+='\n\t\t\t<tr>\n\t\t\t\t<td class="excluded-url-name">'.concat(c.host,'</td>\n\t\t\t\t<td class="excluded-url" title="').concat(t,'">').concat(t,'</td>\n\t\t\t\t<td><button class="btn-small remove-excluded-url waves-effect waves-light red accent-4">Remove</button></td>\n\t\t\t</tr>')}},!1),document.querySelector("#excluded-entries-body").addEventListener("click",function(e){e.target.className.includes("remove-excluded-url")&&e.target.parentElement.parentElement.remove()},!1);
},{}]},{},["msAI"], null)