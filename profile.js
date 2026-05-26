import { auth }

from "./firebase.js";

import {

    onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

onAuthStateChanged(auth, (user) => {

    if(user){

        document.getElementById("emailText").innerText =
            user.email;

        document.getElementById("nickname").innerText =
            user.email.split("@")[0];

    }

    else{

        window.location.href = "index.html";

    }

});
