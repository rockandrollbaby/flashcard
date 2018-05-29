$(function() {

  $("#h3-javascript").click(function(){
    $("#p-javascript").fadeIn();
    $("#h3-javascript").hide();
  });

  $("#p-javascript").click(function(){
    $("#p-javascript").fadeOut();
    $("#h3-javascript").fadeIn();
  });

  $("#h3-operators").click(function(){
    $("#p-operators").fadeIn();
    $("#h3-operators").hide();
  });

  $("#p-operators").click(function(){
    $("#p-operators").fadeOut();
    $("#h3-operators").fadeIn();
  });

  $("#h3-variables").click(function(){
    $("#p-variables").fadeIn();
    $("#h3-variables").hide();
  });

  $("#p-variables").click(function(){
    $("#p-variables").fadeOut();
    $("#h3-variables").fadeIn();
  });

  $("#h3-vnm").click(function(){
    $("#p-vnm").fadeIn();
    $("#h3-vnm").hide();
  });

  $("#p-vnm").click(function(){
    $("#p-vnm").fadeOut();
    $("#h3-vnm").fadeIn();
  });


});
