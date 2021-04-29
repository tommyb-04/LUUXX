// Scroll the information section into view on service page

$("#lu_scroll-button").add(".service-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#lu_service-information-section").offset().top
  }, 500);
  return false;
});

// Hide and show the relevant service depending on which button is pressed

$(document).ready(function() {
  $("#service-button-cinema").click(function() {
    $("#service-home-cinema").addClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-home-cinema.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-home-cinema-4.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-home-cinema-2.webp');
  });
  $("#service-button-av").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").addClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-audio-visual-2.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-audio-visual.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-audio-visual-3.webp');
  });
  $("#service-button-automation").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").addClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-home-automation-1.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-home-automation.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-home-automation-2.webp');
  });
  $("#service-button-lighting").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").addClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-intelligent-lighting-1.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-intelligent-lighting.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-intelligent-lighting-2.webp');
  });
  $("#service-button-shading").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").addClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-automated-shading-1.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-automated-shading.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-intelligent-lighting-3.webp');
  });
  $("#service-button-outdoor").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").addClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-outdoor-audio-2.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-outdoor-audio-3.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-outdoor-audio-4.webp');
  });
  $("#service-button-hifi").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").addClass("show-service");
    $("#service-networks-wifi").removeClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-img-hifi-1.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-img-hifi-2.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-img-hifi-4.webp');
  });
  $("#service-button-networks").click(function() {
    $("#service-home-cinema").removeClass("show-service");
    $("#service-standard").removeClass("show-service");
    $("#service-audio-visual").removeClass("show-service");
    $("#service-home-automation").removeClass("show-service");
    $("#service-intelligent-lighting").removeClass("show-service");
    $("#service-automated-shading").removeClass("show-service");
    $("#service-outdoor-audio").removeClass("show-service");
    $("#service-hifi").removeClass("show-service");
    $("#service-networks-wifi").addClass("show-service");
    $('.service-img-1').attr('src', 'images/800x800/service-networks-wifi-cabling-1.webp');
    $('.service-img-2').attr('src', 'images/800x800/service-networks-wifi.webp');
    $('.service-img-3').attr('src', 'images/800x800/service-networks-wifi-cabling-2.webp');
  });
});
