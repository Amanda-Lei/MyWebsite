document.addEventListener('DOMContentLoaded', function () {

//carousels
var imgArray = fetchImages('techsharePosts');
var carouselInner = document.querySelector('#techshare-gallery > .carousel-inner');
createCarousel(imgArray, carouselInner);


/* FUNCTIONS */

//return array of all pngs in folder arg
function fetchImages(folderName) {
    return fetch('images/' + folderName + '/')
        .then(response => response.text())
        .then(data => {
            // Parse the HTML content to extract image file names
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(data, 'text/html');
            const imageElements = htmlDoc.querySelectorAll('a[href$=".png"]');

            // Create an array with image paths
            const imageArray = Array.from(imageElements).map(element => 'images/' + folderName + '/' + element.getAttribute('href'));

            return imageArray;
        });
}

// create carousel of images in imageArray where each item can hold up to 4 images. carousel appended into innerLocation arg
function createCarousel (imageArray, innerLocation) {
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
            innerLocation.appendChild(carouselItem);
            imageCount = 0;
        }

    });

    //add empty columns to keep spacing on row consistent for incompleted rows
    if (imageCount!=0){
        for (let i = 0; i < 4-imageCount; i++) {
            var column = document.createElement('div')
            column.classList.add('col-sm-3');
            r.appendChild(column);
        }
    }

    carouselItem.appendChild(r);
    innerLocation.appendChild(carouselItem);
}

});

