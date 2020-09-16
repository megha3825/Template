(function($, Drupal) {
  'use strict';
  Drupal.behaviors.navMenu = {
    attach: function(context) {
      // Code here will only be applied to $('#some_element')
      // a single time.
      var $menu = $('.mobile-menu', context);
      $menu.on('click', function() {
        $('#block-template-theme-main-menu').addClass('show-menu');
      });
      var $cross = $('.cross', context);
      $cross.on('click', function() {
        $('#block-template-theme-main-menu').removeClass('show-menu');
      });

    }
  };
})(jQuery, Drupal);
