function navClass() {
  var distTop = window.scrollY;
  var beforeFooter = document.body.scrollHeight - 1000;
  var screenWidth = window.innerWidth;

  if ( distTop > 80 && (distTop < beforeFooter && screenWidth < 550) ) {
    document.getElementById('scroll-nav').className = 'nav-scroll-fixed';
  } else if ( distTop > 80 && screenWidth > 550 ) {
    document.getElementById('scroll-nav').className = 'nav-scroll-fixed';
  } else {
    document.getElementById('scroll-nav').className = 'nav-scroll-relative';
  }
};
