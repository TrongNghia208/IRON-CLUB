// alert("hihi");

// const form = document.getElementsByClassName(".form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   // Validate();
//   Validate();
// });

// function Validate() {
//   // let firstName = yourName.value;
//   // let lastName = lastName.value;
//   // let mail = yourMail.value;
//   // let mess = yourMess.value;

//   // const yourName = document.querySelector("#name");
//   // const lastName = document.querySelector("#lastName");
//   // const yourMail = document.querySelector("#mail");

//   // if (yourName == "") {

//   // }
//   // const yourMess = document.querySelector("#mess");
//   // const sub = document.querySelector("#submit");

//   // const users = {
//   //   yourName: yourName,
//   //   lastName: lastName,
//   //   yourMail: yourMail
//   // };

//   // const existUsers = JSON.parse(localStorage.getItem("users")) || [];
//   // const userExists = existUsers.some((u) => u.yourMail === yourMail);

//   // if (userExists) {
//   //   alert("Email ton tai");
//   // }
//   // existUsers.push(users);
//   // localStorage.setItem("users", JSON.stringify(existUsers));
//   // alert("Dang ki thanh cong");
// }

document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("submit");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //Lay du lieu trong form
    const firstname = document.getElementById("name").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("mail").value;

    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email
    };

    const existUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existUsers.some((u) => u.email === email);
    // function fn_Name() { }
    // () => {}
    if (userExists) {
      alert("Gmail tồn tại");
    }
    existUsers.push(user);
    localStorage.setItem("users", JSON.stringify(existUsers));
    alert("Đăng kí thành công");
    window.location.href = "../index.html";
  });
});
