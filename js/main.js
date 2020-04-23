const navSlide = () => {
	const burger = document.querySelector(".burger");
	const nav = document.querySelector(".cf");
	const navLinks = document.querySelectorAll('.cf li'); 
	
	//toggle name
	burger.addEventListener('click', () =>{
		nav.classList.toggle('nav-active');
		
	// Animate LInks
		navLinks.forEach((link,index)=>{
			if(link.style.animation){
				link.style.animation = ''; 
			} else{
			link.style.animation = 
			'navLinkFade 0.5s ease forwards ' + (index/7 + 0.5)
			+ 's'; 
			}
		});
		// Burger Animation: 
		burger.classList.toggle('toggle');
	});	
}


/*SLIDESHOW FUNCTIONS: */
// Thumbnail image controls
function currentPage(n) {
  slideShow1(slideNo = n);
}


// Next/previous controls
function clickSlides(n) {
  slideShow1(slideNo += n);
}

function slideShow1(n) {
  var i;
  var slides = document.getElementsByClassName("myshow");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideNo = 1} 
  if (n < 1) {slideNo = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNo-1].style.display = "block"; 
  dots[slideNo-1].className += " active";
}

var slideNo = 1;
//Call the function
navSlide(); 
slideShow1(slideNo);