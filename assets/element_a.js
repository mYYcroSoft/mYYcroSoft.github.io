const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; 
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });

  // Get the id of the <path> element and the length of <path>
var triangle = document.getElementById("triangle");
var length = triangle.getTotalLength();

// The start position of the drawing
triangle.style.strokeDasharray = length;

// Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
triangle.style.strokeDashoffset = length;

// Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
window.addEventListener("scroll", myFunction);

function myFunction() {
  var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  var draw = length * scrollpercent;

  // Reverse the drawing (when scrolling upwards)
  triangle.style.strokeDashoffset = length - draw;
}


window.onscroll = function() {scrollFunction(), myFunction()};

function scrollFunction() {
element_name = document.getElementById("sec_name")
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.width = "100%";
    $("#sec_name").html("Home")
    element_name.style.width = "10%"
  } else {
    document.getElementById("navbar").style.top = "-50px";
    $("#sec_name").html("Home")
    element_name.style.width = "10%"
  }


    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
    $("#sec_name").html("Marketing")
    element_name.style.width = "13%"
  }

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    $("#sec_name").html("Services")
    element_name.style.width = "20%"
  }
  if (document.body.scrollTop > 800 || 
    document.documentElement.scrollTop > 800) {
    $("#sec_name").html("Showcase")
    element_name.style.width = "25%"
  }
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("navbar").style.width = "20%";
    element_name.style.transform = "rotate(0deg)"
    document.body.style.backgroundColor = "#262533";
    element_name.style.top = "5px"
    element_name.style.left = "35%"

    
  }  else {
    element_name.style.transform = "rotate(-90deg)"
    element_name.style.top = "500px"
    element_name.style.left = "-4%"
    document.body.style.backgroundColor = "#1b1e1f";


  }
  
}


function test(){
  element_name = document.getElementById("sec_name")  
  if (state = true) {
  element_name.style.transform = "rotate(0deg)"
    element_name.style.top = "5px"
    element_name.style.left = "35%"
    state = false
    console.log(state)
  } 
  if (state = false) {
    element_name.style.transform = "rotate(-90deg)"
    element_name.style.top = "500px"
    element_name.style.left = "-4%"
    state = true
    
    console.log(state)
  }
}

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

}
