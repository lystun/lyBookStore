    ``


$(document).ready(function(){
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })
});

$(window).scroll(function(){
    let position = $(this).scrollTop();

    if(position >= 350){
        $('.gallery').addClass('change')
    }else {
        $('.gallery').removeClass('change')
    }

})

$('.writers-accordion').click(function(e){
    if(e.target.id.split('-')[0] === 'button' ){
        $('#book-1').attr('src', 'images/'+e.target.id.split('-')[1]+'1.jpg');

        $('#book-2').attr('src', 'images/'+e.target.id.split('-')[1]+'2.jpg');
    }
});
