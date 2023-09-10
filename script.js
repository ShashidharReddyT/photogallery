document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const closeBtn = document.getElementById("close");

    const images = gallery.querySelectorAll(".image img");

    const startSlideshowButton = document.getElementById("start-slideshow");
    const stopSlideshowButton = document.getElementById("stop-slideshow");
    const prevSlideButton = document.getElementById("prev-slide");
    const nextSlideButton = document.getElementById("next-slide");
    const slideshowControls = document.querySelector(".slideshow-controls");
    const allImages = [
        { src: "https://wallpapercave.com/wp/WIKDCoh.jpg", alt: "Image 1", caption: "Image 1" },
        { src: "https://wallpapercave.com/wp/CRU7lJc.jpg", alt: "Image 2", caption: "Image 2" },
        { src: "https://getwallpapers.com/wallpaper/full/7/7/c/257695.jpg", alt: "Image 3", caption: "Image 3" },
        { src: "https://wallpapercave.com/wp/CrklX1B.jpg", alt: "Image 4", caption: "Image 4" },
        { src: "https://wallpaperheart.com/wp-content/uploads/2018/08/best-scenery-wallpapers-9.jpg", alt: "Image 5", caption: "Image 5" },
        { src: "https://getwallpapers.com/wallpaper/full/6/2/4/1227459-country-scenery-wallpaper-2560x1440-for-samsung-galaxy.jpg", alt: "Image 6", caption: "Image 6" },
        { src: "https://wallpapercave.com/wp/CRU7lJc.jpg", alt: "Image 7", caption: "Image 7" },
        { src: "https://getwallpapers.com/wallpaper/full/7/7/c/257695.jpg", alt: "Image 8", caption: "Image 8" },
        { src: "https://wallpaperaccess.com/full/2314950.jpg", alt: "Image 9", caption: "Image 9" },
        { src: "https://www.pcclean.io/wp-content/gallery/scenery-hd-wallpapers/Scenery-12.jpg", alt: "Image 10", caption: "Image 10" }
    ];

    let slideshowInterval;
    let currentIndex = 0;
    let isSlideshowRunning = false;

    function showImage(index) {
        modalImage.src = allImages[index].src;
        currentIndex = index;
    }

    function startSlideshow() {
        isSlideshowRunning = true;
        startSlideshowButton.style.display = "none";
        stopSlideshowButton.style.display = "inline-block";
        prevSlideButton.style.display = "inline-block";
        nextSlideButton.style.display = "inline-block";

        slideshowInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % allImages.length;
            showImage(currentIndex);
        }, 3000);
    }

    function stopSlideshow() {
        isSlideshowRunning = false;
        clearInterval(slideshowInterval);
        startSlideshowButton.style.display = "inline-block";
        stopSlideshowButton.style.display = "none";
        prevSlideButton.style.display = "none";
        nextSlideButton.style.display = "none";
    }

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            if (!isSlideshowRunning) {
                image.classList.toggle("large-image");
                modalImage.classList.toggle("modal-large");

                if (modal.style.display === "block") {
                    modal.style.display = "none";
                } else {
                    showImage(index);
                    modal.style.display = "block";
                }
            }
        });
    });

    startSlideshowButton.addEventListener("click", () => {
        startSlideshow();
    });

    stopSlideshowButton.addEventListener("click", () => {
        stopSlideshow();
    });

    prevSlideButton.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + allImages.length) % allImages.length;
        showImage(currentIndex);
    });

    nextSlideButton.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % allImages.length;
        showImage(currentIndex);
    });

    closeBtn.addEventListener("click", () => {
        stopSlideshow();
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            stopSlideshow();
            modal.style.display = "none";
        }
    });
});
