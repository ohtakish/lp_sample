$(function () {
    var clay_top = $('h1 .caveat').offset().top;
    $('.loading_clay').css('top', clay_top);

    var loadCount = 0,
        imgLength = $("img").size();
    $("img").each(function () {
        var src = $(this).attr("src");
        $("<img>")
            .attr("src", src)
            .load(function () {
                loadCount++;
            });
    });

    var loading_text;
    var timer = setInterval(function () {
        $('.loadingBar').css({
            'width': (loadCount / imgLength) * 100 + '%'
        });
        loading_text = $('.loadingBar').innerWidth() * 100 / $('body').width();
        loading_text = Math.ceil(loading_text);
        console.log(loading_text);
        $('.loadingBar > p').text(loading_text);
        if ((loadCount / imgLength) * 100 == 100) {
            clearInterval(timer);
            $('.loadingBar > p').text('100');
            setTimeout(function () {
                $('.loading_text , .loadingBar > p , .loadingBar , .loading_clay').css('opacity', '0');
                setTimeout(function () {
                    $('.loading_clay').css('opacity', '1');
                    setTimeout(function () {
                        $('.loading_clay').css('opacity', '0');
                        setTimeout(function () {
                            $('.loading_text , .loadingBar > p , .loadingBar , .loading_clay').hide();
                            $('.loading_wrap').height('0');
                            $('html').toggleClass('oh');
                        }, 600);
                    }, 1200);
                }, 600);
            }, 800);
            //            $('.loading_wrap , .loading_text , .loadingBar , .loadingBar > p').fadeOut();
            //            $('.loadingBar').delay(500).fadeOut(600);
        }
    }, 1);
});
