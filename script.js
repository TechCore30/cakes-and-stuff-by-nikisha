document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const lightboxClose = document.getElementById("lightboxClose");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    lightboxClose.addEventListener("click", function () {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });


    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });


    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

});