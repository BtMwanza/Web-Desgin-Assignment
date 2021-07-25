/*
Form Validation
Each input field is validated, so as to get the correct input
*/

/* Registration form validation */
function validateRegisterForm() {

  var firstName = document.getElementById('registerFormFirstName').value;
  if (firstName == "") {
    alert("First name cannot be empty");
    return false;
  } else {
    var re = /^([A-Z]|[a-z])/;
    if (!re.test(firstName)) {
      alert("Invalid first name");
      return false;
    }
  }

  var lastName = document.getElementById('registerFormLastName').value;
  if (lastName == "") {
    alert("Last name cannot be empty");
    return false;
  } else {
    var re = /^([A-Z]|[a-z])/;
    if (!re.test(lastName)) {
      alert("Invalid last name");
      return false;
    }
  }

  var email = document.getElementById('registerFormEmail').value;
  if (email == "") {
    alert("Email cannot be empty");
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert("Email format invalid");
      return false;
    }
  }

  var nrc = document.getElementById('registerFormNRC').value;
  if (nrc == "") {
    alert("NRC cannot be empty");
    return false;
  } else {
    var re = /^([0-9]{6}[/][0-9]{2}[/][1])/;
    if (!re.test(nrc)) {
      alert("NRC format invalid.\nFormat is XXXXXX/XX/X, where X is a digit from 0-9 ");
      return false;
    }
  }

  var dobDay = document.getElementById('dobDay');
  if (dobDay.value == "") {
    alert("Please select your day of birth");
    return false;
  }

  var dobMonth = document.getElementById('dobMonth');
  if (dobMonth.value == "") {
    alert("Please select your month of birth");
    return false;
  }

  var dobYear = document.getElementById('dobYear');
  if (dobYear.value == "") {
    alert("Please select your year of birth");
    return false;
  }

  var residential = document.getElementById('registerFormResidential').value;
  if (residential == "") {
    alert("Residential address cannot be empty");
    return false;
  }

  var postal = document.getElementById('registerFormPostal').value;
  if (postal == "") {
    alert("Postal address cannot be empty");
    return false;
  }

  var town = document.getElementById('town');
  if (town.value == "") {
    alert("Please select your town");
    return false;
  }

  var password = document.getElementById('registerFormPassword').value;
  if (password == "") {
    alert("Password cannot be empty");
    return false;
  } else if (password.length < 8) {
    alert("Password must have a minimum of 8 characters")

  } else {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*+=;:'"<>,.?/|![-_()]).{8,25}/;
    if (!re.test(password)) {
      alert("Password must include lowercase, uppercase, numbers and symbols");
      return false;
    }
  }

  var phone = document.getElementById('registerPhonePassword').value;
  if (phone == "") {
    alert("Postal address cannot be empty");
    return false;
  } else {
    var re = /([+][2][6][0][9][5-7][0-9]+[0-9]{6})/;
    if (!re.test(phone)) {
      alert("Invalid phone number");
      return false;
    }
  }

  var payment = document.getElementById('payMethod');
  if (payment.value == "") {
    alert("Please choose your payment method");
    return false;
  }
  document.getElementById('registrationForm').submit();

}

/*function buying(){
  var condition = document.getElementById('condition');
  if (condition.value == "") {
    alert("Please choose the porduct condition");
    return false;
  }

  var payment = document.getElementById('pay-method');
  if (payment.value == "") {
    alert("Please choose your payment method");
    return false;
  }
  
document.getElementById('productForm').submit();
}*/

/* Contact form validation */
function validateForm() {
  var name = document.getElementById('name').value;
  if (name == "") {
    document.querySelector('.status').innerHTML = "Name cannot be empty";
    return false;
  }

  var email = document.getElementById('email').value;
  if (email == "") {
    document.querySelector('.status').innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('.status').innerHTML = "Email format invalid";
      return false;
    }
  }

  var subject = document.getElementById('subject').value;
  if (subject == "") {
    document.querySelector('.status').innerHTML = "Subject cannot be empty";
    return false;
  }

  var message = document.getElementById('message').value;
  if (message == "") {
    document.querySelector('.status').innerHTML = "Message cannot be empty";
    return false;
  }

  document.querySelector('.status').innerHTML = "Sending...";
}



/* Login modal form validation */
function login() {
  var email = document.getElementById('defaultForm-email').value;
  if (email == "") {
    alert("Email cannot be empty");
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert("Email format invalid");
      return false;
    }
  }

  var password = document.getElementById('defaultForm-pass').value;
  if (password == "") {
    alert("Password cannot be empty");
    return false;
  } else if (password.length < 8) {
    alert("Password must have a minimum of 8 characters")

  } else {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*+=;:'"<>,.?/|![-_()]).{8,25}/;
    if (!re.test(password)) {
      alert("Password must include lowercase, uppercase, numbers and symbols");
      return false;
    }
  }
  document.getElementById('modal-LoginForm').submit();
}

/* SignUp modal form validation */
function signUp() {
  var name = document.getElementById('orangeForm-name').value;
  if (name == "") {
    alert("Name cannot be empty");
    return false;
  } else {
    var re = /^([A-Z]|[a-z])/;
    if (!re.test(name)) {
      alert("Invalid name");
      return false;
    }
  }

  var email = document.getElementById('orangeForm-email').value;
  if (email == "") {
    document.querySelector('.status').innerHTML = "Email cannot be empty";
    return false;
  } else {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      document.querySelector('.status').innerHTML = "Email format invalid";
      return false;
    }
  }

  var password = document.getElementById('orangeForm-pass').value;
  if (password == "") {
    alert("Password cannot be empty");
    return false;
  } else if (password.length < 8) {
    alert("Password must have a minimum of 8 characters")

  } else {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*+=;:'"<>,.?/|![-_()]).{8,25}/;
    if (!re.test(password)) {
      alert("Password must include lowercase, uppercase, numbers and symbols");
      return false;
    }
  }

  document.getElementById('modal-RegisterForm').submit();
}