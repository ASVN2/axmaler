function removeClasses(array, tclass) {
  array.forEach((element) => {
    element.classList.remove(tclass);
  });
}

// start menu

// check for color in localStorage
if (localStorage.getItem("color")) {
  document.documentElement.style.setProperty("--main-color", localStorage.getItem("color"));
}

// toggle the icon
document.querySelector(".menu .icon").onclick = () => {
  document.querySelector(".menu").classList.toggle("active");
  document.querySelector(".menu .icon .fa-gear").classList.toggle("fa-spin");
};

const colors = document.querySelectorAll(".menu .color-conatiner ul li");
colors.forEach((color) => {
  color.style.backgroundColor = color.dataset.color;
  if (color.dataset.color == localStorage.getItem("color")) {
    removeClasses(colors, "active");
    color.classList.add("active");
  }
  color.onclick = () => {
    removeClasses(colors, "active");
    color.classList.add("active");
    document.documentElement.style.setProperty("--main-color", color.dataset.color);
    window.localStorage.setItem("color", color.dataset.color);
  };
});

// end menu
// start landing
const boxs = Array.from(document.querySelectorAll(".landing .images .box"));
boxs.forEach((box) => {
  box.addEventListener("click", () => {
    removeClasses(boxs, "active");
    box.classList.add("active");
  });
});
// end landing

// start shop
const switcher = document.querySelectorAll(".shop .switcher li");
const prodacts = document.querySelectorAll(".shop .box");
switcher.forEach((theSwitch) => {
  theSwitch.onclick = () => {
    removeClasses(switcher, "active");
    theSwitch.classList.add("active");
    prodacts.forEach((prodact) => {
      if (!prodact.classList.contains(theSwitch.dataset.cat)) {
        prodact.style.display = "none";
      } else {
        prodact.style.display = "block";
      }
    });
  };
});

// end shop

// Start skills
const skills = document.querySelectorAll(".skills .box .full-bar");
const skillsSecton = document.querySelector(".skills");

window.addEventListener("scroll", () => {
  if (this.scrollY >= skillsSecton.offsetTop - 400) {
    skills.forEach((skill) => {
      skill.style.width = `${skill.dataset.width}`;
      skill.classList.add("active");
    });
  } else {
    skills.forEach((skill) => {
      skill.style.width = `0%`;
      skill.classList.remove("active");
    });
  }
});

// End skills

// Start animales
const animales = Array.from(document.querySelectorAll(".animales .holder-images img"));
const targetBox = document.querySelector(".animales .main-image img");
animales.forEach((animale) => {
  animale.onclick = () => {
    targetBox.src = animale.src;
  };
});
// End animales
