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

// start event

setInterval(() => {
  const difTime = new Date("Dec 31, 2022 23:59:59").getTime() - new Date().getTime();
  document.querySelector(".event .days span").textContent = Math.floor(difTime / (1000 * 60 * 60 * 24)) < 10 ? `0${Math.floor(difTime / (1000 * 60 * 60 * 24))}` : Math.floor(difTime / (1000 * 60 * 60 * 24));
  document.querySelector(".event .hours span").textContent = Math.floor((difTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10 ? `0${Math.floor((difTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}` : Math.floor((difTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector(".event .minutes span").textContent = Math.floor((difTime % (1000 * 60 * 60)) / (1000 * 60)) < 10 ? `0${Math.floor((difTime % (1000 * 60 * 60)) / (1000 * 60))}` : Math.floor((difTime % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector(".event .secondes span").textContent = Math.floor((difTime % (1000 * 60)) / 1000) < 10 ? `0${Math.floor((difTime % (1000 * 60)) / 1000)}` : Math.floor((difTime % (1000 * 60)) / 1000);
}, 1000);

// end event

// start stats

const stats = Array.from(document.querySelectorAll(".stats .box h2"));
const section = document.querySelector(".stats");
let done = false;
window.addEventListener("scroll", () => {
  if (window.scrollY >= section.offsetTop - 200) {
    stats.forEach((stat) => {
      stat.previousElementSibling.style.transform = `translateX(${0}px)`;
    });
    if (!done) {
      stats.forEach((stat) => countIt(stat));
      done = true;
    }
  }
});

function countIt(target) {
  const goal = Number(target.dataset.number);
  const counter = setInterval(() => {
    target.textContent++;
    if (target.textContent == goal) {
      clearInterval(counter);
    }
  }, 3000 / goal);
}

// end stats

// scrool to top

const toTop = document.querySelector(".totop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 600) {
    toTop.style.right = "50px";
  } else {
    toTop.style.right = "-50px";
  }
});

toTop.onclick = () => {
  scrollTo({
    top: "0",
    behavior: "smooth",
  });
};
