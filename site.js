(function(){
var d=document,r=d.documentElement,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;r.classList.add('js');
/* theme: follows the device; the toggle overrides it for this browser session only */
var mq=matchMedia('(prefers-color-scheme: dark)');
try{localStorage.removeItem('theme')}catch(e){}
function sys(){return mq.matches?'dark':'light'}
function pick(){var o=null;try{o=sessionStorage.getItem('theme')}catch(e){}return o||sys()}
function st(t){r.setAttribute('data-theme',t);var b=d.getElementById('theme-toggle');if(b)b.setAttribute('aria-label',t==='dark'?'Switch to light mode':'Switch to dark mode');var m=d.querySelector('meta[name=theme-color]');if(m)m.content=t==='dark'?'#07101a':'#f3f7fa'}
st(pick());
function onSys(){try{sessionStorage.removeItem('theme')}catch(e){}st(sys())}
if(mq.addEventListener)mq.addEventListener('change',onSys);else if(mq.addListener)mq.addListener(onSys);
var tb=d.getElementById('theme-toggle');if(tb){tb.addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';try{sessionStorage.setItem('theme',n)}catch(e){}st(n)})}
/* mobile menu */
var nav=d.getElementById('site-nav'),mb=d.getElementById('menu-btn');
function cm(){if(nav&&nav.classList.contains('open')){nav.classList.remove('open');mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-label','Open menu')}}
if(mb)mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',String(o));mb.setAttribute('aria-label',o?'Close menu':'Open menu')});
d.addEventListener('click',function(e){if(!e.target.closest('.bar-in'))cm()});
d.addEventListener('keydown',function(e){if(e.key==='Escape')cm()});
/* scroll progress + back-to-top */
var pg=d.querySelector('.progress'),tt=d.getElementById('totop'),cur=0,tgt=0,run=false;
function upd(){var h=r.scrollHeight-innerHeight;tgt=h>0?Math.min(1,scrollY/h):0;if(tt){tt.hidden=false;tt.classList.toggle('show',scrollY>700)}if(!run){run=true;requestAnimationFrame(tick)}}
function tick(){cur+=(tgt-cur)*.18;if(Math.abs(tgt-cur)<.001){cur=tgt;run=false}if(pg)pg.style.transform='scaleX('+cur+')';if(run)requestAnimationFrame(tick)}
addEventListener('scroll',upd,{passive:true});addEventListener('resize',upd);upd();
if(tt)tt.addEventListener('click',function(){scrollTo({top:0,behavior:rm?'auto':'smooth'})});
/* staggered reveal */
d.querySelectorAll('.stag').forEach(function(g){[].slice.call(g.children).forEach(function(c,i){c.style.setProperty('--d',(Math.min(i%6,5)*0.05)+'s')})});
d.querySelectorAll('.ntiles .reveal,.themes .reveal').forEach(function(c,i){c.style.setProperty('--d',((i%3)*0.07)+'s')});
var els=d.querySelectorAll('.reveal,.stag>*');
function counts(root){root.querySelectorAll('[data-count]').forEach(function(n){if(n.dataset.done)return;n.dataset.done=1;var to=+n.dataset.count,s=null;function f(t){if(!s)s=t;var p=Math.min(1,(t-s)/1200);n.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}if(rm){n.textContent=to}else{n.textContent='0';requestAnimationFrame(f)}})}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');counts(x.target);io.unobserve(x.target)}})},{threshold:0,rootMargin:'0px 0px -6% 0px'});els.forEach(function(x){io.observe(x)})}else{els.forEach(function(x){x.classList.add('in')});counts(d)}
/* spotlight + gentle tilt */
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){d.querySelectorAll('.ntile,.themes li,.rcard').forEach(function(c){var ev=null,tilt=c.classList.contains('ntile');
function ap(){var b=c.getBoundingClientRect(),x=ev.clientX-b.left,y=ev.clientY-b.top;c.style.setProperty('--mx',x+'px');c.style.setProperty('--my',y+'px');if(tilt)c.style.transform='perspective(900px) rotateX('+((y/b.height-.5)*-4)+'deg) rotateY('+((x/b.width-.5)*5)+'deg) translate3d(0,-4px,0)';ev=null}
c.addEventListener('pointermove',function(e){c.classList.add('tilting');if(!ev){ev=e;requestAnimationFrame(ap)}else ev=e});
c.addEventListener('pointerleave',function(){c.classList.remove('tilting');if(tilt)c.style.transform=''})})}
/* page transition (skips downloads, blob/data/mailto links) */
d.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a||rm||e.defaultPrevented||e.metaKey||e.ctrlKey||e.shiftKey||a.target==='_blank'||a.hasAttribute('download')||/^(blob|data|mailto):/.test(a.href))return;var u=new URL(a.href,location.href);if(u.origin!==location.origin||u.pathname===location.pathname||/\.(svg|pdf|zip)$/.test(u.pathname))return;e.preventDefault();d.body.classList.add('leaving');setTimeout(function(){location.href=a.href},180)});
addEventListener('pageshow',function(e){if(e.persisted)d.body.classList.remove('leaving')});
/* publication filter, citations, BibTeX */
d.querySelectorAll('[data-filter]').forEach(function(b){b.addEventListener('click',function(){d.querySelectorAll('[data-filter]').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});var n=0;d.querySelectorAll('.pub[data-type]').forEach(function(p){p.hidden=b.dataset.filter!=='all'&&b.dataset.filter!==p.dataset.type;if(!p.hidden)n++});var s=d.getElementById('filter-status');if(s)s.textContent='Showing '+n+' items.'})});
function copy(t,done){function fb(){var a=d.createElement('textarea');a.value=t;a.style.position='fixed';a.style.opacity='0';d.body.appendChild(a);a.select();try{d.execCommand('copy');done()}catch(e){}d.body.removeChild(a)}
if(navigator.clipboard&&window.isSecureContext)navigator.clipboard.writeText(t).then(done,fb);else fb()}
d.querySelectorAll('.cite[data-cite]').forEach(function(b){b.addEventListener('click',function(){var l=b.querySelector('span'),s=d.getElementById('cite-status');copy(b.dataset.cite,function(){b.classList.add('done');l.textContent='Copied';if(s)s.textContent='Citation copied.';setTimeout(function(){b.classList.remove('done');l.textContent='Copy citation'},1800)})})});
var bd=d.getElementById('bib-dl');if(bd)bd.addEventListener('click',function(){var t=[].slice.call(d.querySelectorAll('.pub[data-bib]')).map(function(p){return p.dataset.bib}).join('\n\n')+'\n';var a=d.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'text/plain'}));a.download='suleiman-ahmed-publications.bib';d.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);d.body.removeChild(a)},500)});
/* resources: filter links by type */
d.querySelectorAll('[data-kf]').forEach(function(b){b.addEventListener('click',function(){d.querySelectorAll('[data-kf]').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});var k=b.dataset.kf,tot=0;d.querySelectorAll('.lcol').forEach(function(c){var n=0;c.querySelectorAll('li[data-k]').forEach(function(li){li.hidden=k!=='all'&&li.dataset.k!==k;if(!li.hidden)n++});tot+=n;c.classList.toggle('empty',n===0);var s=c.querySelector('h3 span');if(s)s.textContent=n});var s2=d.getElementById('kf-status');if(s2)s2.textContent='Showing '+tot+' links.'})});
/* print / save as PDF */
d.querySelectorAll('[data-print]').forEach(function(b){b.addEventListener('click',function(){print()})});
/* email: hidden from robots. Needs a real click, a human check, a honeypot and a short wait */
(function(){var em=d.getElementById('email'),f=d.getElementById('hc');if(!em||!f)return;
var q=d.getElementById('hc-q'),inp=d.getElementById('hc-a'),hp=f.querySelector('.hp'),es=d.getElementById('email-status'),out=d.getElementById('email-out'),a1=0,b1=0,t0=0;
function addr(){var k=[23,91,7,44,113,66,29,80],c=[100,46,107,73,24,47,124,62,57,58,111,65,20,38,93,61,118,50,107,2,18,45,115,51,120,41,99,69,16,108,126,49];return c.map(function(x,i){return String.fromCharCode(x^k[i%k.length])}).join('')}
function ask(){a1=2+Math.floor(Math.random()*8);b1=2+Math.floor(Math.random()*8);q.textContent='Quick check: what is '+a1+' + '+b1+'?';inp.value='';t0=Date.now()}
em.hidden=false;
em.addEventListener('click',function(e){if(!e.isTrusted)return;f.hidden=false;em.setAttribute('aria-expanded','true');ask();es.textContent='';setTimeout(function(){inp.focus()},30)});
f.addEventListener('submit',function(e){e.preventDefault();if(!e.isTrusted)return;
if(hp.value||Date.now()-t0<1200){es.textContent='Please take a moment and try again.';ask();return}
if(parseInt(inp.value,10)!==a1+b1){es.textContent='That is not right. Try a new one.';ask();inp.focus();return}
var m=addr(),a=d.createElement('a');a.href='mailto:'+m;a.textContent=m;out.textContent='';out.appendChild(a);f.hidden=true;em.hidden=true;es.textContent='Thank you. Write to:'})})();
})();