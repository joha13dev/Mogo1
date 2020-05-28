$(function() {
    let headerH = $("#header").innerHeight(),
        menu_nav = $("#menu_nav"),
        scrollOffset = $(window).scrollTop();
        checkScroll(scrollOffset);

    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        
          checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        
            if (scrollOffset >= headerH) {
                menu_nav.addClass("shadow");
               
            } else {
                menu_nav.removeClass("shadow");
                
            };
    }
});


$("[data-scroll]").on('click', function(event) {
    
    event.preventDefault();

        let blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset
        });
});


$("#btn_menu").on('click', function(event) {
    event.preventDefault();

    $('#menu_nav').toggleClass('burger_active');
});
