function validateForm() {
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    
    if (name.trim() === '') {
        alert("Please enter your full name.");
        return false;
    }

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return false;
    }

    
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    
    alert("Sign Up Successful!");
    return true; 
}
