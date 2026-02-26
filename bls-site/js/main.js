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
    var statsBar = statNums[0].closest('.stats-bar');
    if(statsBar){
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
      counterObs.observe(statsBar);
    }
  }

  // NAV SCROLL
  window.addEventListener('scroll',function(){
    var nav=document.querySelector('nav');
    if(nav) nav.style.background=window.scrollY>100?'rgba(12,12,16,0.95)':'rgba(12,12,16,0.85)';
  });

  // MOBILE MENU
  var hamburger=document.getElementById('hamburger');
  var mobileMenu=document.getElementById('mobileMenu');
  var menuBackdrop=document.getElementById('menuBackdrop');
  var menuClose=document.getElementById('menuClose');
  var mobileServicesToggle=document.getElementById('mobileServicesToggle');
  var mobileServicesSub=document.getElementById('mobileServicesSub');

  function openMenu(){
    hamburger.classList.add('active');
    mobileMenu.classList.add('open');
    menuBackdrop.classList.add('open');
    document.body.style.overflow='hidden';
  }
  function closeMenu(){
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    menuBackdrop.classList.remove('open');
    document.body.style.overflow='';
  }

  if(hamburger) hamburger.addEventListener('click',function(){
    mobileMenu.classList.contains('open') ? closeMenu() : openMenu();
  });
  if(menuClose) menuClose.addEventListener('click',closeMenu);
  if(menuBackdrop) menuBackdrop.addEventListener('click',closeMenu);

  // Mobile services dropdown
  if(mobileServicesToggle && mobileServicesSub){
    mobileServicesToggle.addEventListener('click',function(){
      mobileServicesToggle.classList.toggle('expanded');
      mobileServicesSub.classList.toggle('open');
    });
  }

  // Close menu on link click
  var menuLinks = document.querySelectorAll('.mobile-menu-link:not(.mobile-services-toggle), .mobile-services-sub a, .mobile-menu-cta');
  menuLinks.forEach(function(link){
    link.addEventListener('click',closeMenu);
  });
})();
