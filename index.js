document.addEventListener('DOMContentLoaded', function () {
    // later might make the array pull all files from a folder
    var imageArray = [
        'gallery.jpg',
        'gallery.jpg',
        'gallery.jpg',
    ];

    var carouselInner = document.querySelector('#techshare-gallery > .carousel-inner');

    // add each image as a carousel item
    imageArray.forEach(function (imageSrc, index) {
        var carouselItem = document.createElement('div');
        carouselItem.classList.add('carousel-item');

        if (index === 0) {
            carouselItem.classList.add('active'); // set the first item as active
        }

        var img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('d-block', 'w-100'); // bs for responsive images

        carouselItem.appendChild(img);
        carouselInner.appendChild(carouselItem);
    });
});

