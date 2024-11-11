function validateForm() {
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    
    if (password.length < 8) {
        alert("Password should be at least 8 characters long.");
        return false;
    }

    
    alert("Login Successful!");
    return true;  
}
