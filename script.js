let capchaGenerate = document.querySelector('button');

capchaGenerate.addEventListener('click', () => {
    // generate the cpacha
    function randomeNumberGeneration() {
        return Math.floor(Math.random() * 6 + 1)
    }

    let capcha = "";
    for (let i = 0; i < 4; i++) {
        capcha = capcha + randomeNumberGeneration();
    }

    // after generate the capcha showing that into the actual screen
    let b = document.getElementById("showCapcha");
    console.log(b);
    b.innerText = capcha;
    localStorage.setItem("systemGeneratedCapcha", capcha);
})

let signup = document.querySelector('#signup');
signup.addEventListener('click', () => {

    let userName = document.querySelector("#username").value;
    let passWord = document.querySelector("#password").value;
    localStorage.setItem("username", userName);
    localStorage.setItem("password", passWord);

    let userEnteredCapcha = document.querySelector('#userEnteredCapcha');

    if(localStorage.getItem("systemGeneratedCapcha") === userEnteredCapcha.value) {
        //
        alert("Signup Done Successfully");
        open('./login.html');
        resetForm();
    }
    else {
        //
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("systemGeneratedCapcha");
        alert("Signup Failed! Capcha or credentials were incorrect.");
        resetForm();

    }
}) 

function resetForm() {
    let userName = document.querySelector("#username");
    let passWord = document.querySelector("#password");
    let capcha  = document.querySelector("#showCapcha");
    let userEnteredCapcha = document.querySelector("#userEnteredCapcha");
    userName.value = '';
    passWord.value = '';
    userEnteredCapcha.value = '';
    capcha.textContent='----';
}
