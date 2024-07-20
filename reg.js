function confirmation() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var dob = document.getElementById('dob').value;

    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return;
    }

    var confirmationMessage = "Please confirm:\n" +
        "Email: " + email + "\n" +
        "Password: " + password + "\n" +
        "Confirm Password: " + confirmPassword + "\n" +
        "Gender: " + (gender ? gender.value : "Not specified") + "\n" +
        "Date of Birth: " + dob;

    if (confirmationMessage) {
        document.getElementById('registrationForm').submit();
        alert("Registration successful!");
    }
}
