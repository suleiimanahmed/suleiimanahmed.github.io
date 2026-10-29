(function(){'use strict';
var K=[23, 91, 7, 44, 113, 66, 29, 80],D=[100, 46, 107, 73, 24, 47, 124, 62, 57, 58, 111, 65, 20, 38, 93, 61, 118, 50, 107, 2, 18, 45, 115, 51, 120, 41, 99, 69, 16, 108, 126, 49],t0=Date.now();
var btn=document.getElementById('mail-send'),note=document.getElementById('mail-note'),box=document.getElementById('mail-box');
if(!btn)return;
if(box)box.hidden=false;
btn.addEventListener('click',function(e){
 if(!e.isTrusted||Date.now()-t0<1200){if(note)note.textContent='One moment, then try again.';return}
 var a='';for(var i=0;i<D.length;i++)a+=String.fromCharCode(D[i]^K[i%K.length]);
 if(note)note.textContent='Opening your email app. If nothing happens, message me on LinkedIn instead.';
 location.href='mailto:'+a+'?subject='+encodeURIComponent('Hello from your website');
});
})();
