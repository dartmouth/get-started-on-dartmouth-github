$(document).ready(function(){
  if(window.location.hash) {
    $(window.location.hash + "-steps").show();
  }
  $("#level-up li").click(function(){
    $("#" + $(this).attr('id') + "-steps").slideToggle();
  });

  $(".copy-button").click(function(){
    navigator.clipboard.writeText($(this).parent().text());
  });
});
