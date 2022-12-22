const hamburger = document.querySelector(".hamburger"); //索引

const sitesetLinks = document.querySelector(".siteset");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sitesetLinks.classList.toggle("active"); //切換
})