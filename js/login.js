function login(){
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
    var loginemail = document.getElementById("email").value;
    var loginpass = document.getElementById("password").value;
    if(loginemail != "" || loginpass != ""){
        if(loginemail == email && loginpass == password){
            sessionStorage.setItem("email",email);
            sessionStorage.setItem("password",password);
            location.href = "index.html"
        }
        else{
           document.getElementById("error").innertext = "Email or password is incorrect";
        }
    }
    else{
        document.getElementById("error").innerText = "You have 2 errors to fix.";
    }    
}    
// function login(){
//     var first = document.getElementById
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     var cpassword = document.getElementById("cpassword").value;
//     localStorage.setItem("email",email);    
//     localStorage.setItem("password",password);
//     localStorage.setItem("cpassword",password);
//     alert("Thank you for registeration.");
// }
