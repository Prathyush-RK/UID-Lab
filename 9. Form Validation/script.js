/*
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let emailError = document.getElementById('emailError');
    let phoneError = document.getElementById('phoneError');
  
    // Clear previous error messages
    emailError.textContent = '';
    phoneError.textContent = '';
  
    // Validate email
    if (!validator.isEmail(email)) {
      emailError.textContent = 'Please enter a valid email address.';
    }
  
    // Validate phone number
    if (!validator.isMobilePhone(phone, 'any')) {
      phoneError.textContent = 'Please enter a valid phone number.';
    }
  
    // If no errors, log values
    if (validator.isEmail(email) && validator.isMobilePhone(phone, 'any')) {
      console.log('Email:', email);
      console.log('Phone:', phone);
    }
  });

  */