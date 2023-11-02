imagesPath = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp"
];

//Inserisco le immagini nel DOM
let IncludePics = "";
for (let i = 0; i < imagesPath.length; i++) {
    const percorsoImmagine = imagesPath[i];
    IncludePics += `<img class="picture " src="${percorsoImmagine}">`;
}
document.getElementById("carousel").innerHTML = IncludePics;






let currentImg = 0;
const images = document.querySelectorAll("#carousel img");
images[currentImg].classList.add("d-inline-block");

clickNxt = document.getElementById("nextBtn").addEventListener("click", function () {
    
    if (currentImg == images.length - 1) {
        images[currentImg].classList.remove("d-inline-block");
        currentImg = 0; 
        images[currentImg].classList.add("d-inline-block");
    }
    
    else if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("d-inline-block");
        currentImg++;
        images[currentImg].classList.add("d-inline-block");
    }
});

clickPrv = document.getElementById("prevBtn").addEventListener("click", function () {
    
    if (currentImg == 0) {
        images[currentImg].classList.remove("d-inline-block");
        currentImg = images.length - 1; 
        images[currentImg].classList.add("d-inline-block");
    }
    
    else if (currentImg > 0) {
        images[currentImg].classList.remove("d-inline-block");
        currentImg--;
        images[currentImg].classList.add("d-inline-block");
    }
});