(function(){
  // SCROLL REVEAL
  var revealObs = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  },{threshold:0.02});
  document.querySelectorAll('.reveal').forEach(function(el){revealObs.observe(el)});

  // ANIMATED COUNTERS
  var statNums = document.querySelectorAll('.stat-number[data-target]');
  var countersStarted = false;
  if(statNums.length>0){
    var counterObs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting&&!countersStarted){
          countersStarted=true;
          statNums.forEach(function(el){
            var target=parseInt(el.dataset.target);
            var suffix=el.dataset.suffix||'';
            var current=0;
            var increment=target/60;
            var timer=setInterval(function(){
              current+=increment;
              if(current>=target){current=target;clearInterval(timer)}
              el.textContent=Math.floor(current)+suffix;
            },25);
          });
        }
      });
    },{threshold:0.5});
    counterObs.observe(statNums[0].closest('.stats-bar'));
  }

  // NAV SCROLL
  window.addEventListener('scroll',function(){
    var nav=document.querySelector('nav');
    if(nav) nav.style.background=window.scrollY>100?'rgba(12,12,16,0.95)':'rgba(12,12,16,0.85)';
  });

  // HAMBURGER MENU
  var hamburger=document.getElementById('hamburger');
  var mobileMenu=document.getElementById('mobileMenu');
  var mobileLinks=document.querySelectorAll('.mobile-nav-link');

  if(hamburger&&mobileMenu){
    hamburger.addEventListener('click',function(){
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':'';
    });
    mobileLinks.forEach(function(link){
      link.addEventListener('click',function(){
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
        document.body.style.overflow='';
      });
    });
  }
})();
