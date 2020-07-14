// JavaScript source code

//Some Ideas for JS that arent implemeted in the final version of the website


function popUp() {
    // Get the modal
    var modalpopUP = document.getElementById("unserText");
    modalpopUP.style.display = "block";


    var img = document.getElementById("myImg");

    // Get the <span> element that closes the modal
    //var spanPopUp = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    img.onmouseleave = function closePopUp() {
        modalpopUP.style.display = "none";
    }
}
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
