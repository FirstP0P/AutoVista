fetch('components/navbar.html')
.then(response => response.text())
.then(html => {
    document.getElementById('navbar-placeholder').innerHTML = html;
});

fetch('components/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
});



//------------------------------------------------------------------------



const slides = document.querySelectorAll(".slides img");
const slidesdiv = document.querySelectorAll(".slides .interior-details");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
    slidesdiv[slideIndex].classList.add("displaySlideDiv");
    // intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  }
  else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });

  slidesdiv.forEach(slidesdiv => {
    slidesdiv.classList.remove("displaySlideDiv");
  });

  slides[slideIndex].classList.add("displaySlide");
  slidesdiv[slideIndex].classList.add("displaySlideDiv");
}

function prevSlide() {
  // clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// ------------------------------ dots on the image

const number = document.querySelector('.number');
const popupContainer = document.querySelector('.popup-container');
const closeBtn = document.querySelector('.close-btn');
number.onclick = () => {
  popupContainer.classList.add('active');
}
closeBtn.onclick = () => {
  popupContainer.classList.remove('active');
}

const number2 = document.querySelector('.number2');
const popupContainer2 = document.querySelector('.popup-container2');
const closeBtn2 = document.querySelector('.close-btn2');
number2.onclick = () => {
  popupContainer2.classList.add('active');
}
closeBtn2.onclick = () => {
  popupContainer2.classList.remove('active');
}

const number3 = document.querySelector('.number3');
const popupContainer3 = document.querySelector('.popup-container3');
const closeBtn3 = document.querySelector('.close-btn3');
number3.onclick = () => {
  popupContainer3.classList.add('active');
}
closeBtn3.onclick = () => {
  popupContainer3.classList.remove('active');
}




//-------------------------------- numbers

$('.number-inc').each(function() {
  var $this = $(this),
  countTo = $this.attr('data-max');
  $({ countNum: $this.text() }).animate({
  countNum: countTo
  },
    {
      duration: 1500,
      easing: 'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(countTo);
      }
    }
  );
});






