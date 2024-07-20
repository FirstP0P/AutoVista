// Dynamically load navbar content using fetch API
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

const buttons = document.getElementsByClassName("top-bar-button");
const underline = document.getElementById('span-underline');
buttons[0].style.color = "white";
function enableButton(n) {

  for (let i=0; i<buttons.length; i++) {
      buttons[i].style.color = "rgba(255, 255, 255, 0.545)";
      if(i==n){
          buttons[i].style.color = "white";
          m=n*15;
          underline.style.transform = "translateX("+m+"vw)";
      }
  }

  const bestSeller = document.getElementById('best-seller');
  const latest = document.getElementById('latest');
  const bestDeal = document.getElementById('best-deal');
  console.log(n);

  if(n==0){
    bestSeller.style.transform = 'translateX(0vw)';
    latest.style.transform = 'translateX(0vw)';
    bestDeal.style.transform = 'translateX(-100vw)';
    latest.style.zIndex = '-1';
  }

  if(n==1){
    bestSeller.style.transform = 'translateX(-100vw)';
    latest.style.transform = 'translateX(-100vw)';
    bestDeal.style.transform = 'translateX(-100vw)';
    latest.style.zIndex = '0';
  }

  if(n==2){
    bestSeller.style.transform = 'translateX(-100vw)';
    latest.style.transform = 'translateX(-200vw)';
    bestDeal.style.transform = 'translateX(-200vw)';
    latest.style.zIndex = '-1';
  }
}

const catagoryCard = document.getElementsByClassName('catagory-card');
catagoryCard[4].style.width = '90%';
function showCatagory(index){
  for(var i=0; i<5; i++){
    catagoryCard[i].style.width = index == i ? '90%':'';
  }
}