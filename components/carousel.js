class Carousel {
    constructor(carousel){ //    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    this.carousel = carousel;
    this.imgs = document.querySelectorAll(`.carousel img`); //    2. You will need to grab a reference to all of the images
    this.left = document.querySelector('.left-button');//    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    this.right = document.querySelector('.right-button');//    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons

    this.index = 0; //    3. Create a current index
    this.imgs[this.index].style.display = "block";

    this.left.addEventListener("click", () => this.toggleLeft());
    this.right.addEventListener("click", () => this.toggleRight());
    
    }

    toggleLeft() { //    4. Those buttons are gonna need some click handlers.
        this.imgs[this.index].style.display = "none";

        if (this.index === 0) {
            this.index = this.imgs.length -1;
        } else {
            this.index--;
        }
        this.imgs[this.index].style.display = "block";
    }
    
    toggleRight() {//    4. Those buttons are gonna need some click handlers.
        this.imgs[this.index].style.display = "none";

        if (this.index ===  this.imgs.length-1) {
            this.index = 0;
        } else {
            this.index++
        }
        this.imgs[this.index].style.display = "block";
    }

}

const carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/