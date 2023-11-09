function myDropdown(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function popUpWindow(){
    // Get the elements by their ID
    var popupLink = document.getElementById("popup-link");
    var popupWindow = document.getElementById("popup-window");
    var closeButton = document.getElementById("close-button");
      // Show the pop-up window when the link is clicked
    popupLink.addEventListener("click", function(event) {
    event.preventDefault();
    popupWindow.style.display = "block";
      });
      // Hide the pop-up window when the close button is clicked
    closeButton.addEventListener("click", function() {
        popupWindow.style.display = "none";
    });

}

function openNav() {
  document.getElementById("sidenav").style.left = "0";
}

function closeNav() {
  document.getElementById("sidenav").style.left = "-250px";
}

document.getElementById("sidenav").addEventListener("mouseenter", openNav);
document.getElementById("sidenav").addEventListener("mouseleave", closeNav);
