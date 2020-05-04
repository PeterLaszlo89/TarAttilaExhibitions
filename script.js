$(function(){

  $("#main").fadeIn(1600);

  $(".exhibitions1").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
  $(".exhibitions2").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
  $(".exhibitions3").click(function() {
    window.location = $(this).find("a").attr("href"); 
    return false;
  });
  
  /*  window.sr = ScrollReveal();
  sr.reveal('#exhibitions .exhibitions1 div', {
    delay:1500,
    duration: 1500,
    origin:'left',
    distance:'300px',
    viewFactor:0.2
  }); */

  /* $("#skillzbutton").on("click", function(){

      var skillzbutton = document.getElementById("skillz");

      skillzbutton.scrollIntoView({
          block: "start"});
  }); */

})