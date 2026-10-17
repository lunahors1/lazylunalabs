/* Sterrenspoor achter de muisaanwijzer. Vanilla JS, geen externe bronnen.
   Uit bij prefers-reduced-motion en op touch-apparaten. */
(function(){
if(!window.matchMedia||matchMedia('(prefers-reduced-motion:reduce)').matches||matchMedia('(pointer:coarse)').matches)return;
var MAX=22,GAP=45,live=0,last=0,lx=-99,ly=-99;
var st=document.createElement('style');
st.textContent='.ster{position:fixed;left:0;top:0;pointer-events:none;z-index:9999;color:var(--acc);font-size:12px;line-height:1;opacity:0;will-change:transform,opacity;text-shadow:0 0 6px currentColor;animation:ster-fade .7s ease-out forwards}'
+'.in-budgetmaxx .ster{color:var(--brand)}'
+'@keyframes ster-fade{0%{opacity:.95;transform:translate(var(--x),var(--y)) scale(.6) rotate(0)}100%{opacity:0;transform:translate(calc(var(--x) + var(--dx)),calc(var(--y) + var(--dy))) scale(1.1) rotate(var(--r))}}';
document.head.appendChild(st);
var glyphs=['✦','✧','✦'];
document.addEventListener('mousemove',function(e){
 var t=e.timeStamp;
 if(t-last<GAP||live>=MAX)return;
 if(Math.abs(e.clientX-lx)+Math.abs(e.clientY-ly)<8)return;
 last=t;lx=e.clientX;ly=e.clientY;
 var s=document.createElement('span');
 s.className='ster';s.setAttribute('aria-hidden','true');
 s.textContent=glyphs[(Math.random()*glyphs.length)|0];
 var x=e.clientX+(Math.random()*14-7),y=e.clientY+(Math.random()*14-7);
 s.style.setProperty('--x',x+'px');s.style.setProperty('--y',y+'px');
 s.style.setProperty('--dx',(Math.random()*20-10)+'px');
 s.style.setProperty('--dy',(10+Math.random()*16)+'px');
 s.style.setProperty('--r',((Math.random()*90-45)|0)+'deg');
 s.style.fontSize=(9+Math.random()*7)+'px';
 var done=false;function rm(){if(done)return;done=true;live--;if(s.parentNode)s.parentNode.removeChild(s)}
 s.addEventListener('animationend',rm);setTimeout(rm,1200);
 live++;document.body.appendChild(s);
},{passive:true});
})();
