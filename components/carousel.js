class Carousel {
    constructor(carousel){ //    reference to the carousel with the laft and right buttons
    this.carousel = carousel;
    this.imgs = document.querySelectorAll(`.carousel img`); //    2. You will need to grab a reference to all of the images
    this.left = document.querySelector('.left-button');//    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    this.right = document.querySelector('.right-button');//    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons

    this.index = 0; //    current index
    this.imgs[this.index].style.display = "block";

    this.left.addEventListener("click", () => this.toggleLeft());
    this.right.addEventListener("click", () => this.toggleRight());
    this.timer = setInterval(() => this.toggleRight(), 3500)

    }

    toggleLeft() { //  handlers.
        this.imgs[this.index].style.display = "none";
        
        clearInterval(this.timer)
        this.timer = setInterval(() => this.toggleRight(), 2000)

        if (this.index === 0) {
            this.index = this.imgs.length -1;
        } else {
            this.index--;
        }
        this.imgs[this.index].style.display = "block";
    }
    
    toggleRight() {//  handlers.
        this.imgs[this.index].style.display = "none";
        clearInterval(this.timer)
        this.timer = setInterval(() => this.toggleRight(), 2000)

        if (this.index ===  this.imgs.length-1) {
            this.index = 0;
        } else {
            this.index++
        }
        this.imgs[this.index].style.display = "block";
    }

    // autoToggle() {
    //     this.imgs[this.index].style.display = "none";

    //     if (this.index ===  this.imgs.length-1) {
    //         this.index = 0;
    //     } else {
    //         this.index++
    //     }
    //     this.imgs[this.index].style.display = "block";
    // }

}

const carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));


// trying to auto-slide through carousel images
// var car = document.querySelectorAll('.car');
// for(var i=0; i<car.length; i++){
// 	car[i].style.display = 'inline-block';
// }

// var slides = document.querySelectorAll('.car img');
// var currentSlide = 0;
// var slideInterval = setInterval(nextSlide,2000);

// function nextSlide(){
// 	goToSlide(currentSlide+1);
// }

// function previousSlide(){
// 	goToSlide(currentSlide-1);
// }

// function goToSlide(n){
// 	car[currentSlide].className = 'car';
// 	currentSlide = (n+car.length)%car.length;
// 	car[currentSlide].className = 'slide showing';
// }


// var playing = true;
// var pauseButton = document.getElementById('pause');

// function pauseSlideshow(){
// 	pauseButton.innerHTML = '&#9658;'; // play character
// 	playing = false;
// 	clearInterval(slideInterval);
// }

// function playSlideshow(){
// 	pauseButton.innerHTML = '&#10074;&#10074;'; // pause character
// 	playing = true;
// 	slideInterval = setInterval(nextSlide,2000);
// }
