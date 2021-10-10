window.addEventListener("DOMContentLoaded", function () {
  const navBtn = document.querySelector(".nav__btn");
  const navList = document.querySelector(".nav__list");
  const html = document.querySelector("html");

  navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("nav__active");
    navList.classList.toggle("nav__show");
    html.classList.toggle("html__oveflow");
  });

  const ratingStars = [...document.getElementsByClassName("rating__star")];

  function executeRating(stars, result) {
    const starClassActive = "rating__star";
    const starClassUnactive = "rating-star rating__star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
      star.onclick = () => {
        i = stars.indexOf(star);

        if (star.className.indexOf(starClassUnactive) !== -1) {
          for (i; i >= 0; --i) stars[i].className = starClassActive;
        } else {
          for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
        }
      };
    });
  }
  executeRating(ratingStars);

  //* Popup

  const courseBtn = document.querySelector(".course__btn");
  const closeBtn = document.querySelector(".close__popup");
  const popup = document.querySelector(".course__popup-wrapper");

  courseBtn.addEventListener("click", () => {
    popup.classList.add("show__popup");
    html.classList.add("html__oveflow");
  });
  closeBtn.addEventListener("click", () => {
    popup.classList.remove("show__popup");
    html.classList.remove("html__oveflow");
  });

  let modal = document.getElementById("modal");
  let i;

  let img = document.querySelectorAll(".section__open-modal");
  let modalImg = document.getElementById("img01");

  for (i = 0; i < img.length; i++) {
    img[i].onclick = function () {
      modal.style.display = "flex";
      modalImg.src = this.src;
      modalImg.alt = this.alt;
      html.classList.add("html__oveflow");
      navBtn.style.display = "none";
    };
  }

  let span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
    html.classList.remove("html__oveflow");
    navBtn.style.display = "flex";
  };

  function labnolIframe(div) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    );
    div.parentNode.replaceChild(iframe, div);
  }

  function initYouTubeVideos() {
    let playerElements = document.getElementsByClassName("splide__player");
    for (let n = 0; n < playerElements.length; n++) {
      let videoId = playerElements[n].dataset.id;
      let div = document.createElement("div");
      div.setAttribute("data-id", videoId);
      let thumbNode = document.createElement("img");
      thumbNode.src = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace(
        "ID",
        videoId
      );
      div.appendChild(thumbNode);
      let playButton = document.createElement("div");
      playButton.setAttribute("class", "play");
      div.appendChild(playButton);
      div.onclick = function () {
        labnolIframe(this);
      };
      playerElements[n].appendChild(div);
    }
  }

  initYouTubeVideos();

  let splide = new Splide(".splide", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });
  let splide2 = new Splide(".splide2", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });
  let splide3 = new Splide(".splide3", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });
  let splide4 = new Splide(".splide4", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });
  let splide5 = new Splide(".splide5", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });
  let splide6 = new Splide(".splide6", {
    type: "loop",
    perPage: 3,
    focus: "left",
    autoplay: true,
    rewind: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });

  splide.mount();
  splide2.mount();
  splide3.mount();
  splide4.mount();
  splide5.mount();
  splide6.mount();
});
