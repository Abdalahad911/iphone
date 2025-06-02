let phones = Array.from(document.querySelectorAll(".phones li"));
let img = document.querySelector("section img");
let icon = document.querySelector(".fas");
let ul = document.querySelector("nav ul");
let lis = document.querySelectorAll("nav ul li");
phones.forEach((e) => {
  e.onclick = () => {
    document.body.style.backgroundColor = e.dataset.back;
    img.src = e.children[0].src;
  };
});
let turn = "off";
document.body.onclick = (e) => {
  if (e.target.classList.contains("fas")) {
    ul.classList.toggle("show");
  } else {
    if (ul.classList.contains("show")) {
      ul.classList.remove("show");
    }
  }
};
