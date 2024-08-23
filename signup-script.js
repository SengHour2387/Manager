const email = document.querySelector(".input-email");
const password = document.querySelector(".input-password");
const toSignIn = document.querySelector(".haveAcc");
function changePage(page) {
  window.location.href = page;
}
function SignUp() {
  if (email.value == "" || password.value == "") {
    alert("Enter all fields !");
  } else {
    window.location.href = "home.html";
  }
}

toSignIn.addEventListener("click", function () {
  changePage("signIn.html");
});
