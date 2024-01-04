document.addEventListener('DOMContentLoaded', function () {
    // later might make the array pull all files from a folder
    var imageArray = [
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg'
    ];

    var carouselInner = document.querySelector('#techshare-gallery > .carousel-inner');
    
    var carouselItem = document.createElement('div');
    carouselItem.classList.add('carousel-item', 'active');
    var r = document.createElement('div').classList.add('row');

    // add each image TO a row in a carousel item
    imageArray.forEach(function (imageSrc, index) {
        
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
        r.appendChild(column);
    });

    carouselItem.appendChild(r);
    carouselInner.appendChild(carouselItem);
});

