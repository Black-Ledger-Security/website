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

  // MOBILE MENU
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var menuBackdrop = document.getElementById('menuBackdrop');
  var menuClose = document.getElementById('menuClose');
  var mobileServicesToggle = document.getElementById('mobileServicesToggle');
  var mobileServicesSub = document.getElementById('mobileServicesSub');
  var menuOpen = false;

  function openMenu(){
    menuOpen = true;
    hamburger.classList.add('active');
    // Show elements
    mobileMenu.style.display = 'block';
    menuBackdrop.style.display = 'block';
    // Add transition
    mobileMenu.style.transition = 'transform 0.3s ease';
    menuBackdrop.style.transition = 'opacity 0.3s ease';
    menuBackdrop.style.opacity = '0';
    // Force reflow before animating
    void mobileMenu.offsetHeight;
    // Animate in
    mobileMenu.style.transform = 'translateX(0)';
    menuBackdrop.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  }

  function closeMenu(){
    menuOpen = false;
    hamburger.classList.remove('active');
    mobileMenu.style.transform = 'translateX(100%)';
    menuBackdrop.style.opacity = '0';
    document.body.style.overflow = '';
    setTimeout(function(){
      mobileMenu.style.display = 'none';
      menuBackdrop.style.display = 'none';
    }, 300);
  }

  if(hamburger) hamburger.addEventListener('click', function(){
    menuOpen ? closeMenu() : openMenu();
  });
  if(menuClose) menuClose.addEventListener('click', closeMenu);
  if(menuBackdrop) menuBackdrop.addEventListener('click', closeMenu);

  // Mobile services dropdown
  if(mobileServicesToggle && mobileServicesSub){
    mobileServicesToggle.addEventListener('click', function(){
      var isOpen = mobileServicesSub.style.display === 'block';
      mobileServicesSub.style.display = isOpen ? 'none' : 'block';
      mobileServicesToggle.classList.toggle('expanded');
    });
  }

  // Close menu on link click
  var menuLinks = document.querySelectorAll('.mobile-menu-link:not(.mobile-services-toggle), .mobile-services-sub a, .mobile-menu-cta');
  menuLinks.forEach(function(link){
    link.addEventListener('click', closeMenu);
  });
})();
