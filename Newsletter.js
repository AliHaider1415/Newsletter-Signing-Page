const form = document.getElementById('newsletterForm');
const emailInput = document.getElementById('mail');
let mail_btn = document.getElementById("mail-btn");
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    document.getElementById("mail").style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    document.getElementById("mail").style.borderColor = "rgba(255, 0, 0, 0.2)";
    document.getElementById("error_msg").innerHTML = "Error! Empty Field"
  } else if (!emailPattern.test(email)) {
    document.getElementById("mail").style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    document.getElementById("mail").style.borderColor = "rgba(255, 0, 0, 0.2)";
    document.getElementById("error_msg").innerHTML = "Valid email required"
  } else {
    document.getElementById("mail").style.backgroundColor = "white";
    document.getElementById("mail").style.borderColor = "black";
    document.getElementById("error_msg").innerHTML = ""
    
    form.reset(); // Reset the form
    window.location.href = "success.html"
    document.getElementById("msg").innerHTML = "hey"
    
  }

  form.reportValidity(); // Display the custom error message
});
