
// Scroll the information section into view on package page

$("#lu_scroll-button").add(".package-button").add(".package-page-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#lu_package-information-section").offset().top
  }, 500);
  return false;
});

// Hide and show the relevant package depending on which button is pressed

$(document).ready(function() {
  $("#button-bronze").click(function() {
    $("#package-bronze").addClass("show-package");
    $("#package-silver").removeClass("show-package");
    $("#package-gold").removeClass("show-package");
    $("#package-luuxx").removeClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $("#button-silver").click(function() {
    $("#package-bronze").removeClass("show-package");
    $("#package-silver").addClass("show-package");
    $("#package-gold").removeClass("show-package");
    $("#package-luuxx").removeClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $("#button-gold").click(function() {
    $("#package-bronze").removeClass("show-package");
    $("#package-silver").removeClass("show-package");
    $("#package-gold").addClass("show-package");
    $("#package-luuxx").removeClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $("#button-luuxx").click(function() {
    $("#package-bronze").removeClass("show-package");
    $("#package-silver").removeClass("show-package");
    $("#package-gold").removeClass("show-package");
    $("#package-luuxx").addClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $(".bronze-page-btn").click(function() {
    $("#package-bronze").addClass("show-package");
    $("#package-silver").removeClass("show-package");
    $("#package-gold").removeClass("show-package");
    $("#package-luuxx").removeClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $(".silver-page-btn").click(function() {
    $("#package-bronze").removeClass("show-package");
    $("#package-silver").addClass("show-package");
    $("#package-gold").removeClass("show-package");
    $("#package-luuxx").removeClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $(".gold-page-btn").click(function() {
    $("#package-bronze").removeClass("show-package");
    $("#package-silver").removeClass("show-package");
    $("#package-gold").addClass("show-package");
    $("#package-luuxx").removeClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
  $(".luuxx-page-btn").click(function() {
    $("#package-bronze").removeClass("show-package");
    $("#package-silver").removeClass("show-package");
    $("#package-gold").removeClass("show-package");
    $("#package-luuxx").addClass("show-package");
    $("#package-standard").removeClass("show-package");
  });
});
