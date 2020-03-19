'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var links = $('.header__item a');

    links.on('click', function(){
      header.removeClass('-open');
      body.removeClass('-hideOverflow');
    });

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    //data switcher
    var targets = $('[data-target]');
    var contents = $('[data-content]');

    targets.first().addClass('-active');
    contents.first().addClass('-active');

    targets.on('click', function() {
        targets.removeClass('-active');
        contents.removeClass('-active');

        var targettedContent = $(this).data('target');
        
        $(this).addClass('-active');
        contents.filter('[data-content=' + targettedContent + ']').addClass('-active')

    });

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                    var $target = $(target);
                    $target.focus();
                });
            }
        }
    });
};

module.exports = Header;
