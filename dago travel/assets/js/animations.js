
// ==========  animation cards ============
const cards = document.querySelectorAll('.carte-meilleur-plat');
const TL = gsap.timeline({
    defaults: {
        stagger: 0.5
    }
});
TL
  .fromTo(cards, {
    autoAlpha: 0,
    x: -50,
    duration: 1
  }, {
    autoAlpha: 1,
    x: 0
  });

ScrollTrigger.create({
  animation: TL,
  trigger: ".card-container",
  // markers: true,
  start: "top 50%",
  end: "bottom-=60% 40%",
  toggleActions: "play none reverse none",
  scrub: true
});
// ==========  fin animation cards ============




// ==========  animation cards ============ //
const avion = document.querySelector('.avion')
const logoAnim = gsap.timeline({})

window.addEventListener("load", function() {
    logoAnim
    .to(avion, {
        x: '180px',
        scale: 2,
        ease: 'power1',
        duration: 1
    })
    .to(".small-line", {
        width: '185px',
    }, 0)
    .to('')
});
// ==========  end animation cards ============ //



// ==========  end text animation ============ //
const texte1 = document.querySelector('.texte1')

const texteanimation = gsap.timeline({})

texteanimation
  .to(texte1, {x: '115%', ease: "power2"})
  .to(texte1, {x: '-115%', ease: "power2"})

// ==========  end text animation ============ //





