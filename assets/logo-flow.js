/* Lazy Luna Labs: het grote logo in de hero (.big-logo) schaalt en schuift bij scrollen naar de plek van
   het kleine logo in de kopbalk (.site-header .logo) en laat het daar overvloeien. Alleen transform en
   opacity (geen layout, geen CLS); metingen alleen bij laden, resize en fonts.ready. Uit bij reduced motion. */
(function(){
  var big=document.querySelector('.big-logo'), head=document.querySelector('.site-header .logo'), header=document.querySelector('.site-header');
  if(!big||!head||!header||!window.requestAnimationFrame) return;
  var root=document.documentElement, mq=window.matchMedia('(prefers-reduced-motion: reduce)');
  var bm=big.querySelector('svg'), hm=head.querySelector('svg');
  var fadeFrom=0.8;
  var m=null, queued=false, on=false;
  function clamp(v){return v<0?0:v>1?1:v}
  function measure(){
    big.style.transform='';
    var sy=window.scrollY, b=bm.getBoundingClientRect(), e=big.getBoundingClientRect(), h=hm.getBoundingClientRect(), hr=header.getBoundingClientRect();
    var sticky=getComputedStyle(header).position==='sticky';
    var hy0=h.top-hr.top+(sticky?0:hr.top+sy);       // schermpositie van het kopbalklogo bij scroll 0
    m={bx:b.left, by:b.top+sy, ox:b.left-e.left, oy:b.top-e.top, hx:h.left, hy0:hy0, s:h.height/b.height, sticky:sticky};
    m.d=Math.max(1,m.by-hy0);                        // scrollafstand waarover het logo naar de kopbalk reist
    // BudgetMaxx-logo en telefoon: logo schuift onder de kopbalk door, dus eerder overvloeien
    fadeFrom=big.classList.contains('bmx')?0.45:(window.innerWidth<=760?0.25:0.8);
  }
  function update(){
    queued=false; if(!on||!m) return;
    var y=window.scrollY, p=clamp(y/m.d), e=p*p*(3-2*p);
    var s=1+(m.s-1)*e;
    var nx=m.bx, ny=m.by-y, tx=m.hx, ty=m.sticky?m.hy0:m.hy0-y;
    var dx=e*(tx-nx)+(1-s)*m.ox, dy=e*(ty-ny)+(1-s)*m.oy;
    var a=clamp((p-fadeFrom)/(1-fadeFrom));
    big.style.transform=p>0?'translate3d('+dx.toFixed(2)+'px,'+dy.toFixed(2)+'px,0) scale('+s.toFixed(4)+')':'';
    big.style.opacity=(1-a).toFixed(3);
    big.style.visibility=p>=1?'hidden':'';
    head.style.opacity=a.toFixed(3);
  }
  function tick(){ if(!queued){queued=true;requestAnimationFrame(update);} }
  function remeasure(){ if(!on) return; measure(); update(); }
  function start(){ on=true; root.classList.add('lf'); measure(); update(); }
  function stop(){ on=false; root.classList.remove('lf'); big.style.transform=big.style.opacity=big.style.visibility=head.style.opacity=''; }
  function apply(){ (mq.matches||getComputedStyle(header).position!=='sticky')?stop():start(); }  // losse kopbalk (telefoon, BudgetMaxx): geen overgang
  window.addEventListener('scroll',tick,{passive:true});
  window.addEventListener('resize',function(){ apply(); });
  window.addEventListener('load',remeasure);
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(remeasure);
  if(mq.addEventListener) mq.addEventListener('change',apply);
  apply();
})();
