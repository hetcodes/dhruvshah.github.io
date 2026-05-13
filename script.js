// LOADER

window.addEventListener("load", () => {

  gsap.to(".loader", {

    opacity: 0,
    duration: 1,
    delay: 1,

    onComplete: () => {

      document.querySelector(".loader").style.display = "none";

    }

  });

});

// HERO ANIMATION

const tl = gsap.timeline();

tl.from(".navbar", {

  y: -100,
  opacity: 0,
  duration: 1

});

tl.from(".hero-subtitle", {

  y: 40,
  opacity: 0,
  duration: 0.8

}, "-=0.5");

tl.from(".hero-title", {

  y: 100,
  opacity: 0,
  duration: 1.2

}, "-=0.4");

tl.from(".hero-role", {

  x: -50,
  opacity: 0,
  duration: 0.8

}, "-=0.7");

tl.from(".hero-text", {

  y: 40,
  opacity: 0,
  duration: 0.8

}, "-=0.5");

tl.from(".hero-buttons .btn", {

  y: 30,
  opacity: 0,
  stagger: 0.2,
  duration: 0.8

}, "-=0.5");

tl.from(".hero-image", {

  scale: 1.2,
  opacity: 0,
  rotate: 3,
  duration: 1.5

}, "-=1");

// FLOATING IMAGE

gsap.to(".hero-image", {

  y: 20,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"

});

// GLOW MOVEMENT

gsap.to(".glow-red", {

  x: 80,
  y: 40,
  duration: 8,
  repeat: -1,
  yoyo: true

});

gsap.to(".glow-blue", {

  x: -60,
  y: -30,
  duration: 10,
  repeat: -1,
  yoyo: true

});

// SCROLL ANIMATION

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".glass-card").forEach((card) => {

  gsap.from(card, {

    scrollTrigger: {

      trigger: card,
      start: "top 85%"

    },

    y: 60,
    opacity: 0,
    duration: 1

  });

});

// NAVBAR EFFECT

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(0,0,0,0.75)";

  }

  else {

    navbar.style.background = "rgba(0,0,0,0.25)";

  }

});

// EMAILJS

emailjs.init({
  publicKey: "ABRs0-znN59PUTaaV",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  emailjs.sendForm(
    "service_lxh2zmg",
    "template_oawjlkf",
    "#contact-form"
  )

  .then(() => {

    alert("Message Sent Successfully!");

    form.reset();

  })

  .catch((error) => {

    console.log(error);

    alert(JSON.stringify(error));

  });

});