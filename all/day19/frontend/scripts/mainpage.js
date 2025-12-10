function verifyAge() {
  const remember = document.getElementById("rememberMe").checked;
  if (remember) {
    localStorage.setItem("ageVerified", "true");
  }
  window.location.href = "index.html";
}

function denyAccess() {
  alert("You must be 18 or older to enter this site.");

  window.location.href = "https://www.google.com";
  
}

