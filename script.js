// Enhanced parallax effect
window.addEventListener('scroll', function() {
  const parallaxBg = document.querySelector('.parallax-bg');
  if (parallaxBg) {
    // Calculate how far down the page we've scrolled
    const scrolled = window.scrollY;
    
    // Move the background at a slower rate than the scroll speed
    // The 0.5 value controls the speed (lower = slower)
    parallaxBg.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
  }
});