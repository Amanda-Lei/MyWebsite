document.addEventListener('DOMContentLoaded', function () {
    // later might make the array pull all files from a folder
    var imageArray = [
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg'
    ];

    var carouselInner = document.querySelector('#techshare-gallery > .carousel-inner');

    // add each image as a carousel item
    imageArray.forEach(function (imageSrc, index) {
        var carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item', 'row');

        //set first item active
        if (index === 0) {
            carouselItem.classList.add('active');
        }

        //create col div and card div
        var column = document.createElement('div').classList.add('col-sm-3');
        var card = document.createElement('div').classList.add('card');

        // image
        var img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('img-fluid');

        //nest classes
        card.appendChild(img);
        column.appendChild(card);
        carouselItem.appendChild(column);
        carouselInner.appendChild(carouselItem);
    });
});

