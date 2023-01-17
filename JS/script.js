//Scroll menu

function scroll() {
  const menu = document.querySelector(".Header-menu ");
  // const menuBkg = document.querySelector(".menu-scroll");

  function activeScroll() {
    menu.classList.toggle("container-menu-scroll-js", scrollY > 1);
    // menuBkg.classList.toggle("menu-scroll-js", scrollY > 200);
  }

  window.addEventListener("scroll", activeScroll);
}

scroll();

//Scrol menu home

function scrollhome() {
  const menu = document.querySelector(".Header-menu-home ");
  // const menuBkg = document.querySelector(".menu-scroll");

  function activeScroll() {
    menu.classList.toggle("container-menu-scroll-js-home", scrollY > 1);
    // menuBkg.classList.toggle("menu-scroll-js", scrollY > 200);
  }

  window.addEventListener("scroll", activeScroll);
}

scrollhome();

// Menu burguer

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

//Scroll animado

function scrollAnimado() {
  const sections = document.querySelectorAll(".js-fade-up");
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - windowMetade < 0;
      if (isSectionVisible) {
        section.classList.add("ativo-scroll");
      }
    });
  }

  window.addEventListener("scroll", animaScroll);
}
scrollAnimado();

// play after clicavel

// $(document).ready(function () {
//   $(".clicavel-g::after").click(function () {
//     window.location.href =
//       "https://www.youtube.com/watch?v=-zAlvtahxTI&list=PLt33sdl-cTuj7GWuiz8flqlrLED-C3loO";
//   });
// });

// $(document).ready(function () {
//   $(".clicavel-h::after").click(function () {
//     window.location.href =
//       "https://www.youtube.com/watch?v=m7PhQ08JHMA&list=PLt33sdl-cTui4xjDvFTFKSKuLmpDu40Nc";
//   });
// });

// $(document).ready(function () {
//   $(".clicavel-m::after").click(function () {
//     window.location.href =
//       "https://www.youtube.com/watch?v=plBhUWjO7yE&list=PLt33sdl-cTuhQRjFCyZGm3cFdG1NWrdQo";
//   });
// });
