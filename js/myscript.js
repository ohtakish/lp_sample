$(function () {
    $('#question dt').click(function () {
        $(this).next('dd').slideToggle();
        $(this).parents('dl').toggleClass('dn');
    });

    if ($(window).width() < 751) {
        mv_h = $('html').height() + 'px';
        $('header').height(mv_h);

        $('.header_scroll').click(function () {
            var position = $('html').height();
            var now_position = $('#wrap').offset().top - $('#wrap').offset().top - $('#wrap').offset().top;
            var i = now_position;
            if (checkBrowser() == 'Safari') {
                var scroll_timer = setInterval(function () {
                    $('body,html').scrollTop(i);
                    i = i + 8;
                    //                    console.log(i);
                    if (i >= (position - 8)) {
                        $('body,html').scrollTop(position);
                        clearInterval(scroll_timer);
                    }
                }, 0.00001);
            } else {
                $("html,body").animate({
                    scrollTop: $('html').height()
                }, 1200);
            }
        });

        $('#nagare .nagare_detail_area dt , #kakaku .price_area dt').click(function () {
            $(this).next('dd').slideToggle();
            $(this).parents('dl').toggleClass('dn');
        });

    } else {}

    $('header .sp_top_btn').click(function () {
        var speed = 1200;
        var position = 0;
        var now_position = $('#wrap').offset().top - $('#wrap').offset().top - $('#wrap').offset().top;
        if (checkBrowser() == 'Safari') {
            var i = now_position;
            var scroll_timer = setInterval(function () {
                $('body,html').scrollTop(i);
                i = i - 80;
                //                console.log(i);
                if (i <= (position + 80)) {
                    $('body,html').scrollTop(position);
                    clearInterval(scroll_timer);
                }
            }, 0.00001);
        } else {
            $('body,html').animate({
                scrollTop: position
            }, speed);
        }
        return false;
    });

    if (checkBrowser() != 'Edge') {
        $('.cv_btn ,  header .fixed_cv').click(function () {
            var speed = 2000;
            var header_nav_h;
            if ($(window).width() < 751) {
                header_nav_h = 51;
            } else {
                header_nav_h = 66;
            }
            var position = $('#wrap').height() - $('footer').outerHeight() - $('#question').outerHeight() - $('#contact').outerHeight() - header_nav_h;

            if (checkBrowser() == 'Safari') {
                var now_position = $('#wrap').offset().top - $('#wrap').offset().top - $('#wrap').offset().top;
                var i = now_position;
                var scroll_timer = setInterval(function () {
                    $('body,html').scrollTop(i);
                    i = i + 50;
                    //                    console.log(i);
                    if (i >= (position - 50)) {
                        $('body,html').scrollTop(position);
                        clearInterval(scroll_timer);
                    }
                }, 0.00001);
            } else {
                $('body,html').animate({
                    scrollTop: position
                }, speed);
            }
            return false;
        });
    }

//    console.log(checkBrowser());

    function checkBrowser() {

        var result = '不明';

        var agent = window.navigator.userAgent.toLowerCase();
        var version = window.navigator.appVersion.toLowerCase();

        if (agent.indexOf("msie") > -1) {
            if (version.indexOf("msie 6.") > -1) {
                result = 'IE6';
            } else if (version.indexOf("msie 7.") > -1) {
                result = 'IE7';
            } else if (version.indexOf("msie 8.") > -1) {
                result = 'IE8';
            } else if (version.indexOf("msie 9.") > -1) {
                result = 'IE9';
            } else if (version.indexOf("msie 10.") > -1) {
                result = 'IE10';
            } else {
                result = 'IE(バージョン不明)';
            }
        } else if (agent.indexOf("trident/7") > -1) {
            result = 'IE11';
        } else if (agent.indexOf("edge") > -1) {
            result = 'Edge';
        } else if (agent.indexOf("chrome") > -1) {
            result = 'Chrome';
        } else if (agent.indexOf("safari") > -1) {
            result = 'Safari';
        } else if (agent.indexOf("opera") > -1) {
            result = 'Opera';
        } else if (agent.indexOf("firefox") > -1) {
            result = 'Firefox';
        }
        return result;
    }

    //        $(window).scroll(function () {
    //            $('.fadein').each(function () {
    //                var elemPos = $(this).offset().top;
    //                var scroll = $(window).scrollTop();
    //                var windowHeight = $(window).height();
    //                if (scroll > elemPos - windowHeight + 200) {
    //                    $(this).addClass('scrollin');
    //                }
    //            });
    //        });

    var scroll_ht = 0;
    $('body').scroll(function () {
        $('.fadein').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if ($(window).width() < 751) {
                var show_place = elemPos - windowHeight + 90;
            } else {
                var show_place = elemPos - windowHeight + 200;
            }
            //            console.log(show_place);
            if (scroll > show_place) {
                $(this).addClass('scrollin');
            }
        });

        var show_nav = $('#second_section').offset().top + $('header').outerHeight();
        if ($(window).scrollTop() > show_nav) {
            //            console.log('スクロール in if');
            scroll_ht = 1;
            $('header .header_top').addClass('fixed_nav');
            $('header .header_top').css('top', '0');
            if ($(window).width() < 751) {
                $('.sp_top_btn').fadeIn();
            }
        } else {
            if ($(window).width() < 751) {
                $('.sp_top_btn').fadeOut();
            }
            //            console.log(scroll_ht);
            if (scroll_ht == 1) {
                $('header .header_top').css('top', '-66px');
                setTimeout(function () {
                    $('header .header_top').css('top', '-80px');
                    $('header .header_top').removeClass('fixed_nav');
                }, 400);
                scroll_ht = 0;
            }
        }
    });

    $('body').scroll(function () {
        $('.wrap_bg').each(function () {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).removeClass('after_hidden');
            } else {
                $(this).addClass('after_hidden');
            }

        });
    });

});

//    var clay_top = $('h1 .caveat').offset().top;
//    $('.loading_clay').css('top', clay_top);

$(function () {

    $('html,body').addClass('oh');

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

    //    imgLength = imgLength + 2;
    //
    //    var video = document.querySelector('video');

    //    video.addEventListener('loadedmetadata', function () {
    //        loadCount++;
    //    });
    //    video.addEventListener('loadeddata', function () {
    //        loadCount++;
    //    });
    //    video.addEventListener('canplay', function () {
    //        loadCount++;
    //    });
    //    video.addEventListener('canplaythrough', function () {
    //        loadCount++;
    //    });
    //    video.addEventListener('playing', function () {
    //        loadCount++;
    //    });

    imgLength = imgLength + 6;
    $(window).load(function () {
        loadCount = loadCount + 6;
        //        alert('ページの読み込みが完了したよ！');
    });

    var loading_text;
    var timer = setInterval(function () {
        $('.loadingBar').css({
            'width': (loadCount / imgLength) * 100 + '%'
        });
        loading_text = $('.loadingBar').innerWidth() * 100 / $('body').width();
        loading_text = Math.ceil(loading_text);
        //        console.log(loading_text);
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
                            $('html,body').removeClass('oh');
                            setTimeout(function () {
                                if ($(window).width() < 751) {
                                    $('header .top_text').addClass('b_line');
                                    $('#sp_first').addClass('scrollin');
                                    setTimeout(function () {
                                        $('.header_scroll').css('top', 'calc(100% - 73px)');
                                    }, 100);
                                } else {
                                    $('#sp_first').addClass('scrollin');
                                }
                            }, 1600);
                        }, 600);
                    }, 1200);
                }, 600);
            }, 800);
        }
    }, 0.1);
});
