let currentImg = 0;
const images = document.querySelectorAll(".carousel img");
images[currentImg].classList.add("d-inline-block");

clickNxt = document.getElementById("nextBtn").addEventListener("click", function () {
    
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("d-inline-block");
        currentImg++;
        images[currentImg].classList.add("d-inline-block");
    }
});

clickPrv = document.getElementById("prevBtn").addEventListener("click", function () {
    
    if (currentImg > 0) {
        images[currentImg].classList.remove("d-inline-block");
        currentImg--;
        images[currentImg].classList.add("d-inline-block");
    }
});