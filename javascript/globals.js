// Loading function

$(window).on("load", function() {
  setTimeout(
    function() {
      $(".load-overlay").fadeOut();
    }, 1000);
});

// Loading Logo Bounce

setTimeout(function() {
  $(".ld").css("animation-play-state", "paused");
}, 10000);


// Scroll Top button

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    $("#lu_scroll-top").fadeIn();
  } else {
    $("#lu_scroll-top").fadeOut();
  }
});

$("#lu_scroll-top").click(function() {
  $('html, body').animate({
    scrollTop: $("html").offset().top
  }, 500);
  return false;
});

// Toggle display of the responsive navigation and the dropdown menu

$(function() {
  $(".lu_menu-icon").click(function() {
    $(".lu_nav").toggleClass("responsive");
  });
  $(".lu_nav-dropdown-button").click(function() {
    $(".lu_nav-dropdown-content").toggleClass("show");
  });
});

// Close responsive menu and dropdown menu when clicking outside of the menu container

$(document).mouseup(function(e) {
  var container = $(".lu_nav-dropdown");
  var container2 = $(".lu_nav");

  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $(".lu_nav-dropdown-content").removeClass("show");
  }
  if (!container2.is(e.target) && container2.has(e.target).length === 0) {
    $(".lu_nav").removeClass("responsive");
  }
});
