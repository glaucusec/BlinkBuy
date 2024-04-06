let slideIndex = 1;
document.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add("hidden");
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("bg-slate-900");
  }
  slides[slideIndex - 1].classList.remove("hidden");
  dots[slideIndex - 1].classList.add("bg-slate-900");
}

