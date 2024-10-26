// script.js

// Get elements
const signupModal = document.getElementById("signupModal");
const signinModal = document.getElementById("signinModal");
const openSignupModalBtn = document.querySelectorAll("#openSignupModalBtn");
const openSigninModalBtn = document.querySelectorAll("#openSigninModalBtn");
const closeButtons = document.querySelectorAll(".close");

// Open Sign-Up modal
openSignupModalBtn.forEach(button=>{
  button.onclick = function() {
  signinModal.style.display = "none";
  signupModal.style.display = "flex";
}
});

// Open Sign-In modal and close Sign-Up modal
openSigninModalBtn.forEach(button=>{
  button.onclick = function() {
  signupModal.style.display = "none";
  signinModal.style.display = "flex";
}
});

// Close modals when the 'X' button is clicked
closeButtons.forEach(button => { //bcuz it's an array contain all the 'close' class
  button.onclick = function() {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
  }
});

// Close modals when clicking outside of them
window.onclick = function(event) {
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
  if (event.target === signinModal) {
    signinModal.style.display = "none";
  }
}
