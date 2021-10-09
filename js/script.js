window.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".nav__btn");
  const navList = document.querySelector(".nav__list");
  const html = document.querySelector("html");

  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("nav__active");
    navList.classList.toggle("nav__show");
    html.classList.toggle("html__oveflow");
  });

  let splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  splide.mount();

  let splide2 = Splide(".splide2", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
  splide2.mount();
});
