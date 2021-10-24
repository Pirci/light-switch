/*
!Turn the light on and off by clicking the bulb!
*/

function changeImage() {
  let image = document.getElementById("myImage");
  if (image.src.match("OnBulb")) {
    image.src = "img/OffBulb.jpg";
  } else {
    image.src = "img/OnBulb.jpg";
  }
}
