!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")},n=null,e=function(){document.body.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)))};t.btnStart.addEventListener("click",(function(){t.btnStart.setAttribute("disabled",""),n=setInterval(e,1e3)})),t.btnStop.addEventListener("click",(function(){t.btnStart.removeAttribute("disabled"),clearInterval(n)}))}();
//# sourceMappingURL=01-color-switcher.5ef07448.js.map
