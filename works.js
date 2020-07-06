$(function(){

    $("#main").fadeIn(1600);
    
    
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

  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }