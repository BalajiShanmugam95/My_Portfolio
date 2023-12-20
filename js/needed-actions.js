(function() {
  AOS.init();
  var isMobile;
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      isMobile = true;
  }

  var navPos = $('nav').position().top;
  var lastPos = 0;
  $(window).on('scroll', function() {
      var pos = $(window).scrollTop();
      var pos2 = pos + 50;
      var scrollBottom = pos + $(window).height();

      if (!isMobile) {
        if (pos >= navPos + $('nav').height() && lastPos < pos) {
          $('nav').addClass('fixed');
        }
        if (pos < navPos && lastPos > pos) {
          $('nav').removeClass('fixed');
        }
        lastPos = pos;
      }
  })
})();

$(document).ready(()=>{
  window.scrollTo(0, 0);
  var stillScrolling = false;
  //Listen scroll event
  var scrollTimeout;
  addEventListener('scroll', function(e) {
      stillScrolling=true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function() {
        stillScrolling=false;
      }, 50);
  });

  //Scroll to view
    navgateTOId=(selector)=>{
      var selectedArea = $(selector);
       if(selectedArea)
       selectedArea[0].scrollIntoView();
    }
  //Scroll to view

  //Listen scroll event

  //scrollspy adjust offset
  // var offset = 50;
  // $('.navbar li a').click(function(event) {
  //     event.preventDefault();
  //     $($(this).attr('href'))[0].scrollIntoView();
  //     var scrollListener;
  //     scrollListener= setInterval(() => {
  //       if(!stillScrolling){
  //         scrollBy(0, -offset);
  //         clearInterval(scrollListener)
  //       }
  //     }, 50);
  // });
  //scrollspy adjust offset
})