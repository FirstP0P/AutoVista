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

// function showdiv1(index) {
//   const dropdiv = document.querySelectorAll(".dropdiv1");
//   if (dropdiv[index].style.height == "26vh") {
//     dropdiv[index].style.height = "0px";
//   } else {
//     dropdiv[0].style.height = "0";
//     dropdiv[1].style.height = "0";
//     dropdiv[2].style.height = "0";
//     dropdiv[index].style.height = "26vh";
//   }
// }

function showdiv1(index) {
  const dropdiv = document.querySelectorAll(".dropdiv1");
  const image1 = document.querySelector(".img1");
  const image2 = document.querySelector(".img2");
  if (dropdiv[index].style.height == "26vh") {
    dropdiv[index].style.height = "0px";
  } else {
    dropdiv[0].style.height = "0";
    dropdiv[1].style.height = "0";
    dropdiv[2].style.height = "0";
    dropdiv[index].style.height = "26vh";
    if (index == 0) {
      image1.src = "media/lamborghiniHuracan/Aerodynamics.jpg";
      image2.src = "media/lamborghiniHuracan/Engine.jpg";
    }
    if (index == 1) {
      image1.src = "media/lamborghiniHuracan/Huracan EVO QuattroRuote.jpg";
      image2.src = "media/lamborghiniHuracan/Huracan EVO Spyder Traction.jpg";
    }
    if (index == 2) {
      image1.src = "media/lamborghiniHuracan/Huracan EVO LDVI.jpg";
      image2.src = "media/lamborghiniHuracan/Huracan EVO Steering.jpg";
    }
  }
}


// ----------------------------

(function () {
  "use strict";

  var items = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
