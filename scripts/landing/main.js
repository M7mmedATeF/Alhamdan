let navBTN = document.querySelector("#navBTN");
let sideNav = document.querySelector("nav .links");
let Links = Array.prototype.slice.call(
  document.querySelectorAll("nav ul li a:not(.teamLinks)")
);

Links.push(navBTN);

Links.forEach((btn) => {
  btn.addEventListener("click", () => {
    sideNav.classList.toggle("show");
  });
});
