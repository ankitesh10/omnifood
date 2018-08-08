$(window).scroll(function(){
    
    var scrollPos = $(this).scrollTop();
    
    var targetPos = $('.js-section-1').offset().top;
    console.log(targetPos);
    console.log(scrollPos);
    
    if(scrollPos>1600){
        $('nav').addClass('sticky');
    }else{
        $('nav').removeClass('sticky');
    }
    
    
})

