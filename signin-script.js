const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const toSignUp = document.querySelector(".noAcc");
function changePage(page) {
  window.location.href = page;
}
function SignIn() {
  if (email.value == "" || password.value == "") {
    alert("Enter all fields !");
  } else {
    if (email.value == "hour1234@gmail.com") {
      if (password.value == "12345678") {
        changePage("home.html");
      } else {
        alert("Enter your correct password!");
      }
    } else {
      alert("Enter your Email!");
    }
  }
}

toSignUp.addEventListener("click", function () {
  changePage("signUp.html");
});
