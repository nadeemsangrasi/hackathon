var toggleButton = document.getElementById("toggleViewMore");
var paragraph = document.getElementById("moreParagraph");
var toggle = true;
toggleButton.addEventListener("click", function () {
    if (toggle == true) {
        paragraph.style.display = "block";
        toggle = false;
    }
    else {
        paragraph.style.display = "none";
        toggle = true;
    }
});
