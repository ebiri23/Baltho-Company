let pos = document.getElementsByClassName("position");
let y;

for (y = 0; y < pos.length; y++) {
  pos[y].addEventListener("click", function() {

    this.classList.toggle("active");


    let accordion = this.nextElementSibling;
    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
}