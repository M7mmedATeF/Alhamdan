let teamSlideContainer = document.querySelector(".team .viewport .slider");
let teamSlideCount = document.querySelectorAll(
  ".team .viewport .slider .slide"
).length;
let txtContainer = document.querySelector(
  ".team .info .teamViewer .textContainer"
);
let teamSlideWidth = teamSlideContainer.clientWidth / teamSlideCount;
let tmBTNs = document.querySelectorAll(".team button");
let teamPos = 0;
let teamSlideINDEX = 0;
let teamMoveToRight = true;
let teamLateClick = false;
let teamAutoPlay = true;
let texts = [
  {
    name: "DR. ABDULLAH ALHAMDAN",
    position: "PARTNER",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur provident fuga molestiae illum ipsam at voluptatum dicta esse vel? Sint, voluptatem. Repudiandae fuga aspernatur tempora voluptatem, velit blanditiis dolores!",
  },
  {
    name: "ABDULLAH ALAAMRI",
    position: "PARTNER",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam pariatur provident fuga molestiae illum ipsam at voluptatum dicta esse vel? Sint, voluptatem. Repudiandae fuga aspernatur tempora voluptatem, velit blanditiis dolores!",
  },
];

tmBTNs[0].addEventListener("click", () => {
  teamLateClick = true;
  goLeft();
});

tmBTNs[2].addEventListener("click", () => {
  teamLateClick = true;
  goRight();
});

tmBTNs[1].addEventListener("click", () => {
  tmBTNs[1].classList.toggle("play");
  teamAutoPlay = !teamAutoPlay;
});

function goLeft() {
  if (teamSlideINDEX != 0) {
    changeText();
    teamPos += teamSlideWidth;
    teamSlideINDEX--;
    teamSlideContainer.style.left = teamPos + "px";
  }
}

function goRight() {
  if (teamSlideINDEX != teamSlideCount - 1) {
    changeText();
    teamPos -= teamSlideWidth;
    teamSlideINDEX++;
    teamSlideContainer.style.left = teamPos + "px";
  }
}

setInterval(() => {
  if (teamAutoPlay) {
    if (teamSlideINDEX == 0) teamMoveToRight = true;
    else if (teamSlideINDEX == teamSlideCount - 1) teamMoveToRight = false;

    if (!teamLateClick) {
      if (teamMoveToRight) goRight();
      else goLeft();
    } else teamLateClick = false;
  }
}, 10000);

function changeText() {
  txtContainer.classList.add("hide");

  setTimeout(() => {
    txtContainer.innerHTML = `
        <p class="name">${texts[teamSlideINDEX].name}</p>
        <p class="position">${texts[teamSlideINDEX].position}</p>
        <p class="details">${texts[teamSlideINDEX].details}</p>
        <a class="readmore" href="./sides/teamMember.html">
                                <svg width="42" height="11" viewBox="0 0 42 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M36.5156 1L41 5.5L36.5156 10" stroke="currentColor"></path>
                                    <path d="M41 5.5H0H41Z" fill="currentColor"></path>
                                    <path d="M41 5.5H0" stroke="currentColor"></path>
                                </svg>
                                Know More About
                            </a>
        `;
    txtContainer.classList.remove("hide");
  }, 300);
}
