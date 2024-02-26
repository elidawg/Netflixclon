


menu = document.querySelector(".main-div");
menu.onclick = function() {
  navBar = document.querySelector(".answer-div");
  navBar.classList.toggle("active");
  menu = document.querySelector(".main-div");
  menu.classList.toggle("active")
}

// // Assuming your divs have the class name "menu"
// var menus = document.querySelectorAll(".main-div");

// menus.forEach(function(menu) {
//     menu.onclick = function() {
//         const navBar = document.querySelector(".answer-div");
//         navBar.classList.toggle("active");
//         // menu = document.querySelector(".main-div");
//         menu.classList.toggle("active");
//     };
// });



