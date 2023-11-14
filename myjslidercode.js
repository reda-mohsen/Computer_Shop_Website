var sIndex = 1;
Slides(sIndex);

// Next--previous buttons control
function ps(n) {
  Slides(sIndex += n);
}

// current slide
function cS(n) {
  Slides(sIndex = n);
}

function Slides(n) {
  var i;
  var imgs = document.getElementsByClassName("myimgs");
  var dots = document.getElementsByClassName("dot");
  if (n > imgs.length) {sIndex = 1}
  if (n < 1) {sIndex = imgs.length}
  for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  imgs[sIndex-1].style.display = "block";
  dots[sIndex-1].className += " active";
}