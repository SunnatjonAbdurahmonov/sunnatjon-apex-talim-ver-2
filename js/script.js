//* Start rating code
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

//* First slide
const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.7%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("third")) {
      slides.style.transform = "translatex(-67.4%)";
      e.target.classList.add("active");
    }
  }
});

//* Second slide
const buttonsWrapper2 = document.querySelector(".map2");
const slides2 = document.querySelector(".inner2");

buttonsWrapper2.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper2.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("fourth")) {
      slides2.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fifth")) {
      slides2.style.transform = "translateX(-33.8%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("sixth")) {
      slides2.style.transform = "translateX(-67.7%)";
      e.target.classList.add("active");
    }
  }
});

//* Third slide
const buttonsWrapper3 = document.querySelector(".map3");
const slides3 = document.querySelector(".inner3");

buttonsWrapper3.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper3.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("seventh")) {
      slides3.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("eighth")) {
      slides3.style.transform = "translateX(-33.8%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("nineth")) {
      slides3.style.transform = "translateX(-67.7%)";
      e.target.classList.add("active");
    }
  }
});

//* Fourth slide
const buttonsWrapper4 = document.querySelector(".map4");
const slides4 = document.querySelector(".inner4");

buttonsWrapper4.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper4.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("tenth")) {
      slides4.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("eleventh")) {
      slides4.style.transform = "translateX(-25.3%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("twelfth")) {
      slides4.style.transform = "translateX(-50.6%)";
      e.target.classList.add("active");
    }
  }
});

//* Fifth slide
const buttonsWrapper5 = document.querySelector(".map5");
const slides5 = document.querySelector(".inner5");

buttonsWrapper5.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper5.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("threetenth")) {
      slides5.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fourteenth")) {
      slides5.style.transform = "translateX(-25.3%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("fifteenth")) {
      slides5.style.transform = "translateX(-50.6%)";
      e.target.classList.add("active");
    }
  }
});

//* Sixth slide
const buttonsWrapper6 = document.querySelector(".map6");
const slides6 = document.querySelector(".inner6");

buttonsWrapper6.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper6.children).forEach((item) =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("sixteenth")) {
      slides6.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("seventeenth")) {
      slides6.style.transform = "translateX(-33.8%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("eighteenth")) {
      slides6.style.transform = "translateX(-67.7%)";
      e.target.classList.add("active");
    }
  }
});
