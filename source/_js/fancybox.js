(function($) {
  'use strict';

  // Run fancybox feature

  $(document).ready(function() {
    /**
     * Configure and run Fancybox plugin
     * @returns {void}
     */
    function fancyFox() {
      // var thumbs = false;

      // disable navigation arrows and display thumbs on medium and large screens
      // if ($(window).height() > 480) {
      //   thumbs = true;
      // }

      $('.fancybox').fancybox({
        // options docs: https://fancyapps.com/fancybox/3/docs/#options
        buttons: [
          'fullScreen',
          'thumbs',
          'zoom',
          'close'
        ],
        thumbs: {
          autoStart: false, // disable display thumbnails on opening
          axis: 'x'
        },
        protect: true,
        idleTime: 5,
        animationEffect: 'zoom',
        preventCaptionOverlap: true,
        mobile: {
          preventCaptionOverlap: true
        }
      });
    }

    fancyFox();

    $(window).smartresize(function() {
      fancyFox();
    });
  });
})(jQuery);
