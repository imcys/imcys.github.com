$(document).ready(function(){

    var unslider = $('.slideshow').unslider({
            speed: 1000,               //  切換的速度
            delay: 5000,              //  切換的速度
            keys: true,               //  是否啟用左右按鈕控制slider切換
            fluid: false,              // 是否每次在容器大小改變的時候，修正slider的大小
            pause: true,                 //鼠標以上去是否暫停播放
            starting:function(){        //每次開始切換時回叫方法
                console.log("starting");
            },
            complete:function(){         //每次完成切換時回叫方法
                console.log("complete");
            },
            arrows: false,               //  是否顯示左右箭頭，用於slider切換
            dots: false                  //  是否顯示白色圓點，用於slider切換
        }),
        data = unslider.data('unslider');

    //     $('.unslider-arrow').click(function() {
    //     var fn = this.className.split(' ')[1];

    //     //  Either do unslider.data('unslider').next() or .prev() depending on the className
    //     unslider.data('unslider')[fn]();
    // });


    var slides = $('.slideshow'),
        i = 0;

        slides
        .on('swipeleft', function(e) {
            unslider.prev();
        })
        .on('swiperight', function(e) {
            unslider.next();
        });

    // $('.area1').width(screen.width);

});




