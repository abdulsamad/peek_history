parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"msAI":[function(require,module,exports) {
window.addEventListener("load",function(){document.querySelector(".options").classList.remove("hide")},!1),document.querySelector("#theme").addEventListener("change",function(e){var t=this.value;chrome.storage.sync.set({theme:t}),"default"===t&&location.reload()},!1),chrome.fontSettings.getFontList(function(e){var t=document.querySelector("#font");e.forEach(function(e){if(t.value!==e.displayName){var c=document.createElement("option");c.appendChild(document.createTextNode(e.displayName)),c.value=e.displayName,t.appendChild(c)}}),document.querySelector("#font").addEventListener("change",function(e){var t=this.value;document.body.style.fontFamily=t,chrome.storage.sync.set({font:t}),location.reload()},!1),M.FormSelect.init(t,{})}),document.querySelectorAll(".accent-btn").forEach(function(e){e.addEventListener("click",function(){document.querySelector(".active").classList.remove("active"),this.classList.add("active"),document.documentElement.style.setProperty("--accent",this.dataset.color),chrome.storage.sync.set({accent:this.dataset.color})},!1)}),document.querySelector("#popup-height").addEventListener("change",function(e){chrome.storage.sync.set({popupHeight:e.target.value})},!1),document.querySelector("#set-default-height").addEventListener("click",function(e){chrome.storage.sync.set({popupHeight:"495"})},!1),document.querySelector("#popup-width").addEventListener("change",function(e){chrome.storage.sync.set({popupWidth:e.target.value})},!1),document.querySelector("#set-default-width").addEventListener("click",function(e){chrome.storage.sync.set({popupWidth:"400"})},!1),document.querySelector("#hideURL").addEventListener("click",function(){!0===this.checked?chrome.storage.sync.set({hideURL:!0}):chrome.storage.sync.set({hideURL:!1})},!1),document.querySelector("#sort").addEventListener("change",function(){chrome.storage.sync.set({sort:this.value})},!1),document.querySelector("#incognitoCheckbox").addEventListener("click",function(){var e=document.querySelector("#excludedEntriesContainer");!0===this.checked?(e.classList.remove("hide"),chrome.storage.sync.set({incognito:!0})):(e.classList.add("hide"),chrome.storage.sync.set({incognito:!1}))},!1),document.querySelector("#exclusionForm").addEventListener("submit",function(e){e.preventDefault();document.querySelector("#excluded-entries-body");var t=document.querySelector("#excludeInput").value;if(""!==t){var c=new URL(t),r="*://".concat(c.host).concat(c.pathname,"*");chrome.storage.sync.get("excludedObj",function(e){var t;void 0===e.excludedObj.excludedUrlArr?chrome.storage.sync.set({excludedObj:{excludedUrlArr:[c.href],filteredArr:[r]}}):e.excludedObj.excludedUrlArr.includes(c.href)?alert("URL Already Added"):((t=e.excludedObj).excludedUrlArr.push(c.href),t.filteredArr.push(r),chrome.storage.sync.set({excludedObj:t}),location.reload())})}else alert("Enter a Valid Web Address!");document.querySelector("#excludeInput").value=""},!1),document.querySelector("#excluded-entries-body").addEventListener("click",function(e){e.target.className.includes("remove-excluded-url")&&(document.querySelector("#modalPara").innerHTML='URL: <a href="'.concat(e.target.parentElement.parentElement.querySelector(".excluded-url").innerText,'">').concat(e.target.parentElement.parentElement.querySelector(".excluded-url").innerText,"</a>"),document.querySelector("#confirmedDelete").onclick=function(){var t=new URL(e.target.parentElement.parentElement.querySelector(".excluded-url").innerText),c="*://".concat(t.host).concat(t.pathname,"*");chrome.storage.sync.get("excludedObj",function(e){var r,n,o;r=e.excludedObj,n=r.excludedUrlArr.filter(function(e){return t.href!==e}),o=r.filteredArr.filter(function(e){return c!==e}),r.filteredArr.push(c),chrome.storage.sync.set({excludedObj:{excludedUrlArr:n,filteredArr:o}})})})},!1),document.querySelector("#deleteAllExcluded").addEventListener("click",function(){document.querySelector("#modalPara").innerHTML="Are you sure you want to delete all excluded websites?",document.querySelector("#confirmedDelete").onclick=function(){chrome.storage.sync.remove("excludedObj"),chrome.storage.sync.set({excludedObj:{}}),location.reload()}});
},{}]},{},["msAI"], null)