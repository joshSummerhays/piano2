webpackJsonp([1,2],{332:function(e,n,t){var r=t(591);"string"==typeof r&&(r=[[e.i,r,""]]);t(620)(r,{});r.locals&&(e.exports=r.locals)},591:function(e,n,t){n=e.exports=t(592)(),n.push([e.i,"*, *:before, *:after{\n  box-sizing:border-box;\n  position:relative;\n  margin-left:0;\n  margin-right:0;\n  padding:0; }\n\n.top-bar-color{\n  background-color:black;\n  padding:.5rem; }\n\n.logo{\n  color:white; }\n\n.big-button{\n  background-color:black; }\n\n.video-thumb{\n  max-width:100%;\n  height:auto; }\n\n.top-hr{\n  max-width:97% !important; }\n  @media screen and (min-width: 1200px){\n    .top-hr{\n      max-width:75rem; } }\n\n.middle-container{\n  display:flex;\n  justify-content:center; }\n  .middle-container .middle-wait{\n    align-self:center; }\n    .middle-container .middle-wait .middle-button{\n      background-color:black; }\n  .middle-container .middle-seperator{\n    width:100px; }\n  .middle-container .middle-pay{\n    align-self:center; }\n    .middle-container .middle-pay .middle-button{\n      background-color:black; }\n\n.footer-links{\n  padding-left:0.4rem !important;\n  padding-right:0.4rem !important; }\n  @media screen and (min-width: 370px){\n    .footer-links{\n      padding-left:1rem !important;\n      padding-right:1rem !important; } }\n",""])},592:function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},620:function(e,n){function t(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=u[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(d(r.parts[o],n))}else{for(var a=[],o=0;o<r.parts.length;o++)a.push(d(r.parts[o],n));u[r.id]={id:r.id,refs:1,parts:a}}}}function r(e){for(var n=[],t={},r=0;r<e.length;r++){var i=e[r],o=i[0],a=i[1],s=i[2],d=i[3],l={css:a,media:s,sourceMap:d};t[o]?t[o].parts.push(l):n.push(t[o]={id:o,parts:[l]})}return n}function i(e,n){var t=m(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),b.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function o(e){e.parentNode.removeChild(e);var n=b.indexOf(e);n>=0&&b.splice(n,1)}function a(e){var n=document.createElement("style");return n.type="text/css",i(e,n),n}function s(e){var n=document.createElement("link");return n.rel="stylesheet",i(e,n),n}function d(e,n){var t,r,i;if(n.singleton){var d=v++;t=g||(g=a(n)),r=l.bind(null,t,d,!1),i=l.bind(null,t,d,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(n),r=f.bind(null,t),i=function(){o(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(n),r=c.bind(null,t),i=function(){o(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}function l(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function c(e,n){var t=n.css,r=n.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}function f(e,n){var t=n.css,r=n.sourceMap;r&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([t],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var u={},p=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},h=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=p(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,b=[];e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");n=n||{},"undefined"==typeof n.singleton&&(n.singleton=h()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var i=r(e);return t(i,n),function(e){for(var o=[],a=0;a<i.length;a++){var s=i[a],d=u[s.id];d.refs--,o.push(d)}if(e){var l=r(e);t(l,n)}for(var a=0;a<o.length;a++){var d=o[a];if(0===d.refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete u[d.id]}}}};var y=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},623:function(e,n,t){e.exports=t(332)}},[623]);
//# sourceMappingURL=styles.dcdf382c228d4434ef4c.bundle.map