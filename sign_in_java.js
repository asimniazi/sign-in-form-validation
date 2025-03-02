function validateSignIn() {
    let username = document.getElementById("signin-username").value;
    let password = document.getElementById("signin-password").value;
    let valid = true;

    document.getElementById("signin-username-error").innerText = "";
    document.getElementById("signin-password-error").innerText = "";

    if (username.trim() === "") {
        document.getElementById("signin-username-error").innerText = "Username is required";
        valid = false;
    }
    if (password.trim() === "") {
        document.getElementById("signin-password-error").innerText = "Password is required";
        valid = false;
    } else if (password.length < 8) {
        document.getElementById("signin-password-error").innerText = "Password must be at least 8 characters long";
        valid = false;
    }
    
    if (valid) {
        console.log(`Sign In Data: Username = ${username} AND Password = ${password}`);
        alert("Sign In Successful!");
    }
}