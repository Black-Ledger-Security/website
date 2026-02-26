document.addEventListener('DOMContentLoaded', function(){

  // SCROLL REVEAL
  var revealEls = document.querySelectorAll('.reveal');
  if(revealEls.length > 0){
    var revealObs = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting) entry.target.classList.add('visible');
      });
    },{threshold:0.02});
    revealEls.forEach(function(el){revealObs.observe(el)});
  }

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

  // DESKTOP DROPDOWN
  var servicesWrap = document.querySelector('.nav-services-wrap');
  var navDropdown = document.querySelector('.nav-dropdown');
  if(servicesWrap && navDropdown){
    servicesWrap.addEventListener('mouseenter',function(){
      navDropdown.style.display='block';
    });
    servicesWrap.addEventListener('mouseleave',function(){
      navDropdown.style.display='none';
    });
  }

  // MOBILE MENU - simple show/hide
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuClose = document.getElementById('menuClose');
  var servicesToggle = document.getElementById('mobileServicesToggle');
  var servicesSub = document.getElementById('mobileServicesSub');
  var isOpen = false;

  function showMenu(){
    isOpen = true;
    mobileMenu.style.display = 'block';
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hideMenu(){
    isOpen = false;
    mobileMenu.style.display = 'none';
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
  }

  if(hamburger) hamburger.onclick = function(){ isOpen ? hideMenu() : showMenu(); };
  if(menuClose) menuClose.onclick = function(){ hideMenu(); };

  // Services sub-toggle
  if(servicesToggle) servicesToggle.onclick = function(){
    var showing = servicesSub.style.display === 'block';
    servicesSub.style.display = showing ? 'none' : 'block';
    servicesToggle.classList.toggle('expanded');
  };

});
