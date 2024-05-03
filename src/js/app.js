import image from "../img/goblin.png";
document.addEventListener("DOMContentLoaded", () => {
  const cells = document.querySelectorAll(".cell");
  const goblinIcon = document.createElement("img");
  goblinIcon.src = image;
  goblinIcon.alt = "goblin";
  let currentIndex = 0;

  function showEnemy() {
    cells.forEach((el) => {
      el.classList.remove("active");
    });
    const icon = document.querySelector("img");
    if (icon) {
      icon.remove();
    }
    const randomIndex = Math.floor(Math.random() * cells.length);
    if (currentIndex !== randomIndex) {
      cells[randomIndex].insertAdjacentElement("afterbegin", goblinIcon);
      cells[randomIndex].classList.add("active");
      return (currentIndex = randomIndex);
    } else showEnemy();
  }

  setInterval(showEnemy, 1000);
});
