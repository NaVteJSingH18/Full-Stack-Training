let form = document.getElementById("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("rbient");
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  console.log(username, email, password, confirmPassword);
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }
  console.log("RBIENT");
  let obj = {
    username,
    email,
    password,
    confirmPassword,
  };
  console.log(obj);
  let userdata = document.getElementById("userdata");
    userdata.style.width="30%"
    userdata.style.margin="auto"
    userdata.style.padding="10px"
    userdata.style.border="2px solid gray"
    userdata.style.borderRadius="8px"
    userdata.style.marginTop="30px"

  let h2 = document.createElement("h2");
  h2.innerText = obj.username;
  let p1 = document.createElement("p");
  p1.innerText = obj.email;
  let p2 = document.createElement("p");
  p2.innerText = obj.password;
  userdata.append(h2, p1, p2);
});
