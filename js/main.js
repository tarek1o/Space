let bars = document.querySelector(".fa-bars");
let nav = document.querySelector("nav");
let close = document.querySelector(".fa-xmark");
let links = Array.from(document.querySelectorAll("nav ul li"));

bars.addEventListener("click", function() {
    nav.classList.add("active");
})

close.addEventListener("click", function() {
    nav.classList.remove("active");
})

for(let link of links) {
    link.addEventListener("click", function(e) {
        link.querySelector("a").click();
    })
}



let planetNames = Array.from(document.querySelectorAll(".desc ul.style li"));
let planetInfo = Array.from(document.querySelectorAll(".text > div"))
let planetPhoto = Array.from(document.querySelectorAll(".desc .photo img"));
activate(planetNames, planetInfo, planetPhoto);

let sliderCrew = Array.from(document.querySelectorAll(".crew .slider span"));
let nameCrew = Array.from(document.querySelectorAll(".crew .info .text"));
let imgCrew = Array.from(document.querySelectorAll(".crew .photo img"));
activate(sliderCrew, nameCrew, imgCrew);

let stepsNumber = Array.from(document.querySelectorAll(".tech .steps > span"));
let steps = Array.from(document.querySelectorAll(".tech .text"));
let stepsImg = Array.from(document.querySelectorAll(".tech .photo img"));
activate(stepsNumber, steps, stepsImg);

function activate(x, y, z) {
    for(let slide of x) {
        slide.addEventListener("click", function() {
            x.forEach(function(s) {
                s.classList.remove("active");
            });
            slide.classList.add("active");
    
            y.forEach(function(n) {
                n.classList.remove("active");
                if(n.id === slide.dataset.name) {
                    n.classList.add("active");
                }
            })
    
            z.forEach(function(i) {
                i.classList.remove("active");
                if(i.dataset.name === slide.dataset.name) {
                    i.classList.add("active");
                }
            })
        })
    }
}