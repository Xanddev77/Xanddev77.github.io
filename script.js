// Animação inicial (entrada da página)
gsap.from(".navbar", {
  y: -50,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".hero-text h1", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "power4.out"
});

gsap.from(".hero-text h2", {
  y: 80,
  opacity: 0,
  duration: 1.2,
  delay: 0.45,
  ease: "power4.out"
});

gsap.from(".subtitle", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.7
});

gsap.from(".description", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.9
});

gsap.from(".info div", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  delay: 1.1,
  stagger: 0.2
});

gsap.from(".scroll", {
  opacity: 0,
  duration: 1,
  delay: 1.6
});

// Área visual
gsap.from(".visual-box", {
  scale: 0.8,
  opacity: 0,
  duration: 1.2,
  delay: 0.8,
  ease: "power3.out"
});

gsap.from(".tag", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.4,
  stagger: 0.3
});
// Ativa o plugin
gsap.registerPlugin(ScrollTrigger);

// Caixa visual (movimento lento)
gsap.to(".visual-box", {
  y: 120,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

// Tags flutuantes (movimento oposto)
gsap.to(".tag.top", {
  y: -80,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".tag.bottom", {
  y: 80,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});
/* ===============================
   ANIMAÇÃO – PROJETOS
================================ */

gsap.from(".projects-header h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%"
  }
});

gsap.from(".projects-header p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%"
  }
});

gsap.from(".project-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 85%"
  }
});
/* ===============================
   ANIMAÇÃO – SOBRE / EXPERIÊNCIA
================================ */

gsap.from(".about-text h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  }
});

gsap.from(".about-description", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%"
  }
});

gsap.from(".exp-item", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-exp",
    start: "top 85%"
  }
});
/* ===============================
   ANIMAÇÃO – CONTATO
================================ */

gsap.from(".contact-content h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%"
  }
});

gsap.from(".contact-text", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%"
  }
});

gsap.from(".contact-links a", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact-links",
    start: "top 85%"
  }
});

gsap.from(".contact-footer", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%"
  }

});
