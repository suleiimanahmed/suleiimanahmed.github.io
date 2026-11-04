(function(){var d=document,r=d.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;r.classList.add('js');
function st(t){r.setAttribute('data-theme',t);try{localStorage.setItem('theme',t)}catch(e){}var b=d.getElementById('theme-toggle');if(b)b.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');var m=d.querySelector('meta[name=theme-color]');if(m)m.content=t==='dark'?'#07101a':'#f3f7fa'}
var tb=d.getElementById('theme-toggle');if(tb){st(r.getAttribute('data-theme')||'dark');tb.addEventListener('click',function(){st(r.getAttribute('data-theme')==='dark'?'light':'dark')})}
var nav=d.getElementById('site-nav'),mb=d.getElementById('menu-btn');
function cm(){if(nav&&nav.classList.contains('open')){nav.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Open menu')}}
if(mb)mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',String(o));mb.setAttribute('aria-label',o?'Close menu':'Open menu')});
d.addEventListener('keydown',function(e){if(e.key==='Escape')cm()});d.addEventListener('click',function(e){if(!e.target.closest('.bar-in'))cm()});
/* scroll progress: one rAF per frame, eased toward target */
var pg=d.querySelector('.progress'),cur=0,tgt=0,run=false;
function upd(){var h=r.scrollHeight-innerHeight;tgt=h>0?Math.min(1,scrollY/h):0;if(!run){run=true;requestAnimationFrame(tick)}}
function tick(){cur+=(tgt-cur)*.18;if(Math.abs(tgt-cur)<.001){cur=tgt;run=false}pg.style.transform='scaleX('+cur+')';if(run)requestAnimationFrame(tick)}
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
/* staggered reveal (delay capped so nothing waits long) */
d.querySelectorAll('.stag').forEach(function(g){[].slice.call(g.children).forEach(function(c,i){c.style.setProperty('--d',(Math.min(i%6,5)*0.05)+'s')})});
d.querySelectorAll('.ntiles .reveal,.themes .reveal').forEach(function(c,i){c.style.setProperty('--d',((i%3)*0.07)+'s')});
var els=d.querySelectorAll('.reveal,.stag>*');
function counts(root){root.querySelectorAll('[data-count]').forEach(function(n){if(n.dataset.done)return;n.dataset.done=1;var to=+n.dataset.count,s=null;function f(t){if(!s)s=t;var p=Math.min(1,(t-s)/1200);n.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}if(rm){n.textContent=to}else{n.textContent='0';requestAnimationFrame(f)}})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');counts(x.target);io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px -6% 0px'});els.forEach(function(x){io.observe(x)})}else{els.forEach(function(x){x.classList.add('in')});counts(d)}
/* spotlight + gentle tilt, throttled with rAF */
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){d.querySelectorAll('.ntile,.themes li,.rcard').forEach(function(c){var ev=null,tilt=c.classList.contains('ntile');
function apply(){var b=c.getBoundingClientRect(),x=ev.clientX-b.left,y=ev.clientY-b.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');if(tilt)c.style.transform='perspective(900px) rotateX('+((y/b.height-.5)*-4)+'deg) rotateY('+((x/b.width-.5)*5)+'deg) translate3d(0,-4px,0)';ev=null}
c.addEventListener('pointermove',function(e){c.classList.add('tilting');if(!ev){ev=e;requestAnimationFrame(apply)}else ev=e});
c.addEventListener('pointerleave',function(){c.classList.remove('tilting');if(tilt)c.style.transform=''})})}
/* page transition */
d.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||rm||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank')return;var u=new URL(a.href,location.href);if(u.origin!==location.origin||u.pathname===location.pathname||/\.(svg|pdf|zip)$/.test(u.pathname))return;e.preventDefault();d.body.classList.add('leaving');setTimeout(function(){location.href=a.href},180)});
addEventListener('pageshow',function(e){if(e.persisted)d.body.classList.remove('leaving')});
d.querySelectorAll('[data-filter]').forEach(function(b){b.addEventListener('click',function(){d.querySelectorAll('[data-filter]').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});var n=0;d.querySelectorAll('.pub').forEach(function(p){p.hidden=b.dataset.filter!=='all'&&b.dataset.filter!==p.dataset.type;if(!p.hidden)n++});d.getElementById('filter-status').textContent='Showing '+n+' items.'})});
var em=d.getElementById('email');if(em){em.hidden=false;em.addEventListener('click',function(e){if(!e.isTrusted)return;var k=[23,91,7,44,113,66,29,80],q=[100,46,107,73,24,47,124,62,57,58,111,65,20,38,93,61,118,50,107,2,18,45,115,51,120,41,99,69,16,108,126,49];var a=q.map(function(x,i){return String.fromCharCode(x^k[i%k.length])}).join('');d.getElementById('email-status').textContent='Opening your email application. If nothing opens, use LinkedIn.';location.href='mailto:'+a})}
})();