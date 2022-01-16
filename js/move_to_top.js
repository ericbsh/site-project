jQuery(document).ready(function($){

    $('.fix a').click(function(event){
        event.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            },
                1500);
    });
});