var submit = document.getElementsByClassName("sub")[0];
var reset = document.getElementsByClassName("reset")[0];
var ps = document.querySelectorAll(".csl");
console.log(ps);
var inputs = Array.from(document.getElementsByTagName("input"));

reset.onclick = function () {
  location.reload();
};

submit.addEventListener("click", function () {
  if (inputs[0].value.length === 0) {
    ps[0].style.display = "block";
    inputs[0].style.border = "3px solid red";

  } else {
    ps[0].style.display = "none";
    inputs[0].style.border = "2px solid green";
  }
});
submit.addEventListener("click", function () {
  if (!inputs[1].value.match(/\w+@\w+\.com/)) {
    ps[1].style.display = "block";
    inputs[1].style.border = "3px solid red";

  } else {
    ps[1].style.display = "none";
    inputs[1].style.border = "2px solid green";
  }
});
submit.addEventListener("click", function () {
  if (inputs[2].value.length === 0 ) {
    ps[2].style.display = "block";
    inputs[2].style.border = "3px solid red";
  } else {
    ps[2].style.display = "none";
    inputs[2].style.border = "2px solid green";
  }
});
submit.addEventListener("click", function () {
  if (!inputs[3].checked && !inputs[4].checked) {
    ps[3].style.display = "block";
  } else {
    ps[3].style.display = "none";
  }
});
