  // Add a click event listener to tab links
  document.addEventListener("DOMContentLoaded", function () {
    const tabLinks = document.querySelectorAll(".navbar .nav-class li a");
    tabLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        tabLinks.forEach((tab) => tab.classList.remove("active"));
        this.classList.add("active");
        window.location.href = this.getAttribute("href");
      });
    });
  });
  
//contact email send section

const form=document.querySelector('form');
const fullName=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const subject=document.getElementById("subject");
const message=document.getElementById("message");



function sendEmail(){
   const bodyMessage=`Full Name:${fullName.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br> Message:${message.value}`;

  Email.send({
    SecureToken :"60f6d47a-5b8a-4ff4-9bfa-0dbe7c11cb6d" ,
    To : 'karienyerobert001@gmail.com',
    From : "karienyerobert001@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message=="OK"){
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }
);
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value === "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value !="") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value !== "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value !="") {
      errorTxtEmail.innerHTML = "Enter a valid Email Address!!";
    } else {
      errorTxtEmail.innerHTML = "Email Address can't be blank!!";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !email.classList.contains("error") &&
    !phone.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
     sendEmail();

     form.reset();
     return false;
  }
});