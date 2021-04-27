// Scroll the information section into view on home page

$("#lu_scroll-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#information-section").offset().top
  }, 500);
  return false;
});

// Scroll left and right to view different brands - quarter of page per scroll on full size, half page scroll on small screens

var gridHolder = $('.brands-grid-holder');
var grid = $('.brands-grid');

gridHolder.scroll(function() {
  if (gridHolder.scrollLeft() + gridHolder.width() > grid.width() - 10) {
    $('#right-button').addClass("hidden");
  } else {
    $('#right-button').removeClass("hidden");
  }

  if (gridHolder.scrollLeft() === 0) {
    $('#left-button').addClass("hidden");
  } else {
    $('#left-button').removeClass("hidden");
  }
});

$(document).ready(function() {
  if ($(window).width() >= 1024) {
    $('#right-button').click(function() {
      event.preventDefault();
      $(gridHolder).animate({
        scrollLeft: $(gridHolder).scrollLeft() + $(grid).width() / 12
      }, 1000);
    });

    $('#left-button').click(function() {
      event.preventDefault();
      $(gridHolder).animate({
        scrollLeft: $(gridHolder).scrollLeft() - $(grid).width() / 12
      }, 1000);
    });
  } else {
    $('#right-button').click(function() {
      event.preventDefault();
      $(gridHolder).animate({
        scrollLeft: $(gridHolder).scrollLeft() + $(grid).width() / 6
      }, 1000);
    });

    $('#left-button').click(function() {
      event.preventDefault();
      $(gridHolder).animate({
        scrollLeft: $(gridHolder).scrollLeft() - $(grid).width() / 6
      }, 1000);
    });
  }
});

$(".arcam-logo").hover(function() {
  $(this).attr("src", "images/arcam-logo.svg");
}, function() {
  $(this).attr("src", "images/arcam-logo-white.svg");
});
$(".birch-logo").hover(function() {
  $(this).attr("src", "images/birch-logo-white.svg");
}, function() {
  $(this).attr("src", "images/birch-logo.svg");
});
$(".ruckus-logo").hover(function() {
  $(this).attr("src", "images/ruckus-logo-white.svg");
}, function() {
  $(this).attr("src", "images/ruckus-logo.svg");
});
$(".control-4-logo").hover(function() {
  $(this).attr("src", "images/control4-logo-white.svg");
}, function() {
  $(this).attr("src", "images/control4-logo.svg");
});
$(".crimestoppers-logo").hover(function() {
  $(this).attr("src", "images/crimestoppers-logo-white.svg");
}, function() {
  $(this).attr("src", "images/crimestoppers-logo.svg");
});
$(".lutron-logo").hover(function() {
  $(this).attr("src", "images/lutron-logo-white.svg");
}, function() {
  $(this).attr("src", "images/lutron-logo.svg");
});
$(".rako-logo").hover(function() {
  $(this).attr("src", "images/rako-logo-white.svg");
}, function() {
  $(this).attr("src", "images/rako-logo.svg");
});
$(".savant-logo").hover(function() {
  $(this).attr("src", "images/savant-logo-white.svg");
}, function() {
  $(this).attr("src", "images/savant-logo.svg");
});
$(".sonance-logo").hover(function() {
  $(this).attr("src", "images/sonance-logo-white.svg");
}, function() {
  $(this).attr("src", "images/sonance-logo.svg");
});
$(".triad-logo").hover(function() {
  $(this).attr("src", "images/triad-logo-white.svg");
}, function() {
  $(this).attr("src", "images/triad-logo.svg");
});
$(".wisdom-logo").hover(function() {
  $(this).attr("src", "images/wisdom-logo-white.svg");
}, function() {
  $(this).attr("src", "images/wisdom-logo.svg");
});
$(".wyrestorm-logo").hover(function() {
  $(this).attr("src", "images/wyrestorm-logo-white.svg");
}, function() {
  $(this).attr("src", "images/wyrestorm-logo.svg");
});
