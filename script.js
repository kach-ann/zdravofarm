
    $(function () {
        $('.menu').click(function () {
                $('.main-menu').addClass('main-menu--show');
                $('.navigation .menu').hide();
                $('.navigation .cart').hide();
                $('.close-menu').show();
        })

        $('.close-menu').click(function () {
            $('.main-menu').removeClass('main-menu--show');
            $('.navigation .menu').show();
            $('.navigation .cart').show();
            $('.close-menu').hide();
        })

        $('.cart').click(function () {
            $('.open-cart').addClass('open-cart--show');
            $('.navigation .menu').hide();
            $('.navigation .cart').hide();
            $('.close-cart').show();
        })

        $('.close-cart').click(function () {
            $('.open-cart').removeClass('open-cart--show');
            $('.navigation .menu').show();
            $('.navigation .cart').show();
            $('.close-cart').hide();
        })

        $('.subscribe').mouseover(function () {
            $('.subscribe').hide(400);
            $('.social-img').addClass('social-img--show');
        })

        $('.social-img').mouseleave(function () {
            $('.subscribe').show(400);
            $('.social-img').removeClass('social-img--show');
        })



        // $('.clother').click(function () {
        //     $('.capsules, .pills').hide();
        //     $('.clothers').addClass('products-clothers--show');
        //     $('.shop').addClass('shop-pink');
        // })
        //
        // $('.capsule').click(function () {
        //     $('.clothers, .pills').hide();
        //     $('.capsules').addClass('capsules-clothers--show');
        // })
        //
        // $('.pill').click(function () {
        //     $('.capsules, .clothers').hide();
        //     $('.pills').addClass('pills-clothers--show');
        // })




    })