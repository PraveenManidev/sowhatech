
// banner slider
$('.banner').slick({
  dots: true,
  arrows: true,
  draggable: true,
  autoplay: false,
  autoplaySpeed:3000,
   fade: true,
  cssEase: 'linear'
});

// wow
var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null,    // optional scroll container selector, otherwise use window,
    resetAnimation: true,     // reset animation on end (default is true)
  }
);
wow.init();

// menutoggler
jQuery(document).ready(function(){
	jQuery(".navbar-nav li a").click(function(e){
		jQuery(".navbar-toggler").trigger("click");
	});
});

	// jQuery Smooth Scroll
$(".navbar-nav li a").on("click", function (e) {
  if (this.hash !== "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

