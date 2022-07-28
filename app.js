const objAnimados = [].slice.call(document.querySelectorAll(".aniStart"));

const cargarImagen = (entradas, obervador) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("offVisible");
    } else {
      entrada.target.classList.remove("offVisible");
    }
  });
};
const observador = new IntersectionObserver(cargarImagen, {
  root: null,
  rootMargin: "100px 0px 0px 100px",
  threshold: 0.5,
});
objAnimados.forEach((e) => observador.observe(e));

document.addEventListener("DOMContentLoaded", function () {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy"));

  let i = 0;
  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add(`visible${i}`);
          i++;
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });

    lazyBackgrounds.forEach(function (lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

//MENU
function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "16px";
  }
}
// BANNER HORIZONTAL
const scroll = document.querySelector(".scroll");
var isDown = false;
var scrollX;
var scrollLeft;

// Mouse Up Function
scroll.addEventListener("mouseup", () => {
  isDown = false;
  scroll.classList.remove("active");
});

// Mouse Leave Function
scroll.addEventListener("mouseleave", () => {
  isDown = false;
  scroll.classList.remove("active");
});

// Mouse Down Function
scroll.addEventListener("mousedown", (e) => {
  e.preventDefault();
  isDown = true;
  scroll.classList.add("active");
  scrollX = e.pageX - scroll.offsetLeft;
  scrollLeft = scroll.scrollLeft;
});

// Mouse Move Function
scroll.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  var element = e.pageX - scroll.offsetLeft;
  var scrolling = (element - scrollX) * 2;
  scroll.scrollLeft = scrollLeft - scrolling;
});

// IPHONE
const button = document.querySelector(".menu__button");
const menu = document.querySelector(".menu__body");
const close = document.querySelector(".menu__header button");
const overlay = document.querySelector(".menu__overlay");

function showMenu() {
  button.setAttribute("hidden", "");
  menu.removeAttribute("hidden");
  overlay.removeAttribute("hidden");
}

function hideMenu() {
  menu.setAttribute("hidden", "");
  overlay.setAttribute("hidden", "");
  button.removeAttribute("hidden");
}

button.addEventListener("click", showMenu);
close.addEventListener("click", hideMenu);
overlay.addEventListener("click", hideMenu);

document.querySelector("body").scroll(function () {
  let selector = document.querySelector("a .scroll-top");
});
