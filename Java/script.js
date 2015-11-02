$( document ).ready(function(){

$('.readless').hide();


    $( ".newsletter-signup .button" ).on( "click", function() {
        alert( "You can't sign up" );
    });


    $('.readmore').click(function(){
        $('#show-on-click').slideDown();
        $('.readmore').hide();
        $('.readless').show();
        event.preventDefault();
    });

    $('.readless').click(function(){
        $('#show-on-click').slideUp();
        $('.readless').hide();
        $('.readmore').show();
        event.preventDefault();
    });

    $('.learnmore').click(function(){
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
        event.preventDefault();
    });

});