/* including images */

imagesPath = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];


let IncludePics = "";
for (let i = 0; i < imagesPath.length; i++) {
    const percorsoImmagine = imagesPath[i];
    IncludePics += `<img class="picture " src="${percorsoImmagine}">`;
}
document.getElementById("carousel").innerHTML = IncludePics;

/* including thumbnails list */

document.getElementById("thumbnails").innerHTML = IncludePics;
const thumbImages = document.querySelectorAll("#thumbnails img");
for (let i = 0; i < thumbImages.length; i++) {
  thumbImages[i].classList.add("thumb-list");
}



/* setting buttons functionality */

let currentImg = 0;
const images = document.querySelectorAll("#carousel img");
images[currentImg].classList.add("d-inline-block");
thumbImages[currentImg].classList.add("active-thumb")

clickNxt = document.getElementById("nextBtn").addEventListener("click", function () {
    
    if (currentImg == images.length - 1) {
        images[currentImg].classList.remove("d-inline-block");
        thumbImages[currentImg].classList.remove("active-thumb")
        currentImg = 0; 
        images[currentImg].classList.add("d-inline-block");
        thumbImages[currentImg].classList.add("active-thumb")
    }
    
    else if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("d-inline-block");
        thumbImages[currentImg].classList.remove("active-thumb")
        currentImg++;
        images[currentImg].classList.add("d-inline-block");
        thumbImages[currentImg].classList.add("active-thumb")
    }
});

clickPrv = document.getElementById("prevBtn").addEventListener("click", function () {
    
    if (currentImg == 0) {
        images[currentImg].classList.remove("d-inline-block");
        thumbImages[currentImg].classList.remove("active-thumb")
        currentImg = images.length - 1; 
        images[currentImg].classList.add("d-inline-block");
        thumbImages[currentImg].classList.add("active-thumb")
    }
    
    else if (currentImg > 0) {
        images[currentImg].classList.remove("d-inline-block");
        thumbImages[currentImg].classList.remove("active-thumb")
        currentImg--;
        images[currentImg].classList.add("d-inline-block");
        thumbImages[currentImg].classList.add("active-thumb")
    }
});