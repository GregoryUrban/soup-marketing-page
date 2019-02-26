class Carousel {
    constructor(carousel) { //    reference to the carousel with the laft and right buttons
        this.carousel = carousel;
        this.imgs = document.querySelectorAll(`.carousel img`); //    2. You will need to grab a reference to all of the images
        this.left = document.querySelector('.left-button'); //    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
        this.right = document.querySelector('.right-button'); //    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons

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
            this.index = this.imgs.length - 1;
        } else {
            this.index--;
        }
        this.imgs[this.index].style.display = "block";
    }

    toggleRight() { //  handlers.
        this.imgs[this.index].style.display = "none";
        clearInterval(this.timer)
        this.timer = setInterval(() => this.toggleRight(), 2000)

        if (this.index === this.imgs.length - 1) {
            this.index = 0;
        } else {
            this.index++
        }
        this.imgs[this.index].style.display = "block";
    }
}

const carousels = document.querySelectorAll(".carousel").forEach(carousel => new Carousel(carousel));


