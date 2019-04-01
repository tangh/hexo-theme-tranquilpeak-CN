(function($) {
  'use strict';

  // Add animation to scroll, triggered by hash tag links (back to top/toc or scroll down to comment region).

  /**
   * AnimateHashTagLinks
   * @constructor
   */
  var AnimateHashTagLinks = function() {
    // Elements where the user can click to trigger in-page jump
    this.$hashTags = $('a[href="#"],a[href="#table-of-contents"],a[href="#disqus_thread"],a.toc-link');
  };

  AnimateHashTagLinks.prototype = {
    /**
     * Run Animate feature
     * @return {void}
     */
    run: function() {
      var self = this;
      // Detect the click on the hash tag links
      this.$hashTags.click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          if (this.href.slice(-1) === '#' && this.hash === '') {
            var targetOffset = 0;
          } else {
            var $target = $(this.hash);
            var targetOffset = $target.offset().top;
          }
          $('html,body').animate({
              scrollTop: targetOffset
          },750);
          return false;
          }
        }
      );
    }
  };

  $(document).ready(function() {
    var animateHashTagLinks = new AnimateHashTagLinks();
    animateHashTagLinks.run();
  });
})(jQuery);