

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }
      
    static Start(arr){
        
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
       const displayCarousel = document.getElementById("carousel");
       const displayCarouselTitle = document.getElementById("carousel-title")
        
       displayCarousel.innerHTML = inserirImagem(carouselArr[0]);
       displayCarouselTitle.innerHTML = inserirTitulo(carouselArr[0])
    }
};




function inserirImagem(array){
    return link = `<img class="img-selected" alt="${array.image}"src="./img/${array.image}">`
}

function inserirTitulo(array){
    return titulo = `<div class="title-selected">${array.title}</div>`
}