(function(){'use strict';
var d=document.documentElement,$=function(i){return document.getElementById(i)};
var t=$('theme'),m=$('menu'),n=$('nav'),b=$('top'),p=$('progress');
var calm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
if(t)t.addEventListener('click',function(){var v=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=v;try{localStorage.setItem('theme',v)}catch(e){}});
if(window.matchMedia)matchMedia('(prefers-color-scheme: light)').addEventListener('change',function(e){try{if(!localStorage.getItem('theme'))d.dataset.theme=e.matches?'light':'dark'}catch(x){}});
function closeMenu(){if(n&&m){n.classList.remove('open');m.setAttribute('aria-expanded','false')}}
if(m&&n){
 m.addEventListener('click',function(){var o=n.classList.toggle('open');m.setAttribute('aria-expanded',String(o))});
 n.addEventListener('click',function(e){if(e.target.closest('a'))closeMenu()});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){closeMenu();m.focus()}});
 document.addEventListener('click',function(e){if(n.classList.contains('open')&&!e.target.closest('.bar-in'))closeMenu()});
}
var ticking=false;
function frame(){ticking=false;var y=window.scrollY;if(b)b.hidden=y<600;if(p){var h=d.scrollHeight-innerHeight;p.style.width=(h>0?y/h*100:0)+'%'}if(!calm)d.style.setProperty('--sy',y)}
addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(frame)}},{passive:true});frame();
if(b)b.addEventListener('click',function(){scrollTo({top:0})});
var img=document.querySelector('.ph img');
if(img){var drop=function(){img.remove()};img.addEventListener('error',drop);if(img.complete&&img.naturalWidth===0)drop()}
if(!calm&&window.matchMedia&&matchMedia('(hover: hover)').matches){
 document.querySelectorAll('.card').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')})});
}
var fb=document.querySelectorAll('.filters button');
if(fb.length){var items=document.querySelectorAll('.pub');
 fb.forEach(function(btn){btn.addEventListener('click',function(){
  fb.forEach(function(x){x.setAttribute('aria-pressed',String(x===btn))});
  var f=btn.dataset.f,c=0;items.forEach(function(it){var show=(f==='all'||it.dataset.type===f);it.hidden=!show;if(show)c++});
  var s=$('filter-status');if(s)s.textContent='Showing '+c+' item'+(c===1?'':'s')+'.';
 })});}
var toc=document.querySelectorAll('.toc a');
if(toc.length&&'IntersectionObserver' in window){var map={};toc.forEach(function(a){map[a.getAttribute('href').slice(1)]=a});
 var so=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){toc.forEach(function(a){a.classList.remove('on')});var a=map[x.target.id];if(a)a.classList.add('on')}})},{rootMargin:'-30% 0px -60% 0px'});
 Object.keys(map).forEach(function(id){var s=$(id);if(s)so.observe(s)});}
var els=document.querySelectorAll('.reveal');
els.forEach(function(e,i){e.style.setProperty('--i',String(i%5))});
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
els.forEach(function(e){io.observe(e)});
})();
