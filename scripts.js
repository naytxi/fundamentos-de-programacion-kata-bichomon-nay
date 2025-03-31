console.log(document.title);

 const title = document.getElementById('gen-1');
 title.textContent="Generasión 1 Pokimon";

 const pokimon = document.getElementsByClassName("infocard");
 for (let i = 0; i < 151 && i < pokimon.length; i++) {
    pokimon[i].style.backgroundColor = "orange";
}

console.log(window.location.href);
console.log(document.domain);

let images = document.querySelectorAll("img");
console.log(images);

images.forEach(function(img){
    img.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
});

const info = document.querySelectorAll(".infocard-lg-data.text-muted .itype.flying");
info.forEach( function(element) {
    element.style.backgroundColor = "yellow";
});



