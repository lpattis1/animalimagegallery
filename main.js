const button = document.querySelectorAll(".btn");
const img = document.querySelectorAll(".img");

function sortThroughImages() {
  button.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      let btnCategory = e.target.dataset.category.toLowerCase();
      let categoryTitle = document.querySelector("h2");
      if (e.target === button[0]) {
        categoryTitle.textContent = "ALL";
      } else if (e.target === button[1]) {
        categoryTitle.textContent = "DOGS";
      } else if (e.target === button[2]) {
        categoryTitle.textContent = "CATS";
      } else if (e.target === button[3]) {
        categoryTitle.textContent = "RABBITS";
      } else if (e.target === button[4]) {
        categoryTitle.textContent = "BIRDS";
      } else if (e.target === button[5]) {
        categoryTitle.textContent = "RODENTS";
      }
      console.log(btnCategory);
      img.forEach((image) => {
        if (!image.classList.contains(btnCategory)) {
          image.classList.add("hidden");
        } else {
          image.classList.remove("hidden");
          image.animate(
            [{ transform: "scale(0.5)" }, { transform: "scale(1)" }],
            {
              duration: 1000,
              fill: "forwards",
            }
          );
          image.animate([{ filter: "blur(0.4)" }, { filter: "blur(0)" }], {
            duration: 1000,
            fill: "forwards",
          });
        }
      });
    });
  });
}

sortThroughImages();
