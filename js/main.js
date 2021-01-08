

//--bottom--to--top--- and------stickyyy---on----header---//
var mybutton = document.querySelector(".BT-top");
var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
window.onscroll = function() {
    matrixFunction() //or scroll function--
};
function matrixFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        mybutton.style.display = "block";
        navbar.classList.add("sticky")
    } else {
        mybutton.style.display = "none";
        navbar.classList.remove("sticky");
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
//end--here--//

// ---Log---in---
const signupButton = document.getElementById('signup-button'),
    loginButton = document.getElementById('login-button'),
    userForms = document.getElementById('user_options-forms')

/**
 * Add event listener to the "Sign Up" button
 */
signupButton.addEventListener('click', () => {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}, false)

/**
 * Add event listener to the "Login" button
 */
loginButton.addEventListener('click', () => {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}, false)



// -----stickyyyy------//

// window.onscroll = function() {myFn()};
        
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFn() {
//   if (window.pageYOffset > 200) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }