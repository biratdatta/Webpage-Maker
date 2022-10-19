var char = document.getElementById("char");
var block = document.getElementById("block");
var points = document.getElementById("points");
var btn = document.getElementById("btn");
let count = 0;
points.innerHTML = count;
btn.addEventListener("click", () => {
  count++;
  points.innerHTML = count;
  if (char.classList != "animate") {
    char.classList.add("animate");
  }

  setTimeout(function () {
    char.classList.remove("animate");
  }, 500);

  var checkDead = setInterval(function () {
    var charTop = parseInt(
      window.getComputedStyle(char).getPropertyValue("top")
    );

    var blockLeft = parseInt(
      window.getComputedStyle(block).getPropertyValue("left")
    );

    if (blockLeft < 20 && blockLeft > 0 && charTop >= 130) {
      block.style.animation = "none";
      block.style.display = "none";
      char.style.display = "none";
      alert("Score: " + count);
    }
  }, 10);
});
