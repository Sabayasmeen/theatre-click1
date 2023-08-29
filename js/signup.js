
function signup(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("email",email);    
    localStorage.setItem("password",password);
    localStorage.setItem("cpassword",password);
    alert("Thank you for registeration.");
 }
