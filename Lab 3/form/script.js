function validateForm() {
    let isValid = true;

    // Clear previous errors
    clearErrors();

    // Get field values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate Username
    if (username === '') {
        showError('usernameError', 'Username cannot be empty.');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,3}$/;
    if (email === '') {
        showError('emailError', 'Email cannot be empty.');
        isValid = false;
    } else if (!emailPattern.test(email)) {
        showError('emailError', 'Enter a valid email address.');
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/;
    if (phone === '') {
        showError('phoneError', 'Phone number cannot be empty.');
        isValid = false;
    } else if (!phonePattern.test(phone)) {
        showError('phoneError', 'Phone number must be 10 digits long.');
        isValid = false;
    }

    // Validate Password
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (password === '') {
        showError('passwordError', 'Password cannot be empty.');
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        showError('passwordError', 'Password must be at least 7 characters long and include at least one uppercase letter, one digit, and one special character (&, $, #, @).');
        isValid = false;
    }

    // Validate Confirm Password
    if (confirmPassword === '') {
        showError('confirmPasswordError', 'Please confirm your password.');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    return isValid;
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}
