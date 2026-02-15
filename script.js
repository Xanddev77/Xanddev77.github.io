/* ===============================
   REGISTRO DE PLUGIN
================================ */
gsap.registerPlugin(ScrollTrigger);

/* ===============================
   ANIMAÇÃO INICIAL (APENAS 1 VEZ)
================================ */

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

/* ===============================
   HERO VISUAL (ENTRADA)
================================ */

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

/* ===============================
   PARALLAX (SCRUB)
================================ */

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
   PROJETOS (LOOP NO SCROLL)
================================ */

gsap.from(".projects-header h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".projects-header p", {
  y: 40,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".project-card", {
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  }
});

/* ===============================
   SOBRE / EXPERIÊNCIA (LOOP)
================================ */

gsap.from(".about-text h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".about-description", {
  y: 30,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".exp-item", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".about-exp",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  }
});

/* ===============================
   CONTATO (LOOP)
================================ */

gsap.from(".contact-content h2", {
  y: 60,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".contact-text", {
  y: 30,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".contact-links a", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".contact-links",
    start: "top 85%",
    toggleActions: "play reverse play reverse"
  }
});

gsap.from(".contact-footer", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    toggleActions: "play reverse play reverse"
  }
});

/* ===============================
   INVERTER PRETO ↔ BRANCO (AX)
================================ */

const invertToggle = document.querySelector(".logo");

invertToggle.addEventListener("click", () => {
  document.body.classList.toggle("invert");

  gsap.fromTo(
    invertToggle,
    { scale: 1 },
    {
      scale: 0.9,
      duration: 0.15,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    }
  );
});
/* ===============================
   LOOP TEXTO (FRONT-END ↔ DEVOPS)
================================ */

const roles = [
  "Desenvolvedor Front-end",
  "UI/UX","Interfaces Performática"
];

let roleIndex = 0;
const roleEl = document.getElementById("role");

gsap.timeline({ repeat: -1 })
  .to(roleEl, {
    opacity: 0,
    y: -10,
    duration: 0.4,
    delay: 2,
    ease: "power2.in"
  })
  .call(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    roleEl.textContent = roles[roleIndex];
  })
  .fromTo(
    roleEl,
    { opacity: 0, y: 10 },
    {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power4.out"
    }
  );
/* ===============================
   EFEITO 3D NOS PROJETOS
================================ */

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 12;
    const rotateY = (x - centerX) / 12;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(20px)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateZ(0)
    `;
  });
});