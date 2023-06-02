const cards = document.querySelectorAll('.carte-meilleur-plat');

const TL = gsap.timeline()

TL
gsap.to(cards, {
    autoAlpha: 1,
    stagger: 2, 
    scrollTrigger: {
        trigger: ".card-container",
        markers: true,
        start: "center center"
    }
}) 

