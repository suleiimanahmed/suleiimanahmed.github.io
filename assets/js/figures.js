(function(){
  "use strict";
  var tip=document.createElement("div");tip.className="fx-tip";tip.hidden=true;tip.setAttribute("role","tooltip");document.body.appendChild(tip);
  function place(x,y){var w=tip.offsetWidth,h=tip.offsetHeight;var nx=Math.min(Math.max(8,x+14),window.innerWidth-w-8);var ny=y+18+h>window.innerHeight?Math.max(8,y-h-14):y+18;tip.style.left=nx+"px";tip.style.top=ny+"px";}
  function show(t,x,y){tip.textContent=t;tip.hidden=false;place(x,y);}
  function hide(){tip.hidden=true;}
  document.querySelectorAll(".fx-fig").forEach(function(fig){
    var info=fig.querySelector(".fx-info"),btns=fig.querySelectorAll(".fx-btn"),hint=info?info.textContent:"";
    function setFocus(layer){
      if(layer){fig.setAttribute("data-focus",layer);}else{fig.removeAttribute("data-focus");}
      btns.forEach(function(b){b.setAttribute("aria-pressed",String((b.dataset.layer||"")===(layer||"")));});
      if(info){var b=fig.querySelector('.fx-btn[data-layer="'+layer+'"]');info.textContent=layer&&b?b.dataset.info:hint;}
    }
    btns.forEach(function(b){b.addEventListener("click",function(){var l=b.dataset.layer||"";setFocus(fig.getAttribute("data-focus")===l?"":l);});});
    fig.querySelectorAll("svg [data-tip]").forEach(function(g){
      g.addEventListener("mousemove",function(e){show(g.getAttribute("data-tip"),e.clientX,e.clientY);});
      g.addEventListener("mouseleave",hide);
      g.addEventListener("focus",function(){var r=g.getBoundingClientRect();show(g.getAttribute("data-tip"),r.left+r.width/2,r.top+r.height/2);});
      g.addEventListener("blur",hide);
    });
  });
  document.addEventListener("keydown",function(e){if(e.key==="Escape")hide();});
  window.addEventListener("scroll",hide,{passive:true});
})();
