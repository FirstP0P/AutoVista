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


const frontImage = document.querySelector('.front-image .image-wrapper');

const backImage = document.querySelector('.back-image .image-wrapper');

const frontImageContainer = document.querySelector('.front-image');

const backImageContainer = document.querySelector('.back-image');

const overlappingImages = document.querySelector('.overlapping-images');

const statement = document.querySelector('.statement');

let frontImagePosition = 0;
let backImagePosition = 0;

let currentFrontImagePosition = 0;
let currentBackImagePosition = 0;

let currentFrontImageContainerPosition = 20;
let currentBackImageContainerPosition = -17.5;

let isSeeFrontAndBackImage = false;

const createScaleY = (x1, y1, x2, y2) => {
  const slope = (y2 - y1) / (x2 - x1);
  return (y3) => {
    if (slope === 0) {
      return null;
    }

    return ((y3 - y1) / slope) + x1;
  }
}

const getSlideImagePosition = (element) => {
  const imageWrapperBounding = element.getBoundingClientRect();
  const imageWrapperHeight = imageWrapperBounding.bottom - imageWrapperBounding.top;

  const scaleY = createScaleY(-10, imageWrapperHeight * -1, 10, window.innerHeight);
  const imagePosition = scaleY(imageWrapperBounding.top);
  return imagePosition;
};

const updateImagePosition = (element, position) => {
  if (typeof position === 'number') {
   element.style.transform = `translate(0px, ${position}%) scale(1.2)`;
  }
}

const updateImageWrapperPositionBaseOnScroll = () => {
  frontImagePosition = getSlideImagePosition(frontImage);
  backImagePosition = getSlideImagePosition(backImage);
}

const playFrontAndBackImageContainer = () => {
  currentFrontImageContainerPosition += (0 - currentFrontImageContainerPosition) * 0.05;

  if (currentFrontImageContainerPosition > 0.005) {
      frontImageContainer.style.transform = `translate(0, ${currentFrontImageContainerPosition}%)`; 
  }

  currentBackImageContainerPosition += (0 - currentBackImageContainerPosition) * 0.05;

  if (currentBackImageContainerPosition < -0.005) {
      backImageContainer.style.transform = `translate(0, ${currentBackImageContainerPosition}%)`;
  }

  requestAnimationFrame(playFrontAndBackImageContainer);
};

const playOverlappingImagesWhenSee = () => {
  const overlappingImagesBounding = overlappingImages.getBoundingClientRect();
  console.log('overlappingImagesBounding', overlappingImagesBounding.top)
  if (overlappingImagesBounding.top <= window.innerHeight - 80) {
    playFrontAndBackImageContainer();
    isSeeFrontAndBackImage = true;
  }
};

const playstatementWhenSee = () => {
  if (!statement.classList.contains('visible') && statement.getBoundingClientRect().top <= window.innerHeight - 20) {
      statement.classList.add('visible');
    }
}

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    updateImageWrapperPositionBaseOnScroll();
    if (!isSeeFrontAndBackImage) {
      playOverlappingImagesWhenSee(); 
    }

    playstatementWhenSee();
  });
});

playstatementWhenSee();

const loop = () => {
  currentFrontImagePosition += (frontImagePosition - currentFrontImagePosition) * 0.1;

  currentBackImagePosition += (backImagePosition - currentBackImagePosition) * 0.1;

  updateImagePosition(frontImage, currentFrontImagePosition);
  updateImagePosition(backImage, currentBackImagePosition * -1);
  requestAnimationFrame(loop) 
}

playOverlappingImagesWhenSee();

loop();