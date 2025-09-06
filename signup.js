function signup(){
    let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;

            if (password === confirmPassword) {
                alert("You have signed up successfully");
            } else {
                alert("Passwords do not match. Please try again.");
            }
}