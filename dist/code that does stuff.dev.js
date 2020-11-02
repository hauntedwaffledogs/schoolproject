"use strict";

function DropdownMenu() {
  document.getElementById("DropMenu").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.DropButton')) {
    var dropdown = document.getElementsByClassName("Dropdown-Content");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];

      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};