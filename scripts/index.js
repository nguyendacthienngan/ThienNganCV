let slideIndex_1 = 1;
let slideIndex_2 = 1;
let slideIndex_3 = 1;
let slideIndex_4 = 1;
showSlides("project1", slideIndex_1);
showSlides("project2", slideIndex_2);
showSlides("project3", slideIndex_3);
showSlides("project4", slideIndex_4);
// Next/previous controls
function plusSlides(obj, n) {
  var projectID = $(obj).closest('.project').attr('id');

  let slideIndex = getSlide(projectID);
  slideIndex += n;

  setSlide(slideIndex, projectID);
  showSlides(projectID, slideIndex);
}

// Thumbnail image controls
function currentSlide(obj, n) {
  let slideIndex;
  slideIndex = n;
  var projectID = $(obj).closest('.project').attr('id');
  
  setSlide(slideIndex, projectID);
  showSlides(projectID, slideIndex);
}

function getSlide(projectID){
  if (projectID === "project1")
    return slideIndex_1;
  else if (projectID === "project2")
    return slideIndex_2;
  else if (projectID === "project3")
    return slideIndex_3;
    else if (projectID === "project4")
    return slideIndex_4;
}

function setSlide(slideIndex, projectID){
  if (projectID === "project1")
   slideIndex_1 = slideIndex;
  else if (projectID === "project2")
    slideIndex_2 = slideIndex;
  else if (projectID === "project3")
    slideIndex_3 = slideIndex;
    else if (projectID === "project4")
    slideIndex_4 = slideIndex;
}


function showSlides(projectID, n) {
  var i;
  let slideIndex = getSlide(projectID);
  var slides = $("#" + projectID ).find('.mySlides');
  var dots = $("#" + projectID).find('.dot');

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

  setSlide(slideIndex, projectID);
  
}