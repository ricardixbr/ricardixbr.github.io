$( document ).ready(function() {
    $('.slider-main .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.slider-amor-urgente .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1366:{
                items:4
            }
        }
    })

    $('.slider-amor-a-primeira-vista .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1366:{
                items:5
            }
        }
    })

    $('.slider-amor-sem-projecoes .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1366:{
                items:4
            }
        }
    })

    $('.slider-crie-seu-olhar1 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1366:{
                items:4
            }
        }
    })

    $('.slider-crie-seu-olhar2 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1366:{
                items:3
            }
        }
    })

    $('.slider-crie-seu-olhar3 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            1366:{
                items:2
            }
        }
    })

    var token = '217365708.c75ebdc.4791a8aa9c7e4e24acd156258797692b', // learn how to obtain it below
    userid = 296925639, // User ID - get it in source HTML of your Instagram profile or look at the next example :)
    num_photos = 10; // how much photos do you want to get
 
    $.ajax({
        url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
        dataType: 'jsonp',
        type: 'GET',
        data: {access_token: token, count: num_photos},
        success: function(data){
            console.log(data);
            for( x in data.data ){
                $('ul').append('<li><img src="'+data.data[x].images.low_resolution.url+'"></li>'); // data.data[x].images.low_resolution.url - URL of image, 306х306
                // data.data[x].images.thumbnail.url - URL of image 150х150
                // data.data[x].images.standard_resolution.url - URL of image 612х612
                // data.data[x].link - Instagram post URL 
            }
        },
        error: function(data){
            console.log(data); // send the error notifications to console
        }
    });
});
