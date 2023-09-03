let apiUser = "http://localhost:3000/user";
const username = document.querySelector(".input-signup-username");
const password = document.querySelector(".input-signup-password");
const bntSignup = document.querySelector(".signup__signInButton");
// signup
bntSignup.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value === "" || password.value === "") {
    alert("vui lòng không để trống");
  } else {
    const user = {
      username: username.value,
      password: password.value,
    };
    fetch(apiUser, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    let json = JSON.stringify(user);
    localStorage.setItem(username.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "login.html";
  }
});
