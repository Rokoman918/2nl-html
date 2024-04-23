$(function() {

    var arr = [];

    arr[0] = [
        'images/header-image-blue.png',
        'images/header-image-blue.png', 'images/header-image-blue.png',
        'images/header-image-blue.png', 'images/header-image-blue.png',
        'ga02/006.jpg', 'ga02/007.jpg',
        'ga02/008.jpg', 'ga02/009.jpg',
        'ga02/010.jpg', 'ga02/011.jpg',
        'ga02/012.jpg'
    ];

    arr[1] = [
        'images/header-image-blue.png',
        'ga03/002.jpg', 'ga03/003.jpg',
        'ga03/004.jpg', 'ga03/005.jpg',
        'ga03/006.jpg', 'ga03/007.jpg',
        'ga03/008.jpg', 'ga03/009.jpg',
        'ga03/010.jpg', 'ga03/011.jpg',
        'ga03/012.jpg'
    ];

    arr[2] = [
        'ga04/001.jpg',
        'ga04/002.jpg', 'ga04/003.jpg',
        'ga04/004.jpg', 'ga04/005.jpg',
        'ga04/006.jpg', 'ga04/007.jpg',
        'ga04/008.jpg', 'ga04/009.jpg',
        'ga04/010.jpg'
    ];


    $('#photobook').onebook(arr[2]);


    $('#book-links a').each(function(i) {
        $(this).on('click', function() {

            if (arr && arr[i]) {
                $('#photobook').onebook(arr[i]);
            };

            return false;
        });
    });




});