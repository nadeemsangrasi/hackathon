const toggleButton = document.getElementById("toggleViewMore")!;
const paragraph = document.getElementById("moreParagraph")!;
let toggle = true;

toggleButton.addEventListener("click", () => {
  if (toggle == true) {
    paragraph.style.display = "block";

    toggle = false;
  } else {
    paragraph.style.display = "none";

    toggle = true;
  }
});
