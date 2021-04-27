
var imgList = document.images;
console.log(imgList);

$(".img-test").on("click", function() {
  $(".modal").addClass("modal-show");
  $(".modal-content").attr("src", $(this).attr("src"));
  $(".modal-content").attr("src", $(this).attr("src"));
  $("#caption").text($(this).attr("alt"));
});
$(".close").on("click", function() {
  $(".modal").removeClass("modal-show");
});

$(".next").on("click", function(){

})
