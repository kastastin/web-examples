const links = document.querySelectorAll(".header .navbar a");

links.forEach((linkEl) => {
  linkEl.onclick = function (e) {
    e.preventDefault();

    const href = linkEl.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };
});
