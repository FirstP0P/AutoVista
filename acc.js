function showSideBar() {
  const sidebar = document.querySelector(".sidebar-grid");
  if (sidebar.style.width == "48vw") {
    sidebar.style.width = "0px";
  } else {
    sidebar.style.width = "41vw";
  }
}

let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {

  const currentScrollPos = window.scrollY;
  var nav = document.getElementsByClassName('navbar')[0];

  if (prevScrollPos > currentScrollPos) {
    nav.style.transform = 'translateY(0px)';
  }
  else {
    nav.style.transform = 'translateY(-80px)';
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
//calculate gstss
function toggle() {
    var card = document.querySelector(".card");
    var button = document.getElementById("detailsbutton");
      
    card.classList.toggle("expanded");

    if (card.classList.contains("expanded")) {
        button.textContent = "Less Details";
        // Code to display SGST and CGST
        var sgstValue = "15%"; // Sample SGST value
        var cgstValue = "15%"; // Sample CGST value

        var sgstElement = document.createElement("div");
        sgstElement.classList.add("sgst");
        sgstElement.textContent = "SGST: " + sgstValue;

        var cgstElement = document.createElement("div");
        cgstElement.classList.add("cgst");
        cgstElement.textContent = "CGST: " + cgstValue;

        // Append SGST and CGST elements to the card
        card.appendChild(sgstElement);
        card.appendChild(cgstElement);

    } else {
        button.textContent = "More Details";
        // Code to remove SGST and CGST elements if already added
        var sgstElement = document.querySelector(".sgst");
        var cgstElement = document.querySelector(".cgst");

        if (sgstElement && cgstElement) {
            sgstElement.remove();
            cgstElement.remove();
        }
    }
}


// function toggle() {
//     var div = document.getElementById("myid");
//     var card = document.querySelector(".card");
//     card.classList.toggle("expanded");
//     var button = document.getElementById("detailsbutton");
//     if (card.classList.contains("expanded")) 
//     {
//         button.textContent = "Less Details";
//     } else 
//     {
//         button.textContent = "More Details";
//     }
// }



function tax(){
  let x = document.getElementById("amt").innerHTML;
  let a = (10/100)*x;
  let b = (4.5/100)*x;
  let c = (11/100)*x;
  console.log(`RTO: ${a}\nInsurance: ${b}\nOn-Road Price: ${c}`);

}

// // Function to toggle details display
// function toggle() {
//     var detailsDiv = document.querySelector('.expcard');

//     if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
//         detailsDiv.style.display = 'block';
//         appendGSTDetails();
//     } else {
//         detailsDiv.style.display = 'none';
//     }
// }



