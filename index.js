document.addEventListener('DOMContentLoaded', function () {
    // later might make the array pull all files from a folder
    var imageArray = [
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg',
        'images/gallery.jpg'
    ];

    var carouselInner = document.querySelector('#techshare-gallery > .carousel-inner');
    
    var carouselItem;
    var r;
    var imageCount = 0;
    var rowCount = 0;

    // add each image TO a row in a carousel item
    imageArray.forEach(function (imageSrc) {

        if (imageCount==0){
            //new carousel item
            carouselItem = document.createElement('div');
            carouselItem.classList.add('carousel-item');
            //means first row made so should be set active
            if (rowCount==0){ carouselItem.classList.add('active'); }
            //new row
            r = document.createElement('div')
            r.classList.add('row');
            rowCount++;
        }
        
        //create col div and card div
        var column = document.createElement('div')
        column.classList.add('col-sm-3');
        var card = document.createElement('div')
        card.classList.add('card');

        // image
        var img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('img-fluid');

        //nest classes
        card.appendChild(img);
        column.appendChild(card);
        r.appendChild(column);

        imageCount++;

        if (imageCount == 4) { //row complete. append to carousel and reset image count
            carouselItem.appendChild(r);
            carouselInner.appendChild(carouselItem);
            imageCount = 0;
        }

    });

    carouselItem.appendChild(r);
    carouselInner.appendChild(carouselItem);
});

