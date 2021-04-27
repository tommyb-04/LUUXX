$(document).ready(function() {
    var isshown = localStorage.getItem('isshown');
    if (isshown == null) {
        localStorage.setItem('isshown', 1);
        // Show popup here
        $("#dialog-box").css("display", "block");
    }
    $("#ok-button").click(function() {
      $("#dialog-box").fadeOut();
    });
});

// Scroll the information section into view on home page

$("#lu_scroll-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#information-section").offset().top
  }, 500);
  return false;
});

// Array of images for the slideshow for the header section of the homepage

var images = new Array("images/2400x1600/background-1.webp", "images/2400x1600/background-2.webp", "images/2400x1600/background-3.webp", "images/2400x1600/background-4.webp", "images/2400x1600/background-5.webp");
var nextimage = 0;
doSlideshow();

function doSlideshow() {
  if (nextimage >= images.length) {
    nextimage = 0;
  }
  $('.header')
    .css('background-image', 'url("' + images[nextimage++] + '")')
    .fadeIn(500, function() {
      setTimeout(doSlideshow, 6000);
    });
}

// Array of images for the slideshow for the information section of the homepage

var infoImages = new Array("images/2400x1600/background-1.webp", "images/2400x1600/background-2.webp", "images/2400x1600/background-3.webp", "images/2400x1600/background-4.webp", "images/2400x1600/background-5.webp");
var nextInfoImage = 0;
doInfoSlideshow();

function doInfoSlideshow() {
  if (nextInfoImage >= infoImages.length) {
    nextInfoImage = 0;
  }
  $('.information-image')
    .css('background-image', 'url("' + infoImages[nextInfoImage++] + '")')
    .fadeIn(500, function() {
      setTimeout(doInfoSlideshow, 6000);
    });
}
