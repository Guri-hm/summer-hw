$(function(){
    $('a[href^=#]').click(function(){
        var speed=500;// 0.5
        var href=$(this).attr("href");
        var target=$(href=="#"||href==""?'2222.html':href);
        var position=target.offset().top;
        $('2222.html').animate({scrolltop:position},speed,'swing');
        return false;

    });
});