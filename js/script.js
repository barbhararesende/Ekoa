let typeSplit;


// Split the text up
function runSplit() {
    typeSplit = new SplitType(".split-lines", {
        types: "lines, words"
    });
    $(".line").append("<div class='line-mask'></div>");
    createAnimation();
}

runSplit();

// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
    if (windowWidth !== $(window).innerWidth()) {
        windowWidth = $(window).innerWidth();
        typeSplit.revert();
        runSplit();
    }
});

gsap.registerPlugin(ScrollTrigger);

function createAnimation() {
    $(".line").each(function (index) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                // trigger element - viewport
                start: "top center",
                end: "bottom center",
                scrub: 1
            }
        });
        tl.to($(this).find(".line-mask"), {
            width: "0%",
            duration: 1
        });
    });
}

const nav = document.querySelectorAll('#js-nav li');

function removeActive(){
    nav.forEach((li) => {
        li.classList.remove('active');
    });
}

nav.forEach((li) => {
    li.addEventListener('click', () => {
        removeActive();
        li.classList.add('active');
        closeOpenMenu();
    })
});

let comece = document.querySelector('#js-comece')

comece.addEventListener('click', () => {
  closeOpenMenu();
})

// LENIS SMOOTH SCROLL
let lenis;
if (Webflow.env("editor") === undefined) {
  lenis = new Lenis({
    lerp: 0.1,
    wheelMultiplier: 0.7,
    gestureOrientation: "vertical",
    normalizeWheel: false,
    smoothTouch: false
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

let typeSplitHero 
function runSplitHero() {
    typeSplitHero = new SplitType("[text-split]", {
        types: "words, chars",
        tagName: "span"
    });
}

window.addEventListener("DOMContentLoaded", (event) => {
    // Split text into spans
    runSplitHero();

    $("[words-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true});
        tl.from(
            $(this).find(".word"), 
            {opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } }
        );

        tl.play();
    })
    
    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
});


  $(".quem-somos-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".sticky-quem-somos-element");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        // trigger element - viewport
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.fromTo(
      targetElement,
      {
        width: "115.1rem",
        height: "64.5rem",
        borderRadius: "4rem",
        duration: 0.3
      },
      {
        width: "100vw",
        height: "100vh",
        borderRadius: "0rem",
        duration: 0.3
      }
    );
  });


const menu = document.querySelector('#js-menu');
const menu_content = document.querySelector('#js-menu-content');
const header = document.querySelector('header');

function closeOpenMenu(){
  menu.classList.toggle('active')
  menu_content.classList.toggle('active')
  header.classList.toggle('active')
}

menu.addEventListener('click', () => {
  closeOpenMenu();
})



window.addEventListener('scroll', function () {
  var nav = document.querySelector('header');
  var offset = 110; // Meio da janela

  if (window.scrollY > offset) {
      nav.classList.add('fixed');
  } else {
      nav.classList.remove('fixed');
  }
});
