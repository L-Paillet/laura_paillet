// fonction responsive navbar
function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '10px';
    }
  }
  

// window.onscroll = function () { 
//     "use strict";
//     if (document.body.scrollTop >= 0) {
//         myNav.classList.add("menuScroll");
//         myNav.classList.remove("menuBack");
//     } 
//     else {
//         myNav.classList.add("menuBack");
//         myNav.classList.remove("menuScroll");
//     }
// };