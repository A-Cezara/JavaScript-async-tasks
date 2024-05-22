const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");let a=null;e.addEventListener("click",(()=>{a=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),r.addEventListener("click",(()=>{clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.9b35ef07.js.map
