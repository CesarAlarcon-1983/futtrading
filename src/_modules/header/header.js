'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');

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

    })
};

module.exports = Header;
