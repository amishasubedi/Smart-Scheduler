// Import the functions you need from the SDKs you need
import { getDatabase, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCSs4IBLcuAbPNglp6j2pam-8KWGKiY8k8",
    authDomain: "when2meet-47db8.firebaseapp.com",
    databaseURL: "https://when2meet-47db8-default-rtdb.firebaseio.com",
    projectId: "when2meet-47db8",
    storageBucket: "when2meet-47db8.appspot.com",
    messagingSenderId: "619936460409",
    appId: "1:619936460409:web:0433468cacfadc746faea8",
    measurementId: "G-2Y9DFSFGQR"
};

function writeUserData(userId, name, email, imageURL) {
    // possible pass in app in getDatabase
    const db = getDatabase();
    const reference = ref(db, "users/" + userId);

    set(reference, {
        username: name,
        email: email,
        profile_picture: imageURL
    });
}


writeUserData("anishasingh", "Anisha Singh", "newanishasingh@gmail.com", "theImageURL");

const emailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const alertBox = document.querySelector(".alert-danger");
const loader = document.querySelector(".loader");
const contentContainer = document.querySelector("#content-container");

const auth = firebase.auth();
const db = firebase.firestore();

auth.onAuthStateChanged(user => {
    if (user) {
        window.location.assign("/calendar");
    } else {
        loader.classList.add("hide");
        loader.classList.remove("d-flex");
        contentContainer.classList.remove("hide");
    }
});

auth.useDeviceLanguage();

function signUp() {
    const email = emailInput.value;
    const password = passwordInput.value;
    auth.createUserWithEmailAndPassword(email, password)
        .then(user => {
            const userUid = user.user.uid;
            const account = {
                events: []
            };
            usersRef
                .doc(userUid)
                .set(account)
                .then(() => {
                    verifyUserEmail();
                    window.location.assign("/calendar");
                });
        })
        .catch(error => {
            alertBox.classList.remove("hide");
            alertBox.innerHTML = error.message;
            console.log("Error: " + error.message);
        });
}

function verifyUserEmail() {
    auth.currentUser.sendEmailVerification().then(() => {
        console.log("email sent");
    });
}