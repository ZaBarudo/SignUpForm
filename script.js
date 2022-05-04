password =  document.querySelector("#pass");
conf_password = document.querySelector("#conf-pass");

conf_password.addEventListener("input", function (event) {
    // console.log(conf_password.value);
    if(conf_password.value != password.value){
        conf_password.setCustomValidity("Passwords do not match!");
        conf_password.reportValidity();
    }
    else{
        conf_password.setCustomValidity("");
    }
})