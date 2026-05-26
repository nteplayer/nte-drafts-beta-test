import { auth }

from "./firebase.js";

import {

    createUserWithEmailAndPassword,

    signInWithEmailAndPassword

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const loginBtn = document.getElementById("loginBtn");

const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    if(password.length < 6){

        alert("Password must contain at least 6 characters");

        return;
    }

    try{

        await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        alert("Account created successfully");

    }

    catch(error){

        alert(error.message);

    }

});

loginBtn.addEventListener("click", async () => {

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    try{

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href = "profile.html";

    }

    catch(error){

        alert(error.message);

    }

});
