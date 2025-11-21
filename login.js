let loginbutton = document.querySelector(".btn");

loginbutton.addEventListener('click', () => {

    let userNameFromDB = localStorage.getItem("username");
    let passWordFromDB = localStorage.getItem("password");


    let userNameFromUser = document.querySelector("#name").value;
    let passWordFromUser = document.querySelector("#password").value;


    if(userNameFromDB === userNameFromUser && passWordFromDB === passWordFromUser) {
        alert("Login successful");
        open("./todoapp.html");
        // localStorage.clear();
        loginFormReset();
    }
    else {
        alert("Login Failed! credentials were incorrect.");
        loginFormReset();
    }
})


let loginFormReset = () => {

    let userNameFromUser = document.querySelector("#name");
    let passWordFromUser = document.querySelector("#password");

    userNameFromUser.value = "";
    passWordFromUser.value = "";
}
