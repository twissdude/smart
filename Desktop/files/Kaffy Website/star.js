let navbar = document.querySelector(".navbar")
let ham = document.querySelector(".ham")
ham.addEventListener("click", toggleHamburger)
function toggleHamburger() {
    navbar.classList.toggle(".showNav")
    ham.classList.toggle(".showClose")
}

let menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach(
    function (menuLink) {
        menuLink.addEventListener("click", toggleHamburger)
    }
)

let app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.count = 0;

});


alert("Please call us on 08078698593");


