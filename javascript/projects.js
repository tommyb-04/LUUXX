// Scroll the information section into view on project page

$("#lu_scroll-button").add(".projects-button").click(function() {
  $('html, body').animate({
    scrollTop: $("#lu_project-information-section").offset().top
  }, 500);
  return false;
});

// Scroll left and right to view different projects - quarter of page per scroll

var left = $('.lu_selection-grid').width() / 4;

$('.lu_selection-grid').scroll(function() {
  if ($(".lu_selection-grid").scrollLeft() >= 1) {
    $('#left-button').removeClass("hidden");
  }
  if ($(".lu_selection-grid").scrollLeft() == 0) {
    $('#left-button').addClass("hidden");
  }
  if ($(".lu_selection-grid").scrollLeft() >= $('.lu_selection-grid').width()) {
    $('#right-button').addClass("hidden");
  }
  if ($(".lu_selection-grid").scrollLeft() < $('.lu_selection-grid').width()) {
    $('#right-button').removeClass("hidden");
  }
});

$('#right-button').click(function() {
  event.preventDefault();
  $('.lu_selection-grid').animate({
    scrollLeft: $(".lu_selection-grid").scrollLeft() + left
  }, 1000);
});

$('#left-button').click(function() {
  event.preventDefault();
  $('.lu_selection-grid').animate({
    scrollLeft: $(".lu_selection-grid").scrollLeft() - left
  }, 1000);
});

// Slow bounce of project header to show user that scroll is enabled

setTimeout(function() {
  $('.lu_selection-grid').animate({
    scrollLeft: left
  }, 'slow').delay(100)
  $('.lu_selection-grid').animate({
    scrollLeft: -left
  }, 'slow');
}, 300);

// Scroll down project information on the header section to display name and view project button on hover

$(function() {
  $('.lu_selection-grid-item').hover(function() {
    $('.project-info', this).slideDown("slow").css('display', 'block');
  }, function() {
    $('.project-info', this).slideUp("slow").css('display', 'none');
  });
});

// Hide and show the relevant project depending on which button is pressed

$(document).ready(function() {
  $("#button-1, #button-1-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-1-2.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-1-1.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-1-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-1-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-1-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-1-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-1-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-1-8.webp");
    $(".img-1").attr("alt", "Home bar with Lutron lighting");
    $(".img-2").attr("alt", "Home gym with Sonance audio");
    $(".img-3").attr("alt", "Mirror TV");
    $(".img-4").attr("alt", "Control4 touchscreen");
    $(".img-5").attr("alt", "Lutron lighting keypad");
    $(".img-6").attr("alt", "Statement chandelier with Lutron lighting control");
    $(".img-7").attr("alt", "In wall TV with Wyrestorm video distribution");
    $(".img-8").attr("alt", "Equipment rack cabling");
    $(".caption-1").html("Home bar with <a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting");
    $(".caption-2").html("Home gym with <a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> audio");
    $(".caption-3").html("Mirror TV");
    $(".caption-4").html("<a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control4</a> touchscreen");
    $(".caption-5").html("<a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting keypad");
    $(".caption-6").html("Statement chandelier with <a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting control");
    $(".caption-7").html("In wall TV with <a href='https://wyrestorm.com/av-over-ip' class='in-text-link' target='_blank'>Wyrestorm</a> video distribution");
    $(".caption-8").html("Equipment rack cabling");
    $(".project-name").text("Luxurious Entertainment Space: From Concept to Completion");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-1").css("display", "block");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-7").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-2, #button-2-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-2-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-2-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-2-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-2-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-2-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-2-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-2-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-2-8.webp");
    $(".img-1").attr("alt", "Wisdom Audio cinema");
    $(".img-2").attr("alt", "Luxury cinema and entertainment space with Control4 automation");
    $(".img-3").attr("alt", "Gallo Acoustics bespoke droplet speaker");
    $(".img-4").attr("alt", "Control4 lighting keypad");
    $(".img-5").attr("alt", "Entertainment room with slide, with Control4 and Gallo Acoustics speakers");
    $(".img-6").attr("alt", "Luxury cinema with concealed JVC projector");
    $(".img-7").attr("alt", "Luxury cinema featuring stretch fabric walls and ceiling");
    $(".img-8").attr("alt", "Home bar featuring Gallo Acoustics speakers and Control4 automation");
    $(".caption-1").html("<a href='https://www.wisdomaudio.com/' class='in-text-link' target='_blank'>Wisdom Audio</a> cinema");
    $(".caption-2").html("Luxury cinema and entertainment space with <a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control4</a> automation");
    $(".caption-3").html("<a href='https://galloacoustics.com/' class='in-text-link' target='_blank'>Gallo Acoustics</a> bespoke droplet speaker");
    $(".caption-4").html("<a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control 4</a> lighting keypad");
    $(".caption-5").html("Entertainment room with slide, with <a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control 4</a> and <a href='https://galloacoustics.com/' class='in-text-link' target='_blank'>Gallo Acoustics</a> speakers");
    $(".caption-6").html("Luxury cinema with concealed <a href='https://uk.jvc.com/' class='in-text-link' target='_blank'>JVC</a> projector");
    $(".caption-7").html("Luxury cinema featuring stretch fabric walls and ceiling");
    $(".caption-8").html("Home bar featuring <a href='https://galloacoustics.com/' class='in-text-link' target='_blank'>Gallo Acoustics</a> speakers and <a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control 4</a> automation");
    $(".project-name").text("Home Cinema: From Concept to Completion");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-2").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-7").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-3, #button-3-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-3-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-3-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-3-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-3-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-3-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-3-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-3-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-3-8.webp");
    $(".img-1").attr("alt", "Home cinema with Kaleidescape movie server");
    $(".img-2").attr("alt", "Two person luxury home cinema");
    $(".img-3").attr("alt", "Two person cinema with Rako lighting control and Artcoustic speakers");
    $(".img-4").attr("alt", "Luxury cinema seating controlled by Savant automation");
    $(".img-5").attr("alt", "Luxury two person home cinema");
    $(".img-6").attr("alt", "Colour matched bespoke cinema seats");
    $(".img-7").attr("alt", "Designer bathroom featuring Rako lighting control and Sonance in-ceiling speakers");
    $(".img-8").attr("alt", "Designer kitchen with Rako lighting control and Savant automation");
    $(".caption-1").html("Home cinema with <a href='https://www.kaleidescape.com/' class='in-text-link' target='_blank'>Kaleidescape</a> movie server");
    $(".caption-2").html("Two person luxury home cinema");
    $(".caption-3").html("Two person cinema with <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control and <a href='https://www.artcoustic.com/' class='in-text-link' target='_blank'>Artcoustic</a> speakers");
    $(".caption-4").html("Luxury cinema seating controlled by <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> automation");
    $(".caption-5").html("Luxury two person home cinema");
    $(".caption-6").html("Colour matched bespoke cinema seats");
    $(".caption-7").html("Designer bathroom featuring <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control and <a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> in-ceiling speakers");
    $(".caption-8").html("Designer kitchen with <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control and <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> automation");
    $(".project-name").text("The Small Cinema");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-3").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-7").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-4, #button-4-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-4-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-4-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-4-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-4-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-4-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-4-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-4-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-4-8.webp");
    $(".img-1").attr("alt", "Bespoke door with keypad entry");
    $(".img-2").attr("alt", "Savant automation touchscreen");
    $(".img-3").attr("alt", "Open plan kitchen with Savant automation and Rako lighting control");
    $(".img-4").attr("alt", "Luxury kitchen with Rako lighting control");
    $(".img-5").attr("alt", "Lounge featuring Kaleidescape movie server");
    $(".img-6").attr("alt", "Rako lighting control bespoke keypad");
    $(".img-7").attr("alt", "Luxury bathroom featuring bathroom TV");
    $(".img-8").attr("alt", "Luxury bathroom with Sonance in-ceiling speakers");
    $(".caption-1").html("Bespoke door with keypad entry");
    $(".caption-2").html("<a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> automation touchscreen");
    $(".caption-3").html("Open plan kitchen with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> automation and <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control");
    $(".caption-4").html("Luxury kitchen with <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control");
    $(".caption-5").html("Lounge featuring <a href='https://www.kaleidescape.com/' class='in-text-link' target='_blank'>Kaleidescape</a> movie server");
    $(".caption-6").html("<a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control bespoke keypad");
    $(".caption-7").html("Luxury bathroom featuring bathroom TV");
    $(".caption-8").html("Luxury bathroom with <a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> in-ceiling speakers");
    $(".project-name").text("Home Automation: Control Your Home The Intelligent Way");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-4").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-7").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-5, #button-5-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-5-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-5-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-5-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-5-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-5-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-5-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-5-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-5-8.webp");
    $(".img-1").attr("alt", "Sonance garden speaker system");
    $(".img-2").attr("alt", "Outdoor entertainment area with Sonance audio");
    $(".img-3").attr("alt", "Control4 automation");
    $(".img-4").attr("alt", "Luxury bathroom with Sonance in-ceiling speakers");
    $(".img-5").attr("alt", "Whole house system rack");
    $(".img-6").attr("alt", "Texecom alarm system and Dahua CCTV");
    $(".img-7").attr("alt", "Balcony featuring Sonance in-ceiling speakers");
    $(".img-8").attr("alt", "Whole house Control4 system with Lutron lighting");
    $(".caption-1").html("<a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> garden speaker system");
    $(".caption-2").html("Outdoor entertainment area with <a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> audio");
    $(".caption-3").html("<a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control4</a> automation");
    $(".caption-4").html("Luxury bathroom with <a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> in-ceiling speakers");
    $(".caption-5").html("Whole house system rack");
    $(".caption-6").html("<a href='https://www.texe.com/uk/' class='in-text-link' target='_blank'>Texecom</a> alarm system and <a href='https://www.dahuasecurity.com/uk/' class='in-text-link' target='_blank'>Dahua</a> CCTV");
    $(".caption-7").html("Balcony featuring <a href='https://www.sonance.com/' class='in-text-link' target='_blank'>Sonance</a> in-ceiling speakers");
    $(".caption-8").html("Whole house <a href='https://www.control4.com/' class='in-text-link' target='_blank'>Control4</a> system with <a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting");
    $(".project-name").text("Full Estate Automation");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-5").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-7").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-6, #button-6-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-6-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-6-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-6-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-6-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-6-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-6-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-6-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-6-8.webp");
    $(".img-1").attr("alt", "Savant automation system with Rako lighting control");
    $(".img-2").attr("alt", "Dolby Atmos media room with Artcoustic speakers");
    $(".img-3").attr("alt", "Kaleidescape movie server with Savant remote control");
    $(".img-4").attr("alt", "Bathroom with Savant audio");
    $(".img-5").attr("alt", "Savant remote control");
    $(".img-6").attr("alt", "Finger print door entry");
    $(".img-7").attr("alt", "Garden lake with Savant control waterfalls");
    $(".img-8").attr("alt", "Snug with 5.1 in-ceiling surround sound");
    $(".caption-1").html("<a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> automation system with <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control");
    $(".caption-2").html("<a href='https://www.dolby.com/technologies/dolby-atmos/' class='in-text-link' target='_blank'>Dolby Atmos</a> media room with <a href='https://www.artcoustic.com/' class='in-text-link' target='_blank'>Artcoustic</a> speakers");
    $(".caption-3").html("<a href='https://www.kaleidescape.com/' class='in-text-link' target='_blank'>Kaleidescape</a> movie server with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> remote control");
    $(".caption-4").html("Bathroom with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> audio");
    $(".caption-5").html("<a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> remote control");
    $(".caption-6").html("Finger print door entry");
    $(".caption-7").html("Garden lake with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> control waterfalls");
    $(".caption-8").html("Snug with 5.1 in-ceiling surround sound");
    $(".project-name").text("Full House Audio Visual (AV)");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-6").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-7").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-7, #button-7-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-7-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-7-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-7-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-7-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-7-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-7-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-7-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-7-8.webp");
    $(".img-1").attr("alt", "Media room with Kaleidescape movie server");
    $(".img-2").attr("alt", "Savant in-wall touchscreen");
    $(".img-3").attr("alt", "Formal living room with Lutron lighting");
    $(".img-4").attr("alt", "Entertainment room with Savant remote control");
    $(".img-5").attr("alt", "Home nightclub with Lutron lighting");
    $(".img-6").attr("alt", "Entertainment space with Kaleidescape movie server");
    $(".img-7").attr("alt", "Luxury bathroom with Savant audio");
    $(".img-8").attr("alt", "Formal living room with Lutron lighting and Savant control");
    $(".caption-1").html("Media room with <a href='https://www.kaleidescape.com/' class='in-text-link' target='_blank'>Kaleidescape</a> movie server");
    $(".caption-2").html("<a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> in-wall touchscreen");
    $(".caption-3").html("Formal living room with <a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting");
    $(".caption-4").html("Entertainment room with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> remote control");
    $(".caption-5").html("Home nightclub with <a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting");
    $(".caption-6").html("Entertainment space with <a href='https://www.kaleidescape.com/' class='in-text-link' target='_blank'>Kaleidescape</a> movie server");
    $(".caption-7").html("Luxury bathroom with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> audio");
    $(".caption-8").html("Formal living room with <a href='https://www.lutron.com/europe/pages/default.aspx' class='in-text-link' target='_blank'>Lutron</a> lighting and <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> control");
    $(".project-name").text("Luxury Technology Upgrade");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-7").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-8").css("display", "none");
  });
  $("#button-8, #button-8-mobile").click(function() {
    $(".img-1").attr("src", "images/2400x1600/projects/project-8-1.webp");
    $(".img-2").attr("src", "images/2400x1600/projects/project-8-2.webp");
    $(".img-3").attr("src", "images/2400x1600/projects/project-8-3.webp");
    $(".img-4").attr("src", "images/2400x1600/projects/project-8-4.webp");
    $(".img-5").attr("src", "images/2400x1600/projects/project-8-5.webp");
    $(".img-6").attr("src", "images/2400x1600/projects/project-8-6.webp");
    $(".img-7").attr("src", "images/2400x1600/projects/project-8-7.webp");
    $(".img-8").attr("src", "images/2400x1600/projects/project-8-8.webp");
    $(".img-1").attr("alt", "Living room with Dolby Atmos surround sound");
    $(".img-2").attr("alt", "Lake District luxury home with Doorbird intercom");
    $(".img-3").attr("alt", "Contemporary hallway with Rako lighting");
    $(".img-4").attr("alt", "Snug with 5.1 surround sound system");
    $(".img-5").attr("alt", "Luxury kitchen with Savant audio system");
    $(".img-6").attr("alt", "Artcoustic floor standing speaker");
    $(".img-7").attr("alt", "Contemporary stairs with Rako lighting control");
    $(".img-8").attr("alt", "Media room with a view");
    $(".caption-1").html("Living room with <a href='https://www.dolby.com/technologies/dolby-atmos/' class='in-text-link' target='_blank'>Dolby Atmos</a> surround sound");
    $(".caption-2").html("Lake District luxury home with <a href='https://www.doorbird.com/' class='in-text-link' target='_blank'>Doorbird</a> intercom");
    $(".caption-3").html("Contemporary hallway with <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting");
    $(".caption-4").html("Snug with 5.1 surround sound system");
    $(".caption-5").html("Luxury kitchen with <a href='https://www.savant.com/' class='in-text-link' target='_blank'>Savant</a> audio system");
    $(".caption-6").html("<a href='https://www.artcoustic.com/' class='in-text-link' target='_blank'>Artcoustic</a> floor standing speaker");
    $(".caption-7").html("Contemporary stairs with <a href='https://rakocontrols.com/' class='in-text-link' target='_blank'>Rako</a> lighting control");
    $(".caption-8").html("Media room with a view");
    $(".project-name").text("Eco Smart Home");
    $(".lu_project-standard").css("display", "none");
    $(".lu_project-individual").css("display", "block");
    $(".lu_project-8").css("display", "block");
    $(".lu_project-1").css("display", "none");
    $(".lu_project-2").css("display", "none");
    $(".lu_project-3").css("display", "none");
    $(".lu_project-4").css("display", "none");
    $(".lu_project-5").css("display", "none");
    $(".lu_project-6").css("display", "none");
    $(".lu_project-7").css("display", "none");
  });
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("lu_images");
  var dots = document.getElementsByClassName("lu_img-selector");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
